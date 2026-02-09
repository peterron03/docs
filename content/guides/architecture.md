# Architecture Overview

This document provides a deep dive into how OverWork's module system, lifecycle, and communication layers work.

## High-Level Flow

```
┌──────────────────────────────────────────────────┐
│                     SERVER                        │
│                                                   │
│  Server.lua (bootstrap)                           │
│    ├── Requires all Services                      │
│    ├── Creates Client remotes                     │
│    ├── Calls :Init() on each service              │
│    ├── Connects PlayerDataService.DataLoaded      │
│    ├── Connects CurrencyService.DataLoaded        │
│    ├── Connects InventoryService.DataLoaded       │
│    └── Dispatches lifecycle hooks to all services  │
│                                                   │
│  GetFunction (RemoteFunction)                     │
│    └── Routes client calls to _Prefixed methods   │
│                                                   │
│  Controller RemoteEvents                          │
│    └── Routes to _On{Controller}{Event} methods   │
└───────────────────────┬──────────────────────────┘
                        │ RemoteEvents / RemoteFunction
┌───────────────────────┴──────────────────────────┐
│                     CLIENT                        │
│                                                   │
│  Client.lua (bootstrap)                           │
│    ├── Requires all Controllers                   │
│    ├── Calls :Init() on each controller           │
│    ├── Listens for Service remote events          │
│    ├── Hooks up UserInputService events           │
│    ├── Requests initial data via GetFunction      │
│    └── Dispatches lifecycle hooks to controllers   │
└──────────────────────────────────────────────────┘
```

## Module System

OverWork does **not** use a traditional framework like Knit. Instead, it uses a lightweight custom system built around convention:

### Service Registration

When the `Server` script starts, it does the following for each service:

```luau
for _, module in Services do
    if module:IsA("ModuleScript") then
        Modules[module.Name] = require(module)

        -- Create remote events from the Client table
        if type(Modules[module.Name].Client) == "table" then
            local newRemotesFolder = Instance.new("Folder")
            for _, remote in Modules[module.Name].Client do
                remote.Parent = newRemotesFolder
            end
            newRemotesFolder.Name = module.Name
            newRemotesFolder.Parent = Remotes
        end

        -- Call Init
        Modules[module.Name]:Init()
    end
end
```

This means every service's `Client` table becomes a folder of `RemoteEvent` instances under `ReplicatedStorage/Remotes/{ServiceName}/`.

### Function Dispatch

The `HandleFunction` system broadcasts lifecycle events to all modules:

```luau
local function HandleFunction(func, ...)
    for name, module in Modules do
        task.spawn(HandleFunctionFor, module, func, ...)
    end
end
```

Each call is wrapped in `task.spawn`, so services run their handlers concurrently without blocking each other.

### The `OnAny` Fallback

If a service doesn't have a specific handler but has an `OnAny` method, that will be called with the function name as the first argument. This is a catch-all pattern:

```luau
if type(module[func]) == "function" then
    return module[func](module, ...)
elseif type(module.OnAny) == "function" then
    task.spawn(module.OnAny, module, func, ...)
end
```

## Client-Server RPC

### Server → Client (Remote Events)

Services define events in their `Client` table using `Utils.createSignal()`:

```luau
Client = {
    DataLoaded = Utils.createSignal("DataLoaded"),
    CurrencyChanged = Utils.createSignal("CurrencyChanged"),
}
```

Fire them with standard Roblox API:

```luau
self.Client.DataLoaded:FireClient(player, data)
```

On the client, these are automatically routed. A `CurrencyService` remote named `DataLoaded` triggers `On{Currency}DataLoaded` on all controllers:

```luau
-- This happens automatically:
-- CurrencyService/DataLoaded fires → controllers get OnCurrencyDataLoaded(...)
```

### Client → Server (GetFunction)

The client uses a single `RemoteFunction` called `GetFunction`:

```luau
local result = GetFunction:InvokeServer("CurrencyService", "GetData")
```

On the server, this calls `CurrencyService:_GetData(player)`. The underscore prefix is added automatically.

> [!DANGER]
> **Security**: Any method prefixed with `_` is callable by the client. Always validate the `player` argument and never trust client input.

### Controller → Service (Controller Events)

Controllers can have `RemoteEvent` children. When fired from the client, the server routes them:

```luau
-- A RemoteEvent named "Clicked" under ClickerController
-- triggers _OnClickerClicked(player, ...) on all services
```

## Data Flow

### Player Data Lifecycle

```
Player Joins
    │
    ├── Server: OnPlayerAdded dispatched
    │
    ├── PlayerDataService:Load(player)
    │   └── ProfileStore session starts
    │       └── DataLoaded signal fires
    │
    ├── Server: OnDataLoaded dispatched
    │   ├── CurrencyService loads currency data
    │   │   └── CurrencyService.DataLoaded fires
    │   │       └── OnCurrencyDataLoaded dispatched
    │   │
    │   └── InventoryService loads inventory data
    │       └── InventoryService.DataLoaded fires
    │           └── OnInventoryDataLoaded dispatched
    │
    └── Client: Requests data via GetFunction
        ├── CurrencyService → GetData
        ├── InventoryService → GetData
        ├── RewardsService → GetLogInData
        └── ShopService → GetUserOwnedGamePasses
```

### Data Persistence

All data flows through `PlayerDataService`, which uses **ProfileStore** under the hood. Other services save their data by calling:

```luau
PlayerDataService:SetValue(player, "CurrencyData", data)
```

This writes into the player's profile, which is automatically saved by ProfileStore.

## Dependencies

OverWork uses these third-party packages:

| Package | Usage |
|---------|-------|
| **ProfileStore** | Player data persistence |
| **Cmdr** | Admin command framework |
| **Signal** | Custom event/signal system |
| **HeartBind** | Heartbeat-bound update loops |
| **Icon (TopbarPlus)** | Topbar icon management |
| **ObserveTag** | CollectionService tag observers |
| **ObserveAttribute** | Attribute change observers |
| **Maid** | Cleanup/disposal management |
| **Timer** | Countdown/timer utilities |
| **t** | Runtime type checking |
| **Lightning** | Lightning visual effects |
