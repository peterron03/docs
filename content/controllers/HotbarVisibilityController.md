# HotbarVisibilityController

Controls hotbar/backpack visibility based on needs.

## Overview

HotbarVisibilityController uses a "needs" system where multiple systems can request the hotbar to be shown/hidden, and the controller resolves conflicts.

## Methods

### AdjustHotbar

```luau
function HotbarVisibility:AdjustHotbar()
```

---

### AddNeed

```luau
function HotbarVisibility:AddNeed(needName : string, need : Need)
```

---

### RemoveNeed

```luau
function HotbarVisibility:RemoveNeed(needName : string)
```

---

### ChangeNeed

```luau
function HotbarVisibility:ChangeNeed(needName : string, propertyToChange : string, newValue : any)
```

---

### Init

```luau
function HotbarVisibility:Init()
```

---

