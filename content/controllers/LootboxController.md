# LootboxController

Client-side lootbox opening animation and display.

## Overview

LootboxController handles the visual side of lootbox openings — the spinning animation, result display, rarity effects, and chat alerts.

## Methods

### GetItemFromRarities

```luau
function Lootbox:GetItemFromRarities(items : {{[string] : any}}, rarities : {[string] : number}, usingNameInsteadOfRaritiy : string?) : {[string] : any}
```

---

### GetRarityChancesForPlayer

```luau
function Lootbox:GetRarityChancesForPlayer(lootbox : {[string] : any}) : {[string] : number?}?
```

---

### SendChatMessageAlert

```luau
function Lootbox:SendChatMessageAlert(playerName : string, lootboxName : string, itemType : string, itemName : string, rarity : string)
```

---

### HandleCrateOpened

```luau
function Lootbox:HandleCrateOpened()
```

---

### OpenCrate

```luau
function Lootbox:OpenCrate(crateName : string, winningItemType : string, winningItemName : string, displayRarity : boolean?, sellInfo : {CurrencyType : string, Amount : number}?, usingNameOverRarities : boolean?)
```

---

### OnLootboxLootboxOpened

```luau
function Lootbox:OnLootboxLootboxOpened(lootboxName : string, winningItemType : string, winningItemName : string, displayRarity : boolean?, sellInfo : {CurrencyType : string, Amount : number}?, usingNameOverRarities : boolean?)
```

---

### OnLootboxRarityOpened

```luau
function Lootbox:OnLootboxRarityOpened(playerOpeningName : string, lootboxName : string, itemType : string, itemName : string, itemRarity : string)
```

---

### OnShopUserOwnsGamePassChanged

```luau
function Lootbox:OnShopUserOwnsGamePassChanged(passId : number, isOwned : boolean)
```

---

### OnItemsLoaded

```luau
function Lootbox:OnItemsLoaded(items : {[string] : {[string] : {[string] : any}}})
```

---

### Init

```luau
function Lootbox:Init()
```

---

