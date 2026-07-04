#!/usr/bin/env python3
"""Generate 15 code-based figures for Module 4: Machine Learning."""

import matplotlib
matplotlib.use('Agg')
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeClassifier, DecisionTreeRegressor, plot_tree
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.decomposition import PCA
from sklearn.preprocessing import PolynomialFeatures, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from sklearn.datasets import load_iris, load_breast_cancer, load_diabetes, make_classification, make_blobs
from sklearn.inspection import permutation_importance as sk_permutation_importance, PartialDependenceDisplay

FIGS_DIR = Path(__file__).resolve().parent.parent.parent / "figures" / "module04"
FIGS_DIR.mkdir(parents=True, exist_ok=True)


def bias_variance_demo():
    np.random.seed(42)
    X = np.linspace(0, 1, 20).reshape(-1, 1)
    y = np.sin(2 * np.pi * X).ravel() + np.random.normal(0, 0.2, 20)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)
    degrees = [1, 4, 15]
    fig, axes = plt.subplots(1, 3, figsize=(15, 4))
    for i, deg in enumerate(degrees):
        poly = PolynomialFeatures(degree=deg)
        X_poly_train = poly.fit_transform(X_train)
        X_poly_test = poly.transform(X_test)
        model = LinearRegression()
        model.fit(X_poly_train, y_train)
        y_train_pred = model.predict(X_poly_train)
        y_test_pred = model.predict(X_poly_test)
        X_plot = np.linspace(0, 1, 200).reshape(-1, 1)
        y_plot = model.predict(poly.transform(X_plot))
        axes[i].scatter(X_train, y_train, label='Train', alpha=0.6)
        axes[i].scatter(X_test, y_test, label='Test', alpha=0.6)
        axes[i].plot(X_plot, y_plot, 'r-', label='Model', linewidth=2)
        axes[i].set_title(f'Degree {deg}')
        axes[i].legend()
        axes[i].set_ylim(-1.5, 1.5)
    plt.tight_layout()
    fig.savefig(FIGS_DIR / "bias_variance_demo.png", dpi=150)
    plt.close(fig)
    print("  ✓ bias_variance_demo.png")


def simple_linear_regression():
    np.random.seed(42)
    X = np.random.rand(50, 1) * 10
    y = 2.5 * X.ravel() + 1.3 + np.random.normal(0, 1.5, 50)
    model = LinearRegression()
    model.fit(X, y)
    X_line = np.linspace(0, 10, 100).reshape(-1, 1)
    y_line = model.predict(X_line)
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.scatter(X, y, alpha=0.6, label='Data')
    ax.plot(X_line, y_line, 'r-', linewidth=2, label=f'y = {model.coef_[0]:.2f}x + {model.intercept_:.2f}')
    ax.set_xlabel('Feature (x)')
    ax.set_ylabel('Target (y)')
    ax.legend()
    ax.set_title('Simple Linear Regression')
    fig.savefig(FIGS_DIR / "simple_linear_regression.png", dpi=150)
    plt.close(fig)
    print("  ✓ simple_linear_regression.png")


def decision_boundary():
    np.random.seed(42)
    from sklearn.linear_model import LogisticRegression
    X, y = make_classification(n_samples=200, n_features=2, n_redundant=0, n_clusters_per_class=1, class_sep=1.5, random_state=42)
    model = LogisticRegression()
    model.fit(X, y)
    xx, yy = np.meshgrid(np.linspace(-3, 3, 100), np.linspace(-3, 3, 100))
    Z = model.predict_proba(np.c_[xx.ravel(), yy.ravel()])[:, 1]
    Z = Z.reshape(xx.shape)
    fig, ax = plt.subplots(figsize=(8, 6))
    ax.contourf(xx, yy, Z, alpha=0.3, levels=np.linspace(0, 1, 11), cmap='RdBu')
    ax.contour(xx, yy, Z, levels=[0.5], colors='k', linewidths=2)
    ax.scatter(X[:, 0], X[:, 1], c=y, cmap='RdBu', edgecolors='k', alpha=0.7)
    ax.set_xlabel('Feature 1')
    ax.set_ylabel('Feature 2')
    ax.set_title('Logistic Regression Decision Boundary')
    fig.colorbar(ax.collections[0], ax=ax, label='Probability')
    fig.savefig(FIGS_DIR / "decision_boundary.png", dpi=150)
    plt.close(fig)
    print("  ✓ decision_boundary.png")


def roc_curve():
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import roc_curve, auc
    data = load_breast_cancer()
    X, y = data.data, data.target
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = LogisticRegression(max_iter=5000)
    model.fit(X_train, y_train)
    y_proba = model.predict_proba(X_test)[:, 1]
    fpr, tpr, _ = roc_curve(y_test, y_proba)
    roc_auc = auc(fpr, tpr)
    fig, ax = plt.subplots(figsize=(6, 5))
    ax.plot(fpr, tpr, label=f'ROC (AUC = {roc_auc:.3f})')
    ax.plot([0, 1], [0, 1], 'k--', label='Random')
    ax.set_xlabel('False Positive Rate')
    ax.set_ylabel('True Positive Rate (Recall)')
    ax.set_title('ROC Curve')
    ax.legend()
    fig.savefig(FIGS_DIR / "roc_curve.png", dpi=150)
    plt.close(fig)
    print("  ✓ roc_curve.png")


def decision_tree_iris():
    iris = load_iris()
    X, y = iris.data[:, [0, 2]], iris.target
    tree = DecisionTreeClassifier(max_depth=3, random_state=42)
    tree.fit(X, y)
    fig, ax = plt.subplots(figsize=(16, 8))
    plot_tree(tree, feature_names=['sepal_length', 'petal_length'],
              class_names=iris.target_names, filled=True, rounded=True, ax=ax)
    fig.savefig(FIGS_DIR / "decision_tree_iris.png", dpi=150)
    plt.close(fig)
    print("  ✓ decision_tree_iris.png")


def tree_vs_forest_boundary():
    from sklearn.ensemble import RandomForestClassifier
    X, y = make_classification(n_samples=300, n_features=2, n_redundant=0,
                                n_clusters_per_class=1, class_sep=0.8, random_state=42)
    tree = DecisionTreeClassifier(random_state=42)
    forest = RandomForestClassifier(n_estimators=100, random_state=42)
    tree.fit(X, y)
    forest.fit(X, y)
    xx, yy = np.meshgrid(np.linspace(X[:, 0].min() - 0.5, X[:, 0].max() + 0.5, 100),
                         np.linspace(X[:, 1].min() - 0.5, X[:, 1].max() + 0.5, 100))
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))
    for ax, model, title in zip(axes, [tree, forest], ['Single Tree', 'Random Forest (100 trees)']):
        Z = model.predict(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)
        ax.contourf(xx, yy, Z, alpha=0.3, cmap='RdBu')
        ax.scatter(X[:, 0], X[:, 1], c=y, cmap='RdBu', edgecolors='k', alpha=0.7)
        ax.set_title(title)
    plt.tight_layout()
    fig.savefig(FIGS_DIR / "tree_vs_forest_boundary.png", dpi=150)
    plt.close(fig)
    print("  ✓ tree_vs_forest_boundary.png")


def kmeans_different_k():
    X, y_true = make_blobs(n_samples=300, centers=4, cluster_std=0.8, random_state=42)
    from sklearn.cluster import KMeans
    fig, axes = plt.subplots(2, 3, figsize=(15, 10))
    for i, K in enumerate([2, 3, 4, 5, 6, 8]):
        kmeans = KMeans(n_clusters=K, random_state=42, n_init=10)
        y_pred = kmeans.fit_predict(X)
        ax = axes[i // 3, i % 3]
        ax.scatter(X[:, 0], X[:, 1], c=y_pred, cmap='viridis', alpha=0.6)
        ax.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1],
                   c='red', marker='x', s=200, linewidths=3)
        ax.set_title(f'K = {K}')
        ax.set_xlabel('Feature 1')
        ax.set_ylabel('Feature 2')
    plt.tight_layout()
    fig.savefig(FIGS_DIR / "kmeans_different_k.png", dpi=150)
    plt.close(fig)
    print("  ✓ kmeans_different_k.png")


def elbow_silhouette():
    from sklearn.cluster import KMeans
    from sklearn.metrics import silhouette_score
    X, y = make_blobs(n_samples=300, centers=4, cluster_std=0.8, random_state=42)
    inertias = []
    silhouettes = []
    K_range = range(2, 11)
    for K in K_range:
        kmeans = KMeans(n_clusters=K, random_state=42, n_init=10)
        kmeans.fit(X)
        inertias.append(kmeans.inertia_)
        silhouettes.append(silhouette_score(X, kmeans.labels_))
    fig, axes = plt.subplots(1, 2, figsize=(12, 4))
    axes[0].plot(K_range, inertias, 'o-')
    axes[0].set_xlabel('K')
    axes[0].set_ylabel('Inertia')
    axes[0].set_title('Elbow Method')
    axes[0].grid(True)
    axes[1].plot(K_range, silhouettes, 'o-')
    axes[1].set_xlabel('K')
    axes[1].set_ylabel('Silhouette Score')
    axes[1].set_title('Silhouette Score')
    axes[1].grid(True)
    plt.tight_layout()
    fig.savefig(FIGS_DIR / "elbow_silhouette.png", dpi=150)
    plt.close(fig)
    print("  ✓ elbow_silhouette.png")


def pca_iris():
    iris = load_iris()
    X = iris.data
    pca = PCA(n_components=2)
    X_pca = pca.fit_transform(X)
    fig, ax = plt.subplots(figsize=(8, 6))
    scatter = ax.scatter(X_pca[:, 0], X_pca[:, 1], c=iris.target, cmap='viridis', alpha=0.7)
    ax.set_xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%} variance)')
    ax.set_ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%} variance)')
    ax.set_title('PCA of Iris Dataset (2 Components)')
    fig.colorbar(scatter, ax=ax, label='Species')
    fig.savefig(FIGS_DIR / "pca_iris.png", dpi=150)
    plt.close(fig)
    print("  ✓ pca_iris.png")


def pca_variance():
    data = load_breast_cancer()
    X = StandardScaler().fit_transform(data.data)
    pca = PCA()
    X_pca = pca.fit_transform(X)
    cumulative = np.cumsum(pca.explained_variance_ratio_)
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.bar(range(1, len(cumulative) + 1), pca.explained_variance_ratio_, alpha=0.7, label='Individual')
    ax.step(range(1, len(cumulative) + 1), cumulative, where='mid', label='Cumulative')
    ax.axhline(y=0.9, color='r', linestyle='--', label='90% threshold')
    ax.set_xlabel('Principal Component')
    ax.set_ylabel('Explained Variance Ratio')
    ax.set_title('PCA: Explained Variance')
    ax.legend()
    ax.grid(True)
    fig.savefig(FIGS_DIR / "pca_variance.png", dpi=150)
    plt.close(fig)
    print("  ✓ pca_variance.png")


def pca_breast_cancer():
    data = load_breast_cancer()
    X = StandardScaler().fit_transform(data.data)
    pca2 = PCA(n_components=2)
    X_pca2 = pca2.fit_transform(X)
    fig, ax = plt.subplots(figsize=(8, 6))
    scatter = ax.scatter(X_pca2[:, 0], X_pca2[:, 1], c=data.target, cmap='RdBu', alpha=0.6)
    ax.set_xlabel('PC1')
    ax.set_ylabel('PC2')
    ax.set_title(f'Breast Cancer: 2D PCA ({pca2.explained_variance_ratio_.sum():.1%} variance)')
    fig.colorbar(scatter, ax=ax, label='Malignant')
    fig.savefig(FIGS_DIR / "pca_breast_cancer.png", dpi=150)
    plt.close(fig)
    print("  ✓ pca_breast_cancer.png")


def boosting_sequential():
    np.random.seed(42)
    X = np.sort(np.random.rand(80, 1) * 10, axis=0)
    y = np.sin(X).ravel() + np.random.normal(0, 0.15, X.shape[0])
    F = np.zeros_like(y)
    n_stages = 5
    fig, axes = plt.subplots(1, n_stages, figsize=(20, 3))
    for i in range(n_stages):
        residual = y - F
        tree = DecisionTreeRegressor(max_depth=3)
        tree.fit(X, residual)
        F += 0.5 * tree.predict(X)
        axes[i].scatter(X, y, alpha=0.3, label='Data')
        axes[i].scatter(X, F, color='red', s=20, label=f'Stage {i+1}')
        axes[i].set_ylim(-1.5, 1.5)
        axes[i].legend()
    plt.suptitle('Gradient Boosting: Sequential Residual Fitting')
    plt.tight_layout()
    fig.savefig(FIGS_DIR / "boosting_sequential.png", dpi=150)
    plt.close(fig)
    print("  ✓ boosting_sequential.png")


def plot_permutation_importance():
    diabetes = load_diabetes()
    X, y = diabetes.data, diabetes.target
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = RandomForestRegressor(n_estimators=50, max_depth=10, random_state=42)
    model.fit(X_train, y_train)
    result = sk_permutation_importance(model, X_test, y_test, random_state=42)
    sorted_idx = result.importances_mean.argsort()[::-1]
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.barh([diabetes.feature_names[i] for i in sorted_idx],
            result.importances_mean[sorted_idx])
    ax.set_xlabel('Permutation Importance')
    ax.set_title('Feature Importance (Permutation)')
    plt.tight_layout()
    fig.savefig(FIGS_DIR / "permutation_importance.png", dpi=150)
    plt.close(fig)
    print("  ✓ permutation_importance.png")


def partial_dependence():
    diabetes = load_diabetes()
    X, y = diabetes.data, diabetes.target
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = RandomForestRegressor(n_estimators=50, max_depth=10, random_state=42)
    model.fit(X_train, y_train)
    fig, ax = plt.subplots(figsize=(8, 5))
    PartialDependenceDisplay.from_estimator(
        model, X_test, [0, 2],
        grid_resolution=20, ax=ax,
        feature_names=list(diabetes.feature_names)
    )
    plt.suptitle('Partial Dependence Plots')
    plt.tight_layout()
    fig.savefig(FIGS_DIR / "partial_dependence.png", dpi=150)
    plt.close(fig)
    print("  ✓ partial_dependence.png")


def pdp_breast_cancer():
    from sklearn.ensemble import RandomForestClassifier
    data = load_breast_cancer()
    X, y = data.data, data.target
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = RandomForestClassifier(n_estimators=50, max_depth=10, random_state=42)
    model.fit(X_train, y_train)
    fig, ax = plt.subplots(figsize=(10, 4))
    PartialDependenceDisplay.from_estimator(
        model, X_test, ['worst radius', 'worst concave points'],
        grid_resolution=20, ax=ax,
        feature_names=list(data.feature_names)
    )
    plt.suptitle('Partial Dependence: Breast Cancer')
    plt.tight_layout()
    fig.savefig(FIGS_DIR / "pdp_breast_cancer.png", dpi=150)
    plt.close(fig)
    print("  ✓ pdp_breast_cancer.png")


def main():
    print("Generating Module 4 figures...")
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
    print("Module 4 figures complete!")


if __name__ == "__main__":
    main()
