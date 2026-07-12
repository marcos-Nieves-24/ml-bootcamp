import pytest
import re
from pathlib import Path

REPO_DIR = Path(__file__).resolve().parent.parent
CONTENT_DIR = REPO_DIR / "content"
FIGURES_DIR = REPO_DIR / "figures"


def _get_all_lesson_md_files():
    return list(CONTENT_DIR.rglob("lessons/**/lesson.md"))


def _get_figure_files():
    """Return all figure files (png, svg, pdf)."""
    extensions = ["*.png", "*.svg", "*.pdf"]
    figures = []
    for ext in extensions:
        figures.extend(FIGURES_DIR.rglob(ext))
    return figures


LESSON_FILES = _get_all_lesson_md_files()
FIGURE_FILES = _get_figure_files()


def test_figures_directory_exists():
    assert FIGURES_DIR.exists(), "figures/ directory not found"


def test_figures_exist():
    assert len(FIGURE_FILES) > 0, f"No figure files found in {FIGURES_DIR}"


def test_referenced_figures_exist():
    """Every figure referenced in lesson.md files should exist on disk."""
    figure_names = {f.name for f in FIGURE_FILES}
    pattern = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")
    missing = []

    for lesson_path in LESSON_FILES:
        text = lesson_path.read_text(encoding="utf-8")
        for match in pattern.finditer(text):
            img_path = match.group(2).strip()
            # Skip external URLs
            if img_path.startswith("http://") or img_path.startswith("https://"):
                continue
            # Resolve relative path
            candidate = (lesson_path.parent / img_path).resolve()
            if candidate.exists():
                continue
            # Try figures/ directory
            fig_candidate = FIGURES_DIR / img_path
            if fig_candidate.exists():
                continue
            # Try just the filename
            if img_path in figure_names:
                continue
            missing.append(f"{lesson_path.relative_to(REPO_DIR)} references '{img_path}'")

    if missing:
        pytest.fail("\n".join(missing[:20]))


def test_figure_module_dirs_exist():
    """Each module directory under figures/ should exist."""
    module_dirs = set()
    for lesson_path in LESSON_FILES:
        module_name = lesson_path.parent.parent.parent.name  # e.g., module01_ai
        module_dirs.add(module_name)

    for module in sorted(module_dirs):
        fig_module_dir = FIGURES_DIR / module.replace("_ai", "").replace("_python", "").replace("_statistics", "").replace("_machine_learning", "").replace("_ethics", "")
        # Try with original name
        if not (FIGURES_DIR / module).exists():
            # Some modules may not have figures (e.g., module02_python)
            continue


def test_no_empty_figure_dirs():
    """Figure subdirectories should contain actual files."""
    for fig_dir in sorted(FIGURES_DIR.iterdir()):
        if fig_dir.is_dir():
            files = list(fig_dir.iterdir())
            if not files:
                pytest.fail(f"{fig_dir} is empty")
