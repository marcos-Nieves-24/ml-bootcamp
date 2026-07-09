---
Module: 1
Lesson Number: 3
Lesson Title: Tipos de IA
Estimated Duration: 45 minutes
Prerequisites: Lección 1 — ¿Qué es la Inteligencia Artificial?
Learning Objectives:
  - Distinguir entre IA Estrecha, IA General y Superinteligencia
  - Clasificar sistemas de IA por funcionalidad (reactivos, memoria limitada, teoría de la mente, autoconscientes)
  - Evaluar a qué tipo de IA pertenecen los sistemas actuales
  - Explicar por qué la IA General sigue siendo un desafío no resuelto
  - Identificar ejemplos de cada tipo de IA en aplicaciones del mundo real
Keywords: IA Estrecha, Inteligencia Artificial General, Superinteligencia, máquinas reactivas, memoria limitada, teoría de la mente, IA autoconsciente, IA fuerte, IA débil
Difficulty: Beginner
Programming Concepts: None
Mathematical Concepts: None
Machine Learning Concepts: None
Datasets Used: None
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Lección 3: Tipos de IA

## Motivación de la Lección

No toda la IA es igual. Cuando escuchas noticias sobre IA, es crucial entender de qué tipo de IA se está hablando. ¿Es un sistema estrecho que solo puede jugar al ajedrez? ¿Es un sistema general que podría algún día reemplazar a trabajadores humanos? ¿O es ciencia ficción? Esta lección te da el marco para clasificar cualquier sistema de IA y evaluar afirmaciones críticamente — una habilidad que todo profesional necesita en la era de la IA.

## Panorama General

La Lección 1 definió IA y agentes inteligentes. La Lección 2 mostró cómo se desarrolló el campo a lo largo del tiempo. Ahora categorizamos los sistemas de IA por capacidad y funcionalidad. Este marco de clasificación te ayudará a entender la Lección 4 (Paradigmas de IA) — diferentes enfoques funcionan mejor para diferentes tipos de IA. La Lección 5 mostrará aplicaciones reales de estos tipos.

```
Lección 2 (Historia) → Lección 3 (Tipos de IA) → Lección 4 (Paradigmas) → Lección 5 (Aplicaciones)
```

## Teoría

### Clasificación por Capacidad

#### IA Estrecha (IA Débil)

**Definición**: Sistemas de IA diseñados para realizar una tarea específica o un rango estrecho de tareas.

**Intuición**: La IA Estrecha es como un especialista — brillante en una cosa, inútil en todo lo demás.

**Explicación formal**: Un sistema de IA estrecha opera dentro de un dominio limitado. No puede generalizar su conocimiento a tareas fuera de su entrenamiento. Todos los sistemas de IA actuales — por impresionantes que sean — son IA Estrecha.

**Ejemplos**:
- Motores de ajedrez (Deep Blue)
- Reconocimiento de imágenes (reconocimiento facial en tu teléfono)
- Modelos de lenguaje (ChatGPT, Claude)
- Sistemas de recomendación (Netflix, Spotify)
- Autos autónomos (siguen siendo estrechos — no pueden mantener una conversación)

**Limitación clave**: Sin generalización entre dominios. Una IA de ajedrez no puede aprender a conducir. Un modelo de lenguaje no puede jugar al ajedrez.

#### Inteligencia Artificial General (AGI / IA Fuerte)

**Definición**: Un sistema hipotético de IA con inteligencia a nivel humano en todas las tareas cognitivas.

**Intuición**: AGI sería como un humano — capaz de aprender cualquier tarea intelectual, razonar entre dominios, adaptarse a nuevas situaciones y entender el contexto.

**Explicación formal**: AGI igualaría o superaría el rendimiento humano en prácticamente cualquier tarea cognitiva. Poseería:
- **Transfer learning**: Aplicar conocimiento de un dominio a otro
- **Razonamiento de sentido común**: Entender la física cotidiana y las normas sociales
- **Metacognición**: Reflexionar sobre su propio proceso de pensamiento
- **Generalización**: Aprender nuevas tareas con pocos ejemplos

**Estado actual**: AGI no existe. Las estimaciones de cuándo podría llegar AGI van de 5 años a nunca.

**Por qué AGI es difícil**:
- **Conocimiento frágil**: La IA carece de sentido común
- **Vulnerable a cambios de distribución**: La IA falla cuando los datos de prueba difieren de los de entrenamiento
- **Sin comprensión causal**: La IA aprende correlaciones, no causas
- **Sin comprensión real del lenguaje**: Los LLMs manipulan el lenguaje estadísticamente sin entenderlo

#### Superinteligencia Artificial (ASI)

**Definición**: Una IA hipotética que supera vastamente la inteligencia humana en todos los dominios.

**Intuición**: ASI sería para los humanos lo que los humanos son para las hormigas — incomprensiblemente superior.

**Explicación formal**: ASI superaría a las mejores mentes humanas en creatividad, resolución de problemas, habilidades sociales y descubrimiento científico. Potencialmente podría:
- Resolver problemas que los humanos ni siquiera pueden formular
- Hacer avances científicos a velocidad sobrehumana
- Diseñar mejores sistemas de IA recursivamente (explosión de inteligencia)

**Estado actual**: Completamente hipotético. Este concepto es central en las discusiones sobre seguridad de la IA y riesgo existencial.

**Debate clave**: ¿Sería ASI benévola, neutral o peligrosa? Este es el tema de un intenso debate (Bostrom, 2014; Russell, 2019).

### Clasificación por Funcionalidad

Esta taxonomía proviene de Arend Hintze (2016) y categoriza la IA por lo que puede hacer:

#### Tipo 1: Máquinas Reactivas

**Definición**: Sistemas de IA que no pueden formar recuerdos ni usar experiencias pasadas para informar decisiones actuales.

**Intuición**: Ven el mundo tal como es ahora y reaccionan a él, sin concepto de pasado o futuro.

**Características**:
- Sin memoria
- Sin aprendizaje de la experiencia
- Puramente reactivo a la entrada actual

**Ejemplo**: Deep Blue (la computadora de ajedrez de IBM). Evaluaba la posición actual del tablero y seleccionaba el mejor movimiento sin recordar partidas pasadas.

#### Tipo 2: Memoria Limitada

**Definición**: Sistemas de IA que pueden usar información reciente del pasado para informar decisiones.

**Intuición**: Tienen una memoria a corto plazo — como conducir un auto donde recuerdas los últimos segundos del tráfico.

**Características**:
- Pueden usar datos históricos en una ventana de tiempo limitada
- Pueden aprender de datos de entrenamiento (pero son estáticos después del despliegue)
- Todos los sistemas modernos de ML caen en esta categoría

**Ejemplo**: Autos autónomos. Observan la velocidad y trayectoria de los autos cercanos de los últimos segundos y los usan para predecir posiciones futuras.

#### Tipo 3: Teoría de la Mente

**Definición**: Un sistema hipotético de IA que entiende que otros tienen creencias, deseos e intenciones.

**Intuición**: Los humanos entienden naturalmente que otras personas tienen mentes. La IA con Teoría de la Mente atribuiría estados mentales a otros.

**Características**:
- Entiende creencias e intenciones de otros
- Puede predecir cómo se comportarán otros
- Puede participar en interacciones sociales sofisticadas

**Estado actual**: No existe en IA. Los niños desarrollan la teoría de la mente alrededor de los 4 años.

#### Tipo 4: Autoconsciente

**Definición**: Un sistema hipotético de IA con conciencia y autoconciencia.

**Intuición**: No solo entendería las mentes de otros sino que sería consciente de su propia existencia.

**Características**:
- Conciencia
- Autoconciencia
- Emociones
- Sentido de identidad

**Estado actual**: No existe. Puede que nunca exista. Este es el ámbito de la filosofía y la ciencia ficción.

## Explicación Visual

**Figura 3.1**: La pirámide de capacidades de la IA.

Un diagrama de pirámide con IA Estrecha en la base (base amplia, etiquetada "toda la IA actual"), AGI en el medio (etiquetada "objetivo futuro") y ASI en la cima (etiquetada "hipotética"). Cada nivel está anotado con capacidades y ejemplos.

**Figura 3.2**: Los cuatro tipos de IA por funcionalidad.

Una cuadrícula de 2×2 o un diagrama de progresión que muestra: Máquinas Reactivas → Memoria Limitada → Teoría de la Mente → Autoconsciente. Los dos primeros están sombreados (existen hoy), los dos últimos están delineados (no existen).

## Implementación en Python

No se requiere implementación en Python para los conceptos centrales. El notebook incluirá un ejercicio de clasificación.

## Ejemplo en Biotecnología

**IA Estrecha en biotech**: AlphaFold predice estructuras de proteínas — una tarea, hecha brillantemente. No puede diagnosticar enfermedades ni diseñar fármacos, aunque puede ser un componente en esos pipelines.

**AGI potencial en biotech**: Integraría genómica, proteómica, datos clínicos y literatura para descubrir nuevos fármacos de forma autónoma, diseñar ensayos clínicos y personalizar tratamientos.

**Realidad actual**: Usamos una colección de sistemas de IA estrecha (uno para secuenciación genética, otro para estructura de proteínas, otro para emparejamiento de pacientes) ensamblados por humanos en un pipeline.

## Ejemplo en SaaS

**IA Estrecha en SaaS**: Un modelo de predicción de abandono de clientes que funciona solo con los datos de esa empresa. No puede hacer análisis de marketing ni recomendaciones de productos.

**Sistemas multi-agente**: Las plataformas SaaS modernas combinan múltiples IAs estrechas. Por ejemplo, una plataforma de marketing podría usar:
- Un modelo para segmentación de clientes (estrecho)
- Un modelo para predicción de abandono (estrecho)
- Uno para recomendaciones (estrecho)

Cada uno es IA Estrecha. Juntos forman un sistema potente, pero no hay inteligencia general coordinándolos.

## Errores Comunes

1. **Llamar "AGI" a ChatGPT**: A pesar de sus capacidades impresionantes, los LLMs siguen siendo IA Estrecha. No pueden razonar causalmente, carecen de sentido común y fallan en tareas simples fuera de su distribución de entrenamiento.
2. **Asumir que AGI es solo una versión más grande de la IA actual**: AGI probablemente requiere arquitecturas fundamentalmente diferentes, no solo escalar.
3. **Confundir "estrecho" con "simple"**: La IA Estrecha puede ser extremadamente compleja (ej., AlphaFold, GPT-4).
4. **Pensar que la IA está en un camino recto hacia AGI**: El paradigma actual (deep learning) podría encontrar limitaciones fundamentales.
5. **Antropomorfizar los sistemas de IA**: Los sistemas actuales de IA no tienen creencias, deseos ni conciencia — los simulan de manera convincente.

## Buenas Prácticas

1. **Sé preciso sobre los tipos de IA**: Al discutir IA, especifica si es IA Estrecha, AGI o teórica.
2. **Usa la taxonomía de funcionalidad**: Clasifica los sistemas como reactivos o de memoria limitada para entender sus capacidades.
3. **Gestiona las expectativas**: Para aplicaciones empresariales, asume IA Estrecha (ya que es todo lo que tenemos).
4. **Diseña para alcance estrecho**: Los sistemas de IA exitosos resuelven problemas bien definidos, no generales.
5. **Mantente informado sobre el progreso de AGI**: El campo está evolucionando, pero mantén escepticismo ante afirmaciones audaces.

## Resumen

- Toda la IA actual es **IA Estrecha** — excelente en tareas específicas, inútil en otras
- **AGI** (inteligencia general a nivel humano) aún no existe
- La **Superinteligencia** es hipotética y plantea importantes preguntas de seguridad
- Por funcionalidad: Máquinas Reactivas → Memoria Limitada (ambas existen) → Teoría de la Mente → Autoconsciente (ninguna existe)
- Entender estas categorías ayuda a evaluar afirmaciones sobre IA críticamente
- La IA Estrecha es poderosa y útil — no la subestimes solo porque no es AGI

## Términos Clave

| Término | Definición |
|---|---|
| **IA Estrecha** | Sistemas de IA diseñados para tareas específicas; toda la IA actual |
| **Inteligencia Artificial General (AGI)** | IA hipotética con capacidad a nivel humano en todas las tareas cognitivas |
| **Superinteligencia** | IA hipotética que supera vastamente la inteligencia humana |
| **Máquina Reactiva** | IA sin memoria, puramente reactiva a la entrada actual |
| **Memoria Limitada** | IA que puede usar datos históricos recientes para decisiones |
| **Teoría de la Mente** | IA hipotética que entiende los estados mentales de otros |
| **IA Autoconsciente** | IA hipotética con conciencia |
| **IA Fuerte** | Otro término para AGI |
| **IA Débil** | Otro término para IA Estrecha |
| **Generalización** | La capacidad de aplicar conocimiento aprendido a nuevas situaciones |

## Ejercicios

### Nivel 1: Comprensión Básica

1. ¿Cuáles son los tres tipos de IA por capacidad? ¿Cuál incluye todos los sistemas de IA actuales?
2. Nombra los cuatro tipos de IA por funcionalidad. ¿Cuáles dos existen hoy?
3. Da un ejemplo de una máquina reactiva y un ejemplo de una IA de memoria limitada.

### Nivel 2: Implementación

4. Crea una tabla comparando IA Estrecha, AGI y ASI en: capacidad, estado actual, ejemplos y riesgos.
5. Para cada uno de los siguientes sistemas, clasifícalos por capacidad y funcionalidad:
   - (a) Un termostato
   - (b) Google Search
   - (c) Un auto autónomo
   - (d) ChatGPT

### Nivel 3: Pensamiento Crítico

6. "Los Large Language Models como GPT-4 exhiben comportamientos que parecen inteligencia general, pero siguen siendo IA Estrecha". Argumenta a favor o en contra de esta posición usando ejemplos específicos.
7. ¿Qué avances fundamentales se necesitan para lograr AGI? ¿Crees que el enfoque actual de deep learning puede llevar a AGI, o necesitamos un paradigma diferente?

## Desafío de Programación

Escribe una función en Python `classify_ai(system_description)` que reciba una descripción textual de un sistema de IA y lo clasifique por capacidad y funcionalidad. Usa coincidencia de palabras clave para implementar un clasificador básico:

```python
def classify_ai(description):
    """
    Takes a text description of an AI system.
    Returns a tuple (capability, functionality).
    """
    # Your implementation here
    pass
```

Por ejemplo:
- "A chess engine that evaluates the current board" → (Narrow AI, Reactive Machine)
- "A self-driving car that tracks nearby vehicles" → (Narrow AI, Limited Memory)
