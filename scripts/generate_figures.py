#!/usr/bin/env python3
"""Generate all figures for the course from Python scripts."""

import subprocess
import sys
from pathlib import Path

SCRIPTS_DIR = Path(__file__).resolve().parent
FIGURES_DIR = SCRIPTS_DIR.parent / "figures"


def main():
    FIGURES_DIR.mkdir(parents=True, exist_ok=True)

    scripts = [
        ("Module 1 (conceptual diagrams)", "figures/module01_figures.py"),
        ("Module 4 (ML figures)", "figures/module04_figures.py"),
    ]

    for label, rel_path in scripts:
        script_path = SCRIPTS_DIR / rel_path
        if not script_path.exists():
            print(f"ERROR: {script_path} not found")
            sys.exit(1)
        print(f"\n{'='*60}")
        print(f"Running: {label}")
        print(f"{'='*60}")
        result = subprocess.run([sys.executable, str(script_path)])
        if result.returncode != 0:
            print(f"Error running {script_path}")
            sys.exit(1)

    png_files = list(FIGURES_DIR.rglob("*.png"))
    svg_files = list(FIGURES_DIR.rglob("*.svg"))
    pdf_files = list(FIGURES_DIR.rglob("*.pdf"))
    total = len(png_files) + len(svg_files) + len(pdf_files)
    print(f"\n{'='*60}")
    print(f"Figure generation complete!")
    print(f"  PNG:  {len(png_files)}")
    print(f"  SVG:  {len(svg_files)}")
    print(f"  PDF:  {len(pdf_files)}")
    print(f"  Total: {total}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
