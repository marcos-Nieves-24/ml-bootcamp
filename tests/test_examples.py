import pytest
import ast
from pathlib import Path
import re

CONTENT_DIR = Path(__file__).resolve().parent.parent / "content"
LESSON_DIRS = list(CONTENT_DIR.rglob("lesson*/lesson.md"))


def _extract_python_code_blocks(markdown_text):
    pattern = re.compile(r"```python\n(.*?)```", re.DOTALL)
    return [m.group(1).strip() for m in pattern.finditer(markdown_text) if m.group(1).strip()]


def _has_valid_syntax(code):
    try:
        ast.parse(code)
        return True
    except SyntaxError:
        return False


def _is_constant_str(node):
    if isinstance(node, ast.Expr) and isinstance(node.value, ast.Constant):
        return isinstance(node.value.value, str)
    return False


def test_lesson_md_files_exist():
    assert len(LESSON_DIRS) > 0, "No lesson.md files found"


def test_python_blocks_have_valid_syntax():
    errors = []
    for lesson_path in LESSON_DIRS:
        text = lesson_path.read_text(encoding="utf-8")
        for i, code in enumerate(_extract_python_code_blocks(text), 1):
            if not _has_valid_syntax(code):
                rel = lesson_path.relative_to(CONTENT_DIR.parent)
                errors.append(f"{rel} block {i}")
    if errors:
        msg = "\n".join(errors[:20])
        pytest.fail(f"Syntax errors in {len(errors)} Python blocks (showing first 20):\n{msg}")


def test_function_definitions_are_well_formed():
    issues = []
    for lesson_path in LESSON_DIRS:
        text = lesson_path.read_text(encoding="utf-8")
        for i, code in enumerate(_extract_python_code_blocks(text), 1):
            try:
                tree = ast.parse(code)
            except SyntaxError:
                continue
            for node in ast.walk(tree):
                if isinstance(node, ast.FunctionDef):
                    if not node.body:
                        rel = lesson_path.relative_to(CONTENT_DIR.parent)
                        issues.append(f"{rel} block {i}: empty function '{node.name}'")
                    elif len(node.body) == 1 and _is_constant_str(node.body[0]):
                        rel = lesson_path.relative_to(CONTENT_DIR.parent)
                        issues.append(f"{rel} block {i}: function '{node.name}' only has a docstring")
    if issues:
        pytest.fail("\n".join(issues[:10]))


def test_common_imports_available():
    required = {"numpy", "pandas", "matplotlib", "sklearn"}
    available = set()
    for mod_name in required:
        try:
            __import__(mod_name)
            available.add(mod_name)
        except ImportError:
            pass
    missing = required - available
    if missing:
        pytest.fail(f"Required imports not available: {missing}")





def test_assignments_have_syntax_valid_python():
    assignment_files = list(CONTENT_DIR.rglob("assignment.md"))
    if not assignment_files:
        pytest.skip("No assignment.md files found")
    errors = []
    for apath in assignment_files:
        text = apath.read_text(encoding="utf-8")
        for i, code in enumerate(_extract_python_code_blocks(text), 1):
            if not _has_valid_syntax(code):
                rel = apath.relative_to(CONTENT_DIR.parent)
                errors.append(f"{rel} block {i}")
    if errors:
        pytest.fail(f"Syntax errors in assignment blocks: {errors[:15]}")
