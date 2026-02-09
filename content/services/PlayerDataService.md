# PlayerDataService

Handles player data persistence using ProfileStore and DataStoreService.

## Overview

PlayerDataService is the foundation of OverWork's data layer. It wraps **ProfileStore** for session-locked profile management and provides access to **OrderedDataStores** (for leaderboards) and standard **DataStores** (for non-profile data like bans).

All other data services (CurrencyService, InventoryService, etc.) store their data through PlayerDataService using `SetValue()` and `GetValue()`.

## Signals

| Signal | Description |
|--------|-------------|
| `DataChanged` | Fires on datachanged events |
| `DataLoaded` | Fires on dataloaded events |

## Methods

### UpdateOrderedDataFor

```luau
function PlayerData:UpdateOrderedDataFor(key : string, valueName : string, value : number)
```

---

### UpdateOrderedDataForPlayer

```luau
function PlayerData:UpdateOrderedDataForPlayer(player : Player, valueName : string, value : number)
```

---

### GetOrderedData

```luau
function PlayerData:GetOrderedData(valueName : string, ascending : boolean?, amount : number?) : DataStorePages?
```

---

### UpdateNormalDataForPlayer

```luau
function PlayerData:UpdateNormalDataForPlayer(player : Player, valueName : string, value : any)
```

---

### UpdateNormalDataWithUserId

```luau
function PlayerData:UpdateNormalDataWithUserId(userId : number, valueName : string, value : any)
```

---

### GetNormalDataForPlayer

```luau
function PlayerData:GetNormalDataForPlayer(userId : number, valueName : string) : any?
```

---

### SetValue

```luau
function PlayerData:SetValue(player : Player, valueName : string, value : any)
```

---

### GetValue

```luau
function PlayerData:GetValue(player : Player, valueName : string) : any?
```

---

### Load

```luau
function PlayerData:Load(player)
```

---

### OnPlayerAdded

```luau
function PlayerData:OnPlayerAdded(player : Player)
```

---

### OnPlayerRemoving

```luau
function PlayerData:OnPlayerRemoving(player : Player)
```

---

### Init

```luau
function PlayerData:Init()
```

---

