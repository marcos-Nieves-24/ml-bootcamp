# Instructions: Disease Diagnosis from Gene Expression Data

## Problem Statement

You are a bioinformatics analyst working at a genomics laboratory. The lab has collected gene expression data from 100 patients — 50 diagnosed with a genetic disease and 50 healthy controls. Your task is to build a machine learning model that can diagnose the disease from the expression levels of 20 candidate genes.

Your analysis will help identify which genes are most predictive of the disease, potentially guiding future biological research and clinical decision-making.

## Tasks

### Task 1: Data Loading and Exploration (15 points)

1. Load the dataset using pandas.
2. Display the first 5 rows, data types, and basic statistics.
3. Check for missing values.
4. Print the shape of the dataset and class distribution.

### Task 2: Exploratory Data Analysis (20 points)

1. Plot the distribution of gene expression for each class using histograms or KDE plots.
2. Create a boxplot comparing expression levels of the 8 differentially expressed genes between classes.
3. Compute the correlation matrix between genes and visualize it as a heatmap.
4. Identify the top 5 genes with the highest variance across all samples.
5. Plot a heatmap of the top 5 high-variance genes.

### Task 3: Feature Selection (10 points)

1. Select the top 10 genes by variance.
2. Separate features (X) and target (y).
3. Split the data into training (70%) and testing (30%) sets with stratification.
4. Standardize the features using StandardScaler.

### Task 4: Model Training (25 points)

Train the following models on the training data:

1. **Logistic Regression**:
   - Train with default parameters.
   - Print training and testing accuracy.

2. **Random Forest**:
   - Train with 100 trees.
   - Print training and testing accuracy.

### Task 5: Model Evaluation (15 points)

For both models, compute and display:

1. Confusion matrix
2. Classification report (precision, recall, F1-score)
3. ROC curve and AUC score
4. Compare the models using a bar chart of metrics

### Task 6: Feature Importance Interpretation (10 points)

1. Extract feature importances from the Random Forest model.
2. Plot the top 10 most important genes.
3. Identify which biological pathways are most affected based on the important genes.

### Task 7: Biological Interpretation (5 points)

Write a short paragraph discussing:

- Which genes are most predictive of the disease.
- How these results might guide further biological research.
- Limitations of the study.

## Submission

Submit a completed notebook with all code cells executed and all visualizations displayed. Add markdown cells to explain your reasoning at each step.

## Grading

See `rubric.md` for detailed grading criteria. Total: 100 points.
