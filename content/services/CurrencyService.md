# CurrencyService

Manages all in-game currencies, leaderstats, and currency transactions.

## Overview

CurrencyService provides a complete currency management system. It supports multiple currencies per player, automatic leaderstat creation, and fires signals on every change so other services can react.

Currency data is persisted through PlayerDataService and is loaded when the player's profile data is ready.

## Signals

| Signal | Description |
|--------|-------------|
| `AddedCurrency` | Fires on addedcurrency events |
| `RemovedCurrency` | Fires on removedcurrency events |
| `CurrencyChanged` | Fires on currencychanged events |
| `DataChanged` | Fires on datachanged events |
| `DataLoaded` | Fires on dataloaded events |

## Methods

### CreateCurrency

```luau
function Currency:CreateCurrency(player : Player, currencyName : string, startAmount : number?, isLeaderstat : boolean?) : CurrencyData?
```

---

### CreateCurrencies

```luau
function Currency:CreateCurrencies(player : Player, currencies : {string}) : CurrencyData?
```

---

### DestroyCurrency

```luau
function Currency:DestroyCurrency(player : Player, currencyName : string) : CurrencyData?
```

---

### ResetCurrency

```luau
function Currency:ResetCurrency(player : Player, currencyName : string, startAmount : number?, isLeaderstat : boolean?) : CurrencyData?
```

---

### GetData

```luau
function Currency:GetData(player : Player) : (CurrencyData?, number)
```

---

### _GetData

```luau
function Currency:_GetData(player : Player) : (CurrencyData?, number)
```

---

### DoesCurrencyExist

```luau
function Currency:DoesCurrencyExist(player : Player, currencyName : string) : boolean?
```

---

### GetAmount

```luau
function Currency:GetAmount(player : Player, currencyName : string) : (number, number)
```

---

### _GetAmount

```luau
function Currency:_GetAmount(player : Player, currencyName : string) : (number, number)
```

---

### CanPlayerAfford

```luau
function Currency:CanPlayerAfford(player : Player, currencyName : string, amountToCheck : number) : boolean
```

---

### SetAmount

```luau
function Currency:SetAmount(player : Player, currencyName : string, amountToSet : number) : number?
```

---

### Add

```luau
function Currency:Add(player : Player, currencyName : string, amountToAdd : number) : number?
```

---

### Subtract

```luau
function Currency:Subtract(player : Player, currencyName : string, amountToSubtract : number) : number?
```

---

### OnPlayerRemoving

```luau
function Currency:OnPlayerRemoving(player : Player)
```

---

### OnDataLoaded

```luau
function Currency:OnDataLoaded(player : Player, data : PlayerDataService.ProfileData)
```

---

### SelfDataChanged

```luau
function Currency:SelfDataChanged(player : Player, data : any)
```

---

### SelfCurrencyChanged

```luau
function Currency:SelfCurrencyChanged(player : Player, currencyName : string, currencyAmount : string)
```

---

### Init

```luau
function Currency:Init()
```

---

