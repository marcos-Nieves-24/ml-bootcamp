---
Module: 1
Lesson: 6
Title: IA en Biotecnología
---

# Cuestionario: IA en Biotecnología

## Opción Múltiple (5 preguntas)

**1. ¿Qué sistema de IA resolvió el problema del plegamiento de proteínas en 2020?**

a) GPT-3
b) Deep Blue
c) AlphaFold
d) Watson

**2. ¿Qué es el cribado virtual en el descubrimiento de fármacos?**

a) Probar fármacos virtualmente en pacientes a través de videollamadas
b) Usar IA para evaluar computacionalmente bibliotecas de compuestos en busca de posibles fármacos
c) Eliminar compuestos tóxicos de la consideración
d) Un tipo de imagen médica

**3. ¿Cuál de los siguientes NO es una etapa en el pipeline tradicional de descubrimiento de fármacos?**

a) Identificación del objetivo
b) Pruebas de realidad virtual
c) Optimización del líder
d) Ensayos clínicos

**4. ¿Qué es la farmacogenómica?**

a) El estudio de cómo los fármacos afectan los genes
b) El estudio de cómo los genes afectan la respuesta a los fármacos
c) El uso de IA para diseñar fármacos
d) El estudio de las estructuras de las proteínas

**5. ¿Por qué el deep learning es particularmente adecuado para tareas de imágenes médicas?**

a) Es barato y no necesita GPUs
b) Puede aprender características jerárquicas a partir de datos de píxeles
c) No requiere datos de entrenamiento
d) Siempre supera a los expertos humanos

## Respuesta Corta (2 preguntas)

**6. Explica cómo la IA puede reducir el costo del descubrimiento de fármacos.**

**7. ¿Cuáles son los principales desafíos de aplicar IA a las imágenes médicas?**

## Pregunta de Programación (1 pregunta)

**8.** Escribe una función `virtual_screening(model, compounds, n_top=10)` que reciba un modelo de ML entrenado, una lista de compuestos (vectores de características) y devuelva los N mejores compuestos con la mayor probabilidad predicha de ser activos.

```python
def virtual_screening(model, compounds, n_top=10):
    # Your implementation here
    pass
```

---

## Clave de Respuestas

1. **c)** AlphaFold
2. **b)** Usar IA para evaluar computacionalmente bibliotecas de compuestos en busca de posibles fármacos
3. **b)** Pruebas de realidad virtual
4. **b)** El estudio de cómo los genes afectan la respuesta a los fármacos
5. **b)** Puede aprender características jerárquicas a partir de datos de píxeles
6. La IA reduce los costos de descubrimiento de fármacos mediante: (a) el cribado virtual reemplaza el costoso cribado físico; (b) la IA generativa diseña mejores candidatos, reduciendo ensayos fallidos; (c) la predicción ADMET detecta compuestos tóxicos más temprano; (d) el NLP extrae literatura para identificación de objetivos; (e) los ensayos clínicos pueden optimizarse con selección de pacientes impulsada por IA.
7. Los desafíos incluyen: (a) privacidad de datos (las imágenes de pacientes son sensibles); (b) aprobación regulatoria (autorización de FDA requerida); (c) generalización entre poblaciones y equipos de imágenes; (d) vulnerabilidad adversarial; (e) integración en el flujo de trabajo clínico; (f) responsabilidad por errores.
8. 
```python
def virtual_screening(model, compounds, n_top=10):
    probabilities = model.predict_proba(compounds)[:, 1]
    top_indices = np.argsort(probabilities)[-n_top:][::-1]
    return top_indices, probabilities[top_indices]
```
