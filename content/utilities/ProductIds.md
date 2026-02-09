# ProductIds

A lookup table mapping product names to their Roblox product IDs.

## Overview

ProductIds is a simple dictionary used by ShopService and other modules to reference DevProduct and GamePass IDs by name instead of raw numbers.

## Usage

```luau
local ProductIds = require(ReplicatedStorage.Utilities.ProductIds)

-- Access a product ID by name
local coinPackId = ProductIds["100Coins"]
```
