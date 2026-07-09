---
Module: 1
Lesson: 7
Title: IA en SaaS
---

# Presentación: IA en SaaS

## Diapositiva 1: Portada
- **IA en SaaS**
- Módulo 1: Introducción a la IA
- Lección 7

## Diapositiva 2: Objetivos de la Lección
- Describir aplicaciones de IA en SaaS
- Construir un modelo de predicción de abandono
- Entender el impacto empresarial de la IA

## Diapositiva 3: ¿Por Qué IA en SaaS?
- SaaS = modelo de ingresos recurrentes
- Perder clientes = perder ingresos para siempre
- La IA puede predecir abandono, personalizar, optimizar
- Cada gran SaaS usa IA

## Diapositiva 4: Métricas Clave de SaaS
- MRR: Ingresos Recurrentes Mensuales
- Tasa de Abandono: % de clientes perdidos por mes
- CLV: Valor de Vida del Cliente
- CAC: Costo de Adquisición de Clientes
- NRR: Retención de Ingresos Netos

## Diapositiva 5: Abandono de Clientes
- 5-7% de abandono mensual es común
- 5% de reducción → 25-95% de aumento en ganancias
- Mejor retener que adquirir (5-7x más barato)

## Diapositiva 6: Pipeline de Predicción de Abandono
```
Datos Cliente → Características → Modelo ML → Puntaje Abandono → Intervención
    ↑                                                         ↓
 Histórico                                               Email/Descuento/
 Comportamiento                                          Llamada/Cuenta
```

## Diapositiva 7: Características para Predicción de Abandono
- Frecuencia de inicio de sesión
- Tickets de soporte
- Uso de funciones
- Días desde último inicio de sesión
- Historial de pagos
- Cambios de plan

## Diapositiva 8: Enfoque de Modelado de Abandono
- Clasificación binaria
- Métodos: Regresión Logística, Random Forest, Gradient Boosting
- Métricas: Precisión, Exhaustividad, F1 (no solo exactitud)
- Desafío: Desequilibrio de clases (5-10% abandono)

## Diapositiva 9: Precisión vs. Exhaustividad
```
Precisión = VP / (VP + FP)
  "De los abandonos predichos, ¿cuántos realmente abandonaron?"

Exhaustividad = VP / (VP + FN)
  "De los abandonos reales, ¿cuántos detectamos?"

F1 = 2 × (Precisión × Exhaustividad) / (Precisión + Exhaustividad)
```

## Diapositiva 10: Personalización
- Contenido: artículos relevantes, tutoriales
- Producto: sugerencias de funciones, adaptación de UI
- Precios: descuentos específicos
- Email: campañas personalizadas

## Diapositiva 11: Enfoques de Recomendación
```
Colaborativo: "Usuarios como tú también mejoraron a Pro"
Basado en Contenido: "Usas Informes → prueba Informes Avanzados"
Híbrido: Enfoque combinado
```

## Diapositiva 12: Analítica de Marketing
- Segmentación de clientes
- Puntuación de leads
- Modelado de atribución
- Optimización de campañas
- Asignación de presupuesto

## Diapositiva 13: Analítica de Producto
- Análisis de adopción de funciones
- Mapeo del recorrido del usuario
- Detección de anomalías
- Análisis de pruebas A/B
- Pronóstico predictivo

## Diapositiva 14: Predicción de CLV
- CLV = Valor × Frecuencia × Vida útil
- Predecir ingresos futuros por cliente
- Decidir gasto de adquisición
- Segmentar por valor

## Diapositiva 15: Técnicas de IA en SaaS
| Aplicación | Técnica |
|---|---|
| Predicción de abandono | Clasificación (RF, GB) |
| Recomendación | Filtrado colaborativo |
| Segmentación | Agrupamiento (K-Means) |
| Puntuación de leads | Clasificación |
| Predicción de CLV | Regresión |
| Detección de anomalías | Isolation Forest |

## Diapositiva 16: Errores Comunes
- Usar exactitud para datos desbalanceados
- Sesgo de supervivencia
- Ignorar efectos temporales
- No actuar según las predicciones
- Sobre-ingeniería de características

## Diapositiva 17: Buenas Prácticas
- Usar validación basada en tiempo
- Empezar simple, iterar
- Monitorear deriva del modelo
- Equilibrar privacidad y personalización
- Cerrar el ciclo: rastrear efectividad de intervenciones

## Diapositiva 18: Resumen del Módulo 1
- Lección 1: ¿Qué es la IA? — Agentes inteligentes
- Lección 2: Historia — Dartmouth a deep learning
- Lección 3: Tipos — IA Estrecha, AGI, tipos por función
- Lección 4: Paradigmas — Reglas, ML, DL, LLMs
- Lección 5: Aplicaciones — CV, PLN, Robótica, RecSys, GenAI
- Lección 6: IA en Biotech — Descubrimiento de fármacos, AlphaFold
- Lección 7: IA en SaaS — Abandono, personalización

## Diapositiva 19: Próximos Pasos
- Módulo 2: Fundamentos de Programación en Python
- ¡Aprenderás a programar!
- Primero Python → luego NumPy, Pandas, Matplotlib
