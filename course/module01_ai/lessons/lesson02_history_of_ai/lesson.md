---
Module: 1
Lesson Number: 2
Lesson Title: Historia de la IA
Estimated Duration: 45 minutes
Prerequisites: Lección 1 — ¿Qué es la Inteligencia Artificial?
Learning Objectives:
  - Describir los eventos clave de la Conferencia de Dartmouth de 1956
  - Explicar las causas y efectos de los inviernos y primaveras de la IA
  - Identificar los hitos principales en el desarrollo de la IA desde 1950 hasta la actualidad
  - Comparar el enfoque de IA simbólica con el enfoque conexionista
  - Evaluar cómo los eventos históricos moldearon la IA moderna
Keywords: Conferencia de Dartmouth, invierno de la IA, primavera de la IA, IA simbólica, conexionismo, sistemas expertos, redes neuronales, deep learning, historia del machine learning
Difficulty: Beginner
Programming Concepts: None
Mathematical Concepts: None
Machine Learning Concepts: None
Datasets Used: None
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Lección 2: Historia de la IA

## Motivación de la Lección

Comprender la historia de la IA te ayuda a apreciar por qué el campo luce como lo hace hoy. El patrón de hype, decepción y esperanza renovada se ha repetido múltiples veces. Al aprender esta historia, entenderás por qué algunas afirmaciones sobre la IA deben tomarse con escepticismo, por qué ciertas técnicas cayeron en desgracia y luego regresaron, y por qué estamos actualmente en un período de progreso extraordinario. Esta perspectiva es invaluable para cualquiera que construya sistemas de IA profesionalmente.

## Panorama General

En la Lección 1, definimos IA y agentes inteligentes. Ahora exploramos cómo se desarrolló el campo durante más de 70 años. Este contexto histórico te ayudará a entender la Lección 3 (Tipos de IA) — particularmente por qué existe la distinción entre IA Estrecha e IA General. La Lección 4 (Paradigmas de IA) explicará luego los enfoques técnicos que surgieron de esta historia.

```
Lección 1 (¿Qué es la IA?) → Lección 2 (Historia) → Lección 3 (Tipos de IA) → Lección 4 (Paradigmas)
```

## Teoría

### El Nacimiento de la IA: Conferencia de Dartmouth (1956)

El campo de la Inteligencia Artificial nació oficialmente en el verano de 1956 en Dartmouth College en Hanover, New Hampshire. Un grupo de científicos — incluyendo a **John McCarthy**, **Marvin Minsky**, **Nathaniel Rochester** y **Claude Shannon** — organizaron un taller de dos meses.

**La propuesta** decía: "Cada aspecto del aprendizaje o cualquier otra característica de la inteligencia puede, en principio, describirse con tanta precisión que se puede hacer que una máquina lo simule."

Esta declaración capturó el **optimismo** de los primeros investigadores de IA. Creían que crear inteligencia a nivel humano era un problema de ingeniería sencillo, resoluble en una generación.

**Resultados clave**:
- Se acuñó el término "Inteligencia Artificial"
- Comenzó el trabajo temprano en razonamiento simbólico y resolución de problemas
- El campo ganó legitimidad académica

### Los Años Dorados (1956–1974)

Las décadas posteriores a Dartmouth vieron un progreso notable:

- **Logic Theorist** (1956): El primer programa de IA, creado por Allen Newell y Herbert Simon. Podía demostrar teoremas matemáticos.
- **General Problem Solver** (1957): Un programa diseñado para resolver cualquier problema que pudiera formalizarse.
- **Lisp** (1958): John McCarthy creó el lenguaje de programación que se convirtió en la lengua franca de la IA durante décadas.
- **ELIZA** (1966): Joseph Weizenbaum creó un chatbot que simulaba un psicoterapeuta.
- **Shakey the Robot** (1966–1972): El primer robot móvil de propósito general.

Los investigadores eran excesivamente optimistas. Simon predijo en 1965 que "las máquinas serán capaces, en veinte años, de hacer cualquier trabajo que un hombre pueda hacer."

### Primer Invierno de la IA (1974–1980)

El progreso se estancó. Surgieron problemas clave:

- **Limitaciones computacionales**: Las computadoras carecían de la potencia necesaria para problemas del mundo real.
- **Explosión combinatoria**: Problemas simples requerían un crecimiento exponencial de cómputo.
- **Paradoja de Moravec**: Lo que es difícil para los humanos (ajedrez) es fácil para las computadoras, pero lo que es fácil para los humanos (percepción, movimiento) es difícil para las computadoras.

Las agencias de financiamiento se frustraron con las promesas incumplidas, lo que llevó al **Informe Lighthill** (1973) en el Reino Unido, que criticó duramente la investigación en IA. La financiación se redujo drásticamente — el primer **Invierno de la IA**.

### Era de los Sistemas Expertos (1980–1987)

El campo revivió con los **sistemas expertos** — programas que codificaban el conocimiento de expertos humanos en reglas.

- **MYCIN** (1970s): Diagnosticaba infecciones bacterianas, superando a algunos médicos humanos.
- **XCON** (1980): Configuraba sistemas informáticos para DEC, ahorrando a la compañía $40M por año.
- **Éxito comercial**: Las empresas invirtieron fuertemente. La industria de la IA creció a miles de millones de dólares.

Los sistemas expertos funcionaban porque eran **estrechos** — resolvían problemas específicos y bien definidos sin intentar inteligencia general.

### Segundo Invierno de la IA (1987–1993)

El auge de los sistemas expertos colapsó:

- **Pesadilla de mantenimiento**: Los sistemas expertos eran frágiles. Cambiar una regla podía romper todo el sistema.
- **CUELLO de botella del conocimiento**: Crear reglas manualmente requería expertos humanos escasos y costosos.
- **El proyecto Japonés de Quinta Generación fracasó**: Una iniciativa gubernamental masiva para crear IA avanzada no dio resultados.
- **El mercado de máquinas Lisp colapsó**: Empresas de hardware especializado quebraron.

La financiación y el interés se evaporaron una vez más.

### Primavera de la IA: El Auge del Machine Learning (1990s–2000s)

El campo pasó de la **IA simbólica** (reglas hechas a mano) a la **IA conexionista** (aprendizaje a partir de datos). Hitos clave:

- **1997**: Deep Blue de IBM derrotó al campeón mundial de ajedrez Garry Kasparov.
- **2006**: Geoffrey Hinton publicó un trabajo innovador sobre **deep learning**, demostrando que las redes neuronales profundas podían entrenarse eficazmente.
- **2012**: AlexNet ganó la competencia ImageNet por un margen amplio, desencadenando la revolución del deep learning.

### IA Moderna (2010s–Presente)

La primavera actual de la IA está impulsada por:

- **Big data**: Internet generó conjuntos de datos masivos para el entrenamiento.
- **Computación con GPU**: Las unidades de procesamiento gráfico habilitaron la computación paralela a escala.
- **Avances en deep learning**: Reconocimiento de imágenes, reconocimiento de voz, procesamiento de lenguaje natural.
- **Large Language Models**: GPT (2018), BERT (2018), GPT-3 (2020), GPT-4 (2023), Claude (2023).

Hitos clave:
- **2011**: IBM Watson ganó Jeopardy!
- **2016**: AlphaGo de DeepMind derrotó a Lee Sedol (campeón mundial de Go).
- **2020**: AlphaFold resolvió el plegamiento de proteínas.
- **2022**: ChatGPT alcanzó 100 millones de usuarios en dos meses.
- **2024**: Los sistemas de IA aprobaron el Examen de Licencia Médica, el Examen de Abogacía y más.

## Explicación Visual

**Figura 2.1**: Línea de tiempo de la IA (1950–presente).

Una línea de tiempo horizontal con eventos clave: propuesta del Test de Turing (1950), Conferencia de Dartmouth (1956), ELIZA (1966), primer invierno de la IA (1974), sistemas expertos (1980), segundo invierno de la IA (1987), Deep Blue (1997), ImageNet (2009), AlexNet (2012), AlphaGo (2016), GPT-3 (2020), ChatGPT (2022).

**Figura 2.2**: Ciclo de hype de la IA.

Un diagrama que muestra picos de expectativas infladas y valles de desilusión a lo largo del tiempo, con los inviernos de la IA claramente marcados.

## Implementación en Python

No se requiere implementación en Python para esta lección. Crearemos una visualización de línea de tiempo simple en el notebook.

## Ejemplo en Biotecnología

La historia de la IA en biotecnología corre en paralelo con el campo más amplio. Los primeros intentos usaron sistemas expertos para diagnóstico (MYCIN). Los enfoques modernos usan deep learning para el plegamiento de proteínas (AlphaFold). Este cambio — de reglas hechas a mano al aprendizaje impulsado por datos — transformó la biotecnología:

- **1970s**: MYCIN diagnosticaba infecciones usando reglas creadas por médicos
- **2000s**: El machine learning predecía estructuras de proteínas a partir de datos conocidos
- **2020**: AlphaFold resolvió el problema del plegamiento de proteínas de 50 años usando deep learning

## Ejemplo en SaaS

El análisis en SaaS siguió una trayectoria similar:

- **1990s**: Sistemas basados en reglas para detectar transacciones fraudulentas
- **2000s**: Machine learning para predicción de abandono de clientes
- **2010s**: Deep learning para personalización en tiempo real
- **2020s**: Large Language Models para automatización de atención al cliente

## Errores Comunes

1. **Pensar que el progreso de la IA fue lineal**: La historia es cíclica — auges seguidos de caídas.
2. **Creer que los primeros investigadores de IA eran ingenuos**: Sus predicciones eran optimistas, pero su trabajo fundacional fue brillante.
3. **Asumir que el deep learning es el paradigma final**: El campo ha cambiado antes y cambiará de nuevo.
4. **Confundir la IA simbólica con la IA conexionista**: La IA simbólica usa reglas explícitas; la IA conexionista aprende patrones a partir de datos.

## Buenas Prácticas

1. **Estudia la historia para evitar repetir errores**: Comprende por qué fracasaron los sistemas del pasado.
2. **Sé escéptico ante el hype**: La emoción actual por la IA refleja auges pasados.
3. **Aprecia las ideas fundamentales**: Muchas ideas "nuevas" tienen raíces en la investigación de las décadas de 1950 y 1960.
4. **Conoce la historia del hardware**: El progreso de la IA está estrechamente vinculado con los avances computacionales.
5. **Respeta los inviernos**: La financiación puede desaparecer rápidamente por promesas incumplidas.

## Resumen

- La IA fue fundada oficialmente en la Conferencia de Dartmouth en 1956.
- El optimismo temprano llevó al primer invierno de la IA cuando no se cumplieron las promesas.
- Los sistemas expertos revivieron la IA en los 1980s pero eran frágiles y difíciles de mantener.
- El segundo invierno de la IA siguió al colapso de los sistemas expertos.
- La IA moderna se basa en machine learning, big data y hardware potente.
- El campo es cíclico — el progreso actual es real pero no está garantizado que continúe linealmente.
- El deep learning y los LLMs representan el paradigma actual, pero el campo continúa evolucionando.

## Términos Clave

| Término | Definición |
|---|---|
| **Conferencia de Dartmouth** | El taller de 1956 que fundó la IA como campo |
| **Invierno de la IA** | Período de reducción de financiación e interés en la IA |
| **Primavera de la IA** | Período de progreso rápido e inversión en la IA |
| **Sistema Experto** | Programa que codifica el conocimiento humano como reglas |
| **IA Simbólica** | IA basada en símbolos y reglas explícitas (GOFAI) |
| **Conexionismo** | IA basada en redes neuronales que aprenden de datos |
| **GOFAI** | Good Old-Fashioned AI — IA simbólica basada en reglas |
| **Explosión Combinatoria** | El crecimiento rápido de los requisitos computacionales a medida que aumenta el tamaño del problema |
| **Paradoja de Moravec** | La observación de que las tareas humanas fáciles son difíciles para la IA, y viceversa |
| **Deep Learning** | Redes neuronales multicapa entrenadas con grandes conjuntos de datos |

## Ejercicios

### Nivel 1: Comprensión Básica

1. ¿Cuándo y dónde se acuñó por primera vez el término "Inteligencia Artificial"?
2. ¿Cuáles fueron las causas principales del primer invierno de la IA (1974–1980)?
3. Nombra dos sistemas expertos exitosos de las décadas de 1970–1980 y qué hacían.

### Nivel 2: Implementación

4. Crea una línea de tiempo de 10 hitos importantes de la IA con años. Colócalos en orden cronológico.
5. Compara la IA simbólica con la IA conexionista en una tabla con al menos 4 criterios de comparación.

### Nivel 3: Pensamiento Crítico

6. "La historia de la IA muestra que el campo progresa en ciclos, no en línea recta". Argumenta a favor o en contra de esta afirmación usando evidencia histórica.
7. Si fueras un investigador de IA en 1985, ¿qué evidencia te llevaría a ser optimista sobre el futuro? ¿Qué evidencia te haría ser cauteloso?

## Desafío de Programación

Crea una lista de Python con hitos de la IA (año, evento) y escribe una función que imprima una línea de tiempo:

```python
milestones = [
    (1950, "Turing Test proposed"),
    (1956, "Dartmouth Conference"),
    (1966, "ELIZA chatbot"),
    (1974, "First AI Winter begins"),
    (1980, "Expert systems boom"),
    (1987, "Second AI Winter begins"),
    (1997, "Deep Blue beats Kasparov"),
    (2006, "Deep learning breakthrough"),
    (2012, "AlexNet wins ImageNet"),
    (2016, "AlphaGo beats Lee Sedol"),
    (2020, "GPT-3 released"),
    (2022, "ChatGPT launched")
]
```

Escribe una función `print_timeline(milestones)` que ordene por año e imprima cada hito con un separador visual.
