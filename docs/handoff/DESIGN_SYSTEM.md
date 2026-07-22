# DESIGN SYSTEM SPECIFICATION — KIZUNA (絆)

This document specifies the UI/UX design tokens, visual aesthetics, and typography guidelines for **Kizuna (絆)**, fully synchronized with the **Stitch MCP Generated Design System** (`projects/15551497821463621827`, Design System Asset: `assets/ebd92d678ae44c79ba783ad858a04c97`).

---

## 1. Core Visual Philosophy: Digital Scrapbook & Wabi-Sabi Sanctuary

Modern social media apps use dark metallic corporate gradients, hyper-intense blue checkmarks, and red notification badges designed to trigger dopamine spikes.

**Kizuna's Design Principles:**
1. **Paper & Warmth over Glass & Metal:** Built on warm off-white paper cream canvas (`#FCF9F8`), vintage Charcoal print text (`#2C2C2C`), and earthy Terracotta red (`#9D3D2C`).
2. **Tactile Scrapbook Cards:** Photos, voice notes, and letters in **Omoide** are styled like physical scrapbook pages with washi tape overlays (`rgba(232, 213, 183, 0.75)`), 3D tactile press buttons (`border-b-4 border-[#2c2c2c]`), and organic rotations (`rotate(-0.5deg)`).
3. **Four Core Mode Views:**
   * **Sanctuary (Sanctum):** Dunbar 15-friend cap manager & delivery cadence settings.
   * **Omoide (思い出):** 1-on-1 private scrapbooks, voice notes, sealed time capsules, and *Kizuna Wrapped*.
   * **Fireside:** 3–5 friend micro-circle living rooms with weekly prompt unveil mechanics.
   * **Shizuka (静か):** Intrapersonal solitude mode & reflection journal (zero-dopamine shield).

---

## 2. Color Tokens & Palette (Stitch Specification)

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| `background` / `surface` | `#FCF9F8` | Warm unbleached paper canvas |
| `primary` / `terracotta` | `#9D3D2C` | Warm clay red for brand & primary tactile 3D actions |
| `secondary` / `slate-blue` | `#4C616C` | Muted slate for tags, badges, and secondary metadata |
| `tertiary` / `mustard` | `#C7A938` | Highlight accent & sticky note headers |
| `on-surface` / `charcoal` | `#2C2C2C` | High-contrast vintage print text (avoids harsh `#000`) |
| `outline-variant` | `#DDC0BB` | Warm paper border and division rule tone |

---

## 3. Typography Hierarchy (Stitch Specification)

* **Display & Headings:** `Plus Jakarta Sans` (Bold 700 / ExtraBold 800) — Friendly, rounded geometry.
* **Body Text:** `Work Sans` (Regular 400 / Medium 500) — Clear, editorial reading.
* **Labels / Tags / Codes:** `Space Grotesk` (SemiBold 600 UPPERCASE) — Stamped label & typewriter aesthetic.

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Space+Grotesk:wght@500;600&family=Work+Sans:wght@400;500;600&display=swap');
```

---

## 4. Tactile Component Patterns

### 4.1 Tactile 3D Press Button
```css
.btn-tactile-primary {
  background-color: #9D3D2C;
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  border-bottom: 4px solid #2C2C2C;
  border-radius: 0.5rem;
  transition: transform 0.1s ease, border-width 0.1s ease;
}

.btn-tactile-primary:active {
  transform: translateY(2px);
  border-bottom-width: 2px;
}
```

### 4.2 Washi-Tape Scrapbook Card
```css
.scrapbook-card {
  position: relative;
  background: #FFFFFF;
  border: 1px solid #DDC0BB;
  border-radius: 0.75rem;
  padding: 20px;
  transform: rotate(-0.5deg);
  box-shadow: 4px 4px 12px rgba(44, 44, 44, 0.06);
}

.scrapbook-card::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 24px;
  width: 60px;
  height: 20px;
  background: rgba(232, 213, 183, 0.75);
  transform: rotate(-2deg);
  border: 1px dashed #C7A938;
}
```

---

*Design System Document for Team Antigravity | OGIS 2026*
