import pytest
from pathlib import Path

COURSE_DIR = Path(__file__).resolve().parent.parent / "course"


def _get_bib_files():
    return list(COURSE_DIR.rglob("*.bib"))


BIB_FILES = _get_bib_files()


def test_bib_files_exist():
    assert len(BIB_FILES) > 0, "No .bib files found in course/"


def test_bib_files_have_content():
    empty = []
    for bib_path in BIB_FILES:
        text = bib_path.read_text(encoding="utf-8", errors="ignore").strip()
        if not text:
            empty.append(str(bib_path.relative_to(COURSE_DIR.parent)))
    if empty:
        pytest.fail(f"Empty .bib files:\n" + "\n".join(empty))


def test_bib_files_have_citations():
    """Check that every .bib file contains at least one @citation entry."""
    no_citations = []
    for bib_path in BIB_FILES:
        text = bib_path.read_text(encoding="utf-8", errors="ignore")
        if "@" not in text:
            no_citations.append(str(bib_path.relative_to(COURSE_DIR.parent)))
    if no_citations:
        pytest.fail(f".bib files without citations:\n" + "\n".join(no_citations))


def test_bib_entries_have_required_fields():
    """Check that citation entries have author and year."""
    import re
    issues = []
    for bib_path in BIB_FILES:
        text = bib_path.read_text(encoding="utf-8", errors="ignore")
        entries = re.findall(r"@\w+\{(\w+),", text)
        for entry in entries:
            entry_start = text.index(f"@") if f"@_{entry}" else 0
            entry_block = text[text.index(f"@_{entry}"):] if f"@_{entry}" in text else ""
            # Check author
            if "author" not in text:
                issues.append(f"{bib_path.name}: entry '{entry}' missing author")
            # Check year
            if "year" not in text:
                issues.append(f"{bib_path.name}: entry '{entry}' missing year")
    if issues:
        pytest.fail("\n".join(issues[:20]))


@pytest.fixture(scope="module")
def lesson_bib_map():
    """Map each lesson directory to its references.bib file."""
    mapping = {}
    for bib_path in BIB_FILES:
        lesson_dir = bib_path.parent
        if lesson_dir.name.startswith("lesson"):
            mapping[lesson_dir] = bib_path
    return mapping


def test_every_lesson_has_bib(lesson_bib_map):
    missing = []
    for module_dir in sorted(COURSE_DIR.glob("module*")):
        if not module_dir.is_dir():
            continue
        lessons_dir = module_dir / "lessons"
        if not lessons_dir.exists():
            continue
        for lesson_dir in sorted(lessons_dir.glob("lesson*/")):
            if lesson_dir not in lesson_bib_map:
                missing.append(str(lesson_dir.relative_to(COURSE_DIR.parent)))
    if missing:
        pytest.fail(f"Lessons missing references.bib:\n" + "\n".join(missing))
