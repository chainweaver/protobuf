all: docker-build-protobuf-builder docker-build-protobuf-document-renderer docker-build-openapi-document-renderer build render-protobuf-document render-openapi-document

docker-build-protobuf-builder:
	docker build -t quay.io/chainweaver/protobuf-builder:1.3.0 -f Dockerfile-ProtobufBuilder .
docker-build-protobuf-document-renderer:
	docker build -t quay.io/chainweaver/protobuf-document-renderer:1.1.0 -f Dockerfile-ProtobufDocumentRenderer .
docker-build-openapi-document-renderer:
	docker build -t quay.io/chainweaver/openapi-document-renderer:1.1.0 -f Dockerfile-OpenApiDocumentRenderer .
docker-build-postmane-tester:
	docker build -t quay.io/chainweaver/postman-tester:1.0.0 -f Dockerfile-PostmanTester .

build:
	docker run -e CIRCLE_BRANCH -e CIRCLE_TAG -e CIRCLE_SHA1 -v ${PWD}:/go/src/github.com/chainweaver/protobuf quay.io/chainweaver/protobuf-builder:1.3.0
render-protobuf-document:
	docker run -v ${PWD}:/go/src/github.com/chainweaver/protobuf quay.io/chainweaver/protobuf-document-renderer:1.1.0
render-openapi-document:
	docker run -v ${PWD}:/go/src/github.com/chainweaver/protobuf quay.io/chainweaver/openapi-document-renderer:1.1.0

test:
	docker run -e BASE_URL -e TOKEN -v ${PWD}:/go/src/github.com/chainweaver/protobuf -t quay.io/chainweaver/postman-tester:1.0.0