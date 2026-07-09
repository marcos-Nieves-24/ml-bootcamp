---
Module: 1
Lesson: 6
Title: IA en Biotecnología
---

# Presentación: IA en Biotecnología

## Diapositiva 1: Portada
- **IA en Biotecnología**
- Módulo 1: Introducción a la IA
- Lección 6

## Diapositiva 2: Objetivos de la Lección
- Describir aplicaciones de IA en descubrimiento de fármacos, genómica, plegamiento de proteínas, imágenes médicas y medicina personalizada
- Entender cómo la IA acelera la biotecnología

## Diapositiva 3: ¿Por Qué IA en Biotecnología?
- Descubrimiento de fármacos: 10-15 años, $2.6B por fármaco
- La IA puede reducir el tiempo un 50%, el costo un 50%+
- AlphaFold resolvió el problema de plegamiento de 50 años
- Las imágenes con IA igualan a expertos humanos

## Diapositiva 4: Pipeline de Descubrimiento de Fármacos
```
ID Objetivo → Descub. Aciertos → Optim. Líder → Preclínico → Ensayos Clínicos
     ↑              ↑                ↑            ↑              ↑
   IA/ML        Cribado         Generativa     ADMET        Selección
                Virtual            IA        Predicción     Pacientes
```

## Diapositiva 5: IA en Identificación de Objetivos
- Analizar datos genómicos para objetivos de enfermedades
- PLN en literatura científica
- Redes de interacción de proteínas
- Ejemplo: Deep learning encuentra nuevos objetivos genéticos

## Diapositiva 6: Cribado Virtual
- Tradicional: evaluar 1M compuestos (meses, $1M+)
- Con IA: evaluar 1B compuestos (días, $1K)
- Métodos: QSAR, acoplamiento, deep learning
- Ejemplo: Atomwise evalúa millones diariamente

## Diapositiva 7: IA Generativa para Diseño de Fármacos
- La IA aprende el "lenguaje químico"
- Genera moléculas novedosas con propiedades deseadas
- Ejemplo: Insilico Medicine — fármaco para fibrosis en 18 meses

## Diapositiva 8: Predicción ADMET
- Predecir Absorción, Distribución, Metabolismo, Excreción, Toxicidad
- Detecta fallos tempranamente
- Reduce costosos fracasos en etapas tardías de ensayos clínicos

## Diapositiva 9: IA en Genómica
- Llamado de variantes a partir de secuencias de ADN
- Predicción de patogenicidad de variantes
- Análisis de expresión génica
- Ejemplo: DeepVariant, DeepSEA

## Diapositiva 10: AlphaFold
- Entrada: secuencia de aminoácidos
- Salida: estructura 3D de la proteína
- Tecnología: Transformers + redes neuronales geométricas
- Puntuación CASP14: 90 GDT (mejor anterior: ~60)
- 200M+ estructuras de proteínas predichas

## Diapositiva 11: Cómo Funciona AlphaFold
```
Secuencia → [MSA] → [Transformer] → [Módulo de Estructura] → Estructura 3D
                                  ↓
                            Reciclaje
```

## Diapositiva 12: IA en Imágenes Médicas
- Modalidades: Rayos X, TC, RMN, ultrasonido
- Tareas: Detección, segmentación, clasificación
- Rendimiento: iguala a radiólogos humanos
- Existen herramientas de diagnóstico con IA aprobadas por FDA

## Diapositiva 13: Flujo de Trabajo de IA en Imágenes Médicas
```
Imagen → [CNN] → Segmentación/Clasificación → Revisión del Radiólogo → Diagnóstico
```

## Diapositiva 14: IA en Medicina Personalizada
- Integrar genómica, datos clínicos, estilo de vida
- Predecir riesgo de enfermedad
- Seleccionar terapias óptimas
- Farmacogenómica: genes → respuesta a fármacos
- Ejemplo: IA oncológica para terapia dirigida

## Diapositiva 15: Técnicas Clave de IA en Biotecnología
| Aplicación | Técnica de IA |
|---|---|
| Cribado virtual | ML (Random Forest, SVM) |
| Diseño de fármacos | IA Generativa (GANs, VAEs) |
| Plegamiento de proteínas | Deep learning (Transformers) |
| Imágenes médicas | Deep learning (CNNs) |
| Genómica | Deep learning (CNNs, RNNs) |
| Minería de literatura | NLP (LLMs) |

## Diapositiva 16: Desafíos
- Conjuntos de datos pequeños en biología
- Necesidad de validación experimental
- Heterogeneidad de datos
- Correlación ≠ causalidad
- Obstáculos regulatorios

## Diapositiva 17: Buenas Prácticas
- Combinar IA con experiencia en el dominio
- Validar experimentalmente
- Manejar datos éticamente
- Asegurar interpretabilidad
- Considerar efectos de lote

## Diapositiva 18: Resumen
- La IA transforma el descubrimiento de fármacos, genómica, ciencia de proteínas, imágenes y medicina personalizada
- La IA acelera cada etapa del pipeline farmacéutico
- AlphaFold es un logro histórico
- La IA biotecnológica exitosa requiere dominio + experiencia en ML
- El campo continuará creciendo rápidamente
