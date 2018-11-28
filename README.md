# Protocol Buffers V3 for Blockchain API

## Libraries to use for this project

| lib | version |
|----|---|
| protobuf | 3.6.1.1 |
| jq | 1.6 |
| protoc-gen-go | 1.2.0 |
| protoc-gen-grpc-gateway | 1.5.1 |
| protoc-gen-swagger | 1.5.1 |
| grpc-web | 1.0.2 |
| protoc-gen-doc | 1.1.0 |

## Install Protocol Buffers compiler

Install the latest version at that time. (because it can not be installed by version specification)

```
brew install protobuf (or brew upgrade protobuf)
brew install jq (or brew upgrade jq)
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

### for grpc-web (Javascript & Typescript)

```
git clone git@github.com:grpc/grpc-web.git
cd grpc-web
git checkout -b 1.0.3 refs/tags/1.0.3
sudo make install-plugin
```

### for protobuf doc

```
mkdir -p $GOPATH/src/github.com/pseudomuto
cd $GOPATH/src/github.com/pseudomuto
git clone git@github.com:pseudomuto/protoc-gen-doc.git
cd protoc-gen-doc
git checkout -b v1.1.0 refs/tags/v1.1.0
go install
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
* [https://github.com/grpc/grpc-web](https://github.com/grpc/grpc-web)
* [https://github.com/golang/protobuf](https://github.com/golang/protobuf)
* [https://github.com/pseudomuto/protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc)