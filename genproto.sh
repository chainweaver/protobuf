#!/bin/bash

rm -f ./protoc-gen-go/eth/*
rm -f ./protoc-gen-go/btc/*
rm -f ./protoc-gen-js/eth/*
rm -f ./protoc-gen-js/btc/*

protoc \
  -I./proto/btc \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/ \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./protoc-gen-js/btc/ \
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
  confidencefactorService.proto

protoc \
  -I./proto/eth \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/ \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./protoc-gen-js/eth/ \
  commonMessage_Eth.proto \
  blockchainMessage_Eth.proto \
  blockchainService_Eth.proto \
  addressMessage_Eth.proto \
  addressService_Eth.proto \
  transactionMessage_Eth.proto \
  transactionService_Eth.proto \
  webhooksMessage_Eth.proto \
  webhooksService_Eth.proto \
  contractMessage_Eth.proto \
  contractService_Eth.proto 

echo -n > ./openapi/openapi.json
find ./openapi/ -name "*.json" -print0 | xargs -0 jq -s add ./openapi/openapi.json >> ./openapi/openapi.json
