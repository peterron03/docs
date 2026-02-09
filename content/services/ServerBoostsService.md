# ServerBoostsService

Manages server-wide boost multipliers with timed durations.

## Overview

ServerBoostsService handles server-wide boosts (e.g., 2x coins, 3x XP) that affect all players. Boosts have durations and multipliers.

## Signals

| Signal | Description |
|--------|-------------|
| `BoostActivated` | Fires on boostactivated events |
| `BoostDeactivated` | Fires on boostdeactivated events |
| `BoostChanged` | Fires on boostchanged events |

## Methods

### ActivateBoost

```luau
function Boosts:ActivateBoost(boost : Boost)
```

---

### DeactivateBoost

```luau
function Boosts:DeactivateBoost(boostName : string)
```

---

### IncreaseBoostDuration

```luau
function Boosts:IncreaseBoostDuration(boostName : string, durationIncrease : number)
```

---

### SetMultiplier

```luau
function Boosts:SetMultiplier(boostName : string, multiplier : number, newDuration : number?)
```

---

### ChangeBoost

```luau
function Boosts:ChangeBoost(boostName : string, index : string, newValue : any)
```

---

### GetActiveBoostMultiplier

```luau
function Boosts:GetActiveBoostMultiplier(boostName : string) : number?
```

---

### _GetActiveBoostMultiplier

```luau
function Boosts:_GetActiveBoostMultiplier(player : Player, boostName : string) : number?
```

---

### GetActiveBoost

```luau
function Boosts:GetActiveBoost(boostName : string) : Boost?
```

---

### _GetActiveBoost

```luau
function Boosts:_GetActiveBoost(boostName : string) : Boost?
```

---

### IsBoostActive

```luau
function Boosts:IsBoostActive(boostName : string) : boolean
```

---

### _IsBoostActive

```luau
function Boosts:_IsBoostActive(boostName : string) : boolean
```

---

### GetActiveBoosts

```luau
function Boosts:GetActiveBoosts() : {[string] : Boost}
```

---

### _GetActiveBoosts

```luau
function Boosts:_GetActiveBoosts() : {[string] : Boost}
```

---

### Init

```luau
function Boosts:Init()
```

---

