.PHONY: migrate migrate-status migrate-baseline db-reset

migrate:
	docker compose exec app php server/db/migrate.php up

migrate-status:
	docker compose exec app php server/db/migrate.php status

migrate-baseline:
	docker compose exec app php server/db/migrate.php baseline

db-reset:
	docker compose down -v
	docker compose up --build -d
	docker compose exec app php server/db/migrate.php up
