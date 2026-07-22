# AGENTS.MD — KIZUNA (絆) WORKSPACE & DESIGN CONTRACT

This repository houses **Kizuna (絆)**, the purposeful connection platform built for the **OGIS Philippines 2026 Competition** (*Theme: Tsunagaranai Kachi / Disconnected by Design*).

All AI agents, subagents, and developers contributing to this codebase **MUST** follow the design system and architectural contracts established below.

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
* **3D Press Buttons:** Primary buttons use Terracotta fill (`#9D3D2C`) with a thick 3px solid Charcoal bottom-border (`border-b-4 border-[#2c2c2c]`) for a satisfying 3D tactile press effect.
* **Organic Offsets:** Cards feature slight organic rotations (`transform: rotate(-0.5deg)` or `rotate(0.5deg)`) to feel manually placed on a physical paper scrapbook.
* **Washi-Tape Headers:** High-priority cards feature decorative translucent tape strips (`rgba(232, 213, 183, 0.75)`) at the corners.
* **Stamped Space Grotesk Tags:** Tags and timestamps use monospaced uppercase `Space Grotesk` with a subtle outline border.

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
* **Development Server:** `cd src && pnpm dev`
* **Production Build:** `cd src && pnpm run build` (Must pass with 0 errors before committing).

---

*Governing Contract for Team Antigravity Agents | July 2026*
