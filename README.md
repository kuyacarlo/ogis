# 🌸 KIZUNA (絆) — PURPOSEFUL CONNECTION PLATFORM
### OGIS Contest 2026 Submission Workspace
**Theme:** *Tsunagaranai Kachi (つながらない価値) — Disconnected by Design*  
**Team:** Team Antigravity  

---

## 📌 PROJECT OVERVIEW

**Kizuna (絆)** is a purposeful connection platform designed to de-cluster social media bloatware. Moving away from corporate megaplatforms, infinite scroll algorithms, and vanity follower counters, **Kizuna redesigns digital relationships around intimacy, boundaries, and shared memory.**

```
 ┌──────────────────────────────────────────────────────────────────────────┐
 │                               KIZUNA (絆)                                │
 │                "Redesigning Connections: Narrow & Deep"                 │
 └────────────────────────────────────┬─────────────────────────────────────┘
                                      │
       ┌──────────────────────────────┼──────────────────────────────┐
       ▼                              ▼                              ▼
 ┌───────────┐                  ┌───────────┐                  ┌───────────┐
 │1. Sanctum │                  │ 2. Omoide │                  │3. Fireside│
 │ (15 Cap & │                  │ (思い出)  │                  │  (Circles)│
 │ Cadence)  │                  │ (Canvas)  │                  │           │
 └─────┬─────┘                  └─────┬─────┘                  └─────┬─────┘
       │                              │                              │
       └──────────────────────────────┼──────────────────────────────┘
                                      │
                                      ▼
                        ┌───────────────────────────┐
                        │ 4. Shizuka (静か) Shield  │
                        └───────────────────────────┘
```

---

## 📂 REPOSITORY DELIVERABLES MAP

### 1. 📄 Application Proposal Document (`docs/`)
* **[`docs/proposal.md`](docs/proposal.md):** Complete 6-page application proposal formatted for Calibri 10pt letter-size PDF submission.

### 2. 📊 Presentation Deck with Marp (`docs/marp/`)
* **[`docs/marp/deck.md`](docs/marp/deck.md):** 10-slide presentation deck in Marp Markdown format.
* **[`docs/marp/theme.css`](docs/marp/theme.css):** Custom Marp theme CSS with warm paper textures, Fredoka/Nunito typography, and ridge borders.
* **[`docs/marp/deck.html`](docs/marp/deck.html):** Standalone rendered HTML slide deck preview.

### 3. 📂 Handoff Documentation (`docs/handoff/`)
* **[`docs/handoff/README.md`](docs/handoff/README.md):** Overview of handoff documentation.
* **[`docs/handoff/ARCHITECTURE.md`](docs/handoff/ARCHITECTURE.md):** Technical architecture, Dunbar boundary mechanics, solitude queue algorithms, and PostgreSQL schemas.
* **[`docs/handoff/DESIGN_SYSTEM.md`](docs/handoff/DESIGN_SYSTEM.md):** Visual design system inspired by *Stimmie v3 Neocities Revival* and `ui-ux-pro-max-skill` design intelligence.
* **[`docs/handoff/IDEAS_OFFLOAD.md`](docs/handoff/IDEAS_OFFLOAD.md):** Offloaded ideas archive (comparing the initial 7 doc ideas vs the new unified Kizuna suite).

### 4. 🎨 Logo & Brand Assets (`logo/`)
* **[`logo/logo.svg`](logo/logo.svg):** Vector SVG logo featuring an interwoven Japanese knot emblem in terracotta red, slate blue, and cream gold.

### 5. 💻 Interactive Web Prototype MVP (`src/`)
* **[`src/`](src/):** Standalone Next.js/Vite React web application built with TailwindCSS.
* **Features:**
  * **Sanctuary View:** 15-friend inner circle manager + Stress-free delivery cadence selector (3x/wk, 5x/wk, Sunday Digest).
  * **Omoide View:** 1-on-1 private memory canvas, voice notes, and **"Kizuna Wrapped"** annual relationship reflection modal.
  * **Fireside View:** 3–5 friend Living Room with weekly prompt and simultaneous **"Unveil"**.
  * **Shizuka Toggle:** Solitude focus shield mode (zero dopamine badges).

---

## 🚀 RUNNING THE WEB PROTOTYPE LOCALLY

```bash
cd src
npm install
npm run dev
```

Visit `http://localhost:3000` to interact with the prototype.

---

*Team Antigravity | July 2026*
