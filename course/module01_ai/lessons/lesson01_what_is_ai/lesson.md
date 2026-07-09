---
Module: 1
Lesson Number: 1
Lesson Title: ¿Qué es la Inteligencia Artificial?
Estimated Duration: 60 minutes
Prerequisites: None
Learning Objectives:
  - Definir Inteligencia Artificial y distinguirla de la inteligencia natural
  - Explicar el Test de Turing y sus limitaciones
  - Describir las características de los agentes inteligentes
  - Identificar los cuatro objetivos de la IA según Russell & Norvig
  - Comparar los enfoques de pensar vs actuar, humana vs racionalmente
Keywords: Inteligencia Artificial, Test de Turing, agente inteligente, racionalidad, ciencia cognitiva, actuar humanamente, actuar racionalmente, pensar humanamente, pensar racionalmente
Difficulty: Beginner
Programming Concepts: None
Mathematical Concepts: None
Machine Learning Concepts: None
Datasets Used: None
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Lección 1: ¿Qué es la Inteligencia Artificial?

## Motivación de la Lección

La Inteligencia Artificial ya no es ciencia ficción. Cada vez que desbloqueas tu teléfono con reconocimiento facial, recibes una recomendación de producto en Amazon o le preguntas el clima a Siri, estás interactuando con IA. En biotecnología, la IA está acelerando el descubrimiento de fármacos y habilitando la medicina personalizada. En SaaS, la IA impulsa el análisis de clientes, la predicción de abandono (*churn prediction*) y el marketing automatizado. Entender qué es la IA — y qué no es — es la base de todo lo que sigue en este curso.

## Panorama General

Esta es la primera lección del curso. Establece la definición fundamental de IA. La Lección 2 explorará la historia de cómo llegamos a los sistemas de IA actuales. La Lección 3 clasificará los diferentes tipos de IA, y la Lección 4 profundizará en los paradigmas que hacen funcionar la IA. Volverás a referirte a estos conceptos centrales a lo largo de todo el programa.

```
Lección 1 (¿Qué es la IA?) → Lección 2 (Historia) → Lección 3 (Tipos de IA) → Lección 4 (Paradigmas)
```

## Teoría

### Definición de Inteligencia Artificial

**Definición**: La Inteligencia Artificial es la rama de la informática que se ocupa de construir sistemas que exhiben un comportamiento inteligente.

**Intuición**: Piensa en la IA como el intento de dotar a las máquinas de la capacidad de percibir, razonar, aprender y tomar decisiones — tareas que normalmente requieren inteligencia humana.

**Explicación formal**: No existe una única definición universalmente aceptada. Sin embargo, el libro de texto más influyente en el campo — *Artificial Intelligence: A Modern Approach* de Stuart Russell y Peter Norvig — organiza las definiciones en dos dimensiones:

| | Rendimiento humano | Rendimiento racional |
|---|---|---|
| **Pensar** | "Pensar humanamente" — modelar procesos cognitivos | "Pensar racionalmente" — seguir reglas lógicas (leyes del pensamiento) |
| **Actuar** | "Actuar humanamente" — pasar el Test de Turing | "Actuar racionalmente" — alcanzar objetivos (agente racional) |

1. **Actuar humanamente**: El enfoque del Test de Turing. Si una máquina puede conversar con un evaluador humano que no puede distinguir si está hablando con una máquina, se dice que la máquina es inteligente.
2. **Pensar humanamente**: El enfoque de modelado cognitivo. Simulamos los procesos de pensamiento del cerebro.
3. **Pensar racionalmente**: El enfoque de las "leyes del pensamiento". Usamos lógica simbólica para representar conocimiento y derivar conclusiones.
4. **Actuar racionalmente**: El enfoque del agente racional. Construimos agentes que perciben su entorno y toman acciones para lograr el mejor resultado.

Este curso se centra en **actuar racionalmente** — construir agentes que toman buenas decisiones — porque es el enfoque más general y prácticamente útil.

**Ejemplo**: Un auto autónomo percibe su entorno a través de cámaras y LiDAR, procesa estos datos para identificar obstáculos y actúa girando el volante, acelerando o frenando. Es un agente inteligente que actúa racionalmente para llegar a su destino de forma segura.

### El Test de Turing

Alan Turing propuso el **Juego de la Imitación** en 1950 como criterio de inteligencia.

**Cómo funciona**:
1. Un evaluador humano se comunica por texto con dos entidades ocultas: un humano y una máquina.
2. La máquina intenta convencer al evaluador de que es humana.
3. Si el evaluador no puede distinguir de manera confiable entre la máquina y el humano, la máquina pasa la prueba.

**Limitaciones**:
- Se centra únicamente en la capacidad conversacional
- No evalúa percepción, creatividad ni interacción física
- Puede ser "engañado" con trucos superficiales (ej., el chatbot ELIZA en 1966)
- La IA moderna (ej., ChatGPT) puede pasar versiones simplificadas, pero muchos argumentan que no es verdaderamente inteligente

### Agentes Inteligentes

Un **agente** es cualquier cosa que percibe su entorno a través de sensores y actúa sobre él mediante actuadores.

```
          Sensores
             ↓
Entorno → Agente → Acciones
             ↑
         Actuadores
```

Un **agente racional** actúa para maximizar una medida de rendimiento basándose en:
- Su secuencia de percepciones (historial de todo lo que ha percibido)
- Su conocimiento del entorno
- Las acciones disponibles para él

**Ejemplo**: Un termostato es un agente simple. Detecta la temperatura (sensor), la compara con un punto de referencia y enciende o apaga la calefacción (actuador).

### Los Cuatro Objetivos de la IA

Russell & Norvig (2021) identifican cuatro objetivos históricos:

1. **Centrado en humanos vs centrado en la racionalidad**: ¿Debería la IA imitar a los humanos o alcanzar un rendimiento ideal?
2. **Razonamiento vs comportamiento**: ¿Debería la IA centrarse en el razonamiento interno o en las acciones externas?

| | Centrado en humanos | Centrado en la racionalidad |
|---|---|---|
| **Razonamiento** | Ciencia Cognitiva | Leyes del Pensamiento |
| **Comportamiento** | Test de Turing | Agente Racional |

Este curso adopta la perspectiva del **Agente Racional** porque:
- Es más general (no requiere comportamiento similar al humano)
- Es más amigable para la ingeniería (el éxito es medible)
- Se alinea con el Machine Learning moderno

## Explicación Visual

**Figura 1.1**: Las dos dimensiones de las definiciones de IA.

Una matriz de 2×2 con filas "Pensar" y "Actuar" y columnas "Humanamente" y "Racionalmente". Cada celda contiene el nombre del enfoque y una breve descripción. La celda "Actuar Racionalmente" está resaltada como el enfoque de este curso.

**Figura 1.2**: El bucle de interacción agente-entorno.

Un diagrama que muestra el entorno a la izquierda, el agente a la derecha, con flechas etiquetadas como "sensores" (entorno → agente) y "actuadores" (agente → entorno), y un bucle que muestra la retroalimentación.

## Implementación en Python

Esta lección introductoria no requiere código Python. Comenzaremos a programar en el Módulo 2 (Fundamentos de Python). Sin embargo, te recomendamos configurar tu entorno Python ahora siguiendo las instrucciones en el README del curso.

## Ejemplo en Biotecnología

En biotecnología, se pueden diseñar agentes inteligentes para analizar secuencias genómicas. Por ejemplo, un sistema de IA puede:
- **Percibir**: Leer datos de secuenciación de ADN de una muestra de paciente
- **Razonar**: Comparar la secuencia con bases de datos genómicas conocidas
- **Actuar**: Marcar mutaciones patogénicas y sugerir terapias dirigidas

Este es un agente inteligente que actúa racionalmente — usando datos para impulsar decisiones clínicas.

## Ejemplo en SaaS

En una empresa SaaS como Spotify, los agentes de IA:
- **Perciben**: Tu historial de escucha, saltos, gustos, agregados a listas de reproducción
- **Razonan**: Identifican patrones en tus preferencias musicales
- **Actúan**: Recomiendan nuevas canciones y artistas que podrías disfrutar

Este agente racional maximiza el compromiso y la satisfacción del usuario.

## Errores Comunes

1. **Confundir IA con Machine Learning**: La IA es el campo más amplio. ML es un subcampo de la IA. Todo ML es IA, pero no toda IA es ML.
2. **Asumir que la IA requiere conciencia**: La IA moderna no posee conciencia, autoconciencia ni emociones. Realiza tareas sin comprensión.
3. **Equiparar IA con inteligencia similar a la humana**: Un ajedrez de IA que vence a campeones mundiales no "piensa" como un humano — utiliza estrategias computacionales diferentes.
4. **Creer que la IA es infalible**: Los sistemas de IA cometen errores. Sus decisiones dependen de la calidad de los datos, el diseño del algoritmo y el planteamiento del problema.

## Buenas Prácticas

1. **Usa un lenguaje preciso**: Distingue entre IA, Machine Learning y Deep Learning.
2. **Piensa en términos de agentes y entornos**: Formula los problemas como agentes que perciben y actúan.
3. **Define métricas de éxito**: Para cualquier proyecto de IA, especifica cómo medirás el rendimiento.
4. **Considera los límites**: Conoce lo que tu sistema de IA puede y no puede hacer.
5. **Empieza simple**: El agente racional más simple que resuelve el problema suele ser el mejor.

## Resumen

- La IA es el campo de construcción de sistemas inteligentes, con múltiples definiciones organizadas en las dimensiones de pensar/actuar y humana/racionalmente.
- El Test de Turing evalúa si una máquina puede exhibir conversación similar a la humana, pero tiene limitaciones significativas.
- Un agente inteligente percibe su entorno y toma acciones para alcanzar objetivos.
- El enfoque del agente racional es el marco más práctico para construir sistemas de IA.
- La IA es más amplia que el Machine Learning; no todo sistema de IA aprende de datos.

## Términos Clave

| Término | Definición |
|---|---|
| **Inteligencia Artificial** | El campo de estudio que se ocupa de construir sistemas que exhiben comportamiento inteligente |
| **Test de Turing** | Una prueba propuesta por Alan Turing donde una máquina intenta convencer a un evaluador humano de que es humana |
| **Agente Inteligente** | Un sistema que percibe su entorno y toma acciones para alcanzar objetivos |
| **Agente Racional** | Un agente que actúa para maximizar una medida de rendimiento |
| **Sensores** | Mecanismos mediante los cuales un agente percibe su entorno |
| **Actuadores** | Mecanismos mediante los cuales un agente actúa sobre su entorno |
| **Cognición** | Los procesos mentales involucrados en adquirir conocimiento y comprensión |
| **Juego de la Imitación** | El nombre original del Test de Turing |

## Ejercicios

### Nivel 1: Comprensión Básica

1. Enumera los cuatro enfoques para definir la IA según Russell & Norvig.
2. ¿Qué es el Test de Turing? Proporciona una razón por la que no es una medida perfecta de inteligencia.
3. Define un agente inteligente y nombra sus dos componentes principales.

### Nivel 2: Implementación

4. Dibuja un diagrama agente-entorno para un filtro de spam impulsado por IA. Etiqueta los sensores, actuadores, entorno y medida de rendimiento.
5. Para cada uno de los siguientes sistemas, identifica si ejemplifican "actuar humanamente" o "actuar racionalmente": (a) un chatbot, (b) un motor de ajedrez, (c) un auto autónomo.

### Nivel 3: Pensamiento Crítico

6. "Una calculadora es más inteligente que un humano en aritmética, pero no la consideramos inteligente". Discute qué le falta a las calculadoras para que no las clasifiquemos como IA.
7. Si un sistema de IA pudiera pasar el Test de Turing durante 30 minutos pero fallara en una conversación de 3 horas, ¿se consideraría inteligente? ¿Dónde trazarías el límite?

## Desafío de Programación

Dado que esta lección no asume conocimientos de programación, el desafío es conceptual:

Investiga un sistema de IA que uses a diario (ej., Búsqueda de Google, recomendaciones de Netflix, reconocimiento facial en tu teléfono). Escribe un párrafo identificando:
1. Qué percibe (sensores/entrada)
2. Qué acciones realiza (actuadores/salida)
3. Qué objetivo intenta alcanzar (medida de rendimiento)
4. Si actúa humanamente o racionalmente
