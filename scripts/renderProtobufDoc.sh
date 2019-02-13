#!/bin/bash

echo "Rendering protobuf document start!"

if [ ! -e ./protoc-gen-doc ]; then
  mkdir -p ./protoc-gen-doc
fi


btcProtoFiles=""
for file in `\find ./proto/btc -maxdepth 1 -type f`; do
  btcProtoFiles+="$file "
done
protoc \
  -I./proto/btc \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --doc_out=./protoc-gen-doc --doc_opt=html,btc.html \
  `echo $btcProtoFiles`

ethProtoFiles=""
for file in `\find ./proto/eth -maxdepth 1 -type f`; do
  ethProtoFiles+="$file "
done
protoc \
  -I./proto/eth \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  --doc_out=./protoc-gen-doc --doc_opt=html,eth.html \
  `echo $ethProtoFiles`

echo "Rendering protobuf document start!"