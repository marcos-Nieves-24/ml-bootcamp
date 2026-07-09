# PROJECT_STRUCTURE.md

# Estructura del Repositorio

Este repositorio contiene todo el material requerido para desarrollar, mantener y publicar el curso universitario:

> **Machine Learning for Data Analysis and SaaS**

El repositorio está organizado siguiendo una arquitectura modular inspirada en proyectos de ingeniería de software.

El asistente de IA (OpenCode) DEBE seguir siempre esta estructura al crear, modificar u organizar contenido.

---

# Directorio Raíz

```
ml-bootcamp/
```

Contiene el curso completo.

No se debe colocar contenido educativo directamente en el directorio raíz, excepto archivos de documentación.

---

# docs/

Contiene documentación destinada a instructores.

```
docs/

    syllabus/

    instructor/

    grading/

    references/
```

## syllabus/

Contiene

- programa oficial del curso
- descripción del curso
- resultados de aprendizaje
- documentos curriculares

## instructor/

Contiene

- notas de enseñanza
- planificación semestral
- horarios de clase
- listas de verificación para instructores

## grading/

Contiene

- rúbricas de evaluación
- políticas de evaluación
- criterios de evaluación

## references/

Contiene

- bibliografías
- bases de datos de citas
- libros recomendados
- artículos recomendados

---

# course/

Contiene el contenido educativo.

Cada módulo tiene su propio directorio.

```
course/

    module01_ai/

    module02_python/

    module03_statistics/

    module04_machine_learning/
```

Cada módulo debe contener

```
README.md

lessons/

slides/

figures/

notebooks/

labs/

assignments/

quizzes/

references/
```

Los módulos deben ser independientes.

---

# lessons/

Contiene el material de clase.

Cada lección debe almacenarse dentro de su propio directorio.

Ejemplo

```
lesson01_intro_ai/

lesson.md

figures/

references.bib
```

Cada lección debe incluir

- objetivos de aprendizaje

- prerrequisitos

- explicación teórica

- intuición

- conceptos matemáticos

- ejemplos biológicos

- ejemplos SaaS

- resumen

- glosario

- referencias

---

# notebooks/

Contiene notebooks de Jupyter.

Cada notebook debe acompañar a una lección.

Nomenclatura de notebooks

```
01_intro.ipynb

02_linear_regression.ipynb

03_clustering.ipynb
```

Cada notebook debe contener

Markdown

↓

Código

↓

Salida

↓

Interpretación

↓

Ejercicios

---

# labs/

Contiene actividades prácticas para el aula.

Cada laboratorio debe incluir

```
README.md

student.ipynb

solution.ipynb

dataset.csv
```

---

# assignments/

Contiene tareas.

Cada tarea debe incluir

```
instructions.md

rubric.md

starter_code.ipynb

solution.ipynb
```

---

# quizzes/

Contiene evaluaciones formativas.

Cada cuestionario incluye

```
questions.md

answer_key.md
```

Los cuestionarios pueden incluir

- opción múltiple

- verdadero/falso

- preguntas de código

- preguntas de interpretación

---

# exams/

Contiene

- examen parcial

- examen final

- claves de respuestas

- rúbricas de evaluación

---

# projects/

Contiene proyectos integradores.

Cada proyecto incluye

```
README.md

dataset/

starter_code/

instructions.md

rubric.md

solution/
```

Los proyectos deben integrar múltiples módulos.

---

# datasets/

Contiene todos los datasets utilizados en el curso.

```
datasets/

raw/

processed/

synthetic/

external/
```

Los datasets nunca deben duplicarse.

Cada carpeta de dataset debe incluir

```
README.md

metadata.json

license.txt
```

El README debe explicar

- fuente

- variables

- cita

- preprocesamiento

---

# figures/

Contiene figuras reutilizables.

Las figuras nunca deben editarse manualmente.

Todas las figuras deben generarse a partir de scripts de Python siempre que sea posible.

Formatos aceptados

- SVG

- PNG

- PDF

---

# scripts/

Contiene scripts de automatización.

Ejemplos

```
generate_figures.py

generate_notebooks.py

generate_datasets.py

build_course.py

publish_site.py
```

Los scripts nunca deben contener contenido educativo.

---

# prompts/

Contiene prompts reutilizables para usar con OpenCode.

Ejemplos

```
lesson_generation.md

quiz_generation.md

dataset_generation.md

proofreading.md

slides.md

scientific_review.md
```

Los prompts deben ser reutilizables entre módulos.

---

# website/

Contiene archivos utilizados para publicar el curso en línea.

Puede incluir

- Quarto

- MkDocs

- Docusaurus

- GitHub Pages

---

# tests/

Contiene pruebas automatizadas.

Ejemplos

```
test_notebooks.py

test_links.py

test_datasets.py

test_examples.py
```

Todos los notebooks ejecutables deben ser probados.

---

# .github/

Contiene la configuración de GitHub.

Incluye

```
workflows/

ISSUE_TEMPLATE/

PULL_REQUEST_TEMPLATE/
```

GitHub Actions debe automáticamente

- ejecutar notebooks

- validar datasets

- construir documentación

- publicar el sitio web

---

# Reglas Generales

OpenCode debe seguir siempre estas reglas.

1. Nunca colocar archivos en el directorio incorrecto.

2. Nunca duplicar datasets.

3. Nunca crear notebooks sin las lecciones correspondientes.

4. Cada lección debe tener:

    - notebook

    - cuestionario

    - laboratorio

    - referencias

5. Cada ejemplo en Python debe ejecutarse sin errores.

6. Cada dataset debe contener documentación.

7. Las figuras deben ser reproducibles.

8. El contenido educativo debe permanecer modular.

9. Preferir mejorar material existente sobre crear archivos duplicados.

10. Cada cambio debe preservar la consistencia en todo el repositorio.

---

# Filosofía del Repositorio

El repositorio se trata como un proyecto de software.

Cada artefacto educativo debe ser:

- versionado

- reproducible

- comprobable

- documentado

- reutilizable

- modular

El objetivo no es solo crear apuntes de clase, sino construir un curso universitario completo, mantenible y de código abierto que pueda evolucionar con el tiempo a través de la colaboración con OpenCode.
