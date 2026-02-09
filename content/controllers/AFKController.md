# AFKController

Client-side AFK detection and state management.

## Overview

AFKController detects when the player goes idle and manages the AFK state, communicating with AFKService on the server.

## Methods

### SetAFK

```luau
function AFK:SetAFK(isAFK : boolean, isAuto : boolean)
```

---

### IsAFK

```luau
function AFK:IsAFK() : boolean
```

---

### OnInputEnded

```luau
function AFK:OnInputEnded()
```

---

### OnInputBegan

```luau
function AFK:OnInputBegan()
```

---

### Init

```luau
function AFK:Init()
```

---

