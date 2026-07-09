---
Module: 1
Lesson: 4
Title: Paradigmas de IA
---

# Laboratorio 4: Comparando Paradigmas de IA

## Objetivos

Al finalizar este laboratorio, podrás:
- Implementar un sistema simple basado en reglas
- Entrenar y evaluar un modelo básico de machine learning
- Comparar el rendimiento de diferentes paradigmas en la misma tarea
- Elegir el paradigma apropiado para un problema dado

## Duración

75 minutos

## Prerrequisitos

- Lección 4: Paradigmas de IA
- Conocimientos básicos de Python (o completa el Módulo 2 primero)

## Materiales

- Entorno de Python con numpy, pandas, scikit-learn, matplotlib
- Notebook de laboratorio (proporcionado)

## Instrucciones

### Parte 1: Clasificador Basado en Reglas (20 minutos)

Estás construyendo un sistema para clasificar la calidad del vino basado en propiedades químicas. Implementa un clasificador basado en reglas:

```python
def wine_quality_rule(acidity, sugar, alcohol, sulfur):
    """
    Rule-based wine quality classifier.
    Return 'high', 'medium', or 'low' quality.
    """
    score = 0
    if acidity > 0.5: score += 1
    if sugar < 3.0: score += 1
    if alcohol > 12.0: score += 1
    if sulfur < 40.0: score += 1
    
    if score >= 3: return 'high'
    elif score >= 1: return 'medium'
    else: return 'low'
```

Pruébalo en 5 vinos de muestra y documenta los resultados.

### Parte 2: Clasificador de ML (25 minutos)

Entrena un clasificador Árbol de Decisión en el conjunto de datos de calidad del vino:

```python
from sklearn.datasets import load_wine
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

data = load_wine()
X_train, X_test, y_train, y_test = train_test_split(
    data.data, data.target, test_size=0.3, random_state=42
)

model = DecisionTreeClassifier(max_depth=3)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2%}")
```

Documenta la precisión e interpreta una ruta de decisión del árbol.

### Parte 3: Comparación (20 minutos)

Compara los dos enfoques en estas dimensiones:
1. Precisión en datos de prueba
2. Interpretabilidad (¿puedes explicar la decisión?)
3. Esfuerzo de desarrollo (¿cuánto tiempo para construir?)
4. Mantenimiento (¿cómo actualizar?)

### Parte 4: Reflexión (10 minutos)

Responde: Si estuvieras construyendo un sistema de calidad de vino para una bodega real, ¿qué paradigma usarías? ¿Por qué? ¿Cuáles serían las ventajas y desventajas?

## Entregables

- Notebook o documento completado con las cuatro partes
- Parte 1: Reglas y resultados de prueba
- Parte 2: Modelo de ML y precisión
- Parte 3: Tabla de comparación
- Parte 4: Párrafo de reflexión

## Criterios de Evaluación

| Criterio | Puntos |
|---|---|
| Implementación y prueba del sistema basado en reglas | 3 |
| Entrenamiento y evaluación del modelo de ML | 3 |
| Análisis comparativo reflexivo | 2 |
| Calidad de la reflexión | 2 |
| **Total** | **10** |
