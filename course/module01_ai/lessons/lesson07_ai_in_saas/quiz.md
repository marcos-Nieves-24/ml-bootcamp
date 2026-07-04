---
Module: 1
Lesson: 7
Title: AI in SaaS
---

# Quiz: AI in SaaS

## Multiple Choice (5 questions)

**1. What is customer churn in a SaaS context?**

a) When a customer complains about the product
b) When a customer cancels their subscription
c) When a customer upgrades their plan
d) When a customer refers a new user

**2. Why is reducing churn by 5% often more valuable than acquiring 5% more customers?**

a) Acquiring new customers costs 5-7x more than retaining existing ones
b) New customers always pay less
c) Churn reduction is easier than acquisition
d) It increases stock price

**3. Which metric is most appropriate for evaluating a churn prediction model when only 5% of customers churn?**

a) Accuracy (because it is simple)
b) F1 Score (balances precision and recall for imbalanced data)
c) Mean Absolute Error
d) R-squared

**4. What is Customer Lifetime Value (CLV)?**

a) The total revenue a customer generates over their relationship with the company
b) How long a customer has been subscribed
c) The cost of acquiring a customer
d) The monthly revenue per customer

**5. Which of the following is NOT a typical feature for churn prediction?**

a) Login frequency
b) Number of support tickets
c) Customer's favorite color
d) Days since last purchase

## Short Answer (2 questions)

**6. Explain the difference between precision and recall in the context of churn prediction. Which one matters more for a SaaS company?**

**7. What is the cold start problem in personalization and how can it be addressed?**

## Coding Question (1 question)

**8.** Write a function `churn_risk_segment(probability)` that takes a churn probability (0-1) and returns 'Low' if < 0.2, 'Medium' if 0.2-0.5, 'High' if > 0.5.

---

## Answer Key

1. **b)** When a customer cancels their subscription
2. **a)** Acquiring new customers costs 5-7x more than retaining existing ones
3. **b)** F1 Score (balances precision and recall for imbalanced data)
4. **a)** The total revenue a customer generates over their relationship with the company
5. **c)** Customer's favorite color
6. Precision = of all customers predicted to churn, how many actually churned. Recall = of all customers who actually churned, how many were correctly predicted. For SaaS, recall often matters more (we want to catch at-risk customers), but low precision wastes intervention resources. The trade-off depends on intervention cost vs. churn cost.
7. The cold start problem occurs when a new user has no history, making personalization impossible. Solutions: (a) use demographic data for initial recommendations; (b) ask users about preferences during onboarding; (c) use popular/trending items as default; (d) use content-based features rather than collaborative filtering initially.
8. 
```python
def churn_risk_segment(probability):
    if probability < 0.2:
        return 'Low'
    elif probability <= 0.5:
        return 'Medium'
    else:
        return 'High'
```
