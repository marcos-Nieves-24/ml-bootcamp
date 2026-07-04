---
Module: 1
Lesson: 6
Title: AI in Biotechnology
---

# Quiz: AI in Biotechnology

## Multiple Choice (5 questions)

**1. Which AI system solved the protein folding problem in 2020?**

a) GPT-3
b) Deep Blue
c) AlphaFold
d) Watson

**2. What is virtual screening in drug discovery?**

a) Virtually testing drugs on patients through video calls
b) Using AI to computationally screen compound libraries for potential drugs
c) Removing toxic compounds from consideration
d) A type of medical imaging

**3. Which of the following is NOT a stage in the traditional drug discovery pipeline?**

a) Target identification
b) Virtual reality testing
c) Lead optimization
d) Clinical trials

**4. What is pharmacogenomics?**

a) The study of how drugs affect genes
b) The study of how genes affect drug response
c) The use of AI to design drugs
d) The study of protein structures

**5. Why is deep learning particularly suited for medical imaging tasks?**

a) It is cheap and does not need GPUs
b) It can learn hierarchical features from pixel data
c) It requires no training data
d) It always outperforms human experts

## Short Answer (2 questions)

**6. Explain how AI can reduce the cost of drug discovery.**

**7. What are the main challenges of applying AI to medical imaging?**

## Coding Question (1 question)

**8.** Write a function `virtual_screening(model, compounds, n_top=10)` that takes a trained ML model, a list of compounds (feature vectors), and returns the top N compounds with the highest predicted probability of being active.

```python
def virtual_screening(model, compounds, n_top=10):
    # Your implementation here
    pass
```

---

## Answer Key

1. **c)** AlphaFold
2. **b)** Using AI to computationally screen compound libraries for potential drugs
3. **b)** Virtual reality testing
4. **b)** The study of how genes affect drug response
5. **b)** It can learn hierarchical features from pixel data
6. AI reduces drug discovery costs by: (a) virtual screening replaces expensive physical screening; (b) generative AI designs better candidates, reducing failed trials; (c) ADMET prediction catches toxic compounds earlier; (d) NLP mines literature for target identification; (e) clinical trials can be optimized with AI-powered patient selection.
7. Challenges include: (a) data privacy (patient images are sensitive); (b) regulatory approval (FDA clearance required); (c) generalization across populations and imaging equipment; (d) adversarial vulnerability; (e) integration into clinical workflow; (f) liability for errors.
8. 
```python
def virtual_screening(model, compounds, n_top=10):
    probabilities = model.predict_proba(compounds)[:, 1]
    top_indices = np.argsort(probabilities)[-n_top:][::-1]
    return top_indices, probabilities[top_indices]
```
