# AGENTS.md — ML Bootcamp

## Project Overview

This is a university-level Machine Learning course repository: **Machine Learning for Data Analysis and SaaS**. The course targets undergraduate students in Biotechnology, Bioinformatics, Biological Sciences, Data Analysis, and Engineering.

## Repository Structure

```
ml-bootcamp/
├── course/
│   ├── module01_ai/           # 7 lecciones: Intro to AI
│   ├── module02_python/       # 16 lecciones: Python programming
│   ├── module03_statistics/   # 10 lecciones: Statistics for ML
│   ├── module04_machine_learning/ # 10 lecciones + 4 subunits: ML
│   ├── module05_ethics/       # 7 lecciones: AI Ethics
│   ├── case_studies/          # 4 case studies
│   ├── exams/                 # Midterm + Final
│   └── projects/              # Final project
├── datasets/synthetic/        # 9 synthetic datasets
├── docs/                      # MkDocs site files
│   ├── syllabus/ 
│   ├── instructor/
│   ├── grading/
│   └── references/
├── figures/                   # Generated figures (PNG/SVG)
├── scripts/                   # Automation scripts
├── tests/                     # Pytest test suite
├── mkdocs.yml                 # MkDocs config (Material theme)
└── vercel.json                # Vercel deployment config
```

## Key Conventions

- Each lesson has: `lesson.md`, `notebook.ipynb`, `quiz.md`, `lab.md`, `assignment.md`, `slides.md`, `references.bib`
- Lessons follow `LESSON_STRUCTURE.md` template
- All Python code must be PEP8 compliant
- Tests run via pytest in `tests/`
- Site builds with `mkdocs build` from `mkdocs.yml`
- Deployed via Vercel (vercel.json)

## Stack

- Python 3.12+, Jupyter Notebooks
- numpy, pandas, scikit-learn, matplotlib, seaborn
- pytest, pytest-notebook for testing
- MkDocs + Material theme for documentation
- mkdocs-jupyter for notebook rendering

## SDD Context

- Artifact store: Engram
- Key topic keys: `sdd/ml-bootcamp-enhance/proposal`, `sdd/ml-bootcamp-enhance/spec`, `sdd/ml-bootcamp-enhance/design`, `sdd/ml-bootcamp-enhance/tasks`
- Init: `sdd-init/ml-bootcamp`
