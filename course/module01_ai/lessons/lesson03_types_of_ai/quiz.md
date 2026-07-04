---
Module: 1
Lesson: 3
Title: Types of AI
---

# Quiz: Types of AI

## Multiple Choice (5 questions)

**1. Which of the following best describes Narrow AI?**

a) AI that is not very intelligent
b) AI designed to perform a specific task or narrow range of tasks
c) AI that can perform any intellectual task a human can
d) AI that is self-aware

**2. Deep Blue, the chess computer that beat Garry Kasparov, is an example of which functionality type?**

a) Limited Memory
b) Theory of Mind
c) Reactive Machine
d) Self-Aware

**3. What is the key difference between Limited Memory AI and Reactive Machines?**

a) Limited Memory AI is faster
b) Limited Memory AI can use past data to inform decisions
c) Limited Memory AI is self-aware
d) Reactive Machines use neural networks

**4. Which type of AI does not exist today and is purely hypothetical?**

a) Narrow AI
b) Limited Memory AI
c) Artificial General Intelligence
d) All of the above exist today

**5. Self-driving cars are typically classified as:**

a) Reactive Machine
b) Limited Memory
c) Theory of Mind
d) Self-Aware

## Short Answer (2 questions)

**6. Explain why ChatGPT is considered Narrow AI despite its impressive abilities.**

**7. What is the "theory of mind" type of AI? Why is it difficult to build?**

## Coding Question (1 question)

**8.** Write a function `ai_type_examples(ai_type)` that takes a string ('narrow', 'agi', or 'asi') and returns a dictionary with keys 'description', 'exists', and 'example'. Provide reasonable content for each type.

---

## Answer Key

1. **b)** AI designed to perform a specific task or narrow range of tasks
2. **c)** Reactive Machine
3. **b)** Limited Memory AI can use past data to inform decisions
4. **c)** Artificial General Intelligence
5. **b)** Limited Memory
6. ChatGPT is Narrow AI because: (a) it is trained only on text, not other modalities; (b) it fails on tasks outside its training distribution; (c) it lacks causal understanding, common sense, and transfer learning across domains; (d) it cannot reliably learn new tasks from a few examples.
7. Theory of Mind AI would understand that others have beliefs, desires, and intentions — it could model the mental states of other agents. It is difficult because: (a) we do not fully understand how human theory of mind works; (b) it requires modeling unobservable mental states; (c) it involves recursive reasoning ("what does the agent think I think?").
8. 
```python
def ai_type_examples(ai_type):
    types = {
        'narrow': {
            'description': 'AI specialized in one task',
            'exists': True,
            'example': 'Chess engine, spam filter, Siri'
        },
        'agi': {
            'description': 'AI with human-level general intelligence',
            'exists': False,
            'example': 'None (hypothetical)'
        },
        'asi': {
            'description': 'AI vastly exceeding human intelligence',
            'exists': False,
            'example': 'None (hypothetical)'
        }
    }
    return types.get(ai_type, {'error': 'Unknown type'})
```
