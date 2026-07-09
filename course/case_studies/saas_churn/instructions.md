# Instrucciones: Predicción de Cancelación de Clientes SaaS

## Planteamiento del Problema

Eres un científico de datos en una empresa SaaS que ofrece una plataforma de gestión de proyectos. La empresa tiene 1.000 clientes y experimenta una tasa de cancelación (churn rate) de aproximadamente el 25%. Tu CEO te ha pedido que construyas un modelo predictivo que identifique a los clientes en riesgo de cancelación para que la empresa pueda ofrecer incentivos de retención de forma proactiva.

Tu análisis impactará directamente en la estrategia de negocio: cada cliente retenido le ahorra a la empresa costos de adquisición y aumenta el valor de por vida (lifetime value). Debes recomendar una estrategia de retención rentable basada en los insights de tu modelo.

## Tareas

### Tarea 1: Carga de Datos y Exploración Inicial (10 puntos)

1. Carga el dataset usando pandas.
2. Muestra las primeras 5 filas, los tipos de datos y las estadísticas básicas.
3. Verifica si hay valores faltantes.
4. Imprime la forma del dataset y la tasa de churn.

### Tarea 2: Análisis Exploratorio de Datos (20 puntos)

1. Grafica la distribución de churn (gráfico de barras o circular).
2. Crea histogramas o gráficos KDE para las features numéricas, coloreadas por estado de churn.
3. Grafica boxplots comparando clientes que cancelaron vs. los que se quedaron para cada feature numérica.
4. Crea un heatmap de correlación de las features numéricas.
5. Analiza la tasa de churn por tipo de contrato (gráfico de barras).
6. Analiza la tasa de churn por método de pago (gráfico de barras).

### Tarea 3: Preprocesamiento de Datos (15 puntos)

1. Elimina la columna CustomerID.
2. Codifica las variables categóricas usando one-hot encoding.
3. Separa las features (X) y el target (y).
4. Divide en conjuntos de entrenamiento (70%) y prueba (30%) con estratificación.
5. Estandariza las features numéricas usando StandardScaler.

### Tarea 4: Entrenamiento de Modelos (25 puntos)

Entrena los siguientes tres clasificadores:

1. **Regresión Logística**:
   - Entrena con parámetros por defecto.
   - Imprime la precisión (accuracy) de entrenamiento y prueba.

2. **Random Forest**:
   - Entrena con 100 árboles.
   - Imprime la precisión (accuracy) de entrenamiento y prueba.

3. **Gradient Boosting**:
   - Entrena con 100 estimadores.
   - Imprime la precisión (accuracy) de entrenamiento y prueba.

### Tarea 5: Evaluación de Modelos (15 puntos)

Para los tres modelos, calcula y muestra:

1. Matriz de confusión (visualiza con heatmaps)
2. Reporte de clasificación (precision, recall, F1-score para ambas clases)
3. Curvas ROC con puntuaciones AUC en el mismo eje
4. Un gráfico de barras comparativo de todas las métricas entre modelos

### Tarea 6: Análisis de Importancia de Features (10 puntos)

1. Extrae las importancias de features de los modelos Random Forest y Gradient Boosting.
2. Grafica las 10 features más importantes para cada uno.
3. Compara con los coeficientes de la Regresión Logística.
4. Identifica los 3 principales impulsores del churn.

### Tarea 7: Recomendaciones de Negocio y Análisis Costo-Beneficio (5 puntos)

1. Basándote en tus hallazgos, recomienda 3 acciones de negocio para reducir el churn.
2. **Análisis costo-beneficio**: Supón:
   - Costo de adquisición de cliente (CAC): $500
   - Ingreso mensual por cliente: $75
   - Vida útil promedio del cliente que no cancela: 36 meses
   - Descuento de retención: 20% de descuento por 6 meses ($90 de descuento por cliente retenido)
   - Supón que tu modelo puede identificar el 60% de los clientes que cancelarán y la retención salva al 40% de esos clientes objetivo.
   - Calcula: ahorro total vs. costo total del programa de retención.
   - ¿Vale la pena implementar el programa?
