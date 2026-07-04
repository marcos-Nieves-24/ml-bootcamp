#!/usr/bin/env python3
"""Generate synthetic datasets for the course."""

import json
import numpy as np
import pandas as pd
from pathlib import Path

DATASETS_DIR = Path(__file__).resolve().parent.parent / "datasets"
SEED = 42


def _ensure_dataset_dir(name):
    path = DATASETS_DIR / "synthetic" / name
    path.mkdir(parents=True, exist_ok=True)
    return path


def _write_dataset(path, df, description, source_info, license_name="CC0-1.0"):
    csv_path = path / f"{path.name}.csv"
    df.to_csv(csv_path, index=False)
    readme = f"""# {path.name}

## Description
{description}

## Source
{source_info}

## Variables
"""
    for col in df.columns:
        dtype = str(df[col].dtype)
        readme += f"\n- `{col}` ({dtype})"
    readme += f"""

## License
{license_name}
"""
    with open(path / "README.md", "w") as f:
        f.write(readme)

    metadata = {
        "name": path.name,
        "description": description,
        "source": source_info,
        "license": license_name,
        "rows": len(df),
        "columns": len(df.columns),
        "variables": {col: {"dtype": str(df[col].dtype), "non_null": int(df[col].notna().sum())} for col in df.columns},
    }
    with open(path / "metadata.json", "w") as f:
        json.dump(metadata, f, indent=2)

    with open(path / "license.txt", "w") as f:
        f.write(f"SPDX: {license_name}\n")
        f.write("This dataset is synthetic and distributed under CC0 (Public Domain Dedication).\n")

    print(f"  ✓ datasets/synthetic/{path.name}/")
    return csv_path


def customer_churn():
    np.random.seed(SEED)
    n = 1000
    df = pd.DataFrame({
        "customer_id": range(1, n + 1),
        "tenure_months": np.random.randint(1, 72, n),
        "monthly_charges": np.round(np.random.uniform(20, 120, n), 2),
        "total_charges": np.round(np.random.uniform(100, 8000, n), 2),
        "contract_type": np.random.choice(["Month-to-month", "One year", "Two year"], n, p=[0.55, 0.25, 0.20]),
        "internet_service": np.random.choice(["Fiber optic", "DSL", "No"], n, p=[0.44, 0.34, 0.22]),
        "payment_method": np.random.choice(["Electronic check", "Mailed check", "Bank transfer", "Credit card"], n),
        "senior_citizen": np.random.choice([0, 1], n, p=[0.84, 0.16]),
        "partner": np.random.choice(["Yes", "No"], n),
        "dependents": np.random.choice(["Yes", "No"], n, p=[0.30, 0.70]),
        "num_tech_tickets": np.random.poisson(0.5, n),
        "num_admin_tickets": np.random.poisson(1.0, n),
    })
    churn_prob = (
        0.1
        + 0.3 * (df["contract_type"] == "Month-to-month").astype(int)
        - 0.2 * (df["contract_type"] == "Two year").astype(int)
        + 0.15 * (df["internet_service"] == "Fiber optic").astype(int)
        + 0.01 * (30 - df["tenure_months"].clip(0, 30))
        + 0.003 * df["monthly_charges"]
        + 0.05 * df["num_tech_tickets"]
        + np.random.normal(0, 0.05, n)
    )
    df["churn"] = (churn_prob > np.random.uniform(0.3, 0.7, n)).astype(int)
    path = _ensure_dataset_dir("customer_churn")
    _write_dataset(path, df,
                   "Synthetic customer churn dataset for SaaS analytics. Contains customer demographics, account information, and churn labels.",
                   "Generated synthetically for educational purposes.")
    return path


def credit_data():
    np.random.seed(SEED)
    n = 2000
    df = pd.DataFrame({
        "applicant_id": range(1, n + 1),
        "age": np.random.randint(18, 75, n),
        "income": np.round(np.random.lognormal(mean=10.5, sigma=0.6, size=n), 0),
        "loan_amount": np.round(np.random.uniform(1000, 50000, n), 0),
        "loan_term_months": np.random.choice([12, 24, 36, 48, 60], n, p=[0.1, 0.2, 0.3, 0.25, 0.15]),
        "credit_score": np.random.normal(650, 80, n).clip(300, 850).astype(int),
        "employment_years": np.random.exponential(5, n).clip(0, 40).astype(int),
        "debt_to_income": np.round(np.random.uniform(0.05, 0.6, n), 3),
        "num_credit_lines": np.random.poisson(3, n).clip(0, 15),
        "late_payments_2y": np.random.poisson(0.5, n).clip(0, 10),
        "race": np.random.choice(["White", "Black", "Hispanic", "Asian", "Other"], n, p=[0.6, 0.12, 0.16, 0.07, 0.05]),
        "gender": np.random.choice(["Male", "Female"], n),
    })
    default_prob = (
        -0.5
        + 0.001 * (40 - df["age"].clip(0, 40))
        + 0.15 * (df["debt_to_income"] - 0.3).clip(0, 1) * 2
        - 0.005 * (df["credit_score"] - 650)
        + 0.05 * df["late_payments_2y"]
        + np.random.normal(0, 0.1, n)
    )
    df["default"] = (default_prob > np.random.normal(0, 0.5, n)).astype(int)
    path = _ensure_dataset_dir("credit_data")
    _write_dataset(path, df,
                   "Synthetic credit application dataset for ethics and fairness analysis. Includes demographic attributes for bias detection exercises.",
                   "Generated synthetically for educational purposes. Inspired by UCI Credit Approval dataset structure.")
    return path


def biotech_quality():
    np.random.seed(SEED)
    n = 500
    df = pd.DataFrame({
        "batch_id": range(1, n + 1),
        "temperature": np.random.normal(37, 2, n),
        "ph_level": np.random.normal(7.0, 0.5, n),
        "pressure": np.random.normal(1.0, 0.1, n),
        "stirring_speed": np.random.uniform(100, 500, n),
        "culture_time_hours": np.random.normal(48, 6, n),
        "oxygen_saturation": np.random.uniform(60, 100, n),
        "nutrient_concentration": np.random.normal(5, 1, n),
    })
    quality_score = (
        0.5
        - 0.05 * abs(df["temperature"] - 37)
        - 0.1 * abs(df["ph_level"] - 7.0)
        + 0.02 * df["oxygen_saturation"]
        + 0.03 * df["nutrient_concentration"]
        + np.random.normal(0, 0.1, n)
    )
    df["quality_score"] = np.round(quality_score.clip(0, 1), 3)
    df["pass_quality"] = (df["quality_score"] >= 0.6).astype(int)
    path = _ensure_dataset_dir("biotech_quality")
    _write_dataset(path, df,
                   "Synthetic biotech manufacturing quality control dataset. Process parameters and quality outcomes for batch production.",
                   "Generated synthetically for educational purposes.")
    return path


def protein_solubility():
    np.random.seed(SEED)
    n = 500
    df = pd.DataFrame({
        "protein_id": [f"PROT_{i:04d}" for i in range(1, n + 1)],
        "molecular_weight": np.round(np.random.normal(50000, 10000, n), 1),
        "hydrophobicity": np.round(np.random.uniform(-2, 2, n), 3),
        "charge": np.round(np.random.normal(0, 5, n), 2),
        "helix_fraction": np.round(np.random.uniform(0, 1, n), 3),
        "sheet_fraction": np.round(np.random.uniform(0, 1, n), 3),
        "loop_fraction": np.round(1 - np.random.uniform(0, 1, n) * 0.5, 3),
        "length": np.random.randint(50, 500, n),
    })
    df["solubility"] = np.round(
        0.5
        - 0.3 * df["hydrophobicity"]
        + 0.1 * df["charge"]
        + 0.2 * df["helix_fraction"]
        + np.random.normal(0, 0.1, n),
        3
    )
    path = _ensure_dataset_dir("protein_solubility")
    _write_dataset(path, df,
                   "Synthetic protein solubility dataset. Molecular descriptors and experimental solubility scores for protein engineering exercises.",
                   "Generated synthetically for educational purposes.")
    return path


def customer_segments():
    np.random.seed(SEED)
    n = 500
    centers = [(20, 200), (35, 500), (50, 1000), (25, 800)]
    cluster_assignments = np.random.choice(4, n)
    data = []
    for i, (age_c, spend_c) in enumerate(centers):
        cluster_n = (cluster_assignments == i).sum()
        ages = np.random.normal(age_c, 5, cluster_n)
        spends = np.random.normal(spend_c, 50, cluster_n)
        data.extend(zip(ages, spends, [i] * cluster_n))
    df = pd.DataFrame(data, columns=["age", "annual_spend", "cluster"]).sample(frac=1).reset_index(drop=True)
    df["age"] = df["age"].clip(18, 70).astype(int)
    df["annual_spend"] = df["annual_spend"].clip(0, 2000).astype(int)
    df["membership_years"] = np.random.uniform(0, 10, n).round(1)
    df["num_purchases"] = np.random.poisson(df["annual_spend"] / 50, n).clip(0, 100)
    path = _ensure_dataset_dir("customer_segments")
    _write_dataset(path, df,
                   "Synthetic customer segmentation dataset for clustering exercises. Contains demographic and spending features.",
                   "Generated synthetically for educational purposes.")
    return path


def gene_expression():
    np.random.seed(SEED)
    n = 200
    n_genes = 20
    np.random.seed(SEED)
    data = {}
    for i in range(n_genes):
        data[f"gene_{i+1:02d}"] = np.round(np.random.lognormal(mean=0, sigma=0.5, size=n), 2)
    df = pd.DataFrame(data)
    df["patient_id"] = range(1, n + 1)
    df["condition"] = np.random.choice(["control", "treatment"], n)
    # Make some genes differentially expressed
    diff_genes = np.random.choice(n_genes, 5, replace=False)
    for g in diff_genes:
        mask = df["condition"] == "treatment"
        df.loc[mask, f"gene_{g+1:02d}"] *= np.random.uniform(1.5, 3.0)
    df = df[["patient_id", "condition"] + [f"gene_{i+1:02d}" for i in range(n_genes)]]
    path = _ensure_dataset_dir("gene_expression")
    _write_dataset(path, df,
                   "Synthetic gene expression dataset for ML exercises. 200 patients, 20 genes, binary condition (control/treatment).",
                   "Generated synthetically for educational purposes. Modeled after typical differential expression analysis datasets.")
    return path


def clinical_trial():
    np.random.seed(SEED)
    n = 300
    df = pd.DataFrame({
        "patient_id": range(1, n + 1),
        "age": np.random.randint(18, 80, n),
        "sex": np.random.choice(["M", "F"], n),
        "treatment_group": np.random.choice(["placebo", "low_dose", "high_dose"], n),
        "baseline_bp": np.round(np.random.normal(140, 15, n)),
        "baseline_bmi": np.round(np.random.normal(28, 5, n), 1),
        "baseline_glucose": np.round(np.random.normal(100, 20, n)),
        "adherence_rate": np.round(np.random.uniform(0.5, 1.0, n), 2),
    })
    treatment_effect = (
        0
        + 0.1 * (df["treatment_group"] == "low_dose").astype(int)
        + 0.2 * (df["treatment_group"] == "high_dose").astype(int)
        + 0.3 * df["adherence_rate"]
        + np.random.normal(0, 0.1, n)
    )
    df["outcome_improvement"] = np.round((treatment_effect * 30).clip(-10, 50), 1)
    df["responder"] = (df["outcome_improvement"] > 10).astype(int)
    path = _ensure_dataset_dir("clinical_trial")
    _write_dataset(path, df,
                   "Synthetic clinical trial dataset for data analysis exercises. Patient demographics, treatment assignment, and outcomes.",
                   "Generated synthetically for educational purposes.")
    return path


def saas_metrics():
    np.random.seed(SEED)
    n = 24
    months = pd.date_range(start="2023-01-01", periods=n, freq="ME")
    base_users = 1000
    df = pd.DataFrame({
        "month": months,
        "active_users": np.round(base_users + np.cumsum(np.random.normal(50, 20, n))),
        "new_signups": np.random.poisson(80, n) + np.arange(n) * 2,
        "churned_users": np.random.poisson(30, n),
        "mrr": np.round(10000 + np.cumsum(np.random.normal(500, 200, n))),
        "avg_revenue_per_user": np.round(np.random.uniform(20, 30, n), 2),
        "support_tickets": np.random.poisson(50, n),
        "feature_usage_pct": np.random.uniform(40, 90, n).round(1),
    })
    df["churn_rate_pct"] = np.round((df["churned_users"] / df["active_users"] * 100), 2)
    df["net_new_users"] = df["new_signups"] - df["churned_users"]
    path = _ensure_dataset_dir("saas_metrics")
    _write_dataset(path, df,
                   "Synthetic SaaS metrics dataset for time series analysis and data storytelling. Monthly KPIs for a fictional SaaS company.",
                   "Generated synthetically for educational purposes.")
    return path


def biotech_diagnosis():
    np.random.seed(SEED)
    n = 200
    n_genes = 15
    X_base = np.random.lognormal(mean=0, sigma=0.5, size=(n, n_genes))
    disease_idx = np.random.choice(n, n // 2, replace=False)
    for i in range(3):
        X_base[disease_idx, i] *= np.random.uniform(2.0, 4.0)
    df = pd.DataFrame(X_base, columns=[f"gene_{i+1:02d}" for i in range(n_genes)])
    df["patient_id"] = range(1, n + 1)
    df["diagnosis"] = 0
    df.loc[disease_idx, "diagnosis"] = 1
    cols = ["patient_id", "diagnosis"] + [f"gene_{i+1:02d}" for i in range(n_genes)]
    df = df[cols]
    df = df.round(3)
    path = _ensure_dataset_dir("biotech_diagnosis")
    _write_dataset(path, df,
                   "Synthetic biotech diagnosis dataset for case studies. Gene expression profiles with binary disease diagnosis labels.",
                   "Generated synthetically for educational purposes.")
    return path


def main():
    np.random.seed(SEED)
    print("Generating synthetic datasets...")

    datasets = [
        ("customer_churn", customer_churn),
        ("credit_data", credit_data),
        ("biotech_quality", biotech_quality),
        ("protein_solubility", protein_solubility),
        ("customer_segments", customer_segments),
        ("gene_expression", gene_expression),
        ("clinical_trial", clinical_trial),
        ("saas_metrics", saas_metrics),
        ("biotech_diagnosis", biotech_diagnosis),
    ]

    for name, func in datasets:
        func()

    print(f"\nDataset generation complete! {len(datasets)} synthetic datasets created.")
    print(f"Location: {DATASETS_DIR / 'synthetic'}/")


if __name__ == "__main__":
    main()
