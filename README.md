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
