# LESSON_TEMPLATE.md

# Especificación de Generación de Lecciones

Este documento define la estructura requerida para cada lección del curso.

OpenCode DEBE seguir esta especificación cada vez que cree o actualice lecciones.

El objetivo es garantizar consistencia en todo el curso.

---

# Principios Generales

Cada lección debe

- enseñar un concepto bien
- basarse en lecciones anteriores
- preparar a los estudiantes para la siguiente lección
- combinar teoría con práctica
- incluir ejemplos reproducibles en Python
- usar aplicaciones del mundo real
- enfatizar la intuición antes que las matemáticas
- fomentar el aprendizaje activo

---

# Metadatos de la Lección

Cada lección comienza con

```yaml
Module:
Lesson Number:
Lesson Title:

Estimated Duration:

Prerequisites:

Learning Objectives:

Keywords:

Difficulty:

Programming Concepts:

Mathematical Concepts:

Machine Learning Concepts:

Datasets Used:

Notebook:

Assignment:

Quiz:
```

---

# Objetivos de Aprendizaje

Proporcionar de 3 a 6 objetivos de aprendizaje medibles.

Usar la Taxonomía de Bloom.

Ejemplos

- Explicar...
- Implementar...
- Comparar...
- Interpretar...
- Evaluar...
- Diseñar...

Evitar verbos vagos como

- entender
- saber
- aprender

---

# Motivación de la Lección

Comenzar cada lección respondiendo

¿Por qué debería importarles a los estudiantes?

Usar

- biotecnología
- salud
- negocios
- SaaS
- ejemplos cotidianos

Los estudiantes deben entender de inmediato el valor de la lección.

---

# Panorama General

Mostrar cómo se conecta esta lección con

Lección anterior

↓

Lección actual

↓

Lección siguiente

Los estudiantes deben saber siempre dónde se encuentran en el curso.

---

# Teoría

Explicar el concepto.

Requisitos

- conversacional
- académico
- técnicamente correcto

Introducir la terminología gradualmente.

Cada concepto nuevo debe incluir

Definición

↓

Intuición

↓

Explicación formal

↓

Ejemplo

---

# Fundamentos Matemáticos

Si se requieren matemáticas

Explicar

1. notación

2. intuición

3. derivación

4. interpretación

Evitar presentar ecuaciones sin explicación.

Cada variable debe estar definida.

---

# Explicación Visual

Cada lección debe incluir figuras siempre que sea posible.

Ejemplos

- diagramas
- diagramas de flujo
- distribuciones
- árboles de decisión
- gráficos de dispersión
- curvas ROC

Las figuras deben generarse programáticamente.

Nunca depender exclusivamente de capturas de pantalla.

---

# Implementación en Python

Cada lección incluye código Python ejecutable.

Requisitos

- PEP8
- comentarios
- nombres de variables legibles
- funciones modulares

Librerías preferidas

- numpy
- pandas
- matplotlib
- scikit-learn

Opcionales

- scipy
- seaborn
- plotly

Cada bloque de código debe ejecutarse.

---

# Ejemplo Guiado (Walkthrough)

Proporcionar un ejemplo completo.

Estructura

Problema

↓

Dataset

↓

Análisis

↓

Modelo

↓

Interpretación

↓

Conclusión

Los estudiantes deben poder reproducir el ejemplo.

---

# Ejemplo de Biotecnología

Cuando corresponda

Incluir una aplicación relacionada con

- genómica
- transcriptómica
- proteínas
- salud
- datos de laboratorio
- datos clínicos

---

# Ejemplo de SaaS

Cuando corresponda

Incluir una aplicación que involucre

- customer churn

- predicción de ingresos

- sistemas de recomendación

- segmentación de clientes

- analítica de producto

- analítica de marketing

---

# Errores Comunes

Incluir una sección

Errores Comunes

Ejemplos

- malinterpretación de supuestos

- interpretación incorrecta

- errores de código

- errores estadísticos

- errores de visualización

Explicar cómo evitarlos.

---

# Buenas Prácticas

Explicar

- workflow profesional

- reproducibilidad

- documentación

- organización del código

- control de versiones

- testing

---

# Resumen

Resumir la lección usando viñetas concisas.

Los estudiantes deberían poder repasar esta sección antes de un examen.

---

# Términos Clave

Proporcionar un glosario.

Ejemplo

Feature

Target

Variance

Overfitting

Generalization

Cada definición debe ser concisa.

---

# Ejercicios

Incluir tres niveles.

Nivel 1

Comprensión básica

Nivel 2

Implementación

Nivel 3

Pensamiento crítico

---

# Desafío de Programación

Cada lección incluye un desafío de programación.

Los estudiantes escriben código de forma independiente.

Evitar dar la solución completa.

---

# Notebook

Generar un notebook de Jupyter.

Estructura

Markdown

↓

Código

↓

Salida

↓

Interpretación

↓

Ejercicios

El notebook debe ejecutarse sin errores.

---

# Cuestionario

Generar

5 preguntas de opción múltiple

2 preguntas de respuesta breve

1 pregunta de código

Incluir una clave de respuestas.

---

# Tarea (Assignment)

Las tareas deben integrar lecciones anteriores.

Incluir

Objetivos

Instrucciones

Entregables

Rúbrica de evaluación

Tiempo estimado de finalización

---

# Referencias

Usar APA 7.

Priorizar

- libros de texto
- artículos revisados por pares
- documentación oficial

Evitar blogs a menos que se solicite explícitamente.

---

# Lista de Verificación de la Lección

Antes de finalizar una lección, verificar

□ Objetivos de aprendizaje incluidos

□ Motivación incluida

□ Teoría completa

□ Matemáticas explicadas

□ Figuras generadas

□ Ejemplos en Python probados

□ Ejemplo de biotecnología incluido

□ Ejemplo de SaaS incluido

□ Resumen escrito

□ Glosario incluido

□ Ejercicios incluidos

□ Notebook generado

□ Cuestionario generado

□ Tarea generada

□ Referencias formateadas

---

# Entregables

Por cada lección, OpenCode debe generar

lesson.md

lesson.ipynb

quiz.md

assignment.md

slides.md

references.bib

figures/

datasets/

README.md

---

# Estándares de Calidad

Cada lección debe

- ser reproducible
- ser modular
- ser autocontenida
- mantener terminología consistente
- basarse en lecciones anteriores
- preparar a los estudiantes para lecciones futuras
- usar redacción científica profesional
- mantener un tono consistente en todo el curso

La lección debe ser publicable como material universitario sin requerir reescritura sustancial.
