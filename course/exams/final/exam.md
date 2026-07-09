---
Module: 4-5
Exam: Final
Estimated Duration: 150 minutes
Total Points: 100
Prerequisites: Todos los módulos
Topics: Machine Learning, Evaluación de Modelos, Ética en IA
---

# Examen Final — Machine Learning for Data Analysis and SaaS

## Instrucciones

- Responde todas las preguntas.
- Duración: 150 minutos.
- Puntaje total: 100 puntos.
- Muestra tu trabajo para obtener crédito parcial.
- Las preguntas de código deben responderse en Python usando scikit-learn.
- Escribe tus respuestas en las hojas de respuesta proporcionadas.

---

## Sección 1: Opción Múltiple (20 puntos, 2 puntos cada una)

1. En los Árboles de Decisión, ¿qué mide la impureza de Gini?
   a) La profundidad del árbol
   b) La probabilidad de clasificación incorrecta de una muestra aleatoria
   c) El número de hojas en el árbol
   d) La precisión del modelo

2. ¿Cuál es la diferencia clave entre Bagging (Random Forest) y Boosting (Gradient Boosting)?
   a) Bagging entrena modelos secuencialmente; Boosting entrena en paralelo
   b) Bagging entrena modelos en paralelo; Boosting entrena secuencialmente
   c) Bagging usa solo modelos lineales; Boosting usa árboles
   d) No hay diferencia

3. ¿Qué mide la puntuación de silueta (*silhouette score*) en clustering?
   a) Qué tan rápido converge el algoritmo
   b) Qué tan similar es un objeto a su propio cluster versus otros clusters
   c) El número total de clusters
   d) La precisión del clustering

4. ¿Cuál de estos NO es un principio ético para la IA?
   a) Transparencia
   b) Equidad
   c) Maximización de ganancias
   d) Responsabilidad

5. ¿Cuál es el propósito de la validación cruzada (*cross-validation*)?
   a) Aumentar los datos de entrenamiento
   b) Reducir el overfitting probando en múltiples divisiones de datos
   c) Hacer que el modelo entrene más rápido
   d) Eliminar la necesidad de un conjunto de prueba

6. En el contexto de la ética en IA, ¿qué es el "sesgo algorítmico" (*algorithmic bias*)?
   a) Cuando los algoritmos se ejecutan más rápido en cierto hardware
   b) Cuando un algoritmo produce resultados sistemáticamente injustos
   c) Cuando los algoritmos tienen errores en el código
   d) Cuando los algoritmos son demasiado complejos para entenderlos

7. ¿Cuál es el objetivo principal del análisis de importancia de features?
   a) Reducir el número de features
   b) Entender qué features influyen más en las predicciones
   c) Hacer el modelo más preciso
   d) Visualizar los datos

8. El Reglamento General de Protección de Datos (GDPR) se ocupa principalmente de:
   a) La velocidad del algoritmo
   b) La privacidad y protección de datos
   c) La precisión del modelo
   d) Las licencias de código abierto

9. En el clustering con K-Means, ¿qué ayuda a determinar el Método del Codo (*Elbow Method*)?
   a) El número óptimo de clusters
   b) La tasa de aprendizaje óptima
   c) El número máximo de iteraciones
   d) Los centroides de los clusters

10. ¿Cuál es la diferencia entre explicabilidad e interpretabilidad en ML?
    a) Son lo mismo
    b) La explicabilidad se refiere a entender cómo funciona un modelo; la interpretabilidad se refiere a entender predicciones específicas
    c) La interpretabilidad se refiere a entender cómo funciona un modelo; la explicabilidad se refiere a entender predicciones específicas
    d) Ninguna es importante para ML

---

## Sección 2: Respuesta Breve (24 puntos, 6 puntos cada una)

11. Explica cómo funciona el algoritmo Random Forest. ¿Qué lo hace mejor que un solo Árbol de Decisión?

12. ¿Qué es el equilibrio sesgo-varianza (*bias-variance tradeoff*)? ¿Cómo se relaciona con overfitting y underfitting?

13. Describe tres tipos de sesgo que pueden aparecer en sistemas de IA. Proporciona un ejemplo del mundo real para cada uno.

14. ¿Qué es la interpretación de modelos y por qué es importante? Nombra dos técnicas para interpretar modelos de ML.

---

## Sección 3: Codificación (30 puntos)

15. (15 puntos) Implementa un pipeline completo de machine learning que:
   - Cargue un dataset
   - Divida en conjuntos de train/test (80/20)
   - Entrene un clasificador Random Forest
   - Evalúe usando precisión (accuracy), precisión positiva (*precision*), sensibilidad (*recall*) y F1-score
   - Imprima una matriz de confusión

16. (15 puntos) Usando K-Means clustering:
   - Genera o carga un dataset con 3 clusters naturales
   - Usa el Método del Codo para determinar la K óptima
   - Aplica K-Means con la K óptima
   - Visualiza los clusters resultantes
   - Calcula la puntuación de silueta (*silhouette score*)

---

## Sección 4: Caso de Estudio de Ética (26 puntos)

17. (13 puntos) Un hospital despliega un sistema de IA para priorizar pacientes para trasplantes de órganos. El sistema recomienda menor prioridad para pacientes de ciertos grupos demográficos.
   a) Identifica los problemas éticos en este escenario.
   b) Propón tres acciones específicas que el hospital debería tomar.
   c) ¿Qué métricas deberían monitorear para garantizar equidad?

18. (13 puntos) Una empresa SaaS utiliza datos de clientes para entrenar un modelo de predicción de churn. Quieren usar el modelo para cancelar automáticamente las suscripciones de clientes con alto riesgo de churn antes de que se vayan.
   a) ¿Cuáles son las preocupaciones éticas con este enfoque?
   b) Propón una estrategia mejor que respete la autonomía del cliente.
   c) ¿Cómo garantizarías transparencia y consentimiento informado?

---

## Clave de Respuestas

*(Proporcionada por separado a los instructores)*
