# LeaderboardService

Global leaderboard displays using OrderedDataStores.

## Overview

LeaderboardService creates and updates global leaderboards displayed in the game world using OrderedDataStores.

## Methods

### GetFolder

```luau
function Leaderboard:GetFolder() : Folder
```

---

### GetExample

```luau
function Leaderboard:GetExample() : Frame
```

---

### GetScrollingExample

```luau
function Leaderboard:GetScrollingExample() : ScrollingFrame
```

---

### GetCountryCode

```luau
function Leaderboard:GetCountryCode(player : Player) : string?
```

---

### UpdateLeaderboard

```luau
function Leaderboard:UpdateLeaderboard(leaderboardName : string)
```

---

### GetLeaderboards

```luau
function Leaderboard:GetLeaderboards(player : Player) : {Pages}
```

---

### OnPlayerRemoving

```luau
function Leaderboard:OnPlayerRemoving(player : Player)
```

---

### OnPlayerAdded

```luau
function Leaderboard:OnPlayerAdded(player : Player)
```

---

### OnDataLoaded

```luau
function Leaderboard:OnDataLoaded(player : Player, data : PlayerDataService.ProfileData)
```

---

### Init

```luau
function Leaderboard:Init()
```

---

