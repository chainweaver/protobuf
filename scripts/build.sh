#!/bin/bash

function onSignalInterrupt() {
  echo "Interrupted!"
  exit 0
}

trap onSignalInterrupt 2

compileProto() {
  coin=$1

  protoFiles=""
  for file in `\find ./proto/$coin -maxdepth 1 -type f`; do
    protoFiles+="$file "
  done

  protoc \
    -I./proto/$coin \
    -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
    -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway \
    --go_out=plugins=grpc:../../../ \
    --grpc-gateway_out=logtostderr=true:../../../ \
    --swagger_out=logtostderr=true:./openapi/$coin/work/ \
    `echo $protoFiles`
  rm -f protoc-gen-go/$coin/openapi.pb.go
}

mergeOpenApiJson() {
  coin=$1

  fileCount=`find ./openapi/$coin/work -name "*Service*.json" | wc -l`
  jqParam=".[0]"
  for ((i=1; i < $fileCount; i++)); do
    jqParam+="*.[$i]"
  done
  jq -s `echo $jqParam` `find ./openapi/$coin/work -name "*Service*.json" | sort` > ./openapi/$coin/work/tmp.json

  jq 'del(.info, .schemes)' ./openapi/$coin/work/tmp.json > ./openapi/$coin/work/openapi2.json
  jq -s '.[0] * .[1]' ./scripts/${coin}OpenApi.json ./openapi/$coin/work/openapi2.json > ./openapi/$coin/openapi2.json
}

generatePostmanCollection() {
  coin=$1
  /openapi-to-postman/bin/openapi2postmanv2.js -s ./openapi/$coin/openapi3.yaml -o ./postman/$coin/tmpCollection.json -p

  # In order to prevent a difference from occurring every time, delete id
  jq 'del(.. | .id?)' ./postman/$coin/tmpCollection.json > ./postman/$coin/collection.json
  jq $updatePostmanId ./postman/$coin/collection.json > ./postman/$coin/tmpCollection.json
  mv ./postman/$coin/tmpCollection.json ./postman/$coin/collection.json
}

run() {
  coin=$1

  rm -f ./openapi/$coin/*
  if [ ! -e ./openapi/$coin/work ]; then
    mkdir ./openapi/$coin/work
  fi
  rm -f ./postman/$coin/*
  rm -f ./protoc-gen-go/$coin/*

  echo "--------------------------"
  echo " Compile protocol buffers "
  echo "--------------------------"
  compileProto $coin
  echo "Generate protoc-gen-go/$coin/*.pb.go"
  echo "Generate openapi/$coin/*.json"

  echo "--------------------------"
  echo " Merge OpenAPIv2 json files "
  echo "--------------------------"
  mergeOpenApiJson $coin
  echo "Create openapi/$coin/openapi2.json"

  echo "------------------------------"
  echo " Set API Version to OpenAPIv2 "
  echo "------------------------------"
  jq $updateVersion openapi/$coin/openapi2.json > openapi/$coin/work/openapi2.json
  jq $updateBasePath openapi/$coin/work/openapi2.json > openapi/$coin/openapi2.json
  echo "Set openapi/$coin/openapi2.json"

  echo "--------------------------------"
  echo " Convert OpenAPIv2 to OpenAPIv3 "
  echo "--------------------------------"
  swagger2openapi openapi/$coin/openapi2.json -o openapi/$coin/openapi3.json
  echo "Create openapi/$coin/openapi3.json"

  echo "-------------------------------------"
  echo " Convert format OpenAPI json to yaml "
  echo "-------------------------------------"
  yq -y '.' openapi/$coin/openapi2.json > openapi/$coin/openapi2.yaml
  echo "Create openapi/$coin/openapi2.yaml"
  yq -y '.' openapi/$coin/openapi3.json > openapi/$coin/openapi3.yaml
  echo "Create openapi/$coin/openapi3.yaml"

  echo "-------------------------------------------------"
  echo " Generate postman collection file from OpenAPIv3 "
  echo "-------------------------------------------------"
  generatePostmanCollection $coin
  echo "Create postman/$coin/collection.json"

  if [ -e ./openapi/$coin/work ]; then
    rm -f ./openapi/$coin/work/*
    rm -rf ./openapi/$coin/work
  fi
}

echo "Build start!"

# Postman ID is fixed
postmanId=$(jq -r '.info._postman_id' ./postman/$coin/collection.json)
updatePostmanId=.info._postman_id=\"${postmanId}\"

# OpenAPI Version determination
prevVer=$(jq -r '.info.version' ./openapi/btc/openapi3.json)
if [ $CIRCLE_BRANCH = "master" ]; then
  # In the case of the master, in order not to make a difference depending on the value of the version
  version=$prevVer
  basePath=$prevVer
elif [ -z "$CIRCLE_TAG" ]; then
  version=$CIRCLE_SHA1
  basePath=$CIRCLE_SHA1
else
  version=$CIRCLE_TAG

  # Extract major version
  semVerRegex='[^0-9]*\([0-9]*\)[.]\([0-9]*\)[.]\([0-9]*\)\([0-9A-Za-z-]*\)'
  majorVersion=$(echo $CIRCLE_TAG | sed -e "s#$semVerRegex#\1#")
  basePath="${majorVersion}"
fi
updateVersion=.info.version=\"${version}\"
updateBasePath=.basePath=\"/${basePath}\"

echo "[Environment Variables]"
echo "CIRCLE_BRANCH=$CIRCLE_BRANCH"
echo "CIRCLE_TAG=$CIRCLE_TAG"
echo "CIRCLE_SHA1=$CIRCLE_SHA1"
echo "[API Version]"
echo "$v"

run btc
run eth

echo "Build finish!"