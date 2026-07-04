---
Module: 1
Lesson: 4
Title: AI Paradigms
---

# Lab 4: Comparing AI Paradigms

## Objectives

By the end of this lab, you will be able to:
- Implement a simple rule-based system
- Train and evaluate a basic machine learning model
- Compare the performance of different paradigms on the same task
- Choose the appropriate paradigm for a given problem

## Duration

75 minutes

## Prerequisites

- Lesson 4: AI Paradigms
- Basic Python knowledge (or work through Module 2 first)

## Materials

- Python environment with numpy, pandas, scikit-learn, matplotlib
- Lab notebook (provided)

## Instructions

### Part 1: Rule-Based Classifier (20 minutes)

You are building a system to classify wine quality based on chemical properties. Implement a rule-based classifier:

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

Test it on 5 sample wines and document the results.

### Part 2: ML Classifier (25 minutes)

Train a Decision Tree classifier on the wine quality dataset:

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

Document the accuracy and interpret one decision path from the tree.

### Part 3: Comparison (20 minutes)

Compare the two approaches across these dimensions:
1. Accuracy on test data
2. Interpretability (can you explain the decision?)
3. Development effort (how long to build?)
4. Maintenance (how to update?)

### Part 4: Reflection (10 minutes)

Answer: If you were building a wine quality system for a real winery, which paradigm would you use? Why? What would the trade-offs be?

## Deliverables

- Completed notebook or document with all four parts
- Part 1: Rules and test results
- Part 2: ML model and accuracy
- Part 3: Comparison table
- Part 4: Reflection paragraph

## Grading Criteria

| Criteria | Points |
|---|---|
| Rule-based system implementation and testing | 3 |
| ML model training and evaluation | 3 |
| Thoughtful comparison analysis | 2 |
| Quality of reflection | 2 |
| **Total** | **10** |
