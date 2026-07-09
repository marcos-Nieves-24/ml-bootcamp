# Quiz: Dictionaries

## Opción Múltiple (5 questions)

**P1:** What happens if you access `d["missing"]` when the key doesn't exist?
- A) Returns None
- B) Raises KeyError
- C) Creates the key
- D) Returns False

**P2:** Which of the following can be a dictionary key?
- A) List
- B) Dictionary
- C) Tuple
- D) Set

**P3:** What does `d.get("key", "default")` return if "key" is not in the dictionary?
- A) None
- B) "default"
- C) KeyError
- D) False

**P4:** How do you iterate over both keys and values in a dictionary d?
- A) `for k in d:`
- B) `for k, v in d:`
- C) `for k, v in d.items():`
- D) `for v in d.values():`

**P5:** What is the time complexity of dictionary key lookup?
- A) O(1)
- B) O(n)
- C) O(log n)
- D) O(n²)

## Respuesta Corta (2 questions)

**P6:** Explain why lists cannot be used as dictionary keys but tuples can.

**P7:** What is the difference between `d.get(key)` and `d[key]`?

## Pregunta de Programación

**P8:** Write a function `count_characters(s)` that returns a dictionary counting character frequencies in a string. For example, `count_characters("hello")` should return `{"h": 1, "e": 1, "l": 2, "o": 1}`.

## Clave de Respuestas

**P1:** B) Raises KeyError

**P2:** C) Tuple

**P3:** B) "default"

**P4:** C) `for k, v in d.items():`

**P5:** A) O(1)

**P6:** Dictionary keys must be hashable — they need a stable hash value that doesn't change. Lists are mutable (can be modified), so their hash would change if modified, breaking the dictionary. Tuples are immutable, so their hash is stable and they can be used as keys.

**P7:** `d[key]` raises a KeyError if the key doesn't exist. `d.get(key)` returns None if the key doesn't exist (or a default value if provided). `get()` is safer and preferred when you're unsure if the key exists.

**P8:**
```python
def count_characters(s):
    counts = {}
    for char in s:
        counts[char] = counts.get(char, 0) + 1
    return counts

print(count_characters("hello"))
```
