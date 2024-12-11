# Variables
PYTHON = python3
PIP = $(PYTHON) -m pip
VENV_DIR = venv
REQUIREMENTS = requirements.txt
APP_SCRIPT = src/App.py
PIPELINE_NOTEBOOK = main_pipeline.ipynb

# Targets
.PHONY: all install run-app clean

# Default target
all: install run

# install virtual environment and install dependencies
install:
	$(PYTHON) -m venv $(VENV_DIR)
	$(VENV_DIR)/bin/$(PIP) install -U pip
	$(VENV_DIR)/bin/$(PIP) install -r $(REQUIREMENTS)

run:
	$(VENV_DIR)/bin/jupyter nbconvert --to notebook --execute $(PIPELINE_NOTEBOOK) --output $(PIPELINE_NOTEBOOK)

# Clean up the virtual environment and other files
clean:
	rm -rf $(VENV_DIR)
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
