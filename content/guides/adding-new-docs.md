# Adding New Docs

This guide explains how to add, edit, or remove pages from this documentation site.

## How It Works

The site reads from **Markdown files** in the `content/` folder and a `manifest.json` that lists all pages. When you add a new doc, you:

1. Create a `.md` file in the right `content/` subfolder
2. Add an entry to `manifest.json`
3. Push to GitHub

That's it — the page appears on the site.

## Step-by-Step: Adding a New Service Doc

### 1. Create the Markdown File

Copy the template file and rename it:

```
content/services/MyNewService.md
```

### 2. Write the Content

Use this template structure:

```markdown
# MyNewService

Short description of what this service does.

## Overview

Longer explanation of the service's purpose, when to use it, and key concepts.

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `SomeSignal` | `Signal` | Fires when something happens |

## Methods

### MethodName

\`\`\`luau
function MyNewService:MethodName(player: Player, amount: number): boolean
\`\`\`

Description of what this method does.

**Parameters:**
- `player` — The target player
- `amount` — How much to add

**Returns:** `boolean` — Whether it succeeded

## Lifecycle Hooks

List which lifecycle hooks this service implements.

## Example Usage

\`\`\`luau
-- Example of using the service from another service
local MyNewService = require(ServerScriptService.Services.MyNewService)
MyNewService:MethodName(player, 100)
\`\`\`
```

### 3. Update manifest.json

Open `manifest.json` and add your page to the appropriate section:

```json
{
    "name": "services",
    "label": "Services",
    "pages": [
        ...existing pages...,
        { "title": "MyNewService", "file": "services/MyNewService.md" }
    ]
}
```

### 4. Push to GitHub

Commit and push your changes. The site will update automatically.

## Folder Organization

```
content/
├── guides/         -- Guides and tutorials
├── services/       -- Server-side service docs
├── controllers/    -- Client-side controller docs
├── utilities/      -- Utility module docs
└── classes/        -- Class docs (LogIn, Person, etc.)
```

## Markdown Features

The site's Markdown parser supports:

- **Headings** (H1-H4 with `#` through `####`)
- **Bold** (`**text**`) and *italic* (`*text*`)
- **Code blocks** with Luau syntax highlighting (use ` ```luau `)
- **Inline code** with backticks
- **Tables** (standard Markdown tables)
- **Lists** (ordered and unordered)
- **Links** (external and internal doc links)
- **Blockquotes** (with `>`)
- **Horizontal rules** (`---`)
- **Callouts** for info, warnings, tips, and danger notices

### Callout Syntax

```markdown
> [!INFO]
> This is an informational callout.

> [!WARNING]
> This is a warning callout.

> [!TIP]
> This is a helpful tip.

> [!DANGER]
> This is a danger/critical callout.
```

## Tips

- Keep page titles short and match the module name
- Always include at least an Overview section and a Methods section
- Use code examples liberally — they're the most useful part
- Link to related services/controllers when relevant using `[LinkText](services/OtherService.md)`
