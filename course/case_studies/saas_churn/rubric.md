# Rúbrica: Predicción de Cancelación de Clientes SaaS

**Puntaje total: 100**

## Tarea 1: Carga de Datos y Exploración Inicial (10 puntos)

| Criterio | Excelente (10) | Bueno (7) | Adecuado (4) | Insuficiente (1) |
|----------|----------------|-----------|--------------|------------------|
| Carga de datos | Cargado correctamente con manejo de errores | Cargado correctamente | Cargado con problemas menores | No cargado |
| Inspección inicial | Mostró head, info, describe, shape, tasa de churn | Mostró la mayoría de las inspecciones | Inspección básica | Faltan elementos clave |
| Valores faltantes | Verificó y reportó | Verificó | Mencionó | No verificó |

## Tarea 2: Análisis Exploratorio de Datos (20 puntos)

| Criterio | Excelente (20) | Bueno (15) | Adecuado (10) | Deficiente (5) |
|----------|----------------|------------|---------------|----------------|
| Distribución de churn | Visualización clara con porcentajes | Buen gráfico | Gráfico básico | Faltante |
| Distribuciones de features | KDE/hist para todas las features numéricas con hue | La mayoría de features | Algunas features | Faltante |
| Boxplots | Boxplots para todas las features numéricas | La mayoría de features | Algunas features | Faltante |
| Heatmap de correlación | Heatmap anotado con insights | Buen heatmap | Heatmap básico | Faltante |
| Análisis categórico | Tasa de churn por tipo de contrato y método de pago | Un análisis | Básico | Faltante |

## Tarea 3: Preprocesamiento de Datos (15 puntos)

| Criterio | Excelente (15) | Bueno (11) | Adecuado (7) | Deficiente (3) |
|----------|----------------|------------|--------------|----------------|
| Codificación | One-hot encoding correcto de todas las features categóricas | Codificación correcta | Codificación parcial | Faltante |
| División train/test | División estratificada, proporciones correctas | División correcta | División básica | Faltante |
| Escalado | Features escaladas correctamente | Escaladas | Parcial | Faltante |

## Tarea 4: Entrenamiento de Modelos (25 puntos)

| Criterio | Excelente (25) | Bueno (19) | Adecuado (13) | Deficiente (6) |
|----------|----------------|------------|---------------|----------------|
| Regresión Logística | Entrenada correctamente, métricas impresas | Entrenada | Parcial | No entrenada |
| Random Forest | Entrenado correctamente, métricas impresas | Entrenado | Parcial | No entrenado |
| Gradient Boosting | Entrenado correctamente, métricas impresas | Entrenado | Parcial | No entrenado |
| Calidad del código | Limpio, documentado, sin errores | Mayormente limpio | Algunos problemas | Mala calidad |

## Tarea 5: Evaluación de Modelos (15 puntos)

| Criterio | Excelente (15) | Bueno (11) | Adecuado (7) | Deficiente (3) |
|----------|----------------|------------|--------------|----------------|
| Matrices de confusión | Los 3 modelos, con heatmaps | Los 3 modelos | Un modelo | Faltante |
| Reportes de clasificación | Los 3 modelos, formateados | Los 3 modelos | Un modelo | Faltante |
| Curvas ROC | Las 3 en el mismo gráfico con AUC | Las 3 | Un modelo | Faltante |
| Gráfico comparativo | Gráfico de barras comparando todas las métricas | La mayoría de métricas | Básico | Faltante |

## Tarea 6: Importancia de Features (10 puntos)

| Criterio | Excelente (10) | Bueno (7) | Adecuado (5) | Deficiente (2) |
|----------|----------------|-----------|--------------|----------------|
| Importancia RF | Extraída, top 10 graficados | Extraída y graficada | Extraída | No realizada |
| Importancia GBT | Extraída, top 10 graficados | Extraída y graficada | Extraída | No realizada |
| Top 3 impulsores | Identificados y discutidos | Identificados | Básico | Faltante |

## Tarea 7: Recomendaciones de Negocio (5 puntos)

| Criterio | Excelente (5) | Bueno (4) | Adecuado (3) | Insuficiente (1) |
|----------|---------------|-----------|--------------|------------------|
| Recomendaciones | 3 recomendaciones accionables basadas en datos | 2 recomendaciones | 1 recomendación | Faltante |
| Costo-beneficio | Análisis completo con cálculos y conclusión | Análisis parcial | Cálculo básico | Faltante |

## Calidad del Código y Presentación

| Criterio | Puntos |
|----------|--------|
| El código se ejecuta sin errores | −5 si hay errores |
| Todas las visualizaciones tienen títulos, etiquetas de ejes y leyendas | −2 por elemento faltante |
| Formato profesional | −2 por formato deficiente |
