---
Module: 1
Lesson: 5
Title: Aplicaciones de la IA
---

# Cuestionario: Aplicaciones de la IA

## Opción Múltiple (5 preguntas)

**1. ¿Qué arquitectura de IA se usa más comúnmente para tareas de Visión por Computadora?**

a) Transformer
b) Red Neuronal Convolucional (CNN)
c) Red Neuronal Recurrente (RNN)
d) Árbol de Decisión

**2. ¿Qué es el filtrado colaborativo en los sistemas de recomendación?**

a) Recomendar elementos con características similares a preferencias pasadas
b) Recomendar elementos basándose en lo que les gustó a usuarios similares
c) Filtrar elementos de baja calidad de forma colaborativa
d) Usar expertos humanos para seleccionar recomendaciones

**3. ¿Cuál de las siguientes es una tarea del Procesamiento de Lenguaje Natural?**

a) Segmentación de imágenes
b) Seguimiento de objetos
c) Reconocimiento de Entidades Nombradas
d) Planificación de rutas

**4. ¿Qué tecnología impulsa los sistemas modernos de generación de imágenes como DALL-E y Stable Diffusion?**

a) Redes Neuronales Recurrentes
b) Modelos de Difusión
c) Máquinas de Vectores de Soporte
d) Árboles de Decisión

**5. ¿Qué problema ocurre cuando un sistema de recomendación encuentra un nuevo usuario sin historial?**

a) Problema de sobreajuste
b) Problema de arranque en frío
c) Problema de gradiente desvaneciente
d) Problema del cisne negro

## Respuesta Corta (2 preguntas)

**6. Explica la diferencia entre detección de objetos y clasificación de imágenes.**

**7. Da un ejemplo real de IA Generativa en un producto SaaS. ¿Qué genera y cómo se usa?**

## Pregunta de Programación (1 pregunta)

**8.** Escribe una función en Python `identify_application(task_description)` que reciba una descripción de tarea y devuelva a qué área de aplicación de IA pertenece ('computer_vision', 'nlp', 'robotics', 'recommendation', 'generative'). Usa coincidencia de palabras clave.

---

## Clave de Respuestas

1. **b)** Red Neuronal Convolucional (CNN)
2. **b)** Recomendar elementos basándose en lo que les gustó a usuarios similares
3. **c)** Reconocimiento de Entidades Nombradas
4. **b)** Modelos de Difusión
5. **b)** Problema de arranque en frío
6. La clasificación de imágenes asigna una sola etiqueta a toda la imagen ("esto es un gato"). La detección de objetos identifica y localiza múltiples objetos en una imagen con cajas delimitadoras ("hay un gato en la posición (10, 20, 100, 150) y un perro en (200, 50, 300, 200)").
7. Ejemplo: GitHub Copilot genera código mientras el desarrollador escribe. Usa IA Generativa (LLM) para sugerir completaciones, implementaciones de funciones e incluso funciones completas basándose en el contexto y los comentarios.
8. 
```python
def identify_application(task_description):
    desc = task_description.lower()
    
    if any(kw in desc for kw in ['image', 'video', 'face', 'object', 'detect', 'recognize', 'camera']):
        return 'computer_vision'
    elif any(kw in desc for kw in ['text', 'language', 'translate', 'speech', 'word', 'sentence', 'document']):
        return 'nlp'
    elif any(kw in desc for kw in ['robot', 'navigate', 'grasp', 'move', 'autonomous', 'drone']):
        return 'robotics'
    elif any(kw in desc for kw in ['recommend', 'suggest', 'personalize', 'preference']):
        return 'recommendation'
    elif any(kw in desc for kw in ['generate', 'create', 'write', 'compose', 'design', 'paint']):
        return 'generative'
    else:
        return 'unknown'
```
