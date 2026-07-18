# Alcance v2 — Futuras iteraciones

Este documento registra lo que **no** entra en el MVP (versión 1) pero está contemplado para iteraciones futuras.

---

## Demo 3.3 — Screening virtual de fármacos

- **Qué era**: Heatmap interactivo de moléculas pequeñas contra blancos terapéuticos, simulando un screening virtual (VS) basado en docking o fingerprints químicos.
- **Por qué se cortó**: Requiere manejo de datos moleculares (SMILES, Morgan fingerprints) que añade una dependencia técnica sin beneficio pedagógico directo para estudiantes sin química computacional. El concepto de "predicción masiva" se cubre suficientemente en el demo de pipeline (demo 10).
- **Para v2**: Implementar si el curso se expande a química medicinal o descubrimiento de fármacos. Usar RDKit.js o similar.

## Demo 3.4 — Evo (modelo genómico)

- **Qué era**: Explorador interactivo de predicciones del modelo Evo (genoma completo) para elementos funcionales CRISPR-Cas.
- **Por qué se cortó**: Evo opera sobre secuencias de nucleótidos de ~7 Mpb, lo que hace imposible un demo cliente-side manejable. El concepto de "IA para diseño genómico" se cubre en la Lección 4 mediante el timeline de AlphaFold y Rentosertib.
- **Para v2**: Requeriría backend o descarga de modelos; evaluar cuando Evo tenga una API pública o modelo cliente-side.

## Dataset de expresión génica (gene_expression)

- **Qué era**: `module01_ai_gene_expression.csv` con 1000 muestras simuladas de 10 genes, incluyendo efecto de tratamiento.
- **Por qué se cortó del MVP**: El dataset se generó pero no se integró en ninguna de las 11 demos. El hilo narrativo del MVP se centró en features morfológicas de conidias (clasificación). Los datos de expresión génica tienen más sentido en un contexto de clustering o reducción de dimensionalidad (Módulo 3 de Estadística o futura lección de transcriptómica).
- **Para v2**: Incorporar como demo de clustering (K-Means sobre perfiles de expresión) o en un notebook de análisis exploratorio. No se descartó por falta de valor pedagógico, sino por alcance.

## Contenido instruccional adicional

- **Ejercicios de programación**: Actualmente no hay notebooks de Python; el foco es conceptual. Para una versión avanzada, incorporar notebooks con `sklearn` sobre los mismos datasets sintéticos.
- **Evaluación formativa vs sumativa**: Los checkpoints MCQ inline en cada demo HTML (evaluación formativa inmediata) conviven con los `quiz.md` por lección (evaluación sumativa con persistencia en plataforma). Los primeros verifican comprensión del concepto recién interactuado; los segundos cierran la lección con preguntas integradoras. Ambas se mantienen activas.
- **Traducción al inglés**: Todo el contenido está en español para el público target (estudiantes de biotecnología hispanohablantes). Una versión en inglés requeriría fork del contenido.
- **Dataset Tox21**: Queda fuera de este módulo. Si se integra en una futura lección de toxicología predictiva, usar los datos reales de NIH NCATS.

---

## Estado del MVP (v1)

| Componente | Estado |
|---|---|
| 11 demos interactivos HTML/JS con Plotly.js | Implementado |
| 4 lecciones en español (lesson.md) | Implementado |
| Scaffolding: pregunta predictiva + checkpoint MCQ | Implementado |
| Referencias investigadas con DOI verificados | Implementado |
| Datasets sintéticos (`datasets/synthetic/module01_ai/`) | Implementado |
| Nota "simulación educativa" / "modelo real" en cada demo | Implementado |
| Navegación MkDocs actualizada (4 lecciones) | Implementado |
| quiz.md por lección (plataforma) | Implementado |
| Plugin rehype para iframes seguros en plataforma | Implementado |
