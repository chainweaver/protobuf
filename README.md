# Protocol Buffers V3 for Blockchain API

## Install Protocol Buffers compiler

### for golang

```
go get -u github.com/golang/protobuf/protoc-gen-go
```

### for grpc-web (Javascript & Typescript)

```
git clone git@github.com:grpc/grpc-web.git
cd grpc-web
sudo make install-plugin
```

## Compile Protocol Buffers

```
./genproto.sh
```