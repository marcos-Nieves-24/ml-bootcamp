---
Module: 1
Lesson: 1
Title: What is Artificial Intelligence?
---

# Quiz: What is Artificial Intelligence?

## Multiple Choice (5 questions)

**1. According to Russell & Norvig, which approach to AI focuses on building agents that achieve the best outcome?**

a) Acting humanly
b) Thinking humanly
c) Thinking rationally
d) Acting rationally

**2. What is the primary sensor used by a facial recognition system on a smartphone?**

a) Microphone
b) Camera
c) Touchscreen
d) Accelerometer

**3. Which of the following is a limitation of the Turing Test?**

a) It requires the machine to physically resemble a human
b) It only tests conversational ability, not perception or creativity
c) It is too computationally expensive to run
d) It requires multiple human evaluators

**4. Which statement about Artificial Intelligence is TRUE?**

a) AI and Machine Learning are the same thing
b) All Machine Learning systems are AI, but not all AI systems use Machine Learning
c) AI systems are always conscious
d) AI systems never make mistakes

**5. An intelligent spam filter that learns to classify emails based on user feedback is an example of:**

a) Thinking humanly
b) Acting humanly
c) Acting rationally
d) A system that does not use AI

## Short Answer (2 questions)

**6. Define an intelligent agent and list its three key components.**

**7. Explain why the rational agent approach is preferred over the Turing Test approach for building practical AI systems.**

## Coding Question (1 question)

**8.** Write a Python function `describe_agent(sensors, actuators, goal)` that takes three lists (sensors, actuators, and goals) and returns a formatted string describing the agent. For example:

```python
describe_agent(
    ["camera", "microphone"],
    ["speaker", "screen"],
    "assist the user"
)
```

Should return: `"Agent perceives via camera, microphone and acts via speaker, screen to assist the user."`

Note: You do not need to run this code yet — we will learn Python in Module 2. Write the function as best you can conceptually.

---

## Answer Key

1. **d)** Acting rationally
2. **b)** Camera
3. **b)** It only tests conversational ability, not perception or creativity
4. **b)** All ML is AI, but not all AI is ML
5. **c)** Acting rationally
6. An intelligent agent is a system that perceives its environment through sensors and acts upon it through actuators to achieve goals. Its three key components are: sensors (to perceive), actuators (to act), and a performance measure (to evaluate success).
7. The rational agent approach is preferred because: (a) it is more general — it does not require human-like behavior; (b) it is measurable — performance can be objectively evaluated; (c) it is engineering-friendly — the focus is on achieving the best outcome rather than mimicking human cognition.
8. 
```python
def describe_agent(sensors, actuators, goal):
    sensors_str = ", ".join(sensors)
    actuators_str = ", ".join(actuators)
    return f"Agent perceives via {sensors_str} and acts via {actuators_str} to {goal}."
```
