# ClickerController

Raycasting-based click/hover detection system.

## Overview

ClickerController provides a click detection system using raycasts. You can bind callbacks to clicks and casts, with support for ignore lists and hover detection.

## Methods

### OnCast

```luau
function Clicker:OnCast(name : string, func : (RaycastResult : RaycastResult, DeltaTime : number) -> ())
```

---

### RemoveCast

```luau
function Clicker:RemoveCast(name : string)
```

---

### BindClicked

```luau
function Clicker:BindClicked(name : string, func : (objectBeingClicked : Instance) -> ())
```

---

### UnbindClicked

```luau
function Clicker:UnbindClicked(name : string)
```

---

### SetIgnoreList

```luau
function Clicker:SetIgnoreList(list : {Instance})
```

---

### AddToIgnoreList

```luau
function Clicker:AddToIgnoreList(instance : Instance)
```

---

### RemoveFromIgnoreList

```luau
function Clicker:RemoveFromIgnoreList(instance : Instance)
```

---

### OnInputBegan

```luau
function Clicker:OnInputBegan(inputObject : InputObject, gameProcessed : boolean)
```

---

### Init

```luau
function Clicker:Init()
```

---

