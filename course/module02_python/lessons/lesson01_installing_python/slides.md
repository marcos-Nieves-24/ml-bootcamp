# Instalación de Python — Guión de Diapositivas

## Diapositiva 1: Portada
- Instalación de Python
- Módulo 2: Fundamentos de Programación en Python
- Curso: Machine Learning para Análisis de Datos y SaaS

## Diapositiva 2: Por Qué es Importante
- Todo científico de datos comienza aquí
- Base para todas las lecciones futuras
- Biotecnología: análisis de ADN, datos clínicos
- SaaS: motores de recomendación, análisis de clientes

## Diapositiva 3: ¿Qué es Python?
- Lenguaje interpretado de alto nivel (1991, Guido van Rossum)
- Enfatiza la legibilidad
- Lenguaje más popular para ciencia de datos
- Ecosistema extenso: NumPy, Pandas, scikit-learn

## Diapositiva 4: Distribuciones de Python
- Python Oficial (python.org)
- Anaconda (250+ paquetes preinstalados)
- Miniconda (mínima)
- Python de Microsoft Store
- Recomendación: Python Oficial

## Diapositiva 5: Pasos de Instalación
1. Descargar de python.org
2. Ejecutar el instalador
3. ✓ Add Python to PATH (Windows)
4. Verificar: `python --version`
5. Verificar pip: `pip --version`

## Diapositiva 6: El Intérprete de Python
- Dos modos: interactivo (REPL) y script (archivos .py)
- Demo: `python` luego `print("Hello")`, `2 + 2`, `exit()`

## Diapositiva 7: pip — Instalador de Paquetes
- Python Package Index (PyPI): 400,000+ paquetes
- `pip install pandas`
- `pip uninstall pandas`
- `pip list`
- `pip freeze > requirements.txt`

## Diapositiva 8: Entornos Virtuales
- Entornos Python aislados por proyecto
- ¿Por qué? Diferentes proyectos necesitan diferentes versiones de paquetes
- Crear: `python -m venv venv`
- Activar: `source venv/bin/activate` (macOS/Linux) o `venv\Scripts\activate` (Windows)

## Diapositiva 9: Ejemplo en Biotecnología
- Laboratorio de bioinformática necesita entorno consistente
- Crear proyecto con Biopython
- Compartir `requirements.txt`
- Reproducibilidad en investigación

## Diapositiva 10: Ejemplo en SaaS
- Proyecto de predicción de abandono de clientes
- Aislar dependencias con venv
- Congelar para despliegue
- Producción coincide exactamente con desarrollo

## Diapositiva 11: Errores Comunes
- Olvidar agregar Python al PATH
- Instalar globalmente sin entorno virtual
- Subir venv a git
- Usar sudo pip install

## Diapositiva 12: Buenas Prácticas
- Usa siempre entornos virtuales
- Usa `requirements.txt`
- Mantén Python actualizado
- Documenta la versión de Python
- Nunca uses `sudo pip install`

## Diapositiva 13: Resumen
- Instalar desde python.org
- Verificar con `python --version`
- pip instala paquetes
- Los entornos virtuales aíslan proyectos
- La reproducibilidad es clave
