---
Module: 1
Lesson Number: 1
Lesson Title: What is Artificial Intelligence?
Estimated Duration: 60 minutes
Prerequisites: None
Learning Objectives:
  - Define Artificial Intelligence and distinguish it from natural intelligence
  - Explain the Turing Test and its limitations
  - Describe the characteristics of intelligent agents
  - Identify the four goals of AI according to Russell & Norvig
  - Compare thinking vs acting, humanly vs rationally approaches
Keywords: Artificial Intelligence, Turing Test, intelligent agent, rationality, cognitive science, acting humanly, acting rationally, thinking humanly, thinking rationally
Difficulty: Beginner
Programming Concepts: None
Mathematical Concepts: None
Machine Learning Concepts: None
Datasets Used: None
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Lesson 1: What is Artificial Intelligence?

## Lesson Motivation

Artificial Intelligence is no longer science fiction. Every time you unlock your phone with facial recognition, receive a product recommendation on Amazon, or ask Siri for the weather, you are interacting with AI. In biotechnology, AI is accelerating drug discovery and enabling personalized medicine. In SaaS, AI powers customer analytics, churn prediction, and automated marketing. Understanding what AI is — and what it is not — is the foundation for everything that follows in this course.

## Big Picture

This is the first lesson of the course. It establishes the foundational definition of AI. Lesson 2 will explore the history of how we arrived at today's AI systems. Lesson 3 will classify different types of AI, and Lesson 4 will dive into the paradigms that make AI work. You will refer back to these core concepts throughout the entire program.

```
Lesson 1 (What is AI?) → Lesson 2 (History) → Lesson 3 (Types of AI) → Lesson 4 (Paradigms)
```

## Theory

### Definition of Artificial Intelligence

**Definition**: Artificial Intelligence is the branch of computer science concerned with building systems that exhibit intelligent behavior.

**Intuition**: Think of AI as the attempt to give machines the ability to perceive, reason, learn, and make decisions — tasks that normally require human intelligence.

**Formal explanation**: There is no single universally accepted definition. However, the most influential textbook in the field — *Artificial Intelligence: A Modern Approach* by Stuart Russell and Peter Norvig — organizes definitions along two dimensions:

| | Human performance | Rational performance |
|---|---|---|
| **Thinking** | "Thinking humanly" — modeling cognitive processes | "Thinking rationally" — following logical rules (laws of thought) |
| **Acting** | "Acting humanly" — passing the Turing Test | "Acting rationally" — achieving goals (rational agent) |

1. **Acting humanly**: The Turing Test approach. If a machine can converse with a human evaluator who cannot tell they are talking to a machine, the machine is said to be intelligent.
2. **Thinking humanly**: Cognitive modeling approach. We simulate the brain's thought processes.
3. **Thinking rationally**: The "laws of thought" approach. We use symbolic logic to represent knowledge and derive conclusions.
4. **Acting rationally**: The rational agent approach. We build agents that perceive their environment and take actions to achieve the best outcome.

This course focuses on **acting rationally** — building agents that make good decisions — because it is the most general and practically useful approach.

**Example**: A self-driving car perceives its environment via cameras and LiDAR, processes this data to identify obstacles, and acts by steering, accelerating, or braking. It is an intelligent agent acting rationally to reach its destination safely.

### The Turing Test

Alan Turing proposed the **Imitation Game** in 1950 as a criterion for intelligence.

**How it works**:
1. A human evaluator communicates via text with two hidden entities: a human and a machine.
2. The machine tries to convince the evaluator it is human.
3. If the evaluator cannot reliably distinguish the machine from the human, the machine passes the test.

**Limitations**:
- Focuses only on conversational ability
- Does not test perception, creativity, or physical interaction
- Can be "gamed" by superficial tricks (e.g., ELIZA chatbot in 1966)
- Modern AI (e.g., ChatGPT) can pass simplified versions, yet many argue they are not truly intelligent

### Intelligent Agents

An **agent** is anything that perceives its environment through sensors and acts upon it through actuators.

```
          Sensors
             ↓
Environment → Agent → Actions
             ↑
          Actuators
```

A **rational agent** acts to maximize a performance measure based on:
- Its percept sequence (history of everything it has perceived)
- Its knowledge of the environment
- The actions available to it

**Example**: A thermostat is a simple agent. It senses temperature (sensor), compares it to a set point, and turns heating on/off (actuator).

### The Four Goals of AI

Russell & Norvig (2021) identify four historical goals:

1. **Human-centered vs rational-centered**: Should AI mimic humans or achieve ideal performance?
2. **Reason vs behavior**: Should AI focus on internal reasoning or external actions?

| | Human-centered | Rational-centered |
|---|---|---|
| **Reasoning** | Cognitive Science | Laws of Thought |
| **Behavior** | Turing Test | Rational Agent |

This course adopts the **Rational Agent** perspective because:
- It is more general (does not require human-like behavior)
- It is more engineering-friendly (success is measurable)
- It aligns with modern Machine Learning

## Visual Explanation

**Figure 1.1**: The two dimensions of AI definitions.

A 2×2 matrix with rows "Thinking" and "Acting" and columns "Humanly" and "Rationally". Each cell contains the name of the approach and a brief description. The "Acting Rationally" cell is highlighted as the focus of this course.

**Figure 1.2**: The agent-environment interaction loop.

A diagram showing the environment on the left, the agent on the right, with arrows labeled "sensors" (environment → agent) and "actuators" (agent → environment), and a loop showing feedback.

## Python Implementation

This introductory lesson does not require Python code. We will begin programming in Module 2 (Python Fundamentals). However, we encourage you to set up your Python environment now following the instructions in the course README.

## Biotechnology Example

In biotechnology, intelligent agents can be designed to analyze genomic sequences. For example, an AI system can:
- **Perceive**: Read DNA sequencing data from a patient sample
- **Reason**: Compare the sequence against known genomic databases
- **Act**: Flag pathogenic mutations and suggest targeted therapies

This is an intelligent agent acting rationally — using data to drive clinical decisions.

## SaaS Example

In a SaaS company like Spotify, AI agents:
- **Perceive**: Your listening history, skips, likes, playlist additions
- **Reason**: Identify patterns in your music preferences
- **Act**: Recommend new songs and artists you might enjoy

This rational agent maximizes user engagement and satisfaction.

## Common Mistakes

1. **Confusing AI with Machine Learning**: AI is the broader field. ML is a subfield of AI. All ML is AI, but not all AI is ML.
2. **Assuming AI requires consciousness**: Modern AI does not possess consciousness, self-awareness, or emotions. It performs tasks without understanding.
3. **Equating AI with human-like intelligence**: A chess AI that beats world champions is not "thinking" like a human — it uses different computational strategies.
4. **Believing AI is infallible**: AI systems make mistakes. Their decisions depend on data quality, algorithm design, and problem framing.

## Best Practices

1. **Use precise language**: Distinguish between AI, Machine Learning, and Deep Learning.
2. **Think in terms of agents and environments**: Frame problems as agents perceiving and acting.
3. **Define success metrics**: For any AI project, specify how you will measure performance.
4. **Consider the boundaries**: Know what your AI system can and cannot do.
5. **Start simple**: The simplest rational agent that solves the problem is often the best.

## Summary

- AI is the field of building intelligent systems, with multiple definitions organized along thinking/acting and humanly/rationally dimensions.
- The Turing Test evaluates whether a machine can exhibit human-like conversation, but it has significant limitations.
- An intelligent agent perceives its environment and takes actions to achieve goals.
- The rational agent approach is the most practical framework for building AI systems.
- AI is broader than Machine Learning; not every AI system learns from data.

## Key Terms

| Term | Definition |
|---|---|
| **Artificial Intelligence** | The field of study concerned with building systems that exhibit intelligent behavior |
| **Turing Test** | A test proposed by Alan Turing where a machine tries to convince a human evaluator that it is human |
| **Intelligent Agent** | A system that perceives its environment and takes actions to achieve goals |
| **Rational Agent** | An agent that acts to maximize a performance measure |
| **Sensors** | Mechanisms by which an agent perceives its environment |
| **Actuators** | Mechanisms by which an agent acts upon its environment |
| **Cognition** | The mental processes involved in acquiring knowledge and understanding |
| **Imitation Game** | The original name for the Turing Test |

## Exercises

### Level 1: Basic Understanding

1. List the four approaches to defining AI according to Russell & Norvig.
2. What is the Turing Test? Provide one reason it is not a perfect measure of intelligence.
3. Define an intelligent agent and name its two main components.

### Level 2: Implementation

4. Draw an agent-environment diagram for an AI-powered spam filter. Label the sensors, actuators, environment, and performance measure.
5. For each of the following systems, identify whether they exemplify "acting humanly" or "acting rationally": (a) a chatbot, (b) a chess engine, (c) a self-driving car.

### Level 3: Critical Thinking

6. "A calculator is more intelligent than a human at arithmetic, but we do not consider it intelligent." Discuss what is missing from calculators that prevents us from classifying them as AI.
7. If an AI system could pass the Turing Test for 30 minutes but failed in a 3-hour conversation, would it be considered intelligent? Where would you draw the boundary?

## Coding Challenge

Since this lesson does not assume programming knowledge, the challenge is conceptual:

Research one AI system you use daily (e.g., Google Search, Netflix recommendations, facial recognition on your phone). Write a paragraph identifying:
1. What it perceives (sensors/input)
2. What actions it takes (actuators/output)
3. What goal it is trying to achieve (performance measure)
4. Whether it acts humanly or rationally
