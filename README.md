[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fchainweaver%2Fprotobuf.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fchainweaver%2Fprotobuf?ref=badge_shield)
[![CircleCI](https://circleci.com/gh/chainweaver/protobuf/tree/master.svg?style=svg)](https://circleci.com/gh/chainweaver/protobuf/tree/master)

# Protocol Buffers V3 for Chainweaver API

## Libraries to use for this project

| lib | version |
|----|---|
| libprotoc | 3.6.1.1 (latest) |
| jq | 1.6 (latest) |
| yq | 2.2.1 (latest) |
| protoc-gen-go | 1.2.0 |
| protoc-gen-grpc-gateway | 1.5.1 |
| protoc-gen-swagger | 1.5.1 |
| protoc-gen-doc | 1.1.0 |

## Install Protocol Buffers compiler

### libprotoc

Install the latest version at that time. (because it can not be installed by version specification)

```
# For macOS
brew install protobuf (or brew upgrade protobuf)
```

### for golang, grpc-gateway and swagger

```
mkdir -p $GOPATH/src/github.com/golang
cd $GOPATH/src/github.com/golang
git clone git@github.com:golang/protobuf.git
cd protobuf
git checkout -b v1.2.0 refs/tags/v1.2.0
cd protoc-gen-go
go install

mkdir -p $GOPATH/src/github.com/grpc-ecosystem
cd $GOPATH/src/github.com/grpc-ecosystem
git clone git@github.com:grpc-ecosystem/grpc-gateway.git
cd grpc-gateway
git checkout -b v1.5.1 refs/tags/v1.5.1
cd protoc-gen-grpc-gateway
go install
cd ../protoc-gen-swagger
go install
```

### for protobuf doc

It is necessary to install [dep](https://github.com/golang/dep) in advance

```
mkdir -p $GOPATH/src/github.com/pseudomuto
cd $GOPATH/src/github.com/pseudomuto
git clone git@github.com:pseudomuto/protoc-gen-doc.git
cd protoc-gen-doc/cmd/protoc-gen-doc
git checkout -b v1.1.0 refs/tags/v1.1.0
dep ensure
go install
```

## Install various tools for OpenAPI document

### Install jq and yq
Install the latest version at that time. (because it can not be installed by version specification)

```
# For macOS
brew install jq (or brew upgrade jq)
brew install python-yq (or brew upgrade python-yq) # Not yq!
```

## Compile Protocol Buffers of Blockchain API

```
mkdir -p $GOPATH/src/github.com/fairway-corp
cd $GOPATH/src/github.com/fairway-corp
git clone git@github.com:fairway-corp/blockchain-protobuf.git
cd blockchain-protobuf
./genproto.sh
```

## Reference

* [https://grpc.io/](https://grpc.io/)
* [https://developers.google.com/protocol-buffers/](https://developers.google.com/protocol-buffers/)
* [https://github.com/grpc-ecosystem/grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway)
* [https://github.com/golang/protobuf](https://github.com/golang/protobuf)
* [https://github.com/pseudomuto/protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc)

## License Scan
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fchainweaver%2Fprotobuf.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fchainweaver%2Fprotobuf?ref=badge_large)
