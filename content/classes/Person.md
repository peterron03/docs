# Person

An OOP class for creating and managing NPC characters in the game world.

## Overview

The Person class creates NPC rig instances that can be spawned at positions, moved to locations, and destroyed. Used for in-game NPCs, cutscene characters, and more.

## Constructor

```luau
local person = Person.new(personData: PersonData?): Person
```

Creates a new Person instance from the provided data.

## Type: PersonData

```luau
type PersonData = {
    Name: string?,
    RigType: string?,
    Animations: {[string]: number}?,
    SpawnPoint: Vector3 | CFrame?,
}
```

## Type: Person

```luau
type Person = {
    Rig: Model,
    Maid: Maid,
    MoveToFinished: Signal,
    ClientEvent: Signal,
    Destroying: Signal,
}
```

## Methods

### SpawnAt

```luau
function Person:SpawnAt(spawnPoint: Vector3 | CFrame): Person
```

Spawns the NPC at a specific location. Returns self for chaining.

### MoveTo

```luau
function Person:MoveTo(movePoint: Vector3, lookAt: Vector3?, doNotLock: boolean?): () -> ()
```

Moves the NPC to a point using Humanoid:MoveTo. Optionally faces a direction. Returns a cancel function.

### Destroy

```luau
function Person:Destroy()
```

Destroys the NPC rig and cleans up all connections. Fires the `Destroying` signal.

## Signals

| Signal | Description |
|--------|-------------|
| `MoveToFinished` | Fires when the NPC reaches its move destination |
| `ClientEvent` | Generic signal for client-side events |
| `Destroying` | Fires when the Person is being destroyed |
