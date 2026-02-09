# Dependencies

An overview of third-party packages used by OverWork.

## Active Packages

These packages are actively used by OverWork services and controllers:

| Package | Used By | Purpose |
|---------|---------|---------|
| **Signal** | Most services/controllers | Custom event/signal system |
| **HeartBind** | Server, multiple services/controllers | Heartbeat-bound update loops |
| **Cmdr** | ModerationService, ModerationController | Admin command framework |
| **ProfileStore** | PlayerDataService | Player data persistence |
| **Icon (TopbarPlus)** | Client UI | Topbar icon management |
| **ObserveTag** | ClickerController, PersonController, DialogueController, TutorialController, LootboxController, KeybindsController | CollectionService tag observers |
| **ObserveAttribute** | AFKController, PersonController, DialogueController, TutorialController, ShopController | Attribute change observers |
| **Maid** | Person class | Cleanup/disposal management |
| **Timer** | ServerBoostsService | Countdown/timer utilities |
| **t** | Various | Runtime type checking |
| **Lightning** | Visual effects | Lightning visual effects |

## Unused Packages (Safe to Remove)

These packages are present in the Packages folder but are **not imported** by any OverWork code:

- **Component** — Knit ecosystem component system
- **EnumList** — Knit ecosystem enum utility
- **Promise** — Knit ecosystem Promise implementation
- **RunBind** — Heartbeat binding (replaced by HeartBind)
- **Slider** — UI slider component
- **Streamable** — Knit ecosystem streaming utility
- **TableUtil** — Knit ecosystem table utilities
- **Trove** — Knit ecosystem cleanup utility (Maid is used instead)
- **WindLines** — Wind visual effect lines
- **Comm** — Knit ecosystem client/server communication
- **Input** — Knit ecosystem input handling
- **Option** — Knit ecosystem Option type

> [!TIP]
> These are mostly remnants of the **Knit framework** that OverWork has moved away from. They can be safely deleted from `ReplicatedStorage/Packages/` to reduce place file size.
