all: docker-build-protobuf-builder docker-build-protobuf-document-renderer docker-build-openapi-document-renderer build render-protobuf-document render-openapi-document

docker-build-protobuf-builder:
	docker build -t quay.io/chainweaver/protobuf-builder -f Dockerfile-ProtobufBuilder .
docker-build-protobuf-document-renderer:
	docker build -t quay.io/chainweaver/protobuf-document-renderer -f Dockerfile-ProtobufDocumentRenderer .
docker-build-openapi-document-renderer:
	docker build -t quay.io/chainweaver/openapi-document-renderer -f Dockerfile-OpenApiDocumentRenderer .

build:
	docker run -v ${PWD}:/go/src/github.com/chainweaver/protobuf quay.io/chainweaver/protobuf-builder:1.0.0
render-protobuf-document:
	docker run -v ${PWD}:/go/src/github.com/chainweaver/protobuf quay.io/chainweaver/protobuf-document-renderer
render-openapi-document:
	docker run -v ${PWD}:/go/src/github.com/chainweaver/protobuf quay.io/chainweaver/openapi-document-renderer