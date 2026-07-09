# Variables — Guión de Diapositivas

## Diapositiva 1: Portada
- Variables en Python
- Módulo 2: Fundamentos de Programación en Python

## Diapositiva 2: Por Qué las Variables Importan
- Almacenan y etiquetan datos
- Hacen los programas flexibles y reutilizables
- Base de toda programación
- Esenciales para ML: features, labels, parámetros

## Diapositiva 3: ¿Qué es una Variable?
- Ubicación de memoria nombrada que almacena un valor
- Como una caja etiquetada
- `temperature = 36.6`
- Puede contener cualquier tipo de dato

## Diapositiva 4: Asignación de Variables
```python
x = 5
name = "Alice"
pi = 3.14159
```
- `=` es el operador de asignación
- El lado derecho se evalúa primero
- El resultado se almacena en la variable del lado izquierdo

## Diapositiva 5: Tipado Dinámico
```python
x = 10     # int
x = 3.14   # float (same variable)
x = "text" # str
```
- El tipo se infiere del valor
- Las variables pueden cambiar de tipo
- Usa `type()` para verificar

## Diapositiva 6: Reglas de Nomenclatura
- Letras, dígitos, guiones bajos
- No puede comenzar con dígito
- Distingue mayúsculas: `age` ≠ `Age`
- Palabras clave reservadas: `if`, `for`, `class`
- PEP 8: `snake_case`

## Diapositiva 7: Nombres Buenos vs Malos
| Buenos | Malos |
|--------|-------|
| `gene_expression` | `ge` |
| `customer_count` | `cc` |
| `max_iterations` | `mi` |
| `patient_name` | `pn` |

## Diapositiva 8: Constantes
- Convención: UPPER_SNAKE_CASE
```python
PI = 3.14159
MAX_ITERATIONS = 1000
SPEED_OF_LIGHT = 3e8
```

## Diapositiva 9: Asignación Múltiple
```python
a, b, c = 1, 2, 3
x = y = z = 0  # mismo valor
a, b = b, a    # intercambio
```

## Diapositiva 10: Entrada y Salida
```python
print("Hello")
input("Enter: ")  # returns str
```
- `input()` siempre devuelve un string
- Convertir con `int()`, `float()`
- f-strings para formato: `f"Value: {x}"`

## Diapositiva 11: Ejemplo Biotecnología
```python
patient_id = "P-0042"
heart_rate = 72
systolic_bp = 120
diagnosis = "Hypertension"
print(f"Patient {patient_id}: BP {systolic_bp}")
```

## Diapositiva 12: Ejemplo SaaS
```python
revenue = 125000
users = 15420
churn = 0.035
arpu = revenue / users
print(f"ARPU: ${arpu:.2f}")
```

## Diapositiva 13: Errores Comunes
- Usar variables no definidas (NameError)
- Escribir mal los nombres
- Usar palabras clave como nombres
- Olvidar convertir input()
- Confundir mayúsculas y minúsculas

## Diapositiva 14: Buenas Prácticas
- Nombres descriptivos y significativos
- Convención snake_case
- Inicializar antes de usar
- Un propósito por variable
- Constantes en UPPER_SNAKE_CASE

## Diapositiva 15: Resumen
- Las variables almacenan valores en memoria
- Python tiene tipado dinámico
- Usa `=` para asignación
- `input()` para entrada del usuario
- `print()` para salida
- Sigue las convenciones de nomenclatura
