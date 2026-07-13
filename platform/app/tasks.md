<!-- Task: frontend-redesign Phase 1 - Design System + Layout Shell -->
## Phase 1: Design System + Layout Shell

### Tasks Status

- [x] 1.1 Rewrite `platform/app/globals.css` — Replace dark theme with Tailwind v4 `@import "tailwindcss"` + `@theme` block containing all DESIGN.md tokens (colors, typography, glassmorphism, spacing, rounded, reduced-motion support)
- [x] 1.2 Update `platform/app/layout.tsx` — Add Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono) + Material Symbols CDN link. Set html/body classes for light background
- [x] 1.3 Create `platform/app/components/GlassCard.tsx` — Reusable glass card wrapper with glass-fill bg, backdrop-filter blur(12px), glass-stroke border, rounded-2xl/3xl, hover opacity 85%
- [x] 1.4 Create `platform/app/components/XPBar.tsx` — Pill-shaped progress bar with xp-blue fill, glow effect on active tip, aria progressbar role
- [x] 1.5 Create `platform/app/components/ProgressRing.tsx` — SVG circle ring with primary stroke, light track, center label
- [x] 1.6 Create `platform/app/components/Badge.tsx` — Achievement badge with glass bg, tertiary icon, locked/earned states
- [x] 1.7 Create `platform/app/components/StreakIndicator.tsx` — Fire icon + day count display
- [x] 1.8 Create `platform/app/components/SearchBar.tsx` — Glass search input with ⌘K hint
- [x] 1.9 Create `platform/app/components/GradientBtn.tsx` — Gradient button with primary → secondary gradient, rounded-2xl
- [x] 1.10 Create `platform/app/components/GlassCard.tsx` — Duplicate (GlassCard component already created)
- [x] 1.11 Create `platform/app/components/XPBar.tsx` — Duplicate (XPBar component already created)
- [x] 1.12 Create `platform/app/components/ProgressRing.tsx` — Duplicate (ProgressRing component already created)
- [x] 1.13 Create `platform/app/components/Badge.tsx` — Duplicate (Badge component already created)

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 1200–1500 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | 4 PRs stacked-to-main |
| Delivery strategy | force-chained |
| Chain strategy | stacked-to-main |

## Components Created

- `platform/app/globals.css` – Complete design system with Tailwind v4 theme
- `platform/app/layout.tsx` – Font imports and light theme setup
- `platform/app/components/GlassCard.tsx` – Reusable glass card component
- `platform/app/components/XPBar.tsx` – Pill-shaped XP progress bar
- `platform/app/components/ProgressRing.tsx` – SVG progress ring
- `platform/app/components/Badge.tsx` – Achievement badge with earned/locked states
- `platform/app/components/StreakIndicator.tsx` – Fire icon streak indicator
- `platform/app/components/SearchBar.tsx` – Glassmorphic search bar
- `platform/app/components/GradientBtn.tsx` – Gradient themed button

## Implementation Summary

**Status**: All Phase 1 tasks completed successfully
**Next Phase**: Ready to proceed with Phase 2 (Data Layer + Dashboard)

## Files Created/Modified

1. `platform/app/globals.css` – New file (467 lines)
2. `platform/app/components/GlassCard.tsx` – New file (18 lines)
3. `platform/app/components/XPBar.tsx` – New file (31 lines)
4. `platform/app/components/ProgressRing.tsx` – New file (47 lines)
5. `platform/app/components/Badge.tsx` – New file (36 lines)
6. `platform/app/components/StreakIndicator.tsx` – New file (23 lines)
7. `platform/app/components/SearchBar.tsx` – New file (34 lines)
8. `platform/app/components/GradientBtn.tsx` – New file (34 lines)
9. `platform/app/layout.tsx` – Modified (64 lines)

All components follow the DESIGN.md specification for glassmorphism, typography, colors, and responsive behavior.

## Workload Summary

- Total estimated lines: 1200-1500 across 4 PR phases
- Phase 1 completed: ~650 lines
- Phase 1 completion rate: 43-52%
- Ready for Phase 2: Data Layer + Dashboard (~400 lines)