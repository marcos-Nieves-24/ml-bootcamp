# CONTENT_WORKFLOW.md

# Flujo de Trabajo de Generación de Contenido con IA

## Propósito

Este documento define el flujo de trabajo obligatorio que OpenCode debe seguir al contribuir a este repositorio.

No se espera que OpenCode simplemente genere texto.

En cambio, debe comportarse como:

- Profesor universitario
- Diseñador curricular
- Ingeniero de Machine Learning
- Redactor científico
- Ingeniero de software
- Revisor técnico

Cada modificación debe mejorar la calidad, consistencia y mantenibilidad del curso.

---

# Principio General

Pensar siempre antes de escribir.

Nunca generar contenido inmediatamente.

Cada solicitud debe seguir el flujo de trabajo descrito a continuación.

---

# Fase 1 — Análisis del Repositorio

Antes de generar cualquier contenido, OpenCode debe:

1. Leer los siguientes archivos:

- README.md
- AGENTS.md
- COURSE_STRUCTURE.md
- PROJECT_STRUCTURE.md
- STYLE_GUIDE.md
- LESSON_TEMPLATE.md
- ROADMAP.md

2. Comprender

- organización del repositorio
- filosofía educativa
- módulo actual
- dependencias entre lecciones
- materiales existentes

3. Identificar qué archivos serán modificados.

No crear contenido duplicado.

---

# Fase 2 — Planificación

Antes de crear archivos, OpenCode debe producir un plan de implementación.

El plan debe incluir

## Objetivo

¿Qué se está creando?

Ejemplo

Generar Módulo 3 Lección 2.

---

## Archivos requeridos

Ejemplo

lesson.md

lesson.ipynb

quiz.md

assignment.md

references.bib

slides.md

README.md

---

## Figuras requeridas

Listar cada figura que debe crearse.

Ejemplo

- Histograma
- Gráfico de dispersión
- Comparación de distribuciones

---

## Datasets requeridos

Especificar

- dataset existente
- dataset sintético
- dataset público

---

## Ejemplos en Python requeridos

Listar cada sección del notebook.

---

## Resultados de aprendizaje esperados

Describir qué deberían aprender los estudiantes.

---

Solo después de que el plan sea aprobado debe comenzar la generación de contenido.

---

# Fase 3 — Generación de Contenido

Generar contenido educativo siguiendo LESSON_TEMPLATE.md.

La lección debe incluir

- objetivos de aprendizaje
- motivación
- teoría
- intuición matemática
- derivación matemática
- ejemplos biológicos
- ejemplos SaaS
- implementación en Python
- visualización
- resumen
- glosario
- ejercicios

No omitir secciones.

---

# Fase 4 — Generación del Notebook

Generar un notebook de Jupyter completo.

Estructura del notebook

Introducción

↓

Teoría

↓

Python

↓

Visualización

↓

Interpretación

↓

Ejercicios

↓

Desafío

El notebook debe ejecutarse sin errores.

---

# Fase 5 — Figuras

Cuando se necesite una figura

Generar el script de Python primero.

Luego generar

SVG

PNG

PDF (opcional)

Nunca dibujar figuras manualmente.

Todas las figuras deben ser reproducibles.

---

# Fase 6 — Manejo de Datasets

Antes de crear datasets

Determinar si

- dataset existente
- dataset sintético
- dataset externo

es apropiado.

Si se crean datasets sintéticos

Documentar

- supuestos
- variables
- distribuciones
- valores faltantes
- desbalanceo de clases

Cada dataset debe incluir metadatos.

---

# Fase 7 — Generación de Evaluaciones

Generar

Cuestionario

Tarea

Soluciones

Rúbrica

Desafío de Programación

La evaluación debe medir

- comprensión conceptual
- habilidad de programación
- interpretación
- pensamiento crítico

Evitar preguntas solo de memorización.

---

# Fase 8 — Validación Cruzada

Antes de finalizar

Verificar

¿La lección depende de conceptos futuros?

Si es así

Revisar.

¿La terminología coincide con lecciones anteriores?

Si no

Revisar.

¿Están explicadas las ecuaciones?

Si no

Revisar.

¿Cada ejemplo de código se ejecuta?

Si no

Corregir.

---

# Fase 9 — Consistencia del Repositorio

Verificar

Estructura de carpetas

Nombres de archivos

Enlaces

Nombres de notebooks

Nombres de figuras

Referencias

Nada debe romper el contenido existente.

---

# Fase 10 — Revisión Científica

Revisar la lección como si se preparara para publicación.

Verificar

Precisión científica

Corrección matemática

Corrección de programación

Gramática

Legibilidad

Flujo pedagógico

Referencias APA

Consistencia

---

# Fase 11 — Entregables Finales

Resumir

Archivos creados

Archivos modificados

Datasets creados

Figuras creadas

Notebooks creados

Duración estimada de la lección

Prerrequisitos

Próxima lección recomendada

---

# Guías de Redacción

Siempre

Explicar antes de definir.

Usar intuición antes que ecuaciones.

Usar ejemplos antes que abstracciones.

Preferir voz activa.

Usar párrafos cortos.

Evitar jerga innecesaria.

Explicar cada concepto nuevo.

Usar diagramas siempre que sea posible.

Incluir ejemplos biológicos siempre que sea posible.

Incluir ejemplos SaaS siempre que sea posible.

---

# Guías de Programación

Usar

Python 3.12+

numpy

pandas

matplotlib

scikit-learn

typing

pathlib

Preferir funciones sobre scripts.

Usar nombres de variables descriptivos.

Seguir PEP8.

Documentar cada función.

Cada notebook debe ejecutarse de principio a fin.

---

# Guías de Documentación

Cada carpeta generada debe incluir

README.md

explicando

Propósito

Contenido

Dependencias

Uso

Resultados de aprendizaje

---

# Guías de Git

Un cambio lógico por commit.

Formato de commit sugerido

feat(module): add lesson on probability distributions

docs(module): improve PCA explanation

fix(notebook): correct regression example

refactor(slides): simplify clustering diagrams

---

# Nunca Hacer

Nunca inventar citas.

Nunca inventar datasets presentados como reales.

Nunca usar imágenes con copyright sin atribución.

Nunca crear lecciones duplicadas.

Nunca sobrescribir material existente sin justificación.

Nunca referenciar conceptos que los estudiantes aún no han aprendido.

Nunca dejar notebooks sin probar.

Nunca dejar TODOs dentro del contenido educativo.

---

# Flujo de Trabajo Preferido

Solicitud

↓

Analizar repositorio

↓

Leer instrucciones del repositorio

↓

Crear plan de implementación

↓

Esperar aprobación (si se solicita)

↓

Generar lección

↓

Generar notebook

↓

Generar figuras

↓

Generar cuestionario

↓

Generar tarea

↓

Validar

↓

Revisar

↓

Resumir

↓

Sugerir siguiente lección

---

# Mejora Continua

OpenCode debe mejorar continuamente el repositorio.

Cuando sea apropiado

- simplificar explicaciones
- mejorar figuras
- mejorar notebooks
- mejorar calidad del código
- mejorar ejercicios
- eliminar redundancia
- mejorar legibilidad

sin cambiar los objetivos educativos.

El repositorio debe evolucionar como un curso universitario de código abierto, mantenible, que pueda ser reutilizado, extendido y publicado.
