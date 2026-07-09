# Descripción del Dataset: Expresión Génica en Biotecnología

## Resumen

Este es un **dataset sintético de expresión génica** diseñado para simular un experimento real de microarreglos para el diagnóstico binario de enfermedades. El dataset contiene niveles de expresión de 20 genes medidos en 100 muestras de pacientes.

## Generación de Datos

El dataset se generó utilizando un proceso de simulación controlado:

1. **Expresión basal**: La expresión basal de cada gen se muestrea de una distribución log-normal para imitar datos reales de expresión génica.
2. **Expresión diferencial**: 8 de los 20 genes (BRCA1, TP53, EGFR, MYC, KRAS, PTEN, CDKN2A, ERBB2) se establecen como diferencialmente expresados entre las dos clases.
3. **Ruido técnico**: Se agrega ruido Gaussiano para simular la variabilidad de medición de los microarreglos.
4. **Balance de clases**: 50 controles sanos (clase 0) y 50 pacientes con enfermedad (clase 1).

## Formato del Archivo

Archivo CSV con 100 filas y 21 columnas.

## Columnas

| Columna | Tipo | Descripción |
|---------|------|-------------|
| Patient_ID | string | Identificador único del paciente |
| GENE_01–GENE_20 | float | Valores de expresión génica normalizados (escala log2) |
| Diagnosis | int | Etiqueta binaria: 0 = Sano, 1 = Enfermo |

## Anotaciones de Genes

| Código del Gen | Nombre del Gen | Función Biológica | ¿Diferencial? |
|----------------|----------------|-------------------|:-------------:|
| GENE_01 | BRCA1 | Reparación de ADN, supresión tumoral | Sí |
| GENE_02 | TP53 | Regulación del ciclo celular, apoptosis | Sí |
| GENE_03 | EGFR | Señalización del receptor de crecimiento celular | Sí |
| GENE_04 | MYC | Factor de transcripción, proliferación celular | Sí |
| GENE_05 | KRAS | GTPasa, señalización celular | Sí |
| GENE_06 | PTEN | Supresor tumoral, vía PI3K | Sí |
| GENE_07 | CDKN2A | Inhibidor del ciclo celular | Sí |
| GENE_08 | ERBB2 | Receptor de factor de crecimiento | Sí |
| GENE_09–GENE_20 | — | Genes housekeeping / no diferencialmente expresados | No |

## Propiedades Estadísticas

- **Muestras**: 100 (50 por clase)
- **Features**: 20 genes
- **Rango de expresión**: Aproximadamente −2 a +6 (escala log2)
- **Relación señal-ruido**: Moderada; los genes diferenciales muestran un cambio de 1,5 a 3,0 veces
- **Nivel de ruido**: σ ≈ 0,3 ruido Gaussiano

## Notas de Uso

- Los valores de expresión ya están normalizados (escala log2). No se requiere normalización adicional.
- El dataset es pequeño por diseño (100 muestras) para permitir experimentación rápida.
- Las etiquetas de clase están balanceadas, por lo que la precisión (accuracy) es una métrica significativa.
- Este es un dataset sintético — los patrones son simplificados en comparación con datos reales de expresión génica.
