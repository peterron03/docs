# Getting Started

Welcome to the OverWork framework documentation. This guide will walk you through how OverWork is organized and how to start building with it.

## What is OverWork?

OverWork is a modular Roblox game framework built by **@TheAlmightyForehead**. It provides a clean separation between server-side **Services** and client-side **Controllers**, with a shared **Utilities** layer and automatic lifecycle management.

The framework handles the boilerplate of wiring up remote events, loading player data, and dispatching lifecycle hooks — so you can focus on building game features.

## Project Structure

Here's how OverWork is organized inside your Roblox place:

```
ServerScriptService/
├── Server              -- Server bootstrap script
├── Services/           -- All server-side modules
│   ├── PlayerDataService
│   ├── CurrencyService
│   ├── InventoryService
│   ├── ShopService
│   └── ... (25+ services)
└── Classes/            -- Reusable OOP classes
    ├── LogIn
    └── Person

ReplicatedStorage/
├── Controllers/        -- All client-side modules
│   ├── AnimationController
│   ├── ClickerController
│   ├── LootboxController
│   └── ... (17 controllers)
├── Utilities/          -- Shared utility modules
│   ├── Utils
│   ├── ProductIds
│   ├── RarityColors
│   └── ...
└── Packages/           -- Third-party libraries

StarterPlayer/
└── StarterPlayerScripts/
    └── Client          -- Client bootstrap script
```

## How It Works

### Server Side

The `Server` script in ServerScriptService is the entry point. On startup, it:

1. Iterates through all `ModuleScript` children in the `Services` folder
2. Calls `require()` on each one
3. Sets up any `Client` remote events defined in the service
4. Calls the `:Init()` method on each service
5. Connects lifecycle events (`OnPlayerAdded`, `OnDataLoaded`, etc.)

### Client Side

The `Client` script in StarterPlayerScripts mirrors this:

1. Iterates through all `ModuleScript` children in the `Controllers` folder
2. Calls `require()` on each one
3. Calls the `:Init()` method on each controller
4. Hooks up remote event listeners and input events
5. Requests initial data from the server (currency, inventory, etc.)

## Creating a New Service

To add a new service to OverWork:

1. Create a new `ModuleScript` inside `ServerScriptService/Services/`
2. Follow this basic template:

```luau
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Utils = require(ReplicatedStorage.Utilities.Utils)

local MyService = {
    -- Define client-facing remote events
    Client = {
        SomeEvent = Utils.createSignal("SomeEvent"),
    }
}

function MyService:Init()
    print(script.Name .. " initialized")
end

function MyService:OnPlayerAdded(player)
    -- Called when a player joins
end

function MyService:OnPlayerRemoving(player)
    -- Called when a player leaves
end

return MyService
```

3. The `Server` script will automatically pick it up on the next server start.

## Creating a New Controller

Controllers work the same way on the client:

1. Create a new `ModuleScript` inside `ReplicatedStorage/Controllers/`
2. Use this template:

```luau
local Controller = {}

function Controller:Init()
    print(script.Name .. " initialized")
end

function Controller:OnLocalCharacterAdded(character)
    -- Called when the local player's character loads
end

function Controller:OnInputBegan(inputObject, gameProcessed)
    -- Called on any user input
end

return Controller
```

## Client-Server Communication

OverWork uses a naming convention for communication:

- **Server → Client**: Services define `RemoteEvent` objects in their `Client` table. Use `:FireClient(player, ...)` to send data.
- **Client → Server**: The client uses `GetFunction:InvokeServer(serviceName, functionName, ...)` to call server functions that start with `_` (underscore).

> [!WARNING]
> Any function starting with `_` on a service can be called by the client. Never put sensitive logic in underscore-prefixed functions without proper validation.

## Lifecycle Hooks

Both services and controllers can implement these lifecycle methods:

| Hook | Side | Called When |
|------|------|------------|
| `Init()` | Both | Module is first loaded |
| `OnPlayerAdded(player)` | Server | A player joins the game |
| `OnPlayerRemoving(player)` | Server | A player leaves the game |
| `OnCharacterAdded(player, character)` | Server | A character spawns |
| `OnCharacterRemoving(player, character)` | Server | A character is removed |
| `OnDataLoaded(player, data)` | Server | PlayerDataService loads profile |
| `OnCurrencyDataLoaded(player, data)` | Both | Currency data is ready |
| `OnInventoryDataLoaded(player, data)` | Both | Inventory data is ready |
| `OnLocalCharacterAdded(character)` | Client | Local player's character loads |
| `OnInputBegan(input, processed)` | Client | Any user input starts |
| `OnInputEnded(input, processed)` | Client | Any user input ends |

## Next Steps

- Read the [Architecture Overview](guides/architecture.md) for a deeper dive
- Explore individual [Services](services/PlayerDataService.md) and [Controllers](controllers/AnimationController.md)
- Check out the [Utilities](utilities/Utils.md) reference
