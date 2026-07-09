# Quiz: Tuples

## Opción Múltiple (5 questions)

**P1:** How do you create a tuple with a single element?
- A) `t = (5)`
- B) `t = (5,)`
- C) `t = tuple(5)`
- D) `t = [5]`

**P2:** What happens if you try to modify a tuple element?
- A) The element changes silently
- B) Python raises a TypeError
- C) A new tuple is created
- D) The program crashes

**P3:** What is the result of `a, b, *rest = (1, 2, 3, 4, 5)`?
- A) a=1, b=2, rest=[3, 4, 5]
- B) a=1, b=2, rest=(3, 4, 5)
- C) a=1, b=2, rest=3
- D) Error

**P4:** Which of the following can be used as a dictionary key?
- A) List
- B) Tuple
- C) Both
- D) Neither

**P5:** How many methods does a tuple have?
- A) 0
- B) 2
- C) 5
- D) 10

## Respuesta Corta (2 questions)

**P6:** Explain the difference between a tuple and a list.

**P7:** What is tuple unpacking and why is it useful?

## Pregunta de Programación

**P8:** Write a function `swap(a, b)` that returns a tuple with the values swapped. Then demonstrate it with `x=5, y=10`.

## Clave de Respuestas

**P1:** B) `t = (5,)`

**P2:** B) Python raises a TypeError

**P3:** A) a=1, b=2, rest=[3, 4, 5]

**P4:** B) Tuple

**P5:** B) 2 (count and index)

**P6:** The main difference is mutability: lists can be modified (add, remove, change elements), while tuples cannot. Tuples are also hashable (can be dictionary keys), slightly faster, and use less memory. Lists have many more methods (append, insert, remove, sort, etc.) than tuples (only count and index).

**P7:** Tuple unpacking assigns each element of a tuple to a separate variable in one line: `x, y = (3, 4)`. It's useful for cleanly extracting multiple return values from functions, swapping variables without a temporary variable, and destructuring structured data.

**P8:**
```python
def swap(a, b):
    return b, a

x, y = 5, 10
print(f"Before: x={x}, y={y}")
x, y = swap(x, y)
print(f"After: x={x}, y={y}")
```
