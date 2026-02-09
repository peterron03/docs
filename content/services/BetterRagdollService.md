# BetterRagdollService

Improved ragdoll system with customizable settings.

## Overview

Provides a ragdoll system for R6 and R15 rigs with timed ragdolls, custom parameters, and automatic cleanup.

## Methods

### GetCharacterFromPlayerOrCharacter

```luau
function GetCharacterFromPlayerOrCharacter(playerOrCharacter : (Player | Model)) : Model?
```

---

### Ragdoll

```luau
function RagdollService:Ragdoll(playerOrCharacter : (Player | Model), ragdollDetails : RagdollDetails?, unRagdollAfter : number?) : boolean
```

---

### UnRagdoll

```luau
function RagdollService:UnRagdoll(playerOrCharacter : Player, debounce : number?) : boolean
```

---

### OnPlayerAdded

```luau
function RagdollService:OnPlayerAdded(player : Player)
```

---

### OnCharacterAdded

```luau
function RagdollService:OnCharacterAdded(player : Player, character : Model)
```

---

### OnCharacterRemoving

```luau
function RagdollService:OnCharacterRemoving(player : Player, character : Model)
```

---

### Init

```luau
function RagdollService:Init()
```

---

