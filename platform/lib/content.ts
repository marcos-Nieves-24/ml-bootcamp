import type { Lesson, LabStep, Deliverable } from "./data"

// ─── Lessons per Module (Expediciones) ─────────────────────────────────────

export const MOCK_LESSONS: Lesson[] = [
  // intro-ml
  {
    id: "intro-what-is-ml",
    moduleId: "intro-ml",
    title: "¿Qué es Machine Learning?",
    content: `
Machine Learning es una rama de la inteligencia artificial que permite a los sistemas aprender y mejorar automáticamente a partir de la experiencia, sin ser programados explícitamente.

## ¿Cómo funciona?

En lugar de escribir reglas explícitas, le proporcionamos datos al algoritmo y él descubre patrones por sí mismo.

## Aplicaciones cotidianas

- Filtros de spam en tu email
- Recomendaciones de Netflix y Spotify
- Reconocimiento facial en fotos
- Asistentes virtuales como Siri y Alexa

## Tipos principales

1. **Aprendizaje Supervisado**: el modelo aprende con datos etiquetados (ej: fotos con nombre del animal)
2. **Aprendizaje No Supervisado**: el modelo encuentra patrones sin etiquetas (ej: segmentación de clientes)
3. **Aprendizaje por Refuerzo**: el modelo aprende por ensayo y error recibiendo recompensas (ej: AlphaGo)
    `.trim(),
    duration: "15 min",
    order: 1,
  },
  {
    id: "intro-types-of-ml",
    moduleId: "intro-ml",
    title: "Tipos de Aprendizaje Automático",
    content: `
Cada tipo de aprendizaje resuelve problemas diferentes. Veamos los tres principales en detalle.

## Aprendizaje Supervisado
El algoritmo aprende de un conjunto de datos etiquetados. Dado un input, predice un output.

**Ejemplos:**
- Regresión: predecir el precio de una casa
- Clasificación: determinar si un email es spam o no

## Aprendizaje No Supervisado
El algoritmo busca patrones en datos sin etiquetas.

**Ejemplos:**
- Clustering: agrupar clientes por comportamiento
- Reducción de dimensionalidad: simplificar datos manteniendo información

## Aprendizaje por Refuerzo
Un agente aprende a tomar decisiones mediante prueba y error, recibiendo recompensas o castigos.

**Ejemplos:**
- Juegos: AlphaGo, juegos de Atari
- Robótica: caminar, agarrar objetos
    `.trim(),
    duration: "20 min",
    order: 2,
  },
  {
    id: "intro-ml-pipeline",
    moduleId: "intro-ml",
    title: "El Pipeline de ML",
    content: `
Un proyecto de Machine Learning sigue un flujo estructurado. Conocerlo te ayuda a no saltarte pasos críticos.

## Pasos del Pipeline

1. **Definición del problema** — ¿Qué queremos predecir? ¿Qué métrica define el éxito?
2. **Recolección de datos** — Obtener datos relevantes y suficientes
3. **Limpieza y preparación** — Manejar valores nulos, outliers, normalizar
4. **Feature Engineering** — Crear variables que ayuden al modelo
5. **Selección del modelo** — Elegir el algoritmo adecuado al problema
6. **Entrenamiento y validación** — Dividir datos en train/test, ajustar hiperparámetros
7. **Evaluación** — Medir rendimiento con métricas (accuracy, precision, recall, F1)
8. **Despliegue** — Poner el modelo en producción
9. **Monitoreo** — Verificar que el modelo no degrade con el tiempo

> 💡 El 80% del tiempo se va en los pasos 2-4. Nunca subestimes la calidad de los datos.
    `.trim(),
    duration: "15 min",
    order: 3,
  },
  {
    id: "intro-terminology",
    moduleId: "intro-ml",
    title: "Terminología Clave",
    content: `
Antes de profundizar, es importante tener claros los conceptos fundamentales.

## Glosario

| Término | Significado |
|---------|-------------|
| **Feature** | Variable de entrada que usa el modelo (ej: edad, precio) |
| **Label** | Variable objetivo que queremos predecir |
| **Training set** | Datos con los que el modelo aprende |
| **Test set** | Datos con los que evaluamos el modelo (no los vio antes) |
| **Overfitting** | El modelo memoriza los datos de entrenamiento pero no generaliza |
| **Underfitting** | El modelo es demasiado simple y no captura patrones |
| **Hiperparámetro** | Configuración que elegimos antes de entrenar (ej: learning rate) |
| **Validación cruzada** | Técnica para evaluar el modelo usando múltiples particiones |

## Ejercicio mental

Imagina que quieres predecir si mañana lloverá (label) usando la temperatura, humedad y presión atmosférica (features). ¿Qué tipo de aprendizaje es?
    `.trim(),
    duration: "10 min",
    order: 4,
  },

  // ml-algorithms
  {
    id: "algo-linear-regression",
    moduleId: "ml-algorithms",
    title: "Regresión Lineal",
    content: `
La regresión lineal es el algoritmo más simple y fundamental de ML supervisado.

## ¿Cómo funciona?

Encuentra la línea recta (o hiperplano) que mejor se ajusta a los datos:

y = mx + b

Donde m es la pendiente y b es el intercepto.

## ¿Cuándo usarla?

- Relación lineal entre variables
- Predicción de valores numéricos continuos
- Ejemplos: precio de casas, ventas, temperatura

## Evaluación

Métricas comunes: MSE (Mean Squared Error), MAE, R²

> 🔬 La regresión lineal es a ML lo que el "Hola Mundo" a la programación. Dominarla es esencial.
    `.trim(),
    duration: "20 min",
    order: 1,
  },
  {
    id: "algo-decision-trees",
    moduleId: "ml-algorithms",
    title: "Árboles de Decisión",
    content: `
Los árboles de decisión imitan la forma en que los humanos tomamos decisiones: una serie de preguntas sí/no.

## Estructura

- **Raíz**: primera pregunta/feature
- **Ramas**: resultados de cada pregunta
- **Hojas**: decisión final (clase o valor)

## Ventajas

- Fáciles de interpretar y visualizar
- No requieren normalización de datos
- Manejan features numéricas y categóricas

## Desventajas

- Propensos a overfitting
- Pequeños cambios en datos → árbol muy diferente

## Hiperparámetros clave

- **max_depth**: profundidad máxima (controla overfitting)
- **min_samples_split**: mínimo de muestras para dividir un nodo
- **max_features**: features a considerar en cada split
    `.trim(),
    duration: "20 min",
    order: 2,
  },
  {
    id: "algo-svm",
    moduleId: "ml-algorithms",
    title: "Support Vector Machines (SVM)",
    content: `
SVM encuentra el hiperplano que mejor separa las clases maximizando el margen entre ellas.

## Idea clave

No solo importa separar las clases, sino hacerlo con el mayor margen posible.

## Kernel Trick

Cuando los datos no son linealmente separables, SVM usa kernels para proyectarlos a una dimensión superior:
- **Lineal**: para datos separables
- **Polinomial**: para relaciones polinómicas
- **RBF (Radial Basis Function)**: para relaciones complejas

## Cuándo usar SVM

- Problemas de clasificación con dimensiones altas
- Cuando las clases son claramente separables
- Dataset no demasiado grande (O(n²) o O(n³))
    `.trim(),
    duration: "15 min",
    order: 3,
  },
  {
    id: "algo-neural-networks",
    moduleId: "ml-algorithms",
    title: "Redes Neuronales",
    content: `
Las redes neuronales están inspiradas en el cerebro humano. Son la base del Deep Learning.

## Componentes

1. **Neurona**: recibe inputs, aplica peso y bias, pasa por función de activación
2. **Capa**: conjunto de neuronas
3. **Red**: múltiples capas conectadas

## Funciones de activación comunes

- **ReLU**: f(x) = max(0, x) — la más usada en capas ocultas
- **Sigmoid**: para probabilidades (0 a 1)
- **Softmax**: para clasificación multiclase

## Forward y Backward propagation

- **Forward**: los inputs pasan por la red generando un output
- **Backward**: se calcula el error y se ajustan los pesos (gradient descent)

> 🧠 Una red con una sola capa oculta puede aproximar CUALQUIER función continua (Universal Approximation Theorem).
    `.trim(),
    duration: "25 min",
    order: 4,
  },
  {
    id: "algo-ensemble",
    moduleId: "ml-algorithms",
    title: "Métodos Ensemble",
    content: `
Combinar múltiples modelos débiles para crear uno más fuerte y robusto.

## Tipos principales

### Bagging (Bootstrap Aggregating)
Entrena varios modelos en paralelo con submuestras aleatorias de datos.
- **Random Forest**: el rey del bagging, combina muchos árboles de decisión

### Boosting
Entrena modelos secuencialmente, cada uno corrige los errores del anterior.
- **AdaBoost**: asigna pesos a los datos mal clasificados
- **Gradient Boosting**: optimiza usando gradiente descendente (XGBoost, LightGBM)

### Stacking
Combina diferentes tipos de modelos usando un meta-modelo.

## ¿Cuándo usar Ensemble?

Casi siempre. Los ensembles suelen ganar en competencias (Kaggle) porque son más robustos que un solo modelo.

> 🏆 XGBoost fue el algoritmo dominante en Kaggle durante años.
    `.trim(),
    duration: "20 min",
    order: 5,
  },

  // data-engineering
  {
    id: "data-cleaning",
    moduleId: "data-engineering",
    title: "Limpieza de Datos",
    content: `
Los datos del mundo real son desordenados. La limpieza es el paso más importante (y menos glamoroso) del pipeline.

## Problemas comunes

1. **Valores nulos** — ¿Eliminar? ¿Imputar con media/mediana?
2. **Outliers** — ¿Error de medición o dato real?
3. **Duplicados** — ¿Registros repetidos?
4. **Inconsistencias** — "USA" vs "US" vs "United States"

## Estrategias para valores nulos

- Eliminar filas (si son pocos)
- Imputar con media/mediana/moda
- Imputar con valor constante (ej: 0, "Desconocido")
- Usar modelos para predecir el valor faltante

## Herramientas

**Pandas** (Python) es la librería estándar para limpieza:
- df.isnull().sum() — detectar nulos
- df.dropna() — eliminar nulos
- df.fillna(value) — imputar valores
    `.trim(),
    duration: "20 min",
    order: 1,
  },
  {
    id: "feature-engineering",
    moduleId: "data-engineering",
    title: "Feature Engineering",
    content: `
Feature Engineering es el arte de crear mejores variables de entrada para tu modelo. Es donde más impacto puedes tener.

## Técnicas principales

### Transformaciones
- Normalización (escalar a [0, 1])
- Estandarización (media=0, std=1)
- Log transform (para distribuciones sesgadas)

### Encoding
- One-Hot Encoding: variables categóricas → columnas binarias
- Label Encoding: asignar números a categorías
- Target Encoding: reemplazar categoría por media de la target

### Creación de features
- Interacciones: feature1 * feature2
- Features temporales: día de semana, mes, hora
- Agregaciones: media, suma, count por grupo

> 💡 Un buen feature engineering puede superar a un modelo complejo. Invertí tiempo aquí.
    `.trim(),
    duration: "25 min",
    order: 2,
  },
  {
    id: "data-pipelines",
    moduleId: "data-engineering",
    title: "Pipelines de Datos",
    content: `
Un pipeline de datos automatiza el flujo desde la fuente hasta el modelo.

## Componentes de un pipeline

1. **Ingesta** — Obtener datos (API, DB, archivos)
2. **Validación** — Verificar formato, rangos, completitud
3. **Transformación** — Limpiar, feature engineering
4. **Almacenamiento** — Guardar datos procesados
5. **Orquestación** — Programar ejecuciones (Airflow, Prefect)

## Herramientas populares

| Herramienta | Uso |
|-------------|-----|
| Apache Airflow | Orquestación de pipelines |
| dbt | Transformaciones SQL |
| Great Expectations | Validación de datos |
| Feast | Feature Store |

## Buenas prácticas

- Hacer los pipelines idempotentes (mismo input = mismo output)
- Versionar los datos y los modelos (DVC, MLflow)
- Monitorear la calidad de los datos en producción
    `.trim(),
    duration: "15 min",
    order: 3,
  },

  // ethical-ml
  {
    id: "ethics-bias",
    moduleId: "ethical-ml",
    title: "Sesgo en Machine Learning",
    content: `
Los modelos de ML pueden perpetuar o amplificar sesgos existentes en la sociedad.

## Tipos de sesgo

- **Sesgo de datos históricos**: si el pasado fue injusto, el modelo lo aprenderá
- **Sesgo de muestreo**: los datos de entrenamiento no representan a la población
- **Sesgo de etiquetado**: las etiquetas reflejan prejuicios humanos
- **Sesgo de confirmación**: buscamos datos que confirmen nuestras hipótesis

## Casos reales

- Algoritmo de contratación de Amazon que discriminaba mujeres
- Sistemas de reconocimiento facial con peor precisión en personas de piel oscura
- Algoritmos de justicia penal con sesgo racial

## ¿Cómo mitigarlo?

1. Auditar los datos de entrenamiento
2. Incluir equipos diversos en el desarrollo
3. Medir fairness (equidad) con métricas específicas
4. Documentar las limitaciones del modelo
    `.trim(),
    duration: "20 min",
    order: 1,
  },
  {
    id: "ethics-fairness",
    moduleId: "ethical-ml",
    title: "Fairness y Equidad",
    content: `
La equidad en ML no es un concepto único. Hay varias definiciones que pueden entrar en conflicto.

## Definiciones de Fairness

1. **Igualdad de oportunidad**: la misma tasa de verdaderos positivos en todos los grupos
2. **Paridad demográfica**: misma tasa de predicción positiva en todos los grupos
3. **Igualdad de precisión**: mismo error en todos los grupos

## El problema

No se pueden satisfacer todas las definiciones simultáneamente. Hay que elegir según el contexto.

## Herramientas

- **AIF360** (IBM): toolkit de fairness
- **Fairlearn** (Microsoft): evaluación de equidad
- **What-If Tool** (Google): exploración visual de fairness

> ⚖️ La equidad es una decisión de negocio y ética, no solo técnica.
    `.trim(),
    duration: "15 min",
    order: 2,
  },
  {
    id: "ethics-responsible",
    moduleId: "ethical-ml",
    title: "IA Responsable",
    content: `
IA Responsable es un marco para desarrollar y desplegar sistemas de IA de manera ética, transparente y accountable.

## Principios clave

1. **Transparencia** — Los usuarios deben saber que interactúan con un sistema de IA
2. **Explicabilidad** — El modelo debe poder explicar sus decisiones (e.g., SHAP, LIME)
3. **Privacidad** — Los datos personales deben protegerse (GDPR, CCPA)
4. **Seguridad** — El sistema debe ser robusto contra ataques adversariales
5. **Accountability** — Alguien debe ser responsable por las decisiones del modelo

## Privacidad por diseño

- Anonimizar datos personales
- Usar técnicas como differential privacy
- Implementar federated learning cuando sea posible

## Tu responsabilidad como ML Engineer

- Preguntar "¿Deberíamos construir esto?" no solo "¿Podemos construirlo?"
- Documentar supuestos y limitaciones
- Hacer pruebas de sesgo antes de desplegar
    `.trim(),
    duration: "20 min",
    order: 3,
  },

  // model-deployment
  {
    id: "deploy-api",
    moduleId: "model-deployment",
    title: "Despliegue de Modelos como API",
    content: `
Una vez que el modelo funciona, hay que ponerlo a disposición de otros sistemas.

## Opciones de despliegue

1. **API REST** — El modelo recibe requests HTTP y devuelve predicciones
2. **Batch** — Procesamiento por lotes (ej: predicciones nocturnas)
3. **Edge** — Modelo corre en el dispositivo (ej: móvil, IoT)

## Frameworks populares

| Herramienta | Descripción |
|-------------|-------------|
| FastAPI | API en Python, rápida y moderna |
| Flask | Framework web ligero |
| BentoML | Especializado para ML |
| TensorFlow Serving | Para modelos TF |

## Ejemplo básico con FastAPI

\`\`\`python
from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

@app.post("/predict")
async def predict(features: dict):
    prediction = model.predict([features["data"]])
    return {"prediction": prediction.tolist()}
\`\`\`

> 🚀 FastAPI es la opción más popular hoy: rápida, con documentación automática y tipado.
    `.trim(),
    duration: "20 min",
    order: 1,
  },
  {
    id: "deploy-monitoring",
    moduleId: "model-deployment",
    title: "Monitoreo de Modelos",
    content: `
Los modelos en producción degradan con el tiempo. El monitoreo es esencial.

## ¿Qué monitorear?

### Data Drift
Los datos de entrada cambian con el tiempo. Ej: después de una pandemia, el comportamiento del consumidor es diferente.

### Concept Drift
La relación entre features y target cambia. Ej: un modelo de riesgo crediticio que ya no predice bien después de una crisis.

### Performance
- Latencia de predicción
- Throughput (predicciones/segundo)
- Errores HTTP

## Herramientas

- **Evidently AI**: detección de drift
- **Prometheus + Grafana**: métricas y dashboards
- **MLflow**: tracking de experimentos y modelos

## Estrategias de respuesta

1. Retrain: reentrenar con datos nuevos
2. Rollback: volver a versión anterior
3. Shadow mode: comparar新旧 versiones side-by-side
    `.trim(),
    duration: "20 min",
    order: 2,
  },
  {
    id: "deploy-ab-testing",
    moduleId: "model-deployment",
    title: "A/B Testing para Modelos",
    content: `
Nunca despliegues un modelo nuevo sin probarlo primero contra el actual.

## Cómo funciona

1. Los usuarios se dividen en dos grupos: A (modelo actual) y B (modelo nuevo)
2. Se compara la métrica de negocio relevante
3. Si B gana estadísticamente, se despliega

## Consideraciones

- **Tamaño de muestra**: usar power analysis para determinar cuántos datos necesitas
- **Duración**: mínimo 1-2 semanas para capturar ciclos completos
- **Múltiples métricas**: no solo accuracy, también impacto en negocio

## Riesgos

- El modelo B puede ser mejor en promedio pero peor en un segmento específico
- Efectos de largo plazo no capturados en el test
- Interferencia entre grupos (network effects)

> 📊 Siempre medir el impacto en el negocio, no solo métricas técnicas.
    `.trim(),
    duration: "15 min",
    order: 3,
  },
  {
    id: "deploy-mlops",
    moduleId: "model-deployment",
    title: "MLOps: ML + DevOps",
    content: `
MLOps aplica prácticas de DevOps al ciclo de vida de ML. Es lo que separa los proyectos de juguete de los sistemas productivos.

## Pilares de MLOps

1. **Reproducibilidad** — Mismo código + datos = mismo resultado
2. **Versionado** — Código, datos, y modelos versionados
3. **CI/CD** — Pipeline automatizado de entrenamiento y deploy
4. **Monitoreo** — Detectar drift y degradación
5. **Gobernanza** — Auditoría y trazabilidad

## Herramientas MLOps

| Capacidad | Herramientas |
|-----------|-------------|
| Experiment tracking | MLflow, Weights & Biases |
| Feature store | Feast, Tecton |
| Pipeline orchestration | Airflow, Kubeflow |
| Model registry | MLflow Model Registry |
| Deployment | Seldon, BentoML, TF Serving |

## Madurez MLOps

1. **Nivel 0**: manual, todo a mano (scripts sueltos)
2. **Nivel 1**: pipelines automatizados de entrenamiento
3. **Nivel 2**: CI/CD automatizado con monitoreo continuo

> 🎯 El objetivo de MLOps es pasar de "funciona en mi máquina" a "funciona en producción sin supervisión".
    `.trim(),
    duration: "20 min",
    order: 4,
  },
]

// ─── Lab Steps per Lab (Laboratorios) ─────────────────────────────────────

export const MOCK_LAB_STEPS: LabStep[] = [
  // Python Lab
  {
    id: "python-variables",
    labId: "python-lab",
    title: "Variables y Tipos de Datos",
    description: "Declara variables de diferentes tipos y usa funciones básicas de Python.",
    code: "# Declara una variable llamada 'nombre' con tu nombre\nnombre = \"___\"\n\n# Declara una variable 'edad' con tu edad\nedad = ___\n\n# Imprime ambos\nprint(f\"Me llamo {nombre} y tengo {edad} años\")",
    expectedOutput: "Me llamo [tu nombre] y tengo [tu edad] años",
    hint: "Usa comillas para texto y números sin comillas para enteros.",
  },
  {
    id: "python-loops",
    labId: "python-lab",
    title: "Estructuras de Control",
    description: "Usa condicionales y loops para procesar una lista de números.",
    code: "numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# Calcula la suma de los números pares\nsuma_pares = 0\nfor num in numeros:\n    if num % 2 == ___:\n        suma_pares += num\n\nprint(f\"Suma de pares: {suma_pares}\")",
    expectedOutput: "Suma de pares: 30",
    hint: "Un número es par si num % 2 == 0.",
  },
  {
    id: "python-functions",
    labId: "python-lab",
    title: "Funciones",
    description: "Crea una función que calcule el factorial de un número.",
    code: "def factorial(n):\n    \"\"\"Calcula el factorial de n de forma recursiva\"\"\"\n    if n <= 1:\n        return ___\n    return n * factorial(n - ___)\n\nprint(factorial(5))  # Debería imprimir 120",
    expectedOutput: "120",
    hint: "El caso base es n <= 1 retorna 1. La llamada recursiva es n * factorial(n-1).",
  },
  {
    id: "python-numpy",
    labId: "python-lab",
    title: "Introducción a NumPy",
    description: "Usa NumPy para crear arrays y hacer operaciones vectorizadas.",
    code: "import numpy as np\n\n# Crea un array de 10 números del 0 al 9\narr = np.arange(___)\n\n# Calcula la media\nmedia = np.mean(arr)\n\nprint(f\"Array: {arr}\")\nprint(f\"Media: {media}\")",
    expectedOutput: "Array: [0 1 2 3 4 5 6 7 8 9]\nMedia: 4.5",
    hint: "np.arange(10) crea un array con números del 0 al 9.",
  },
  {
    id: "python-pandas",
    labId: "python-lab",
    title: "Pandas: DataFrame básico",
    description: "Crea un DataFrame desde un diccionario y filtra datos.",
    code: "import pandas as pd\n\n# Crea un DataFrame de estudiantes\ndata = {\n    \"nombre\": [\"Ana\", \"Luis\", \"Carlos\"],\n    \"edad\": [23, 25, 22],\n    \"promedio\": [8.5, 9.0, 7.8]\n}\ndf = pd.DataFrame(data)\n\n# Filtra los estudiantes con promedio >= 8\ndf_filtrado = df[df[\"promedio\"] >= ___]\n\nprint(df_filtrado)",
    expectedOutput: "    nombre  edad  promedio\n0     Ana    23       8.5\n1    Luis    25       9.0",
    hint: "Usa df[df['columna'] >= valor] para filtrar.",
  },

  // Data Lab
  {
    id: "data-load",
    labId: "data-lab",
    title: "Carga de Datos",
    description: "Carga un dataset CSV y explora su estructura básica.",
    code: "import pandas as pd\n\n# Carga el dataset (asume que existe 'datos.csv')\ndf = pd.read_csv(\"datos.csv\")\n\n# Muestra las primeras 5 filas\nprint(df.head(___))\n\n# Información del dataset\nprint(df.info())\n\n# Estadísticas descriptivas\nprint(df.describe())",
    expectedOutput: "Primeras 5 filas + info + estadísticas descriptivas",
    hint: "df.head() muestra las primeras 5 filas por defecto.",
  },
  {
    id: "data-clean",
    labId: "data-lab",
    title: "Limpieza de Datos",
    description: "Detecta y maneja valores nulos en el dataset.",
    code: "# Detecta valores nulos\nprint(\"Valores nulos por columna:\")\nprint(df.isnull().sum())\n\n# Imputa valores nulos en columna 'edad' con la mediana\nmediana_edad = df[\"edad\"].median()\ndf[\"edad\"].fillna(mediana_edad, inplace=___)\n\n# Elimina filas con nulos en columna 'email'\ndf.dropna(subset=[\"email\"], inplace=___)\n\nprint(f\"Dataset final: {df.shape}\")",
    expectedOutput: "Valores nulos por columna: [por columna]\nDataset final: (n_filas, n_columnas)",
    hint: "inplace=True modifica el DataFrame directamente.",
  },
  {
    id: "data-visualize",
    labId: "data-lab",
    title: "Visualización de Datos",
    description: "Crea gráficos para entender la distribución de los datos.",
    code: "import matplotlib.pyplot as plt\n\n# Histograma de una columna numérica\nplt.figure(figsize=(10, 6))\ndf[\"edad\"].hist(bins=___)\nplt.title(\"Distribución de Edades\")\nplt.xlabel(\"Edad\")\nplt.ylabel(\"Frecuencia\")\nplt.show()\n\n# Boxplot para detectar outliers\nplt.figure(figsize=(10, 6))\ndf.boxplot(column=[\"edad\", \"ingresos\"])\nplt.title(\"Boxplot de Edad e Ingresos\")\nplt.show()",
    expectedOutput: "Histograma + Boxplot con distribución de datos",
    hint: "Un buen número de bins suele estar entre 10 y 30.",
  },
  {
    id: "data-explore",
    labId: "data-lab",
    title: "Análisis Exploratorio",
    description: "Analiza correlaciones entre variables numéricas.",
    code: "# Matriz de correlación\ncorrelacion = df.corr()\nprint(\"Matriz de correlación:\")\nprint(correlacion)\n\n# Encuentra la correlación más alta (excluyendo la diagonal)\ncorr_pares = correlacion.unstack()\nmax_corr = corr_pares[corr_pares < 1].max()\nprint(f\"\\nCorrelación más alta: {max_corr:.2f}\")\n\n# ¿Qué par de variables tiene la correlación más alta?\n# (Ejercicio: encuentra las columnas)\n\n# Heatmap (opcional)\nimport seaborn as sns\nplt.figure(figsize=(10, 8))\nsns.heatmap(correlacion, annot=True, cmap=\"coolwarm\")\nplt.show()",
    expectedOutput: "Matriz de correlación numérica + heatmap",
    hint: "Usa df.corr() para obtener la matriz de correlación de Pearson.",
  },

  // Stats Lab
  {
    id: "stats-descriptive",
    labId: "stats-lab",
    title: "Estadística Descriptiva",
    description: "Calcula medidas de tendencia central y dispersión.",
    code: "import numpy as np\n\ndatos = [12, 15, 14, 10, 18, 20, 22, 16, 14, 13]\n\n# Medidas de tendencia central\nmedia = np.mean(datos)\nmediana = np.median(datos)\n\n# Medidas de dispersión\ndesviacion = np.std(datos)\nvarianza = np.var(datos)\nrango = np.max(datos) - np.min(datos)\n\nprint(f\"Media: {media:.2f}\")\nprint(f\"Mediana: {mediana}\")\nprint(f\"Desviación estándar: {desviacion:.2f}\")\nprint(f\"Varianza: {varianza:.2f}\")\nprint(f\"Rango: {rango}\")",
    expectedOutput: "Media: 15.40\nMediana: 14.50\nDesviación estándar: 3.42\nVarianza: 11.68\nRango: 12",
    hint: "np.std() calcula la desviación estándar. Usa ddof=1 para muestra en vez de población.",
  },
  {
    id: "stats-probability",
    labId: "stats-lab",
    title: "Probabilidad Básica",
    description: "Simula experimentos probabilísticos con Python.",
    code: "import random\n\n# Simula 1000 lanzamientos de un dado justo\ndef lanzar_dado():\n    return random.randint(___, ___)\n\nresultados = [lanzar_dado() for _ in range(1000)]\n\n# Probabilidad de sacar un 6\nprob_6 = resultados.count(6) / len(resultados)\nprint(f\"Probabilidad de 6: {prob_6:.3f}\")\nprint(f\"Esperado: {1/6:.3f}\")\n\n# Probabilidad de sacar par\npares = sum(1 for r in resultados if r % 2 == ___)\nprob_par = pares / len(resultados)\nprint(f\"Probabilidad de par: {prob_par:.3f}\")\nprint(f\"Esperado: {3/6:.3f}\")",
    expectedOutput: "Probabilidad de 6: ~0.167\nProbabilidad de par: ~0.500",
    hint: "random.randint(1, 6) genera un número del 1 al 6. Los pares son divisibles por 2.",
  },
  {
    id: "stats-distributions",
    labId: "stats-lab",
    title: "Distribuciones de Probabilidad",
    description: "Visualiza la distribución normal y compara con datos reales.",
    code: "import numpy as np\nimport matplotlib.pyplot as plt\n\n# Genera datos con distribución normal\nmedia, std = 100, 15\ndatos_normales = np.random.normal(media, std, 1000)\n\n# Histograma\nplt.hist(datos_normales, bins=30, density=True, alpha=0.7, label=\"Datos\")\n\n# Curva teórica\nx = np.linspace(media - 4*std, media + 4*std, 100)\ny = 1/(std * np.sqrt(2*np.pi)) * np.exp(-0.5 * ((x - media)/std)**2)\nplt.plot(x, y, 'r-', label=\"Normal teórica\")\n\nplt.title(f\"Distribución Normal (μ={media}, σ={std})\")\nplt.xlabel(\"Valor\")\nplt.ylabel(\"Densidad\")\nplt.legend()\nplt.show()\n\n# ¿Qué porcentaje de datos está dentro de 1 desviación?\ndentro_1std = np.mean((datos_normales > media - std) & (datos_normales < media + std))\nprint(f\"Dentro de 1σ: {dentro_1std:.1%} (esperado: 68.3%)\")",
    expectedOutput: "Histograma con superposición de curva normal + porcentaje dentro de 1σ",
    hint: "El 68.3% de los datos está dentro de 1 desviación estándar en una distribución normal.",
  },
  {
    id: "stats-hypothesis",
    labId: "stats-lab",
    title: "Test de Hipótesis",
    description: "Realiza un test t para comparar dos grupos.",
    code: "import numpy as np\nfrom scipy import stats\n\n# Dos grupos de datos\ngrupo_a = np.random.normal(100, 15, 50)\ngrupo_b = np.random.normal(108, 15, 50)\n\n# Test t de Student (dos muestras independientes)\nt_stat, p_value = stats.ttest_ind(grupo_a, grupo_b)\n\nprint(f\"Media grupo A: {np.mean(grupo_a):.2f}\")\nprint(f\"Media grupo B: {np.mean(grupo_b):.2f}\")\nprint(f\"Estadístico t: {t_stat:.3f}\")\nprint(f\"Valor p: {p_value:.4f}\")\n\n# Interpretación (alpha = 0.05)\nalpha = 0.05\nif p_value < alpha:\n    print(\"✅ Rechazamos H₀: Hay diferencia significativa entre los grupos\")\nelse:\n    print(\"❌ No rechazamos H₀: No hay evidencia de diferencia significativa\")\n\nprint(f\"\\nNota: Si grupo B tiene media más alta, podrías concluir que...\")",
    expectedOutput: "Medias de ambos grupos + resultado del test t con interpretación",
    hint: "p_value < 0.05 indica diferencia estadísticamente significativa.",
  },
]

// ─── Deliverables per Project (Proyectos) ──────────────────────────────────

export const MOCK_DELIVERABLES: Deliverable[] = [
  // SaaS Churn Prediction
  {
    id: "saas-churn-eda",
    projectId: "saas-churn",
    title: "Análisis Exploratorio de Datos",
    description: "Carga el dataset de clientes SaaS y realiza un EDA completo. Identifica patrones de abandono, distribuciones de características y correlaciones iniciales.",
    estimatedHours: 4,
  },
  {
    id: "saas-churn-features",
    projectId: "saas-churn",
    title: "Feature Engineering",
    description: "Crea features relevantes: antigüedad del cliente, frecuencia de uso, tickets de soporte, patrones de pago. Codifica variables categóricas y normaliza numéricas.",
    estimatedHours: 3,
  },
  {
    id: "saas-churn-model",
    projectId: "saas-churn",
    title: "Entrenamiento de Modelos",
    description: "Entrena modelos de clasificación (Logistic Regression, Random Forest, XGBoost). Usa validación cruzada para evaluar rendimiento. Optimiza hiperparámetros con GridSearch.",
    estimatedHours: 6,
  },
  {
    id: "saas-churn-eval",
    projectId: "saas-churn",
    title: "Evaluación y Selección",
    description: "Evalúa modelos con métricas: accuracy, precision, recall, F1, ROC-AUC. Analiza matriz de confusión. Selecciona el mejor modelo justificando la decisión.",
    estimatedHours: 3,
  },
  {
    id: "saas-churn-deploy",
    projectId: "saas-churn",
    title: "Despliegue y Reporte",
    description: "Crea un reporte ejecutivo con hallazgos y recomendaciones. Prepara el modelo para despliegue como API. Documenta el pipeline completo.",
    estimatedHours: 4,
  },

  // Protein Solubility Analysis
  {
    id: "protein-data",
    projectId: "protein-solubility",
    title: "Preparación de Datos Bioinformáticos",
    description: "Obtén y procesa datos de solubilidad de proteínas desde bases de datos públicas (RCSB PDB). Limpia y estructura los datos para análisis.",
    estimatedHours: 5,
  },
  {
    id: "protein-features",
    projectId: "protein-solubility",
    title: "Extracción de Descriptores Moleculares",
    description: "Usa RDKit para extraer descriptores químicos y estructurales de las proteínas. Calcula propiedades fisicoquímicas relevantes.",
    estimatedHours: 4,
  },
  {
    id: "protein-model",
    projectId: "protein-solubility",
    title: "Modelado Predictivo",
    description: "Implementa modelos de Deep Learning (redes fully connected) para predecir solubilidad. Compara con modelos clásicos (Random Forest, SVM).",
    estimatedHours: 6,
  },
  {
    id: "protein-report",
    projectId: "protein-solubility",
    title: "Análisis y Documentación",
    description: "Interpreta los resultados: ¿qué features son más importantes? ¿Qué límites tiene el modelo? Documenta hallazgos y próximos pasos.",
    estimatedHours: 3,
  },

  // Customer LTV
  {
    id: "ltv-eda",
    projectId: "customer-ltv",
    title: "EDA y Definición de LTV",
    description: "Define cómo calcular LTV (Customer Lifetime Value). Analiza cohortes, patrones de compra y retención histórica.",
    estimatedHours: 4,
  },
  {
    id: "ltv-features",
    projectId: "customer-ltv",
    title: "Features Temporales y de Comportamiento",
    description: "Crea features basadas en series temporales: frecuencia de compra, recencia, monto promedio, estacionalidad. Ingeniería de features para modelos de regresión.",
    estimatedHours: 4,
  },
  {
    id: "ltv-model",
    projectId: "customer-ltv",
    title: "Modelado de LTV",
    description: "Implementa modelos de regresión y probabilisticos (Gamma-Gamma, BG/NBD). Compara enfoques y selecciona el mejor.",
    estimatedHours: 6,
  },
  {
    id: "ltv-segmentation",
    projectId: "customer-ltv",
    title: "Segmentación y Estrategia",
    description: "Segmenta clientes por LTV predicho. Propón estrategias de retención diferenciadas por segmento. Crea dashboard de monitoreo.",
    estimatedHours: 4,
  },
  {
    id: "ltv-deploy",
    projectId: "customer-ltv",
    title: "Despliegue y Automatización",
    description: "Automatiza el cálculo de LTV con un pipeline semanal. Prepara alertas para detección temprana de caída en LTV.",
    estimatedHours: 3,
  },

  // Wine Quality Analysis
  {
    id: "wine-eda",
    projectId: "wine-quality",
    title: "Análisis Exploratorio",
    description: "Carga el dataset de vinos (UCI Wine Quality). Explora las características químicas y su relación con la calidad. Visualiza distribuciones y correlaciones.",
    estimatedHours: 3,
  },
  {
    id: "wine-preprocessing",
    projectId: "wine-quality",
    title: "Preprocesamiento y Balanceo",
    description: "Maneja outliers, normaliza features, y balancea las clases (la mayoría de vinos son de calidad media). Aplica técnicas como SMOTE.",
    estimatedHours: 2,
  },
  {
    id: "wine-model",
    projectId: "wine-quality",
    title: "Modelos Ensemble",
    description: "Implementa Random Forest y XGBoost para clasificación de calidad. Optimiza hiperparámetros. Compara con modelos baseline.",
    estimatedHours: 4,
  },
  {
    id: "wine-interpretation",
    projectId: "wine-quality",
    title: "Interpretación de Resultados",
    description: "Usa SHAP para interpretar el modelo: ¿qué características químicas son más importantes para la calidad? Crea visualizaciones y conclusiones.",
    estimatedHours: 3,
  },
]
