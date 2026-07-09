# Cuestionario: Instalación de Python

## Opción Múltiple (5 preguntas)

**P1:** ¿Qué comando verifica que Python está instalado correctamente?
- A) `python check`
- B) `python --version`
- C) `python install`
- D) `python verify`

**P2:** ¿Cuál es el propósito de un entorno virtual?
- A) Ejecutar Python más rápido
- B) Aislar las dependencias del proyecto
- C) Crear una copia de seguridad de Python
- D) Instalar múltiples versiones de Python

**P3:** ¿Qué comando instala un paquete con pip?
- A) `pip get nombre_paquete`
- B) `pip add nombre_paquete`
- C) `pip install nombre_paquete`
- D) `pip download nombre_paquete`

**P4:** En Windows, ¿qué opción crítica debe marcarse durante la instalación?
- A) "Install for all users"
- B) "Add Python to PATH"
- C) "Create desktop shortcut"
- D) "Enable debug mode"

**P5:** ¿Qué archivo lista todas las dependencias del proyecto con sus versiones?
- A) `dependencies.txt`
- B) `packages.txt`
- C) `requirements.txt`
- D) `config.txt`

## Respuesta Corta (2 preguntas)

**P6:** Explica por qué deberías usar entornos virtuales en lugar de instalar paquetes globalmente.

**P7:** ¿Cuál es la diferencia entre pip y pip3?

## Pregunta de Programación

**P8:** Escribe la secuencia de comandos de terminal para:
1. Crear un entorno virtual llamado `ml_env`
2. Activarlo (en macOS/Linux)
3. Instalar el paquete `scikit-learn`
4. Guardar la lista de paquetes instalados en un archivo

## Clave de Respuestas

**P1:** B) `python --version`

**P2:** B) Aislar las dependencias del proyecto

**P3:** C) `pip install nombre_paquete`

**P4:** B) "Add Python to PATH"

**P5:** C) `requirements.txt`

**P6:** Los entornos virtuales aíslan las dependencias por proyecto, previniendo conflictos de versiones entre proyectos. Las instalaciones globales pueden dañar herramientas del sistema e imposibilitar el uso de diferentes versiones de la misma librería para diferentes proyectos.

**P7:** En algunos sistemas, `pip` puede apuntar a Python 2, mientras que `pip3` apunta explícitamente a Python 3. En instalaciones modernas de Python, `pip` y `pip3` suelen ser lo mismo, pero usar `pip3` asegura que estás instalando para Python 3.

**P8:**
```bash
python -m venv ml_env
source ml_env/bin/activate
pip install scikit-learn
pip freeze > requirements.txt
```
