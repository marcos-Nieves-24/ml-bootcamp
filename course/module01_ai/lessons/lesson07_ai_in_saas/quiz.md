---
Module: 1
Lesson: 7
Title: IA en SaaS
---

# Cuestionario: IA en SaaS

## Opción Múltiple (5 preguntas)

**1. ¿Qué es el abandono de clientes (churn) en el contexto SaaS?**

a) Cuando un cliente se queja del producto
b) Cuando un cliente cancela su suscripción
c) Cuando un cliente mejora su plan
d) Cuando un cliente recomienda a un nuevo usuario

**2. ¿Por qué reducir el abandono en un 5% suele ser más valioso que adquirir un 5% más de clientes?**

a) Adquirir nuevos clientes cuesta 5-7 veces más que retener los existentes
b) Los nuevos clientes siempre pagan menos
c) Reducir el abandono es más fácil que la adquisición
d) Aumenta el precio de las acciones

**3. ¿Qué métrica es más apropiada para evaluar un modelo de predicción de abandono cuando solo el 5% de los clientes abandonan?**

a) Exactitud (porque es simple)
b) Puntuación F1 (equilibra precisión y exhaustividad para datos desbalanceados)
c) Error Absoluto Medio
d) R-cuadrado

**4. ¿Qué es el Valor de Vida del Cliente (CLV)?**

a) Los ingresos totales que un cliente genera durante su relación con la empresa
b) Cuánto tiempo ha estado suscrito un cliente
c) El costo de adquirir un cliente
d) Los ingresos mensuales por cliente

**5. ¿Cuál de los siguientes NO es una característica típica para la predicción de abandono?**

a) Frecuencia de inicio de sesión
b) Número de tickets de soporte
c) Color favorito del cliente
d) Días desde la última compra

## Respuesta Corta (2 preguntas)

**6. Explica la diferencia entre precisión y exhaustividad (recall) en el contexto de la predicción de abandono. ¿Cuál es más importante para una empresa SaaS?**

**7. ¿Qué es el problema de arranque en frío en la personalización y cómo puede abordarse?**

## Pregunta de Programación (1 pregunta)

**8.** Escribe una función `churn_risk_segment(probability)` que reciba una probabilidad de abandono (0-1) y devuelva 'Bajo' si < 0.2, 'Medio' si 0.2-0.5, 'Alto' si > 0.5.

---

## Clave de Respuestas

1. **b)** Cuando un cliente cancela su suscripción
2. **a)** Adquirir nuevos clientes cuesta 5-7 veces más que retener los existentes
3. **b)** Puntuación F1 (equilibra precisión y exhaustividad para datos desbalanceados)
4. **a)** Los ingresos totales que un cliente genera durante su relación con la empresa
5. **c)** Color favorito del cliente
6. Precisión = de todos los clientes predichos como abandono, cuántos realmente abandonaron. Exhaustividad = de todos los clientes que realmente abandonaron, cuántos fueron correctamente predichos. Para SaaS, la exhaustividad suele importar más (queremos detectar clientes en riesgo), pero una baja precisión desperdicia recursos de intervención. La compensación depende del costo de intervención vs. el costo del abandono.
7. El problema de arranque en frío ocurre cuando un nuevo usuario no tiene historial, haciendo imposible la personalización. Soluciones: (a) usar datos demográficos para recomendaciones iniciales; (b) preguntar a los usuarios sobre preferencias durante la incorporación; (c) usar elementos populares/tendencia como predeterminados; (d) usar características basadas en contenido en lugar de filtrado colaborativo inicialmente.
8. 
```python
def churn_risk_segment(probability):
    if probability < 0.2:
        return 'Low'
    elif probability <= 0.5:
        return 'Medium'
    else:
        return 'High'
```
