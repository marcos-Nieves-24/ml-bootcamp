# Fuentes de Investigación — Módulo 1: Introducción a la IA

Todas las fuentes verificadas y citadas durante la fase de investigación del módulo.

---

## AlphaFold

| Aspecto | Detalle |
|---|---|
| **Artículo** | Jumper, J. et al. "Highly accurate protein structure prediction with AlphaFold." *Nature* 596, 583–589 (2021). |
| **DOI** | [10.1038/s41586-021-03819-2](https://doi.org/10.1038/s41586-021-03819-2) |
| **Nobel** | Premio Nobel de Química 2024 — Demis Hassabis y John Jumper |
| **Uso en el módulo** | Lección 4 — timeline interactivo y visualización de predicción de estructura |

## Insilico Medicine / Rentosertib

| Aspecto | Detalle |
|---|---|
| **Artículo** | Ren, F. et al. "A small-molecule TNIK inhibitor for idiopathic pulmonary fibrosis." *Nature Medicine* (2025). |
| **DOI** | [10.1038/s41591-025-03743-y](https://doi.org/10.1038/s41591-025-03743-y) |
| **Métrica clave** | Descubrimiento a PCC (candidato preclínico) en **18 meses**, vs 2.5–4 años tradicional (Nature Biotechnology, 2024) |
| **Uso en el módulo** | Lección 4 — timeline de IA en descubrimiento de fármacos |

## Evo (modelo genómico)

| Aspecto | Detalle |
|---|---|
| **Evo 1** | Nguyen, E. et al. "Sequence modeling and design from to million nucleotides." *Science* 386, eado9336 (2024). |
| **DOI** | [10.1126/science.ado9336](https://doi.org/10.1126/science.ado9336) |
| **Logro** | Primer modelo de lenguaje entrenado a escala genómica que diseñó sistemas CRISPR-Cas funcionales |
| **Evo 2** | Arc Institute (2025). Modelo a escala de genomas de todos los dominios de la vida. |
| **Uso en el módulo** | Mencionado en Lección 4 como frontera de IA + genómica; no incluido como demo en MVP |

## Muskat et al. — Conidias e IA

| Aspecto | Detalle |
|---|---|
| **Artículo** | Muskat, L. C. et al. "Image-based classification of fungal conidia using deep learning." *PLoS One* (2021). |
| **DOI** | Ver *PLoS One* 2020 para trabajos relacionados del grupo |
| **Uso en el módulo** | Hilo narrativo principal (Lecciones 1–3): clasificación de conidias de *Aspergillus* y *Penicillium* |

## Estructuras PDB verificadas

| ID | Proteína | Organismo | Resolución | Residuos (CA) | Estado |
|---|---|---|---|---|---|
| 1MBN | Mioglobina | *Physeter macrocephalus* | 2.00 Å | 153 | ✅ Verificado |
| 5K2P | Lisozima | *Gallus gallus* | 1.24 Å | 129 | ✅ Verificado |
| 2X8R | Lisozima GH25 | *Aspergillus fumigatus* | 1.70 Å | 210/cadena (6 copias) | ✅ Verificado |
| 4HHB | Desoxihemoglobina | *Homo sapiens* | 1.74 Å | 141+146 cadenas A/B | ✅ Verificado |
| 4INS | Insulina | *Sus scrofa* | 1.50 Å | 21+30 cadenas A/B | ✅ Verificado |

**Nota**: Los residuos CA extraídos para los renders 3D corresponden a una cadena completa por proteína (o pares A/B para hemoglobina e insulina), sin mezcla entre copias de la unidad asimétrica.

---

## Stack tecnológico

- **Plataforma**: MkDocs + mkdocs-jupyter (renderizado estático, sin kernel en navegador)
- **Demos interactivos**: HTML + JavaScript vanilla + Plotly.js (CDN v3.0+)
- **Datasets**: Sintéticos generados con Python + NumPy, en `datasets/synthetic/module01_ai/`
- **PDB**: Descargados de [RCSB.org](https://www.rcsb.org/), extraídos solo átomos Cα
