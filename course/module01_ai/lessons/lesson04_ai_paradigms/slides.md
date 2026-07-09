---
Module: 1
Lesson: 4
Title: Paradigmas de IA
---

# Presentación: Paradigmas de IA

## Diapositiva 1: Portada
- **Paradigmas de IA**
- Módulo 1: Introducción a la IA
- Lección 4

## Diapositiva 2: Objetivos de la Lección
- Comparar Sistemas Expertos, Basados en Reglas, ML, DL y LLMs
- Explicar cuándo es apropiado cada paradigma
- Implementar ejemplos simples de cada uno

## Diapositiva 3: Cinco Paradigmas de IA
1. Sistemas Expertos (1970s)
2. Sistemas Basados en Reglas (1980s)
3. Machine Learning (1990s)
4. Deep Learning (2010s)
5. Large Language Models (2020s)

## Diapositiva 4: Sistemas Expertos
- Emulan la toma de decisiones de un experto humano
- Componentes: Base de Conocimiento + Motor de Inferencia + UI
- Ejemplo: MYCIN (diagnóstico de infecciones bacterianas)
- Limitación: CUELLO de botella de adquisición de conocimiento

## Diapositiva 5: Cómo Funcionan los Sistemas Expertos
```
Entrada Usuario → Motor de Inferencia → Base de Conocimiento → Salida
                        ↑                         ↑
              Encadenamiento              Hechos + Reglas
              Adelante/Atrás
```

## Diapositiva 6: Sistemas Basados en Reglas
- SI condición ENTONCES acción
- Encadenamiento hacia adelante: hechos → conclusiones
- Encadenamiento hacia atrás: objetivo → hechos de soporte
- Simple, interpretable, sin datos necesarios

## Diapositiva 7: Machine Learning
- Aprende patrones de datos
- Tres tipos: Supervisado, No Supervisado, Por Refuerzo
- Conceptos clave: features, labels, training, prediction
- Ejemplo: Filtro de spam aprendiendo de ejemplos

## Diapositiva 8: Flujo de Trabajo de ML
```
Datos → Preparar → Dividir → Entrenar → Evaluar → Desplegar
```

- División 80/20 train/test
- Precisión, precisión positiva, exhaustividad como métricas

## Diapositiva 9: Deep Learning
- Redes neuronales multicapa
- Aprende características jerárquicas
- Sobresale en: imágenes, audio, patrones complejos
- Requiere: muchos datos, cómputo GPU

## Diapositiva 10: Estructura de Red Neuronal
```
Capa de Entrada → Capa(s) Oculta(s) → Capa de Salida
    [x1] ───→ [h1] ───→ [y1]
    [x2] ───→ [h2] ───→ [y2]
    [x3] ───→ [h3]
    Pesos + Sesgo + Función de Activación
```

## Diapositiva 11: Large Language Models
- Transformers con self-attention
- Entrenados en corpus masivos de texto
- Habilidades emergentes a escala
- Ejemplos: GPT-4, Claude, Gemini

## Diapositiva 12: Capacidades de los LLM
- Generación de texto
- Traducción, resumen
- Generación de código
- Respuesta a preguntas
- Razonamiento (limitado)

## Diapositiva 13: Comparación de Paradigmas
| Paradigma | Necesidad de Datos | Complejidad | Interpretabilidad |
|---|---|---|---|
| Reglas | Ninguna | Baja | Alta |
| ML | Media | Media | Media |
| DL | Alta | Alta | Baja |
| LLM | Muy Alta | Muy Alta | Baja |

## Diapositiva 14: Cuándo Usar Qué
- Reglas claras y estables → Basado en Reglas
- Suficientes datos etiquetados → ML
- Imágenes/complejo → DL
- Tareas de lenguaje → LLM
- A menudo: combinar múltiples paradigmas

## Diapositiva 15: Ejemplo en Biotecnología
- Regla: SI secuencia contiene motivo X ENTONCES función Y
- ML: Predecir función a partir de características de secuencia
- DL: AlphaFold para estructura de proteínas
- LLM: Modelo de lenguaje de proteínas ESM-2

## Diapositiva 16: Ejemplo en SaaS
- Regla: SI inicio de sesión < 1/semana ENTONCES riesgo alto
- ML: Random Forest para predicción de abandono
- DL: Patrones temporales en comportamiento de usuario
- LLM: Analizar conversaciones de soporte

## Diapositiva 17: Errores Comunes
- Usar DL cuando ML simple funcionaría
- Ignorar el cuello de botella del conocimiento
- Pensar que los LLMs lo resuelven todo
- No considerar enfoques híbridos

## Diapositiva 18: Resumen
- Cinco paradigmas, cada uno con fortalezas
- Experto/Reglas: interpretable, sin datos
- ML/DL: aprenden de datos, poderosos
- LLMs: comprensión del lenguaje a escala
- Elige el paradigma más simple que funcione
- Los sistemas híbridos suelen ser los mejores

## Diapositiva 19: Vista Previa
- Siguiente: Aplicaciones de IA en el mundo real
- Visión por Computadora, PLN, Robótica, IA Generativa
