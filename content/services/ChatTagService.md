# ChatTagService

Manages player chat tags/badges next to names.

## Overview

ChatTagService handles the chat tags (colored badges) that appear next to player names in chat.

## Methods

### DoesPlayerHaveTag

```luau
function ChatTag:DoesPlayerHaveTag(player : Player, tag : string) : boolean
```

---

### FindTag

```luau
function ChatTag:FindTag(player : Player, tagName : string) : {Name : string, Color : Color3?}?
```

---

### AddTag

```luau
function ChatTag:AddTag(player : Player, tag : string, color : Color3?)
```

---

### RemoveTag

```luau
function ChatTag:RemoveTag(player : Player, tag : string)
```

---

### SetTags

```luau
function ChatTag:SetTags(player : Player, tags : {Tag : string})
```

---

### GetTags

```luau
function ChatTag:GetTags(player : Player, userId : number?) : {Tag : string?}?
```

---

### _GetTags

```luau
function ChatTag:_GetTags(player : Player, userId : number?) : {Tag : string?}?
```

---

### OnPlayerAdded

```luau
function ChatTag:OnPlayerAdded(player : Player)
```

---

### OnPlayerRemoving

```luau
function ChatTag:OnPlayerRemoving(player : Player)
```

---

### Init

```luau
function ChatTag:Init()
```

---

