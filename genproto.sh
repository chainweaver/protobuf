#!/bin/bash

rm -f ./protoc-gen-go/eth/*
rm -f ./protoc-gen-go/btc/*
rm -f ./openapi/btc/*
rm -f ./openapi/eth/*

protoc \
  -I./proto/btc \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/btc/ \
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

protoc \
  -I./proto/eth \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/eth/ \
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

btcFileCount=`find ./openapi/btc -name "*Service*.json" | wc -l`
btcJqParam=".[0]"
for ((i=1; i < $btcFileCount; i++)); do
  btcJqParam+="*.[$i]"
done
jq -s `echo $btcJqParam` `find ./openapi/btc -name "*Service*.json"` > ./openapi/btc/openapi.json

ethFileCount=`find ./openapi/eth -name "*Service*.json" | wc -l`
ethJqParam=".[0]"
for ((i=1; i < $ethFileCount; i++)); do
  ethJqParam+="*.[$i]"
done
jq -s `echo $ethJqParam` `find ./openapi/eth -name "*Service*.json"` > ./openapi/eth/openapi.json
