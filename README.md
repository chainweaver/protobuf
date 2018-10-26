# Protocol Buffers V3 for Blockchain API

## Install Protocol Buffers compiler

```
brew install protobuf
brew install jq
```

### for golang

```
go get -u github.com/golang/protobuf/protoc-gen-go
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
```

### for grpc-web (Javascript & Typescript)

```
git clone git@github.com:grpc/grpc-web.git
cd grpc-web
sudo make install-plugin
```

## Compile Protocol Buffers

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