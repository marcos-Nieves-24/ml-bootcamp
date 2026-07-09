---
Module: 1
Lesson: 3
Title: Tipos de IA
---

# Cuestionario: Tipos de IA

## Opción Múltiple (5 preguntas)

**1. ¿Cuál de las siguientes opciones describe mejor la IA Estrecha?**

a) IA que no es muy inteligente
b) IA diseñada para realizar una tarea específica o un rango estrecho de tareas
c) IA que puede realizar cualquier tarea intelectual que un humano pueda
d) IA que es autoconsciente

**2. Deep Blue, la computadora de ajedrez que venció a Garry Kasparov, es un ejemplo de qué tipo funcional?**

a) Memoria Limitada
b) Teoría de la Mente
c) Máquina Reactiva
d) Autoconsciente

**3. ¿Cuál es la diferencia clave entre la IA de Memoria Limitada y las Máquinas Reactivas?**

a) La IA de Memoria Limitada es más rápida
b) La IA de Memoria Limitada puede usar datos pasados para informar decisiones
c) La IA de Memoria Limitada es autoconsciente
d) Las Máquinas Reactivas usan redes neuronales

**4. ¿Qué tipo de IA no existe hoy y es puramente hipotético?**

a) IA Estrecha
b) IA de Memoria Limitada
c) Inteligencia Artificial General
d) Todas las anteriores existen hoy

**5. Los autos autónomos se clasifican típicamente como:**

a) Máquina Reactiva
b) Memoria Limitada
c) Teoría de la Mente
d) Autoconsciente

## Respuesta Corta (2 preguntas)

**6. Explica por qué ChatGPT se considera IA Estrecha a pesar de sus impresionantes capacidades.**

**7. ¿Qué es el tipo de IA "teoría de la mente"? ¿Por qué es difícil de construir?**

## Pregunta de Programación (1 pregunta)

**8.** Escribe una función `ai_type_examples(ai_type)` que reciba un string ('narrow', 'agi' o 'asi') y devuelva un diccionario con las claves 'description', 'exists' y 'example'. Proporciona contenido razonable para cada tipo.

---

## Clave de Respuestas

1. **b)** IA diseñada para realizar una tarea específica o un rango estrecho de tareas
2. **c)** Máquina Reactiva
3. **b)** La IA de Memoria Limitada puede usar datos pasados para informar decisiones
4. **c)** Inteligencia Artificial General
5. **b)** Memoria Limitada
6. ChatGPT es IA Estrecha porque: (a) está entrenado solo en texto, no en otras modalidades; (b) falla en tareas fuera de su distribución de entrenamiento; (c) carece de comprensión causal, sentido común y transfer learning entre dominios; (d) no puede aprender nuevas tareas de manera confiable con pocos ejemplos.
7. La IA de Teoría de la Mente entendería que otros tienen creencias, deseos e intenciones — podría modelar los estados mentales de otros agentes. Es difícil porque: (a) no entendemos completamente cómo funciona la teoría de la mente humana; (b) requiere modelar estados mentales no observables; (c) implica razonamiento recursivo ("¿qué cree el agente que yo pienso?").
8. 
```python
def ai_type_examples(ai_type):
    types = {
        'narrow': {
            'description': 'AI specialized in one task',
            'exists': True,
            'example': 'Chess engine, spam filter, Siri'
        },
        'agi': {
            'description': 'AI with human-level general intelligence',
            'exists': False,
            'example': 'None (hypothetical)'
        },
        'asi': {
            'description': 'AI vastly exceeding human intelligence',
            'exists': False,
            'example': 'None (hypothetical)'
        }
    }
    return types.get(ai_type, {'error': 'Unknown type'})
```
