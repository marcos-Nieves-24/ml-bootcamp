#!/usr/bin/env python3
"""Execute all Jupyter notebooks in the course and validate them."""

import subprocess
import sys
import time
from pathlib import Path

CONTENT_DIR = Path(__file__).resolve().parent.parent / "course"
SKIP_PATTERNS = ["lesson02_history_of_ai", ".ipynb_checkpoints"]
TIMEOUT = 300


def _should_skip(nb_path):
    rel = str(nb_path.relative_to(CONTENT_DIR.parent))
    for pattern in SKIP_PATTERNS:
        if pattern in rel:
            return True, f"Skipping {rel} (in skip list)"
    return False, ""


def _run_notebook(nb_path):
    rel = str(nb_path.relative_to(CONTENT_DIR.parent))
    print(f"  Executing: {rel} ...", end=" ", flush=True)
    start = time.time()
    result = subprocess.run(
        [sys.executable, "-m", "jupyter", "nbconvert", "--to", "notebook",
         "--execute", str(nb_path), "--output", str(nb_path),
         "--ExecutePreprocessor.timeout", str(TIMEOUT),
         "--ExecutePreprocessor.kernel_name", "python3"],
        capture_output=True, text=True, timeout=TIMEOUT + 60,
    )
    elapsed = time.time() - start
    if result.returncode == 0:
        print(f"✓ ({elapsed:.0f}s)")
        return True, ""
    else:
        error = result.stderr[:300] if result.stderr else result.stdout[:300]
        print(f"✗ ({elapsed:.0f}s)")
        return False, f"{rel}: {error}"


def _find_notebooks():
    notebooks = []
    for ipynb in CONTENT_DIR.rglob("*.ipynb"):
        skip, _ = _should_skip(ipynb)
        if skip:
            continue
        notebooks.append(ipynb)
    return sorted(notebooks)


def main():
    print("Finding notebooks to execute...")
    notebooks = _find_notebooks()
    print(f"Found {len(notebooks)} notebooks\n")

    if not notebooks:
        print("No notebooks found to execute.")
        return

    passed = 0
    failed = 0
    failures = []

    for nb in notebooks:
        success, msg = _run_notebook(nb)
        if success:
            passed += 1
        else:
            failed += 1
            failures.append(msg)

    print(f"\n{'='*60}")
    print(f"Notebook execution complete!")
    print(f"  Passed: {passed}/{len(notebooks)}")
    print(f"  Failed: {failed}/{len(notebooks)}")
    if failures:
        print(f"\nFailures:")
        for f in failures[:10]:
            print(f"  - {f}")
    print(f"{'='*60}")

    if failed > 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
