# CollisionService

Manages collision groups for player characters and objects.

## Overview

CollisionService provides a clean API for working with PhysicsService collision groups. It handles registration, assignment, and collision rules.

## Methods

### RegisterCollisionGroup

```luau
function Collision:RegisterCollisionGroup(group : string)
```

---

### IsCollisionGroupRegistered

```luau
function Collision:IsCollisionGroupRegistered(group : string) : boolean
```

---

### SetCollisionGroupCollidable

```luau
function Collision:SetCollisionGroupCollidable(group1 : string, group2 : string, canCollide : boolean)
```

---

### AddPartToCollisionGroup

```luau
function Collision:AddPartToCollisionGroup(part : BasePart, group : string)
```

---

### AddModelToCollisionGroup

```luau
function Collision:AddModelToCollisionGroup(model : Model, group : string)
```

---

### RemovePartFromCollisionGroup

```luau
function Collision:RemovePartFromCollisionGroup(part : BasePart)
```

---

### GetPartCollisionGroup

```luau
function Collision:GetPartCollisionGroup(part : BasePart) : string
```

---

### CanPartsCollide

```luau
function Collision:CanPartsCollide(part1 : BasePart, part2 : BasePart) : boolean
```

---

### OnCharacterAdded

```luau
function Collision:OnCharacterAdded(player : Player, character : Model)
```

---

### Init

```luau
function Collision:Init()
```

---

