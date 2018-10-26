#!/bin/bash

rm -f ./protoc-gen-go/*
rm -f ./protoc-gen-js/*

protoc \
  -I./proto \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --gofast_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --js_out=import_style=commonjs,binary:./protoc-gen-js/ \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./protoc-gen-js/ \
  blockchainMessage.proto \
  blockchainService.proto
