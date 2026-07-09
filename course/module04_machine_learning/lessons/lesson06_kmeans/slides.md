# Slides: K-Means Clustering

## Diapositiva 1: Title
K-Means Clustering — Discovering Groups in Unlabeled Data

## Diapositiva 2: Motivation
- Discover disease subtypes from gene expression
- Segment customers for targeted marketing
- Also: image compression, anomaly detection
- No labels needed — pure discovery

## Diapositiva 3: Supervised vs. Unsupervised
| | Supervised | Unsupervised |
|--|-----------|--------------|
| Labels | Yes | No |
| Goal | Predict | Discover structure |
| Examples | RF, Logistic Regression | K-Means, PCA |

## Diapositiva 4: K-Means Algorithm
1. Choose K
2. Initialize K centroids
3. **Assign:** each point → nearest centroid
4. **Update:** centroid = mean of points
5. Repeat 3-4 until convergence

## Diapositiva 5: Distance Metric
- Euclidean distance: √Σ(xⱼ - μₖⱼ)²
- Features with large scales dominate

## Diapositiva 6: Inertia (WCSS)
- Sum of squared distances from points to centroids
- Lower = more compact clusters
- Always decreases as K increases

## Diapositiva 7: Choosing K — Elbow Method
- Plot inertia vs. K
- Look for "elbow" (diminishing returns)
- Simple but subjective

## Diapositiva 8: Choosing K — Silhouette Score
- Measures cohesion vs. separation
- Range: -1 to 1
- Higher = better
- More objective than elbow

## Diapositiva 9: Importance of Scaling
- K-Means uses Euclidean distance
- Features with larger scales dominate
- Always use StandardScaler first

## Diapositiva 10: Demo — Synthetic Data
- 4 blobs in 2D
- Elbow at 4, silhouette max at 4
- Centroids match blob centers

## Diapositiva 11: Demo — Iris Clustering
- 3 species, 4 features
- K-Means recovers species well
- Some confusion: versicolor ↔ virginica

## Diapositiva 12: Biotechnology Example
- Gene expression subtypes
- 3 subtypes simulated
- K-Means discovers them

## Diapositiva 13: SaaS Example — Customer Segmentation
- Annual spend, frequency, order value, tenure
- 4 segments: high-value, at-risk, new, dormant
- Each segment → different marketing strategy

## Diapositiva 14: Common Mistakes
- No scaling
- Assuming K is known
- Interpreting clusters as truth
- High-dimensional clustering (curse of dimensionality)

## Diapositiva 15: Summary
- K-Means: unsupervised grouping
- Iterative: assign → update
- Elbow + silhouette for K
- Scale features!
- Discover structure, don't confirm bias
