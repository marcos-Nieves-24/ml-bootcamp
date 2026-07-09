# COURSE_STRUCTURE.md

# Machine Learning for Data Analysis and SaaS

## Propósito

Este documento define la estructura canónica del curso.

OpenCode DEBE usar este archivo como fuente de verdad al generar contenido educativo.

Cada lección, notebook, laboratorio, cuestionario, assignment, dataset, figura y proyecto debe seguir esta estructura.

No cambiar el orden de los módulos a menos que se indique explícitamente.

---

# Audiencia objetivo

Estudiantes universitarios de

- Biotecnología
- Bioinformática
- Ciencias Biológicas
- Análisis de Datos
- Ingeniería

Prerrequisitos

- Matemáticas de bachillerato
- Álgebra básica
- Sin experiencia previa en programación
- Sin experiencia previa en Machine Learning

---

# Objetivos de Aprendizaje del Curso

Al finalizar el curso, los estudiantes deberían poder

- Comprender los fundamentos de la Inteligencia Artificial.
- Comprender los fundamentos de Machine Learning.
- Escribir código Python para análisis de datos.
- Explorar y limpiar datasets.
- Aplicar conceptos estadísticos a datos reales.
- Entrenar modelos de supervised learning.
- Entrenar modelos de unsupervised learning.
- Evaluar modelos de machine learning.
- Interpretar resultados de modelos.
- Comunicar hallazgos usando data storytelling.
- Resolver problemas de biotecnología y SaaS usando Machine Learning.

---

# Módulo 1
# Introducción a la Inteligencia Artificial

## Objetivo de Aprendizaje

Introducir la Inteligencia Artificial, su historia, paradigmas y aplicaciones.

Lecciones

1. ¿Qué es la Inteligencia Artificial?
2. Historia de la IA
3. Tipos de IA
4. Paradigmas de IA
    - Sistemas Expertos
    - Sistemas Basados en Reglas
    - Machine Learning
    - Deep Learning
    - Large Language Models
5. Aplicaciones de IA
6. IA en Biotecnología
7. IA en SaaS

Entregables

- Clase
- Notebook
- Cuestionario
- Laboratorio
- Tarea
- Diapositivas
- Figuras
- Glosario

---

# Módulo 2
# Fundamentos de Programación en Python

## Objetivo de Aprendizaje

Enseñar la programación en Python requerida para Machine Learning.

Lecciones

1. Instalación de Python
2. Jupyter Notebook
3. Variables
4. Tipos de Datos
5. Operadores
6. Funciones
7. Bucles
8. Condicionales
9. Listas
10. Tuplas
11. Diccionarios
12. Sets
13. NumPy
14. Pandas
15. Matplotlib
16. Seaborn

Entregables

- Lecciones basadas en notebooks
- Ejercicios de programación
- Mini-proyectos
- Laboratorios
- Cuestionario

---

# Módulo 3
# Estadística para Machine Learning

## Objetivo de Aprendizaje

Desarrollar intuición estadística para Machine Learning.

Lecciones

### Estadística Descriptiva

- Media
- Mediana
- Moda
- Varianza
- Desviación Estándar
- Rango
- Rango Intercuartílico

### Distribución de Datos

- Histogramas
- Densidad
- Asimetría (Skewness)
- Curtosis (Kurtosis)

### Probabilidad

- Fundamentos de Probabilidad
- Axiomas de Kolmogorov
- Probabilidad Condicional
- Teorema de Bayes
- Probabilidad Total
- Variables Aleatorias

### Distribuciones Estadísticas

- Bernoulli
- Binomial
- Poisson
- Distribución Normal
- Estandarización

### Relaciones

- Covarianza
- Correlación de Pearson
- Correlación de Spearman

### Análisis Exploratorio de Datos (EDA)

- Valores Faltantes
- Valores Atípicos (Outliers)
- Visualización
- Exploración de Features

### Reducción de Dimensionalidad

- PCA
- Varianza Explicada

### Clustering

- K-Means
- Método del Codo (Elbow Method)
- Puntuación de Silueta (Silhouette Score)

### Evaluación de Modelos

- División Train/Test
- Validación Cruzada (Cross Validation)
- MAE
- MSE
- RMSE
- R²

### Data Storytelling

Entregables

Cada concepto estadístico debe incluir

- intuición
- explicación matemática
- derivación cuando corresponda
- implementación en Python
- visualización
- interpretación
- ejercicios

---

# Módulo 4
# Introducción al Machine Learning

## Objetivo de Aprendizaje

Enseñar el workflow de Machine Learning.

Lecciones

### Fundamentos de ML

- Features
- Labels
- Target
- Training
- Predicción
- Generalización
- Overfitting
- Underfitting

### Supervised Learning

Regresión

- Regresión Lineal

Clasificación

- Clasificación Binaria
- Clasificación Multiclase

Algoritmos

- Árboles de Decisión
- Random Forest
- Gradient Boosting

### Unsupervised Learning

- K-Means
- PCA

### Interpretación de Modelos

- Importancia de Features
- Métricas de Rendimiento
- Interpretación de Resultados

### Aplicaciones

- Predicción de Calidad de Producto
- Segmentación de Clientes
- Biotecnología
- Analítica SaaS

Entregables

Cada algoritmo debe incluir

- intuición
- matemáticas
- visualización
- implementación con sklearn
- dataset real
- ejercicios
- notebook
- laboratorio

---

# Proyecto Final

Los estudiantes deben completar un proyecto de Machine Learning de principio a fin.

Pipeline

Problema

↓

Recolección de Datos

↓

Análisis Exploratorio de Datos (EDA)

↓

Limpieza de Datos

↓

Feature Engineering

↓

Entrenamiento del Modelo

↓

Evaluación del Modelo

↓

Interpretación

↓

Presentación

Dominios posibles

- Biotecnología
- Salud
- Agricultura
- Analítica de Clientes
- Métricas SaaS

---

# Reglas de Generación del Repositorio

Por cada lección, OpenCode debe generar

1. lesson.md
2. notebook.ipynb
3. quiz.md
4. lab.md
5. assignment.md
6. figuras
7. referencias
8. glosario

Cada lección debe contener

- objetivos de aprendizaje
- prerrequisitos
- conceptos
- intuición matemática
- ejemplos en Python
- ejemplos biológicos cuando sea posible
- ejemplos SaaS cuando sea posible
- resumen
- conclusiones clave

---

# Grafo de Dependencias

Los estudiantes deben aprender los temas en este orden

Inteligencia Artificial

↓

Python

↓

Estadística

↓

Análisis Exploratorio de Datos (EDA)

↓

Machine Learning

↓

Evaluación de Modelos

↓

Proyectos

No generar lecciones que requieran conceptos de módulos futuros.

---

# Filosofía del Curso

Este curso enfatiza el aprendizaje mediante la construcción.

Cada lección teórica debe ir seguida de práctica de codificación.

Los estudiantes deberían terminar el curso con un portafolio de notebooks, laboratorios y proyectos de Machine Learning, no solo apuntes de clase.
