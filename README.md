[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fchainweaver%2Fprotobuf.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fchainweaver%2Fprotobuf?ref=badge_shield)
[![CircleCI](https://circleci.com/gh/chainweaver/protobuf/tree/master.svg?style=svg)](https://circleci.com/gh/chainweaver/protobuf/tree/master)

# Interface Definition of Chainweaver API

## Build Flow

![Build Flow](./doc/build-flow.svg "Build Flow")

## Data Flow

The data flow chart between REST API and Ethereum's JSON RPC is shown below.

### Some things to note:

The fields that set wei are properly handled by Custom Mashaler so that they do not overflow when responding to the REST API. The flow chart is annotated with the example of how `balance`  as a typical field of wei is converted.

![Data Flow](./doc/data-flow.svg "Data Flow")

## For developer

In this project you can develop by preparing the following environment.

* Be able to use the `make` command
* Docker daemon is running on your machine

### Build

```
make build
```

### Render Protocol Buffers Document

```
make render-protobuf-document
```

### Render OpenAPI Document

```
make render-openapi-document
```

### Test REST API with postman

```
export BASE_URL=URL
export TOKEN=YOUR_TOKEN
make test
```

## Document

**Protocol Buffers**

* [Bitcoin](https://chainweaver.io/protobuf/v0/btc.html)
* [Ethereum](https://chainweaver.io/protobuf/v0/eth.html)

**OpenAPI**

* [Bitcoin](https://chainweaver.io/openapi/v0/btc.html)
* [Ethereum](https://chainweaver.io/openapi/v0/eth.html)

## Reference

* [https://grpc.io/](https://grpc.io/)
* [https://developers.google.com/protocol-buffers/](https://developers.google.com/protocol-buffers/)
* [https://github.com/grpc-ecosystem/grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway)
* [https://github.com/golang/protobuf](https://github.com/golang/protobuf)
* [https://github.com/pseudomuto/protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc)
* [https://www.getpostman.com/](https://www.getpostman.com/)

## License Scan
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fchainweaver%2Fprotobuf.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fchainweaver%2Fprotobuf?ref=badge_large)
