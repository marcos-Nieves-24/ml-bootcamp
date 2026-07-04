import pytest
import pandas as pd
from pathlib import Path

DATASETS_DIR = Path(__file__).resolve().parent.parent / "datasets"
REQUIRED_SUBDIRS = ["raw", "processed", "synthetic", "external"]


def _get_csv_files(directory):
    return list(directory.rglob("*.csv")) if directory.exists() else []


def _get_dataset_subdirs():
    return [d for d in REQUIRED_SUBDIRS if (DATASETS_DIR / d).exists()]


class TestDatasetDirectories:

    def test_datasets_root_exists(self):
        assert DATASETS_DIR.exists(), "datasets/ directory not found"

    def test_required_subdirectories_exist(self):
        for subdir in REQUIRED_SUBDIRS:
            path = DATASETS_DIR / subdir
            assert path.exists(), f"{subdir}/ directory missing in datasets/"

    def test_no_empty_subdirs(self):
        for subdir in REQUIRED_SUBDIRS:
            path = DATASETS_DIR / subdir
            entries = list(path.iterdir()) if path.exists() else []
            if len(entries) > 0:
                subdirs_with_datasets = [d.name for d in path.iterdir() if d.is_dir()]
                if subdirs_with_datasets:
                    for ds_dir in subdirs_with_datasets:
                        ds_path = path / ds_dir
                        ds_files = list(ds_path.iterdir())
                        if not ds_files:
                            pytest.fail(f"{ds_path} is an empty dataset directory")


class TestDatasetDocs:

    @pytest.fixture(scope="module")
    def dataset_dirs(self):
        result = []
        for subdir in REQUIRED_SUBDIRS:
            base = DATASETS_DIR / subdir
            if base.exists():
                for entry in base.iterdir():
                    if entry.is_dir():
                        result.append(entry)
        return result

    def test_datasets_have_readme(self, dataset_dirs):
        missing = [d.name for d in dataset_dirs if not (d / "README.md").exists()]
        if missing:
            pytest.fail(f"Datasets missing README.md: {missing}")

    def test_datasets_have_metadata(self, dataset_dirs):
        missing = [d.name for d in dataset_dirs if not (d / "metadata.json").exists()]
        if missing:
            pytest.fail(f"Datasets missing metadata.json: {missing}")

    def test_datasets_have_license(self, dataset_dirs):
        missing = [d.name for d in dataset_dirs if not (d / "license.txt").exists()]
        if missing:
            pytest.fail(f"Datasets missing license.txt: {missing}")


class TestCSVIntegrity:

    @pytest.fixture(scope="module")
    def csv_files(self):
        files = []
        for subdir in REQUIRED_SUBDIRS:
            path = DATASETS_DIR / subdir
            if path.exists():
                files.extend(path.rglob("*.csv"))
        return files

    def test_csv_files_can_be_loaded(self, csv_files):
        if not csv_files:
            pytest.skip("No CSV files found in datasets/")
        for csv_path in csv_files:
            try:
                df = pd.read_csv(csv_path)
                assert len(df.columns) >= 1, f"{csv_path} has no columns"
            except Exception as e:
                pytest.fail(f"Cannot load {csv_path}: {e}")

    def test_csv_not_empty(self, csv_files):
        if not csv_files:
            pytest.skip("No CSV files found in datasets/")
        for csv_path in csv_files:
            df = pd.read_csv(csv_path)
            assert not df.empty, f"{csv_path} is completely empty"
            assert len(df) > 0, f"{csv_path} has zero rows"

    def test_csv_has_column_names(self, csv_files):
        if not csv_files:
            pytest.skip("No CSV files found in datasets/")
        for csv_path in csv_files:
            df = pd.read_csv(csv_path)
            unnamed = [c for c in df.columns if "Unnamed" in str(c)]
            if unnamed:
                pytest.fail(f"{csv_path} has unnamed columns: {unnamed}")

    def test_csv_no_all_null_columns(self, csv_files):
        if not csv_files:
            pytest.skip("No CSV files found in datasets/")
        for csv_path in csv_files:
            df = pd.read_csv(csv_path)
            all_null = [c for c in df.columns if df[c].isnull().all()]
            if all_null:
                pytest.fail(f"{csv_path} has all-null columns: {all_null}")
