# LootboxService

Manages lootbox/crate opening, rarity-based item drops, and luck boosts.

## Overview

LootboxService handles the entire lootbox system — defining lootboxes with rarity distributions, rolling for items, applying luck boosts from game passes, and managing the opening flow.

## Methods

### GetRarityPercentageFromRarities

```luau
function Lootbox:GetRarityPercentageFromRarities(rarity : string, rarities : {[string] : number}) : number
```

---

### GetFromChances

```luau
function Lootbox:GetFromChances(chances : {[string] : number})
```

---

### GetItemFromRarities

```luau
function Lootbox:GetItemFromRarities(items : {(ItemService.Item)}, rarities : {[string] : number}, usingNameInsteadOfRaritiy : string?) : ItemService.Item?
```

---

### LoadLootboxModels

```luau
function Lootbox:LoadLootboxModels(lootboxes : Folder)
```

---

### GetRarityChancesForPlayer

```luau
function Lootbox:GetRarityChancesForPlayer(player : Player, lootbox : Lootbox) : {[string] : number?}?
```

---

### _MarkOpened

```luau
function Lootbox:_MarkOpened(player : Player)
```

---

### AttemptOpen

```luau
function Lootbox:AttemptOpen(player : Player, lootboxName : string, useSecondaryCurrency : boolean?, forceOpen : boolean?, autoSell : boolean?, noAddItem : boolean?) : (boolean?, string? | ItemService.Item?)
```

---

### OnCurrencyDataLoaded

```luau
function Lootbox:OnCurrencyDataLoaded(player : Player, data : CurrencyService.CurrencyData)
```

---

### OnPlayerRemoving

```luau
function Lootbox:OnPlayerRemoving(player : Player)
```

---

### Init

```luau
function Lootbox:Init()
```

---

