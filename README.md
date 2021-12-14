# Vanilla Tea Online Bookstore

## Getting Started

```shell
docker-compose up -d

# init database
cd packages/inventory
npm run db:init
```

## Create a new package

```shell
cd packages
npx create-next-app --ts ${PACKAGE_NAME}
```
