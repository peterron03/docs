# ModerationService

Admin system built on Cmdr with ban/mute/kick functionality.

## Overview

ModerationService integrates **Cmdr** to provide a full admin command suite. It handles player banning (via DataStore), muting, kicking, and permission checks.

Commands include: ban, unban, mute, unmute, kick, give, take, add, remove, set, equip, joinuser, startarena, endarena, gamepass management, makeannouncement, reviveStreak, and more.

## Methods

### LogAction

```luau
function Moderation:LogAction(suspect : {Name : string, Id : number | string}, doneBy : {Name : string, Id : number}, action : string?, reason : string?)
```

---

### IsPlayerWhitelisted

```luau
function Moderation:IsPlayerWhitelisted(player : Player, forCommand : string?) : boolean
```

---

### _IsPlayerWhitelisted

```luau
function Moderation:_IsPlayerWhitelisted(player : Player, forCommand : string?) : boolean
```

---

### KickPlayer

```luau
function Moderation:KickPlayer(player : Player, userKicking : string, msg : string?, isBan : boolean?) : (boolean, string?)
```

---

### UpdateMutedPlayers

```luau
function Moderation:UpdateMutedPlayers()
```

---

### MutePlayer

```luau
function Moderation:MutePlayer(player : Player, reason : string?, fromPlayer : Player?) : (boolean, string?)
```

---

### UnmutePlayer

```luau
function Moderation:UnmutePlayer(player : Player, reason : string?, fromPlayer : Player?) : (boolean, string?)
```

---

### BanPlayer

```luau
function Moderation:BanPlayer(userId : number, userBanning : string, msg : string?, bypassLogAction : boolean?) : (boolean, string?)
```

---

### UnbanPlayer

```luau
function Moderation:UnbanPlayer(userId : number, playerUnbanning : Player) : (boolean, string?)
```

---

### OnPlayerAdded

```luau
function Moderation:OnPlayerAdded(player : Player)
```

---

### OnPlayerRemoving

```luau
function Moderation:OnPlayerRemoving(player : Player)
```

---

### Init

```luau
function Moderation:Init()
```

---

