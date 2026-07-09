#!/usr/bin/env python3
"""Generate 15 interactive Plotly figures for Module 4: Machine Learning.

Output: HTML files (interactive) + static PNG copies.
Run: python scripts/figures/module04_figures_plotly.py
"""

import numpy as np
import plotly.graph_objects as go
import plotly.express as px
from plotly.subplots import make_subplots
from pathlib import Path
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.tree import DecisionTreeClassifier, DecisionTreeRegressor
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.decomposition import PCA
from sklearn.preprocessing import PolynomialFeatures, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, auc, silhouette_score
from sklearn.metrics import roc_curve as sk_roc_curve
from sklearn.datasets import load_iris, load_breast_cancer, load_diabetes, make_classification, make_blobs
from sklearn.inspection import permutation_importance as sk_permutation_importance
from sklearn.cluster import KMeans

FIGS_DIR = Path(__file__).resolve().parent.parent.parent / "figures" / "module04"
FIGS_DIR.mkdir(parents=True, exist_ok=True)


def _save(fig, name):
    """Save as interactive HTML + static PNG."""
    fig.write_html(str(FIGS_DIR / f"{name}_plotly.html"))
    fig.write_image(str(FIGS_DIR / f"{name}_plotly.png"), width=900, height=550)
    print(f"  ✓ {name}")


def bias_variance_demo():
    np.random.seed(42)
    X = np.linspace(0, 1, 20).reshape(-1, 1)
    y = np.sin(2 * np.pi * X).ravel() + np.random.normal(0, 0.2, 20)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)
    degrees = [1, 4, 15]

    fig = make_subplots(rows=1, cols=3, subplot_titles=[f'Degree {d}' for d in degrees],
                        shared_yaxes=True)
    X_plot = np.linspace(0, 1, 200)

    for i, deg in enumerate(degrees):
        poly = PolynomialFeatures(degree=deg)
        model = LinearRegression().fit(poly.fit_transform(X_train), y_train)
        y_plot = model.predict(poly.transform(X_plot.reshape(-1, 1)))

        fig.add_trace(go.Scatter(x=X_train.flatten(), y=y_train, mode='markers',
                                 name='Train', marker=dict(opacity=0.6)), row=1, col=i+1)
        fig.add_trace(go.Scatter(x=X_test.flatten(), y=y_test, mode='markers',
                                 name='Test', marker=dict(opacity=0.6)), row=1, col=i+1)
        fig.add_trace(go.Scatter(x=X_plot, y=y_plot, mode='lines',
                                 name='Model', line=dict(color='red', width=2)), row=1, col=i+1)

    fig.update_layout(title_text='Bias-Variance Tradeoff', height=400, width=1000)
    fig.update_yaxes(range=[-1.5, 1.5])
    _save(fig, 'bias_variance_demo')


def simple_linear_regression():
    np.random.seed(42)
    X = np.random.rand(50, 1) * 10
    y = 2.5 * X.ravel() + 1.3 + np.random.normal(0, 1.5, 50)
    model = LinearRegression().fit(X, y)
    X_line = np.linspace(0, 10, 100)
    y_line = model.predict(X_line.reshape(-1, 1))

    fig = go.Figure()
    fig.add_trace(go.Scatter(x=X.flatten(), y=y, mode='markers', name='Data',
                             marker=dict(color='#1E88E5', size=8, opacity=0.7)))
    fig.add_trace(go.Scatter(x=X_line, y=y_line, mode='lines', name=f'y = {model.coef_[0]:.2f}x + {model.intercept_:.2f}',
                             line=dict(color='red', width=3)))
    fig.update_layout(title='Simple Linear Regression',
                      xaxis_title='Feature (x)', yaxis_title='Target (y)',
                      hovermode='x unified')
    _save(fig, 'simple_linear_regression')


def decision_boundary():
    X, y = make_classification(n_samples=200, n_features=2, n_redundant=0,
                                n_clusters_per_class=1, class_sep=1.5, random_state=42)
    model = LogisticRegression().fit(X, y)
    xx, yy = np.meshgrid(np.linspace(-3, 3, 100), np.linspace(-3, 3, 100))
    Z = model.predict_proba(np.c_[xx.ravel(), yy.ravel()])[:, 1].reshape(xx.shape)

    fig = go.Figure()
    fig.add_trace(go.Contour(x=xx[0], y=yy[:, 0], z=Z, colorscale='RdBu',
                              opacity=0.4, contours=dict(showlabels=True),
                              colorbar=dict(title='Probability')))
    fig.add_trace(go.Scatter(x=X[:, 0], y=X[:, 1], mode='markers',
                             marker=dict(color=y, colorscale='RdBu', size=8, line=dict(width=1, color='black')),
                             text=[f'Class {c}' for c in y], hoverinfo='text'))
    fig.update_layout(title='Logistic Regression Decision Boundary',
                      xaxis_title='Feature 1', yaxis_title='Feature 2', height=550)
    _save(fig, 'decision_boundary')


def roc_curve():
    data = load_breast_cancer()
    X_tr, X_te, y_tr, y_te = train_test_split(data.data, data.target, test_size=0.2, random_state=42)
    model = LogisticRegression(max_iter=5000).fit(X_tr, y_tr)
    fpr, tpr, _ = sk_roc_curve(y_te, model.predict_proba(X_te)[:, 1])
    roc_auc = auc(fpr, tpr)

    fig = go.Figure()
    fig.add_trace(go.Scatter(x=fpr, y=tpr, mode='lines', name=f'ROC (AUC = {roc_auc:.3f})',
                             line=dict(color='#1E88E5', width=3), fill='tozeroy'))
    fig.add_trace(go.Scatter(x=[0, 1], y=[0, 1], mode='lines', name='Random',
                             line=dict(color='gray', dash='dash')))
    fig.update_layout(title='ROC Curve',
                      xaxis_title='False Positive Rate',
                      yaxis_title='True Positive Rate (Recall)',
                      width=600, height=500)
    _save(fig, 'roc_curve')


def decision_tree_iris():
    iris = load_iris()
    tree = DecisionTreeClassifier(max_depth=3, random_state=42)
    tree.fit(iris.data[:, [0, 2]], iris.target)

    # Scatter of decision regions
    xx, yy = np.meshgrid(np.linspace(4, 8, 200), np.linspace(1, 7, 200))
    Z = tree.predict(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)

    fig = go.Figure()
    fig.add_trace(go.Contour(x=xx[0], y=yy[:, 0], z=Z, showscale=False,
                              colorscale='Viridis', opacity=0.3))
    fig.add_trace(go.Scatter(x=iris.data[:, 0], y=iris.data[:, 2],
                             mode='markers',
                             marker=dict(color=iris.target, colorscale='Viridis',
                                         size=8, line=dict(width=1, color='black')),
                             text=[iris.target_names[t] for t in iris.target],
                             hoverinfo='text'))
    fig.update_layout(title='Decision Tree: Iris Decision Regions',
                      xaxis_title='Sepal Length', yaxis_title='Petal Length', height=550)
    _save(fig, 'decision_tree_iris')


def tree_vs_forest_boundary():
    X, y = make_classification(n_samples=300, n_features=2, n_redundant=0,
                                n_clusters_per_class=1, class_sep=0.8, random_state=42)
    tree = DecisionTreeClassifier(random_state=42).fit(X, y)
    forest = RandomForestClassifier(n_estimators=100, random_state=42).fit(X, y)
    xx, yy = np.meshgrid(np.linspace(X[:, 0].min()-0.5, X[:, 0].max()+0.5, 100),
                         np.linspace(X[:, 1].min()-0.5, X[:, 1].max()+0.5, 100))

    fig = make_subplots(rows=1, cols=2, subplot_titles=['Single Tree', 'Random Forest (100 trees)'])
    for ax_idx, (model, name) in enumerate([(tree, 'Tree'), (forest, 'Forest')], 1):
        Z = model.predict(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)
        fig.add_trace(go.Contour(x=xx[0], y=yy[:, 0], z=Z, showscale=False,
                                  colorscale='RdBu', opacity=0.3), row=1, col=ax_idx)
        fig.add_trace(go.Scatter(x=X[:, 0], y=X[:, 1], mode='markers',
                                 marker=dict(color=y, colorscale='RdBu', size=7,
                                             line=dict(width=1, color='black')),
                                 showlegend=False), row=1, col=ax_idx)
    fig.update_layout(title='Decision Tree vs Random Forest', height=450, width=900)
    _save(fig, 'tree_vs_forest_boundary')


def kmeans_different_k():
    X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.8, random_state=42)
    fig = make_subplots(rows=2, cols=3, subplot_titles=[f'K = {k}' for k in [2, 3, 4, 5, 6, 8]])
    for i, K in enumerate([2, 3, 4, 5, 6, 8], 1):
        km = KMeans(n_clusters=K, random_state=42, n_init=10).fit(X)
        fig.add_trace(go.Scatter(x=X[:, 0], y=X[:, 1], mode='markers',
                                 marker=dict(color=km.labels_, colorscale='Viridis', size=6, opacity=0.6),
                                 showlegend=False), row=(i-1)//3+1, col=(i-1)%3+1)
        fig.add_trace(go.Scatter(x=km.cluster_centers_[:, 0], y=km.cluster_centers_[:, 1],
                                 mode='markers', marker=dict(color='red', symbol='x', size=12),
                                 showlegend=False), row=(i-1)//3+1, col=(i-1)%3+1)
    fig.update_layout(title='K-Means Clustering with Different K', height=700, width=1000)
    _save(fig, 'kmeans_different_k')


def elbow_silhouette():
    X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.8, random_state=42)
    K_range = list(range(2, 11))
    inertias, silhouettes = [], []
    for K in K_range:
        km = KMeans(n_clusters=K, random_state=42, n_init=10).fit(X)
        inertias.append(km.inertia_)
        silhouettes.append(silhouette_score(X, km.labels_))

    fig = make_subplots(rows=1, cols=2, subplot_titles=['Elbow Method', 'Silhouette Score'])
    fig.add_trace(go.Scatter(x=K_range, y=inertias, mode='lines+markers', name='Inertia',
                             line=dict(color='#1E88E5', width=2)), row=1, col=1)
    fig.add_trace(go.Scatter(x=K_range, y=silhouettes, mode='lines+markers', name='Silhouette',
                             line=dict(color='#E53935', width=2)), row=1, col=2)
    fig.update_layout(title='Optimal K Selection', height=400, width=900)
    _save(fig, 'elbow_silhouette')


def pca_iris():
    iris = load_iris()
    pca = PCA(n_components=2)
    X_pca = pca.fit_transform(iris.data)

    fig = go.Figure()
    for target, name, color in zip([0, 1, 2], iris.target_names, ['#1E88E5', '#43A047', '#E53935']):
        mask = iris.target == target
        fig.add_trace(go.Scatter(x=X_pca[mask, 0], y=X_pca[mask, 1], mode='markers',
                                 name=name, marker=dict(color=color, size=8, opacity=0.7)))
    fig.update_layout(title=f'PCA of Iris Dataset (2 Components)',
                      xaxis_title=f'PC1 ({pca.explained_variance_ratio_[0]:.1%} variance)',
                      yaxis_title=f'PC2 ({pca.explained_variance_ratio_[1]:.1%} variance)',
                      height=550)
    _save(fig, 'pca_iris')


def pca_variance():
    data = load_breast_cancer()
    X = StandardScaler().fit_transform(data.data)
    pca = PCA().fit(X)
    cumulative = np.cumsum(pca.explained_variance_ratio_)

    fig = go.Figure()
    fig.add_trace(go.Bar(x=list(range(1, len(cumulative)+1)), y=pca.explained_variance_ratio_,
                          name='Individual', marker=dict(color='#1E88E5', opacity=0.7)))
    fig.add_trace(go.Scatter(x=list(range(1, len(cumulative)+1)), y=cumulative, mode='lines+markers',
                              name='Cumulative', line=dict(color='#E53935', width=3)))
    fig.add_hline(y=0.9, line_dash='dash', line_color='green', annotation_text='90% threshold')
    fig.update_layout(title='PCA: Explained Variance',
                      xaxis_title='Principal Component',
                      yaxis_title='Explained Variance Ratio', height=500)
    _save(fig, 'pca_variance')


def pca_breast_cancer():
    data = load_breast_cancer()
    X = StandardScaler().fit_transform(data.data)
    pca = PCA(n_components=2)
    X_pca = pca.fit_transform(X)

    fig = go.Figure()
    for target, name, color in zip([0, 1], ['Benign', 'Malignant'], ['#1E88E5', '#E53935']):
        mask = data.target == target
        fig.add_trace(go.Scatter(x=X_pca[mask, 0], y=X_pca[mask, 1], mode='markers',
                                 name=name, marker=dict(color=color, size=6, opacity=0.6)))
    fig.update_layout(title=f'Breast Cancer: 2D PCA ({pca.explained_variance_ratio_.sum():.1%} variance)',
                      xaxis_title='PC1', yaxis_title='PC2', height=550)
    _save(fig, 'pca_breast_cancer')


def boosting_sequential():
    np.random.seed(42)
    X = np.sort(np.random.rand(80, 1) * 10, axis=0)
    y = np.sin(X).ravel() + np.random.normal(0, 0.15, 80)
    F = np.zeros_like(y)

    fig = make_subplots(rows=1, cols=5, subplot_titles=[f'Stage {i+1}' for i in range(5)])
    for i in range(5):
        residual = y - F
        tree = DecisionTreeRegressor(max_depth=3).fit(X, residual)
        F += 0.5 * tree.predict(X)
        fig.add_trace(go.Scatter(x=X.flatten(), y=y, mode='markers',
                                 marker=dict(opacity=0.3), showlegend=False), row=1, col=i+1)
        fig.add_trace(go.Scatter(x=X.flatten(), y=F, mode='markers',
                                 marker=dict(color='red', size=6), showlegend=False), row=1, col=i+1)
    fig.update_layout(title='Gradient Boosting: Sequential Residual Fitting',
                      height=350, width=1200)
    _save(fig, 'boosting_sequential')


def plot_permutation_importance():
    diabetes = load_diabetes()
    X_tr, X_te, y_tr, y_te = train_test_split(diabetes.data, diabetes.target, test_size=0.2, random_state=42)
    model = RandomForestRegressor(n_estimators=50, max_depth=10, random_state=42).fit(X_tr, y_tr)
    result = sk_permutation_importance(model, X_te, y_te, random_state=42)
    sorted_idx = result.importances_mean.argsort()

    fig = go.Figure()
    fig.add_trace(go.Bar(x=result.importances_mean[sorted_idx],
                          y=[diabetes.feature_names[i] for i in sorted_idx],
                          orientation='h', marker=dict(color='#1E88E5', opacity=0.7),
                          error_x=dict(array=result.importances_std[sorted_idx])))
    fig.update_layout(title='Feature Importance (Permutation)',
                      xaxis_title='Permutation Importance', height=500)
    _save(fig, 'permutation_importance')


def partial_dependence():
    diabetes = load_diabetes()
    X_tr, X_te, y_tr, y_te = train_test_split(diabetes.data, diabetes.target, test_size=0.2, random_state=42)
    model = RandomForestRegressor(n_estimators=50, max_depth=10, random_state=42).fit(X_tr, y_tr)

    fig = make_subplots(rows=1, cols=2, subplot_titles=[diabetes.feature_names[0], diabetes.feature_names[2]])
    for idx, col in enumerate([0, 2], 1):
        grid = np.linspace(X_te[:, col].min(), X_te[:, col].max(), 20)
        pdp = []
        for val in grid:
            X_copy = X_te.copy()
            X_copy[:, col] = val
            pdp.append(model.predict(X_copy).mean())
        fig.add_trace(go.Scatter(x=grid, y=pdp, mode='lines+markers',
                                 name=diabetes.feature_names[col]), row=1, col=idx)
    fig.update_layout(title='Partial Dependence Plots', height=400, width=900)
    _save(fig, 'partial_dependence')


def pdp_breast_cancer():
    data = load_breast_cancer()
    X_tr, X_te, y_tr, y_te = train_test_split(data.data, data.target, test_size=0.2, random_state=42)
    model = RandomForestClassifier(n_estimators=50, max_depth=10, random_state=42).fit(X_tr, y_tr)

    fig = make_subplots(rows=1, cols=2, subplot_titles=['worst radius', 'worst concave points'])
    for idx, feat_name in enumerate(['worst radius', 'worst concave points'], 1):
        col = list(data.feature_names).index(feat_name)
        grid = np.linspace(X_te[:, col].min(), X_te[:, col].max(), 20)
        pdp = []
        for val in grid:
            X_copy = X_te.copy()
            X_copy[:, col] = val
            pdp.append(model.predict_proba(X_copy)[:, 1].mean())
        fig.add_trace(go.Scatter(x=grid, y=pdp, mode='lines+markers', name=feat_name), row=1, col=idx)
    fig.update_layout(title='Partial Dependence: Breast Cancer', height=400, width=900)
    _save(fig, 'pdp_breast_cancer')


def main():
    print("Generating Module 4 Plotly figures...")
    bias_variance_demo()
    simple_linear_regression()
    decision_boundary()
    roc_curve()
    decision_tree_iris()
    tree_vs_forest_boundary()
    kmeans_different_k()
    elbow_silhouette()
    pca_iris()
    pca_variance()
    pca_breast_cancer()
    boosting_sequential()
    plot_permutation_importance()
    partial_dependence()
    pdp_breast_cancer()
    print("Module 4 Plotly figures complete!")


if __name__ == "__main__":
    main()
