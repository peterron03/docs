# AFKService

Manages AFK detection and overhead indicators.

## Overview

AFKService adds an AFK indicator above player characters and manages the AFK state attribute.

## Methods

### AddAFKOverhead

```luau
function AFK:AddAFKOverhead(player : Player, character : Model)
```

---

### _SetAFK

```luau
function AFK:_SetAFK(player : Player, isAFK : boolean)
```

---

### OnCharacterAdded

```luau
function AFK:OnCharacterAdded(player : Player, character : Model)
```

---

### Init

```luau
function AFK:Init()
```

---

