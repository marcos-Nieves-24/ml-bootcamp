---
Module: 1
Lesson: 6
Title: IA en Biotecnología
---

# Laboratorio 6: Simulación de Cribado Virtual de Fármacos

## Objetivos

Al finalizar este laboratorio, podrás:
- Construir un pipeline simple de cribado virtual
- Entrenar un clasificador para predecir actividad molecular
- Evaluar el rendimiento del cribado
- Interpretar qué características moleculares impulsan las predicciones

## Duración

60 minutos

## Prerrequisitos

- Lección 6: IA en Biotecnología
- Conocimientos básicos de Python y scikit-learn

## Materiales

- Entorno de Python con numpy, pandas, scikit-learn, matplotlib

## Instrucciones

### Parte 1: Generar Datos Moleculares Sintéticos (10 minutos)

Crea un conjunto de datos de 1000 moléculas con 20 descriptores químicos cada una. Genera ~5% de compuestos activos.

```python
import numpy as np
import pandas as pd

np.random.seed(42)
n_compounds = 1000
n_features = 20

# Molecular descriptors (random features for demo)
X = np.random.randn(n_compounds, n_features)

# Activity: 50 compounds are active (~5%)
y = np.zeros(n_compounds)
active_indices = np.random.choice(n_compounds, 50, replace=False)
y[active_indices] = 1

print(f"Dataset: {n_compounds} compounds")
print(f"Active: {y.sum()} ({y.mean():.1%})")
```

### Parte 2: Entrenar Clasificador (15 minutos)

Divide los datos, entrena un Random Forest y evalúa:

```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))

# Feature importance
importance = pd.DataFrame({
    'feature': [f'desc_{i}' for i in range(n_features)],
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

print("\nTop 5 important features:")
print(importance.head(5))
```

### Parte 3: Cribado Virtual (15 minutos)

Evalúa el conjunto de prueba en busca de nuevos compuestos activos:

```python
def screen_compounds(model, X_test, y_test, n_top=10):
    """Screen compounds and return top candidates."""
    probs = model.predict_proba(X_test)[:, 1]
    results = pd.DataFrame({
        'compound_id': range(len(X_test)),
        'activity_score': probs,
        'true_active': y_test
    }).sort_values('activity_score', ascending=False)
    
    results['rank'] = range(1, len(results) + 1)
    return results

screening_results = screen_compounds(model, X_test, y_test)
print("Top 10 candidates:")
print(screening_results.head(10))

# How many of top 10 are actually active?
top10_hits = screening_results.head(10)['true_active'].sum()
print(f"\nHits in top 10: {top10_hits}/10")
```

### Parte 4: Reflexión (20 minutos)

Escribe un párrafo respondiendo:
1. ¿Qué harías si el modelo no encontrara compuestos activos?
2. ¿Cómo validarías estas predicciones experimentalmente?
3. ¿Cuáles son las limitaciones de usar datos sintéticos?

## Entregables

- Notebook completado con las cuatro partes
- Partes 1-3: Código con resultados
- Parte 4: Párrafo de reflexión

## Criterios de Evaluación

| Criterio | Puntos |
|---|---|
| Implementación correcta del pipeline de cribado | 3 |
| Evaluación e interpretación del modelo | 3 |
| Análisis de resultados del cribado | 2 |
| Calidad de la reflexión | 2 |
| **Total** | **10** |
