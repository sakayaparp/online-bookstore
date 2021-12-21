# Vanilla Tea Online Bookstore

## Getting Started

```shell
docker-compose up -d

# init database
npx lerna run db:init
```

## Create a new package

```shell
cd packages
npx create-next-app --ts ${PACKAGE_NAME}
```

## Create new express service

```shell
cd packages
npx express-generator-typescript "project name (default is express-gen-ts)"
```

## Database setup

```shell
cd package/${PACKAGE_NAME}
npm i --save-dev sequelize-cli
npm i --save pg pg-hstore sequelize
npx sequelize-cli init
# go to config file and update package/${PACKAGE_NAME}/config/config.json
# create model by run
npx sequelize-cli model:generate --name ${TABLE_NAME} --attributes ${FIELD:TYPE}
# example add multiple fields format: ISBN:string,title:string
npm run db:init
```

## Troubleshooting

Resolved invalid dependencies

```shell
cd ${ROOT_PROJECT}
npx lerna link convert
```

## Run ZAP Scan (Security test)
```shell
# Spawn application, zap docker 
docker-compose up -d

cd packages/bookstore

# disableAllPassiveScanner & enablePassiveScanner
sh ./zap/scripts/zapScan.sh -eps

# set proxy through ZAP
export HTTP_PROXY=http://localhost:8080
export HTTPS_PROXY=http://localhost:8080

# disableAllActiveScanner & enableActiveScanner
sh ./zap/scripts/zapScan.sh -eas

# Run cypress through zap to get application structure
npm run cypress:headless

# Run zap active scan 
sh ./zap/scripts/zapScan.sh "$@" -as local
```
---

## Opened Issues

### next lint is stuck

https://github.com/vercel/next.js/issues/3862
