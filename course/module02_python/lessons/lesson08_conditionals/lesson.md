---
Module: 2
Lesson Number: 8
Lesson Title: Condicionales
Estimated Duration: 45 minutes
Prerequisites: L6 — Funciones
Learning Objectives:
  - Escribir sentencias condicionales if/elif/else
  - Evaluar expresiones booleanas con operadores de comparación y lógicos
  - Usar valores truthy y falsy en condiciones
  - Escribir sentencias condicionales anidadas
  - Usar expresiones condicionales (operador ternario)
Keywords: if, elif, else, booleano, truthy, falsy, condicional, ternario
Programming Concepts: Flujo de control, lógica booleana, expresiones condicionales
Datasets Used: Ninguno
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Condicionales

## Motivación

Los condicionales permiten que los programas tomen decisiones. Sin ellos, el código se ejecutaría igual cada vez. Con condicionales, tu programa puede reaccionar diferente según valores de datos, entrada del usuario o resultados calculados. En biotecnología, los condicionales determinan diagnósticos basados en resultados de laboratorio, clasifican mutaciones genéticas y activan alertas para valores anormales. En SaaS, controlan niveles de acceso, calculan descuentos y segmentan clientes.

## Panorama General

En la lección anterior, aprendiste bucles (repetición). Ahora aprenderás condicionales (toma de decisiones). Estas dos estructuras de control — bucles y condicionales — forman la columna vertebral de todos los programas no triviales. Junto con funciones y operadores, ahora tienes todo lo necesario para escribir lógica sofisticada de procesamiento de datos.

## Teoría

### La Sentencia if

El condicional más simple ejecuta código solo cuando una condición es True:

```python
if condition:
    pass  # code to execute if condition is True
```

### if/else

```python
if condition:
    pass  # code if True
else:
    pass  # code if False
```

### if/elif/else

Encadena múltiples condiciones:

```python
if condition1:
    pass  # condition1 is True
elif condition2:
    pass  # condition1 is False, condition2 is True
elif condition3:
    pass  # condition1 and condition2 are False, condition3 is True
else:
    pass  # all conditions are False
```

### Valores Truthy y Falsy

En Python, los valores pueden ser "truthy" o "falsy" cuando se usan en una condición:

**Valores Falsy** (evalúan a False):
- `None`
- `False`
- `0`, `0.0`, `0j`
- Secuencias vacías: `""`, `[]`, `()`, `{}`, `set()`
- Objetos personalizados que devuelven `False` de `__bool__`

**Todo lo demás es truthy.**

### Condicionales Anidados

Condicionales dentro de condicionales:

```python
if condition1:
    if condition2:
        pass  # both True
    else:
        pass  # condition1 True, condition2 False
else:
    pass  # condition1 False
```

### Ternaria (Expresión Condicional)

Condicional de una línea:

```python
value = true_value if condition else false_value
```

### Sentencia Match (Python 3.10+)

Coincidencia de patrones estructural (similar a switch/case):

```python
match value:
    case 1:
        pass  # handle case 1
    case 2:
        pass  # handle case 2
    case _:
        pass  # default
```

## Explicación Visual

```
if/elif/else Flow:

         ┌───────────┐
         │ Start     │
         └─────┬─────┘
               │
         ┌─────▼──────┐  True  ┌──────────────────┐
         │ condition1 ├───────→│ code block 1     │
         └─────┬──────┘       └────────┬─────────┘
               │ False                 │
         ┌─────▼──────┐  True  ┌──────────────────┐
         │ condition2 ├───────→│ code block 2     │
         └─────┬──────┘       └────────┬─────────┘
               │ False                 │
         ┌─────▼──────┐               │
         │ else       │               │
         │ (default)  │               │
         └─────┬──────┘               │
               │                      │
               └──────┬───────────────┘
                      │
                ┌─────▼─────┐
                │   End     │
                └───────────┘
```

## Implementación en Python

```python
# Basic if
temperature = 38.5
if temperature > 37.5:
    print("Patient has a fever")

# if/else
if temperature > 37.5:
    print("Has fever")
else:
    print("Normal temperature")
```

```python
# if/elif/else
bmi = 26.3
if bmi < 18.5:
    category = "Underweight"
elif bmi < 25:
    category = "Normal"
elif bmi < 30:
    category = "Overweight"
else:
    category = "Obese"
print(f"BMI: {bmi:.1f} - {category}")
```

```python
# Truthy/falsy
name = ""
if name:
    print(f"Hello, {name}")
else:
    print("Name is empty")

# None check
result = None
if result is None:
    print("No result available")
```

```python
# Ternary (conditional expression)
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)
```

```python
# Match statement (Python 3.10+)
def describe_mutation(mutation_type):
    match mutation_type:
        case "missense":
            return "Single amino acid change"
        case "nonsense":
            return "Premature stop codon"
        case "frameshift":
            return "Reading frame shift"
        case "silent":
            return "No amino acid change"
        case _:
            return "Unknown mutation type"

print(describe_mutation("missense"))
```

## Biotechnology Example

**Escenario**: Clinical decision support for patient diagnosis.

```python
def assess_patient(systolic_bp, diastolic_bp, heart_rate, glucose):
    """
    Assess patient status based on vital signs.
    
    Returns a tuple of (status, recommendations).
    """
    # Blood pressure classification
    if systolic_bp < 120 and diastolic_bp < 80:
        bp_status = "Normal"
    elif systolic_bp < 130 and diastolic_bp < 80:
        bp_status = "Elevated"
    elif systolic_bp < 140 or diastolic_bp < 90:
        bp_status = "Stage 1 Hypertension"
    else:
        bp_status = "Stage 2 Hypertension"
    
    # Heart rate assessment
    if heart_rate < 60:
        hr_status = "Bradycardia"
    elif heart_rate <= 100:
        hr_status = "Normal"
    else:
        hr_status = "Tachycardia"
    
    # Glucose assessment
    if glucose < 70:
        glucose_status = "Hypoglycemia"
    elif glucose <= 126:
        glucose_status = "Normal"
    else:
        glucose_status = "Hyperglycemia"
    
    # Overall alert
    is_emergency = (
        bp_status == "Stage 2 Hypertension"
        or hr_status in ("Bradycardia", "Tachycardia")
        or glucose_status in ("Hypoglycemia", "Hyperglycemia")
    )
    
    return bp_status, hr_status, glucose_status, is_emergency

# Test
result = assess_patient(145, 95, 110, 140)
bp, hr, glu, emergency = result
print(f"BP: {bp}")
print(f"HR: {hr}")
print(f"Glucose: {glu}")
print(f"Emergency: {emergency}")
```

## SaaS Example

**Escenario**: Customer tier assignment and discount calculation.

```python
def calculate_discount(customer_tier, annual_spend, years_active):
    """
    Calculate discount percentage based on customer profile.
    """
    # Determine discount from tier
    if customer_tier == "enterprise":
        base_discount = 0.20
    elif customer_tier == "professional":
        base_discount = 0.10
    elif customer_tier == "starter":
        base_discount = 0.05
    else:
        base_discount = 0.00
    
    # Loyalty bonus
    if years_active >= 3:
        loyalty_bonus = 0.05
    elif years_active >= 1:
        loyalty_bonus = 0.02
    else:
        loyalty_bonus = 0.00
    
    # Volume bonus
    if annual_spend > 50000:
        volume_bonus = 0.10
    elif annual_spend > 10000:
        volume_bonus = 0.05
    else:
        volume_bonus = 0.00
    
    total_discount = min(base_discount + loyalty_bonus + volume_bonus, 0.30)
    return total_discount

# Usage
discount = calculate_discount("professional", 25000, 4)
print(f"Discount: {discount:.0%}")
```

## Errores Comunes

1. **Usar `=` en lugar de `==`**: `if x = 5:` asigna 5 a x y siempre es True
2. **Olvidar los dos puntos**: `if x > 5` sin `:` genera SyntaxError
3. **Errores de indentación**: La indentación inconsistente rompe los condicionales
4. **Comparar None con `==`**: Usa `is None` en lugar de `== None`
5. **Verificar booleano con `== True`**: Redundante — solo usa `if condition:`
6. **Anidamiento profundo**: Más de 3 niveles de anidamiento sugiere refactorización

## Buenas Prácticas

- Usa `elif` en lugar de `if` anidados para condiciones mutuamente excluyentes
- Mantén las condiciones simples — extrae la lógica compleja a variables booleanas
- Usa verificaciones truthy/falsy naturalmente: `if items:` en lugar de `if len(items) > 0:`
- Evita el anidamiento profundo (máx. 3 niveles)
- Usa cláusulas de guarda (retornos tempranos) para reducir el anidamiento
- Usa `in` para comparaciones múltiples: `if x in (1, 2, 3):`

## Resumen

- `if` ejecuta código cuando una condición es True
- `elif` verifica condiciones adicionales
- `else` maneja el caso por defecto
- Los valores son truthy (True) o falsy (False, None, 0, secuencias vacías)
- Ternaria: `x if condition else y`
- Match statement (3.10+) para coincidencia de patrones
- Evita el anidamiento profundo; usa cláusulas de guarda

## Términos Clave

- **Condicional**: Sentencia que ejecuta código basado en una condición
- **Expresión booleana**: Expresión que evalúa a True o False
- **Truthy**: Valor que evalúa a True en un contexto booleano
- **Falsy**: Valor que evalúa a False en un contexto booleano
- **Operador ternario**: Expresión condicional para if/else en línea
- **Cláusula de guarda**: Retorno temprano para evitar anidamiento
- **Match statement**: Coincidencia de patrones estructural de Python 3.10+

## Ejercicios

### Nivel 1: Básico

1. ¿Cuál es la salida de `if 0: print("yes") else: print("no")`?
2. ¿Cuál es la diferencia entre `=` y `==`?
3. ¿Qué valores se consideran falsy en Python?

### Nivel 2: Implementación

4. Escribe una función que reciba una temperatura en Celsius y devuelva "Frío" (< 15), "Templado" (15-25), "Calor" (> 25).
5. Escribe una función que reciba un año y devuelva si es bisiesto (divisible por 400, o divisible por 4 pero no por 100).

### Nivel 3: Pensamiento Crítico

6. ¿Por qué `if x == True:` se considera mal estilo? ¿Cuál es la alternativa Pythonica?
7. Compara y contrasta las cadenas if/elif/else con match statements. ¿Cuándo usarías cada una?

## Desafío de Programación

Escribe un sistema de **puntuación crediticia** que:
1. Reciba ingresos, años de historial crediticio, deuda pendiente y cantidad de pagos atrasados
2. Calcule una puntuación crediticia (0-100) usando una fórmula ponderada
3. Asigne una calificación: Excelente (≥ 80), Buena (60-79), Regular (40-59), Mala (< 40)
4. Aplique modificadores: si deuda > ingresos → -20 puntos; si pagos atrasados > 3 → -15 puntos; si historial crediticio > 10 años → +10 puntos
5. Use `match` para la asignación de calificación
6. Imprima la puntuación final, calificación y estado de aprobación (Excelente/Buena → Aprobado, si no → Revisión Requerida)
