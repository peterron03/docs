# ArenaService

Manages PvP arenas with teams, queuing, and lifecycle hooks.

## Overview

ArenaService provides a full arena/PvP system with Red/Blue teams, join/leave queuing, and a bindable function system for customizing arena behavior.

## Methods

### GetArenasFolder

```luau
function Service:GetArenasFolder() : Folder
```

---

### BindFunction

```luau
function Service:BindFunction(functionType : BindFunctionType, funcName : string, func : (arena : Arena, player : Player?) -> ())
```

---

### UnbindFunction

```luau
function Service:UnbindFunction(functionType : BindFunctionType, funcName : string)
```

---

### GetArenaFromModel

```luau
function Service:GetArenaFromModel(model : Model) : Arena?
```

---

### GetArenaWithPlayer

```luau
function Service:GetArenaWithPlayer(player : Player) : (Arena?, ArenaTeam?)
```

---

### GetTeamFromPlayer

```luau
function Service:GetTeamFromPlayer(player : Player, arena : Arena?) : ArenaTeam?
```

---

### AddObjectToArena

```luau
function Service:AddObjectToArena(arenaModel : Model, objectName : string, object : Instance, cframeOffset : CFrame?)
```

---

### RemoveObjectFromArena

```luau
function Service:RemoveObjectFromArena(arenaModel : Model, objectName : string, noDestroy : boolean?)
```

---

### StartArena

```luau
function Service:StartArena(arenaModel : Model, forceStart : boolean?)
```

---

### EndArena

```luau
function Service:EndArena(arenaModel : Model, endedFromErrorOnSetup : boolean?, forceEnd : boolean?)
```

---

### JoinArena

```luau
function Service:JoinArena(arenaModel : Model, playerJoining : Player, queueType : ArenaTeam, forceJoin : boolean?)
```

---

### LeaveArena

```luau
function Service:LeaveArena(playerLeaving : Player, forceLeave : boolean?)
```

---

### _JoinArena

```luau
function Service:_JoinArena(playerJoining : Player, arenaModel : Model, queueType : ArenaTeam)
```

---

### _LeaveArena

```luau
function Service:_LeaveArena(playerLeaving : Player)
```

---

### InitArenas

```luau
function Service:InitArenas()
```

---

### Init

```luau
function Service:Init()
```

---

