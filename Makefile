.PHONY: build

all: docker-build-protobuf-builder docker-build-protobuf-document-renderer docker-build-openapi-document-renderer docker-build-postman-tester build render-protobuf-document render-openapi-document

docker-build-protobuf-builder:
	docker build -t quay.io/chainweaver/protobuf-builder:1.4.0 -f build/dockerfiles/Dockerfile-ProtobufBuilder .
docker-build-protobuf-document-renderer:
	docker build -t quay.io/chainweaver/protobuf-document-renderer:1.2.0 -f build/dockerfiles/Dockerfile-ProtobufDocumentRenderer .
docker-build-openapi-document-renderer:
	docker build -t quay.io/chainweaver/openapi-document-renderer:1.1.1 -f build/dockerfiles/Dockerfile-OpenApiDocumentRenderer .
docker-build-postman-tester:
	docker build -t quay.io/chainweaver/postman-tester:1.0.0 -f build/dockerfiles/Dockerfile-PostmanTester .

build:
	docker run -e CIRCLE_BRANCH -e CIRCLE_TAG -e CIRCLE_SHA1 -v ${PWD}:/go/src/github.com/chainweaver/protobuf quay.io/chainweaver/protobuf-builder:1.4.0
render-protobuf-document:
	docker run -v ${PWD}:/go/src/github.com/chainweaver/protobuf quay.io/chainweaver/protobuf-document-renderer:1.2.0
render-openapi-document:
	docker run -v ${PWD}:/go/src/github.com/chainweaver/protobuf quay.io/chainweaver/openapi-document-renderer:1.1.1

test:
	docker run -e BASE_URL -e TOKEN -v ${PWD}:/go/src/github.com/chainweaver/protobuf -t quay.io/chainweaver/postman-tester:1.0.0