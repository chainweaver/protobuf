#!/bin/bash

echo "Build start!"

rm -f ./protoc-gen-go/eth/*
rm -f ./protoc-gen-go/btc/*
rm -f ./openapi/btc/*
rm -f ./openapi/eth/*

if [ ! -e ./openapi/btc/work ]; then
  mkdir ./openapi/btc/work
fi
if [ ! -e ./openapi/eth/work ]; then
  mkdir ./openapi/eth/work
fi

echo "Build btc"
btcProtoFiles=""
for file in `\find ./proto/btc -maxdepth 1 -type f`; do
  btcProtoFiles+="$file "
done
protoc \
  -I./proto/btc \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/btc/work/ \
  `echo $btcProtoFiles`

echo "Build eth"
ethProtoFiles=""
for file in `\find ./proto/eth -maxdepth 1 -type f`; do
  ethProtoFiles+="$file "
done
protoc \
  -I./proto/eth \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/eth/work/ \
  `echo $ethProtoFiles`

echo "Generate btc openapi.json"
btcFileCount=`find ./openapi/btc/work -name "*Service*.json" | wc -l`
btcJqParam=".[0]"
for ((i=1; i < $btcFileCount; i++)); do
  btcJqParam+="*.[$i]"
done
jq -s `echo $btcJqParam` `find ./openapi/btc/work -name "*Service*.json" | sort` > ./openapi/btc/openapi.json
if [ -e ./openapi/btc/work ]; then
  rm -f ./openapi/btc/work/*
  rm -rf ./openapi/btc/work
fi

echo "Generate eth openapi.json"
ethFileCount=`find ./openapi/eth/work -name "*Service*.json" | wc -l`
ethJqParam=".[0]"
for ((i=1; i < $ethFileCount; i++)); do
  ethJqParam+="*.[$i]"
done
jq -s `echo $ethJqParam` `find ./openapi/eth/work -name "*Service*.json" | sort` > ./openapi/eth/openapi.json
if [ -e ./openapi/eth/work ]; then
  rm -f ./openapi/eth/work/*
  rm -rf ./openapi/eth/work
fi

if [ -z "$CIRCLE_TAG" ]; then
  version=.info.version=\"${CIRCLE_SHA1}\"
else
  version=.info.version=\"${CIRCLE_TAG}\"
fi

echo "Update btc openapi.json"
jq -s add openapi/btc/openapi.json scripts/btcDesc.json > openapi/btc/tmp.json
jq $version openapi/btc/tmp.json > openapi/btc/openapi.json
rm -f openapi/btc/tmp.json

echo "Update eth openapi.json"
jq -s add openapi/eth/openapi.json scripts/ethDesc.json > openapi/eth/tmp.json
jq $version openapi/eth/tmp.json > openapi/eth/openapi.json
rm -f openapi/eth/tmp.json

echo "Generate btc openapi.yaml"
yq -y '.' openapi/btc/openapi.json > openapi/btc/openapi.yaml
echo "Generate eth openapi.yaml"
yq -y '.' openapi/eth/openapi.json > openapi/eth/openapi.yaml

echo "Build finish!"