#!/usr/bin/env python3
"""Build the complete course: generate datasets, figures, and execute notebooks."""

import subprocess
import sys
from pathlib import Path

SCRIPTS_DIR = Path(__file__).resolve().parent


def run_script(script_name, label):
    script_path = SCRIPTS_DIR / script_name
    if not script_path.exists():
        print(f"ERROR: {script_path} not found")
        return False
    print(f"\n{'='*60}")
    print(f"Phase: {label}")
    print(f"{'='*60}")
    result = subprocess.run([sys.executable, str(script_path)])
    if result.returncode != 0:
        print(f"ERROR: {label} failed (exit code {result.returncode})")
        return False
    print(f"✓ {label} completed successfully\n")
    return True


def main():
    phases = [
        ("generate_datasets.py", "Generate synthetic datasets"),
        ("generate_figures.py", "Generate figures"),
        ("generate_notebooks.py", "Execute and validate notebooks"),
    ]

    all_passed = True
    for script_name, label in phases:
        if not run_script(script_name, label):
            all_passed = False

    print(f"\n{'='*60}")
    if all_passed:
        print("Course build completed successfully!")
    else:
        print("Course build completed with errors.")
        sys.exit(1)
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
