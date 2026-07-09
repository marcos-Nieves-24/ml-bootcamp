# Rubric: Disease Diagnosis from Gene Expression Data

**Total points: 100**

## Task 1: Data Loading and Exploration (15 points)

| Criterio | Excellent (15) | Good (11) | Adequate (7) | Poor (3) |
|----------|----------------|-----------|--------------|----------|
| Data loading | Loaded correctly with error handling | Loaded correctly | Loaded with minor issues | Not loaded or incorrect |
| Data inspection | Displayed head, info, describe, shape, class distribution | Displayed most inspections | Displayed basic info | Missing key inspections |
| Missing values | Checked and reported | Checked | Mentioned | Not checked |

## Task 2: Exploratory Data Analysis (20 points)

| Criterio | Excellent (20) | Good (15) | Adequate (10) | Poor (5) |
|----------|----------------|-----------|---------------|----------|
| Expression distributions | Clear KDE/histograms with legend and labels | Good plots with labels | Basic plots | Missing or unclear |
| Boxplot comparison | Well-formatted boxplot of differential genes | Good boxplot | Basic boxplot | Missing |
| Correlation heatmap | Annotated heatmap with interpretation | Good heatmap | Basic heatmap | Missing |
| Variance analysis | Top genes identified and plotted | Identified and plotted | Identified | Not done |

## Task 3: Feature Selection (10 points)

| Criterio | Excellent (10) | Good (7) | Adequate (5) | Poor (2) |
|----------|----------------|----------|--------------|----------|
| Variance selection | Top 10 selected correctly | Selected with minor issue | Selected | Not done |
| Train/test split | Stratified split, correct proportions | Correct split | Basic split | Missing |

## Task 4: Model Training (25 points)

| Criterio | Excellent (25) | Good (19) | Adequate (13) | Poor (6) |
|----------|----------------|-----------|---------------|----------|
| Logistic Regression | Trained correctly, printed metrics | Trained with minor issue | Trained | Not trained |
| Random Forest | Trained correctly, printed metrics | Trained with minor issue | Trained | Not trained |
| Code quality | Clean, documented, no errors | Mostly clean | Some issues | Poor quality |

## Task 5: Model Evaluation (15 points)

| Criterio | Excellent (15) | Good (11) | Adequate (7) | Poor (3) |
|----------|----------------|-----------|--------------|----------|
| Confusion matrices | Both models, clear visualization | Both models | One model | Missing |
| Classification reports | Both models, formatted | Both models | One model | Missing |
| ROC curves | Both models with AUC, well-plotted | Both models | One model | Missing |
| Model comparison | Bar chart comparing all metrics | Chart with most metrics | Basic comparison | Missing |

## Task 6: Feature Importance (10 points)

| Criterio | Excellent (10) | Good (7 | Adequate (5) | Poor (2) |
|----------|----------------|---------|--------------|----------|
| Importance extraction | RF importance extracted, top 10 plotted | Extracted and plotted | Extracted | Not done |
| Interpretation | Identified key genes with biological context | Good interpretation | Basic | Missing |

## Task 7: Biological Interpretation (5 points)

| Criterio | Excellent (5) | Good (4) | Adequate (3) | Insuficiente (1) |
|----------|---------------|----------|--------------|----------|
| Discussion | Insightful discussion with implications and limitations | Good discussion | Basic discussion | Missing or superficial |

## Code Quality and Presentation

| Criterio | Puntos |
|----------|--------|
| Code executes without errors | −5 if errors present |
| All visualizations have titles, axis labels, legends | −2 per missing element |
| Professional formatting | −2 for poor formatting |
