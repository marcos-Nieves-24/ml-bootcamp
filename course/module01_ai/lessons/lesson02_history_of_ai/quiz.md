---
Module: 1
Lesson: 2
Title: History of AI
---

# Quiz: History of AI

## Multiple Choice (5 questions)

**1. Where and when was the field of Artificial Intelligence officially founded?**

a) MIT, 1950
b) Dartmouth College, 1956
c) Stanford University, 1962
d) University of Edinburgh, 1973

**2. What was the primary cause of the first AI winter (1974–1980)?**

a) Governments banned AI research
b) Computers lacked power and AI failed to deliver on optimistic promises
c) Scientists lost interest in AI
d) A virus attacked AI systems

**3. Which system defeated world champion Garry Kasparov in 1997?**

a) AlphaGo
b) Watson
c) Deep Blue
d) ELIZA

**4. What was the key problem with expert systems that led to the second AI winter?**

a) They were too expensive to build
b) They were brittle, hard to maintain, and required rare human experts
c) They could not solve any real problems
d) They required too much data

**5. Which event in 2012 sparked the modern deep learning revolution?**

a) IBM Watson won Jeopardy!
b) AlexNet won the ImageNet competition
c) AlphaGo defeated Lee Sedol
d) GPT-3 was released

## Short Answer (2 questions)

**6. What is Moravec's Paradox? Provide an example.**

**7. Explain the difference between symbolic AI and connectionist AI.**

## Coding Question (1 question)

**8.** Write a Python function `timeline_from_year(milestones, year)` that takes a list of (year, event) tuples and a starting year, and returns only the events from that year onward. Example:

```python
milestones = [(1950, "Turing Test"), (1956, "Dartmouth"), (2012, "AlexNet")]
events_after_2000 = timeline_from_year(milestones, 2000)
# Should return [(2012, "AlexNet")]
```

---

## Answer Key

1. **b)** Dartmouth College, 1956
2. **b)** Computers lacked power and AI failed to deliver on optimistic promises
3. **c)** Deep Blue
4. **b)** They were brittle, hard to maintain, and required rare human experts
5. **b)** AlexNet won the ImageNet competition
6. Moravec's Paradox is the observation that tasks that are hard for humans (e.g., chess, mathematical theorem proving) are easy for computers, while tasks that are easy for humans (e.g., recognizing a face, picking up an object) are hard for computers.
7. Symbolic AI (GOFAI) uses explicit symbols, rules, and logic to represent knowledge and reason. Connectionist AI uses neural networks that learn patterns from data without explicit rules.
8. 
```python
def timeline_from_year(milestones, year):
    return [(y, event) for y, event in milestones if y >= year]
```
