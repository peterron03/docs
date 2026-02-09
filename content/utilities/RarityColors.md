# RarityColors

Maps rarity names to their display colors.

## Overview

Used by LootboxService and LootboxController to color items based on their rarity tier.

## Usage

```luau
local RarityColors = require(ReplicatedStorage.Utilities.RarityColors)

local color = RarityColors["Legendary"] -- returns a Color3
```
