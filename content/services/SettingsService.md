# SettingsService

Manages per-player game settings.

## Overview

SettingsService stores and retrieves player-specific settings that persist between sessions.

## Methods

### Update

```luau
function Settings:Update(player : Player, setting : string, value : (string | number)) : (boolean, string?)
```

---

### Get

```luau
function Settings:Get(player : Player) : {setting : (string | number)}?
```

---

### GetSetting

```luau
function Settings:GetSetting(player : Player, setting : string) : (string | number)?
```

---

### _Update

```luau
function Settings:_Update(player : Player, setting : string, value : (string | number)) : (boolean, string?)
```

---

### _Get

```luau
function Settings:_Get(player : Player) : {setting : (string | number)}?
```

---

### _GetSetting

```luau
function Settings:_GetSetting(player : Player, setting : string) : (string | number)?
```

---

### DataChanged

```luau
function Settings:DataChanged(player : Player, data : any)
```

---

### OnDataLoaded

```luau
function Settings:OnDataLoaded(player : Player, data : any)
```

---

### OnPlayerRemoving

```luau
function Settings:OnPlayerRemoving(player : Player)
```

---

### Init

```luau
function Settings:Init()
```

---

