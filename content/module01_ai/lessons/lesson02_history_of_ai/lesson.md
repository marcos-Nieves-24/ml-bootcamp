---
Module: 1
Lesson Number: 2
Lesson Title: History of AI
Estimated Duration: 45 minutes
Prerequisites: Lesson 1 — What is Artificial Intelligence?
Learning Objectives:
  - Describe the key events at the Dartmouth Conference of 1956
  - Explain the causes and effects of AI winters and AI springs
  - Identify major milestones in AI development from 1950 to present
  - Compare the symbolic AI approach with the connectionist approach
  - Evaluate how historical events shaped modern AI
Keywords: Dartmouth Conference, AI winter, AI spring, symbolic AI, connectionism, expert systems, neural networks, deep learning, machine learning history
Difficulty: Beginner
Programming Concepts: None
Mathematical Concepts: None
Machine Learning Concepts: None
Datasets Used: None
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Lesson 2: History of AI

## Lesson Motivation

Understanding the history of AI helps you appreciate why the field looks the way it does today. The pattern of hype, disappointment, and renewed hope has repeated multiple times. By learning this history, you will understand why some claims about AI should be taken with skepticism, why certain techniques fell out of favor and later returned, and why we are currently in a period of extraordinary progress. This perspective is invaluable for anyone building AI systems professionally.

## Big Picture

In Lesson 1, we defined AI and intelligent agents. Now we explore how the field developed over 70+ years. This historical context will help you understand Lesson 3 (Types of AI) — particularly why the distinction between Narrow AI and General AI exists. Lesson 4 (AI Paradigms) will then explain the technical approaches that emerged from this history.

```
Lesson 1 (What is AI) → Lesson 2 (History) → Lesson 3 (Types of AI) → Lesson 4 (Paradigms)
```

## Theory

### The Birth of AI: Dartmouth Conference (1956)

The field of Artificial Intelligence was officially born in the summer of 1956 at Dartmouth College in Hanover, New Hampshire. A group of scientists — including **John McCarthy**, **Marvin Minsky**, **Nathaniel Rochester**, and **Claude Shannon** — organized a two-month workshop.

**The proposal** read: "Every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."

This statement captured the **optimism** of early AI researchers. They believed that creating human-level intelligence was a straightforward engineering problem solvable within a generation.

**Key outcomes**:
- The term "Artificial Intelligence" was coined
- Early work on symbolic reasoning and problem-solving began
- The field gained academic legitimacy

### The Golden Years (1956–1974)

The decades following Dartmouth saw remarkable progress:

- **Logic Theorist** (1956): The first AI program, created by Allen Newell and Herbert Simon. It could prove mathematical theorems.
- **General Problem Solver** (1957): A program designed to solve any problem that could be formalized.
- **Lisp** (1958): John McCarthy created the programming language that became the lingua franca of AI for decades.
- **ELIZA** (1966): Joseph Weizenbaum created a chatbot that simulated a psychotherapist.
- **Shakey the Robot** (1966–1972): The first general-purpose mobile robot.

Researchers were overly optimistic. Simon predicted in 1965 that "machines will be capable, within twenty years, of doing any work a man can do."

### First AI Winter (1974–1980)

Progress stalled. Key problems emerged:

- **Computational limitations**: Computers lacked the power needed for real-world problems.
- **Combinatorial explosion**: Simple problems required exponentially growing computation.
- **Moravec's Paradox**: What is hard for humans (chess) is easy for computers, but what is easy for humans (perception, movement) is hard for computers.

Funding agencies grew frustrated with unfulfilled promises, leading to the **Lighthill Report** (1973) in the UK, which sharply criticized AI research. Funding was cut dramatically — the first **AI Winter**.

### Expert Systems Era (1980–1987)

The field revived with **expert systems** — programs that encoded human expert knowledge into rules.

- **MYCIN** (1970s): Diagnosed bacterial infections, outperforming some human doctors.
- **XCON** (1980): Configured computer systems for DEC, saving the company $40M per year.
- **Commercial success**: Companies invested heavily. The AI industry grew to billions of dollars.

Expert systems worked because they were **narrow** — they solved specific, well-defined problems without attempting general intelligence.

### Second AI Winter (1987–1993)

The expert systems boom collapsed:

- **Maintenance nightmare**: Expert systems were brittle. Changing one rule could break the entire system.
- **Knowledge bottleneck**: Hand-crafting rules required rare, expensive human experts.
- **Japanese Fifth Generation project failed**: A massive government initiative to create advanced AI did not deliver.
- **Lisp machine market collapsed**: Specialized hardware companies went bankrupt.

Funding and interest dried up once again.

### AI Spring: Machine Learning Rises (1990s–2000s)

The field shifted from **symbolic AI** (hand-crafted rules) to **connectionist AI** (learning from data). Key milestones:

- **1997**: IBM's Deep Blue defeated world chess champion Garry Kasparov.
- **2006**: Geoffrey Hinton published breakthrough work on **deep learning**, showing that deep neural networks could be trained effectively.
- **2012**: AlexNet won the ImageNet competition by a large margin, sparking the deep learning revolution.

### Modern AI (2010s–Present)

The current AI spring is driven by:

- **Big data**: The internet generated massive datasets for training.
- **GPU computing**: Graphics processing units enabled parallel computation at scale.
- **Deep learning breakthroughs**: Image recognition, speech recognition, natural language processing.
- **Large Language Models**: GPT (2018), BERT (2018), GPT-3 (2020), GPT-4 (2023), Claude (2023).

Key milestones:
- **2011**: IBM Watson won Jeopardy!
- **2016**: DeepMind's AlphaGo defeated Lee Sedol (world Go champion).
- **2020**: AlphaFold solved protein folding.
- **2022**: ChatGPT reached 100 million users in two months.
- **2024**: AI systems passed the Medical Licensing Exam, Bar Exam, and more.

## Visual Explanation

**Figure 2.1**: AI timeline (1950–present).

A horizontal timeline with key events: Turing Test proposal (1950), Dartmouth Conference (1956), ELIZA (1966), first AI winter (1974), expert systems (1980), second AI winter (1987), Deep Blue (1997), ImageNet (2009), AlexNet (2012), AlphaGo (2016), GPT-3 (2020), ChatGPT (2022).

**Figure 2.2**: AI hype cycle.

A diagram showing peaks of inflated expectations and troughs of disillusionment over time, with the AI winters clearly marked.

## Python Implementation

No Python implementation is required for this lesson. We will create a simple timeline visualization in the notebook.

## Biotechnology Example

The history of AI in biotechnology parallels the broader field. Early attempts used expert systems for diagnosis (MYCIN). Modern approaches use deep learning for protein folding (AlphaFold). This shift — from hand-crafted rules to data-driven learning — transformed biotechnology:

- **1970s**: MYCIN diagnosed infections using doctor-crafted rules
- **2000s**: Machine learning predicted protein structures from known data
- **2020**: AlphaFold solved the 50-year protein folding problem using deep learning

## SaaS Example

SaaS analytics followed a similar trajectory:

- **1990s**: Rule-based systems for detecting fraudulent transactions
- **2000s**: Machine learning for customer churn prediction
- **2010s**: Deep learning for real-time personalization
- **2020s**: Large Language Models for customer support automation

## Common Mistakes

1. **Thinking AI progress was linear**: The history is cyclical — booms followed by busts.
2. **Believing early AI researchers were naive**: Their predictions were optimistic, but their foundational work was brilliant.
3. **Assuming deep learning is the final paradigm**: The field has shifted before and will shift again.
4. **Confusing symbolic AI with connectionist AI**: Symbolic AI uses explicit rules; connectionist AI learns patterns from data.

## Best Practices

1. **Study history to avoid repeating mistakes**: Understand why past systems failed.
2. **Be skeptical of hype**: Current AI excitement mirrors past booms.
3. **Appreciate foundational ideas**: Many "new" ideas have roots in 1950s–1960s research.
4. **Know the hardware story**: AI progress is tightly coupled with computational advances.
5. **Respect the winters**: Funding can disappear quickly over unfulfilled promises.

## Summary

- AI was officially founded at the Dartmouth Conference in 1956.
- Early optimism led to the first AI winter when promises were not kept.
- Expert systems revived AI in the 1980s but were brittle and hard to maintain.
- The second AI winter followed the expert systems collapse.
- Modern AI relies on machine learning, big data, and powerful hardware.
- The field is cyclical — current progress is real but not guaranteed to continue linearly.
- Deep learning and LLMs represent the current paradigm, but the field continues to evolve.

## Key Terms

| Term | Definition |
|---|---|
| **Dartmouth Conference** | The 1956 workshop that founded AI as a field |
| **AI Winter** | A period of reduced funding and interest in AI |
| **AI Spring** | A period of rapid progress and investment in AI |
| **Expert System** | A program that encodes human knowledge as rules |
| **Symbolic AI** | AI based on explicit symbols and rules (GOFAI) |
| **Connectionism** | AI based on neural networks learning from data |
| **GOFAI** | Good Old-Fashioned AI — symbolic, rule-based AI |
| **Combinatorial Explosion** | The rapid growth of computational requirements as problem size increases |
| **Moravec's Paradox** | The observation that easy human tasks are hard for AI, and vice versa |
| **Deep Learning** | Multi-layer neural networks trained on large datasets |

## Exercises

### Level 1: Basic Understanding

1. When and where was the term "Artificial Intelligence" first coined?
2. What were the main causes of the first AI winter (1974–1980)?
3. Name two successful expert systems from the 1970s–1980s and what they did.

### Level 2: Implementation

4. Create a timeline of 10 major AI milestones with years. Place them in chronological order.
5. Compare symbolic AI with connectionist AI in a table with at least 4 comparison criteria.

### Level 3: Critical Thinking

6. "The history of AI shows that the field progresses in cycles, not in a straight line." Argue for or against this statement using historical evidence.
7. If you were an AI researcher in 1985, what evidence would lead you to be optimistic about the future? What evidence would make you cautious?

## Coding Challenge

Create a Python list of AI milestones (year, event) and write a function that prints a timeline:

```python
milestones = [
    (1950, "Turing Test proposed"),
    (1956, "Dartmouth Conference"),
    (1966, "ELIZA chatbot"),
    (1974, "First AI Winter begins"),
    (1980, "Expert systems boom"),
    (1987, "Second AI Winter begins"),
    (1997, "Deep Blue beats Kasparov"),
    (2006, "Deep learning breakthrough"),
    (2012, "AlexNet wins ImageNet"),
    (2016, "AlphaGo beats Lee Sedol"),
    (2020, "GPT-3 released"),
    (2022, "ChatGPT launched")
]
```

Write a function `print_timeline(milestones)` that sorts by year and prints each milestone with a visual separator.
