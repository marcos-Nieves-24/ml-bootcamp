# STYLE_GUIDE.md

## Tono y voz

- Explicar antes de definir
- Usar intuición antes de ecuaciones
- Usar ejemplos antes de abstracciones
- Preferir voz activa
- Párrafos cortos
- Evitar jerga innecesaria
- Explicar cada concepto nuevo

## Estructura de lección

Toda lección debe contener:

1. Metadatos (YAML frontmatter)
2. Learning objectives (Bloom's Taxonomy, 3-6 objetivos)
3. Motivación (¿por qué debería importarle al estudiante?)
4. Big picture (conexión con lección anterior y siguiente)
5. Teoría (definición → intuición → explicación formal → ejemplo)
6. Fundamentos matemáticos (notación → intuición → derivación → interpretación)
7. Explicación visual (diagramas, gráficos generados programáticamente)
8. Implementación en Python (PEP8, nombres descriptivos, funciones modulares)
9. Walkthrough example (problema → dataset → análisis → modelo → interpretación → conclusión)
10. Ejemplo de Biotecnología (genómica, transcriptómica, proteínas, salud, datos clínicos)
11. Ejemplo de SaaS (churn, revenue prediction, recomendación, segmentación)
12. Errores comunes
13. Best practices
14. Summary (bullet points)
15. Key terms (glosario)
16. Ejercicios (3 niveles: básico, implementación, pensamiento crítico)
17. Coding challenge

## Formato de código

- Python 3.12+
- PEP8
- Nombres de variables descriptivos
- Funciones modulares
- Librerías permitidas: numpy, pandas, matplotlib, scikit-learn (core); scipy, seaborn, plotly (opcional)

## Formato de assessment

- Quiz: 5 multiple-choice + 2 short-answer + 1 coding question
- Assignment: objetivos, instrucciones, entregables, rúbrica, tiempo estimado
- Usar APA 7 para referencias
- Priorizar textbooks, papers revisados por pares, documentación oficial

## Formato de figuras

- Generar script Python primero
- Exportar como SVG (primario), PNG, PDF (opcional)
- Nunca dibujar figuras manualmente
- Todas las figuras deben ser reproducibles

## Formato de datasets

- Incluir README.md con: source, variables, citation, preprocessing
- Incluir metadata.json
- Incluir license.txt
- No duplicar datasets
