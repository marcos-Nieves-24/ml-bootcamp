# Slides: Probability Fundamentals

## Diapositiva 1: Title
- Probability Fundamentals for Machine Learning
- Module 3, Lesson 3

## Diapositiva 2: Learning Objectives
- State Kolmogorov's axioms
- Apply Bayes' theorem
- Understand random variables

## Diapositiva 3: Why Probability?
- ML predictions are probabilistic
- Quantifies uncertainty
- Foundation for Bayesian methods and model evaluation

## Diapositiva 4: Kolmogorov Axioms
- P(A) ≥ 0 (non-negativity)
- P(S) = 1 (normalization)
- For mutually exclusive events: P(A∪B) = P(A) + P(B)

## Diapositiva 5: Conditional Probability
- P(A|B) = P(A∩B) / P(B)
- "Probability of A given B has occurred"
- Restricts the sample space

## Diapositiva 6: Law of Total Probability
- P(A) = Σ P(A|B_i) × P(B_i)
- Partition the sample space into scenarios
- Weight probabilities by scenario likelihood

## Diapositiva 7: Bayes' Theorem
- P(A|B) = P(B|A) × P(A) / P(B)
- Updates prior → posterior given evidence
- "Reverse" conditional probability

## Diapositiva 8: Bayes Theorem Intuition
- Prior: belief before data
- Likelihood: how likely is the data given each hypothesis
- Posterior: updated belief after data

## Diapositiva 9: Random Variables
- Function mapping outcomes to numbers
- Discrete: countable values
- Continuous: values in an interval
- PMF for discrete, PDF for continuous

## Diapositiva 10: Key Takeaways
- Probability quantifies uncertainty
- Bayes theorem: prior + evidence = posterior
- Always consider base rates
- Simulation validates calculations
