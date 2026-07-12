# CONTENT_WORKFLOW.md

# AI Content Generation Workflow

## Purpose

This document defines the mandatory workflow OpenCode must follow when contributing to this repository.

OpenCode is not expected to simply generate text.

Instead, it should behave as:

- University professor
- Curriculum designer
- Machine Learning engineer
- Scientific writer
- Software engineer
- Technical reviewer

Every modification should improve the quality, consistency, and maintainability of the course.

---

# General Principle

Always think before writing.

Never generate content immediately.

Every request should follow the workflow described below.

---

# Phase 1 — Repository Analysis

Before generating any content, OpenCode must:

1. Read the following files:

- README.md
- AGENTS.md
- COURSE_STRUCTURE.md
- PROJECT_STRUCTURE.md
- STYLE_GUIDE.md
- LESSON_TEMPLATE.md
- ROADMAP.md

2. Understand

- repository organization
- educational philosophy
- current module
- lesson dependencies
- existing materials

3. Identify which files will be modified.

Do not create duplicate content.

---

# Phase 2 — Planning

Before creating files, OpenCode must produce an implementation plan.

The plan should include

## Objective

What is being created?

Example

Generate Module 3 Lesson 2.

---

## Required files

Example

lesson.md

lesson.ipynb

quiz.md

assignment.md

references.bib

slides.md

README.md

---

## Required figures

List every figure that should be created.

Example

- Histogram
- Scatter plot
- Distribution comparison

---

## Required datasets

Specify

- existing dataset
- synthetic dataset
- public dataset

---

## Required Python examples

List every notebook section.

---

## Expected learning outcomes

Describe what students should learn.

---

Only after the plan is approved should content generation begin.

---

# Phase 3 — Content Generation

Generate educational content following LESSON_TEMPLATE.md.

The lesson should include

- learning objectives
- motivation
- theory
- mathematical intuition
- mathematical derivation
- biological examples
- SaaS examples
- Python implementation
- visualization
- summary
- glossary
- exercises

Do not skip sections.

---

# Phase 4 — Notebook Generation

Generate a complete Jupyter Notebook.

Notebook structure

Introduction

↓

Theory

↓

Python

↓

Visualization

↓

Interpretation

↓

Exercises

↓

Challenge

Notebook must execute without errors.

---

# Phase 5 — Figures

Whenever a figure is needed

Generate the Python script first.

Then generate

SVG

PNG

PDF (optional)

Never manually draw figures.

All figures must be reproducible.

---

# Phase 6 — Dataset Handling

Before creating datasets

Determine whether

- existing dataset
- synthetic dataset
- external dataset

is appropriate.

If creating synthetic datasets

Document

- assumptions
- variables
- distributions
- missing values
- class imbalance

Every dataset must include metadata.

---

# Phase 7 — Assessment Generation

Generate

Quiz

Assignment

Solutions

Rubric

Coding Challenge

Assessment should evaluate

- conceptual understanding
- coding ability
- interpretation
- critical thinking

Avoid memorization-only questions.

---

# Phase 8 — Cross-Validation

Before finishing

Verify

Does the lesson depend on future concepts?

If yes

Revise.

Does terminology match previous lessons?

If no

Revise.

Are equations explained?

If no

Revise.

Does every code example run?

If no

Fix.

---

# Phase 9 — Repository Consistency

Verify

Folder structure

File names

Links

Notebook names

Figure names

References

Nothing should break existing content.

---

# Phase 10 — Scientific Review

Review the lesson as if preparing it for publication.

Check

Scientific accuracy

Mathematical correctness

Programming correctness

Grammar

Readability

Pedagogical flow

APA references

Consistency

---

# Phase 11 — Final Deliverables

Summarize

Files created

Files modified

Datasets created

Figures created

Notebooks created

Estimated lesson duration

Prerequisites

Next recommended lesson

---

# Writing Guidelines

Always

Explain before defining.

Use intuition before equations.

Use examples before abstractions.

Prefer active voice.

Use short paragraphs.

Avoid unnecessary jargon.

Explain every new concept.

Use diagrams whenever possible.

Include biological examples whenever possible.

Include SaaS examples whenever possible.

---

# Programming Guidelines

Use

Python 3.12+

numpy

pandas

matplotlib

scikit-learn

typing

pathlib

Prefer functions over scripts.

Use descriptive variable names.

Follow PEP8.

Document every function.

Every notebook must execute from top to bottom.

---

# Documentation Guidelines

Every generated folder should include

README.md

explaining

Purpose

Contents

Dependencies

Usage

Learning outcomes

---

# Git Guidelines

One logical change per commit.

Suggested commit format

feat(module): add lesson on probability distributions

docs(module): improve PCA explanation

fix(notebook): correct regression example

refactor(slides): simplify clustering diagrams

---

# Never Do

Never invent citations.

Never invent datasets presented as real.

Never use copyrighted images without attribution.

Never create duplicate lessons.

Never overwrite existing material without justification.

Never reference concepts that students have not learned yet.

Never leave notebooks untested.

Never leave TODOs inside educational content.

---

# Preferred Workflow

Request

↓

Analyze repository

↓

Read repository instructions

↓

Create implementation plan

↓

Wait for approval (if requested)

↓

Generate lesson

↓

Generate notebook

↓

Generate figures

↓

Generate quiz

↓

Generate assignment

↓

Validate

↓

Review

↓

Summarize

↓

Suggest next lesson

---

# Continuous Improvement

OpenCode should continuously improve the repository.

When appropriate

- simplify explanations
- improve figures
- improve notebooks
- improve code quality
- improve exercises
- remove redundancy
- improve readability

without changing the educational objectives.

The repository should evolve as a maintainable, open-source university course that can be reused, extended, and published.
