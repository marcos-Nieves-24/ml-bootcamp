# Dataset Description: SaaS Customer Churn

## Overview

This is a **synthetic dataset** simulating customer data from a subscription-based SaaS company. The dataset contains 1,000 customer records with 11 features describing customer demographics, usage behavior, and account information.

## Data Generation

The dataset was generated to simulate realistic patterns observed in SaaS businesses:

1. **Tenure**: Customers who stay longer are less likely to churn.
2. **Monthly charges**: Higher charges correlate with higher churn (price sensitivity).
3. **Contract type**: Long-term contracts reduce churn.
4. **Usage metrics**: Higher usage indicates higher engagement and lower churn.
5. **Support tickets**: More support tickets correlate with frustration and higher churn.
6. **Churn rate**: Approximately 25% overall churn rate (typical for SaaS).

## File Format

CSV file with 1,000 rows and 11 columns.

## Columns

| Column | Type | Description |
|--------|------|-------------|
| CustomerID | string | Unique customer identifier |
| Tenure_Months | int | Number of months the customer has been subscribed (1–72) |
| Monthly_Charges | float | Monthly subscription fee in dollars ($15–$150) |
| Total_Charges | float | Total amount charged (Tenure × Monthly_Charges + fees) |
| Contract_Type | string | Type of contract: "Month-to-month", "One year", or "Two year" |
| Payment_Method | string | Payment method: "Credit card", "Bank transfer", or "Invoice" |
| Avg_Weekly_Logins | float | Average weekly login frequency (0–30) |
| Avg_Weekly_Usage_Hours | float | Average weekly hours of platform usage (0–80) |
| Support_Tickets | int | Number of support tickets submitted in the last 6 months (0–15) |
| Active_Features | int | Number of product features actively used (1–20) |
| Churn | int | Binary label: 0 = Active customer, 1 = Churned customer |

## Data Properties

| Property | Value |
|----------|-------|
| Samples | 1,000 |
| Features | 10 (1 target, 1 ID, 2 categorical, 7 numerical) |
| Churn rate | ~25% |
| Class balance | Imbalanced (75% active, 25% churned) |

## Statistical Summary

| Feature | Mean | Std | Min | Max |
|---------|------|-----|-----|-----|
| Tenure_Months | 32.4 | 20.1 | 1 | 72 |
| Monthly_Charges | 72.5 | 30.8 | 15.0 | 149.9 |
| Total_Charges | 2280.5 | 2071.3 | 15.0 | 8700.0 |
| Avg_Weekly_Logins | 12.3 | 7.6 | 0 | 30 |
| Avg_Weekly_Usage_Hours | 28.7 | 18.5 | 0 | 80 |
| Support_Tickets | 2.8 | 3.1 | 0 | 15 |
| Active_Features | 8.5 | 4.2 | 1 | 20 |

## Usage Notes

- The dataset is designed for binary classification (churn vs. no churn).
- Categorical features (Contract_Type, Payment_Method) require encoding.
- Numerical features should be scaled.
- Class imbalance exists; consider using stratified splitting and reporting per-class metrics.
- This is synthetic data — patterns are indicative but not representative of any real company.
