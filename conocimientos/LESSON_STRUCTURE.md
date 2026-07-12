# LESSON_TEMPLATE.md

# Lesson Generation Specification

This document defines the required structure for every lesson in the course.

OpenCode MUST follow this specification whenever creating or updating lessons.

The objective is to ensure consistency across the entire course.

---

# General Principles

Every lesson should

- teach one concept well
- build upon previous lessons
- prepare students for the next lesson
- combine theory with practice
- include reproducible Python examples
- use real-world applications
- emphasize intuition before mathematics
- encourage active learning

---

# Lesson Metadata

Every lesson begins with

```yaml
Module:
Lesson Number:
Lesson Title:

Estimated Duration:

Prerequisites:

Learning Objectives:

Keywords:

Difficulty:

Programming Concepts:

Mathematical Concepts:

Machine Learning Concepts:

Datasets Used:

Notebook:

Assignment:

Quiz:
```

---

# Learning Objectives

Provide 3–6 measurable learning objectives.

Use Bloom's Taxonomy.

Examples

- Explain...
- Implement...
- Compare...
- Interpret...
- Evaluate...
- Design...

Avoid vague verbs such as

- understand
- know
- learn

---

# Lesson Motivation

Start every lesson by answering

Why should students care?

Use

- biotechnology
- healthcare
- business
- SaaS
- everyday examples

Students should immediately understand the value of the lesson.

---

# Big Picture

Show how this lesson connects to

Previous lesson

↓

Current lesson

↓

Next lesson

Students should always know where they are in the course.

---

# Theory

Explain the concept.

Requirements

- conversational
- academic
- technically correct

Introduce terminology gradually.

Every new concept must include

Definition

↓

Intuition

↓

Formal explanation

↓

Example

---

# Mathematical Foundation

If mathematics is required

Explain

1. notation

2. intuition

3. derivation

4. interpretation

Avoid presenting equations without explanation.

Every variable must be defined.

---

# Visual Explanation

Every lesson should include figures whenever possible.

Examples

- diagrams
- flowcharts
- distributions
- decision trees
- scatter plots
- ROC curves

Figures should be generated programmatically.

Never rely exclusively on screenshots.

---

# Python Implementation

Every lesson includes executable Python code.

Requirements

- PEP8
- comments
- readable variable names
- modular functions

Preferred libraries

- numpy
- pandas
- matplotlib
- scikit-learn

Optional

- scipy
- seaborn
- plotly

Every code block must execute.

---

# Walkthrough Example

Provide one complete worked example.

Structure

Problem

↓

Dataset

↓

Analysis

↓

Model

↓

Interpretation

↓

Conclusion

Students should be able to reproduce the example.

---

# Biotechnology Example

Whenever appropriate

Include an application related to

- genomics
- transcriptomics
- proteins
- healthcare
- laboratory data
- clinical data

---

# SaaS Example

Whenever appropriate

Include an application involving

- customer churn

- revenue prediction

- recommendation systems

- customer segmentation

- product analytics

- marketing analytics

---

# Common Mistakes

Include a section

Common Mistakes

Examples

- misunderstanding assumptions

- incorrect interpretation

- coding errors

- statistical mistakes

- visualization mistakes

Explain how to avoid them.

---

# Best Practices

Explain

- professional workflow

- reproducibility

- documentation

- code organization

- version control

- testing

---

# Summary

Summarize the lesson using concise bullet points.

Students should be able to review this section before an exam.

---

# Key Terms

Provide a glossary.

Example

Feature

Target

Variance

Overfitting

Generalization

Each definition should be concise.

---

# Exercises

Include three levels.

Level 1

Basic understanding

Level 2

Implementation

Level 3

Critical thinking

---

# Coding Challenge

Every lesson includes one coding challenge.

Students write code independently.

Avoid giving the complete solution.

---

# Notebook

Generate a Jupyter notebook.

Structure

Markdown

↓

Code

↓

Output

↓

Interpretation

↓

Exercises

Notebook must execute without errors.

---

# Quiz

Generate

5 multiple-choice questions

2 short-answer questions

1 coding question

Include an answer key.

---

# Assignment

Assignments should integrate previous lessons.

Include

Objectives

Instructions

Deliverables

Evaluation rubric

Estimated completion time

---

# References

Use APA 7.

Prioritize

- textbooks
- peer-reviewed papers
- official documentation

Avoid blogs unless explicitly requested.

---

# Lesson Checklist

Before finishing a lesson verify

□ Learning objectives included

□ Motivation included

□ Theory complete

□ Mathematics explained

□ Figures generated

□ Python examples tested

□ Biotechnology example included

□ SaaS example included

□ Summary written

□ Glossary included

□ Exercises included

□ Notebook generated

□ Quiz generated

□ Assignment generated

□ References formatted

---

# Deliverables

For every lesson OpenCode should generate

lesson.md

lesson.ipynb

quiz.md

assignment.md

slides.md

references.bib

figures/

datasets/

README.md

---

# Quality Standards

Every lesson should

- be reproducible
- be modular
- be self-contained
- maintain consistent terminology
- build upon previous lessons
- prepare students for future lessons
- use professional scientific writing
- maintain a consistent tone throughout the course

The lesson should be publishable as university teaching material without requiring substantial rewriting.
