# InventoryService

Manages player inventories, item ownership, and equipped items.

## Overview

InventoryService provides a full inventory system supporting multiple named inventories per player, item adding/removing, and both single-equip and multi-equip modes.

Each player's inventory data is structured as `{Inventories: {[name]: {items}}, Equipped: {[name]: equipped}}`.

## Signals

| Signal | Description |
|--------|-------------|
| `ItemAdded` | Fires on itemadded events |
| `ItemRemoved` | Fires on itemremoved events |
| `ItemEquipped` | Fires on itemequipped events |
| `ItemUnequipped` | Fires on itemunequipped events |
| `InventoryChanged` | Fires on inventorychanged events |
| `DataChanged` | Fires on datachanged events |
| `DataLoaded` | Fires on dataloaded events |

## Methods

### CreateInventory

```luau
function Inventory:CreateInventory(player : Player, inventoryName : string, starterItem : string?, allowMultipleEquipped : boolean?) : InventoryData?
```

---

### DestroyInventory

```luau
function Inventory:DestroyInventory(player : Player, inventoryName : string) : InventoryData?
```

---

### ResetInventory

```luau
function Inventory:ResetInventory(player : Player, inventoryName : string, starterItem : string?, allowMultipleEquipped : boolean?) : InventoryData?
```

---

### IsItemEquipped

```luau
function Inventory:IsItemEquipped(player : Player, inventoryName : string, itemName : string) : boolean
```

---

### GetData

```luau
function Inventory:GetData(player : Player) : (InventoryData?, number)
```

---

### _GetData

```luau
function Inventory:_GetData(player : Player) : (InventoryData?, number)
```

---

### GetInventory

```luau
function Inventory:GetInventory(player : Player, inventoryName : string) : (Inventory?, number)
```

---

### GetOwned

```luau
function Inventory:GetOwned(player : Player, inventoryName : string, itemName : string) : number
```

---

### FindItem

```luau
function Inventory:FindItem(player : Player, inventoryName : string, itemName : string) : number?
```

---

### _FindItem

```luau
function Inventory:_FindItem(player : Player, inventoryName : string, itemName : string) : number?
```

---

### AddItem

```luau
function Inventory:AddItem(player : Player, inventoryName : string, itemName : string) : InventoryData?
```

---

### RemoveItem

```luau
function Inventory:RemoveItem(player : Player, inventoryName : string, itemName : string) : InventoryData?
```

---

### GetEquipped

```luau
function Inventory:GetEquipped(player : Player, inventoryName : string) : string
```

---

### SetEquipped

```luau
function Inventory:SetEquipped(player : Player, inventoryName : string, equipped : any) : InventoryData?
```

---

### EquipItem

```luau
function Inventory:EquipItem(player : Player, inventoryName : string, itemName : string) : InventoryData?
```

---

### UnequipItem

```luau
function Inventory:UnequipItem(player : Player, inventoryName : string, itemName : string) : InventoryData?
```

---

### OnPlayerRemoving

```luau
function Inventory:OnPlayerRemoving(player : Player)
```

---

### OnDataLoaded

```luau
function Inventory:OnDataLoaded(player : Player, data : PlayerDataService.ProfileData)
```

---

### SelfDataChanged

```luau
function Inventory:SelfDataChanged(player : Player, data : any)
```

---

### Init

```luau
function Inventory:Init()
```

---

