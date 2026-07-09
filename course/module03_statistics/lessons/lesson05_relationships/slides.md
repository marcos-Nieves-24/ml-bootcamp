# Slides: Relationships Between Variables

## Diapositiva 1: Title
- Relationships Between Variables
- Module 3, Lesson 5

## Diapositiva 2: Learning Objectives
- Compute and interpret covariance
- Compare Pearson vs Spearman correlation
- Create correlation matrix heatmaps

## Diapositiva 3: Why Relationships Matter
- ML models learn relationships
- Feature selection removes redundant features
- Multicollinearity degrades model stability

## Diapositiva 4: Covariance
- How two variables vary together
- Cov(X,Y) = (1/n) Σ (x-mean(x))(y-mean(y))
- Scale-dependent: can't compare across units

## Diapositiva 5: Pearson Correlation
- Normalized covariance: [-1, 1]
- r = 1: perfect positive linear
- r = -1: perfect negative linear
- r = 0: no linear relationship

## Diapositiva 6: Spearman Correlation
- Based on ranks, not raw values
- Measures monotonic relationships
- Robust to outliers
- No normality assumption

## Diapositiva 7: Pearson vs Spearman
- Pearson: linear, sensitive to outliers
- Spearman: monotonic, robust
- Use Spearman when data is skewed or non-linear

## Diapositiva 8: Correlation Matrix
- Square matrix of pairwise correlations
- Diagonal is always 1
- Detects multicollinearity (|r| > 0.8)
- Visualize with heatmap

## Diapositiva 9: Correlation ≠ Causation
- I
- Correlated variables may both be caused by a third
- Always consider confounding variables

## Diapositiva 10: Key Takeaways
- Covariance → Pearson → [-1,1]
- Spearman for non-linear monotonic
- Visualize with scatter plots
- Correlation ≠ causation
- Use heatmaps for feature relationships
