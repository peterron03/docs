# ShopService

Handles purchases, game passes, gifting, shop rotation, and DevProducts.

## Overview

ShopService is one of the largest services in OverWork. It handles in-game currency purchases, Robux game passes, DevProducts, daily shop rotation, gifting between players, starter packs, and blacklisting/whitelisting.

## Signals

| Signal | Description |
|--------|-------------|
| `GamePassPurchaseFinished` | Fires on gamepasspurchasefinished events |
| `DevProductMessage` | Fires on devproductmessage events |

## Methods

### GetShopFolder

```luau
function Shop:GetShopFolder() : Folder
```

---

### SetSeed

```luau
function Shop:SetSeed(seed : number?)
```

---

### GetSeed

```luau
function Shop:GetSeed()
```

---

### SetAllItemsWith

```luau
function Shop:SetAllItemsWith(statName : string, statAmount : any, currencyType : string, itemTypes : {string}?, forSale : boolean?)
```

---

### SetCurrentShopItems

```luau
function Shop:SetCurrentShopItems(statName : string)
```

---

### GetCurrentShopItems

```luau
function Shop:GetCurrentShopItems()
```

---

### Blacklist

```luau
function Shop:Blacklist(player : Player)
```

---

### Unblacklist

```luau
function Shop:Unblacklist(player : Player)
```

---

### Whitelist

```luau
function Shop:Whitelist(player : Player)
```

---

### Unwhitelist

```luau
function Shop:Unwhitelist(player : Player)
```

---

### UserOwnsGamePass

```luau
function Shop:UserOwnsGamePass(player : Player, passId : (number | string), promptIfFalse : boolean?) : boolean
```

---

### _UserOwnsGamePass

```luau
function Shop:_UserOwnsGamePass(player : Player, passId : number, promptIfFalse : boolean?) : boolean
```

---

### GetUserOwnedGamePasses

```luau
function Shop:GetUserOwnedGamePasses(player : Player) : {[number] : string}
```

---

### _GetUserOwnedGamePasses

```luau
function Shop:_GetUserOwnedGamePasses(player : Player) : {[number] : string}
```

---

### GetAmountNeededForPrice

```luau
function Shop:GetAmountNeededForPrice(player : Player, currencyType : string, price : number) : number
```

---

### PromptIfPaidItemsNotRestricted

```luau
function Shop:PromptIfPaidItemsNotRestricted(player : Player, productId : number, productType : ("GamePass" | "Product"))
```

---

### _PromptIfPaidItemsNotRestricted

```luau
function Shop:_PromptIfPaidItemsNotRestricted(player : Player, productId : number, productType : ("GamePass" | "Product"))
```

---

### AttemptPurchaseShopItem

```luau
function Shop:AttemptPurchaseShopItem(player : Player, itemType : string, itemName : string, promptIfFalse : boolean?)
```

---

### PromptLowestProduct

```luau
function Shop:PromptLowestProduct(player : Player, currencyType : string, itemPrice : number, checkForPaidItemsRestricted : boolean?)
```

---

### AttemptSell

```luau
function Shop:AttemptSell(player : Player, itemType : string, itemName : string) : (boolean, string?)
```

---

### _AttemptSell

```luau
function Shop:_AttemptSell(player : Player, itemType : string, itemName : string) : (boolean, string?)
```

---

### AttemptPurchase

```luau
function Shop:AttemptPurchase(player : Player, itemType : string, itemName : string, equipOnPurchase : boolean?, useSecondaryCurrency : boolean?, noInventory : boolean?, promptLowestProduct : boolean?) : (boolean, string?)
```

---

### AttemptEquip

```luau
function Shop:AttemptEquip(player : Player, itemType : string, itemName : string)
```

---

### AddGiftCredit

```luau
function Shop:AddGiftCredit(player : Player, productId : number | string) : boolean
```

---

### RedeemGiftCredit

```luau
function Shop:RedeemGiftCredit(player : Player, productId : number | string) : boolean
```

---

### GetGiftCredit

```luau
function Shop:GetGiftCredit(player : Player, productId : number | string) : number?
```

---

### HasGiftCredit

```luau
function Shop:HasGiftCredit(player : Player, productId : number | string) : boolean
```

---

### GetNormalIdFromGiftId

```luau
function Shop:GetNormalIdFromGiftId(giftId : number, assetType : ("GamePass" | "Product")) : number?
```

---

### AttemptGift

```luau
function Shop:AttemptGift(player : Player, playerBeingGifted : Player, productId : number, productType : ("GamePass" | "Product"), productName : string?) : (boolean, string?)
```

---

### GiveGamePassItems

```luau
function Shop:GiveGamePassItems(player : Player)
```

---

### AttemptGiftPurchase

```luau
function Shop:AttemptGiftPurchase(player : Player, userBeingGifted : number, assetId : number) : (boolean, string?)
```

---

### _AttemptGiftPurchase

```luau
function Shop:_AttemptGiftPurchase(player : Player, userBeingGifted : number, assetId : number) : (boolean, string?)
```

---

### GetGiftCreditsFor

```luau
function Shop:GetGiftCreditsFor(player : Player, assetId : number) : number?
```

---

### OnCharacterAdded

```luau
function Shop:OnCharacterAdded(player : Player, character : Model)
```

---

### OnPlayerRemoving

```luau
function Shop:OnPlayerRemoving(player : Player)
```

---

### AttemptPurchaseStarterPack

```luau
function Shop:AttemptPurchaseStarterPack(player : Player)
```

---

### _AttemptPurchaseStarterPack

```luau
function Shop:_AttemptPurchaseStarterPack(player : Player)
```

---

### OnDataLoaded

```luau
function Shop:OnDataLoaded(player : Player, data : PlayerDataService.ProfileData)
```

---

### OnInventoryDataLoaded

```luau
function Shop:OnInventoryDataLoaded(player : Player, data : InventoryService.InventoryData)
```

---

### Init

```luau
function Shop:Init()
```

---

