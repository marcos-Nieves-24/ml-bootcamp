# Laboratorio: Trabajando con Variables

## Objetivo

Practicar la asignación de variables, las convenciones de nomenclatura, el tipado dinámico y la E/S básica.

## Duración

45 minutos

## Prerrequisitos

Lección 2: Jupyter Notebook

## Instrucciones

### Parte 1: Asignación Básica

En una celda de Jupyter notebook, asigna lo siguiente e imprime cada uno:
- Una variable `species` con "Homo sapiens"
- Una variable `chromosome_count` con 46
- Una variable `genome_size` con 3.1 (miles de millones de pares de bases)

### Parte 2: Tipado Dinámico

```python
value = 100
print(type(value))
value = 100.0
print(type(value))
value = "one hundred"
print(type(value))
```

### Parte 3: Entrada de Usuario

```python
name = input("Enter your name: ")
year = int(input("Enter birth year: "))
age = 2026 - year
print(f"Hello {name}, you are about {age} years old.")
```

### Parte 4: Intercambio de Variables

Demuestra el intercambio de variables usando desempaquetado de tuplas:
```python
x = 5
y = 10
x, y = y, x
print(f"x={x}, y={y}")
```

### Parte 5: Contexto de Biotecnología

Escribe código que almacene información sobre una secuencia de ADN:
```python
sequence_id = "SEQ001"
sequence = "AGCTTCGATCG"
gc_count = sequence.count("G") + sequence.count("C")
gc_percent = (gc_count / len(sequence)) * 100
print(f"{sequence_id}: GC content = {gc_percent:.1f}%")
```

## Entregables

Un Jupyter notebook (`variables_lab.ipynb`) con todas las celdas ejecutadas y las salidas visibles.
