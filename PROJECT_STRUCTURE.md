# PROJECT_STRUCTURE.md

# Repository Structure

This repository contains all the material required to develop, maintain, and publish the university course:

> **Machine Learning for Data Analysis and SaaS**

The repository is organized following a modular architecture inspired by software engineering projects.

The AI assistant (OpenCode) MUST always follow this structure when creating, modifying, or organizing content.

---

# Root Directory

```
ml-bootcamp/
```

Contains the entire course.

No educational content should be placed directly in the root directory except documentation files.

---

# docs/

Contains documentation intended for instructors.

```
docs/

    syllabus/

    instructor/

    grading/

    references/
```

## syllabus/

Contains

- official syllabus
- course description
- learning outcomes
- curriculum documents

## instructor/

Contains

- teaching notes
- semester planning
- class schedules
- instructor checklists

## grading/

Contains

- grading rubrics
- evaluation policies
- assessment criteria

## references/

Contains

- bibliographies
- citation databases
- recommended books
- recommended papers

---

# course/

Contains the educational content.

Every module has its own directory.

```
course/

    module01_ai/

    module02_python/

    module03_statistics/

    module04_machine_learning/
```

Every module must contain

```
README.md

lessons/

slides/

figures/

notebooks/

labs/

assignments/

quizzes/

references/
```

Modules must be independent.

---

# lessons/

Contains lecture material.

Each lesson should be stored inside its own directory.

Example

```
lesson01_intro_ai/

lesson.md

figures/

references.bib
```

Every lesson must include

- learning objectives

- prerequisites

- theoretical explanation

- intuition

- mathematical concepts

- biological examples

- SaaS examples

- summary

- glossary

- references

---

# notebooks/

Contains Jupyter notebooks.

Each notebook should accompany one lesson.

Notebook naming

```
01_intro.ipynb

02_linear_regression.ipynb

03_clustering.ipynb
```

Every notebook must contain

Markdown

↓

Code

↓

Output

↓

Interpretation

↓

Exercises

---

# labs/

Contains practical classroom activities.

Each lab should include

```
README.md

student.ipynb

solution.ipynb

dataset.csv
```

---

# assignments/

Contains homework.

Each assignment should include

```
instructions.md

rubric.md

starter_code.ipynb

solution.ipynb
```

---

# quizzes/

Contains formative assessments.

Each quiz includes

```
questions.md

answer_key.md
```

Quizzes may include

- multiple choice

- true/false

- coding questions

- interpretation questions

---

# exams/

Contains

- midterm

- final exam

- answer keys

- grading rubrics

---

# projects/

Contains capstone projects.

Each project includes

```
README.md

dataset/

starter_code/

instructions.md

rubric.md

solution/
```

Projects should integrate multiple modules.

---

# datasets/

Contains all datasets used in the course.

```
datasets/

raw/

processed/

synthetic/

external/
```

Datasets must never be duplicated.

Each dataset folder should include

```
README.md

metadata.json

license.txt
```

README must explain

- source

- variables

- citation

- preprocessing

---

# figures/

Contains reusable figures.

Figures should never be manually edited.

All figures should be generated from Python scripts whenever possible.

Accepted formats

- SVG

- PNG

- PDF

---

# scripts/

Contains automation scripts.

Examples

```
generate_figures.py

generate_notebooks.py

generate_datasets.py

build_course.py

publish_site.py
```

Scripts should never contain educational content.

---

# prompts/

Contains reusable prompts used with OpenCode.

Examples

```
lesson_generation.md

quiz_generation.md

dataset_generation.md

proofreading.md

slides.md

scientific_review.md
```

Prompts should be reusable across modules.

---

# website/

Contains files used to publish the course online.

May include

- Quarto

- MkDocs

- Docusaurus

- GitHub Pages

---

# tests/

Contains automated tests.

Examples

```
test_notebooks.py

test_links.py

test_datasets.py

test_examples.py
```

All executable notebooks should be tested.

---

# .github/

Contains GitHub configuration.

Including

```
workflows/

ISSUE_TEMPLATE/

PULL_REQUEST_TEMPLATE/
```

GitHub Actions should automatically

- execute notebooks

- validate datasets

- build documentation

- publish website

---

# General Rules

OpenCode must always follow these rules.

1. Never place files in the wrong directory.

2. Never duplicate datasets.

3. Never create notebooks without corresponding lessons.

4. Every lesson should have:

    - notebook

    - quiz

    - lab

    - references

5. Every Python example must execute without errors.

6. Every dataset must contain documentation.

7. Figures should be reproducible.

8. Educational content must remain modular.

9. Prefer improving existing material over creating duplicate files.

10. Every change should preserve consistency across the entire repository.

---

# Repository Philosophy

The repository is treated as a software project.

Every educational artifact should be:

- version controlled

- reproducible

- testable

- documented

- reusable

- modular

The objective is not only to create lecture notes, but to build a complete, maintainable, open-source university course that can evolve over time through collaboration with OpenCode.
