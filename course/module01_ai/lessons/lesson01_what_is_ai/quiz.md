---
Module: 1
Lesson: 1
Title: ¿Qué es la Inteligencia Artificial?
---

# Cuestionario: ¿Qué es la Inteligencia Artificial?

## Opción Múltiple (5 preguntas)

**1. Según Russell & Norvig, ¿qué enfoque de la IA se centra en construir agentes que logran el mejor resultado?**

a) Actuar humanamente
b) Pensar humanamente
c) Pensar racionalmente
d) Actuar racionalmente

**2. ¿Cuál es el sensor principal que utiliza un sistema de reconocimiento facial en un teléfono inteligente?**

a) Micrófono
b) Cámara
c) Pantalla táctil
d) Acelerómetro

**3. ¿Cuál de las siguientes es una limitación del Test de Turing?**

a) Requiere que la máquina se parezca físicamente a un humano
b) Solo evalúa la capacidad conversacional, no la percepción ni la creatividad
c) Es demasiado costoso computacionalmente para ejecutarlo
d) Requiere múltiples evaluadores humanos

**4. ¿Qué afirmación sobre la Inteligencia Artificial es VERDADERA?**

a) La IA y el Machine Learning son lo mismo
b) Todos los sistemas de Machine Learning son IA, pero no todos los sistemas de IA usan Machine Learning
c) Los sistemas de IA siempre son conscientes
d) Los sistemas de IA nunca cometen errores

**5. Un filtro de spam inteligente que aprende a clasificar correos electrónicos basándose en la retroalimentación del usuario es un ejemplo de:**

a) Pensar humanamente
b) Actuar humanamente
c) Actuar racionalmente
d) Un sistema que no usa IA

## Respuesta Corta (2 preguntas)

**6. Define un agente inteligente y enumera sus tres componentes clave.**

**7. Explica por qué el enfoque del agente racional es preferible al enfoque del Test de Turing para construir sistemas prácticos de IA.**

## Pregunta de Programación (1 pregunta)

**8.** Escribe una función en Python `describe_agent(sensors, actuators, goal)` que reciba tres listas (sensores, actuadores y objetivo) y devuelva una cadena formateada que describa el agente. Por ejemplo:

```python
describe_agent(
    ["camera", "microphone"],
    ["speaker", "screen"],
    "assist the user"
)
```

Debería devolver: `"Agent perceives via camera, microphone and acts via speaker, screen to assist the user."`

Nota: No necesitas ejecutar este código aún — aprenderemos Python en el Módulo 2. Escribe la función lo mejor que puedas conceptualmente.

---

## Clave de Respuestas

1. **d)** Actuar racionalmente
2. **b)** Cámara
3. **b)** Solo evalúa la capacidad conversacional, no la percepción ni la creatividad
4. **b)** Todo ML es IA, pero no toda IA es ML
5. **c)** Actuar racionalmente
6. Un agente inteligente es un sistema que percibe su entorno a través de sensores y actúa sobre él mediante actuadores para alcanzar objetivos. Sus tres componentes clave son: sensores (para percibir), actuadores (para actuar) y una medida de rendimiento (para evaluar el éxito).
7. El enfoque del agente racional es preferible porque: (a) es más general — no requiere comportamiento similar al humano; (b) es medible — el rendimiento puede evaluarse objetivamente; (c) es amigable para la ingeniería — el enfoque está en lograr el mejor resultado en lugar de imitar la cognición humana.
8. 
```python
def describe_agent(sensors, actuators, goal):
    sensors_str = ", ".join(sensors)
    actuators_str = ", ".join(actuators)
    return f"Agent perceives via {sensors_str} and acts via {actuators_str} to {goal}."
```
