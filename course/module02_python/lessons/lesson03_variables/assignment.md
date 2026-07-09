# Tarea: Variables en la Práctica

## Objetivos

- Demostrar la asignación y reasignación de variables
- Usar la conversión de tipos correctamente
- Implementar un pipeline de datos simple usando variables
- Aplicar las convenciones de nomenclatura

## Instrucciones

Crea un script de Python `patient_analysis.py` que:

1. **Recolección de datos**: Usa `input()` para recolectar:
   - ID del paciente
   - Edad (años)
   - Altura (metros)
   - Peso (kilogramos)
   - Presión arterial sistólica
   - Presión arterial diastólica

2. **Cálculos**: Calcula:
   - IMC = peso / (altura²)
   - Presión arterial media = diastólica + (sistólica - diastólica) / 3

3. **Clasificación**: Determina:
   - Categoría de IMC (bajo peso < 18.5, normal 18.5-24.9, sobrepeso 25-29.9, obeso ≥ 30)
   - Categoría de presión arterial (normal: sistólica < 120 Y diastólica < 80)

4. **Salida**: Imprime un informe de resumen del paciente formateado

## Entregables

- `patient_analysis.py` (bien comentado, conforme a PEP 8)
- Salida de ejemplo mostrando los resultados

## Rúbrica de Evaluación

| Criterio | Excelente (4 pts) | Bueno (3 pts) | Necesita Mejorar (1-2 pts) |
|----------|-------------------|--------------|-----------------------------|
| Uso de Variables | Nombres claros, descriptivos, mayúsculas correctas | Nombres aceptables | Nombres pobres |
| Conversión de Tipos | Conversión correcta de resultados de input() | Mayormente correcta | Conversiones faltantes |
| Cálculos | Todas las fórmulas correctas | Errores menores | Errores graves |
| Salida | Resumen formateado y legible | Adecuado | Difícil de leer |
| Calidad del Código | PEP 8, comentado, organizado | Mayormente conforme | Desorganizado |

## Estimated Completion Time

60 minutes
