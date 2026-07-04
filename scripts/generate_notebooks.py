#!/usr/bin/env python3
"""Generate Jupyter notebooks for the course."""

import pathlib
import nbformat

COURSE_DIR = pathlib.Path(__file__).resolve().parent.parent / "course"


def main():
    print(f"Notebooks directory: {COURSE_DIR}")


if __name__ == "__main__":
    main()
