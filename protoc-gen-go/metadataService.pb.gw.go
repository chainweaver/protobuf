// Code generated by protoc-gen-grpc-gateway. DO NOT EDIT.
// source: metadataService.proto

/*
Package protoc_gen_go is a reverse proxy.

It translates gRPC into RESTful JSON APIs.
*/
package protoc_gen_go

import (
	"io"
	"net/http"

	"github.com/golang/protobuf/proto"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/grpc-ecosystem/grpc-gateway/utilities"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/status"
)

var _ codes.Code
var _ io.Reader
var _ status.Status
var _ = runtime.String
var _ = utilities.NewDoubleArray

var (
	filter_MetadataService_GetMetadata_addressEndpoint_0 = &utilities.DoubleArray{Encoding: map[string]int{"address": 0}, Base: []int{1, 1, 0}, Check: []int{0, 1, 2}}
)

func request_MetadataService_GetMetadata_addressEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client MetadataServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq GetMetadata_addressEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["address"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "address")
	}

	protoReq.Address, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "address", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_MetadataService_GetMetadata_addressEndpoint_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.GetMetadata_addressEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

var (
	filter_MetadataService_GetMetadata_txhashEndpoint_0 = &utilities.DoubleArray{Encoding: map[string]int{"txhash": 0}, Base: []int{1, 1, 0}, Check: []int{0, 1, 2}}
)

func request_MetadataService_GetMetadata_txhashEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client MetadataServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq GetMetadata_txhashEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["txhash"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "txhash")
	}

	protoReq.Txhash, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "txhash", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_MetadataService_GetMetadata_txhashEndpoint_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.GetMetadata_txhashEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

var (
	filter_MetadataService_GetMetadata_blockhashEndpoint_0 = &utilities.DoubleArray{Encoding: map[string]int{"blockhash": 0}, Base: []int{1, 1, 0}, Check: []int{0, 1, 2}}
)

func request_MetadataService_GetMetadata_blockhashEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client MetadataServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq GetMetadata_blockhashEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["blockhash"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "blockhash")
	}

	protoReq.Blockhash, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "blockhash", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_MetadataService_GetMetadata_blockhashEndpoint_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.GetMetadata_blockhashEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

var (
	filter_MetadataService_PutMetadata_addressEndpoint_0 = &utilities.DoubleArray{Encoding: map[string]int{"address": 0}, Base: []int{1, 1, 0}, Check: []int{0, 1, 2}}
)

func request_MetadataService_PutMetadata_addressEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client MetadataServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq PutMetadata_addressEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["address"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "address")
	}

	protoReq.Address, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "address", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_MetadataService_PutMetadata_addressEndpoint_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.PutMetadata_addressEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

var (
	filter_MetadataService_PutMetadata_txhashEndpoint_0 = &utilities.DoubleArray{Encoding: map[string]int{"txhash": 0}, Base: []int{1, 1, 0}, Check: []int{0, 1, 2}}
)

func request_MetadataService_PutMetadata_txhashEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client MetadataServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq PutMetadata_txhashEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["txhash"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "txhash")
	}

	protoReq.Txhash, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "txhash", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_MetadataService_PutMetadata_txhashEndpoint_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.PutMetadata_txhashEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

var (
	filter_MetadataService_PutMetadata_blockhashEndpoint_0 = &utilities.DoubleArray{Encoding: map[string]int{"block_hash": 0}, Base: []int{1, 1, 0}, Check: []int{0, 1, 2}}
)

func request_MetadataService_PutMetadata_blockhashEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client MetadataServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq PutMetadata_block_hashEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["block_hash"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "block_hash")
	}

	protoReq.BlockHash, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "block_hash", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_MetadataService_PutMetadata_blockhashEndpoint_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.PutMetadata_blockhashEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

var (
	filter_MetadataService_DeleteMetadata_addressEndpoint_0 = &utilities.DoubleArray{Encoding: map[string]int{"address": 0}, Base: []int{1, 1, 0}, Check: []int{0, 1, 2}}
)

func request_MetadataService_DeleteMetadata_addressEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client MetadataServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq DeleteMetadata_addressEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["address"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "address")
	}

	protoReq.Address, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "address", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_MetadataService_DeleteMetadata_addressEndpoint_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.DeleteMetadata_addressEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

var (
	filter_MetadataService_DeleteMetadata_txhashEndpoint_0 = &utilities.DoubleArray{Encoding: map[string]int{"txhash": 0}, Base: []int{1, 1, 0}, Check: []int{0, 1, 2}}
)

func request_MetadataService_DeleteMetadata_txhashEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client MetadataServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq DeleteMetadata_txhashEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["txhash"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "txhash")
	}

	protoReq.Txhash, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "txhash", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_MetadataService_DeleteMetadata_txhashEndpoint_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.DeleteMetadata_txhashEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

var (
	filter_MetadataService_DeleteMetadata_blockheightEndpoint_0 = &utilities.DoubleArray{Encoding: map[string]int{"block_height": 0}, Base: []int{1, 1, 0}, Check: []int{0, 1, 2}}
)

func request_MetadataService_DeleteMetadata_blockheightEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client MetadataServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq DeleteMetadata_block_heightEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["block_height"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "block_height")
	}

	protoReq.BlockHeight, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "block_height", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_MetadataService_DeleteMetadata_blockheightEndpoint_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.DeleteMetadata_blockheightEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

// RegisterMetadataServiceHandlerFromEndpoint is same as RegisterMetadataServiceHandler but
// automatically dials to "endpoint" and closes the connection when "ctx" gets done.
func RegisterMetadataServiceHandlerFromEndpoint(ctx context.Context, mux *runtime.ServeMux, endpoint string, opts []grpc.DialOption) (err error) {
	conn, err := grpc.Dial(endpoint, opts...)
	if err != nil {
		return err
	}
	defer func() {
		if err != nil {
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
			return
		}
		go func() {
			<-ctx.Done()
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
		}()
	}()

	return RegisterMetadataServiceHandler(ctx, mux, conn)
}

// RegisterMetadataServiceHandler registers the http handlers for service MetadataService to "mux".
// The handlers forward requests to the grpc endpoint over "conn".
func RegisterMetadataServiceHandler(ctx context.Context, mux *runtime.ServeMux, conn *grpc.ClientConn) error {
	return RegisterMetadataServiceHandlerClient(ctx, mux, NewMetadataServiceClient(conn))
}

// RegisterMetadataServiceHandlerClient registers the http handlers for service MetadataService
// to "mux". The handlers forward requests to the grpc endpoint over the given implementation of "MetadataServiceClient".
// Note: the gRPC framework executes interceptors within the gRPC handler. If the passed in "MetadataServiceClient"
// doesn't go through the normal gRPC flow (creating a gRPC client etc.) then it will be up to the passed in
// "MetadataServiceClient" to call the correct interceptors.
func RegisterMetadataServiceHandlerClient(ctx context.Context, mux *runtime.ServeMux, client MetadataServiceClient) error {

	mux.Handle("GET", pattern_MetadataService_GetMetadata_addressEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		if cn, ok := w.(http.CloseNotifier); ok {
			go func(done <-chan struct{}, closed <-chan bool) {
				select {
				case <-done:
				case <-closed:
					cancel()
				}
			}(ctx.Done(), cn.CloseNotify())
		}
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MetadataService_GetMetadata_addressEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MetadataService_GetMetadata_addressEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("GET", pattern_MetadataService_GetMetadata_txhashEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		if cn, ok := w.(http.CloseNotifier); ok {
			go func(done <-chan struct{}, closed <-chan bool) {
				select {
				case <-done:
				case <-closed:
					cancel()
				}
			}(ctx.Done(), cn.CloseNotify())
		}
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MetadataService_GetMetadata_txhashEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MetadataService_GetMetadata_txhashEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("GET", pattern_MetadataService_GetMetadata_blockhashEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		if cn, ok := w.(http.CloseNotifier); ok {
			go func(done <-chan struct{}, closed <-chan bool) {
				select {
				case <-done:
				case <-closed:
					cancel()
				}
			}(ctx.Done(), cn.CloseNotify())
		}
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MetadataService_GetMetadata_blockhashEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MetadataService_GetMetadata_blockhashEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("PUT", pattern_MetadataService_PutMetadata_addressEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		if cn, ok := w.(http.CloseNotifier); ok {
			go func(done <-chan struct{}, closed <-chan bool) {
				select {
				case <-done:
				case <-closed:
					cancel()
				}
			}(ctx.Done(), cn.CloseNotify())
		}
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MetadataService_PutMetadata_addressEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MetadataService_PutMetadata_addressEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("PUT", pattern_MetadataService_PutMetadata_txhashEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		if cn, ok := w.(http.CloseNotifier); ok {
			go func(done <-chan struct{}, closed <-chan bool) {
				select {
				case <-done:
				case <-closed:
					cancel()
				}
			}(ctx.Done(), cn.CloseNotify())
		}
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MetadataService_PutMetadata_txhashEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MetadataService_PutMetadata_txhashEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("PUT", pattern_MetadataService_PutMetadata_blockhashEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		if cn, ok := w.(http.CloseNotifier); ok {
			go func(done <-chan struct{}, closed <-chan bool) {
				select {
				case <-done:
				case <-closed:
					cancel()
				}
			}(ctx.Done(), cn.CloseNotify())
		}
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MetadataService_PutMetadata_blockhashEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MetadataService_PutMetadata_blockhashEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("DELETE", pattern_MetadataService_DeleteMetadata_addressEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		if cn, ok := w.(http.CloseNotifier); ok {
			go func(done <-chan struct{}, closed <-chan bool) {
				select {
				case <-done:
				case <-closed:
					cancel()
				}
			}(ctx.Done(), cn.CloseNotify())
		}
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MetadataService_DeleteMetadata_addressEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MetadataService_DeleteMetadata_addressEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("DELETE", pattern_MetadataService_DeleteMetadata_txhashEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		if cn, ok := w.(http.CloseNotifier); ok {
			go func(done <-chan struct{}, closed <-chan bool) {
				select {
				case <-done:
				case <-closed:
					cancel()
				}
			}(ctx.Done(), cn.CloseNotify())
		}
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MetadataService_DeleteMetadata_txhashEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MetadataService_DeleteMetadata_txhashEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("DELETE", pattern_MetadataService_DeleteMetadata_blockheightEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		if cn, ok := w.(http.CloseNotifier); ok {
			go func(done <-chan struct{}, closed <-chan bool) {
				select {
				case <-done:
				case <-closed:
					cancel()
				}
			}(ctx.Done(), cn.CloseNotify())
		}
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_MetadataService_DeleteMetadata_blockheightEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_MetadataService_DeleteMetadata_blockheightEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

var (
	pattern_MetadataService_GetMetadata_addressEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2}, []string{"addrs", "address", "meta"}, ""))

	pattern_MetadataService_GetMetadata_txhashEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2}, []string{"txs", "txhash", "meta"}, ""))

	pattern_MetadataService_GetMetadata_blockhashEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2}, []string{"blocks", "blockhash", "meta"}, ""))

	pattern_MetadataService_PutMetadata_addressEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2}, []string{"addrs", "address", "meta"}, ""))

	pattern_MetadataService_PutMetadata_txhashEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2}, []string{"txs", "txhash", "meta"}, ""))

	pattern_MetadataService_PutMetadata_blockhashEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2}, []string{"blocks", "block_hash", "meta"}, ""))

	pattern_MetadataService_DeleteMetadata_addressEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2}, []string{"addrs", "address", "meta"}, ""))

	pattern_MetadataService_DeleteMetadata_txhashEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2}, []string{"txs", "txhash", "meta"}, ""))

	pattern_MetadataService_DeleteMetadata_blockheightEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2}, []string{"blocks", "block_height", "meta"}, ""))
)

var (
	forward_MetadataService_GetMetadata_addressEndpoint_0 = runtime.ForwardResponseMessage

	forward_MetadataService_GetMetadata_txhashEndpoint_0 = runtime.ForwardResponseMessage

	forward_MetadataService_GetMetadata_blockhashEndpoint_0 = runtime.ForwardResponseMessage

	forward_MetadataService_PutMetadata_addressEndpoint_0 = runtime.ForwardResponseMessage

	forward_MetadataService_PutMetadata_txhashEndpoint_0 = runtime.ForwardResponseMessage

	forward_MetadataService_PutMetadata_blockhashEndpoint_0 = runtime.ForwardResponseMessage

	forward_MetadataService_DeleteMetadata_addressEndpoint_0 = runtime.ForwardResponseMessage

	forward_MetadataService_DeleteMetadata_txhashEndpoint_0 = runtime.ForwardResponseMessage

	forward_MetadataService_DeleteMetadata_blockheightEndpoint_0 = runtime.ForwardResponseMessage
)
