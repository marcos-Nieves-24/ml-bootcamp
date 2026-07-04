#!/usr/bin/env python3
"""Generate synthetic datasets for the course."""

import numpy as np
import pandas as pd
import pathlib

DATASETS_DIR = pathlib.Path(__file__).resolve().parent.parent / "datasets"


def main():
    DATASETS_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Datasets will be saved to {DATASETS_DIR}")


if __name__ == "__main__":
    main()
