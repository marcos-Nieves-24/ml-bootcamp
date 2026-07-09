---
Module: 1
Lesson: 2
Title: Historia de la IA
---

# Cuestionario: Historia de la IA

## Opción Múltiple (5 preguntas)

**1. ¿Dónde y cuándo se fundó oficialmente el campo de la Inteligencia Artificial?**

a) MIT, 1950
b) Dartmouth College, 1956
c) Universidad de Stanford, 1962
d) Universidad de Edimburgo, 1973

**2. ¿Cuál fue la causa principal del primer invierno de la IA (1974–1980)?**

a) Los gobiernos prohibieron la investigación en IA
b) Las computadoras carecían de potencia y la IA no cumplió las promesas optimistas
c) Los científicos perdieron interés en la IA
d) Un virus atacó los sistemas de IA

**3. ¿Qué sistema derrotó al campeón mundial Garry Kasparov en 1997?**

a) AlphaGo
b) Watson
c) Deep Blue
d) ELIZA

**4. ¿Cuál fue el problema clave de los sistemas expertos que llevó al segundo invierno de la IA?**

a) Eran demasiado costosos de construir
b) Eran frágiles, difíciles de mantener y requerían expertos humanos escasos
c) No podían resolver ningún problema real
d) Requerían demasiados datos

**5. ¿Qué evento en 2012 desencadenó la revolución moderna del deep learning?**

a) IBM Watson ganó Jeopardy!
b) AlexNet ganó la competencia ImageNet
c) AlphaGo derrotó a Lee Sedol
d) Se lanzó GPT-3

## Respuesta Corta (2 preguntas)

**6. ¿Qué es la Paradoja de Moravec? Proporciona un ejemplo.**

**7. Explica la diferencia entre la IA simbólica y la IA conexionista.**

## Pregunta de Programación (1 pregunta)

**8.** Escribe una función en Python `timeline_from_year(milestones, year)` que reciba una lista de tuplas (año, evento) y un año de inicio, y devuelva solo los eventos desde ese año en adelante. Ejemplo:

```python
milestones = [(1950, "Turing Test"), (1956, "Dartmouth"), (2012, "AlexNet")]
events_after_2000 = timeline_from_year(milestones, 2000)
# Should return [(2012, "AlexNet")]
```

---

## Clave de Respuestas

1. **b)** Dartmouth College, 1956
2. **b)** Las computadoras carecían de potencia y la IA no cumplió las promesas optimistas
3. **c)** Deep Blue
4. **b)** Eran frágiles, difíciles de mantener y requerían expertos humanos escasos
5. **b)** AlexNet ganó la competencia ImageNet
6. La Paradoja de Moravec es la observación de que las tareas que son difíciles para los humanos (ej., ajedrez, demostración de teoremas matemáticos) son fáciles para las computadoras, mientras que las tareas que son fáciles para los humanos (ej., reconocer una cara, recoger un objeto) son difíciles para las computadoras.
7. La IA simbólica (GOFAI) usa símbolos, reglas y lógica explícitas para representar conocimiento y razonar. La IA conexionista usa redes neuronales que aprenden patrones a partir de datos sin reglas explícitas.
8. 
```python
def timeline_from_year(milestones, year):
    return [(y, event) for y, event in milestones if y >= year]
```
