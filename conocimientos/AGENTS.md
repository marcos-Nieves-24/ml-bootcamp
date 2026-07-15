# AGENTS.md — ML Bootcamp

## Project Overview

ML Bootcamp is an interactive learning platform (Nexus) where students master
Machine Learning through active learning, simulations, guided coding, projects
and gamification. It combines a university-style curriculum with a full web
application — not just a notebook-based course.

## Repository Structure

```
ml-bootcamp/
├── platform/                  # Nexus — Next.js + Prisma + NextAuth + Neon (Postgres)
│                               # All frontend, backend, and UI component code lives here
├── content/                   # Lessons in MDX format, consumed by platform/
│   ├── modulo-1/
│   ├── modulo-2/
│   └── ...
├── course-source/             # Raw academic material — source before MDX conversion
│   ├── notebooks/
│   ├── case_studies/
│   ├── datasets/
│   │   ├── raw/
│   │   ├── processed/
│   │   ├── synthetic/
│   │   └── external/
│   └── figures/
├── conocimientos/             # Product vision & architecture docs (source of truth for product decisions)
│   ├── VISION.md
│   ├── ARQUITECTURA_DEL_PRODUCTO.md
│   ├── FILOSOFIA_EDUCATIVA.md
│   ├── EXPERIENCIA_DE_APRENDIZAJE.md
│   ├── GAMIFICACION.md
│   └── PROJECT_STRUCTURE.md
├── infra/                     # Docker config (Dockerfile, docker-compose.yml) — local dev / alt. deploy
├── referencia-gui/            # Visual reference assets (mockups, screenshots) for UI redesign
├── referencia-ui/             # Visual reference assets (design system) for UI redesign
├── docs/                      # Project documentation (not course content)
│   ├── COURSE_STRUCTURE.md
│   ├── LESSON_STRUCTURE.md
│   ├── CONTENT_WORKFLOW.md
│   ├── STYLE_GUIDE.md
│   └── ROADMAP.md
├── scripts/                   # Automation scripts (notebook→MDX conversion, figure generation, etc.)
├── prompts/                   # Reusable prompts for OpenCode
├── tests/                     # Pytest suite (content/data) + app tests (platform/)
├── BACKLOG.md                 # Tracked technical & product debt
├── mkdocs.yml                 # MkDocs config — status TBD, may be legacy from pre-platform phase
└── vercel.json                # Vercel deployment config
```

**Nota de versión**: esta estructura reemplaza una versión anterior enfocada
solo en el curso académico (`course/module01_ai/`, `exams/`, `projects/`,
`datasets/synthetic/` sueltos). Ver `conocimientos/PROJECT_STRUCTURE.md` para
el detalle completo y las reglas de cada carpeta.

## Key Conventions

- Ningún código de aplicación fuera de `platform/`.
- Cada lección en `content/` sigue el schema MDX definido en `docs/LESSON_STRUCTURE.md`.
- Todo el material crudo (notebooks, datasets, figuras) vive en `course-source/`, nunca duplicado.
- Todo pendiente técnico o de producto se registra en `BACKLOG.md`.
- Python code debe seguir PEP8.
- Tests corren vía pytest en `tests/`.

## Stack

**Plataforma (`platform/`)**: Next.js, Prisma, NextAuth v5, Neon (Postgres),
Tailwind, Lucide icons. Desplegado en Vercel.

**Contenido (`course-source/`)**: Python 3.12+, Jupyter Notebooks, numpy,
pandas, scikit-learn, matplotlib, seaborn. Testing con pytest, pytest-notebook.

## SDD Context

- Artifact store: Engram
- Modo de planificación: `plan`
- Modo de ejecución: `sdd-orchestrator-marcos`
- Topic keys activos: `sdd/platform-phase1/*`, `sdd/frontend-redesign/*`,
  `sdd/gui-redesign/*`
