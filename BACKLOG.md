# Backlog técnico

Pendientes identificados durante el desarrollo, registrados para no perderlos
en el historial de Engram. Formato: qué falta, por qué importa, prioridad.

## Pendientes

- [ ] **Implementar Google OAuth real vía NextAuth v5** (actualmente stubbed/simulado)
      Prioridad: alta — es funcionalidad core del login, no solo estética.

- [ ] **Decidir y alinear el redirect post-onboarding**: actualmente `/campus`,
      la especificación original decía `/dashboard`.
      Prioridad: media — es una decisión de producto, no un bug técnico.
      Decisión: _(pendiente de definir por Alvarez)_

- [ ] **Migrar íconos restantes de Material Symbols a Lucide**
      Prioridad: baja — consistencia visual, no bloquea funcionalidad.

- [ ] **Unificar tipografía**: el body usa Plus Jakarta Sans en vez de Inter
      (el resto del design system usa Inter).
      Prioridad: baja.

- [ ] **Reemplazar estilos inline de `fontFamily` por clases utility de Tailwind**
      Prioridad: baja — deuda de mantenibilidad, no afecta al usuario final.

## Notas de estructura del repo

- `platform/` = la aplicación Next.js (Nexus). No usar `app/` en documentación
  ni en prompts a OpenCode — ese nombre no corresponde a ninguna carpeta real.
- `conocimientos/` = documentación de visión/arquitectura del producto
  (VISION.md, ARQUITECTURA_DEL_PRODUCTO.md, FILOSOFIA_EDUCATIVA.md).
- `referencia-gui/` y `referencia-ui/` = assets de referencia visual usados
  durante el rediseño de la interfaz.
- `infra/` = configuración de contenedores (Dockerfile, docker-compose.yml) — probablemente para desarrollo local o despliegue alternativo a Vercel.
