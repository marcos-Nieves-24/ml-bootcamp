---
Module: 1
Lesson: 4
Title: Paradigmas de IA
---

# Cuestionario: Paradigmas de IA

## Opción Múltiple (5 preguntas)

**1. ¿Cuál de los siguientes NO es un componente de un sistema experto?**

a) Base de Conocimiento
b) Motor de Inferencia
c) Conjunto de Datos de Entrenamiento
d) Interfaz de Usuario

**2. ¿Cuál es la ventaja clave del Machine Learning sobre los sistemas Basados en Reglas?**

a) ML siempre es más preciso
b) ML puede aprender patrones de datos sin programación explícita
c) ML no requiere datos
d) ML es más fácil de interpretar

**3. ¿Qué arquitectura forma la base de los Large Language Models modernos?**

a) Redes Neuronales Recurrentes
b) Redes Neuronales Convolucionales
c) Transformer
d) Árboles de Decisión

**4. ¿En qué escenario se preferiría un sistema basado en reglas sobre deep learning?**

a) Cuando tienes millones de imágenes etiquetadas
b) Cuando el dominio tiene reglas claras y estables y la interpretabilidad es crítica
c) Cuando necesitas procesar lenguaje natural
d) Cuando quieres máxima precisión

**5. ¿A qué se refiere "profundo" en Deep Learning?**

a) La profundidad de comprensión que alcanza el modelo
b) El número de capas ocultas en la red neuronal
c) La cantidad de datos de entrenamiento requeridos
d) La profundidad computacional requerida para el entrenamiento

## Respuesta Corta (2 preguntas)

**6. Explica el cuello de botella de adquisición de conocimiento en los sistemas expertos.**

**7. Necesitas construir un sistema para clasificar imágenes de rayos X como normales o anormales. ¿Qué paradigma de IA elegirías y por qué?**

## Pregunta de Programación (1 pregunta)

**8.** Escribe una función en Python `hybrid_decision(rules_result, ml_confidence, threshold=0.7)` que:
- Si `rules_result` es "definite", devuélvelo inmediatamente
- Si `rules_result` es "uncertain" y `ml_confidence >= threshold`, devuelve "positive"
- Si `rules_result` es "uncertain" y `ml_confidence < threshold`, devuelve "negative"

---

## Clave de Respuestas

1. **c)** Conjunto de Datos de Entrenamiento
2. **b)** ML puede aprender patrones de datos sin programación explícita
3. **c)** Transformer
4. **b)** Cuando el dominio tiene reglas claras y estables y la interpretabilidad es crítica
5. **b)** El número de capas ocultas en la red neuronal
6. El cuello de botella de adquisición de conocimiento es la dificultad de extraer conocimiento experto y codificarlo en reglas. Los expertos humanos son escasos, costosos y pueden no ser capaces de articular su conocimiento explícitamente. Las reglas también necesitan actualización constante a medida que el conocimiento evoluciona.
7. Deep learning (específicamente redes neuronales convolucionales) porque: (a) las imágenes de rayos X son datos de alta dimensión; (b) los patrones que indican anomalías son complejos y jerárquicos; (c) las CNN sobresalen en clasificación de imágenes; (d) hay grandes conjuntos de datos de rayos X etiquetados disponibles.
8. 
```python
def hybrid_decision(rules_result, ml_confidence, threshold=0.7):
    if rules_result == "definite":
        return rules_result
    elif rules_result == "uncertain":
        return "positive" if ml_confidence >= threshold else "negative"
```
