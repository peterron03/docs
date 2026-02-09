# DayNightService

Manages the day/night cycle with bindable callbacks.

## Overview

DayNightService runs a day/night cycle and lets you bind callbacks to specific times, sunrise, or sunset.

## Methods

### BindToTime

```luau
function Service:BindToTime(bindName : string, bindTime : number, callback : () -> ())
```

---

### UnbindFromTime

```luau
function Service:UnbindFromTime(bindName : string, bindTime : number, doNotSetNil : boolean?)
```

---

### BindSunrise

```luau
function Service:BindSunrise(bindName : string, callback : () -> ())
```

---

### UnbindSunrise

```luau
function Service:UnbindSunrise(bindName : string)
```

---

### BindSunset

```luau
function Service:BindSunset(bindName : string, callback : () -> ())
```

---

### UnbindSunset

```luau
function Service:UnbindSunset(bindName : string)
```

---

### Init

```luau
function Service:Init()
```

---

