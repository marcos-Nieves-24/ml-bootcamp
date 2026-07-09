# Laboratorio: Configuración de tu Entorno Python

## Objetivo

Instalar Python exitosamente, crear un entorno virtual, instalar paquetes y verificar la configuración.

## Duración

30 minutos

## Prerrequisitos

- Una computadora con acceso a internet
- Derechos administrativos para instalar software (o usar gestor de paquetes)

## Instrucciones

### Parte 1: Instalar Python

1. Descarga Python desde https://python.org (última versión estable)
2. Ejecuta el instalador — asegúrate de marcar "Add Python to PATH" (Windows)
3. Abre una terminal y verifica:
   ```bash
   python --version
   ```

### Parte 2: Crear y Activar un Entorno Virtual

```bash
# Crear directorio del proyecto
mkdir ml_project
cd ml_project

# Crear entorno virtual
python -m venv venv

# Activar (Windows)
venv\Scripts\activate

# Activar (macOS/Linux)
source venv/bin/activate
```

### Parte 3: Instalar Paquetes

```bash
pip install numpy pandas matplotlib jupyter
```

### Parte 4: Verificar la Instalación

Crea un archivo `test_install.py` con:

```python
import sys
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

print(f"Python version: {sys.version}")
print(f"NumPy version: {np.__version__}")
print(f"Pandas version: {pd.__version__}")
print("All packages installed successfully!")
```

Ejecútalo:
```bash
python test_install.py
```

### Parte 5: Guardar Dependencias

```bash
pip freeze > requirements.txt
type requirements.txt  # Windows
cat requirements.txt   # macOS/Linux
```

## Entregables

- Captura de pantalla o copia de la salida de terminal mostrando la versión de Python y las versiones de los paquetes
- El contenido del archivo `requirements.txt`

## Bonus

Instala un paquete de bioinformática (Biopython) e impórtalo exitosamente.
