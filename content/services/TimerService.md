# TimerService

Manages server-side countdown timers.

## Overview

TimerService tracks named timers with end ticks, names, and display information. Timers are replicated to clients.

## Methods

### GetTimerByProperty

```luau
function Timer:GetTimerByProperty(property : string, value : any) : (Timer?, number)
```

---

### AddTimer

```luau
function Timer:AddTimer(timer : Timer)
```

---

### RemoveTimer

```luau
function Timer:RemoveTimer(timerNameOrEndTick : (string | number))
```

---

### AdjustTimer

```luau
function Timer:AdjustTimer(timerNameOrEndTick : (string | number), property : string, newValue : any)
```

---

### GetTimer

```luau
function Timer:GetTimer(timerName : string) : Timer?
```

---

### GetAllTimers

```luau
function Timer:GetAllTimers()
```

---

### _GetAllTimers

```luau
function Timer:_GetAllTimers() : {Timer}
```

---

### Init

```luau
function Timer:Init()
```

---

