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
protoc \
  -I./proto/btc \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/btc/work/ \
  --doc_out=./protoc-gen-doc --doc_opt=html,btc.html \
  commonMessage.proto \
  assetMessage.proto \
  assetService.proto \
  blockchainMessage.proto \
  blockchainService.proto \
  microtransactionMessage.proto \
  microtransactionService.proto \
  walletMessage.proto \
  walletService.proto \
  metadataMessage.proto \
  metadataService.proto \
  addressMessage.proto \
  addressService.proto \
  analyticsMessage.proto \
  analyticsService.proto \
  transactionMessage.proto \
  transactionService.proto \
  addressforwardingMessage.proto \
  addressforwardingService.proto \
  confidencefactorMessage.proto \
  confidencefactorService.proto \
  webhooksMessage.proto \
  webhooksService.proto

echo "Build eth"
protoc \
  -I./proto/eth \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/eth/work/ \
  --doc_out=./protoc-gen-doc --doc_opt=html,eth.html \
  commonMessage.proto \
  blockchainMessage.proto \
  blockchainService.proto \
  addressMessage.proto \
  addressService.proto \
  transactionMessage.proto \
  transactionService.proto \
  webhooksMessage.proto \
  webhooksService.proto \
  contractMessage.proto \
  contractService.proto

echo "Generate btc openapi.json"
btcFileCount=`find ./openapi/btc/work -name "*Service*.json" | wc -l`
btcJqParam=".[0]"
for ((i=1; i < $btcFileCount; i++)); do
  btcJqParam+="*.[$i]"
done
jq -s `echo $btcJqParam` `find ./openapi/btc/work -name "*Service*.json"` > ./openapi/btc/openapi.json
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
jq -s `echo $ethJqParam` `find ./openapi/eth/work -name "*Service*.json"` > ./openapi/eth/openapi.json
if [ -e ./openapi/eth/work ]; then
  rm -f ./openapi/eth/work/*
  rm -rf ./openapi/eth/work
fi

echo "Generate btc openapi.yaml"
yq -y '.' openapi/btc/openapi.json > openapi/btc/openapi.yaml
echo "Generate eth openapi.yaml"
yq -y '.' openapi/eth/openapi.json > openapi/eth/openapi.yaml

echo "Build finish!"