# Rúbrica: Diagnóstico de Enfermedades a partir de Datos de Expresión Génica

**Puntaje total: 100**

## Tarea 1: Carga de Datos y Exploración (15 puntos)

| Criterio | Excelente (15) | Bueno (11) | Adecuado (7) | Deficiente (3) |
|----------|----------------|------------|--------------|----------------|
| Carga de datos | Cargado correctamente con manejo de errores | Cargado correctamente | Cargado con problemas menores | No cargado o incorrecto |
| Inspección de datos | Mostró head, info, describe, shape, distribución de clases | Mostró la mayoría de inspecciones | Mostró info básica | Faltan inspecciones clave |
| Valores faltantes | Verificó y reportó | Verificó | Mencionó | No verificó |

## Tarea 2: Análisis Exploratorio de Datos (20 puntos)

| Criterio | Excelente (20) | Bueno (15) | Adecuado (10) | Deficiente (5) |
|----------|----------------|------------|---------------|----------------|
| Distribuciones de expresión | KDE/histogramas claros con leyenda y etiquetas | Buenos gráficos con etiquetas | Gráficos básicos | Faltante o poco claro |
| Boxplot comparativo | Boxplot bien formateado de genes diferenciales | Buen boxplot | Boxplot básico | Faltante |
| Heatmap de correlación | Heatmap anotado con interpretación | Buen heatmap | Heatmap básico | Faltante |
| Análisis de varianza | Genes principales identificados y graficados | Identificados y graficados | Identificados | No realizado |

## Tarea 3: Selección de Features (10 puntos)

| Criterio | Excelente (10) | Bueno (7) | Adecuado (5) | Deficiente (2) |
|----------|----------------|-----------|--------------|----------------|
| Selección por varianza | Top 10 seleccionados correctamente | Seleccionados con problema menor | Seleccionados | No realizado |
| División train/test | División estratificada, proporciones correctas | División correcta | División básica | Faltante |

## Tarea 4: Entrenamiento de Modelos (25 puntos)

| Criterio | Excelente (25) | Bueno (19) | Adecuado (13) | Deficiente (6) |
|----------|----------------|------------|---------------|----------------|
| Regresión Logística | Entrenada correctamente, métricas impresas | Entrenada con problema menor | Entrenada | No entrenada |
| Random Forest | Entrenado correctamente, métricas impresas | Entrenado con problema menor | Entrenado | No entrenado |
| Calidad del código | Limpio, documentado, sin errores | Mayormente limpio | Algunos problemas | Mala calidad |

## Tarea 5: Evaluación de Modelos (15 puntos)

| Criterio | Excelente (15) | Bueno (11) | Adecuado (7) | Deficiente (3) |
|----------|----------------|------------|--------------|----------------|
| Matrices de confusión | Ambos modelos, visualización clara | Ambos modelos | Un modelo | Faltante |
| Reportes de clasificación | Ambos modelos, formateados | Ambos modelos | Un modelo | Faltante |
| Curvas ROC | Ambos modelos con AUC, bien graficadas | Ambos modelos | Un modelo | Faltante |
| Comparación de modelos | Gráfico de barras comparando todas las métricas | Gráfico con la mayoría de métricas | Comparación básica | Faltante |

## Tarea 6: Importancia de Features (10 puntos)

| Criterio | Excelente (10) | Bueno (7) | Adecuado (5) | Deficiente (2) |
|----------|----------------|-----------|--------------|----------------|
| Extracción de importancia | Importancia RF extraída, top 10 graficados | Extraída y graficada | Extraída | No realizada |
| Interpretación | Genes clave identificados con contexto biológico | Buena interpretación | Básica | Faltante |

## Tarea 7: Interpretación Biológica (5 puntos)

| Criterio | Excelente (5) | Bueno (4) | Adecuado (3) | Insuficiente (1) |
|----------|---------------|-----------|--------------|------------------|
| Discusión | Discusión profunda con implicaciones y limitaciones | Buena discusión | Discusión básica | Faltante o superficial |

## Calidad del Código y Presentación

| Criterio | Puntos |
|----------|--------|
| El código se ejecuta sin errores | −5 si hay errores |
| Todas las visualizaciones tienen títulos, etiquetas de ejes y leyendas | −2 por elemento faltante |
| Formato profesional | −2 por formato deficiente |
