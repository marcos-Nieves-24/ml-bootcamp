# Rubric: SaaS Customer Churn Prediction

**Total points: 100**

## Task 1: Data Loading and Initial Exploration (10 points)

| Criteria | Excellent (10) | Good (7) | Adequate (4) | Poor (1) |
|----------|----------------|----------|--------------|----------|
| Data loading | Loaded correctly with error handling | Loaded correctly | Loaded with minor issues | Not loaded |
| Initial inspection | Displayed head, info, describe, shape, churn rate | Displayed most inspections | Basic inspection | Missing key items |
| Missing values | Checked and reported | Checked | Mentioned | Not checked |

## Task 2: Exploratory Data Analysis (20 points)

| Criteria | Excellent (20) | Good (15) | Adequate (10) | Poor (5) |
|----------|----------------|-----------|---------------|----------|
| Churn distribution | Clear visualization with percentages | Good plot | Basic plot | Missing |
| Feature distributions | KDE/hist for all numerical features with hue | Most features | Some features | Missing |
| Boxplots | Boxplots for all numerical features | Most features | Some features | Missing |
| Correlation heatmap | Annotated heatmap with insights | Good heatmap | Basic heatmap | Missing |
| Categorical analysis | Churn rate by contract type and payment method | One analysis | Basic | Missing |

## Task 3: Data Preprocessing (15 points)

| Criteria | Excellent (15) | Good (11) | Adequate (7) | Poor (3) |
|----------|----------------|-----------|--------------|----------|
| Encoding | Correct one-hot encoding of all categorical features | Correct encoding | Partial encoding | Missing |
| Train/test split | Stratified split, correct proportions | Correct split | Basic split | Missing |
| Scaling | Features scaled correctly | Scaled | Partial | Missing |

## Task 4: Model Training (25 points)

| Criteria | Excellent (25) | Good (19) | Adequate (13) | Poor (6) |
|----------|----------------|-----------|---------------|----------|
| Logistic Regression | Trained correctly, printed metrics | Trained | Partial | Not trained |
| Random Forest | Trained correctly, printed metrics | Trained | Partial | Not trained |
| Gradient Boosting | Trained correctly, printed metrics | Trained | Partial | Not trained |
| Code quality | Clean, documented, no errors | Mostly clean | Some issues | Poor quality |

## Task 5: Model Evaluation (15 points)

| Criteria | Excellent (15) | Good (11) | Adequate (7) | Poor (3) |
|----------|----------------|-----------|--------------|----------|
| Confusion matrices | All 3 models, heatmaps | All 3 models | One model | Missing |
| Classification reports | All 3 models, formatted | All 3 models | One model | Missing |
| ROC curves | All 3 on same plot with AUC | All 3 | One model | Missing |
| Comparison chart | Bar chart comparing all metrics | Most metrics | Basic | Missing |

## Task 6: Feature Importance (10 points)

| Criteria | Excellent (10) | Good (7) | Adequate (5) | Poor (2) |
|----------|----------------|----------|--------------|----------|
| RF Importance | Extracted, top 10 plotted | Extracted and plotted | Extracted | Not done |
| GBT Importance | Extracted, top 10 plotted | Extracted and plotted | Extracted | Not done |
| Top 3 drivers | Identified and discussed | Identified | Basic | Missing |

## Task 7: Business Recommendations (5 points)

| Criteria | Excellent (5) | Good (4) | Adequate (3) | Poor (1) |
|----------|---------------|----------|--------------|----------|
| Recommendations | 3 actionable, data-driven recommendations | 2 recommendations | 1 recommendation | Missing |
| Cost-benefit | Complete analysis with calculations and conclusion | Partial analysis | Basic calculation | Missing |

## Code Quality and Presentation

| Criteria | Points |
|----------|--------|
| Code executes without errors | −5 if errors present |
| All visualizations have titles, axis labels, legends | −2 per missing element |
| Professional formatting | −2 for poor formatting |
