# Design System — ML Expedition

> Extraído del proyecto Stitch "Visual Web Proposal" (Nexus Learning System)
> Fuente: https://stitch.withgoogle.com/projects/1331554043477760059

## Brand & Style

El sistema de diseño es una fusión sofisticada de rigor académico y engagement gamificado. Posiciona al estudiante como un "Investigador", transformando materias técnicas como Machine Learning en una expedición inmersiva.

El estilo visual es **Glassmorphism**, con contenedores de vidrio esmerilado que aportan profundidad y claridad. La interfaz se siente high-tech y futurista, pero se mantiene sólida gracias a una tipografía profesional y densidad de información estructurada.

Pilares visuales clave:
- **Profundidad traslúcida:** Usar desenfoques de fondo (backdrop-filter: blur) para mantener el contexto mientras se resalta el contenido activo.
- **Acentos vibrantes:** Índigos y azules de alta saturación para progreso y logros.
- **Profesionalismo futurista:** Líneas limpias y layouts "aireados" que evitan que la gamificación se sienta juvenil.

---

## Tokens de Color

| Token | HEX | Uso |
|-------|-----|-----|
| **primary** | `#3525cd` | Acciones principales, navegación activa, barras de progreso |
| **primary-container** | `#4f46e5` | Contenedores primarios, gradientes |
| **on-primary** | `#ffffff` | Texto sobre primary |
| **secondary** | `#006591` | Acentos de soporte, botones secundarios |
| **secondary-container** | `#39b8fd` | Contenedores secundarios, sky blue |
| **tertiary** | `#684000` | Elementos de alta recompensa (medallas, XP gold) |
| **tertiary-container** | `#885500` | Ámbar para badges y alertas |
| **surface** | `#f7f9fb` | Fondo principal |
| **surface-dim** | `#d8dadc` | Fondo atenuado |
| **surface-bright** | `#f7f9fb` | Fondo brillante |
| **surface-container** | `#eceef0` | Contenedores de tarjetas |
| **on-surface** | `#191c1e` | Texto principal |
| **on-surface-variant** | `#464555` | Texto secundario |
| **outline** | `#777587` | Bordes |
| **outline-variant** | `#c7c4d8` | Bordes suaves |
| **deep-navy** | `#0F172A` | Fondo de sidebar |
| **glass-fill** | `rgba(255,255,255,0.7)` | Relleno de tarjetas glass |
| **glass-stroke** | `rgba(255,255,255,0.4)` | Borde de tarjetas glass |
| **xp-blue** | `#3B82F6` | Azul de experiencia/progreso |
| **success-green** | `#10B981` | Verde de logros completados |
| **error** | `#ba1a1a` | Errores |
| **error-container** | `#ffdad6` | Contenedor de error |

### Efectos Glass

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
}
```

---

## Tipografía

| Estilo | Font Family | Size | Weight | Line Height | Letter Spacing |
|--------|-------------|------|--------|-------------|----------------|
| **display-hero** | Plus Jakarta Sans | 48px | 800 | 1.1 | -0.02em |
| **headline-lg** | Plus Jakarta Sans | 32px | 700 | 1.2 | — |
| **headline-md** | Plus Jakarta Sans | 24px | 600 | 1.3 | — |
| **headline-sm** | Plus Jakarta Sans | 20px | 600 | 1.4 | — |
| **body-lg** | Inter | 18px | 400 | 1.6 | — |
| **body-md** | Inter | 16px | 400 | 1.6 | — |
| **label-lg** | Plus Jakarta Sans | 14px | 600 | 1.2 | — |
| **label-md** | Plus Jakarta Sans | 12px | 500 | 1.2 | — |
| **code-sm** | JetBrains Mono | 13px | 400 | 1.5 | — |

### Estrategia tipográfica

- **Plus Jakarta Sans** para headings y labels UI (personalidad amigable y moderna)
- **Inter** para contenido educativo extenso (máxima legibilidad)
- **JetBrains Mono** para snippets técnicos (`pandas`, `scikit-learn`) con fondo sutil

---

## Layout & Spacing

```
Grid base: 8px
Container max: 1280px
Section gap: 64px
Card padding: 24px
Gutter: 24px
Sidebar: 280px (fija en desktop)
```

### Estructura

1. **Sidebar (Izquierda):** Navegación principal y perfil. 280px fijo en desktop.
2. **Content Area:** Área fluida con módulos "Misión" y tarjetas "Laboratorio".
3. **Utility Rail (Derecha):** Sidebar secundario opcional para TdC o progreso XP.

---

## Elevación y Profundidad

| Nivel | Técnica | Uso |
|-------|---------|-----|
| **Level 0** | Surface clara (`#f8fafc`) o gradiente radial | Fondo general |
| **Level 1** | Glassmorphism: bg 70% opacidad + 12px blur + borde 1px 40% blanco | Tarjetas principales |
| **Level 2** | Sombra difusa (Blur 30px, 5% opacidad, Navy tint) | Modales activos, badges |
| **Interactive** | Al hover: aumentar opacidad bg a 85% (no sombra) | Estados hover de tarjetas |

---

## Shapes (Border Radius)

| Escala | Valor | Uso |
|--------|-------|-----|
| **sm** | 0.25rem (4px) | — |
| **DEFAULT** | 0.5rem (8px) | — |
| **md** | 0.75rem (12px) | — |
| **lg** | 1rem (16px) | Contenedores, tarjetas |
| **xl** | 1.5rem (24px) | Tarjetas principales, botones primarios |
| **full** | 9999px | Botones pill, chips, badges, barras de progreso |

---

## Componentes

### Tarjetas de Módulo (Learning Modules)
- Fondo glass con blur
- Porcentaje de progreso visible
- Botón "Continuar"
- Tarjetas bloqueadas con 50% de opacidad e icono de candado

### Elementos Gamificados
- **Progress Rings:** Stroke primary indigo + track gris claro. Nivel centrado en Plus Jakarta Sans Bold.
- **XP Bars:** Delgadas, azul vibrante, con efecto glow en la punta activa.
- **Badges:** Contenedores circulares o hexagonales con fondo glass e icono gold (tertiary) en el centro.

### Botones
- **Primary:** Gradiente linear de primary a secondary. Border-radius: xl (1.5rem).
- **Secondary:** Estilo "Ghost" con borde glass de 1px.
- **Chips:** Estilo pill (full-round) para tags de categoría y nivel.

### Input Fields
- Semi-transparentes con blur
- Icono + atajo "Cmd+K" para search bars

### Checklists
- Indicadores circulares personalizados (no checkboxes estándar)
- Se llenan con success-green checkmark al completar

---

## Mobile Adjustments

- **display-hero:** 48px → 32px
- **headline-lg:** 32px → 24px
- Layout fluido: sidebar se colapsa a rail de iconos o drawer
