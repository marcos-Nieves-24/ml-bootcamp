# Descripción del Dataset: Cancelación de Clientes SaaS

## Resumen

Este es un **dataset sintético** que simula datos de clientes de una empresa SaaS basada en suscripciones. El dataset contiene 1.000 registros de clientes con 11 features que describen la demografía de los clientes, su comportamiento de uso e información de la cuenta.

## Generación de Datos

El dataset se generó para simular patrones realistas observados en negocios SaaS:

1. **Antigüedad (Tenure)**: Los clientes que se quedan más tiempo tienen menos probabilidades de cancelar.
2. **Cargos mensuales**: Cargos más altos se correlacionan con mayor churn (sensibilidad al precio).
3. **Tipo de contrato**: Los contratos a largo plazo reducen el churn.
4. **Métricas de uso**: Un mayor uso indica mayor engagement y menor churn.
5. **Tickets de soporte**: Más tickets de soporte se correlacionan con frustración y mayor churn.
6. **Tasa de churn**: Aproximadamente 25% de tasa de churn general (típico para SaaS).

## Formato del Archivo

Archivo CSV con 1.000 filas y 11 columnas.

## Columnas

| Columna | Tipo | Descripción |
|---------|------|-------------|
| CustomerID | string | Identificador único del cliente |
| Tenure_Months | int | Número de meses que el cliente ha estado suscrito (1–72) |
| Monthly_Charges | float | Cuota de suscripción mensual en dólares ($15–$150) |
| Total_Charges | float | Monto total facturado (Tenure × Monthly_Charges + cargos) |
| Contract_Type | string | Tipo de contrato: "Month-to-month", "One year" o "Two year" |
| Payment_Method | string | Método de pago: "Credit card", "Bank transfer" o "Invoice" |
| Avg_Weekly_Logins | float | Frecuencia promedio semanal de inicio de sesión (0–30) |
| Avg_Weekly_Usage_Hours | float | Horas semanales promedio de uso de la plataforma (0–80) |
| Support_Tickets | int | Número de tickets de soporte en los últimos 6 meses (0–15) |
| Active_Features | int | Número de features del producto utilizadas activamente (1–20) |
| Churn | int | Etiqueta binaria: 0 = Cliente activo, 1 = Cliente cancelado |

## Propiedades de los Datos

| Propiedad | Valor |
|-----------|-------|
| Muestras | 1.000 |
| Features | 10 (1 target, 1 ID, 2 categóricas, 7 numéricas) |
| Tasa de churn | ~25% |
| Balance de clases | Desbalanceado (75% activo, 25% cancelado) |

## Resumen Estadístico

| Feature | Media | Std | Mín | Máx |
|---------|-------|-----|-----|-----|
| Tenure_Months | 32,4 | 20,1 | 1 | 72 |
| Monthly_Charges | 72,5 | 30,8 | 15,0 | 149,9 |
| Total_Charges | 2280,5 | 2071,3 | 15,0 | 8700,0 |
| Avg_Weekly_Logins | 12,3 | 7,6 | 0 | 30 |
| Avg_Weekly_Usage_Hours | 28,7 | 18,5 | 0 | 80 |
| Support_Tickets | 2,8 | 3,1 | 0 | 15 |
| Active_Features | 8,5 | 4,2 | 1 | 20 |

## Notas de Uso

- El dataset está diseñado para clasificación binaria (churn vs. no churn).
- Las features categóricas (Contract_Type, Payment_Method) requieren codificación.
- Las features numéricas deben escalarse.
- Existe desbalanceo de clases; considera usar división estratificada y reportar métricas por clase.
- Este es un dato sintético — los patrones son indicativos pero no representativos de ninguna empresa real.
