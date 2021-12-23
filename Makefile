.PHONY: start
start:
	docker compose -f docker-compose.kafka.yml up -d
	docker compose up -d
	npx lerna run db:init

.PHONY: poller
poller:
	cd packages/poller && npm run start:dev
		

.PHONY: consumer
consumer:
	cd packages/cart/subscriptions && npx ts-node index.ts

.PHONY: stop
stop:
	docker compose -f docker-compose.kafka.yml stop
	docker compose stop
