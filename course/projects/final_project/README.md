# Final Project — End-to-End Machine Learning Pipeline

## Objective

Apply the complete machine learning workflow to a real-world problem. Choose a domain (biotechnology, healthcare, SaaS, or customer analytics) and build an end-to-end solution from data exploration to model deployment recommendations.

## Learning Outcomes

- Apply the full ML pipeline independently
- Make design decisions about data preprocessing, feature engineering, and model selection
- Evaluate and compare different models using appropriate metrics
- Communicate findings through data storytelling
- Document and present results professionally

## Dataset Options

Choose ONE of the following datasets from `datasets/synthetic/`:

| Dataset | Domain | Problem Type |
|---------|--------|-------------|
| Biotech Diagnosis | Healthcare/Biotech | Classification |
| Biotech Quality | Biotech Manufacturing | Classification/Regression |
| Clinical Trial | Healthcare | Classification |
| Customer Churn | SaaS | Classification |
| Customer Segments | SaaS/Marketing | Clustering |
| Gene Expression | Bioinformatics | Classification |
| Protein Solubility | Biotech | Regression |
| SaaS Metrics | SaaS | Regression/Classification |

## Pipeline Requirements

### 1. Problem Definition (5 points)
- Define the business problem
- State the ML problem type (classification, regression, clustering)
- Define success metrics

### 2. Data Loading & Exploration (15 points)
- Load and inspect the dataset
- Summary statistics
- Visualize distributions and relationships
- Identify data quality issues

### 3. Data Preprocessing (15 points)
- Handle missing values
- Encode categorical variables
- Feature scaling
- Train/test split
- Handle class imbalance if applicable

### 4. Feature Engineering (10 points)
- Create relevant features
- Feature selection or dimensionality reduction
- Justify each feature

### 5. Model Training (20 points)
- Train at least 3 different models
- Use cross-validation
- Hyperparameter tuning (GridSearchCV or RandomizedSearchCV)

### 6. Model Evaluation (15 points)
- Compare models using appropriate metrics
- Confusion matrix (for classification)
- ROC curves / PR curves
- Feature importance analysis

### 7. Interpretation & Conclusion (10 points)
- What did you learn from the data?
- Which model works best and why?
- Business implications
- Limitations and future work

### 8. Presentation (10 points)
- Jupyter notebook with clear markdown explanations
- Well-organized code with comments
- Visualizations with interpretations
- Final recommendations

## Entregables

1. **Jupyter Notebook** (`project.ipynb`) — Complete analysis with code, visualizations, and markdown
2. **Presentation** (`presentation.md`) — 5-7 slide summary for stakeholders
3. **README** — Project overview and instructions to reproduce

## Submission Checklist

- [ ] All code cells execute without errors
- [ ] Markdown cells explain each step
- [ ] At least 5 visualizations with interpretations
- [ ] 3+ models compared
- [ ] Final recommendation clearly stated
- [ ] Limitations discussed

## Grading Rubric

| Criterio | Puntos |
|----------|--------|
| Problem definition & business context | 5 |
| Data exploration & visualization | 15 |
| Data preprocessing & feature engineering | 25 |
| Model training & tuning | 20 |
| Model evaluation & comparison | 15 |
| Interpretation & recommendations | 10 |
| Code quality & documentation | 10 |
| **Total** | **100** |
