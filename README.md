# Machine Learning for Data Analysis and SaaS — Traducción al Español

Curso universitario de introducción al Machine Learning para estudiantes de Biotecnología, Bioinformática, Ciencias Biológicas, Análisis de Datos e Ingeniería.

## Requisitos previos

- Matemáticas de bachillerato
- Álgebra básica
- Sin experiencia previa en programación
- Sin experiencia previa en Machine Learning

## Estructura del curso

| Módulo | Título | Temas principales |
|--------|--------|-------------------|
| 1 | Introducción a la Inteligencia Artificial | Historia, paradigmas (Sistemas Expertos, ML, DL, LLMs), aplicaciones en Biotech y SaaS |
| 2 | Fundamentos de Programación en Python | Python, Jupyter, NumPy, Pandas, Matplotlib, Seaborn |
| 3 | Estadística para Machine Learning | Estadística descriptiva, probabilidad, distribuciones, EDA, PCA, K-Means, métricas de evaluación |
| 4 | Introducción al Machine Learning | Regresión, clasificación, árboles de decisión, Random Forest, Gradient Boosting, K-Means, PCA |
| 5 | Ética en Inteligencia Artificial | Bias, fairness, transparencia, privacidad, impacto social |

## Stack tecnológico

- **Lenguaje**: Python 3.12+
- **Librerías**: numpy, pandas, matplotlib, scikit-learn, seaborn, scipy, plotly
- **Notebooks**: Jupyter (.ipynb)
- **Testing**: pytest, pytest-notebook

## Instalación

```bash
# Opción 1: pip
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Opción 2: conda
conda env create -f environment.yml
conda activate ml-bootcamp
```

## Generación de contenido

Este repositorio está diseñado para que un asistente de IA (OpenCode) genere el contenido educativo siguiendo las especificaciones en los archivos de documentación. Ver `CONTENT_WORKFLOW.md` para el flujo de trabajo completo.

## Documentación

| Archivo | Propósito |
|---------|-----------|
| `COURSE_STRUCTURE.md` | Estructura del curso, módulos y objetivos |
| `PROJECT_STRUCTURE.md` | Layout del repositorio |
| `LESSON_STRUCTURE.md` | Template para cada lección |
| `CONTENT_WORKFLOW.md` | Flujo de trabajo para generación de contenido por IA |
| `AGENTS.md` | Instrucciones para el asistente IA |
| `STYLE_GUIDE.md` | Guía de estilo para el contenido |
| `ROADMAP.md` | Plan de desarrollo del curso |

## Licencia

MIT
