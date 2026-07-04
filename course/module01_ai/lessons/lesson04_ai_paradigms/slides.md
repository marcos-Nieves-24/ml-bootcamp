---
Module: 1
Lesson: 4
Title: AI Paradigms
---

# Slide Deck: AI Paradigms

## Slide 1: Title Slide
- **AI Paradigms**
- Module 1: Introduction to AI
- Lesson 4

## Slide 2: Lesson Objectives
- Compare Expert Systems, Rule-Based, ML, DL, and LLMs
- Explain when each paradigm is appropriate
- Implement simple examples of each

## Slide 3: Five AI Paradigms
1. Expert Systems (1970s)
2. Rule-Based Systems (1980s)
3. Machine Learning (1990s)
4. Deep Learning (2010s)
5. Large Language Models (2020s)

## Slide 4: Expert Systems
- Emulate human expert decision-making
- Components: Knowledge Base + Inference Engine + UI
- Example: MYCIN (bacterial infection diagnosis)
- Limitation: Knowledge acquisition bottleneck

## Slide 5: How Expert Systems Work
```
User Input → Inference Engine → Knowledge Base → Output
                    ↑                    ↑
              Forward/Backward      Facts + Rules
                 Chaining
```

## Slide 6: Rule-Based Systems
- IF condition THEN action
- Forward chaining: facts → conclusions
- Backward chaining: goal → supporting facts
- Simple, interpretable, no data needed

## Slide 7: Machine Learning
- Learn patterns from data
- Three types: Supervised, Unsupervised, Reinforcement
- Key concepts: features, labels, training, prediction
- Example: Spam filter learning from examples

## Slide 8: ML Workflow
```
Data → Prepare → Split → Train → Evaluate → Deploy
```

- 80/20 train/test split
- Accuracy, precision, recall as metrics

## Slide 9: Deep Learning
- Multi-layer neural networks
- Learns hierarchical features
- Excels at: images, audio, complex patterns
- Requires: large data, GPU compute

## Slide 10: Neural Network Structure
```
Input Layer → Hidden Layer(s) → Output Layer
    [x1] ───→ [h1] ───→ [y1]
    [x2] ───→ [h2] ───→ [y2]
    [x3] ───→ [h3]
    Weights + Bias + Activation Function
```

## Slide 11: Large Language Models
- Transformers with self-attention
- Trained on massive text corpora
- Emergent abilities at scale
- Examples: GPT-4, Claude, Gemini

## Slide 12: LLM Capabilities
- Text generation
- Translation, summarization
- Code generation
- Question answering
- Reasoning (limited)

## Slide 13: Paradigm Comparison
| Paradigm | Data Need | Complexity | Interpretability |
|---|---|---|---|
| Rules | None | Low | High |
| ML | Medium | Medium | Medium |
| DL | High | High | Low |
| LLM | Very High | Very High | Low |

## Slide 14: When to Use What
- Clear stable rules → Rule-Based
- Enough labeled data → ML
- Images/complex → DL
- Language tasks → LLM
- Often: combine multiple paradigms

## Slide 15: Biotechnology Example
- Rule: IF sequence contains motif X THEN function Y
- ML: Predict function from sequence features
- DL: AlphaFold for protein structure
- LLM: ESM-2 protein language model

## Slide 16: SaaS Example
- Rule: IF login < 1/week THEN churn risk high
- ML: Random Forest for churn prediction
- DL: Temporal patterns in user behavior
- LLM: Analyze support conversations

## Slide 17: Common Mistakes
- Using DL when simple ML would work
- Ignoring the knowledge bottleneck
- Thinking LLMs solve everything
- Not considering hybrid approaches

## Slide 18: Summary
- Five paradigms, each with strengths
- Expert/Rule: interpretable, no data
- ML/DL: learn from data, powerful
- LLMs: language understanding at scale
- Choose the simplest paradigm that works
- Hybrid systems are often best

## Slide 19: Preview
- Next: AI Applications in the real world
- Computer Vision, NLP, Robotics, Generative AI
