# Instructions: SaaS Customer Churn Prediction

## Problem Statement

You are a data scientist at a SaaS company offering a project management platform. The company has 1,000 customers and is experiencing a churn rate of approximately 25%. Your CEO has asked you to build a predictive model that identifies customers at risk of churning so the company can proactively offer retention incentives.

Your analysis will directly impact business strategy: every customer retained saves the company money on acquisition costs and increases lifetime value. You need to recommend a cost-effective retention strategy based on your model's insights.

## Tasks

### Task 1: Data Loading and Initial Exploration (10 points)

1. Load the dataset using pandas.
2. Display the first 5 rows, data types, and basic statistics.
3. Check for missing values.
4. Print the dataset shape and churn rate.

### Task 2: Exploratory Data Analysis (20 points)

1. Plot the churn distribution (bar chart or pie chart).
2. Create histograms or KDE plots for numerical features, colored by churn status.
3. Plot boxplots comparing churned vs. retained customers for each numerical feature.
4. Create a correlation heatmap of numerical features.
5. Analyze churn rate by contract type (bar chart).
6. Analyze churn rate by payment method (bar chart).

### Task 3: Data Preprocessing (15 points)

1. Drop the CustomerID column.
2. Encode categorical variables using one-hot encoding.
3. Separate features (X) and target (y).
4. Split into training (70%) and testing (30%) sets with stratification.
5. Standardize numerical features using StandardScaler.

### Task 4: Model Training (25 points)

Train the following three classifiers:

1. **Logistic Regression**:
   - Train with default parameters.
   - Print training and testing accuracy.

2. **Random Forest**:
   - Train with 100 trees.
   - Print training and testing accuracy.

3. **Gradient Boosting**:
   - Train with 100 estimators.
   - Print training and testing accuracy.

### Task 5: Model Evaluation (15 points)

For all three models, compute and display:

1. Confusion matrix (visualize with heatmaps)
2. Classification report (precision, recall, F1-score for both classes)
3. ROC curves with AUC scores on the same axis
4. A comparison bar chart of all metrics across models

### Task 6: Feature Importance Analysis (10 points)

1. Extract feature importances from the Random Forest and Gradient Boosting models.
2. Plot the top 10 most important features for each.
3. Compare with Logistic Regression coefficients.
4. Identify the top 3 drivers of churn.

### Task 7: Business Recommendations & Cost-Benefit (5 points)

1. Based on your findings, recommend 3 business actions to reduce churn.
2. **Cost-benefit analysis**: Assume:
   - Customer acquisition cost (CAC): $500
   - Monthly revenue per customer: $75
   - Average customer lifetime for non-churning: 36 months
   - Retention discount offer: 20% off for 6 months ($90 discount per saved customer)
   - Assume your model can identify 60% of churning customers and retention saves 40% of those targeted.
   - Calculate: total savings vs. total cost of the retention program.
   - Is the program worth implementing?
