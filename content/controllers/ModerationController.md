# ModerationController

Client-side moderation state.

## Overview

ModerationController tracks the player's moderation status (whitelisted, muted, etc.) and initializes Cmdr on the client.

## Methods

### IsPlayerWhitelisted

```luau
function Moderation:IsPlayerWhitelisted() : boolean
```

---

### OnModerationPlayerMuted

```luau
function Moderation:OnModerationPlayerMuted(isMuted : boolean, reason : string?)
```

---

### Init

```luau
function Moderation:Init()
```

---

