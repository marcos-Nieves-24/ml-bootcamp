---
Module: 2
Lesson Number: 6
Lesson Title: Funciones
Estimated Duration: 60 minutes
Prerequisites: L5 — Operadores
Learning Objectives:
  - Definir funciones usando la palabra clave def
  - Pasar argumentos y devolver valores desde funciones
  - Distinguir entre ámbito local y global
  - Crear funciones lambda (anónimas)
  - Escribir docstrings siguiendo PEP 257
Keywords: función, parámetro, argumento, retorno, ámbito, lambda, docstring
Programming Concepts: Definición de funciones, paso de parámetros, ámbito, expresiones lambda, documentación
Datasets Used: Ninguno
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Funciones

## Motivación

Las funciones son bloques de código reutilizables que resuelven una tarea específica. En lugar de escribir el mismo código múltiples veces, lo defines una vez en una función y la llamas cuando sea necesario. Esta es la base de la programación modular y mantenible. En biotecnología, las funciones encapsulan análisis de secuencias de ADN, pruebas estadísticas y pasos de preprocesamiento de datos. En SaaS, las funciones calculan métricas, filtran datos y generan informes.

## Panorama General

En lecciones anteriores, aprendiste variables, tipos de datos y operadores. Las funciones combinan estos elementos en unidades reutilizables. Las próximas lecciones sobre bucles y condicionales se usarán dentro de funciones para crear lógica reutilizable poderosa.

## Teoría

### ¿Qué es una Función?

Una función es un bloque de código nombrado que recibe entradas (parámetros), realiza un cómputo y devuelve una salida. Las funciones promueven el principio DRY (Don't Repeat Yourself — No te Repitas).

### Definir y Llamar Funciones

```python
def function_name(parameter1, parameter2):
    """Docstring explaining the function."""
    result = parameter1 + parameter2
    return result
```

### Componentes de una Función

1. **Palabra clave def**: Inicia la definición de la función
2. **Nombre de la función**: Sigue las convenciones de nomenclatura (snake_case)
3. **Parámetros**: Variables que reciben valores de entrada
4. **Dos puntos**: Terminan el encabezado de la función
5. **Cuerpo**: Bloque de código indentado
6. **return**: Envía la salida de vuelta al llamante
7. **Docstring**: Cadena de documentación (opcional pero recomendada)

### Parámetros vs Argumentos

- **Parámetro**: Variable listada en la definición de la función
- **Argumento**: Valor pasado a la función cuando se llama

### Tipos de Argumentos

```python
# Positional arguments (required, in order)
def add(x, y):
    return x + y
add(3, 5)  # x=3, y=5

# Keyword arguments (order doesn't matter)
add(y=5, x=3)  # x=3, y=5

# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
greet("Alice")        # "Hello, Alice!"
greet("Bob", "Hi")    # "Hi, Bob!"

# Variable-length arguments
def sum_all(*args):
    return sum(args)
sum_all(1, 2, 3, 4)  # 10
```

### Valores de Retorno

Las funciones pueden devolver:
- Un solo valor: `return x`
- Múltiples valores: `return x, y` (devuelve una tupla)
- Nada: `return None` (o sin declaración return)

### Ámbito (Scope)

- **Ámbito local**: Las variables definidas dentro de una función solo son accesibles allí
- **Ámbito global**: Las variables definidas fuera de cualquier función son accesibles en todas partes

```python
x = 10  # global

def my_func():
    y = 5  # local
    print(x)  # can access global
    print(y)  # can access local

my_func()
print(x)  # works
print(y)  # NameError
```

### Funciones Lambda

Las funciones lambda son funciones anónimas de una sola expresión:

```python
# Regular function
def square(x):
    return x ** 2

# Lambda equivalent
square = lambda x: x ** 2

# Often used inline
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x ** 2, numbers))
```

### Docstrings (PEP 257)

```python
def calculate_bmi(weight, height):
    """
    Calculate Body Mass Index.

    Parameters
    ----------
    weight : float
        Weight in kilograms.
    height : float
        Height in meters.

    Returns
    -------
    float
        BMI value.
    """
    return weight / (height ** 2)
```

## Explicación Visual

```
┌─────────────────────────────────────────────────────┐
│                    Function Flow                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Caller: result = add(3, 5)                         │
│                                                     │
│         ┌──────────────────────────────────┐         │
│  3 ────→│ def add(x, y):                  │         │
│         │     """Add two numbers."""      │         │
│  5 ────→│     return x + y                │──→ 8    │
│         └──────────────────────────────────┘         │
│                                                     │
│  Parameters: x=3, y=5    Return: 8                  │
└─────────────────────────────────────────────────────┘
```

## Implementación en Python

```python
# Basic function
def calculate_gc_content(dna_sequence):
    """Calculate the GC content of a DNA sequence."""
    sequence = dna_sequence.upper()
    gc_count = sequence.count("G") + sequence.count("C")
    return (gc_count / len(sequence)) * 100

# Call the function
gc = calculate_gc_content("ATCGGCTAGCTAGCATCG")
print(f"GC content: {gc:.1f}%")
```

```python
# Function with multiple parameters and default values
def analyze_sequence(sequence, min_length=10, gc_threshold=50.0):
    """Analyze a DNA sequence for quality."""
    seq_len = len(sequence)
    gc = (sequence.count("G") + sequence.count("C")) / seq_len * 100
    is_long = seq_len >= min_length
    is_gc_ok = gc >= gc_threshold
    
    return {
        "length": seq_len,
        "gc_content": gc,
        "passes_quality": is_long and is_gc_ok
    }

result = analyze_sequence("ATCGATCGATCG")
print(result)
```

```python
# Lambda functions in practice
sequences = ["ATCG", "GGCC", "AATT", "CGAT"]
sorted_by_gc = sorted(sequences, key=lambda seq: seq.count("G") + seq.count("C"))
print(sorted_by_gc)
```

## Biotechnology Example

**Escenario**: A bioinformatics pipeline for quality-checking DNA sequences.

```python
def reverse_complement(sequence):
    """Return the reverse complement of a DNA sequence."""
    complement = {"A": "T", "T": "A", "C": "G", "G": "C"}
    return "".join(complement[base] for base in reversed(sequence.upper()))

def has_restriction_site(sequence, enzyme_site="GAATTC"):
    """Check if a restriction enzyme site exists in the sequence."""
    return enzyme_site in sequence.upper()

# Usage
dna = "ATGAATTCGCTAGCTAGCTAG"
rc = reverse_complement(dna)
has_site = has_restriction_site(dna)

print(f"Original: {dna}")
print(f"Reverse complement: {rc}")
print(f"Contains EcoRI site (GAATTC): {has_site}")
```

## SaaS Example

**Escenario**: Customer metrics calculation for a SaaS dashboard.

```python
def calculate_arpu(revenue, active_users):
    """Calculate Average Revenue Per User."""
    if active_users == 0:
        return 0.0
    return revenue / active_users

def churn_rate(lost_customers, start_customers):
    """Calculate customer churn rate as a percentage."""
    if start_customers == 0:
        return 0.0
    return (lost_customers / start_customers) * 100

def customer_health_score(logins, support_tickets, days_active):
    """Calculate a composite customer health score (0-100)."""
    login_score = min(logins * 10, 50)
    ticket_penalty = min(support_tickets * 5, 30)
    activity_score = min(days_active / 30 * 50, 50)
    return max(login_score + activity_score - ticket_penalty, 0)

# Usage
revenue = 125000
users = 15420
lost = 540
health = customer_health_score(logins=45, support_tickets=2, days_active=180)
print(f"ARPU: ${calculate_arpu(revenue, users):.2f}")
print(f"Churn: {churn_rate(lost, users):.1f}%")
print(f"Health Score: {health}/100")
```

## Errores Comunes

1. **Olvidar los paréntesis al llamar**: `result = my_func` (referencia la función) vs `result = my_func()` (la llama)
2. **Modificar variables globales dentro de funciones**: Usa la palabra clave `global` si es necesario, pero prefiere pasar parámetros
3. **Argumentos por defecto mutables**: `def f(x=[])` — la lista se comparte entre llamadas. Usa `def f(x=None)` en su lugar.
4. **No devolver un valor**: Las funciones sin `return` devuelven `None`
5. **Sombrear funciones incorporadas**: No nombres variables `list`, `str`, `print`

## Buenas Prácticas

- Las funciones deberían hacer una cosa bien (Principio de Responsabilidad Única)
- Usa nombres descriptivos que indiquen lo que hace la función
- Escribe docstrings para todas las funciones públicas
- Mantén las funciones cortas (típicamente < 20-30 líneas)
- Usa type hints para mejor legibilidad (Python 3.5+)
- Prefiere devolver valores en lugar de imprimir dentro de funciones

## Resumen

- Las funciones son bloques de código reutilizables definidos con `def`
- Los parámetros reciben entradas; `return` envía salidas
- Python soporta argumentos posicionales, de palabra clave, por defecto y de longitud variable
- Las variables dentro de funciones son locales; las variables fuera son globales
- Las funciones lambda son funciones anónimas de una sola expresión
- Los docstrings documentan el propósito y uso de la función

## Términos Clave

- **Función**: Bloque de código reutilizable nombrado
- **Parámetro**: Variable en la definición de la función
- **Argumento**: Valor pasado al llamar una función
- **Valor de retorno**: Salida enviada de vuelta al llamante
- **Ámbito (Scope)**: Región donde una variable es accesible
- **Lambda**: Función anónima en línea
- **Docstring**: Cadena de documentación para funciones
- **DRY**: Principio de No Repetición

## Ejercicios

### Nivel 1: Básico

1. ¿Cuál es la diferencia entre un parámetro y un argumento?
2. ¿Qué devuelve una función si no tiene declaración `return`?
3. ¿Cuál es el propósito de un docstring?

### Nivel 2: Implementación

4. Escribe una función `is_palindrome(s)` que verifique si un string es un palíndromo (se lee igual al derecho y al revés).
5. Escribe una función `mean(numbers)` que calcule el promedio de una lista de números sin usar `statistics.mean()`.

### Nivel 3: Pensamiento Crítico

6. ¿Por qué son peligrosos los argumentos por defecto mutables (como `def f(x=[])`)? ¿Cuál es la alternativa recomendada?
7. Compara y contrasta las funciones en Python con las funciones en matemáticas. ¿En qué se parecen? ¿En qué se diferencian?

## Desafío de Programación

Escribe un módulo `sequence_tools.py` con estas funciones:
1. `gc_content(sequence)` — calcula el porcentaje de GC
2. `reverse_complement(sequence)` — devuelve el complemento inverso
3. `has_motif(sequence, motif)` — verifica si existe un motivo
4. `filter_sequences(sequences, min_gc=40, max_gc=60)` — filtra una lista de secuencias por rango de contenido GC

Include docstrings for each function and a `if __name__ == "__main__":` block that demonstrates usage.
