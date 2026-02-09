# WinStreakService

Tracks player win streaks with revival support.

## Overview

WinStreakService tracks consecutive wins, highest streaks, and allows players to "revive" a broken streak by spending currency.

## Methods

### GetWinStreak

```luau
function Service:GetWinStreak(player : Player) : (WinStreak?, LastWinStreak?, HighestWinStreak?)
```

---

### EnableCheck

```luau
function Service:EnableCheck(player : Player)
```

---

### UpdateWinStreak

```luau
function Service:UpdateWinStreak(player : Player, addWin : boolean)
```

---

### AttemptReviveStreak

```luau
function Service:AttemptReviveStreak(player : Player, currencyType : ("Coins" | "Gems")?, forceRevive : boolean?) : (boolean, string?)
```

---

### _AttemptReviveStreak

```luau
function Service:_AttemptReviveStreak(player : Player, currencyType : ("Coins" | "Gems")) : (boolean, string?)
```

---

### OnCurrencyDataLoaded

```luau
function Service:OnCurrencyDataLoaded(player : Player, data : CurrencyService.CurrencyData)
```

---

### OnCharacterAdded

```luau
function Service:OnCharacterAdded(player : Player, character : Model)
```

---

### Init

```luau
function Service:Init()
```

---

