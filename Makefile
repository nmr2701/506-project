# Variables
PYTHON = python3
PIP = $(PYTHON) -m pip
VENV_DIR = venv
REQUIREMENTS = requirements.txt
NOTEBOOK = pipeline.ipynb
APP_SCRIPT = src/App.py

# Targets
.PHONY: all setup run-notebook run-app clean

# Default target
all: setup run-notebook

# Setup virtual environment and install dependencies
setup:
	$(PYTHON) -m venv $(VENV_DIR)
	$(VENV_DIR)/bin/$(PIP) install -U pip
	$(VENV_DIR)/bin/$(PIP) install -r $(REQUIREMENTS)

# Run the Jupyter Notebook
run-notebook:
	$(VENV_DIR)/bin/jupyter notebook $(NOTEBOOK)

# Run the Flask application
run-app:
	$(VENV_DIR)/bin/$(PYTHON) $(APP_SCRIPT)

# Clean up the virtual environment and other files
clean:
	rm -rf $(VENV_DIR)
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
