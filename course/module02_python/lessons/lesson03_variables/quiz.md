# Quiz: Variables

## Opción Múltiple (5 questions)

**P1:** Which of the following is a valid Python variable name?
- A) `2nd_place`
- B) `my-variable`
- C) `_count`
- D) `class`

**P2:** What is the type of `x` after `x = "42"`?
- A) int
- B) float
- C) str
- D) bool

**P3:** What does `input()` always return?
- A) int
- B) float
- C) str
- D) The type of the input value

**P4:** What is the value of `a` and `b` after `a, b = b, a` if initially `a=3` and `b=7`?
- A) a=3, b=7
- B) a=7, b=3
- C) a=3, b=3
- D) Error

**P5:** Which naming convention does PEP 8 recommend for variables?
- A) camelCase
- B) PascalCase
- C) snake_case
- D) kebab-case

## Respuesta Corta (2 questions)

**P6:** Explain what dynamic typing means in Python and give an example.

**P7:** Why can't you use `if` or `for` as variable names?

## Pregunta de Programación

**P8:** Write code that:
1. Asks the user for their name, age, and favorite color
2. Stores them in variables
3. Prints "Hello [name], you are [age] years old and your favorite color is [color]."

## Clave de Respuestas

**P1:** C) `_count`

**P2:** C) str

**P3:** C) str

**P4:** B) a=7, b=3

**P5:** C) snake_case

**P6:** Dynamic typing means a variable can change its type during execution. For example:
```python
x = 10      # x is int
x = "hello" # x is now str
```
The type is determined by the value assigned, not declared upfront.

**P7:** `if` and `for` are reserved keywords in Python. They are part of the language syntax. Using them as variable names would create ambiguity between the keyword and the variable, so Python raises a `SyntaxError`.

**P8:**
```python
name = input("Enter your name: ")
age = input("Enter your age: ")
color = input("Enter your favorite color: ")
print(f"Hello {name}, you are {age} years old and your favorite color is {color}.")
```
