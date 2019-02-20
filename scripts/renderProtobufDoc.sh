#!/bin/bash

run() {
  coin=$1
  protoFiles=""
  for file in `\find ./proto/$coin -maxdepth 1 -type f`; do
    protoFiles+="$file "
  done
  protoc \
    -I./proto/$coin \
    -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
    -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway \
    --doc_out=./protoc-gen-doc --doc_opt=html,$coin.html \
    `echo $protoFiles`
}

echo "Rendering protobuf document start!"

if [ ! -e ./protoc-gen-doc ]; then
  mkdir -p ./protoc-gen-doc
fi

run btc
run eth

echo "Rendering protobuf document start!"