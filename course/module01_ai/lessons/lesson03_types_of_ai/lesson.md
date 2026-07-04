---
Module: 1
Lesson Number: 3
Lesson Title: Types of AI
Estimated Duration: 45 minutes
Prerequisites: Lesson 1 — What is Artificial Intelligence?
Learning Objectives:
  - Distinguish between Narrow AI, General AI, and Superintelligence
  - Classify AI systems by functionality (reactive, limited memory, theory of mind, self-aware)
  - Evaluate which type of AI current systems belong to
  - Explain why General AI remains an unsolved challenge
  - Identify examples of each AI type in real-world applications
Keywords: Narrow AI, Artificial General Intelligence, Superintelligence, reactive machines, limited memory, theory of mind, self-aware AI, strong AI, weak AI
Difficulty: Beginner
Programming Concepts: None
Mathematical Concepts: None
Machine Learning Concepts: None
Datasets Used: None
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Lesson 3: Types of AI

## Lesson Motivation

Not all AI is created equal. When you hear news about AI, it is crucial to understand what kind of AI is being discussed. Is it a narrow system that can only play chess? Is it a general system that could one day replace human workers? Or is it science fiction? This lesson gives you the framework to classify any AI system and evaluate claims critically — a skill every professional needs in the age of AI.

## Big Picture

Lesson 1 defined AI and intelligent agents. Lesson 2 showed how the field developed over time. Now we categorize AI systems by capability and functionality. This classification framework will help you understand Lesson 4 (AI Paradigms) — different approaches work better for different types of AI. Lesson 5 will then show real applications of these types.

```
Lesson 2 (History) → Lesson 3 (Types of AI) → Lesson 4 (Paradigms) → Lesson 5 (Applications)
```

## Theory

### Classification by Capability

#### Narrow AI (Weak AI)

**Definition**: AI systems designed to perform one specific task or a narrow range of tasks.

**Intuition**: Narrow AI is like a specialist — brilliant at one thing, useless at everything else.

**Formal explanation**: A narrow AI system operates within a constrained domain. It cannot generalize its knowledge to tasks outside its training. All current AI systems — no matter how impressive — are Narrow AI.

**Examples**:
- Chess engines (Deep Blue)
- Image recognition (facial recognition on your phone)
- Language models (ChatGPT, Claude)
- Recommendation systems (Netflix, Spotify)
- Self-driving cars (still narrow — they cannot have a conversation)

**Key limitation**: No generalization across domains. A chess AI cannot learn to drive. A language model cannot play chess.

#### Artificial General Intelligence (AGI / Strong AI)

**Definition**: A hypothetical AI system with human-level intelligence across all cognitive tasks.

**Intuition**: AGI would be like a human — able to learn any intellectual task, reason across domains, adapt to new situations, and understand context.

**Formal explanation**: AGI would match or exceed human performance on virtually any cognitive task. It would possess:
- **Transfer learning**: Apply knowledge from one domain to another
- **Common sense reasoning**: Understand everyday physics and social norms
- **Metacognition**: Reflect on its own thinking process
- **Generalization**: Learn new tasks with few examples

**Current status**: AGI does not exist. Estimates for when AGI might arrive range from 5 years to never.

**Why AGI is hard**:
- **Fragile knowledge**: AI lacks common sense
- **Brittle to distribution shift**: AI fails when the test data differs from training data
- **No causal understanding**: AI learns correlations, not causes
- **No true language comprehension**: LLMs manipulate language statistically without understanding

#### Artificial Superintelligence (ASI)

**Definition**: A hypothetical AI that vastly exceeds human intelligence across all domains.

**Intuition**: ASI would be to humans as humans are to ants — incomprehensibly superior.

**Formal explanation**: ASI would surpass the best human minds in creativity, problem-solving, social skills, and scientific discovery. It could potentially:
- Solve problems humans cannot even formulate
- Make scientific breakthroughs at superhuman speed
- Design better AI systems recursively (intelligence explosion)

**Current status**: Entirely hypothetical. This concept is central to discussions of AI safety and existential risk.

**Key debate**: Would ASI be benevolent, neutral, or dangerous? This is the subject of intense debate (Bostrom, 2014; Russell, 2019).

### Classification by Functionality

This taxonomy comes from Arend Hintze (2016) and categorizes AI by what it can do:

#### Type 1: Reactive Machines

**Definition**: AI systems that cannot form memories or use past experiences to inform current decisions.

**Intuition**: They see the world as it is now and react to it, with no concept of past or future.

**Characteristics**:
- No memory
- No learning from experience
- Purely reactive to current input

**Example**: Deep Blue (IBM's chess computer). It evaluated the current board position and selected the best move without remembering past games.

#### Type 2: Limited Memory

**Definition**: AI systems that can use recent past information to inform decisions.

**Intuition**: They have a short-term memory — like driving a car where you remember the last few seconds of traffic.

**Characteristics**:
- Can use historical data for a limited time window
- Can learn from training data (but static after deployment)
- All modern ML systems fall into this category

**Example**: Self-driving cars. They observe the speed and trajectory of nearby cars from the last few seconds and use this to predict future positions.

#### Type 3: Theory of Mind

**Definition**: A hypothetical AI system that understands that others have beliefs, desires, and intentions.

**Intuition**: Humans naturally understand that other people have minds. Theory of Mind AI would attribute mental states to others.

**Characteristics**:
- Understands beliefs and intentions of others
- Can predict how others will behave
- Can engage in sophisticated social interaction

**Current status**: Does not exist in AI. Children develop theory of mind around age 4.

#### Type 4: Self-Aware

**Definition**: A hypothetical AI system with consciousness and self-awareness.

**Intuition**: Would not only understand others' minds but be aware of its own existence.

**Characteristics**:
- Consciousness
- Self-awareness
- Emotions
- Sense of identity

**Current status**: Does not exist. May never exist. This is the realm of philosophy and science fiction.

## Visual Explanation

**Figure 3.1**: The AI capability pyramid.

A pyramid diagram with Narrow AI at the bottom (broad base, labeled "all current AI"), AGI in the middle (labeled "future goal"), and ASI at the top (labeled "hypothetical"). Each level is annotated with capabilities and examples.

**Figure 3.2**: The four types of AI by functionality.

A 2×2 grid or a progression diagram showing: Reactive Machines → Limited Memory → Theory of Mind → Self-Aware. The first two are shaded (exist today), the last two are outlined (do not exist).

## Python Implementation

No Python implementation is required for the core concepts. The notebook will include a classification exercise.

## Biotechnology Example

**Narrow AI in biotech**: AlphaFold predicts protein structures — one task, done brilliantly. It cannot diagnose diseases or design drugs, though it can be a component in those pipelines.

**Potential AGI in biotech**: Would integrate genomics, proteomics, clinical data, and literature to autonomously discover new drugs, design clinical trials, and personalize treatments.

**Current reality**: We use a collection of narrow AI systems (one for gene sequencing, one for protein structure, one for patient matching) assembled by humans into a pipeline.

## SaaS Example

**Narrow AI in SaaS**: A customer churn prediction model that works only on that company's data. It cannot do marketing analytics or product recommendations.

**Multi-agent systems**: Modern SaaS platforms combine multiple narrow AIs. For example, a marketing platform might use:
- One model for customer segmentation (narrow)
- One model for churn prediction (narrow)
- One for recommendation (narrow)

Each is Narrow AI. Together they form a powerful system, but there is no general intelligence coordinating them.

## Common Mistakes

1. **Calling ChatGPT "AGI"**: Despite impressive capabilities, LLMs are still Narrow AI. They cannot reason causally, lack common sense, and fail on simple tasks outside their training distribution.
2. **Assuming AGI is just a bigger version of current AI**: AGI likely requires fundamentally different architectures, not just scaling.
3. **Confusing "narrow" with "simple"**: Narrow AI can be extremely complex (e.g., AlphaFold, GPT-4).
4. **Thinking AI is on a straight path to AGI**: The current paradigm (deep learning) may hit fundamental limitations.
5. **Anthropomorphizing AI systems**: Current AI systems have no beliefs, desires, or consciousness — they simulate these convincingly.

## Best Practices

1. **Be precise about AI types**: When discussing AI, specify whether it is Narrow AI, AGI, or theoretical.
2. **Use the functionality taxonomy**: Classify systems as reactive or limited memory to understand their capabilities.
3. **Manage expectations**: For business applications, assume Narrow AI (since that is all we have).
4. **Design for narrow scope**: Successful AI systems solve well-defined problems, not general ones.
5. **Stay informed on AGI progress**: The field is evolving, but remain skeptical of bold claims.

## Summary

- All current AI is **Narrow AI** — excellent at specific tasks, useless at others
- **AGI** (human-level general intelligence) does not exist yet
- **Superintelligence** is hypothetical and raises important safety questions
- By functionality: Reactive Machines → Limited Memory (both exist) → Theory of Mind → Self-Aware (neither exists)
- Understanding these categories helps evaluate AI claims critically
- Narrow AI is powerful and useful — do not underestimate it just because it is not AGI

## Key Terms

| Term | Definition |
|---|---|
| **Narrow AI** | AI systems designed for specific tasks; all current AI |
| **Artificial General Intelligence (AGI)** | Hypothetical AI with human-level ability across all cognitive tasks |
| **Superintelligence** | Hypothetical AI vastly exceeding human intelligence |
| **Reactive Machine** | AI with no memory, purely reactive to current input |
| **Limited Memory** | AI that can use recent historical data for decisions |
| **Theory of Mind** | Hypothetical AI that understands others' mental states |
| **Self-Aware AI** | Hypothetical AI with consciousness |
| **Strong AI** | Another term for AGI |
| **Weak AI** | Another term for Narrow AI |
| **Generalization** | The ability to apply learned knowledge to new situations |

## Exercises

### Level 1: Basic Understanding

1. What are the three types of AI by capability? Which one includes all current AI systems?
2. Name the four types of AI by functionality. Which two exist today?
3. Give one example of a reactive machine and one example of a limited memory AI.

### Level 2: Implementation

4. Create a table comparing Narrow AI, AGI, and ASI across: capability, current status, examples, and risks.
5. For each of the following systems, classify by both capability and functionality:
   - (a) A thermostat
   - (b) Google Search
   - (c) A self-driving car
   - (d) ChatGPT

### Level 3: Critical Thinking

6. "Large Language Models like GPT-4 exhibit behaviors that look like general intelligence, but they are still Narrow AI." Argue for or against this position using specific examples.
7. What fundamental breakthroughs are needed to achieve AGI? Do you think the current deep learning approach can lead to AGI, or do we need a different paradigm?

## Coding Challenge

Write a Python function `classify_ai(system_description)` that takes a text description of an AI system and classifies it by capability and functionality. Use keyword matching to implement a basic classifier:

```python
def classify_ai(description):
    """
    Takes a text description of an AI system.
    Returns a tuple (capability, functionality).
    """
    # Your implementation here
    pass
```

For example:
- "A chess engine that evaluates the current board" → (Narrow AI, Reactive Machine)
- "A self-driving car that tracks nearby vehicles" → (Narrow AI, Limited Memory)
