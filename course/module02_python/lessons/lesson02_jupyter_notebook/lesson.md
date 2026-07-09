---
Module: 2
Lesson Number: 2
Lesson Title: Jupyter Notebook
Estimated Duration: 45 minutes
Prerequisites: L1 — Installing Python
Learning Objectives:
  - Launch Jupyter Notebook from the command line
  - Crear and edit code cells and markdown cells
  - Execute Python code interactively in a notebook
  - Usar keyboard shortcuts to navigate efficiently
  - Export a notebook to HTML or PDF
Keywords: Jupyter, notebook, cell, kernel, markdown, REPL
Difficulty: Principiante
Programming Concepts: Notebook interface, markdown, code execution, kernel
Datasets Used: Ninguno
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Jupyter Notebook

## Motivación

Escribir código Python en una terminal es funcional pero no es ideal para el análisis de datos. Jupyter Notebook proporciona un entorno interactivo basado en web donde puedes combinar código, visualizaciones y texto explicativo en un solo documento. Es la herramienta estándar para los científicos de datos en todo el mundo. En biotecnología, los notebooks de Jupyter se usan para documentar y compartir análisis de investigación. En SaaS, se usan para análisis exploratorio de datos y generación de informes.

## Panorama General

En la lección anterior, instalaste Python y verificaste que funciona. Ahora aprenderás a usar Jupyter Notebook — el entorno donde escribirás la mayor parte de tu código Python en este curso. Las próximas lecciones sobre variables, tipos de datos y operadores se practicarán todas dentro de Jupyter.

## Teoría

### ¿Qué es Jupyter Notebook?

Jupyter Notebook es una aplicación web de código abierto que te permite crear y compartir documentos que contienen código en vivo, ecuaciones, visualizaciones y texto narrativo.

**Componentes clave:**
- **Notebook** (`.ipynb`): Un documento que contiene celdas
- **Celda**: Una unidad de contenido (código o markdown)
- **Kernel**: El motor computacional que ejecuta el código
- **Dashboard**: La interfaz del navegador de archivos

### Tipos de Celdas

1. **Celdas de código**: Contienen código Python que puede ejecutarse. La salida aparece debajo de la celda.
2. **Celdas Markdown**: Contienen texto formateado usando sintaxis Markdown (encabezados, listas, enlaces, imágenes, ecuaciones LaTeX).

### Modos

Jupyter tiene dos modos de teclado:

- **Modo comando** (borde azul): Los atajos de teclado actúan a nivel del notebook
- **Modo edición** (borde verde): Escribir inserta texto en la celda actual

### Modelo de Ejecución

Cuando ejecutas una celda de código, el kernel ejecuta el código. Las variables y funciones definidas en una celda están disponibles en las celdas siguientes. El kernel mantiene el estado hasta que se reinicia.

## Explicación Visual

```
┌────────────────────────────────────────────────────┐
│                  Jupyter Notebook                    │
├────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────┐│
│  │ [File] [Edit] [View] [Insert] [Cell] [Kernel]  ││
│  ├────────────────────────────────────────────────┤│
│  │ [-] Markdown Cell (Title)                      ││
│  │    # My Analysis                               ││
│  ├────────────────────────────────────────────────┤│
│  │ [ ] Code Cell                                  ││
│  │    import pandas as pd                         ││
│  │    df = pd.read_csv('data.csv')               ││
│  │    df.head()                                   ││
│  │                                                ││
│  │ Out[1]: [table output]                         ││
│  ├────────────────────────────────────────────────┤│
│  │ [-] Markdown Cell (Explanation)                ││
│  │    ## Results                                  ││
│  │    The data shows...                           ││
│  └────────────────────────────────────────────────┘│
└────────────────────────────────────────────────────┘
```

## Implementación en Python

### Iniciando Jupyter

```bash
# Instalar si no está instalado
pip install jupyter

# Iniciar
jupyter notebook
```

Esto abre el dashboard de Jupyter en tu navegador en `http://localhost:8888`.

### Creando un Nuevo Notebook

1. Haz clic en "New" → "Python 3"
2. Se abre un nuevo notebook con una celda de código vacía

### Trabajando con Celdas

```python
# This is a code cell — press Shift+Enter to run it
print("Hello, Jupyter!")
```

### Formato Markdown

En una celda markdown, puedes escribir:
```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**, *italic text*, `inline code`

- List item 1
- List item 2

[Link text](https://example.com)

$$ E = mc^2 $$
```

### Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| Shift+Enter | Ejecutar celda y seleccionar la siguiente |
| Ctrl+Enter | Ejecutar celda y quedarse |
| Alt+Enter | Ejecutar celda e insertar debajo |
| A | Insertar celda arriba (modo comando) |
| B | Insertar celda abajo (modo comando) |
| DD | Eliminar celda (modo comando) |
| M | Cambiar a celda markdown (modo comando) |
| Y | Cambiar a celda de código (modo comando) |
| Ctrl+S | Guardar notebook |
| Z | Deshacer eliminación de celda |

### Guardar y Exportar

- **Guardar**: File → Save and Checkpoint (o Ctrl+S)
- **Exportar**: File → Download as → HTML, PDF, Python script, etc.

## Ejemplo en Biotecnología

**Escenario**: Un investigador está analizando datos de expresión génica y quiere documentar los pasos del análisis.

La estructura del notebook sería:
- **Celda 1 (Markdown)**: Título y pregunta de investigación
- **Celda 2 (Código)**: Cargar datos de expresión con Pandas
- **Celda 3 (Markdown)**: Metodología de limpieza de datos
- **Celda 4 (Código)**: Filtrar y normalizar datos
- **Celda 5 (Markdown)**: Interpretación de resultados
- **Celda 6 (Código)**: Generar mapa de calor con Seaborn

Este notebook puede compartirse con colaboradores que pueden reproducir el análisis.

## Ejemplo en SaaS

**Escenario**: Un analista de datos en una empresa SaaS necesita explorar datos de abandono de clientes y compartir hallazgos.

La estructura del notebook:
- **Celda 1 (Markdown)**: Análisis de abandono para el informe del Q1
- **Celda 2 (Código)**: Cargar datos de clientes
- **Celda 3 (Código)**: Calcular tasa de abandono por cohorte
- **Celda 4 (Markdown)**: Hallazgos clave
- **Celda 5 (Código)**: Visualización de tendencias de abandono
- **Celda 6 (Markdown)**: Recomendaciones

El notebook puede exportarse a HTML y compartirse con el equipo de producto.

## Errores Comunes

1. **Ejecutar celdas fuera de orden**: Las variables definidas después pueden no estar disponibles. Usa "Run All" (Cell → Run All) para ejecutar secuencialmente.
2. **No reiniciar el kernel**: Cuando el código se comporta inesperadamente, reinicia el kernel (Kernel → Restart & Run All).
3. **Olvidar guardar**: Jupyter guarda automáticamente, pero guarda manualmente antes de cerrar.
4. **Usar print() excesivamente**: La última expresión en una celda se muestra automáticamente.
5. **Cerrar la terminal**: El servidor de Jupyter se ejecuta en la terminal. Cerrarla detiene el servidor.

## Buenas Prácticas

- Usa celdas markdown para documentar tu análisis
- Mantén las celdas enfocadas en una sola tarea
- Ejecuta las celdas en orden de arriba a abajo
- Reinicia y ejecuta todo antes de compartir un notebook
- Usa nombres de archivo significativos (ej., `gene_expression_analysis.ipynb`)
- Limpia las salidas antes de subir notebooks al control de versiones

## Resumen

- Jupyter Notebook es un entorno interactivo basado en web para análisis de datos
- Los notebooks contienen celdas de código y markdown
- Las celdas de código ejecutan Python; las celdas markdown muestran texto e imágenes formateados
- El kernel mantiene el estado entre ejecuciones de celdas
- Los atajos de teclado aceleran el flujo de trabajo
- Exporta notebooks para compartir resultados

## Términos Clave

- **Notebook** (`.ipynb`): Documento JSON que contiene código, texto y salidas
- **Celda**: Unidad individual de contenido (código o markdown)
- **Kernel**: Motor de Python que ejecuta las celdas de código
- **Modo comando**: Modo de borde azul para acciones a nivel de notebook
- **Modo edición**: Modo de borde verde para editar contenido de la celda
- **Dashboard**: Interfaz del navegador de archivos de Jupyter
- **Shift+Enter**: Ejecutar celda actual y pasar a la siguiente

## Ejercicios

### Nivel 1: Básico

1. ¿Cuál es la diferencia entre una celda de código y una celda markdown?
2. ¿Qué hace `Shift+Enter` en Jupyter?
3. ¿Cómo creas una nueva celda debajo de la actual?

### Nivel 2: Implementación

4. Crea un notebook con al menos una celda markdown (con un encabezado y una lista con viñetas) y una celda de código que imprima "Jupyter is working!"
5. Exporta tu notebook como HTML.

### Nivel 3: Pensamiento Crítico

6. ¿Por qué es importante ejecutar las celdas en orden de arriba a abajo? ¿Qué problemas pueden ocurrir cuando las celdas se ejecutan fuera de orden?
7. En un entorno de investigación colaborativa, ¿qué ventajas ofrece un notebook de Jupyter sobre un script tradicional de Python?

## Desafío de Programación

Crea un notebook de Jupyter llamado `my_first_notebook.ipynb` que:
1. Tenga una celda de título (Markdown H1): "My First Notebook"
2. Una celda markdown explicando lo que hace el notebook
3. Una celda de código que cree una lista de tus 5 cosas favoritas
4. Una celda de código que imprima cada elemento con un número
5. Una celda markdown con una conclusión
Exporta el notebook como HTML.
