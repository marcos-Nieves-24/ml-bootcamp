import pytest
from pathlib import Path
import json
import nbformat
import subprocess
import sys

COURSE_DIR = Path(__file__).resolve().parent.parent / "course"
NOTEBOOK_SUBDIRS = ["notebooks", "labs", "assignments"]


def _read_notebook(nb_path):
    """Read a notebook by opening the file first (compatible with older nbformat)."""
    nb_path = Path(nb_path)
    with open(str(nb_path), encoding="utf-8") as f:
        return nbformat.read(f, as_version=4)


def _get_notebooks():
    notebooks = []
    for module_dir in sorted(COURSE_DIR.glob("module*")):
        if not module_dir.is_dir():
            continue
        for subdir in NOTEBOOK_SUBDIRS:
            nd = module_dir / subdir
            if nd.exists():
                for ipynb in nd.glob("*.ipynb"):
                    notebooks.append(ipynb)
        for lesson_dir in (module_dir / "lessons").glob("lesson*/"):
            for ipynb in lesson_dir.glob("*.ipynb"):
                notebooks.append(ipynb)
    return notebooks


def _is_lesson_notebook(nb_path):
    """Check if a notebook is inside a lesson directory (not module overview)."""
    return "lessons/lesson" in str(nb_path).replace("\\", "/")


NOTEBOOKS = _get_notebooks()


def test_notebook_files_exist():
    assert len(NOTEBOOKS) > 0, "No notebook files found in any module"


def test_each_lesson_has_notebook():
    for module_dir in sorted(COURSE_DIR.glob("module*")):
        if not module_dir.is_dir():
            continue
        lessons_dir = module_dir / "lessons"
        if not lessons_dir.exists():
            continue
        for lesson_dir in sorted(lessons_dir.glob("lesson*/")):
            notebooks_in_lesson = list(lesson_dir.glob("*.ipynb"))
            assert len(notebooks_in_lesson) >= 1, (
                f"{module_dir.name}/{lesson_dir.name} missing notebook"
            )


def test_notebooks_are_valid_json():
    errors = []
    for nb_path in NOTEBOOKS:
        try:
            with open(nb_path, encoding="utf-8") as f:
                json.load(f)
        except (json.JSONDecodeError, UnicodeDecodeError) as e:
            errors.append(f"{nb_path.relative_to(COURSE_DIR.parent)}: {e}")
    if errors:
        pytest.fail(f"Invalid JSON in {len(errors)} notebooks:\n" + "\n".join(errors))


def test_notebooks_are_valid_nbformat():
    errors = []
    for nb_path in NOTEBOOKS:
        try:
            _read_notebook(nb_path)
        except Exception as e:
            errors.append(f"{nb_path.relative_to(COURSE_DIR.parent)}: {e}")
    if errors:
        pytest.fail(f"Invalid notebook format in {len(errors)} notebooks:\n" + "\n".join(errors))


def test_notebook_has_markdown_cells():
    errors = []
    for nb_path in NOTEBOOKS:
        try:
            nb = _read_notebook(nb_path)
            md_cells = [c for c in nb.cells if c.cell_type == "markdown"]
            if len(md_cells) < 1:
                errors.append(str(nb_path.relative_to(COURSE_DIR.parent)))
        except Exception:
            continue
    if errors:
        pytest.fail(f"Notebooks missing markdown cells:\n" + "\n".join(errors))


def test_lesson_notebooks_have_code_cells():
    errors = []
    for nb_path in NOTEBOOKS:
        if not _is_lesson_notebook(nb_path):
            continue
        try:
            nb = _read_notebook(nb_path)
            code_cells = [c for c in nb.cells if c.cell_type == "code"]
            if len(code_cells) < 1:
                errors.append(str(nb_path.relative_to(COURSE_DIR.parent)))
        except Exception:
            continue
    if errors:
        pytest.fail(f"Lesson notebooks missing code cells:\n" + "\n".join(errors))


def test_notebook_starts_with_markdown():
    errors = []
    for nb_path in NOTEBOOKS:
        try:
            nb = _read_notebook(nb_path)
            if nb.cells[0].cell_type != "markdown":
                errors.append(str(nb_path.relative_to(COURSE_DIR.parent)))
        except Exception:
            continue
    if errors:
        pytest.fail(f"Notebooks not starting with markdown:\n" + "\n".join(errors))


def test_lesson_notebooks_have_imports():
    errors = []
    for nb_path in NOTEBOOKS:
        if not _is_lesson_notebook(nb_path):
            continue
        try:
            nb = _read_notebook(nb_path)
        except Exception:
            continue
        code_text = "\n".join(
            c.source for c in nb.cells if c.cell_type == "code"
        )
        has_import = "import " in code_text or "from " in code_text
        if not has_import:
            errors.append(str(nb_path.relative_to(COURSE_DIR.parent)))
    if errors:
        pytest.fail(f"Lesson notebooks without imports:\n" + "\n".join(errors))


def test_lesson_notebooks_have_exercises():
    exercise_keywords = ["exercise", "ejercicio", "challenge", "practice"]
    errors = []
    for nb_path in NOTEBOOKS:
        if not _is_lesson_notebook(nb_path):
            continue
        try:
            nb = _read_notebook(nb_path)
        except Exception:
            continue
        text = " ".join(c.source.lower() for c in nb.cells)
        if not any(kw in text for kw in exercise_keywords):
            errors.append(str(nb_path.relative_to(COURSE_DIR.parent)))
    if errors:
        pytest.fail(f"Lesson notebooks without exercise sections:\n" + "\n".join(errors))


@pytest.mark.slow
@pytest.mark.skipif(
    not Path(sys.prefix + "/bin") .exists() and not Path(sys.executable).parent.joinpath("jupyter").exists(),
    reason="jupyter not available for execution",
)
def test_notebook_execution_with_pytest_notebook():
    pytest_notebook = pytest.importorskip("pytest_notebook", reason="pytest-notebook not installed")
    errors = []
    for nb_path in NOTEBOOKS:
        if "lesson02_history_of_ai" in str(nb_path):
            continue
        result = subprocess.run(
            [sys.executable, "-m", "jupyter", "nbconvert", "--to", "notebook",
             "--execute", str(nb_path), "--output", "-"],
            capture_output=True, text=True, timeout=120,
        )
        if result.returncode != 0:
            errors.append(f"{nb_path.relative_to(COURSE_DIR.parent)}: {result.stderr[:200]}")
    if errors:
        pytest.fail(f"Notebook execution errors:\n" + "\n".join(errors[:10]))
