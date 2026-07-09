---
Module: 2
Lesson Number: 1
Lesson Title: Instalación de Python
Estimated Duration: 30 minutes
Prerequisites: Ninguno
Learning Objectives:
  - Explicar what Python is and why it is used for data science
  - Instalar Python on Windows, macOS, or Linux
  - Verificar the installation using the command line
  - Usar pip to install Python packages
  - Crear and activate a virtual environment
Keywords: Python, pip, virtual environment, command line, installation
Difficulty: Principiante
Programming Concepts: Python interpreter, CLI, package management, virtual environments
Datasets Used: Ninguno
Notebook: notebook.ipynb
Assignment: assignment.md
Quiz: quiz.md
---

# Instalación de Python

## Motivación

Antes de que puedas escribir una sola línea de código Python, necesitas un entorno Python funcional. Todo científico de datos, ingeniero de machine learning y desarrollador de software comienza aquí. Una instalación correcta te ahorra horas de depuración después. En biotecnología, usarás Python para analizar secuencias de ADN, procesar datos clínicos y entrenar modelos predictivos. En SaaS, Python impulsa motores de recomendación, análisis de clientes e informes automatizados. Todo esto comienza con una instalación de Python correctamente configurada.

## Panorama General

Esta es la base de todo el curso. Sin Python instalado, no puedes ejecutar ningún código. En el módulo anterior, aprendiste qué es la IA. Ahora construirás las habilidades prácticas necesarias para implementar soluciones de IA. En la próxima lección, aprenderás a usar Jupyter Notebook — un entorno interactivo que se ejecuta sobre tu instalación de Python.

## Teoría

### ¿Qué es Python?

Python es un lenguaje de programación interpretado y de alto nivel creado por Guido van Rossum en 1991. Enfatiza la legibilidad y simplicidad del código. Python es el lenguaje más popular para ciencia de datos y machine learning debido a su extenso ecosistema de librerías (NumPy, Pandas, scikit-learn, TensorFlow) y su curva de aprendizaje suave.

### Distribuciones de Python

Hay varias formas de obtener Python:

- **Python Oficial** (python.org): La implementación de referencia (CPython). Recomendada para la mayoría de los usuarios.
- **Distribución Anaconda**: Incluye Python más 250+ paquetes de ciencia de datos preinstalados. Buena para principiantes pero pesada.
- **Miniconda**: Una versión mínima de Anaconda solo con conda y Python.
- **Python de Microsoft Store** (Windows): Conveniente pero puede tener problemas de ruta.

Para este curso, recomendamos instalar Python directamente desde python.org.

### El Intérprete de Python

Cuando instalas Python, obtienes el **intérprete** — un programa que lee y ejecuta código Python. Puedes usarlo en dos modos:

1. **Modo interactivo**: Escribe comandos y ve los resultados inmediatamente (REPL)
2. **Modo script**: Ejecuta archivos `.py` que contienen código Python

### pip — El Instalador de Paquetes

pip es el gestor de paquetes de Python. Descarga e instala paquetes del Python Package Index (PyPI), que aloja más de 400,000 paquetes.

Comandos comunes de pip:
- `pip install nombre_paquete` — instalar un paquete
- `pip uninstall nombre_paquete` — eliminar un paquete
- `pip list` — listar paquetes instalados
- `pip freeze` — listar paquetes instalados con versiones

### Entornos Virtuales

Un entorno virtual es un entorno Python aislado que te permite instalar paquetes sin afectar al Python del sistema ni a otros proyectos. Cada proyecto tiene sus propias dependencias.

**¿Por qué usar entornos virtuales?** Diferentes proyectos pueden requerir diferentes versiones de la misma librería. Los entornos virtuales evitan conflictos.

### Instalación de Python en Windows

1. Ve a https://python.org y descarga el instalador más reciente de Python
2. **IMPORTANTE**: Marca "Add Python to PATH"
3. Haz clic en "Install Now"
4. Abre el Símbolo del Sistema y escribe `python --version`
5. Verifica pip: `pip --version`

### Instalación de Python en macOS

1. Instala Homebrew (opcional pero recomendado): `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. `brew install python`
3. Verifica: `python3 --version`
4. pip está incluido: `pip3 --version`

### Instalación de Python en Linux

La mayoría de las distribuciones de Linux incluyen Python. Verifica con:
```bash
python3 --version
```

Si no está instalado:
```bash
# Ubuntu/Debian
sudo apt update && sudo apt install python3 python3-pip

# Fedora
sudo dnf install python3 python3-pip
```

## Explicación Visual

```
┌─────────────────────────────────────────────────────┐
│                 Instalación de Python                │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [1] Descargar Python de python.org                 │
│       ↓                                             │
│  [2] Ejecutar el instalador (✓ Add to PATH)         │
│       ↓                                             │
│  [3] Verificar: python --version                    │
│       ↓                                             │
│  [4] Verificar: pip --version                       │
│       ↓                                             │
│  [5] Crear entorno virtual                          │
│       ↓                                             │
│  [6] Instalar paquetes con pip                      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Implementación en Python

### Verificando la Instalación de Python

Abre una terminal (Símbolo del Sistema en Windows, Terminal en macOS/Linux) y ejecuta:

```bash
python --version
```

Salida esperada: `Python 3.x.x`

### Usando el Intérprete Interactivo

```bash
python
```

Luego escribe:

```python
print("Hello, Python!")
result = 2 + 2
print(result)
```

### Creando un Entorno Virtual

```bash
# Crear un entorno virtual llamado 'venv'
python -m venv venv

# Activarlo
# En Windows:
venv\Scripts\activate

# En macOS/Linux:
source venv/bin/activate

# El prompt cambiará para mostrar (venv)
```

### Instalando Paquetes

```bash
pip install numpy pandas matplotlib
```

### Congelando Dependencias

```bash
pip freeze > requirements.txt
```

Esto crea un archivo que lista todos los paquetes instalados y sus versiones — esencial para la reproducibilidad.

## Ejemplo en Biotecnología

**Escenario**: Un laboratorio de bioinformática necesita un entorno Python consistente para analizar secuencias de ADN. Múltiples investigadores trabajan en el mismo proyecto. Usar un archivo `requirements.txt` asegura que todos tengan las mismas versiones de paquetes.

```bash
# Crear directorio del proyecto
mkdir dna_analysis
cd dna_analysis

# Crear entorno virtual
python -m venv venv
source venv/bin/activate

# Instalar paquetes de bioinformática
pip install biopython pandas numpy matplotlib

# Guardar dependencias
pip freeze > requirements.txt
```

Ahora cualquier investigador puede replicar el entorno con:
```bash
pip install -r requirements.txt
```

## Ejemplo en SaaS

**Escenario**: Una startup SaaS necesita desplegar un modelo de predicción de abandono de clientes. El equipo de desarrollo usa un entorno virtual para aislar las dependencias y luego las congela para el despliegue.

```bash
# Máquina del desarrollador
python -m venv venv
source venv/bin/activate
pip install scikit-learn pandas flask gunicorn
pip freeze > requirements.txt

# Servidor de producción
pip install -r requirements.txt
```

Esto garantiza que el entorno de producción coincida exactamente con el de desarrollo.

## Errores Comunes

1. **Olvidar marcar "Add Python to PATH"**: Python no será reconocido como comando. Reinstala y marca la casilla.
2. **Usar el Python del sistema directamente**: Crea siempre un entorno virtual para los proyectos.
3. **Subir `venv` al control de versiones**: Agrega `venv/` al `.gitignore`.
4. **Ejecutar `pip install` sin un entorno virtual**: Puede dañar el Python del sistema.
5. **Confundir `pip` y `pip3`**: En algunos sistemas, `pip` apunta a Python 2. Usa `pip3` para Python 3.

## Buenas Prácticas

- Usa siempre entornos virtuales para el aislamiento de proyectos
- Usa `requirements.txt` para la reproducibilidad
- Mantén Python actualizado (dentro de la misma versión principal)
- Documenta la versión de Python que tu proyecto requiere
- Usa `pip freeze > requirements.txt` regularmente
- Nunca uses `sudo pip install` (Linux/macOS) — puede dañar paquetes del sistema
- Considera usar pyenv para gestionar múltiples versiones de Python

## Resumen

- Python es un lenguaje interpretado de alto nivel esencial para ciencia de datos
- Instala desde python.org y verifica con `python --version`
- pip instala paquetes desde PyPI
- Los entornos virtuales aíslan las dependencias del proyecto
- Usa siempre entornos virtuales para la reproducibilidad
- Verifica tu instalación ejecutando código Python en modo interactivo

## Términos Clave

- **Intérprete**: Programa que ejecuta código Python línea por línea
- **pip**: Instalador de paquetes de Python
- **PyPI**: Python Package Index — repositorio de paquetes de Python
- **Entorno virtual**: Entorno Python aislado para un proyecto específico
- **PATH**: Variable del sistema que le dice al SO dónde encontrar ejecutables
- **REPL**: Bucle de Lectura-Evaluación-Impresión — shell interactivo de Python
- **requirements.txt**: Archivo que lista las dependencias del proyecto

## Ejercicios

### Nivel 1: Básico

1. ¿Qué comando usas para verificar la versión de Python?
2. ¿Cuál es el propósito de un entorno virtual?
3. ¿Qué hace `pip freeze`?

### Nivel 2: Implementación

4. Instala Python (si no está instalado), crea un entorno virtual e instala NumPy. Verifica la instalación ejecutando `python -c "import numpy; print(numpy.__version__)"`.
5. Crea un archivo `requirements.txt` para un proyecto que dependa de pandas y matplotlib.

### Nivel 3: Pensamiento Crítico

6. Compara la distribución oficial de Python con Anaconda. ¿Cuándo usarías cada una?
7. ¿Por qué es mala práctica instalar paquetes globalmente con `sudo pip install`? ¿Qué alternativas existen?

## Desafío de Programación

Escribe un script de Python llamado `check_env.py` que:
1. Imprima la versión de Python
2. Imprima la ubicación del intérprete de Python
3. Liste todos los paquetes instalados
4. Intente importar numpy, pandas y matplotlib, informando si cada uno está disponible

Ejecuta el script y verifica la salida.
