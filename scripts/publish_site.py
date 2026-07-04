#!/usr/bin/env python3
"""Publish the course website."""

import pathlib

WEBSITE_DIR = pathlib.Path(__file__).resolve().parent.parent / "website"


def main():
    print(f"Publishing from {WEBSITE_DIR}")


if __name__ == "__main__":
    main()
