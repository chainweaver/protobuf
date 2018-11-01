#!/bin/bash

rm -f ./protoc-gen-go/*
rm -f ./protoc-gen-js/*

protoc \
  -I./proto \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/ \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./protoc-gen-js/ \
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
  transactionService.proto

echo -n > ./openapi/openapi.json
find ./openapi/ -name "*.json" -print0 | xargs -0 jq -s add ./openapi/openapi.json >> ./openapi/openapi.json
