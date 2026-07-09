---
Module: 2
Lesson Number: 12
Lesson Title: Conjuntos
Estimated Duration: 30 minutes
Prerequisites: L9 — Lists
Learning Objectives:
  - Crear sets and explain their properties (unordered, unique, hashable)
  - Realizar set operations: union, intersection, difference, symmetric difference
  - Usar sets for removing duplicates and membership testing
  - Distinguish between sets and frozensets
  - Choose between sets, lists, and tuples based on use case
Keywords: set, frozenset, union, intersection, difference, membership
Difficulty: Principiante
Programming Concepts: Hash sets, uniqueness, set operations
Datasets Used: Ninguno
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Conjuntos

## Motivación

Sets are unordered collections of unique elements. They excel at two tasks: removing duplicates and fast membership testing. In biotechnology, sets help find unique genes across experiments, identify common variants between patients, and remove duplicate sequences. In SaaS, sets track unique users, find common features across plans, and filter out duplicates in event logs.

## Panorama General

In previous lessons, you learned lists (ordered, mutable) and tuples (ordered, immutable) and dictionaries (key-value). Sets are another fundamental collection type, optimized for uniqueness and mathematical set operations. They share the hash-based implementation with dictionaries but store only keys. Understanding sets completes your knowledge of Python's core data structures.

## Teoría

### Creating Sets

Sets are created with curly braces `{}` or `set()`:

```python
empty = set()           # Note: {} creates an empty dict
fruits = {"apple", "banana", "cherry"}
numbers = set([1, 2, 3, 2, 1])  # {1, 2, 3} — duplicates removed
string_set = set("hello")  # {'h', 'e', 'l', 'o'}
```

### Set Properties

- **Unordered**: Elements have no position/index
- **Unique**: No duplicate elements
- **Mutable**: Can add/remove elements
- **Hashable elements only**: Elements must be immutable (like dict keys)

### Set Operations

```python
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

a | b          # Union: {1, 2, 3, 4, 5, 6, 7, 8}
a & b          # Intersection: {4, 5}
a - b          # Difference: {1, 2, 3}
b - a          # Difference: {6, 7, 8}
a ^ b          # Symmetric difference: {1, 2, 3, 6, 7, 8}
```

### Set Methods

```python
s = {1, 2, 3}
s.add(4)               # Add element
s.remove(3)            # Remove (KeyError if missing)
s.discard(10)          # Remove (no error if missing)
s.pop()                # Remove and return arbitrary element
s.clear()              # Remove all
s.copy()               # Shallow copy

s.union(other)         # Same as |
s.intersection(other)  # Same as &
s.difference(other)    # Same as -
s.symmetric_difference(other)  # Same as ^

s.issubset(other)      # s ⊆ other?
s.issuperset(other)    # s ⊇ other?
s.isdisjoint(other)    # s ∩ other = ∅?
```

### Frozenset

An immutable version of set — can be used as dictionary keys:

```python
fs = frozenset([1, 2, 3])
# fs.add(4)  # AttributeError: 'frozenset' object has no attribute 'add'
```

### Membership Testing

Sets are much faster than lists for `in` checks:

```python
# O(1) for set vs O(n) for list
if item in my_set:  # Fast
    pass
```

## Explicación Visual

```
Set Operations (Venn Diagram)

    Set A          Set B
  ┌────────┐    ┌────────┐
  │  1 2 3 │    │  4 5 6 │
  │    4 5 │    │    4 5 │
  │        │    │  7 8   │
  └────────┘    └────────┘

  Union (A ∪ B):   Intersection (A ∩ B):
  ┌────────────┐  ┌────────┐
  │ 1 2 3 4 5  │  │  4 5   │
  │ 6 7 8      │  └────────┘
  └────────────┘

  Difference (A - B):  Symmetric Diff (A △ B):
  ┌────────┐           ┌────────────────┐
  │ 1 2 3  │           │ 1 2 3 6 7 8    │
  └────────┘           └────────────────┘
```

## Implementación en Python

```python
# Creating sets
unique_genes = {"BRCA1", "TP53", "EGFR", "MYC", "BRCA1", "TP53"}
print(f"Unique genes: {unique_genes}")  # Duplicates removed

# Set from list
all_genes = ["BRCA1", "TP53", "EGFR", "BRCA1", "MYC", "TP53"]
unique = set(all_genes)
print(f"Unique from list: {unique}")
```

```python
# Set operations
expressed = {"BRCA1", "TP53", "EGFR", "ALK"}
mutated = {"TP53", "KRAS", "EGFR", "MYC"}

print(f"All genes: {expressed | mutated}")
print(f"Both expressed and mutated: {expressed & mutated}")
print(f"Expressed but not mutated: {expressed - mutated}")
print(f"In exactly one: {expressed ^ mutated}")

# Checking relationships
print(f"Is subset: {expressed.issubset(mutated)}")
print(f"Disjoint: {expressed.isdisjoint({'GATA2', 'FOXA1'})}")
```

```python
# Membership testing
valid_genes = {"BRCA1", "TP53", "EGFR", "MYC", "KRAS", "ALK"}
test_gene = "BRCA1"
print(f"Is {test_gene} valid? {test_gene in valid_genes}")

# Performance comparison
import time
data_list = list(range(1000000))
data_set = set(data_list)

start = time.time()
for _ in range(1000):
    999999 in data_list
list_time = time.time() - start

start = time.time()
for _ in range(1000):
    999999 in data_set
set_time = time.time() - start

print(f"List membership: {list_time:.4f}s")
print(f"Set membership: {set_time:.4f}s")
print(f"Set is {list_time/set_time:.0f}x faster!")
```

## Biotechnology Example

**Escenario**: Comparing gene sets across different experiments.

```python
# Gene sets from different experiments
experiment_1 = {"BRCA1", "TP53", "EGFR", "MYC", "KRAS"}
experiment_2 = {"TP53", "EGFR", "ALK", "ROS1", "KRAS"}
experiment_3 = {"BRCA1", "MYC", "ALK", "GATA2", "FOXA1"}

# Common genes across all experiments
common = experiment_1 & experiment_2 & experiment_3
print(f"Common across all 3: {common if common else 'None'}")

# Genes in at least 2 experiments
from collections import Counter
all_genes = experiment_1 | experiment_2 | experiment_3
in_at_least_2 = {g for g in all_genes
                  if sum(g in exp for exp in [experiment_1, experiment_2, experiment_3]) >= 2}
print(f"In at least 2 experiments: {in_at_least_2}")

# Unique to each experiment
unique_to_1 = experiment_1 - experiment_2 - experiment_3
print(f"Unique to experiment 1: {unique_to_1}")
```

## SaaS Example

**Escenario**: Analyzing user feature adoption.

```python
# Features used by different customer segments
basic_users = {"login", "view", "search", "logout"}
premium_users = {"login", "view", "search", "export", "api", "analytics", "logout"}
enterprise_users = {"login", "view", "search", "export", "api", "analytics",
                    "admin", "sso", "audit", "logout"}

# Features common to all tiers
common_features = basic_users & premium_users & enterprise_users
print(f"Common features: {common_features}")

# Premium-only features
premium_only = premium_users - basic_users
print(f"Premium only: {premium_only}")

# Features missing from basic
missing_from_basic = premium_users | enterprise_users - basic_users
print(f"Missing from basic: {missing_from_basic}")

# Check if a feature set is a subset
print(f"Is basic subset of premium? {basic_users.issubset(premium_users)}")
```

## Errores Comunes

1. **Using `{}` for empty set**: Creates an empty dict, not a set. Use `set()`
2. **Assuming set order**: Sets are unordered — don't rely on element order
3. **Adding mutable elements**: Can't add lists or dicts to a set
4. **Modifying set while iterating**: Same issue as with lists
5. **Confusing `add` and `update`**: `add` adds one element; `update` adds elements from an iterable

## Buenas Prácticas

- Use sets for fast membership testing (`in` is O(1))
- Use sets to remove duplicates from sequences
- Use set operations (union, intersection, difference) for analysis
- Use `frozenset` when you need an immutable, hashable set (e.g., as dict key)
- Prefer `discard` over `remove` when unsure if element exists

## Resumen

- Sets are unordered collections of unique, hashable elements
- Created with `{1, 2, 3}` or `set([1, 2, 3])`; empty set with `set()`
- Operations: union (`|`), intersection (`&`), difference (`-`), symmetric diff (`^`)
- Methods: add, remove, discard, pop, clear
- Frozenset is immutable and hashable
- Membership testing is O(1) — much faster than lists

## Términos Clave

- **Set**: Unordered collection of unique elements
- **Frozenset**: Immutable version of set
- **Union**: All elements from both sets
- **Intersection**: Elements common to both sets
- **Difference**: Elements in one set but not the other
- **Symmetric difference**: Elements in exactly one of the sets
- **Hashable**: Can be used as set element (immutable types)
- **Membership test**: Checking if an element is in a set (O(1))

## Ejercicios

### Nivel 1: Básico

1. How do you create an empty set?
2. What is the output of `set([1, 2, 2, 3, 1, 3])`?
3. What is the difference between `add()` and `update()` for sets?

### Nivel 2: Implementación

4. Write a function `unique_words(text)` that returns a set of unique words in a string.
5. Given two lists (e.g., users who viewed a page and users who purchased), find users who viewed but didn't purchase.

### Nivel 3: Pensamiento Crítico

6. Why is membership testing O(1) for sets but O(n) for lists? What does the underlying implementation look like?
7. How would you find elements that appear in at least k out of n sets without using Counter?

## Desafío de Programación

Escribe un programa que implements a **Jaccard similarity** calculator:
1. Jaccard similarity = |A ∩ B| / |A ∪ B| (size of intersection / size of union)
2. Write `jaccard_similarity(set1, set2)` that returns a value between 0 and 1
3. Given a list of gene sets (each a set of gene names), find the pair with the highest Jaccard similarity
4. Also find the pair with the lowest Jaccard similarity
5. Test with at least 5 gene sets of varying sizes
