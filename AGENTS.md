# AGENTS.MD — KIZUNA (絆) WORKSPACE & DESIGN CONTRACT

This repository houses **Kizuna (絆)**, the purposeful connection platform built for the **OGIS Philippines 2026 Competition** (*Theme: Tsunagaranai Kachi / Disconnected by Design*).

All AI agents, subagents, and developers contributing to this codebase **MUST** follow the design system, modular architecture, and component contracts established below.

---

## 🎨 DESIGN SYSTEM SOURCE OF TRUTH (STITCH MCP CONTRACT)

The visual design system for Kizuna is strictly governed by the **Stitch MCP Generated Design System** (`assets/ebd92d678ae44c79ba783ad858a04c97`).

**NEVER use generic corporate AI styles** (e.g. standard dark-blue gradients, metallic glow borders, or generic Inter/Roboto Tailwind components).

### 1. Color Palette Tokens
* **Background (Paper Cream):** `#FCF9F8` (Off-white warm paper canvas)
* **Primary Accent (Terracotta):** `#9D3D2C` (Warm clay red for brand & primary actions)
* **Secondary Accent (Slate Blue):** `#4C616C` (Cool slate for tags, badges & secondary links)
* **Highlight Accent (Mustard):** `#C7A938` (Sticky note & highlight accent)
* **Neutral Text (Charcoal):** `#2C2C2C` (High-contrast vintage print text, avoiding harsh `#000000`)
* **Border / Rule Tone:** `#DDC0BB` (Warm paper border)

### 2. Typography Contract (Stitch Specification)
* **Display / Headings:** `Plus Jakarta Sans` (Bold 700 / 800 — friendly, rounded geometry)
* **Body Reading Text:** `Work Sans` (Regular 400 / Medium 500 — clear, editorial reading)
* **Labels / Tags / Code:** `Space Grotesk` (Semi-bold 600 UPPERCASE — stamped label & typewriter nod)

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Space+Grotesk:wght@500;600&family=Work+Sans:wght@400;500;600&display=swap');
```

### 3. Tactile UI Component Rules
* **3D Press-Down Badges (`kz-badge-88x31`):** Retro 88x31 web badges use a 3D press-down hover action (`hover:translate-y-0.5`, `transform: translate(2.5px, 2.5px)` with shadow collapse) for physical tactile button feel.
* **Organic Offsets:** Cards feature slight organic rotations (`transform: rotate(-0.5deg)` or `rotate(0.5deg)`) to feel manually placed on a physical paper scrapbook.
* **Sticky Right Sidebar (`sticky top-6`):** Unified right sidebar must be sticky when scrolling down on long feed streams. The **`INNER CIRCLE` (Dunbar 15)** grid MUST be placed at the bottom/end of the sidebar list.
* **Grounded Human Marquee Reel:** Marquee scroller text must draw from authentic, human, quirky personal vibes (e.g., stimmie.dev's *"builder of quiet digital spaces ★ tea enthusiast ★ 35mm film hoarder"*).

---

## 📂 MODULAR COMPONENT ARCHITECTURE CONTRACT

**DO NOT create single giant monolithic files.** All code MUST be organized into decoupled, single-responsibility files under `src/`:

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx          # Top header, Hanko seal, 88x31 badges, nav
│   │   ├── Marquee.jsx         # Retro scrolling marquee reel
│   │   ├── RightSidebar.jsx    # Sticky right sidebar (Inner Circle at bottom)
│   │   └── Toast.jsx           # Notification toasts
│   ├── modals/
│   │   ├── PrivacyModal.jsx    # Privacy guarantee modal
│   │   ├── HelpModal.jsx       # Manifesto modal
│   │   ├── DunbarModal.jsx     # Dunbar 15 capacity boundary modal
│   │   └── AddNoteModal.jsx    # Scrapbook memory note modal
│   └── tabs/
│       ├── SanctuaryTab.jsx    # Un-curated timeline feed & log creator
│       ├── OmoideTab.jsx       # Dynamic scrapbook chapters & voice log player
│       ├── FiresideTab.jsx     # Weekly prompts & unveil board
│       └── ShizukaTab.jsx      # Intrapersonal solitude journal
├── data/
│   └── mockData.js             # Timeline posts, chapter archives, Dunbar grid, marquee pool
├── App.jsx                     # Clean main layout composer
└── main.jsx                    # Application entry point
```

---

## 🏛️ CORE PRODUCT ARCHITECTURE

Kizuna enforces a **Dual Interpersonal & Intrapersonal Framework**:

1. **Sanctuary (Interpersonal Boundary):** Hard cap of 15 active inner-circle friends + flexible delivery cadence (3x/week, 5x/week, Sunday Digest).
2. **Omoide (思い出) (Interpersonal Memory & Time Capsules):** 1-on-1 private scrapbooks, 60s voice journals, locked digital time capsules (sealed until future release dates), and *Kizuna Wrapped*.
3. **Fireside (Micro-Circles):** 3–5 friend private living rooms with weekly reflective prompts and simultaneous answer reveals (*Unveil*).
4. **Shizuka (静か) (Intrapersonal Solitude & Night Mode):** Self-reflection journal space for personal balance, zero dopamine badges, and full warm paper dark mode.

---

## ⚙️ BUILD & VERIFICATION CONTRACT

* **Package Manager:** `pnpm`
* **Development Server:** `pnpm dev`
* **Production Build:** `pnpm run build` (Must pass with 0 errors before committing).
* **Vercel Deployment:** Configured via root `vercel.json` and `.github/workflows/ci.yml`.

---

*Governing Contract for Team Antigravity Agents | July 2026*
