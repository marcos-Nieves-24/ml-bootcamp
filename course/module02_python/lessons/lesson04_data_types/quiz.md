# Quiz: Data Types

## Opción Múltiple (5 questions)

**P1:** What is the type of `3.0` in Python?
- A) int
- B) float
- C) str
- D) bool

**P2:** What does `int(7.9)` return?
- A) 8
- B) 7
- C) 7.9
- D) Error

**P3:** Which of the following converts to False with `bool()`?
- A) 1
- B) "False"
- C) 0
- D) -1

**P4:** What type does `input()` always return?
- A) int
- B) float
- C) str
- D) Depends on what the user types

**P5:** What exception is raised when you try `"Hello" + 5`?
- A) ValueError
- B) NameError
- C) TypeError
- D) SyntaxError

## Respuesta Corta (2 questions)

**P6:** Explain the difference between `/` and `//` in Python.

**P7:** What does immutable mean, and which of the primitive types are immutable?

## Pregunta de Programación

**P8:** Write code that:
1. Creates a string `"42"`
2. Converts it to an integer, then to a float
3. Adds 10.5 to the float
4. Converts the result back to a string
5. Prints the final string

## Clave de Respuestas

**P1:** B) float

**P2:** B) 7

**P3:** C) 0

**P4:** C) str

**P5:** C) TypeError

**P6:** `/` performs float division and always returns a float (e.g., `5 / 2 = 2.5`). `//` performs integer division (floor division) and returns the integer quotient (e.g., `5 // 2 = 2`).

**P7:** Immutable means the value cannot be changed after creation. All primitive types (int, float, str, bool) are immutable. Any operation that appears to modify them actually creates a new value.

**P8:**
```python
s = "42"
n = int(s)
f = float(n)
result = f + 10.5
result_str = str(result)
print(result_str)
```
