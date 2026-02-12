# On Code IT - Design System

## 1. Core Principles
- **Aesthetic**: "Cyber-Industrial", "High-Tech", "Terminal-Chic".
- **Vibe**: Robust corporate IT meets bleeding-edge AI. Dark, sleek, efficient.
- **Motion**: Snap, glitch effects, smooth terminal typing, and precise eases. Note: Avoid smooth/bouncy spring physics; prefer linear or quart-out for a "machine" feel.

## 2. Color Palette

### Primary (Neon Green)
Used for primary actions, highlights, active states, and terminal cursors.
- **Neon**: `#39FF14` (The core "glow")
- **Neon-Hover**: `#32D711`
- **Neon-Dim**: `#39FF14` at 10-20% opacity (for backgrounds/glows)

### Neutral (Graphite)
Used for backgrounds and surfaces. "Graphite" implies a dark, metallic grey, not just pitch black.
- **Background (Deep)**: `#0D0D0D` (Main background - almost black)
- **Surface (Graphite)**: `#1C1C1C` (Cards, Panels)
- **Surface-Lighter**: `#2A2A2A` (Borders, Separators, Hover states)
- **Overlay**: `#000000` at 60-80% opacity

### Text
- **Primary**: `#FFFFFF` (Headings, bold text)
- **Secondary**: `#A1A1AA` (Body text, descriptors - Zinc-400 equivalent)
- **Tertiary**: `#52525B` (Placeholder, disabled - Zinc-600 equivalent)

## 3. Typography
**Font Family**: `JetBrains Mono` (System-wide).
*Rationale: The brand is "On Code". The interface should feel like a sophisticated IDE.*

- **H1 (Hero)**: Bold (700), Tracking-tight.
- **H2 (Section)**: Semi-Bold (600).
- **Body**: Regular (400).
- **Code/Tech**: Regular (400), maybe lighter opacity.

## 4. UI Components

### Buttons
- **Primary**:
  - Background: Transparent or `Neon-Dim`.
  - Border: 1px Solid `Neon`.
  - Text: `Neon`.
  - Hover: Background `Neon` (10-20%), Shadow `0 0 10px Neon`.
  - *Vibe: "Execute Command"*

- **Secondary**:
  - Background: `Surface-Lighter`.
  - Text: White.
  - Hover: Lighter grey.

### Cards (Glass/Graphite)
- Background: `Surface` (`#1C1C1C`) or heavy blur glass.
- Border: 1px Solid `Surface-Lighter` (`#2A2A2A`).
- Hover: Border changes to `Neon` (dimmed) or White.

### Inputs
- Background: `Background (Deep)`.
- Border: 1px Solid `Surface-Lighter`.
- Focus: Border `Neon`, Box-shadow `0 0 0 2px Neon-Dim`.
- Text: JetBrains Mono.

## 5. Effects & Motion
- **Glow**: Drop shadows using the Neon color to simulate light emission.
- **Scanlines**: Subtle overlay texture (optional, for retro feel).
- **Typing**: Text reveals character-by-character.
- **Cursor**: Blinking block cursor `█`.

---
**Implementation Strategy**:
1. Update Tailwind config/CSS variables.
2. Refactor `Button` component to use new tokens.
3. Apply global font family.
4. Update background and text colors across layout.
