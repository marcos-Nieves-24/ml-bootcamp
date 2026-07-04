import pytest
import re
from pathlib import Path

REPO_DIR = Path(__file__).resolve().parent.parent
COURSE_DIR = REPO_DIR / "course"


def _get_markdown_files():
    return list(REPO_DIR.rglob("*.md"))


def _resolve_internal_link(link: str, source_file: Path):
    if link.startswith("http://") or link.startswith("https://"):
        return None
    fragment = None
    if "#" in link:
        link, fragment = link.split("#", 1)
    if link.startswith("/"):
        candidate = REPO_DIR / link.lstrip("/")
    else:
        candidate = (source_file.parent / link).resolve()
    candidate = candidate.resolve()
    if candidate.exists():
        return candidate
    if not candidate.suffix:
        for ext in [".md", ".ipynb", ".py", ".csv", ".png", ".svg", ".pdf", ".json", ".txt", ".bib"]:
            with_ext = candidate.with_suffix(ext)
            if with_ext.exists():
                return with_ext
    return candidate if candidate.exists() else None


def _collect_internal_links(filepath: Path):
    text = filepath.read_text(encoding="utf-8")
    md_link_pattern = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
    links = []
    for match in md_link_pattern.finditer(text):
        url = match.group(2).strip()
        if url.startswith("http://") or url.startswith("https://") or url.startswith("mailto:"):
            continue
        if url.startswith("#"):
            continue
        links.append(url)
    image_pattern = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")
    for match in image_pattern.finditer(text):
        url = match.group(2).strip()
        if url.startswith("http://") or url.startswith("https://"):
            continue
        links.append(url)
    return links


MARKDOWN_FILES = _get_markdown_files()


def test_markdown_files_exist():
    assert len(MARKDOWN_FILES) > 0, "No markdown files found"


def test_internal_links_are_valid():
    broken = []
    for mdf in MARKDOWN_FILES:
        for link in _collect_internal_links(mdf):
            resolved = _resolve_internal_link(link, mdf)
            if resolved is None:
                broken.append(f"{mdf.relative_to(REPO_DIR)} -> {link}")
    if broken:
        msg = "\n".join(broken[:20])
        pytest.fail(f"Found {len(broken)} broken internal links (showing first 20):\n{msg}")


def test_cross_module_references_point_to_existing_lessons():
    broken = []
    for mdf in MARKDOWN_FILES:
        text = mdf.read_text(encoding="utf-8")
        for match in re.finditer(r"module\d{2}_[a-z_]+", text):
            mod_name = match.group()
            mod_dir = COURSE_DIR / mod_name
            if not mod_dir.exists():
                lesson_link = mdf.relative_to(REPO_DIR)
                broken.append(f"{lesson_link} references non-existent module {mod_name}")
    if broken:
        pytest.fail("\n".join(broken[:10]))


def test_referenced_figures_exist():
    broken = []
    for mdf in MARKDOWN_FILES:
        for match in re.finditer(r"!\[([^\]]*)\]\(([^)]+\.(?:png|svg|pdf))\)", mdf.read_text(encoding="utf-8")):
            url = match.group(2)
            resolved = _resolve_internal_link(url, mdf)
            if resolved is None:
                broken.append(f"{mdf.relative_to(REPO_DIR)} -> {url}")
    if broken:
        msg = "\n".join(broken[:15])
        pytest.fail(f"Found {len(broken)} broken figure references (showing first 15):\n{msg}")


def test_referenced_notebooks_exist():
    broken = []
    for mdf in MARKDOWN_FILES:
        text = mdf.read_text(encoding="utf-8")
        for match in re.finditer(r"\[([^\]]*)\]\(([^)]+\.ipynb)\)", text):
            url = match.group(2)
            resolved = _resolve_internal_link(url, mdf)
            if resolved is None:
                broken.append(f"{mdf.relative_to(REPO_DIR)} -> {url}")
    if broken:
        msg = "\n".join(broken[:15])
        pytest.fail(f"Found {len(broken)} broken notebook references (showing first 15):\n{msg}")
