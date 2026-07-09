# Cuestionario: Variables

## Opción Múltiple (5 preguntas)

**P1:** ¿Cuál de los siguientes es un nombre de variable válido en Python?
- A) `2nd_place`
- B) `my-variable`
- C) `_count`
- D) `class`

**P2:** ¿Cuál es el tipo de `x` después de `x = "42"`?
- A) int
- B) float
- C) str
- D) bool

**P3:** ¿Qué devuelve `input()` siempre?
- A) int
- B) float
- C) str
- D) El tipo del valor ingresado

**P4:** ¿Cuál es el valor de `a` y `b` después de `a, b = b, a` si inicialmente `a=3` y `b=7`?
- A) a=3, b=7
- B) a=7, b=3
- C) a=3, b=3
- D) Error

**P5:** ¿Qué convención de nomenclatura recomienda PEP 8 para variables?
- A) camelCase
- B) PascalCase
- C) snake_case
- D) kebab-case

## Respuesta Corta (2 questions)

**P6:** Explica qué significa el tipado dinámico en Python y da un ejemplo.

**P7:** ¿Por qué no puedes usar `if` o `for` como nombres de variables?

## Pregunta de Programación

**P8:** Escribe código que:
1. Pida al usuario su nombre, edad y color favorito
2. Los almacene en variables
3. Imprima "Hola [nombre], tienes [edad] años y tu color favorito es [color]."

## Clave de Respuestas

**P1:** C) `_count`

**P2:** C) str

**P3:** C) str

**P4:** B) a=7, b=3

**P5:** C) snake_case

**P6:** El tipado dinámico significa que una variable puede cambiar su tipo durante la ejecución. Por ejemplo:
```python
x = 10      # x is int
x = "hello" # x is now str
```
El tipo está determinado por el valor asignado, no declarado de antemano.

**P7:** `if` y `for` son palabras clave reservadas en Python. Son parte de la sintaxis del lenguaje. Usarlas como nombres de variables crearía ambigüedad entre la palabra clave y la variable, por lo que Python lanza un `SyntaxError`.

**P8:**
```python
name = input("Enter your name: ")
age = input("Enter your age: ")
color = input("Enter your favorite color: ")
print(f"Hello {name}, you are {age} years old and your favorite color is {color}.")
```
