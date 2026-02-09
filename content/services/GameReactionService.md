# GameReactionService

Tracks game likes/dislikes and triggers community goals.

## Overview

GameReactionService monitors the game's like/dislike counts and triggers configurable goals when thresholds are met.

## Signals

| Signal | Description |
|--------|-------------|
| `DataUpdated` | Fires on dataupdated events |
| `GoalReached` | Fires on goalreached events |

## Methods

### GetLastDataRefresh

```luau
function Service:GetLastDataRefresh() : ReactionData?
```

---

### GetNextGoal

```luau
function Service:GetNextGoal(goalName : string) : {Amount : number, Reward : string}?
```

---

### GetData

```luau
function Service:GetData()
```

---

### Init

```luau
function Service:Init()
```

---

