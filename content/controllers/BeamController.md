# BeamController

Creates and manages beam visual effects.

## Overview

BeamController creates Beam instances with attachments, allowing you to attach beams between parts or create standalone beams with customizable properties.

## Methods

### Enable

```luau
function Beam:Enable(enabled : boolean?)
```

---

### Attach

```luau
function Beam:Attach(basePart : BasePart, enable : boolean?, properties : {BeamProperties : BeamProperties, Attachment0Properties : AttachmentProperties, Attachment1Properties : AttachmentProperties}?)
```

---

### Create

```luau
function Beam:Create(properties : {BeamProperties : BeamProperties, Attachment0Properties : AttachmentProperties, Attachment1Properties : AttachmentProperties}?) : (Beam?, Attachment?, Attachment?)
```

---

### Destroy

```luau
function Beam:Destroy()
```

---

### Init

```luau
function Beam:Init()
```

---

