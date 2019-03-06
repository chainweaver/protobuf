#!/usr/bin/env bash

onSignalInterrupt() {
  echo "Interrupted!"
  exit 1
}

trap onSignalInterrupt 2

compileProto() {
  coin=$1

  protoFiles=""
  for file in `\find ./proto/$coin -maxdepth 1 -type f -name "*.proto"`; do
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
  if [ $? -gt 0 ]; then
    return 1
  fi
}

mergeOpenApiJson() {
  coin=$1

  fileCount=`find ./openapi/$coin/work -name "*Service*.json" | wc -l`
  jqParam=".[0]"
  for ((i=1; i < $fileCount; i++)); do
    jqParam+="*.[$i]"
  done
  jq -s "$jqParam" `find ./openapi/$coin/work -name "*Service*.json" | sort` > ./openapi/$coin/work/tmp.json
  if [ $? -gt 0 ]; then
    return 1
  fi

  jq 'del(.info, .schemes)' ./openapi/$coin/work/tmp.json > ./openapi/$coin/work/openapi2.json
  if [ $? -gt 0 ]; then
    return 1
  fi

  jq -s '.[0] * .[1]' ./scripts/openapi/${coin}OpenApi.json ./openapi/$coin/work/openapi2.json > ./openapi/$coin/openapi2.json
  if [ $? -gt 0 ]; then
    return 1
  fi
}

replacePostmanPattern() {
  coin=$1
  beforePattern=$2
  afterPattern=$3
  updateUri="map_values((..|select(.pattern?==\"$beforePattern\")|.pattern)|=\"$afterPattern\")"
  jq "$updateUri" ./postman/$coin/variable.json > ./postman/$coin/tmpVariable.json
  mv ./postman/$coin/tmpVariable.json ./postman/$coin/variable.json
}

generatePostmanCollection() {
  coin=$1
  /openapi-to-postman/bin/openapi2postmanv2.js -s ./openapi/$coin/openapi3.yaml -o ./postman/$coin/tmpCollection.json -p
  if [ $? -gt 0 ]; then
    return 1
  fi

  # In order to prevent a difference from occurring every time, delete id
  jq 'del(.. | .id?)' ./postman/$coin/tmpCollection.json > ./postman/$coin/collection.json
  if [ $? -gt 0 ]; then
    return 1
  fi

  # PostmanId
  jq $updatePostmanId ./postman/$coin/collection.json > ./postman/$coin/tmpCollection.json
  if [ $? -gt 0 ]; then
    return 1
  fi

  # Variable
  jq 'del(.variable[0])' ./postman/$coin/tmpCollection.json > ./postman/$coin/collection.json
  if [ $? -gt 0 ]; then
    return 1
  fi

  jq '.components.schemas | to_entries[] | .key=.key | .type="object"' ./openapi/$coin/openapi3.json | jq -s > ./postman/$coin/variable.json
  if [ $? -gt 0 ]; then
    return 1
  fi

  echo "{\"variable\":" > ./postman/$coin/tmpVariable.json && cat ./postman/$coin/variable.json >> ./postman/$coin/tmpVariable.json && echo "}" >> ./postman/$coin/tmpVariable.json
  mv ./postman/$coin/tmpVariable.json ./postman/$coin/variable.json

  # The postman's json schema validator uses tv4, and this only supports json-schema draft v4, so "date-time" can not be used.
  # ref) https://geraintluff.github.io/tv4/
  replacePostmanPattern $coin "date-time" '^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\\.[0-9]+)?(([Zz])|([\\+|\\-]([01][0-9]|2[0-3]):[0-5][0-9]))$'
  replacePostmanPattern $coin "uri" '^(http[s]?:\/\/){1}([0-9A-Za-z-.@:%_+~#=]+)+((.[a-zA-Z]{2,3})+)(\/(.)*)?'

  # Merge variable
  jq -s '.[0] * .[1]' ./postman/$coin/collection.json ./postman/$coin/variable.json > ./postman/$coin/tmpCollection.json
  if [ $? -gt 0 ]; then
    return 1
  fi
  rm -f ./postman/$coin/variable.json
  mv ./postman/$coin/tmpCollection.json ./postman/$coin/collection.json

  # Update baseUrl
  baseUrl=$(jq -r '.servers[0].url' ./openapi/$coin/openapi3.json)
  jq ".variable[.variable|length]={\"key\":\"baseUrl\",\"type\":\"string\",\"value\":\"$baseUrl\"}" ./postman/$coin/collection.json > ./postman/$coin/tmpCollection.json
  if [ $? -gt 0 ]; then
    return 1
  fi
  mv ./postman/$coin/tmpCollection.json ./postman/$coin/collection.json

  # Update network
  network=main
  jq ".variable[.variable|length]={\"key\":\"network\",\"type\":\"string\",\"value\":\"$network\"}" ./postman/$coin/collection.json > ./postman/$coin/tmpCollection.json
  if [ $? -gt 0 ]; then
    return 1
  fi
  mv ./postman/$coin/tmpCollection.json ./postman/$coin/collection.json

  # Global Prerequest
  # Generate event json
  globalPrerequestFile="postman/$coin/testScript/globalPrerequest.js"
  cp $globalPrerequestFile $globalPrerequestFile.tmp.json
  perl -p -i -e 's/\n/\\n/g' $globalPrerequestFile.tmp.json
  perl -p -i -e 's/\"/\\"/g' $globalPrerequestFile.tmp.json
  echo "{\"listen\":\"prerequest\",\"script\":{\"exec\":[\"$(cat $globalPrerequestFile.tmp.json)\"],\"type\":\"text/javascript\"}}" > $globalPrerequestFile.json
  rm -f $globalPrerequestFile.tmp.json

  jq --argfile testScript "$globalPrerequestFile.json" ".event[0]|=\$testScript" ./postman/$coin/collection.json > ./postman/$coin/tmpCollection.json
  if [ $? -gt 0 ]; then
    rm -f $globalPrerequestFile.json
    return 1
  fi

  rm -f $globalPrerequestFile.json
  mv ./postman/$coin/tmpCollection.json ./postman/$coin/collection.json

  # Item Event
  for file in `\find ./postman/$coin/testScript/ -maxdepth 1 -type f -name "*.js"`; do
    filename=$(basename $file .js)
    splitFilename=${filename//_/ };
    itemName=""
    for str in ${splitFilename[@]}; do
      itemName="$itemName${str^} "
    done
    itemName=${itemName% }

    # Generate postman event json
    cp $file $file.tmp.json
    perl -p -i -e 's/\n/\\n/g' $file.tmp.json
    perl -p -i -e 's/\"/\\"/g' $file.tmp.json
    echo "[{\"listen\":\"test\",\"script\":{\"exec\":[\"$(cat $file.tmp.json)\"],\"type\":\"text/javascript\"}}]" > $file.json
    rm -f $file.tmp.json

    jq --argfile testScript "$file.json" "map_values((..|select((.name?==\"$itemName\")and(.request!=null)and(.response!=null))|.event)|=\$testScript)" ./postman/$coin/collection.json > ./postman/$coin/tmpCollection.json
    if [ $? -gt 0 ]; then
      rm -f $file.json
      return 1
    fi

    rm -f $file.json
    mv ./postman/$coin/tmpCollection.json ./postman/$coin/collection.json
  done

  rm -f ./postman/$coin/tmpCollection.json
}

run() {
  coin=$1

  rm -f ./openapi/$coin/*
  if [ ! -e ./openapi/$coin/work ]; then
    mkdir ./openapi/$coin/work
  fi
  rm -f ./postman/$coin/collection.json
  rm -f ./protoc-gen-go/$coin/*

  echo "--------------------------"
  echo " Compile protocol buffers "
  echo "--------------------------"
  compileProto $coin
  if [ $? -gt 0 ]; then
    return 1
  fi
  echo "Generate protoc-gen-go/$coin/*.pb.go"
  echo "Generate openapi/$coin/*.json"

  echo "----------------------------"
  echo " Merge OpenAPIv2 json files "
  echo "----------------------------"
  mergeOpenApiJson $coin
  if [ $? -gt 0 ]; then
    return 1
  fi
  echo "Create openapi/$coin/openapi2.json"

  echo "------------------"
  echo " Update OpenAPIv2 "
  echo "------------------"
  jq $updateVersion openapi/$coin/openapi2.json > openapi/$coin/work/openapi2.json
  if [ $? -gt 0 ]; then
    return 1
  fi
  jq $updateBasePath openapi/$coin/work/openapi2.json > openapi/$coin/openapi2.json
  if [ $? -gt 0 ]; then
    return 1
  fi

  # Update of models that could not be properly converted by protoc-gen-swagger
  jq '(.. | select(.format? == "uint64")).type="integer"' ./openapi/$coin/openapi2.json  > ./openapi/$coin/work/openapi2.json
  if [ $? -gt 0 ]; then
    return 1
  fi
  jq '(.. | select(.format? == "uint64")).format="int64"' ./openapi/$coin/work/openapi2.json  > ./openapi/$coin/openapi2.json
  if [ $? -gt 0 ]; then
    return 1
  fi

  # Add error definition
  jq -s '.[0] * .[1]' ./openapi/$coin/openapi2.json ./scripts/openapi/errorDefinition.json > ./openapi/$coin/work/openapi2.json
  if [ $? -gt 0 ]; then
    return 1
  fi
  mv ./openapi/$coin/work/openapi2.json ./openapi/$coin/openapi2.json

  echo "Update openapi/$coin/openapi2.json"

  echo "--------------------------------"
  echo " Convert OpenAPIv2 to OpenAPIv3 "
  echo "--------------------------------"
  swagger2openapi openapi/$coin/openapi2.json -o openapi/$coin/openapi3.json
  if [ $? -gt 0 ]; then
    return 1
  fi
  echo "Create openapi/$coin/openapi3.json"

  echo "-------------------------------------"
  echo " Convert format OpenAPI json to yaml "
  echo "-------------------------------------"
  yq -y '.' openapi/$coin/openapi2.json > openapi/$coin/openapi2.yaml
  if [ $? -gt 0 ]; then
    return 1
  fi
  echo "Create openapi/$coin/openapi2.yaml"
  yq -y '.' openapi/$coin/openapi3.json > openapi/$coin/openapi3.yaml
  if [ $? -gt 0 ]; then
    return 1
  fi
  echo "Create openapi/$coin/openapi3.yaml"

  echo "-------------------------------------------------"
  echo " Generate postman collection file from OpenAPIv3 "
  echo "-------------------------------------------------"
  generatePostmanCollection $coin
  if [ $? -gt 0 ]; then
    return 1
  fi
  echo "Create postman/$coin/collection.json"

  if [ -e ./openapi/$coin/work ]; then
    rm -f ./openapi/$coin/work/*
    rm -rf ./openapi/$coin/work
  fi
}

echo "Build start!"

# Postman ID is fixed
git checkout postman/btc/collection.json
postmanId=$(jq -r '.info._postman_id' ./postman/btc/collection.json)
if [ $? -gt 0 ]; then
  echo "Build error"
  exit 1
fi

updatePostmanId=.info._postman_id=\"${postmanId}\"

# OpenAPI Version determination
if [ $CIRCLE_BRANCH != "" ]; then
  version=$CIRCLE_BRANCH
  basePath=$CIRCLE_BRANCH
else
  # Extract version
  version=$(./scripts/semVer.sh vvv)
  majorVersion=$(./scripts/semVer.sh v)
  basePath="v${majorVersion}"
fi
updateVersion=.info.version=\"${version}\"
updateBasePath=.basePath=\"/${basePath}\"

echo "[Environment Variables]CIRCLE_BRANCH=$CIRCLE_BRANCH CIRCLE_TAG=$CIRCLE_TAG"
echo "[API Version]$version"
echo "[API Major Version]$majorVersion"

run btc
if [ $? -gt 0 ]; then
  echo "Build error"
  exit 1
fi

run eth
if [ $? -gt 0 ]; then
  echo "Build error"
  exit 1
fi

echo "Build finish!"