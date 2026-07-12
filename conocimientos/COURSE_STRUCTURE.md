# COURSE_STRUCTURE.md

# Machine Learning for Data Analysis and SaaS

## Purpose

This document defines the canonical structure of the course.

OpenCode MUST use this file as the source of truth when generating educational content.

Every lesson, notebook, lab, quiz, assignment, dataset, figure, and project must follow this structure.

Do not change the order of the modules unless explicitly instructed.

---

# Target Audience

Undergraduate students in

- Biotechnology
- Bioinformatics
- Biological Sciences
- Data Analysis
- Engineering

Prerequisites

- High-school mathematics
- Basic algebra
- No previous programming experience
- No previous Machine Learning experience

---

# Course Learning Objectives

At the end of the course students should be able to

- Understand the foundations of Artificial Intelligence.
- Understand Machine Learning fundamentals.
- Write Python code for data analysis.
- Explore and clean datasets.
- Apply statistical concepts to real data.
- Train supervised learning models.
- Train unsupervised learning models.
- Evaluate machine learning models.
- Interpret model outputs.
- Communicate findings using data storytelling.
- Solve biotechnology and SaaS problems using Machine Learning.

---

# Module 1
# Introduction to Artificial Intelligence

## Learning Goal

Introduce Artificial Intelligence, its history, paradigms, and applications.

Lessons

1. What is Artificial Intelligence?
2. History of AI
3. Types of AI
4. AI Paradigms
    - Expert Systems
    - Rule-Based Systems
    - Machine Learning
    - Deep Learning
    - Large Language Models
5. AI Applications
6. AI in Biotechnology
7. AI in SaaS

Deliverables

- Lecture
- Notebook
- Quiz
- Lab
- Assignment
- Slides
- Figures
- Glossary

---

# Module 2
# Python Programming Fundamentals

## Learning Goal

Teach Python programming required for Machine Learning.

Lessons

1. Installing Python
2. Jupyter Notebook
3. Variables
4. Data Types
5. Operators
6. Functions
7. Loops
8. Conditionals
9. Lists
10. Tuples
11. Dictionaries
12. Sets
13. NumPy
14. Pandas
15. Matplotlib
16. Seaborn

Deliverables

- Notebook-first lessons
- Coding exercises
- Mini-projects
- Labs
- Quiz

---

# Module 3
# Statistics for Machine Learning

## Learning Goal

Develop statistical intuition for Machine Learning.

Lessons

### Descriptive Statistics

- Mean
- Median
- Mode
- Variance
- Standard Deviation
- Range
- Interquartile Range

### Data Distribution

- Histograms
- Density
- Skewness
- Kurtosis

### Probability

- Probability Fundamentals
- Kolmogorov Axioms
- Conditional Probability
- Bayes Theorem
- Total Probability
- Random Variables

### Statistical Distributions

- Bernoulli
- Binomial
- Poisson
- Normal Distribution
- Standardization

### Relationships

- Covariance
- Pearson Correlation
- Spearman Correlation

### Exploratory Data Analysis

- Missing Values
- Outliers
- Visualization
- Feature Exploration

### Dimensionality Reduction

- PCA
- Explained Variance

### Clustering

- K-Means
- Elbow Method
- Silhouette Score

### Model Evaluation

- Train/Test Split
- Cross Validation
- MAE
- MSE
- RMSE
- R²

### Data Storytelling

Deliverables

Every statistical concept must include

- intuition
- mathematical explanation
- derivation when appropriate
- Python implementation
- visualization
- interpretation
- exercises

---

# Module 4
# Introduction to Machine Learning

## Learning Goal

Teach the Machine Learning workflow.

Lessons

### ML Fundamentals

- Features
- Labels
- Target
- Training
- Prediction
- Generalization
- Overfitting
- Underfitting

### Supervised Learning

Regression

- Linear Regression

Classification

- Binary Classification
- Multiclass Classification

Algorithms

- Decision Trees
- Random Forest
- Gradient Boosting

### Unsupervised Learning

- K-Means
- PCA

### Model Interpretation

- Feature Importance
- Performance Metrics
- Result Interpretation

### Applications

- Product Quality Prediction
- Customer Segmentation
- Biotechnology
- SaaS Analytics

Deliverables

Each algorithm must include

- intuition
- mathematics
- visualization
- sklearn implementation
- real dataset
- exercises
- notebook
- lab

---

# Final Project

Students must complete one end-to-end Machine Learning project.

Pipeline

Problem

↓

Data Collection

↓

Exploratory Data Analysis

↓

Data Cleaning

↓

Feature Engineering

↓

Model Training

↓

Model Evaluation

↓

Interpretation

↓

Presentation

Possible domains

- Biotechnology
- Healthcare
- Agriculture
- Customer Analytics
- SaaS Metrics

---

# Repository Generation Rules

For every lesson OpenCode must generate

1. lesson.md
2. notebook.ipynb
3. quiz.md
4. lab.md
5. assignment.md
6. figures
7. references
8. glossary

Every lesson must contain

- learning objectives
- prerequisites
- concepts
- mathematical intuition
- Python examples
- biological examples whenever possible
- SaaS examples whenever possible
- summary
- key takeaways

---

# Dependency Graph

Students must learn topics in this order

Artificial Intelligence

↓

Python

↓

Statistics

↓

Exploratory Data Analysis

↓

Machine Learning

↓

Model Evaluation

↓

Projects

Do not generate lessons that require concepts from future modules.

---

# Course Philosophy

This course emphasizes learning by building.

Every theoretical lesson should be followed by practical coding.

Students should finish the course with a portfolio of notebooks, labs, and Machine Learning projects rather than only lecture notes.
