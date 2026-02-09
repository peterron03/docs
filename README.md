# OverWork Documentation

The documentation site for the OverWork Roblox game framework.

**Live at:** `https://peterron03.github.io/docs`

## Adding / Editing Docs

1. Create or edit a `.md` file in the appropriate `content/` subfolder:
   - `content/services/` — Server-side services
   - `content/controllers/` — Client-side controllers
   - `content/utilities/` — Shared utilities
   - `content/classes/` — OOP classes
   - `content/guides/` — Guides and tutorials

2. Add your page to `manifest.json` under the right section:
   ```json
   { "title": "MyNewService", "file": "services/MyNewService.md" }
   ```

3. Commit and push. The GitHub Action will deploy automatically.

## Running Locally

Just open `index.html` in a browser, or use a local server:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

## Build Script

To regenerate `manifest.json` from the content folder:

```bash
node build.js
```

This is also run automatically by the GitHub Action on every push.
