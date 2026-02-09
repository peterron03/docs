# LightingPriorityService

Priority-based Lighting property management.

## Overview

LightingPriorityService allows multiple systems to register Lighting property changes with priorities, preventing conflicts.

## Methods

### GetLightingObjectFromName

```luau
function Service:GetLightingObjectFromName(objectName : string) : Instance?
```

---

### ApplyRegisteredProperties

```luau
function Service:ApplyRegisteredProperties()
```

---

### Register

```luau
function Service:Register(name : string, info : RegistryInfo, noApply : boolean?)
```

---

### RegisterMultiple

```luau
function Service:RegisterMultiple(RegistryList : {{Name : string, Info : RegistryInfo}})
```

---

### Unregister

```luau
function Service:Unregister(name : string, noApply : boolean?)
```

---

### UnregisterMultiple

```luau
function Service:UnregisterMultiple(RegistryNames : {string})
```

---

### Init

```luau
function Service:Init()
```

---

