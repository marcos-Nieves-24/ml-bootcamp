---
Module: 1
Lesson Number: 4
Lesson Title: AI Paradigms
Estimated Duration: 75 minutes
Prerequisites: Lesson 1 — What is Artificial Intelligence?
Learning Objectives:
  - Compare and contrast Expert Systems, Rule-Based Systems, Machine Learning, Deep Learning, and Large Language Models
  - Explain when each paradigm is appropriate
  - Describe the limitations of rule-based approaches and the advantages of learning-based approaches
  - Implement a simple rule-based system and a basic ML model
  - Identify which paradigm a given AI system uses
Keywords: Expert systems, rule-based systems, machine learning, deep learning, large language models, symbolic AI, connectionism, neural networks, paradigms
Difficulty: Intermediate
Programming Concepts: Functions, conditionals, scikit-learn basics
Mathematical Concepts: Basic probability, linear algebra intuition
Machine Learning Concepts: Features, labels, training, prediction
Datasets Used: Synthetic dataset for classification
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Lesson 4: AI Paradigms

## Lesson Motivation

AI is not one technology — it is a collection of different approaches, each with its own strengths and weaknesses. Some problems are best solved with explicit rules. Others require learning from data. Understanding which paradigm to use for which problem is one of the most important skills you will develop in this course. Choose the wrong paradigm, and your system will fail. Choose the right one, and you can build powerful, practical AI.

## Big Picture

Lesson 3 taught you to classify AI by capability and functionality. Now we dive into the technical approaches that make AI work — the paradigms. This is the most important technical foundation for the rest of the course. Lesson 5 will show applications of these paradigms in various domains. Module 4 (Machine Learning) will dive deep into the ML paradigm.

```
Lesson 3 (Types of AI) → Lesson 4 (Paradigms) → Lesson 5 (Applications) → Module 4 (ML)
```

## Theory

### Overview of AI Paradigms

The field of AI has developed several distinct paradigms over its history. Each represents a fundamentally different approach to building intelligent systems.

| Paradigm | Core Idea | Era | Example |
|---|---|---|---|
| Expert Systems | Encode human expertise as rules | 1970s–1980s | MYCIN |
| Rule-Based Systems | General-purpose if-then rules | 1980s–1990s | Business rules engines |
| Machine Learning | Learn patterns from data | 1990s–present | Spam filters |
| Deep Learning | Multi-layer neural networks | 2010s–present | Image recognition |
| Large Language Models | Massive neural nets trained on text | 2020s–present | ChatGPT |

### Expert Systems

**Definition**: A computer system that emulates the decision-making ability of a human expert in a specific domain.

**Intuition**: Like having a specialist doctor in a box. You describe symptoms, and the system applies expert knowledge to reach a diagnosis.

**Formal explanation**: Expert systems consist of three components:
1. **Knowledge Base**: A collection of facts and rules about a domain
2. **Inference Engine**: A mechanism that applies rules to facts to derive conclusions
3. **User Interface**: Allows users to query the system

**Example**: MYCIN (1976) diagnosed bacterial infections and recommended antibiotics. It had ~450 rules and performed as well as infectious disease specialists.

**Limitations**: Knowledge acquisition bottleneck (rules must be hand-crafted by experts), brittleness (small changes break the system), no learning from data.

### Rule-Based Systems

**Definition**: Systems that use a set of if-then rules to process data and make decisions.

**Intuition**: Think of it as a very detailed checklist: IF condition THEN action.

**Formal explanation**: A rule has two parts:
- **Antecedent (IF part)**: A condition or pattern to match
- **Consequent (THEN part)**: An action or conclusion

Rules can be chained:
- **Forward chaining**: Start with facts, apply rules to derive new facts
- **Backward chaining**: Start with a goal, work backward to find supporting facts

**Example**: A spam filter: IF email contains "free money" AND "urgent" THEN classify as spam.

**Difference from Expert Systems**: All expert systems are rule-based, but not all rule-based systems are expert systems. Expert systems specifically encode human expertise. Rule-based systems can encode any kind of logic.

### Machine Learning

**Definition**: A paradigm where systems learn patterns from data without being explicitly programmed.

**Intuition**: Instead of writing rules, you show the system examples and it figures out the rules itself.

**Formal explanation**: Machine Learning algorithms find patterns in data. The three main types are:
- **Supervised Learning**: Learn from labeled examples (input → output mapping)
- **Unsupervised Learning**: Find structure in unlabeled data
- **Reinforcement Learning**: Learn through trial and error

**Key concepts**:
- **Features**: Input variables used for prediction
- **Labels**: Output variable being predicted
- **Training**: The process of learning from data
- **Generalization**: Performing well on unseen data

**Example**: Instead of writing rules for spam detection, you show an ML model thousands of emails labeled "spam" or "not spam." The model learns the patterns.

### Deep Learning

**Definition**: A subfield of Machine Learning using artificial neural networks with multiple layers.

**Intuition**: Like a brain-inspired computer program that learns hierarchical representations. Early layers detect simple patterns (edges), later layers combine them into complex concepts (faces).

**Formal explanation**: Deep neural networks consist of:
- **Input layer**: Receives raw data
- **Hidden layers**: Transform the data through weighted connections
- **Output layer**: Produces the prediction

Each neuron computes: output = activation(weight · input + bias)

**Why "deep"?** Multiple hidden layers allow the network to learn hierarchical features.

**Example**: AlexNet (2012) used 8 layers to classify images into 1000 categories, achieving state-of-the-art results.

### Large Language Models (LLMs)

**Definition**: Deep learning models trained on massive text corpora to generate and understand human language.

**Intuition**: Like a statistical parrot with an extraordinarily large brain. LLMs predict the next word in a sequence based on all the text they have seen.

**Formal explanation**: LLMs are based on the **Transformer architecture** (Vaswani et al., 2017). Key innovations:
- **Self-attention**: The model weighs the importance of different words in the input
- **Scale**: Billions of parameters trained on trillions of words
- **Emergent abilities**: At sufficient scale, LLMs exhibit capabilities not explicitly trained (e.g., translation, coding, reasoning)

**Examples**: GPT-4, Claude, Gemini, LLaMA.

**Limitations**: Hallucinations, lack of factual grounding, no causal understanding, biases in training data.

### When to Use Each Paradigm

| Problem Characteristic | Best Paradigm |
|---|---|
| Domain knowledge is clear and stable | Expert / Rule-Based Systems |
| Rules are unknown or too complex | Machine Learning |
| Small amount of data | Rule-Based (no data needed) or ML (with careful validation) |
| Large amount of structured data | Machine Learning |
| Images, audio, or complex patterns | Deep Learning |
| Language understanding and generation | Large Language Models |
| Need interpretability | Rule-Based or simple ML |
| Need maximum accuracy on complex task | Deep Learning |

## Visual Explanation

**Figure 4.1**: The paradigm comparison chart.

A 2×2 grid comparing paradigms along dimensions: "requires data" (low→high) and "complexity" (low→high). Expert Systems are low data, low complexity; ML is high data, medium; DL is high data, high; LLMs are very high data, very high.

**Figure 4.2**: Neural network architecture.

A diagram showing input layer → hidden layers → output layer, with neurons and connections. Labels for weights, biases, and activation functions.

**Figure 4.3**: The ML workflow.

A flowchart: Data Collection → Data Preparation → Train/Test Split → Model Training → Model Evaluation → Deployment.

## Python Implementation

We will implement three paradigms in Python: a rule-based system, a simple ML model, and a minimal neural network concept.

### Rule-Based System: Email Classifier

```python
def classify_email(subject, body):
    """Rule-based email classifier."""
    text = (subject + " " + body).lower()
    
    # Rules for spam detection
    spam_rules = [
        "free money" in text,
        "urgent" in text and "bank" in text,
        "click here" in text and "prize" in text,
        "lottery" in text,
        "inheritance" in text,
    ]
    
    spam_score = sum(spam_rules)
    
    if spam_score >= 2:
        return "spam"
    elif spam_score == 1:
        return "suspicious"
    else:
        return "safe"
```

### Machine Learning: Iris Classification

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train
model = DecisionTreeClassifier(max_depth=3)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2%}")
```

## Biotechnology Example

**Paradigm comparison for protein function prediction:**

- **Expert System**: Rules like "IF sequence contains motif X THEN function is Y" — works for well-known motifs but misses novel patterns.
- **Machine Learning**: Train on known protein sequences to predict function from sequence features.
- **Deep Learning**: Use convolutional or transformer networks on raw sequence data. AlphaFold uses deep learning to predict 3D structure.
- **LLM**: Protein language models (ESM-2, ProtGPT2) are trained on protein sequences like a language model — they capture evolutionary and functional information.

The evolution from rules to learning mirrors the broader shift in AI paradigms.

## SaaS Example

**Paradigm comparison for customer churn prediction:**

- **Rule-Based**: IF (login frequency < 1/week AND support tickets > 3) THEN churn risk = HIGH. Simple, interpretable, but misses complex patterns.
- **Machine Learning**: Train a Random Forest on historical customer data. Captures non-linear relationships.
- **Deep Learning**: Use a neural network with customer behavior sequences. Can capture temporal patterns.
- **LLM**: Analyze customer support conversations and sentiment to predict churn.

Most SaaS companies use ML (Random Forest or Gradient Boosting) for churn due to the balance of accuracy and interpretability.

## Common Mistakes

1. **Using deep learning when simpler methods work**: If logistic regression achieves 95% accuracy, do not use a neural network.
2. **Assuming expert systems are obsolete**: For well-understood domains with stable rules, rule-based systems are often better.
3. **Ignoring the knowledge acquisition bottleneck**: Hand-crafting rules does not scale.
4. **Confusing paradigms with implementations**: Decision Trees are ML; deep neural networks are DL; both have their place.
5. **Thinking LLMs are the answer to everything**: LLMs are powerful but expensive, slow, and unreliable for many tasks.

## Best Practices

1. **Start simple**: Begin with the simplest paradigm that could work. Add complexity only when needed.
2. **Match paradigm to problem**: Consider data availability, interpretability needs, and problem complexity.
3. **Hybrid systems are common**: Many production systems combine rules with ML (e.g., rules for edge cases, ML for core predictions).
4. **Consider the cost**: Deep learning requires more data, compute, and expertise.
5. **Plan for maintenance**: Rule-based systems need manual updates; ML systems need data pipeline maintenance.
6. **Evaluate before scaling**: Test multiple paradigms on your problem before committing.

## Summary

- AI has five major paradigms: Expert Systems, Rule-Based Systems, Machine Learning, Deep Learning, and Large Language Models
- Rule-Based systems encode explicit knowledge; ML learns from data
- Deep Learning uses multi-layer neural networks for complex patterns
- LLMs are a specialized form of deep learning for language
- Choose the simplest paradigm that solves your problem
- Hybrid approaches are common in production systems
- Understanding all paradigms makes you a more versatile AI practitioner

## Key Terms

| Term | Definition |
|---|---|
| **Expert System** | AI that emulates human expert decision-making using rules |
| **Rule-Based System** | System using if-then rules for decision making |
| **Knowledge Base** | The collection of facts and rules in an expert system |
| **Inference Engine** | The component that applies rules to derive conclusions |
| **Machine Learning** | Paradigm where systems learn patterns from data |
| **Deep Learning** | ML using multi-layer neural networks |
| **Large Language Model** | Deep learning model trained on massive text for language tasks |
| **Neural Network** | Computing system inspired by biological neural networks |
| **Transformer** | Neural network architecture using self-attention |
| **Feature** | Input variable used by an ML model |
| **Label** | Output variable being predicted |
| **Supervised Learning** | Learning from labeled training data |
| **Unsupervised Learning** | Finding patterns in unlabeled data |

## Exercises

### Level 1: Basic Understanding

1. List the five AI paradigms in chronological order.
2. What are the three components of an expert system?
3. What is the key difference between Machine Learning and Deep Learning?

### Level 2: Implementation

4. Extend the email classifier to include at least 5 additional spam rules. Test it on 3 example emails.
5. Train a Decision Tree classifier on the iris dataset. Print the tree structure and interpret one decision path.

### Level 3: Critical Thinking

6. You are building an AI system for a hospital. The system must diagnose a rare disease where only 100 cases are known worldwide. Which paradigm would you choose and why?
7. "Large Language Models are just very large neural networks — they do not represent a new paradigm." Argue for or against this position.

## Coding Challenge

Build a **hybrid system** that combines rule-based logic with machine learning:

1. Create a rule-based pre-filter that classifies emails as "definitely spam," "definitely not spam," or "uncertain"
2. For "uncertain" emails, pass them to an ML classifier
3. Use a synthetic dataset (generate random email features)
4. Compare the hybrid accuracy with using either approach alone
