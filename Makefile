all: help

help:
	@echo "Available commands:"
	@echo "make start-back      - Django - runserver http://127.0.0.1:8000"
	@echo "make start-front     - React - runserver http://localhost:3000"
	@echo "make migrate         - Django - migrate"
	@echo "make makemigrations  - Django - makemigrations"
	@echo "make superuser       - Django - createsuperuser"

start-back:
	@echo "Run Django dev server:"
	@python backend/manage.py runserver $(cmd)

start-front:
	@echo "Run React dev server:"
	cd blog-ui && @npm start $(cmd)

makemigrations:
	@echo "Running Django makemigrations:"
	@python backend/manage.py makemigrations $(cmd)

migrate:
	@echo Running Django migrations:"
	@python backend//manage.py migrate $(cmd)

superuser:
	@echo "Creating Django superuser:"
	@python backend//manage.py createsuperuser $(cmd)
