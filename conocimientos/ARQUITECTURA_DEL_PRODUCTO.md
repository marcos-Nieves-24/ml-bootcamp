# Arquitectura del Producto

# ML Bootcamp

## Propósito

Este documento define la arquitectura funcional de ML Bootcamp.

No describe la implementación técnica.

Describe la experiencia completa que vive un estudiante y cómo se organizan los distintos espacios de la plataforma.

ML Bootcamp no es una colección de páginas.

Es un ecosistema donde cada espacio tiene un propósito claro dentro del proceso de aprendizaje.

---

# La experiencia del estudiante

Todo el producto gira alrededor del estudiante.

No alrededor del contenido.

No alrededor de los módulos.

No alrededor de las tecnologías.

Cada vez que un estudiante inicia sesión, la plataforma debe responder inmediatamente una pregunta:

> **¿Cuál es el siguiente paso en mi aprendizaje?**

---

# Los cuatro espacios del aprendizaje

Toda la plataforma se organiza alrededor de cuatro grandes espacios.

```text
Dashboard

↓

Instituto

↓

Laboratorio

↓

Taller
```

Cada uno cumple una responsabilidad diferente.

---

# Dashboard

## Propósito

El Dashboard representa el presente del estudiante.

Responde:

- ¿Qué debo hacer ahora?
- ¿Dónde me quedé?
- ¿Cuál es mi siguiente objetivo?
- ¿Qué progreso he conseguido?

Es la pantalla principal del producto.

Todo estudiante comienza y termina aquí.

---

## Componentes

El Dashboard muestra:

- misión actual;
- progreso general;
- XP;
- nivel;
- racha;
- conceptos dominados;
- objetivos diarios;
- actividad reciente;
- recomendaciones personalizadas;
- proyectos activos.

Nunca muestra el curso completo.

Su objetivo es facilitar la continuidad.

---

# Instituto

## Propósito

El Instituto representa el mapa completo del conocimiento.

No muestra únicamente el contenido disponible.

Muestra el camino que recorrerá el estudiante para convertirse en un profesional del Machine Learning.

Aquí el estudiante explora.

Planifica.

Descubre nuevas áreas.

---

## Organización

El Instituto se organiza como un campus académico.

Cada edificio representa una disciplina.

Ejemplo:

🏛 Matemáticas

💻 Python

📊 Estadística

🤖 Machine Learning

🧠 Deep Learning

👁️ Computer Vision

💬 NLP

⚙️ MLOps

Cada edificio contiene:

- módulos;
- misiones;
- laboratorios;
- proyectos;
- conceptos;
- logros.

---

## Dentro de un edificio

Cada disciplina presenta:

- descripción;
- prerequisitos;
- progreso;
- conceptos;
- misiones;
- proyecto final;
- habilidades obtenidas.

El estudiante comprende cómo se relaciona ese conocimiento con el resto del recorrido.

---

# Misiones

Las misiones representan la unidad principal de aprendizaje.

Toda misión contiene:

- introducción;
- objetivo;
- teoría;
- visualización;
- experimentación;
- código guiado;
- práctica;
- desafío;
- retroalimentación;
- resumen.

Cada misión desarrolla una única competencia.

---

# Laboratorio

## Propósito

El Laboratorio es el espacio para experimentar.

Aquí no existen respuestas correctas.

Existe curiosidad.

El estudiante puede:

- modificar parámetros;
- romper modelos;
- comparar resultados;
- crear hipótesis;
- ejecutar simulaciones;
- explorar datasets.

El Laboratorio fomenta el descubrimiento.

No la repetición.

---

## Componentes

El Laboratorio incluye:

- simulaciones;
- playgrounds;
- notebooks;
- visualizadores;
- datasets;
- experimentos interactivos.

Cada herramienta debe permitir aprender mediante exploración.

---

# Taller

## Propósito

El Taller representa la construcción.

Aquí el estudiante aplica múltiples conceptos para resolver problemas reales.

Todo proyecto debe sentirse como una experiencia profesional.

---

## Contenido

El Taller contiene:

- proyectos guiados;
- proyectos libres;
- portfolio;
- revisiones del Tutor IA;
- evaluación automática;
- publicación de proyectos.

Todo módulo importante culmina en un proyecto del Taller.

---

# Tutor IA

El Tutor IA acompaña al estudiante durante toda la experiencia.

Está disponible en cualquier espacio.

Nunca sustituye el aprendizaje.

Su función es:

- orientar;
- formular preguntas;
- proporcionar pistas;
- detectar dificultades;
- recomendar contenido;
- adaptar explicaciones;
- sugerir mejoras.

Debe comportarse como un mentor.

No como un solucionador automático.

---

# Comunidad

La Comunidad conecta a los estudiantes.

Incluye:

- preguntas;
- respuestas;
- discusiones;
- grupos de estudio;
- desafíos;
- duelos.

El objetivo es aprender colaborativamente.

No crear una red social.

---

# Duelos

Los duelos enfrentan a estudiantes con niveles similares.

Evalúan:

- comprensión;
- razonamiento;
- resolución de problemas.

Nunca rapidez para escribir.

Nunca memorización.

---

# Perfil

El perfil representa el crecimiento del estudiante.

Debe mostrar:

- nivel;
- XP;
- habilidades;
- conceptos dominados;
- proyectos;
- logros;
- insignias;
- estadísticas;
- portfolio.

El perfil demuestra competencias.

No únicamente actividad.

---

# Flujo principal

Todo estudiante sigue este recorrido.

```text
Dashboard

↓

Continuar misión

↓

Aprender

↓

Experimentar

↓

Laboratorio

↓

Resolver desafío

↓

Proyecto

↓

Retroalimentación

↓

XP

↓

Dashboard
```

Este ciclo se repite durante toda la vida del estudiante.

---

# Arquitectura conceptual

```text
                        Dashboard
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
   Instituto           Laboratorio         Comunidad
        │                   │                   │
        │                   │                   │
        └──────────────┬────┘                   │
                       ▼                        │
                  Misiones                      │
                       │                        │
                       ▼                        │
                  Tutor IA ◄────────────────────┘
                       │
                       ▼
                    Taller
                       │
                       ▼
                    Proyectos
                       │
                       ▼
                    Portfolio
                       │
                       ▼
                    Dashboard
```

---

# Responsabilidades

| Espacio | Responsabilidad |
|----------|-----------------|
| Dashboard | Guiar el aprendizaje diario |
| Instituto | Mostrar el mapa del conocimiento |
| Misiones | Enseñar conceptos |
| Laboratorio | Favorecer la experimentación |
| Taller | Construir proyectos reales |
| Tutor IA | Acompañar al estudiante |
| Comunidad | Facilitar el aprendizaje colaborativo |
| Perfil | Mostrar el crecimiento profesional |

Cada espacio tiene una única responsabilidad.

Las responsabilidades no deben mezclarse.

---

# Escalabilidad

La arquitectura debe permitir incorporar nuevas disciplinas sin modificar la experiencia.

Ejemplos:

- IA Generativa
- Agentes
- Reinforcement Learning
- Ciencia de Datos
- LLM Engineering
- MLOps

Cada nueva área se integra como un nuevo edificio dentro del Instituto.

El resto de la plataforma permanece inalterado.

---

# Principios de diseño

- Un objetivo por pantalla.
- El aprendizaje es el centro.
- El progreso siempre es visible.
- La navegación debe ser intuitiva.
- La experimentación debe ser sencilla.
- La IA debe guiar, no resolver.
- Todo proyecto debe generar valor para el portfolio.
- Cada interacción debe acercar al estudiante a convertirse en un profesional.

---

# Principio fundamental

ML Bootcamp no es un curso.

Es un entorno donde una persona entra como principiante y, misión tras misión, laboratorio tras laboratorio y proyecto tras proyecto, desarrolla las habilidades necesarias para convertirse en un profesional del Machine Learning.
