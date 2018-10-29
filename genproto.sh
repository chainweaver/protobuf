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
  blockchainMessage.proto \
  blockchainService.proto

echo -n > ./openapi/openapi.json
find ./openapi/ -name "*.json" -print0 | xargs -0 jq -s add ./openapi/openapi.json >> ./openapi/openapi.json