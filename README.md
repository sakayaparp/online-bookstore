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
## Database setup

```shell
cd package/${PACKAGE_NAME}
npm i --save-dev sequelize-cli
npx sequelize-cli init
# go to config flie and update package/${PACKAGE_NAME}/config/config.json
# create model by run
npx sequelize-cli model:generate --name ${TABLE_NAME} --attributes ${FIELD:TYPE}
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