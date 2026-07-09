# Quiz: NumPy

## Opción Múltiple (5 questions)

**P1:** Which function creates an array of zeros with shape (3, 4)?
- A) `np.zeros([3, 4])`
- B) `np.zeros((3, 4))`
- C) `np.zero(3, 4)`
- D) `np.zeros(3, 4)`

**P2:** What is the output of `np.array([1, 2, 3]) + 10`?
- A) [11, 12, 13]
- B) [1, 2, 3, 10]
- C) Error
- D) [10, 11, 12, 13]

**P3:** For a 2D array with shape (5, 3), what does `arr[:, 1]` return?
- A) Row 1
- B) Column 1
- C) The entire array
- D) Element [1, 1]

**P4:** What does broadcasting allow you to do?
- A) Operate on arrays with different shapes
- B) Send arrays over the network
- C) Broadcast warnings
- D) Convert arrays to Python lists

**P5:** Which operator performs matrix multiplication in Python 3.5+?
- A) `*`
- B) `@`
- C) `&`
- D) `%`

## Respuesta Corta (2 questions)

**P6:** Explain the difference between a view and a copy in NumPy.

**P7:** What is vectorization and why is it faster than Python loops?

## Pregunta de Programación

**P8:** Write NumPy code to create a 3×3 array of random numbers from a normal distribution, then compute the mean and standard deviation of all elements.

## Clave de Respuestas

**P1:** B) `np.zeros((3, 4))`

**P2:** A) [11, 12, 13]

**P3:** B) Column 1

**P4:** A) Operate on arrays with different shapes

**P5:** B) `@`

**P6:** A view is another way to access the same underlying data — modifying a view modifies the original. A copy is an independent array with its own data. Slicing returns a view; `.copy()` creates a copy. Use `.copy()` when you need to modify a slice independently.

**P7:** Vectorization means applying an operation to an entire array at once rather than looping through individual elements. NumPy operations are implemented in C and operate on contiguous memory blocks, making them 10-100x faster than equivalent Python loops. NumPy also uses SIMD instructions on modern CPUs for parallel operations.

**P8:**
```python
import numpy as np
arr = np.random.randn(3, 3)
print(f"Array:\n{arr}")
print(f"Mean: {arr.mean():.3f}")
print(f"Std: {arr.std():.3f}")
```
