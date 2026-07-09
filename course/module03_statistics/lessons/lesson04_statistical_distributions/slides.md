# Slides: Statistical Distributions

## Diapositiva 1: Title
- Statistical Distributions for Machine Learning
- Module 3, Lesson 4

## Diapositiva 2: Learning Objectives
- Understand Bernoulli, Binomial, Poisson, Normal
- Compute probabilities using scipy.stats
- Standardize data to Z-scores

## Diapositiva 3: Bernoulli Distribution
- Single binary outcome
- Parameter: p (success probability)
- Mean = p, Variance = p(1-p)
- Example: coin flip, patient response

## Diapositiva 4: Binomial Distribution
- n independent Bernoulli trials
- Parameters: n, p
- Mean = np, Variance = np(1-p)
- Example: number of responders in a trial

## Diapositiva 5: Poisson Distribution
- Counts of events in time/space
- Parameter: λ (rate)
- Mean = λ, Variance = λ
- Example: customer arrivals, mutations

## Diapositiva 6: Normal Distribution
- Bell-shaped, symmetric
- Parameters: μ (mean), σ (std)
- 68-95-99.7 rule
- Most important distribution in statistics

## Diapositiva 7: Standardization
- Z = (X - μ) / σ
- Creates mean = 0, std = 1
- Essential for ML algorithms
- Makes features comparable

## Diapositiva 8: Central Limit Theorem
- Sample means → normal as n→∞
- Works regardless of original distribution
- Explains why normal is everywhere

## Diapositiva 9: Choosing Distributions
- Binary outcome → Bernoulli
- Count of successes → Binomial
- Event count → Poisson
- Continuous symmetric → Normal

## Diapositiva 10: Key Takeaways
- Each distribution has specific use cases
- scipy.stats provides PMF, PDF, CDF
- Standardization is critical for ML
- CLT enables normal approximations
