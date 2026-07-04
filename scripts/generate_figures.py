#!/usr/bin/env python3
"""Generate all figures for the course from Python scripts."""

import numpy as np
import matplotlib.pyplot as plt
import pathlib

FIGURES_DIR = pathlib.Path(__file__).resolve().parent.parent / "figures"


def main():
    FIGURES_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Figures will be saved to {FIGURES_DIR}")


if __name__ == "__main__":
    main()
