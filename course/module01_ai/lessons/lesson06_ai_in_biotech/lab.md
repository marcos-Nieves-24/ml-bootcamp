---
Module: 1
Lesson: 6
Title: AI in Biotechnology
---

# Lab 6: Virtual Drug Screening Simulation

## Objectives

By the end of this lab, you will be able to:
- Build a simple virtual screening pipeline
- Train a classifier to predict molecular activity
- Evaluate screening performance
- Interpret which molecular features drive predictions

## Duration

60 minutes

## Prerequisites

- Lesson 6: AI in Biotechnology
- Basic Python and scikit-learn knowledge

## Materials

- Python environment with numpy, pandas, scikit-learn, matplotlib

## Instructions

### Part 1: Generate Synthetic Molecular Data (10 minutes)

Create a dataset of 1000 molecules with 20 chemical descriptors each. Generate ~5% active compounds.

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

### Part 2: Train Classifier (15 minutes)

Split data, train a Random Forest, and evaluate:

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

### Part 3: Virtual Screening (15 minutes)

Screen the test set for new active compounds:

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

### Part 4: Reflection (20 minutes)

Write a paragraph answering:
1. What would you do if the model found no active compounds?
2. How would you validate these predictions experimentally?
3. What are the limitations of using synthetic data?

## Deliverables

- Completed notebook with all four parts
- Part 1-3: Code with outputs
- Part 4: Reflection paragraph

## Grading Criteria

| Criteria | Points |
|---|---|
| Correct implementation of screening pipeline | 3 |
| Model evaluation and interpretation | 3 |
| Screening results analysis | 2 |
| Quality of reflection | 2 |
| **Total** | **10** |
