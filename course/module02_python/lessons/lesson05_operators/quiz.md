# Cuestionario: Operadores

## Opción Múltiple (5 questions)

**P1:** What is the result of `15 // 4`?
- A) 3.75
- B) 3
- C) 4
- D) 0

**P2:** What does `15 % 4` return?
- A) 3
- B) 4
- C) 0
- D) 1

**P3:** Which operator checks if two values are equal?
- A) `=`
- B) `!=`
- C) `==`
- D) `:=`

**P4:** What is the result of `not (True and False)`?
- A) True
- B) False
- C) None
- D) Error

**P5:** After `x = 5; x *= 3`, what is the value of `x`?
- A) 5
- B) 3
- C) 15
- D) 8

## Respuesta Corta (2 questions)

**P6:** Explain the difference between `/` and `//` in Python.

**P7:** What is operator precedence and why is it important?

## Pregunta de Programación

**P8:** Write code that checks if a number entered by the user is between 0 and 100 (inclusive). Use comparison operators and logical operators. Print "In range" or "Out of range".

## Clave de Respuestas

**P1:** B) 3

**P2:** A) 3

**P3:** C) `==`

**P4:** A) True

**P5:** C) 15

**P6:** `/` is float division that always returns a float (e.g., `9/4 = 2.25`). `//` is integer (floor) division that returns the integer quotient, discarding the remainder (e.g., `9//4 = 2`).

**P7:** Operator precedence defines the order in which operations are evaluated in an expression. For example, in `3 + 4 * 2`, multiplication has higher precedence than addition, so the result is `11`, not `14`. Understanding precedence prevents calculation errors.

**P8:**
```python
num = float(input("Enter a number: "))
if 0 <= num <= 100:
    print("In range")
else:
    print("Out of range")
```
