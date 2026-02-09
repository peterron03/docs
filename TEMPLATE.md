# ModuleName

Short one-line description of what this module does.

## Overview

Longer explanation of the module's purpose, when to use it, key concepts, and how it fits into the OverWork framework.

## Signals

| Signal | Description |
|--------|-------------|
| `SignalName` | When this signal fires and what data it passes |

## Methods

### MethodName

```luau
function ModuleName:MethodName(param1: Type, param2: Type?): ReturnType
```

Description of what this method does, when to use it, and any important notes.

**Parameters:**
- `param1` — Description of the parameter
- `param2` — (Optional) Description

**Returns:** `ReturnType` — Description of return value

---

### AnotherMethod

```luau
function ModuleName:AnotherMethod(): boolean
```

Description.

---

## Lifecycle Hooks

This module implements:
- `OnPlayerAdded` — What it does when a player joins
- `OnPlayerRemoving` — Cleanup behavior

## Client-Callable Methods

- `_MethodName` — callable as `GetFunction:InvokeServer("ModuleName", "MethodName")`

## Example Usage

```luau
-- From another service:
local ModuleName = require(ServerScriptService.Services.ModuleName)
ModuleName:MethodName(player, value)

-- From the client:
local result = GetFunction:InvokeServer("ModuleName", "MethodName", arg1)
```

## Related

- [RelatedService](services/RelatedService.md)
- [RelatedController](controllers/RelatedController.md)
