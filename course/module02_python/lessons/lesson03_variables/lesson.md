---
Module: 2
Lesson Number: 3
Lesson Title: Variables
Estimated Duration: 45 minutes
Prerequisites: L2 — Jupyter Notebook
Learning Objectives:
  - Explicar qué es una variable y cómo funciona la asignación
  - Seguir las convenciones de nomenclatura de Python para variables
  - Explicar el tipado dinámico y la inferencia de tipos
  - Usar entrada/salida básica con print() y input()
  - Reasignar variables y comprender el estado mutable
Keywords: variable, assignment, naming convention, dynamic typing, I/O, print
Difficulty: Principiante
Programming Concepts: Variable assignment, naming, scope, type inference
Datasets Used: Ninguno
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Variables

## Motivación

Las variables son los componentes fundamentales de cualquier programa. Te permiten almacenar, etiquetar y manipular datos. Sin variables, tendrías que hardcodear cada valor, haciendo que los programas sean inflexibles e ilegibles. En biotecnología, las variables almacenan secuencias de ADN, niveles de expresión génica, edades de pacientes y concentraciones de fármacos. En SaaS, las variables almacenan cantidades de usuarios, cifras de ingresos, tasas de abandono y nombres de clientes. Dominar las variables es tu primer paso para escribir programas significativos en Python.

## Panorama General

En la lección anterior, aprendiste a ejecutar código Python en Jupyter Notebook. Ahora aprenderás a almacenar y gestionar datos usando variables. Esto te prepara directamente para la próxima lección sobre tipos de datos, donde aprenderás sobre los diferentes tipos de datos que las variables pueden contener.

## Teoría

### ¿Qué es una Variable?

Una **variable** es una ubicación nombrada en la memoria que almacena un valor. Piensa en ella como una caja etiquetada donde puedes poner datos. La etiqueta es el nombre de la variable y el contenido es el valor.

### Asignación de Variables

En Python, el operador `=` asigna un valor a una variable:

```python
x = 5          # Assign integer 5 to variable x
name = "Alice" # Assign string "Alice" to variable name
pi = 3.14159   # Assign float 3.14159 to variable pi
```

### Tipado Dinámico

Python tiene **tipado dinámico** — las variables pueden cambiar de tipo durante la ejecución. El tipo se infiere del valor:

```python
value = 10     # value is an int
value = 3.14   # now value is a float
value = "text" # now value is a string
```

### Convenciones de Nomenclatura

Los nombres de variables en Python deben seguir estas reglas:
- Pueden contener letras (a-z, A-Z), dígitos (0-9) y guiones bajos (_)
- No pueden comenzar con un dígito
- Distinguen mayúsculas y minúsculas (`age` ≠ `Age`)
- No pueden ser palabras clave de Python (`if`, `for`, `while`, `class`, etc.)

**Estilo recomendado (PEP 8):** Usa `snake_case` para nombres de variables:
```python
gene_expression = 0.85
max_iterations = 1000
customer_churn_rate = 0.12
```

### Constantes

Por convención, las constantes se escriben en `UPPER_SNAKE_CASE`:
```python
MAX_SPEED = 120
PI = 3.14159
```

### Asignación Múltiple

Puedes asignar múltiples variables en una línea:
```python
a, b, c = 1, 2, 3
x = y = z = 0  # All three variables get the value 0
```

### Entrada/Salida Básica

```python
# Output
print("Hello, World!")
print("Value:", 42)

# Input — always returns a string
name = input("Enter your name: ")
```

## Explicación Visual

```
┌─────────────────────────────────────────────────────────┐
│                    Variable in Memory                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   Variable Name:  temperature                           │
│   Memory Address: 0x7f8a2b3c4d5e                        │
│   Value:          36.6                                  │
│   Type:           float                                 │
│                                                         │
└─────────────────────────────────────────────────────────┘

Assignment Flow:
┌─────────┐     ┌──────────────┐     ┌─────────────────┐
│ Value   │ ──→ │ = Operator   │ ──→ │ Variable in     │
│ 36.6    │     │ temperature  │     │ Memory          │
└─────────┘     └──────────────┘     └─────────────────┘
```

## Implementación en Python

```python
# Variable assignment
dna_sequence = "ATCGATCGATCG"
gene_count = 25000
mutation_rate = 0.001

print(dna_sequence)
print(gene_count)
print(mutation_rate)
```

```python
# Dynamic typing demonstration
data = 42
print(type(data))  # <class 'int'>

data = 3.14
print(type(data))  # <class 'float'>

data = "DNA"
print(type(data))  # <class 'str'>
```

```python
# Input and output
name = input("Enter patient name: ")
age = int(input("Enter age: "))  # Convert string to int
temperature = float(input("Enter body temperature: "))

print(f"Patient: {name}")
print(f"Age: {age}")
print(f"Temperature: {temperature}°C")
```

```python
# Swapping variables
a = 5
b = 10
a, b = b, a  # Swap — very Pythonic!
print(a, b)   # 10 5
```

## Biotechnology Example

**Escenario**: Seguimiento de signos vitales de pacientes in a clinical trial.

```python
patient_id = "P-0042"
age = 45
heart_rate = 72
systolic_bp = 120
diastolic_bp = 80
diagnosis = "Hypertension"

print(f"Patient {patient_id}: Age {age}, HR {heart_rate}, BP {systolic_bp}/{diastolic_bp}")
print(f"Diagnosis: {diagnosis}")
```

## SaaS Example

**Escenario**: Seguimiento de métricas de negocio SaaS.

```python
company_name = "DataCloud Inc."
monthly_revenue = 125000
active_users = 15420
churn_rate = 0.035  # 3.5%
average_revenue_per_user = monthly_revenue / active_users

print(f"Company: {company_name}")
print(f"Monthly Revenue: ${monthly_revenue:,.2f}")
print(f"Active Users: {active_users:,}")
print(f"Churn Rate: {churn_rate:.1%}")
print(f"ARPU: ${average_revenue_per_user:.2f}")
```

## Errores Comunes

1. **Usar variables no definidas**: `print(x)` antes de `x = 5` genera `NameError`
2. **Escribir mal los nombres de variables**: `temperature` vs `temperture`
3. **Usar palabras clave reservadas**: `if = 10` genera `SyntaxError`
4. **Olvidar convertir la entrada**: `input()` devuelve un string; usa `int()` o `float()` para números
5. **Confundir mayúsculas y minúsculas**: `data` y `Data` son variables diferentes

## Buenas Prácticas

- Usa nombres de variables descriptivos y significativos
- Sigue la convención `snake_case`
- Evita nombres de una sola letra excepto para contadores (i, j, k)
- Inicializa las variables antes de usarlas
- Usa constantes para valores fijos (UPPER_SNAKE_CASE)
- Una variable por propósito lógico

## Resumen

- Las variables almacenan valores en ubicaciones de memoria nombradas
- Python tiene tipado dinámico — los tipos se infieren
- Usa `=` para asignación y `print()` para salida
- Los nombres de variables deben seguir reglas (letras, dígitos, guiones bajos)
- PEP 8 recomienda nomenclatura `snake_case`
- `input()` lee la entrada del usuario como un string

## Términos Clave

- **Variable**: Ubicación de almacenamiento nombrada para un valor
- **Asignación**: Usar `=` para dar un valor a una variable
- **Tipado dinámico**: Las variables pueden cambiar de tipo en tiempo de ejecución
- **PEP 8**: Guía de estilo de Python
- **snake_case**: Convención de nomenclatura que usa guiones bajos
- **Inferencia de tipos**: Python deduce el tipo a partir del valor
- **NameError**: Excepción que se lanza al usar una variable no definida

## Ejercicios

### Nivel 1: Básico

1. ¿Cuáles de los siguientes son nombres de variables válidos en Python? `2nd_place`, `my_var`, `class`, `_count`, `user-name`
2. ¿Cuál es el tipo de `x` después de `x = "3.14"`?
3. ¿Qué hace `print()`?

### Nivel 2: Implementación

4. Escribe un programa que pida la altura del usuario en metros y el peso en kilogramos, luego calcule e imprima el IMC (peso / altura²).
5. Crea tres variables con diferentes tipos y usa `type()` para verificar cada una.

### Nivel 3: Pensamiento Crítico

6. ¿Por qué el tipado dinámico es tanto una fortaleza como una debilidad de Python? Proporciona un ejemplo de un error que el tipado dinámico podría causar.
7. En bases de código grandes, ¿por qué es más importante usar nombres de variables descriptivos que escribir código corto?

## Desafío de Programación

Escribe un programa que:
1. Pida un nombre de gen, un nivel de expresión y un valor p
2. Almacene estos valores en variables
3. Imprima un resumen formateado: "Gen: [nombre], Expresión: [nivel], valor p: [p]"
4. Determine si el resultado es significativo (valor p < 0.05) y almacene el resultado booleano
5. Imprima "Significativo: True/False"
