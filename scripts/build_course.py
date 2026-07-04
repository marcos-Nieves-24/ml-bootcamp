#!/usr/bin/env python3
"""Build the complete course: generate notebooks, figures, and datasets."""

import subprocess
import sys


def main():
    scripts = [
        "generate_datasets.py",
        "generate_figures.py",
        "generate_notebooks.py",
    ]
    for script in scripts:
        print(f"Running {script}...")
        result = subprocess.run([sys.executable, script])
        if result.returncode != 0:
            print(f"Error running {script}")
            sys.exit(1)
    print("Course build complete.")


if __name__ == "__main__":
    main()
