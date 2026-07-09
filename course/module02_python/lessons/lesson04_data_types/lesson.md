---
Module: 2
Lesson Number: 4
Lesson Title: Tipos de Datos
Estimated Duration: 60 minutes
Prerequisites: L3 — Variables
Learning Objectives:
  - Identificar los cuatro tipos de datos básicos: int, float, str, bool
  - Usar type() para inspeccionar tipos de variables
  - Convertir entre tipos de datos usando int(), float(), str(), bool()
  - Explicar la diferencia entre tipos mutables e inmutables
  - Manejar errores de tipo apropiadamente
Keywords: int, float, str, bool, type conversion, type casting, type()
Difficulty: Principiante
Programming Concepts: Primitive types, type conversion, type checking
Datasets Used: Ninguno
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Tipos de Datos

## Motivación

Cada pieza de datos en Python tiene un tipo que determina qué operaciones son posibles. Sumar dos números es aritmética; sumar dos strings es concatenación. Entender los tipos es crucial porque los errores de tipo están entre los bugs más comunes en programas Python. En biotecnología, necesitas distinguir entre conteos enteros (número de células), mediciones float (ratios de expresión génica), strings (secuencias de ADN) y booleanos (mutación presente/ausente). En SaaS, trabajas con conteos enteros de usuarios, ingresos float, nombres de clientes string y estado de suscripción booleano.

## Panorama General

En la lección anterior, aprendiste a almacenar valores en variables. Ahora entenderás los diferentes tipos de valores que las variables pueden contener. Esto te prepara para la próxima lección sobre operadores, donde cada tipo de dato soporta diferentes operaciones.

## Teoría

### Los Cuatro Tipos de Datos Básicos

Python tiene cuatro tipos de datos primitivos:

1. **int** (entero): Números enteros sin punto decimal
   - Ejemplos: `42`, `-7`, `0`, `1_000_000`
   - Precisión arbitraria (sin desbordamiento)

2. **float** (punto flotante): Números con punto decimal
   - Ejemplos: `3.14`, `-0.001`, `1.5e10`
   - Sigue el estándar IEEE 754 de doble precisión
   - Precisión limitada (~15-17 dígitos decimales)

3. **str** (string/cadena): Secuencia de caracteres entre comillas
   - Ejemplos: `"Hello"`, `'DNA'`, `"ATGCTGA"`, `""` (cadena vacía)
   - Puede usar comillas simples, dobles o triples para multilínea

4. **bool** (booleano): Valores lógicos
   - Solo dos valores: `True` y `False`
   - Internamente, `True` = 1 y `False` = 0

### Verificación de Tipo con type()

```python
x = 42
print(type(x))       # <class 'int'>

y = 3.14
print(type(y))       # <class 'float'>

z = "Hello"
print(type(z))       # <class 'str'>

w = True
print(type(w))       # <class 'bool'>
```

### Conversión de Tipo (Casting)

Puedes convertir explícitamente entre tipos:

```python
# int to float
x = float(42)        # 42.0

# float to int (truncation, not rounding)
y = int(3.99)        # 3

# number to string
s = str(42)          # "42"

# string to number
n = int("42")        # 42
f = float("3.14")    # 3.14

# anything to bool
bool(0)              # False
bool(1)              # True
bool("")             # False (empty string)
bool("hello")        # True (non-empty string)
```

### Tipos Mutables vs Inmutables

- **Inmutable**: int, float, bool, str — no pueden cambiarse después de su creación
- **Mutable**: list, dict, set — pueden modificarse (cubiertos en lecciones posteriores)

```python
name = "BRCA1"
name[0] = "A"  # TypeError: 'str' object does not support item assignment
```

### Valores Especiales

- **None**: Representa la ausencia de un valor
- **inf**: Infinito (float)
- **nan**: No es un Número (float)

```python
result = None
infinity = float('inf')
not_a_number = float('nan')
```

## Explicación Visual

```
┌─────────────────────────────────────────────────────┐
│              Python Primitive Data Types             │
├─────────────────────────────────────────────────────┤
│                                                     │
│  int           float         str           bool     │
│  ┌──────┐     ┌──────┐     ┌──────────┐   ┌────┐   │
│  │ 42   │     │ 3.14 │     │ "Hello"  │   │True│   │
│  │ -7   │     │-0.001│     │ "ATCGT"  │   │False│   │
│  │ 0    │     │ 1e10 │     │ ""       │   └────┘   │
│  └──────┘     └──────┘     └──────────┘            │
│                                                     │
│  Whole          Decimal      Character              │
│  numbers        numbers      sequences              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Implementación en Python

```python
# Demonstrating all four types
gene_count = 25000                      # int
mutation_rate = 0.0015                  # float
gene_name = "TP53"                      # str
is_cancer_associated = True             # bool

print(f"Gene count: {gene_count} ({type(gene_count)})\"")
print(f"Mutation rate: {mutation_rate} ({type(mutation_rate)})\"")
print(f"Gene name: {gene_name} ({type(gene_name)})\"")
print(f"Cancer associated: {is_cancer_associated} ({type(is_cancer_associated)})\"")
```

```python
# Type conversion examples
count_str = "1500"
count_int = int(count_str)
count_float = float(count_int)

print(f"String: {count_str} (type: {type(count_str)})")
print(f"Integer: {count_int} (type: {type(count_int)})")
print(f"Float: {count_float} (type: {type(count_float)})")

# Float to int truncates
print(int(3.999))   # 3
print(int(3.001))   # 3
```

```python
# Boolean conversion
print(bool(1))      # True
print(bool(0))      # False
print(bool(-1))     # True (any non-zero is True)
print(bool(""))     # False
print(bool("abc"))  # True
print(bool([]))     # False (empty list)
print(bool(None))   # False
```

```python
# Common type errors
result = "The answer is " + 42     # TypeError: can only concatenate str
result = "The answer is " + str(42)  # Correct
```

## Biotechnology Example

**Escenario**: Processing gene expression data from a microarray experiment.

```python
gene_name = "EGFR"
expression_ratio = 2.45      # float: fold change
p_value = 0.003              # float: significance
is_significant = p_value < 0.05  # bool
sample_count = 48            # int: number of samples

print(f"Gene: {gene_name}")
print(f"Expression ratio: {expression_ratio:.2f}")
print(f"p-value: {p_value}")
print(f"Significant: {is_significant}")
print(f"Sample size: {sample_count}")

# Type check before analysis
if isinstance(expression_ratio, float):
    print("Valid expression ratio type ✓")
```

## SaaS Example

**Escenario**: Processing customer subscription data.

```python
customer_name = "Acme Corp"
active_users = 342
monthly_revenue = 45900.75
is_premium = True
discount_rate = 0.15

annual_revenue = monthly_revenue * 12
discounted_revenue = annual_revenue * (1 - discount_rate)

print(f"Customer: {customer_name} (premium: {is_premium})")
print(f"Active users: {active_users}")
print(f"Annual revenue: ${annual_revenue:,.2f}")
print(f"After discount: ${discounted_revenue:,.2f}")
```

## Errores Comunes

1. **Concatenación de strings con no-strings**: `"count: " + 5` genera TypeError
2. **Pérdida de precisión con float**: `0.1 + 0.2 != 0.3` exactamente (aritmética de punto flotante)
3. **División de enteros en Python 3**: `5 / 2 = 2.5` (float), pero `5 // 2 = 2` (entero)
4. **Confundir `=` y `==`**: Asignación vs comparación de igualdad
5. **Olvidar que `input()` devuelve un string**: Siempre convierte la entrada numérica

## Buenas Prácticas

- Usa `isinstance()` para verificar tipos en lugar de `type() ==`
- Convierte tipos explícitamente en lugar de depender de la conversión implícita
- Usa `//` para división entera, `/` para división float
- Usa guiones bajos en números grandes: `1_000_000` en lugar de `1000000`
- Ten en cuenta las limitaciones de precisión de punto flotante

## Resumen

- Python tiene cuatro tipos primitivos: int, float, str, bool
- Usa `type()` para verificar el tipo de un valor
- La conversión de tipo usa funciones nombradas según el tipo: `int()`, `float()`, `str()`, `bool()`
- Los strings son inmutables — no pueden modificarse en el lugar
- `None` representa la ausencia de un valor
- Los errores de tipo son comunes y generalmente involucran mezclar strings con números

## Términos Clave

- **int**: Tipo entero para números enteros
- **float**: Tipo de punto flotante para números decimales
- **str**: Tipo cadena para texto
- **bool**: Tipo booleano para valores True/False
- **Conversión de tipo**: Cambiar un valor de un tipo a otro
- **Inmutable**: No se puede cambiar después de la creación
- **None**: Valor nulo de Python
- **TypeError**: Excepción lanzada al operar con tipos incompatibles

## Ejercicios

### Nivel 1: Básico

1. ¿Qué tipo devuelve `type(3.0)`?
2. ¿Cuál es el resultado de `int(7.9)` y por qué?
3. ¿Qué valores se convierten a `False` cuando se pasan a `bool()`?

### Nivel 2: Implementación

4. Escribe una función que reciba un string como "3.14" y devuelva tanto la parte float como la entera.
5. Pide al usuario dos números, súmalos e imprime el resultado. Maneja la conversión de tipo correctamente.

### Nivel 3: Pensamiento Crítico

6. ¿Por qué `0.1 + 0.2` no es igual a `0.3` en aritmética de punto flotante? ¿Cómo compararías números de punto flotante de forma segura?
7. ¿Cuándo usarías explícitamente `bool()` en lugar de confiar en valores truthy/falsy?

## Desafío de Programación

Escribe un programa que:
1. Pida el nombre del usuario (string), edad (int) y salario (float)
2. Pregunte si es estudiante (convierte la respuesta a bool: "sí"/"no")
3. Almacene cada valor con el tipo correcto
4. Imprima un resumen: "[Nombre] tiene [edad] años, gana $[salario], estudiante: [True/False]"
5. Calcule e imprima: "Salario después de aumento del 10%: $[cantidad]"
6. Maneje los errores de conversión de tipo adecuadamente
