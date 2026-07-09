---
Module: 1
Lesson Number: 4
Lesson Title: Paradigmas de IA
Estimated Duration: 75 minutes
Prerequisites: Lección 1 — ¿Qué es la Inteligencia Artificial?
Learning Objectives:
  - Comparar y contrastar Sistemas Expertos, Sistemas Basados en Reglas, Machine Learning, Deep Learning y Large Language Models
  - Explicar cuándo es apropiado cada paradigma
  - Describir las limitaciones de los enfoques basados en reglas y las ventajas de los enfoques basados en aprendizaje
  - Implementarar un sistema simple basado en reglas y un modelo básico de ML
  - Identificar qué paradigma utiliza un sistema de IA dado
Keywords: Sistemas expertos, sistemas basados en reglas, machine learning, deep learning, large language models, IA simbólica, conexionismo, redes neuronales, paradigmas
Difficulty: Intermediate
Programming Concepts: Funciones, condicionales, conceptos básicos de scikit-learn
Mathematical Concepts: Probabilidad básica, intuición de álgebra lineal
Machine Learning Concepts: Features, labels, training, prediction
Datasets Used: Conjunto de datos sintético para clasificación
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Lección 4: Paradigmas de IA

## Motivación de la Lección

La IA no es una sola tecnología — es una colección de diferentes enfoques, cada uno con sus propias fortalezas y debilidades. Algunos problemas se resuelven mejor con reglas explícitas. Otros requieren aprender de datos. Entender qué paradigma usar para cada problema es una de las habilidades más importantes que desarrollarás en este curso. Elige el paradigma equivocado y tu sistema fallará. Elige el correcto y podrás construir IA poderosa y práctica.

## Panorama General

La Lección 3 te enseñó a clasificar la IA por capacidad y funcionalidad. Ahora nos sumergimos en los enfoques técnicos que hacen funcionar la IA — los paradigmas. Esta es la base técnica más importante para el resto del curso. La Lección 5 mostrará aplicaciones de estos paradigmas en varios dominios. El Módulo 4 (Machine Learning) profundizará en el paradigma de ML.

```
Lección 3 (Tipos de IA) → Lección 4 (Paradigmas) → Lección 5 (Aplicaciones) → Módulo 4 (ML)
```

## Teoría

### Resumen de Paradigmas de IA

El campo de la IA ha desarrollado varios paradigmas distintos a lo largo de su historia. Cada uno representa un enfoque fundamentalmente diferente para construir sistemas inteligentes.

| Paradigma | Idea Central | Era | Ejemplo |
|---|---|---|---|
| Sistemas Expertos | Codificar experiencia humana como reglas | 1970s–1980s | MYCIN |
| Sistemas Basados en Reglas | Reglas si-entonces de propósito general | 1980s–1990s | Motores de reglas de negocio |
| Machine Learning | Aprender patrones de datos | 1990s–presente | Filtros de spam |
| Deep Learning | Redes neuronales multicapa | 2010s–presente | Reconocimiento de imágenes |
| Large Language Models | Redes neuronales masivas entrenadas en texto | 2020s–presente | ChatGPT |

### Sistemas Expertos

**Definición**: Un sistema informático que emula la capacidad de toma de decisiones de un experto humano en un dominio específico.

**Intuición**: Como tener un médico especialista en una caja. Describes síntomas y el sistema aplica conocimiento experto para llegar a un diagnóstico.

**Explicación formal**: Los sistemas expertos constan de tres componentes:
1. **Base de Conocimiento**: Una colección de hechos y reglas sobre un dominio
2. **Motor de Inferencia**: Un mecanismo que aplica reglas a los hechos para derivar conclusiones
3. **Interfaz de Usuario**: Permite a los usuarios consultar el sistema

**Ejemplo**: MYCIN (1976) diagnosticaba infecciones bacterianas y recomendaba antibióticos. Tenía ~450 reglas y rendía tan bien como especialistas en enfermedades infecciosas.

**Limitaciones**: CUELLO de botella de adquisición de conocimiento (las reglas deben ser creadas manualmente por expertos), fragilidad (cambios pequeños rompen el sistema), sin aprendizaje a partir de datos.

### Sistemas Basados en Reglas

**Definición**: Sistemas que usan un conjunto de reglas si-entonces para procesar datos y tomar decisiones.

**Intuición**: Piensa en ello como una lista de verificación muy detallada: SI condición ENTONCES acción.

**Explicación formal**: Una regla tiene dos partes:
- **Antecedente (parte SI)**: Una condición o patrón a coincidir
- **Consecuente (parte ENTONCES)**: Una acción o conclusión

Las reglas se pueden encadenar:
- **Encadenamiento hacia adelante**: Comienza con hechos, aplica reglas para derivar nuevos hechos
- **Encadenamiento hacia atrás**: Comienza con un objetivo, trabaja hacia atrás para encontrar hechos que lo respalden

**Ejemplo**: Un filtro de spam: SI el correo contiene "dinero gratis" Y "urgente" ENTONCES clasificar como spam.

**Diferencia de los Sistemas Expertos**: Todos los sistemas expertos están basados en reglas, pero no todos los sistemas basados en reglas son sistemas expertos. Los sistemas expertos codifican específicamente la experiencia humana. Los sistemas basados en reglas pueden codificar cualquier tipo de lógica.

### Machine Learning

**Definición**: Un paradigma donde los sistemas aprenden patrones a partir de datos sin ser programados explícitamente.

**Intuición**: En lugar de escribir reglas, le muestras ejemplos al sistema y él mismo descubre las reglas.

**Explicación formal**: Los algoritmos de Machine Learning encuentran patrones en los datos. Los tres tipos principales son:
- **Aprendizaje Supervisado**: Aprender de ejemplos etiquetados (mapeo entrada → salida)
- **Aprendizaje No Supervisado**: Encontrar estructura en datos no etiquetados
- **Aprendizaje por Refuerzo**: Aprender a través de prueba y error

**Conceptos clave**:
- **Features**: Variables de entrada utilizadas para la predicción
- **Labels**: Variable de salida que se predice
- **Training**: El proceso de aprender a partir de datos
- **Generalization**: Rendir bien en datos no vistos

**Ejemplo**: En lugar de escribir reglas para detección de spam, le muestras a un modelo de ML miles de correos etiquetados como "spam" o "no spam". El modelo aprende los patrones.

### Deep Learning

**Definición**: Un subcampo del Machine Learning que utiliza redes neuronales artificiales con múltiples capas.

**Intuición**: Como un programa informático inspirado en el cerebro que aprende representaciones jerárquicas. Las capas tempranas detectan patrones simples (bordes), las capas posteriores los combinan en conceptos complejos (rostros).

**Explicación formal**: Las redes neuronales profundas constan de:
- **Capa de entrada**: Recibe datos sin procesar
- **Capas ocultas**: Transforman los datos a través de conexiones ponderadas
- **Capa de salida**: Produce la predicción

Cada neurona computa: salida = activación(peso · entrada + sesgo)

**¿Por qué "profundo"?** Múltiples capas ocultas permiten a la red aprender características jerárquicas.

**Ejemplo**: AlexNet (2012) usó 8 capas para clasificar imágenes en 1000 categorías, logrando resultados de vanguardia.

### Large Language Models (LLMs)

**Definición**: Modelos de deep learning entrenados en corpus masivos de texto para generar y entender lenguaje humano.

**Intuición**: Como un loro estadístico con un cerebro extraordinariamente grande. Los LLMs predicen la siguiente palabra en una secuencia basándose en todo el texto que han visto.

**Explicación formal**: Los LLMs se basan en la **arquitectura Transformer** (Vaswani et al., 2017). Innovaciones clave:
- **Self-attention**: El modelo pondera la importancia de diferentes palabras en la entrada
- **Escala**: Miles de millones de parámetros entrenados en billones de palabras
- **Habilidades emergentes**: A escala suficiente, los LLMs exhiben capacidades no entrenadas explícitamente (ej., traducción, codificación, razonamiento)

**Ejemplos**: GPT-4, Claude, Gemini, LLaMA.

**Limitaciones**: Alucinaciones, falta de base factual, sin comprensión causal, sesgos en los datos de entrenamiento.

### Cuándo Usar Cada Paradigma

| Característica del Problema | Mejor Paradigma |
|---|---|
| El conocimiento del dominio es claro y estable | Sistemas Expertos / Basados en Reglas |
| Las reglas son desconocidas o demasiado complejas | Machine Learning |
| Pequeña cantidad de datos | Basado en Reglas (sin datos) o ML (con validación cuidadosa) |
| Gran cantidad de datos estructurados | Machine Learning |
| Imágenes, audio o patrones complejos | Deep Learning |
| Comprensión y generación de lenguaje | Large Language Models |
| Se necesita interpretabilidad | Basado en Reglas o ML simple |
| Se necesita máxima precisión en tarea compleja | Deep Learning |

## Explicación Visual

**Figura 4.1**: Gráfico comparativo de paradigmas.

Una cuadrícula de 2×2 que compara paradigmas en las dimensiones: "requiere datos" (bajo→alto) y "complejidad" (bajo→alto). Los Sistemas Expertos son bajos en datos y complejidad; ML es alto en datos, medio; DL es alto en datos, alto; LLMs son muy altos en datos, muy altos.

**Figura 4.2**: Arquitectura de red neuronal.

Un diagrama que muestra capa de entrada → capas ocultas → capa de salida, con neuronas y conexiones. Etiquetas para pesos, sesgos y funciones de activación.

**Figura 4.3**: El flujo de trabajo de ML.

Un diagrama de flujo: Recolección de Datos → Preparación de Datos → División Train/Test → Entrenamiento del Modelo → Evaluación del Modelo → Despliegue.

## Implementación en Python

Implementaremos tres paradigmas en Python: un sistema basado en reglas, un modelo simple de ML y un concepto mínimo de red neuronal.

### Sistema Basado en Reglas: Clasificador de Correos

```python
def classify_email(subject, body):
    """Rule-based email classifier."""
    text = (subject + " " + body).lower()
    
    # Rules for spam detection
    spam_rules = [
        "free money" in text,
        "urgent" in text and "bank" in text,
        "click here" in text and "prize" in text,
        "lottery" in text,
        "inheritance" in text,
    ]
    
    spam_score = sum(spam_rules)
    
    if spam_score >= 2:
        return "spam"
    elif spam_score == 1:
        return "suspicious"
    else:
        return "safe"
```

### Machine Learning: Clasificación de Iris

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train
model = DecisionTreeClassifier(max_depth=3)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2%}")
```

## Ejemplo en Biotecnología

**Comparación de paradigmas para predicción de función de proteínas:**

- **Sistema Experto**: Reglas como "SI la secuencia contiene el motivo X ENTONCES la función es Y" — funciona para motivos conocidos pero no detecta patrones novedosos.
- **Machine Learning**: Entrenar con secuencias de proteínas conocidas para predecir función a partir de características de la secuencia.
- **Deep Learning**: Usar redes convolucionales o transformer en datos de secuencia sin procesar. AlphaFold usa deep learning para predecir estructura 3D.
- **LLM**: Los modelos de lenguaje de proteínas (ESM-2, ProtGPT2) se entrenan en secuencias de proteínas como un modelo de lenguaje — capturan información evolutiva y funcional.

La evolución de reglas a aprendizaje refleja el cambio más amplio en los paradigmas de IA.

## Ejemplo en SaaS

**Comparación de paradigmas para predicción de abandono de clientes:**

- **Basado en Reglas**: SI (frecuencia de inicio de sesión < 1/semana Y tickets de soporte > 3) ENTONCES riesgo de abandono = ALTO. Simple, interpretable, pero no detecta patrones complejos.
- **Machine Learning**: Entrenar un Random Forest con datos históricos de clientes. Captura relaciones no lineales.
- **Deep Learning**: Usar una red neuronal con secuencias de comportamiento del cliente. Puede capturar patrones temporales.
- **LLM**: Analizar conversaciones de soporte al cliente y sentimiento para predecir abandono.

La mayoría de las empresas SaaS usan ML (Random Forest o Gradient Boosting) para abandono debido al equilibrio entre precisión e interpretabilidad.

## Errores Comunes

1. **Usar deep learning cuando métodos más simples funcionan**: Si la regresión logística alcanza 95% de precisión, no uses una red neuronal.
2. **Asumir que los sistemas expertos están obsoletos**: Para dominios bien comprendidos con reglas estables, los sistemas basados en reglas suelen ser mejores.
3. **Ignorar el cuello de botella de adquisición de conocimiento**: Crear reglas manualmente no escala.
4. **Confundir paradigmas con implementaciones**: Los Árboles de Decisión son ML; las redes neuronales profundas son DL; ambos tienen su lugar.
5. **Pensar que los LLMs son la respuesta a todo**: Los LLMs son poderosos pero costosos, lentos y poco confiables para muchas tareas.

## Buenas Prácticas

1. **Empieza simple**: Comienza con el paradigma más simple que podría funcionar. Agrega complejidad solo cuando sea necesario.
2. **Empareja paradigma con problema**: Considera la disponibilidad de datos, las necesidades de interpretabilidad y la complejidad del problema.
3. **Los sistemas híbridos son comunes**: Muchos sistemas de producción combinan reglas con ML (ej., reglas para casos extremos, ML para predicciones centrales).
4. **Considera el costo**: El deep learning requiere más datos, cómputo y experiencia.
5. **Planifica el mantenimiento**: Los sistemas basados en reglas necesitan actualizaciones manuales; los sistemas de ML necesitan mantenimiento del pipeline de datos.
6. **Evalúa antes de escalar**: Prueba múltiples paradigmas en tu problema antes de comprometerte.

## Resumen

- La IA tiene cinco paradigmas principales: Sistemas Expertos, Sistemas Basados en Reglas, Machine Learning, Deep Learning y Large Language Models
- Los sistemas Basados en Reglas codifican conocimiento explícito; ML aprende de datos
- El Deep Learning usa redes neuronales multicapa para patrones complejos
- Los LLMs son una forma especializada de deep learning para lenguaje
- Elige el paradigma más simple que resuelva tu problema
- Los enfoques híbridos son comunes en sistemas de producción
- Entender todos los paradigmas te convierte en un profesional de IA más versátil

## Términos Clave

| Término | Definición |
|---|---|
| **Sistema Experto** | IA que emula la toma de decisiones de un experto humano usando reglas |
| **Sistema Basado en Reglas** | Sistema que usa reglas si-entonces para la toma de decisiones |
| **Base de Conocimiento** | La colección de hechos y reglas en un sistema experto |
| **Motor de Inferencia** | El componente que aplica reglas para derivar conclusiones |
| **Machine Learning** | Paradigma donde los sistemas aprenden patrones a partir de datos |
| **Deep Learning** | ML que usa redes neuronales multicapa |
| **Large Language Model** | Modelo de deep learning entrenado en texto masivo para tareas de lenguaje |
| **Red Neuronal** | Sistema computacional inspirado en redes neuronales biológicas |
| **Transformer** | Arquitectura de red neuronal que utiliza self-attention |
| **Feature** | Variable de entrada utilizada por un modelo de ML |
| **Label** | Variable de salida que se predice |
| **Aprendizaje Supervisado** | Aprendizaje a partir de datos de entrenamiento etiquetados |
| **Aprendizaje No Supervisado** | Encontrar patrones en datos no etiquetados |

## Ejercicios

### Nivel 1: Comprensión Básica

1. Enumera los cinco paradigmas de IA en orden cronológico.
2. ¿Cuáles son los tres componentes de un sistema experto?
3. ¿Cuál es la diferencia clave entre Machine Learning y Deep Learning?

### Nivel 2: Implementación

4. Extiende el clasificador de correos para incluir al menos 5 reglas de spam adicionales. Pruébalo en 3 correos de ejemplo.
5. Entrena un clasificador Árbol de Decisión en el conjunto de datos iris. Imprime la estructura del árbol e interpreta una ruta de decisión.

### Nivel 3: Pensamiento Crítico

6. Estás construyendo un sistema de IA para un hospital. El sistema debe diagnosticar una enfermedad rara de la que solo se conocen 100 casos en el mundo. ¿Qué paradigma elegirías y por qué?
7. "Los Large Language Models son solo redes neuronales muy grandes — no representan un nuevo paradigma". Argumenta a favor o en contra de esta posición.

## Desafío de Programación

Construye un **sistema híbrido** que combine lógica basada en reglas con machine learning:

1. Crea un pre-filtro basado en reglas que clasifique correos como "definitivamente spam", "definitivamente no spam" o "incierto"
2. Para los correos "inciertos", pásalos a un clasificador de ML
3. Usa un conjunto de datos sintético (genera características aleatorias de correos)
4. Compara la precisión híbrida con usar cualquiera de los enfoques por separado
