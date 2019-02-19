#!/bin/bash

echo "Build start!"

prevVer=$(jq -r '.info.version' ./openapi/btc/openapi.json)

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
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/btc/work/ \
  `echo $btcProtoFiles`
rm -f protoc-gen-go/btc/openapi.pb.go


echo "Build eth"
ethProtoFiles=""
for file in `\find ./proto/eth -maxdepth 1 -type f`; do
  ethProtoFiles+="$file "
done
protoc \
  -I./proto/eth \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
  -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway \
  --go_out=plugins=grpc:../../../ \
  --grpc-gateway_out=logtostderr=true:../../../ \
  --swagger_out=logtostderr=true:./openapi/eth/work/ \
  `echo $ethProtoFiles`
rm -f protoc-gen-go/eth/openapi.pb.go


echo "Generate btc openapi.json"
btcFileCount=`find ./openapi/btc/work -name "*Service*.json" | wc -l`
btcJqParam=".[0]"
for ((i=1; i < $btcFileCount; i++)); do
  btcJqParam+="*.[$i]"
done
jq -s `echo $btcJqParam` `find ./openapi/btc/work -name "*Service*.json" | sort` > ./openapi/btc/work/merged_openapi.json
jq 'del(.info, .schemes)' ./openapi/btc/work/merged_openapi.json > ./openapi/btc/work/deleted_openapi.json
jq -s '.[0] * .[1]' ./openapi/btc/work/openapi.swagger.json ./openapi/btc/work/deleted_openapi.json > ./openapi/btc/work/merged2_openapi.json


echo "Generate eth openapi.json"
ethFileCount=`find ./openapi/eth/work -name "*Service*.json" | wc -l`
ethJqParam=".[0]"
for ((i=1; i < $ethFileCount; i++)); do
  ethJqParam+="*.[$i]"
done
jq -s `echo $ethJqParam` `find ./openapi/eth/work -name "*Service*.json" | sort` > ./openapi/eth/work/merged_openapi.json
jq 'del(.info, .schemes)' ./openapi/eth/work/merged_openapi.json > ./openapi/eth/work/deleted_openapi.json
jq -s '.[0] * .[1]' ./openapi/eth/work/openapi.swagger.json ./openapi/eth/work/deleted_openapi.json > ./openapi/eth/work/merged2_openapi.json


if [ $CIRCLE_BRANCH = "master" ]; then
  # In the case of the master, in order not to make a difference depending on the value of the version
  version=.info.version=\"${prevVer}\"
  basePath=.basePath=\"/${prevVer}\"
elif [ -z "$CIRCLE_TAG" ]; then
  version=.info.version=\"${CIRCLE_SHA1}\"
  basePath=.basePath=\"/${CIRCLE_SHA1}\"
else
  version=.info.version=\"${CIRCLE_TAG}\"

  # Extract major version
  semVerRegex='[^0-9]*\([0-9]*\)[.]\([0-9]*\)[.]\([0-9]*\)\([0-9A-Za-z-]*\)'
  majorVersion=$(echo $CIRCLE_TAG | sed -e "s#$semVerRegex#\1#")

  basePath=.basePath=\"/v${majorVersion}\"
fi


echo "Update version btc openapi.json"
jq $version openapi/btc/work/merged2_openapi.json > openapi/btc/work/versioned_openapi.json
jq $basePath openapi/btc/work/versioned_openapi.json > openapi/btc/openapi.json

echo "Update version eth openapi.json"
jq $version openapi/eth/work/merged2_openapi.json > openapi/eth/work/versioned_openapi.json
jq $basePath openapi/eth/work/versioned_openapi.json > openapi/eth/openapi.json


echo "Generate btc openapi.yaml"
yq -y '.' openapi/btc/openapi.json > openapi/btc/openapi.yaml
echo "Generate eth openapi.yaml"
yq -y '.' openapi/eth/openapi.json > openapi/eth/openapi.yaml


if [ -e ./openapi/btc/work ]; then
  rm -f ./openapi/btc/work/*
  rm -rf ./openapi/btc/work
fi
if [ -e ./openapi/eth/work ]; then
  rm -f ./openapi/eth/work/*
  rm -rf ./openapi/eth/work
fi

echo "Build finish!"