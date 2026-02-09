# ItemService

Manages item definitions, item lookup, and the items storage system.

## Overview

ItemService is the registry for all game items. Items are defined as ModuleScript children organized in type folders (e.g., Mallets, Lootboxes). Each item module returns a table with the item's properties.

On init, ItemService moves its child folders to ReplicatedStorage so clients can access item data.

## Methods

### GetItemsFolder

```luau
function Item:GetItemsFolder() : Folder
```

---

### GetItemTypes

```luau
function Item:GetItemTypes() : {string}
```

---

### _GetItemTypes

```luau
function Item:_GetItemTypes() : {string}
```

---

### FindItem

```luau
function Item:FindItem(itemType : string, itemName : string, itemTypeFolder : Folder?) : Item?
```

---

### IsItemForSale

```luau
function Item:IsItemForSale(itemType : string, itemName : string) : boolean
```

---

### GetItemData

```luau
function Item:GetItemData(itemType : string, itemName : string) : {stat : string}?
```

---

### GetAllItems

```luau
function Item:GetAllItems(itemType : string, checkForSale : boolean?, isTableOverArray : boolean?) : {itemForSale : Item?}
```

---

### GetNextAffordableItem

```luau
function Item:GetNextAffordableItem(itemType : string, price : number, currency : string?) : Item?
```

---

### GetArrayOfItems

```luau
function Item:GetArrayOfItems(itemType : string, items : {itemName : string}) : {item : Item?}?
```

---

### Init

```luau
function Item:Init()
```

---

