#!/bin/bash

echo "Rendering protobuf document start!"

if [ ! -e ./protoc-gen-doc ]; then
  mkdir ./protoc-gen-doc
fi

protoc \
  -I./proto/btc \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
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

echo "Rendering protobuf document start!"