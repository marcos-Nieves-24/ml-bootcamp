# Slides: Case Studies in Health and SaaS

## Diapositiva 1: Title Slide
- Case Studies in Health and SaaS
- Module 5, Lesson 7

## Diapositiva 2: Learning Objectives
- Analyze healthcare algorithm bias (Obermeyer)
- Evaluate credit scoring fairness
- Design responsible SaaS analytics
- Apply bias detection and mitigation
- Synthesize all Module 5 concepts

## Diapositiva 3: Motivation
- Real systems cause real harm
- Obermeyer (2019): healthcare algorithm biased against Black patients
- Credit scoring affects access to housing, loans, opportunity
- SaaS analytics collects and analyzes user data at scale
- This lesson integrates everything

## Diapositiva 4: Case 1 — Healthcare Algorithm Background
- Commercial algorithm used by US hospitals
- Purpose: identify high-risk patients for extra care
- Used by hospitals serving 100M+ patients
- Predicted which patients would generate high costs

## Diapositiva 5: The Assumption
- Assumption: high cost = high health need
- If you generate high costs, you need more care
- Logical, but flawed
- Access to care varies by race

## Diapositiva 6: The Finding
- Algorithm systematically underestimated health needs of Black patients
- Black patients at same risk score were sicker than white patients
- Reduced Black patients identified for extra care by more than half
- The bias was structural, not malicious

## Diapositiva 7: Root Cause — The Proxy Problem
- Cost is a biased proxy for need
- Black patients have lower costs at same level of need
- Reasons: unequal access, insurance disparities, systemic racism
- Algorithm learned: low cost = healthy
- Wrong for Black patients

## Diapositiva 8: The Fix
- Retrain to predict number of chronic conditions
- A more direct measure of health need
- Eliminated 84% of the bias
- Still correlated with cost, but much less biased
- Lesson: target variable choice is an ethical decision

## Diapositiva 9: Ethical Analysis of Healthcare Case
- Beneficence: intended to improve outcomes, failed for Black patients
- Non-maleficence: denied resources to those who needed them
- Justice: distributed resources inequitably by race
- Autonomy: patients unaware
- Explicability: proxy problem not transparent

## Diapositiva 10: Case 2 — Credit Scoring
- Predicts likelihood of default
- FICO, ML models, fintech
- Affects: loans, mortgages, housing, sometimes employment
- Regulated by ECOA
- Historical discrimination in data

## Diapositiva 11: Credit Scoring Challenges
- Historical bias in training data
- Proxy features (zip code, education)
- Base rate differences across groups
- Regulatory requirements (ECOA, fair lending)

## Diapositiva 12: Credit Scoring — Fairness Analysis
- Demographic parity: equal approval rates
- Equal opportunity: equal TPR
- Equalized odds: equal TPR + FPR
- Disparate impact: ratio > 0.8 (EEOC 4/5ths rule)
- Which definition? Depends on values and regulation

## Diapositiva 13: Responsible Credit Scoring
- Careful feature selection (avoid proxies)
- Adverse action notices (ECOA requirement)
- Regular fairness monitoring
- Human review for borderline cases
- Transparency in how decisions are made

## Diapositiva 14: Case 3 — Responsible SaaS Analytics
- SaaS platforms collect user behavior data
- AI provides insights: churn prediction, recommendations
- Ethical challenges:
  - Privacy (users may not know)
  - Consent (is usage = consent?)
  - Transparency (should churn prediction be disclosed?)
  - Fairness (small vs. large customers)
  - Data retention

## Diapositiva 15: Responsible SaaS Design Principles
- Privacy by design (aggregate, anonymize)
- Transparency (publish data practices)
- User control (opt-out without losing core functionality)
- Fairness auditing (monitor across segments)
- Data minimization (collect only what is needed)

## Diapositiva 16: Biotech Example — Diagnostic Audit
- Diagnostic algorithm: 92% acc for Population A, 78% for B
- Representation bias: 75% A, 25% B in training
- Mitigations: more data, stratified sampling, group-specific thresholds
- Justice: unequal performance violates distributive justice

## Diapositiva 17: SaaS Example — Churn Prediction Ethics
- Model identifies high-churn customers
- Retention discounts targeted at high-churn
- Result: more discounts to small businesses than enterprise
- Is this fair? Value-based vs. need-based allocation
- Transparency: do customers know they are modeled?

## Diapositiva 18: Common Mistakes
- Assuming good intentions prevent harm
- Ignoring the proxy problem
- Testing fairness only on overall metrics
- One fairness definition fits all
- Fairness is the only ethical concern

## Diapositiva 19: Best Practices
- Test across demographic subgroups
- Choose context-appropriate fairness metrics
- Document feature selection decisions
- Plan for ongoing monitoring
- Involve domain experts and communities
- Build in transparency from the start

## Diapositiva 20: Summary
- Healthcare: the proxy problem caused racial bias
- Credit scoring: fairness requires multiple metrics and regulatory compliance
- SaaS: responsible analytics balances value with privacy and fairness
- There is no single solution — each case needs context-specific reasoning
- End of Module 5
