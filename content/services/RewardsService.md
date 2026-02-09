# RewardsService

Manages daily login rewards, play time rewards, and battle pass progression.

## Overview

RewardsService handles three reward systems: daily login streaks (powered by the LogIn class), play-time-based rewards, and a battle pass system.

## Methods

### GetPlayTimeRequirements

```luau
function Rewards:GetPlayTimeRequirements() : {number}
```

---

### GetBattlePassRequirements

```luau
function Rewards:GetBattlePassRequirements() : {number}
```

---

### AttemptClaim

```luau
function Rewards:AttemptClaim(player : Player, rewardType : string, currentReward : any) : boolean?
```

---

### _AttemptClaim

```luau
function Rewards:_AttemptClaim(player : Player, rewardType : string, currentReward : any) : boolean?
```

---

### GetFriendsOfPlayer

```luau
function Rewards:GetFriendsOfPlayer(player : Player) : {Player}
```

---

### _GetLogInData

```luau
function Rewards:_GetLogInData(player : Player) : LogIn.LogInData?
```

---

### OnPlayerAdded

```luau
function Rewards:OnPlayerAdded(player : Player)
```

---

### OnPlayerRemoving

```luau
function Rewards:OnPlayerRemoving(player : Player)
```

---

### OnDataLoaded

```luau
function Rewards:OnDataLoaded(player : Player, data : PlayerDataService.ProfileData)
```

---

### Init

```luau
function Rewards:Init()
```

---

