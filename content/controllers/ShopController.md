# ShopController

Client-side shop events and game pass tracking.

## Overview

ShopController listens for shop events like gift notifications and game pass ownership changes.

## Methods

### OnShopPlayerGifted

```luau
function Shop:OnShopPlayerGifted(otherPlayerName : string, productName : string, isBeingGifted : boolean?)
```

---

### OnShopUserOwnsGamePassChanged

```luau
function Shop:OnShopUserOwnsGamePassChanged(passId : number, isOwned : boolean)
```

---

### Init

```luau
function Shop:Init()
```

---

