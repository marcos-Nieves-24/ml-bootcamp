---
Module: 2
Lesson Number: 7
Lesson Title: Bucles
Estimated Duration: 60 minutes
Prerequisites: L6 — Funciones
Learning Objectives:
  - Usar bucles for para iterar sobre secuencias
  - Usar bucles while para iteración condicional
  - Usar range() para generar secuencias numéricas
  - Controlar el flujo del bucle con break y continue
  - Escribir bucles anidados para datos multidimensionales
Keywords: for, while, range, break, continue, bucle anidado, iteración
Programming Concepts: Iteración, control de bucles, bucles anidados
Datasets Used: Ninguno
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Bucles

## Motivación

Los bucles te permiten repetir operaciones de forma eficiente. En lugar de escribir el mismo código para cada elemento en un conjunto de datos, escribes un bucle que procesa todos los elementos automáticamente. En biotecnología, los bucles procesan miles de genes, secuencias de ADN o registros de pacientes. En SaaS, iteran sobre transacciones de usuarios, entradas de registro y cálculos de características. Sin bucles, el análisis de datos a escala sería imposible.

## Panorama General

En la lección anterior, aprendiste funciones — bloques de código reutilizables. Los bucles añaden repetición a tu kit de herramientas. Combinados con condicionales (próxima lección), los bucles te permiten construir pipelines complejos de procesamiento de datos. Después de esta lección, entenderás mejor las listas (Lección 9) porque los bucles son la forma principal de procesar elementos de listas.

## Teoría

### El Bucle for

El bucle `for` itera sobre una secuencia (string, lista, tupla, etc.):

```python
for variable in sequence:
    pass  # code to repeat
```

### La Función range()

`range()` genera secuencias de números:

```python
range(stop)       # 0, 1, 2, ..., stop-1
range(start, stop)  # start, start+1, ..., stop-1
range(start, stop, step)  # start, start+step, ...
```

### El Bucle while

El bucle `while` se repite mientras una condición sea True:

```python
while condition:
    pass  # code to repeat
```

### Break y Continue

- **break**: Sale del bucle inmediatamente
- **continue**: Salta el resto de la iteración actual, pasa a la siguiente

### Bucles Anidados

Bucles dentro de bucles — usados para datos multidimensionales:

```python
for i in range(3):
    for j in range(3):
        print(i, j)
```

### La Cláusula else en Bucles

Los bucles de Python pueden tener una cláusula `else` que se ejecuta cuando el bucle termina normalmente (sin `break`):

```python
for x in range(5):
    print(x)
else:
    print("Loop completed without break")
```

## Explicación Visual

```
For Loop Flow:
┌─────────┐     ┌──────────────┐     ┌─────────┐
│ Start   │ ──→ │ More items?  │ ──→ │ Execute │
│         │     │ in sequence  │     │ Block   │
└─────────┘     └──────┬───────┘     └────┬────┘
                       │ No               │ Yes
                       ↓                  ↓
                    ┌─────────┐          Next item
                    │  Done   │
                    └─────────┘

While Loop Flow:
┌─────────┐     ┌──────────┐     ┌─────────┐
│ Start   │ ──→ │Condition?│ ──→ │ Execute │
│         │     │          │     │ Block   │
└─────────┘     └────┬─────┘     └────┬────┘
                     │ False          │ True
                     ↓                ↓
                  ┌─────────┐      Update
                  │  Done   │    condition
                  └─────────┘
```

## Implementación en Python

```python
# For loop with a list
genes = ["BRCA1", "TP53", "EGFR", "MYC"]
for gene in genes:
    print(f"Analyzing {gene}...")
```

```python
# Range examples
for i in range(5):
    print(i, end=" ")
# Output: 0 1 2 3 4

for i in range(2, 8):
    print(i, end=" ")
# Output: 2 3 4 5 6 7

for i in range(0, 10, 2):
    print(i, end=" ")
# Output: 0 2 4 6 8
```

```python
# While loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1
```

```python
# Break and continue
for i in range(10):
    if i == 3:
        continue  # skip 3
    if i == 7:
        break     # stop at 7
    print(i, end=" ")
# Output: 0 1 2 4 5 6
```

```python
# Nested loops — multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} × {j} = {i * j:2d}", end="  ")
    print()
```

## Biotechnology Example

**Escenario**: Processing a list of DNA sequences to find those with high GC content.

```python
sequences = [
    "ATCGATCGATCG",
    "GGGGCCCCCAAAA",
    "ATATATATATAT",
    "CGCGCGCGCGCG",
    "AAAAAATTTTTT"
]

high_gc = []
for seq in sequences:
    gc = (seq.count("G") + seq.count("C")) / len(seq) * 100
    if gc > 50:
        high_gc.append(seq)
        print(f"High GC: {seq} ({gc:.1f}%)")

print(f"\nFound {len(high_gc)} high-GC sequences")
```

```python
# Using break to find a target sequence
target = "CGCGCGCGCGCG"
for i, seq in enumerate(sequences):
    if seq == target:
        print(f"Found target {target} at index {i}")
        break
else:
    print(f"Target {target} not found")
```

## SaaS Example

**Escenario**: Processing monthly transaction data for churn analysis.

```python
# Simulated monthly user activity
monthly_activity = [
    {"month": "Jan", "active_users": 1200, "churned": 45},
    {"month": "Feb", "active_users": 1250, "churned": 38},
    {"month": "Mar", "active_users": 1300, "churned": 52},
    {"month": "Apr", "active_users": 1280, "churned": 41},
    {"month": "May", "active_users": 1350, "churned": 35},
]

total_churned = 0
for month in monthly_activity:
    churn_pct = (month["churned"] / month["active_users"]) * 100
    print(f"{month['month']}: {churn_pct:.1f}% churn")
    total_churned += month["churned"]

print(f"\nTotal churned: {total_churned}")
print(f"Avg monthly churn: {total_churned / len(monthly_activity):.0f}")
```

## Errores Comunes

1. **Bucles while infinitos**: Olvidar actualizar la variable de condición
2. **Modificar una lista mientras se itera**: Puede causar elementos saltados o errores. Itera sobre una copia en su lugar
3. **Errores de off-by-one**: `range(n)` da 0 a n-1, no 1 a n
4. **Usar `range(len(list))` en lugar de iterar directamente**: El estilo Pythonic prefiere la iteración directa
5. **Olvidar los dos puntos y la indentación**: Sintaxis requerida para bloques de bucle

## Buenas Prácticas

- Prefiere bucles `for` sobre `while` al iterar sobre secuencias
- Usa `enumerate()` cuando necesites tanto el índice como el valor
- Usa `zip()` para iterar sobre múltiples secuencias en paralelo
- Mantén los cuerpos de los bucles cortos — extrae la lógica compleja a funciones
- Usa nombres de variables de bucle descriptivos (no solo `i`, `j` para casos complejos)

```python
# Pythonic patterns
for i, gene in enumerate(genes):
    print(f"{i}: {gene}")

for gene, expression in zip(genes, expressions):
    print(f"{gene}: {expression}")
```

## Resumen

- Los bucles `for` iteran sobre secuencias (listas, strings, ranges)
- Los bucles `while` se repiten mientras una condición sea True
- `range(start, stop, step)` genera secuencias de números
- `break` sale del bucle; `continue` salta a la siguiente iteración
- Los bucles anidados manejan datos multidimensionales
- Los bucles pueden tener cláusulas `else` que se ejecutan al completarse normalmente

## Términos Clave

- **Iteración**: Una ejecución del cuerpo del bucle
- **Iterable**: Objeto que puede recorrerse (lista, str, range, etc.)
- **Variable de bucle**: Variable que toma cada valor en la secuencia
- **Bucle infinito**: Bucle que nunca termina
- **Bucle anidado**: Bucle dentro de otro bucle
- **enumerate()**: Función incorporada que produce pares (índice, valor)

## Ejercicios

### Nivel 1: Básico

1. ¿Cuál es la salida de `for i in range(3): print(i)`?
2. ¿Cuál es la diferencia entre `break` y `continue`?
3. ¿Qué pasa si la condición en un bucle `while` nunca se vuelve False?

### Nivel 2: Implementación

4. Escribe un bucle for que calcule la suma de números del 1 al 100.
5. Escribe un bucle while que imprima la secuencia de Fibonacci hasta 100 (cada número es la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8...).

### Nivel 3: Pensamiento Crítico

6. Compara los bucles `for` y `while`. ¿Cuándo elegirías uno sobre el otro?
7. ¿Por qué es problemático modificar una lista mientras se itera sobre ella? Muestra un ejemplo y el enfoque correcto.

## Desafío de Programación

Escribe un programa que implemente la **Criba de Eratóstenes** para encontrar todos los números primos hasta un límite dado `n`:
1. Crea una lista de booleanos de 0 a n, inicialmente todos True
2. Para cada número de 2 a sqrt(n), marca los múltiplos como False
3. Los índices que quedan True son números primos
4. Usa bucles anidados y `break`/`continue` apropiadamente
5. Print all primes found
