#!/bin/sh

if [ -z "$BASE_URL" ]; then
  echo "Please set BASE_URL environment value"
  exit 1;
fi

if [ -z "$TOKEN" ]; then
  echo "Please set TOKEN environment value"
  exit 1;
fi

cp postman/eth/environment.json postman/eth/environment.json.bk

update() {
  update1='map_values((..|select(.key?=="'
  update2='")|.value)|="'
  update3='")'
  update=$update1$1$update2$2$update3
  jq "$update" postman/eth/environment.json > postman/eth/tmpEnvironment.json
  mv postman/eth/tmpEnvironment.json postman/eth/environment.json
}

update baseUrl $BASE_URL
update token $TOKEN

newman run postman/eth/collection.json -e postman/eth/environment.json --folder "addrs"
newman run postman/eth/collection.json -e postman/eth/environment.json -d postman/eth/testData/address.csv --folder "{address}"
newman run postman/eth/collection.json -e postman/eth/environment.json -d postman/eth/testData/blocks.csv --folder "blocks"

mv postman/eth/environment.json.bk postman/eth/environment.json
