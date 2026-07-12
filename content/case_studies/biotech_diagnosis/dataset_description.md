# Dataset Description: Biotech Gene Expression

## Overview

This is a **synthetic gene expression dataset** designed to simulate a real microarray experiment for binary disease diagnosis. The dataset contains expression levels for 20 genes measured across 100 patient samples.

## Data Generation

The dataset was generated using a controlled simulation process:

1. **Baseline expression**: Each gene's baseline expression is sampled from a log-normal distribution to mimic real gene expression data.
2. **Differential expression**: 8 out of 20 genes (BRCA1, TP53, EGFR, MYC, KRAS, PTEN, CDKN2A, ERBB2) are set as differentially expressed between the two classes.
3. **Technical noise**: Gaussian noise is added to simulate microarray measurement variability.
4. **Class balance**: 50 healthy controls (class 0) and 50 disease patients (class 1).

## File Format

CSV file with 100 rows and 21 columns.

## Columns

| Column | Type | Description |
|--------|------|-------------|
| Patient_ID | string | Unique patient identifier |
| GENE_01–GENE_20 | float | Normalized gene expression values (log2 scale) |
| Diagnosis | int | Binary label: 0 = Healthy, 1 = Diseased |

## Gene Annotations

| Gene Code | Gene Name | Biological Function | Differential? |
|-----------|-----------|-------------------|:-------------:|
| GENE_01 | BRCA1 | DNA repair, tumor suppression | Yes |
| GENE_02 | TP53 | Cell cycle regulation, apoptosis | Yes |
| GENE_03 | EGFR | Cell growth receptor signaling | Yes |
| GENE_04 | MYC | Transcription factor, cell proliferation | Yes |
| GENE_05 | KRAS | GTPase, cell signaling | Yes |
| GENE_06 | PTEN | Tumor suppressor, PI3K pathway | Yes |
| GENE_07 | CDKN2A | Cell cycle inhibitor | Yes |
| GENE_08 | ERBB2 | Growth factor receptor | Yes |
| GENE_09–GENE_20 | — | Housekeeping / non-differentially expressed genes | No |

## Statistical Properties

- **Samples**: 100 (50 per class)
- **Features**: 20 genes
- **Expression range**: Approximately −2 to +6 (log2 scale)
- **Signal-to-noise ratio**: Moderate; differential genes show 1.5–3.0 fold change
- **Noise level**: σ ≈ 0.3 Gaussian noise

## Usage Notes

- Expression values are already normalized (log2 scale). No additional normalization is required.
- The dataset is small by design (100 samples) to allow rapid experimentation.
- Class labels are balanced, so accuracy is a meaningful metric.
- This is a synthetic dataset — patterns are simplified compared to real gene expression data.
