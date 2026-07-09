# Instrucciones: Diagnóstico de Enfermedades a partir de Datos de Expresión Génica

## Planteamiento del Problema

Eres un analista de bioinformática que trabaja en un laboratorio de genómica. El laboratorio ha recolectado datos de expresión génica de 100 pacientes — 50 diagnosticados con una enfermedad genética y 50 controles sanos. Tu tarea es construir un modelo de machine learning que pueda diagnosticar la enfermedad a partir de los niveles de expresión de 20 genes candidatos.

Tu análisis ayudará a identificar qué genes son más predictivos de la enfermedad, guiando potencialmente futuras investigaciones biológicas y la toma de decisiones clínicas.

## Tareas

### Tarea 1: Carga de Datos y Exploración (15 puntos)

1. Carga el dataset usando pandas.
2. Muestra las primeras 5 filas, los tipos de datos y las estadísticas básicas.
3. Verifica si hay valores faltantes.
4. Imprime la forma del dataset y la distribución de clases.

### Tarea 2: Análisis Exploratorio de Datos (20 puntos)

1. Grafica la distribución de expresión génica para cada clase usando histogramas o gráficos KDE.
2. Crea un boxplot comparando los niveles de expresión de los 8 genes diferencialmente expresados entre clases.
3. Calcula la matriz de correlación entre genes y visualízala como un heatmap.
4. Identifica los 5 genes con mayor varianza en todas las muestras.
5. Grafica un heatmap de los 5 genes de alta varianza.

### Tarea 3: Selección de Features (10 puntos)

1. Selecciona los 10 genes principales por varianza.
2. Separa las features (X) y el target (y).
3. Divide los datos en conjuntos de entrenamiento (70%) y prueba (30%) con estratificación.
4. Estandariza las features usando StandardScaler.

### Tarea 4: Entrenamiento de Modelos (25 puntos)

Entrena los siguientes modelos con los datos de entrenamiento:

1. **Regresión Logística**:
   - Entrena con parámetros por defecto.
   - Imprime la precisión (accuracy) de entrenamiento y prueba.

2. **Random Forest**:
   - Entrena con 100 árboles.
   - Imprime la precisión (accuracy) de entrenamiento y prueba.

### Tarea 5: Evaluación de Modelos (15 puntos)

Para ambos modelos, calcula y muestra:

1. Matriz de confusión
2. Reporte de clasificación (precision, recall, F1-score)
3. Curva ROC y puntuación AUC
4. Compara los modelos usando un gráfico de barras de métricas

### Tarea 6: Interpretación de Importancia de Features (10 puntos)

1. Extrae las importancias de features del modelo Random Forest.
2. Grafica los 10 genes más importantes.
3. Identifica qué rutas biológicas están más afectadas según los genes importantes.

### Tarea 7: Interpretación Biológica (5 puntos)

Escribe un párrafo corto discutiendo:

- Qué genes son más predictivos de la enfermedad.
- Cómo estos resultados podrían guiar investigaciones biológicas futuras.
- Limitaciones del estudio.

## Entrega

Entrega un notebook completado con todas las celdas de código ejecutadas y todas las visualizaciones mostradas. Agrega celdas markdown para explicar tu razonamiento en cada paso.

## Calificación

Ver `rubric.md` para los criterios detallados de calificación. Total: 100 puntos.
