---
name: Nexus Learning System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#684000'
  on-tertiary: '#ffffff'
  tertiary-container: '#885500'
  on-tertiary-container: '#ffd4a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  deep-navy: '#0F172A'
  glass-fill: rgba(255, 255, 255, 0.7)
  glass-stroke: rgba(255, 255, 255, 0.4)
  xp-blue: '#3B82F6'
  success-green: '#10B981'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
  code-sm:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 64px
  card-padding: 24px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The design system is a sophisticated fusion of academic rigor and gamified engagement. It positions the learner as an "Investigator" or "Researcher," transforming technical subjects like Machine Learning into an immersive expedition.

The visual style is **Glassmorphism**, characterized by frosted glass containers that provide depth and clarity. The interface feels high-tech and futuristic yet remains grounded through professional typography and structured information density. It balances the excitement of a quest with the reliability of a high-end SaaS product.

Key visual pillars include:
- **Depth through Translucency:** Using background blurs to maintain context while highlighting active content.
- **Vibrant Accents:** Utilizing high-saturation indigos and blues to signify progress and achievement.
- **Futuristic Professionalism:** Clean lines and "airy" layouts that prevent the gamification from feeling juvenile.

## Colors

The palette is anchored in a professional **Deep Navy** and **Vibrant Indigo**. Primary interactions use a punchy indigo-to-blue gradient, while functional status colors (XP, Level-ups) utilize bright, energetic hues.

- **Primary:** High-vibrancy Indigo for main actions, active navigation states, and progress bars.
- **Secondary:** Sky Blue for supporting accents, secondary buttons, and specific data visualizations.
- **Tertiary:** Amber for "high-reward" gamification elements like badges, gold-level XP, or critical alerts.
- **Neutral:** A range of Slate grays starting from a near-white background.
- **Glass Effects:** Use `glass-fill` for card surfaces with a `backdrop-filter: blur(12px)`. Borders on glass elements should use `glass-stroke` to simulate light reflecting on edges.

## Typography

Typography uses a dual-font strategy: **Plus Jakarta Sans** for expressive, high-impact headings and UI labels to provide a friendly yet modern personality, and **Inter** for long-form educational content to ensure maximum readability.

- **Headlines:** Use tight letter-spacing and bold weights to create a strong visual hierarchy.
- **Body Copy:** Standardize on Inter for the Machine Learning course content (Theory, Examples).
- **Code:** Technical snippets and library names (e.g., `pandas`, `scikit-learn`) must use JetBrains Mono inside subtle background-filled spans.
- **Mobile Adjustments:** Scale Display Hero down to 32px and Headline-LG down to 24px on mobile devices.

## Layout & Spacing

The layout uses a **Fluid Sidebar** model combined with a **Fixed Max-Width Container** for content.

1.  **Sidebar (Left):** Primary navigation and user profile summary. Fixed at 280px on desktop.
2.  **Dashboard/Content Area:** A fluid area that houses the "Mission" modules and "Laboratory" cards.
3.  **Utility Rail (Right):** Optional secondary sidebar for "ToC" (Table of Contents) or "XP Progress" tracking.

Spacing follows an 8px rhythmic grid. Large gaps (64px+) are used between major sections (e.g., between "Current Project" and "Recent Activity") to allow the glassmorphic surfaces to "breathe" against the background.

## Elevation & Depth

This system rejects traditional heavy drop shadows in favor of **Tonal Layering and Backdrop Blurs**.

- **Level 0 (Background):** A very light neutral surface (`#F8FAFC`) or a subtle radial gradient.
- **Level 1 (Main Cards):** Glassmorphism effect. White background at 70% opacity with a 12px blur. A 1px solid border at 40% white opacity provides the "glass edge."
- **Level 2 (Active/Floating):** Subtle, highly diffused ambient shadows (Blur 30px, 5% opacity, Navy tint) used only for elements that require immediate attention, like active modals or level-up badges.
- **Interactive States:** On hover, glass cards should increase in background opacity (to 85%) rather than increasing shadow depth.

## Shapes

The design system uses a very generous roundedness scale to evoke a friendly, modern SaaS feel. 

- **Containers & Cards:** Use `rounded-2xl` (1rem / 16px) or `rounded-3xl` (1.5rem / 24px) to create a soft, inviting aesthetic.
- **Buttons & Chips:** Use pill-shaped (full-round) styling for secondary actions (XP tags, category labels) and `rounded-xl` for primary "Continue Mission" buttons.
- **Progress Bars:** Always fully rounded (pill) to suggest fluid movement.

## Components

### Gamified Elements
- **Progress Rings:** Use a primary indigo stroke for the active progress, with a light gray-blue for the remaining track. Center the "Level Number" in the ring using Plus Jakarta Sans Bold.
- **XP Bars:** Thin, high-vibrancy blue bars. Include a "glow" effect (subtle outer shadow) on the active progress tip.
- **Badges:** Circular or hexagonal containers with a glass background and a central gold (Tertiary) icon for achievements.

### Learning Modules
- **Module Cards:** Each module (e.g., "Módulo 4: Introducción al Machine Learning") should be a glass card. Display the progress percentage clearly and include a "Continue" button.
- **Lab Cards:** Smaller, square-ish cards with a central icon (Python logo, Data icon) and a level indicator at the bottom. Lock icons should appear with 50% opacity for "Blocked" content.

### Interaction
- **Buttons:** Primary buttons use a linear gradient from Primary to Secondary. Secondary buttons use a "Ghost" style with a 1px glass border.
- **Checklists (Objectives):** Instead of standard checkboxes, use custom circular indicators that fill with a success-green checkmark upon completion of course goals.
- **Input Fields:** Search bars should be semi-transparent with a blur, featuring an icon and a "Cmd+K" shortcut hint.