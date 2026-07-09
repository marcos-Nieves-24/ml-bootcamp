# Conditionals — Slide Outline

## Diapositiva 1: Title Slide
- Conditionals in Python
- Módulo 2: Python Programming Fundamentals

## Diapositiva 2: Why Conditionals?
- Programs need to make decisions
- React differently to different data
- Biotech: diagnosis, mutation classification
- SaaS: access control, discount calculation

## Diapositiva 3: The if Statement
```python
if condition:
    # execute if True
```
- Colon required
- Indented block
- Condition must be boolean

## Diapositiva 4: if/else
```python
if condition:
    # True path
else:
    # False path
```
- Exactly one branch executes

## Diapositiva 5: if/elif/else
```python
if condition1:
    pass
elif condition2:
    pass
elif condition3:
    pass
else:
    pass
```
- First True condition executes
- `else` is optional (but recommended for completeness)

## Diapositiva 6: Truthy and Falsy
- **Falsy**: None, False, 0, 0.0, "", [], (), {}
- **Everything else is truthy**
```python
name = input("Name: ")
if name:  # Check if non-empty
    print(f"Hello {name}")
```

## Diapositiva 7: Ternary Operator
```python
status = "Adult" if age >= 18 else "Minor"
```
- One-line conditional
- Use only for simple cases

## Diapositiva 8: Match Statement (3.10+)
```python
match value:
    case 1:
        print("one")
    case 2 | 3:
        print("two or three")
    case _:
        print("other")
```

## Diapositiva 9: Logical Operators in Conditions
```python
# Combine conditions
if age >= 18 and has_id:
    print("Entry allowed")

if temperature > 39 or oxygen < 90:
    print("Emergency")
```

## Diapositiva 10: Guard Clauses
```python
# Instead of deep nesting:
def process(x):
    if not x:
        return  # guard clause
    # main logic here
    ...
```
- Early returns reduce nesting

## Diapositiva 11: Biotech Example
- Clinical assessment based on vitals
- BP classification, HR status, glucose
- Emergency detection with logical operators

## Diapositiva 12: SaaS Example
- Customer tier & discount calculation
- Tier, loyalty bonus, volume bonus
- Combined with logical operators

## Diapositiva 13: Common Mistakes
- `=` instead of `==`
- Missing colon
- Wrong indentation
- `if x == True` (redundant)
- `if x == None` (use `is None`)

## Diapositiva 14: Best Practices
- Use `elif` for mutually exclusive conditions
- Use guard clauses to reduce nesting
- Check `is None` not `== None`
- Use truthy/falsy naturally
- Keep conditions simple

## Diapositiva 15: Summary
- `if`/`elif`/`else` for decision making
- Truthy values are "true-like", falsy are "false-like"
- Ternary: `x if cond else y`
- Match: structural pattern matching
- Guard clauses prevent deep nesting
