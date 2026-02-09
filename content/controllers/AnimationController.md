# AnimationController

Client-side animation loading, playing, and management.

## Overview

AnimationController handles loading, playing, stopping, pausing, and destroying animations. It caches loaded AnimationTracks for reuse.

## Methods

### Load

```luau
function Anim:Load(animationId : number, animationName : string, humanoid : Humanoid?, playOnLoaded : boolean?, speed : number?, attempt : number?, callback : any?, ...) : AnimationTrack?
```

---

### Play

```luau
function Anim:Play(animationName : string, animationId : number?, speed : number?, humanoid : Humanoid?, ...) : AnimationTrack?
```

---

### Stop

```luau
function Anim:Stop(animationName : string) : AnimationTrack?
```

---

### Pause

```luau
function Anim:Pause(animationName : string) : AnimationTrack?
```

---

### SetSpeed

```luau
function Anim:SetSpeed(animationName : string, speed : number, animationId : number?, humanoid : Humanoid?) : AnimationTrack?
```

---

### GetLength

```luau
function Anim:GetLength(animationName : string, animationId : number?, humanoid : Humanoid?) : number?
```

---

### GetTrack

```luau
function Anim:GetTrack(animationName : string) : AnimationTrack?
```

---

### IsPlaying

```luau
function Anim:IsPlaying(animationName : string) : boolean?
```

---

### Destroy

```luau
function Anim:Destroy(animationName : string)
```

---

### Init

```luau
function Anim:Init()
```

---

