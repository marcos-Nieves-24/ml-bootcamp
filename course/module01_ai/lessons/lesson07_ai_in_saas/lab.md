---
Module: 1
Lesson: 7
Title: IA en SaaS
---

# Laboratorio 7: Construcción de un Sistema de Predicción de Abandono

## Objetivos

Al finalizar este laboratorio, podrás:
- Generar y explorar datos sintéticos de clientes
- Crear características para la predicción de abandono
- Entrenar y evaluar múltiples clasificadores
- Interpretar resultados del modelo para acciones empresariales
- Recomendar intervenciones basadas en el riesgo de abandono

## Duración

60 minutos

## Prerrequisitos

- Lección 7: IA en SaaS
- Python con pandas, scikit-learn, matplotlib

## Materiales

- Entorno de notebook Python

## Instrucciones

### Parte 1: Generar y Explorar Datos (10 minutos)

Genera un conjunto de datos sintéticos de clientes:

```python
import numpy as np
import pandas as pd

np.random.seed(42)
n = 2000

data = pd.DataFrame({
    'tenure_months': np.random.randint(1, 60, n),
    'login_frequency': np.random.randint(0, 30, n),
    'support_tickets': np.random.randint(0, 15, n),
    'feature_usage_count': np.random.randint(0, 20, n),
    'days_since_last_login': np.random.randint(0, 90, n),
    'plan_type': np.random.choice(['basic', 'pro', 'enterprise'], n),
    'monthly_spend': np.random.uniform(10, 200, n),
})

# Create churn label
data['churn'] = (
    (data['login_frequency'] < 3) | 
    (data['support_tickets'] > 10) |
    (data['days_since_last_login'] > 60)
).astype(int)

# Add noise
data.loc[np.random.choice(n, 200), 'churn'] = 1 - data.loc[
    np.random.choice(n, 200), 'churn'
].values

print(f"Dataset: {len(data)} customers")
print(f"Churn rate: {data['churn'].mean():.1%}")
print(data.head())
```

### Parte 2: Ingeniería de Características (10 minutos)

Crea características adicionales:

```python
data['login_per_month'] = data['login_frequency'] / data['tenure_months']
data['spend_per_feature'] = data['monthly_spend'] / (data['feature_usage_count'] + 1)
data['is_pro'] = (data['plan_type'] == 'pro').astype(int)
data['is_enterprise'] = (data['plan_type'] == 'enterprise').astype(int)

features = ['tenure_months', 'login_frequency', 'support_tickets', 
            'feature_usage_count', 'days_since_last_login', 'monthly_spend',
            'login_per_month', 'spend_per_feature', 'is_pro', 'is_enterprise']
X = data[features]
y = data['churn']
```

### Parte 3: Entrenar y Comparar Modelos (20 minutos)

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import classification_report, roc_auc_score
from sklearn.preprocessing import StandardScaler

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)

models = {
    'Logistic Regression': LogisticRegression(max_iter=1000),
    'Random Forest': RandomForestClassifier(n_estimators=100),
    'Gradient Boosting': GradientBoostingClassifier(n_estimators=100),
}

for name, model in models.items():
    if name == 'Logistic Regression':
        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test)
        model.fit(X_train_scaled, y_train)
        y_pred = model.predict(X_test_scaled)
        y_prob = model.predict_proba(X_test_scaled)[:, 1]
    else:
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        y_prob = model.predict_proba(X_test)[:, 1]
    
    print(f"\n{name}:")
    print(classification_report(y_test, y_pred))
    print(f"ROC-AUC: {roc_auc_score(y_test, y_prob):.3f}")
```

### Parte 4: Interpretación Empresarial (20 minutos)

1. Selecciona el mejor modelo y obtén la importancia de características
2. Crea segmentos de riesgo de abandono
3. Recomienda estrategias de intervención

```python
best_model = models['Random Forest']
importance = pd.DataFrame({
    'feature': features,
    'importance': best_model.feature_importances_
}).sort_values('importance', ascending=False)

print("Top 5 Churn Drivers:")
print(importance.head(5))

# Risk segmentation
y_prob = best_model.predict_proba(X_test)[:, 1]
segments = pd.cut(y_prob, bins=[0, 0.2, 0.5, 1.0], 
                  labels=['Low', 'Medium', 'High'])
print(f"\nRisk Distribution:\n{segments.value_counts()}")
```

Escribe un párrafo recomendando qué acciones tomar para cada segmento de riesgo.

## Entregables

- Notebook completado con las 4 partes
- Partes 1-4: Código con resultados
- Párrafo de recomendación de intervención

## Criterios de Evaluación

| Criterio | Puntos |
|---|---|
| Generación y exploración correcta de datos | 2 |
| Calidad de la ingeniería de características | 2 |
| Entrenamiento y comparación de modelos | 3 |
| Interpretación empresarial y recomendaciones | 3 |
| **Total** | **10** |
