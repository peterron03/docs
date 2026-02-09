# Utils

A comprehensive utility library with helper functions used across the framework.

## Overview

Utils is the most widely-used module in OverWork, required by nearly every service and controller. It provides helpers for math, formatting, input detection, badges, sounds, and more.

## Functions

### isFriendsWith

```luau
function Utils.isFriendsWith(player: Player, userId: number, defaultOnFail: boolean?): boolean
```

Checks if a player is friends with a given userId. Returns `defaultOnFail` (default false) if the API call fails.

---

### createSignal

```luau
function Utils.createSignal(eventName: string, remotes: Folder?): RemoteEvent
```

Creates a new RemoteEvent instance. This is used by services to define their `Client` table events.

---

### registerDebounce

```luau
function Utils.registerDebounce(player: Player, func: () -> any, delayTime: number?): (boolean, any?)
```

Runs a function with a per-player debounce. Returns `(success, result)`. Default delay is 0.1 seconds.

---

### isPrivateServer

```luau
function Utils.isPrivateServer(): boolean
```

Returns true if the current server is a VIP/private server.

---

### lerpColor

```luau
function Utils.lerpColor(color1: Color3, color2: Color3, alpha: number): Color3
```

Linearly interpolates between two Color3 values.

---

### lerp / quadraticBezier

```luau
function Utils.lerp(a: Vector3, b: Vector3, t: number): Vector3
function Utils.quadraticBezier(a: Vector3, b: Vector3, c: Vector3, t: number): Vector3
```

Vector3 interpolation and quadratic bezier curve calculation.

---

### playTempSoundClone

```luau
function Utils.playTempSoundClone(sound: Sound, destroyAfter: number?, parent: Instance?)
```

Clones a sound, plays it, and auto-destroys it after the specified time (default 5s).

---

### getHRPAndHumanoidFromPlayer

```luau
function Utils.getHRPAndHumanoidFromPlayer(player: Player): (BasePart, Humanoid)
```

Safely gets HumanoidRootPart and Humanoid from a player's character.

---

### commaValue

```luau
function Utils.commaValue(n: number): string
```

Formats a number with commas (e.g., `1234567` → `"1,234,567"`).

---

### formatNumber

```luau
function Utils.formatNumber(n: number, onlyIfHigherThan: number?, noCommas: boolean?): string | number
```

Formats large numbers with suffixes (K, M, B, T, q, Q, s, S, O, N, d, U, D, t).

---

### convertToHMS / convertToDHMS

```luau
function Utils.convertToHMS(sec: number, includeDecimals: boolean?): string
function Utils.convertToDHMS(sec: number, includeDecimals: boolean?): string
```

Converts seconds to `HH:MM:SS` or `DD:HH:MM:SS` format.

---

### roundNumber / roundToNearest / toNewRange

```luau
function Utils.roundNumber(n: number, numberOfDecimalPlaces: number?): number
function Utils.roundToNearest(x: number, mult: number): number
function Utils.toNewRange(n: number, oldMin: number, oldMax: number, min: number, max: number): number
```

Number rounding and range remapping utilities.

---

### isMobile / getLastInput

```luau
function Utils.isMobile(): boolean
function Utils.getLastInput(): ("touch" | "mouse" | "controller")?
```

Input detection helpers.

---

### playerOwnsBadge / awardBadge

```luau
function Utils.playerOwnsBadge(player: Player, badgeId: number): boolean
function Utils.awardBadge(player: Player, badgeId: number, timeDelay: number?): boolean
```

Badge utilities with caching and error handling. `awardBadge` retries once on failure.

---

### getCountryCode / getCountryEmojiFromCode

```luau
function Utils.getCountryCode(player: Player): string?
function Utils.getCountryEmojiFromCode(code: string): string?
```

Gets a player's country code and converts it to a flag emoji using Unicode regional indicators.

---

### getPolygonFromBarriers / isPointInsidePolygon

```luau
function Utils.getPolygonFromBarriers(barriers): {Vector2}
function Utils.isPointInsidePolygon(point, polygon): boolean
```

Geometry utilities for creating convex hulls from parts and checking point-in-polygon.

---

### Other Functions

- `isEffect(e)` — Returns true if the instance is a visual effect (ParticleEmitter, Fire, Trail, Beam, Smoke, Highlight)
- `iterPageItems(pages)` — Coroutine iterator for DataStorePages
- `getRandomValuesFromArray(array, min, max, increasedChance?)` — Gets random values with optional weighted bias
- `getPlayerFromString(str)` — Finds a player by partial name match
- `canSendGameInvite(player)` — Checks if the player can send game invites
- `isInGroupAsync(userId, groupId)` — Checks group membership
- `sendNotification(title, message, icon?, button1?, button2?, callback?)` — Sends a CoreGui notification
- `runFunctionWithBindableEvent(func)` — Runs a function via BindableEvent for error isolation
