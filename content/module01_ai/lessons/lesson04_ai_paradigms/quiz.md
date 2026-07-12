---
Module: 1
Lesson: 4
Title: AI Paradigms
---

# Quiz: AI Paradigms

## Multiple Choice (5 questions)

**1. Which of the following is NOT a component of an expert system?**

a) Knowledge Base
b) Inference Engine
c) Training Dataset
d) User Interface

**2. What is the key advantage of Machine Learning over Rule-Based systems?**

a) ML is always more accurate
b) ML can learn patterns from data without explicit programming
c) ML does not require data
d) ML is easier to interpret

**3. What architecture forms the foundation of modern Large Language Models?**

a) Recurrent Neural Networks
b) Convolutional Neural Networks
c) Transformer
d) Decision Trees

**4. In which scenario would a rule-based system be preferred over deep learning?**

a) When you have millions of labeled images
b) When the domain has clear, stable rules and interpretability is critical
c) When you need to process natural language
d) When you want maximum accuracy

**5. What does "deep" refer to in Deep Learning?**

a) The depth of understanding the model achieves
b) The number of hidden layers in the neural network
c) The amount of training data required
d) The computational depth required for training

## Short Answer (2 questions)

**6. Explain the knowledge acquisition bottleneck in expert systems.**

**7. You need to build a system to classify X-ray images as normal or abnormal. Which AI paradigm would you choose and why?**

## Coding Question (1 question)

**8.** Write a Python function `hybrid_decision(rules_result, ml_confidence, threshold=0.7)` that:
- If `rules_result` is "definite", return it immediately
- If `rules_result` is "uncertain" and `ml_confidence >= threshold`, return "positive"
- If `rules_result` is "uncertain" and `ml_confidence < threshold`, return "negative"

---

## Answer Key

1. **c)** Training Dataset
2. **b)** ML can learn patterns from data without explicit programming
3. **c)** Transformer
4. **b)** When the domain has clear, stable rules and interpretability is critical
5. **b)** The number of hidden layers in the neural network
6. The knowledge acquisition bottleneck is the difficulty of extracting expert knowledge and encoding it into rules. Human experts are rare, expensive, and may not be able to articulate their knowledge explicitly. Rules also need constant updating as knowledge evolves.
7. Deep learning (specifically convolutional neural networks) because: (a) X-ray images are high-dimensional data; (b) patterns indicating abnormalities are complex and hierarchical; (c) CNNs excel at image classification; (d) there are large datasets of labeled X-rays available.
8. 
```python
def hybrid_decision(rules_result, ml_confidence, threshold=0.7):
    if rules_result == "definite":
        return rules_result
    elif rules_result == "uncertain":
        return "positive" if ml_confidence >= threshold else "negative"
```
