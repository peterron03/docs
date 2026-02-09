# LogIn

An OOP class that tracks daily login streaks for a player.

## Overview

The LogIn class is used by RewardsService to manage daily login reward state. It tracks the current day, day streak, and last login date, with signals for data changes.

## Constructor

```luau
local logIn = LogIn.new(player: Player, data: LogInData?)
```

Creates a new LogIn instance. If `data` is nil, starts fresh.

## Type: LogInData

```luau
type LogInData = {
    CurrentDay: number,
    DayStreak: number,
    LastDate: number | boolean,
}
```

## Methods

### HasDayPassed

```luau
function LogIn:HasDayPassed(multiplier: number?): boolean
```

Checks if enough time has passed since the last login (default 1 day).

### SetCurrentDay / AddDay

```luau
function LogIn:SetCurrentDay(newCurrent: number)
function LogIn:AddDay()
```

Sets or increments the current day counter.

### SetDayStreak

```luau
function LogIn:SetDayStreak(newStreak: number)
```

Sets the consecutive day streak.

### SetLastDate / GetLastDate

```luau
function LogIn:SetLastDate(newLast: number | boolean)
function LogIn:GetLastDate(): number | boolean
```

Gets or sets the last login timestamp.

### Destroy

```luau
function LogIn:Destroy()
```

Cleans up the LogIn instance.

## Signals

| Signal | Description |
|--------|-------------|
| `DataChanged` | Fires whenever login data is modified |
