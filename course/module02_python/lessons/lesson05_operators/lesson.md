---
Module: 2
Lesson Number: 5
Lesson Title: Operadores
Estimated Duration: 45 minutes
Prerequisites: L4 — Tipos de Datos
Learning Objectives:
  - Usar operadores aritméticos para cómputo numérico
  - Usar operadores de comparación para comparar valores
  - Usar operadores lógicos para combinar expresiones booleanas
  - Usar operadores de asignación para actualizar variables
  - Comprender la precedencia de operadores
Keywords: aritméticos, comparación, lógicos, asignación, precedencia de operadores
Programming Concepts: Operadores, expresiones, precedencia de operadores
Datasets Used: Ninguno
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Operadores

## Motivación

Los operadores son las herramientas que te permiten calcular, comparar y combinar valores. Cada programa — desde una calculadora simple hasta un modelo de machine learning — depende de operadores. En biotecnología, usas operadores para calcular concentraciones de fármacos, comparar niveles de expresión génica y determinar significancia. En SaaS, los usas para calcular ingresos, comparar métricas de compromiso de usuarios y evaluar reglas de negocio.

## Panorama General

En la lección anterior, aprendiste sobre los tipos de datos que los valores pueden tener. Ahora aprenderás a realizar operaciones sobre esos valores. Los operadores se basan en tu comprensión de los tipos porque diferentes tipos soportan diferentes operadores. Esto te prepara para las próximas lecciones sobre funciones y control de flujo, donde los operadores se usan en condiciones y cálculos.

## Teoría

### Operadores Aritméticos

Los operadores aritméticos realizan operaciones matemáticas sobre tipos numéricos (int, float).

| Operador | Nombre | Ejemplo | Resultado |
|----------|--------|---------|-----------|
| `+` | Suma | `5 + 3` | `8` |
| `-` | Resta | `5 - 3` | `2` |
| `*` | Multiplicación | `5 * 3` | `15` |
| `/` | División float | `5 / 3` | `1.666...` |
| `//` | División entera | `5 // 3` | `1` |
| `%` | Módulo (resto) | `5 % 3` | `2` |
| `**` | Exponente | `5 ** 3` | `125` |

### Operadores de Comparación

Los operadores de comparación comparan dos valores y devuelven un booleano.

| Operador | Significado | Ejemplo | Resultado |
|----------|-------------|---------|-----------|
| `==` | Igual a | `5 == 3` | `False` |
| `!=` | Distinto de | `5 != 3` | `True` |
| `<` | Menor que | `5 < 3` | `False` |
| `>` | Mayor que | `5 > 3` | `True` |
| `<=` | Menor o igual | `5 <= 5` | `True` |
| `>=` | Mayor o igual | `5 >= 3` | `True` |

### Operadores Lógicos

Los operadores lógicos combinan expresiones booleanas.

| Operador | Descripción | Ejemplo | Resultado |
|----------|-------------|---------|-----------|
| `and` | True si ambos son True | `True and False` | `False` |
| `or` | True si al menos uno es True | `True or False` | `True` |
| `not` | Invierte el booleano | `not True` | `False` |

### Operadores de Asignación

Los operadores de asignación actualizan variables con un cálculo.

| Operador | Ejemplo | Equivalente a |
|----------|---------|---------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `//=` | `x //= 3` | `x = x // 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |

### Precedencia de Operadores

Python sigue la precedencia matemática estándar (PEMDAS):

1. Paréntesis `()`
2. Exponente `**`
3. Unario `+`, `-`
4. Multiplicación `*`, División `/`, División entera `//`, Módulo `%`
5. Suma `+`, Resta `-`
6. Comparación `<`, `<=`, `>`, `>=`, `==`, `!=`
7. `not`
8. `and`
9. `or`

## Explicación Visual

```
Operator Precedence (highest to lowest)

  ()   →   **   →   *,/,//,%   →   +,-   →   ==,!=,<,>   →   not   →   and   →   or

Example:   5 + 3 * 2 ** 2
           = 5 + 3 * 4       (exponentiation first)
           = 5 + 12           (multiplication next)
           = 17               (addition last)
```

## Implementación en Python

```python
# Arithmetic operators
a, b = 10, 3
print(f"a = {a}, b = {b}")
print(f"Addition: {a} + {b} = {a + b}")
print(f"Subtraction: {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Float division: {a} / {b} = {a / b}")
print(f"Integer division: {a} // {b} = {a // b}")
print(f"Modulus: {a} % {b} = {a % b}")
print(f"Exponentiation: {a} ** {b} = {a ** b}")
```

```python
# Comparison operators
x, y = 5, 8
print(f"{x} == {y}: {x == y}")
print(f"{x} != {y}: {x != y}")
print(f"{x} < {y}: {x < y}")
print(f"{x} > {y}: {x > y}")
print(f"{x} <= {y}: {x <= y}")
print(f"{x} >= {y}: {x >= y}")
```

```python
# Logical operators
has_glucose = True
has_insulin = False

print(has_glucose and has_insulin)  # False
print(has_glucose or has_insulin)   # True
print(not has_glucose)              # False
```

```python
# Assignment operators
count = 0
count += 5   # count = 5
count *= 2   # count = 10
count -= 3   # count = 7
count //= 2  # count = 3
print(f"Final count: {count}")
```

## Biotechnology Example

**Escenario**: Analyzing drug dose-response data.

```python
# Drug dose-response calculation
dose_mg = 50
weight_kg = 70
half_life_hours = 6
time_hours = 24

# Calculate concentration after n half-lives
concentration = dose_mg / weight_kg * (0.5) ** (time_hours / half_life_hours)

# Check if concentration is in therapeutic range
therapeutic_min = 0.1
therapeutic_max = 1.0
in_range = therapeutic_min <= concentration <= therapeutic_max

print(f"Dose: {dose_mg} mg")
print(f"Patient weight: {weight_kg} kg")
print(f"Concentration after {time_hours}h: {concentration:.3f} mg/kg")
print(f"In therapeutic range: {in_range}")
```

## SaaS Example

**Escenario**: Evaluating customer churn risk.

```python
# Customer churn risk assessment
days_since_login = 45
support_tickets = 3
subscription_tier = "basic"  # basic, premium, enterprise
monthly_spend = 29.99

# Churn risk factors
low_engagement = days_since_login > 30
multiple_issues = support_tickets >= 3
is_basic_tier = subscription_tier == "basic"
high_churn_risk = (low_engagement or multiple_issues) and is_basic_tier

print(f"Low engagement: {low_engagement}")
print(f"Multiple issues: {multiple_issues}")
print(f"Basic tier: {is_basic_tier}")
print(f"High churn risk: {high_churn_risk}")
```

## Errores Comunes

1. **Usar `=` en lugar de `==` para comparación**: `if x = 5:` es asignación, no comparación
2. **División entera cuando se necesita float**: `5/2 = 2.5` (Python 3), pero `5//2 = 2`
3. **Encadenar comparaciones incorrectamente**: Python permite `a < b < c`, que es `a < b and b < c`
4. **Confundir precedencia de operadores**: `3 + 4 * 2 = 11`, no `14`
5. **Módulo con números negativos**: `-5 % 3 = 1` (no -2)

## Buenas Prácticas

- Usa paréntesis para hacer explícita la precedencia
- Usa `+=` y operadores similares para código más limpio
- Usa `==` con cuidado para comparación float; usa `abs(a-b) < epsilon`
- Aprovecha las comparaciones encadenadas de Python: `0 <= x <= 100`
- Usa `not` con moderación — reescribe condiciones para legibilidad

## Resumen

- Aritméticos: `+`, `-`, `*`, `/`, `//`, `%`, `**`
- Comparación: `==`, `!=`, `<`, `>`, `<=`, `>=` (devuelven bool)
- Lógicos: `and`, `or`, `not`
- Asignación: `=`, `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`
- Precedencia: `()` → `**` → `*,/` → `+,-` → comparaciones → `not` → `and` → `or`
- Usa paréntesis para claridad

## Términos Clave

- **Operador**: Símbolo que realiza una operación sobre operandos
- **Operando**: Valor sobre el que actúa un operador
- **Expresión**: Combinación de operadores y operandos que se evalúa a un valor
- **Precedencia**: Reglas que determinan el orden de evaluación
- **Módulo**: Resto después de la división
- **Evaluación de cortocircuito**: `and`/`or` dejan de evaluar cuando el resultado está determinado

## Ejercicios

### Nivel 1: Básico

1. ¿Cuál es el resultado de `15 // 4` y `15 % 4`?
2. ¿Cuál es el valor de `3 + 4 * 2 ** 3`?
3. ¿A qué evalúa `not (True and False)`?

### Nivel 2: Implementación

4. Escribe código que verifique si un número es par (usa `%`) e imprima "par" o "impar".
5. Escribe una calculadora de IMC: peso (kg) / altura² (m). Categoriza como bajo peso (< 18.5), normal (18.5-24.9), sobrepeso (25-29.9), obeso (≥ 30).

### Nivel 3: Pensamiento Crítico

6. ¿Por qué `0.1 + 0.2 == 0.3` devuelve False? ¿Cómo compararías resultados de punto flotante de forma segura?
7. Evaluación de cortocircuito: ¿Qué imprime `False and print("hello")`? ¿Por qué?

## Desafío de Programación

Escribe un programa que:
1. Pida el número de muestras de ADN, el costo por muestra y el presupuesto disponible
2. Calcule el costo total y si está dentro del presupuesto
3. Aplique un descuento del 15% si el número de muestras > 100
4. Calcule el presupuesto restante después de la compra
5. Use al menos un operador de cada categoría (aritmético, comparación, lógico, asignación)
6. Prints a formatted summary of all calculations
