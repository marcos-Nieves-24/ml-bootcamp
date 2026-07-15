
# PROJECT_STRUCTURE.md

## Visión general

Este repositorio contiene el curso "Machine Learning for Data Analysis and SaaS"
y la plataforma web (Nexus) que lo entrega a los estudiantes.
El asistente de IA (OpenCode) DEBE seguir esta estructura al crear, modificar
u organizar cualquier archivo.

**Nota de versión**: este documento reemplaza una versión anterior que describía
una arquitectura de curso puramente académica (labs/, exams/, website/, projects/
sueltos en la raíz). Ese enfoque quedó superado desde que el proyecto pivotó a
una plataforma interactiva completa. Si encuentras referencias a esa estructura
antigua en otros documentos o prompts, repórtalas para corregir.

---

## platform/

La aplicación web (Nexus). Next.js + Prisma + NextAuth + Neon (Postgres).
Todo el código de frontend, backend y componentes de UI vive aquí.
Nada de código de aplicación debe existir fuera de esta carpeta.

## content/

Lecciones en formato MDX que la plataforma consume. Un subdirectorio por
módulo. Es el contrato de datos entre `course-source/` (material crudo) y
`platform/` (lo que lo renderiza).

## course-source/

Material académico original: notebooks, casos de estudio, datasets, figuras
generadas — la fuente antes de convertir contenido a MDX. Incluye:
course-source/
notebooks/
case_studies/
datasets/
raw/
processed/
synthetic/
external/
figures/

Datasets nunca deben duplicarse. Cada dataset debe incluir README con fuente,
variables, cita y preprocesamiento.

## conocimientos/

Documentación de visión y arquitectura de producto: VISION.md,
ARQUITECTURA_DEL_PRODUCTO.md, FILOSOFIA_EDUCATIVA.md, y este mismo archivo.
Es la fuente de verdad para decisiones de producto, no de código.

## infra/

Configuración de contenedores (Dockerfile, docker-compose.yml, .dockerignore)
para desarrollo local o despliegue alternativo a Vercel.

## referencia-gui/ y referencia-ui/

Assets visuales de referencia usados durante el rediseño de interfaz
(capturas, mockups, sistema de diseño).

## docs/

Documentación del proyecto en sí (no del curso): COURSE_STRUCTURE.md,
LESSON_STRUCTURE.md, CONTENT_WORKFLOW.md, AGENTS.md, STYLE_GUIDE.md, ROADMAP.md.

## scripts/

Scripts de automatización (conversión ipynb→mdx, generación de figuras, etc.).
Nunca deben contener contenido educativo.

## prompts/

Prompts reutilizables para OpenCode (generación de lecciones, quizzes, etc.).

## tests/

Tests automatizados (pytest para contenido/datos, tests de la app en `platform/`).

## .github/workflows/

CI: build de la app, validación de contenido, deploy.

## BACKLOG.md

Pendientes técnicos y de producto identificados durante el desarrollo.
Ver también las notas de sesión en Engram para contexto histórico de decisiones.

---

## Reglas generales

1. Nunca ubicar código de aplicación fuera de `platform/`.
2. Nunca duplicar datasets — si existe en `course-source/datasets/`, no se
   vuelve a crear en otro lado.
3. Todo pendiente técnico o de producto se registra en `BACKLOG.md`, no solo
   en las notas de sesión de Engram.
4. Antes de crear una carpeta nueva en la raíz, verificar si ya existe algo
   equivalente y actualizar este documento en el mismo commit.
5. Cada lección en `content/` debe seguir el schema definido en
   `docs/LESSON_STRUCTURE.md` (frontmatter + bloques MDX).
6. Preferir mejorar material existente sobre crear archivos duplicados.
7. Cada cambio estructural debe preservar consistencia en todo el repositorio.

---

## Filosofía del repositorio

El repositorio se trata como un proyecto de software real. Todo artefacto
(educativo o de plataforma) debe ser: versionado, reproducible, testeado,
documentado, reusable y modular. El objetivo no es solo generar apuntes de
clase, sino construir una plataforma completa y mantenible que evoluciona
en colaboración con OpenCode.
