// Code generated by protoc-gen-grpc-gateway. DO NOT EDIT.
// source: confidencefactorService.proto

/*
Package btc is a reverse proxy.

It translates gRPC into RESTful JSON APIs.
*/
package btc

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

func request_ConfidenceFactorService_TransactionConfidenceEndpoint_0(ctx context.Context, marshaler runtime.Marshaler, client ConfidenceFactorServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq TransactionConfidenceEndpointRequest
	var metadata runtime.ServerMetadata

	var (
		val string
		e   int32
		ok  bool
		err error
		_   = err
	)

	val, ok = pathParams["network"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "network")
	}

	e, err = runtime.Enum(val, NetworkAllowingAlias_value)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "network", err)
	}

	protoReq.Network = NetworkAllowingAlias(e)

	val, ok = pathParams["txhash"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "txhash")
	}

	protoReq.Txhash, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "txhash", err)
	}

	msg, err := client.TransactionConfidenceEndpoint(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

// RegisterConfidenceFactorServiceHandlerFromEndpoint is same as RegisterConfidenceFactorServiceHandler but
// automatically dials to "endpoint" and closes the connection when "ctx" gets done.
func RegisterConfidenceFactorServiceHandlerFromEndpoint(ctx context.Context, mux *runtime.ServeMux, endpoint string, opts []grpc.DialOption) (err error) {
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

	return RegisterConfidenceFactorServiceHandler(ctx, mux, conn)
}

// RegisterConfidenceFactorServiceHandler registers the http handlers for service ConfidenceFactorService to "mux".
// The handlers forward requests to the grpc endpoint over "conn".
func RegisterConfidenceFactorServiceHandler(ctx context.Context, mux *runtime.ServeMux, conn *grpc.ClientConn) error {
	return RegisterConfidenceFactorServiceHandlerClient(ctx, mux, NewConfidenceFactorServiceClient(conn))
}

// RegisterConfidenceFactorServiceHandlerClient registers the http handlers for service ConfidenceFactorService
// to "mux". The handlers forward requests to the grpc endpoint over the given implementation of "ConfidenceFactorServiceClient".
// Note: the gRPC framework executes interceptors within the gRPC handler. If the passed in "ConfidenceFactorServiceClient"
// doesn't go through the normal gRPC flow (creating a gRPC client etc.) then it will be up to the passed in
// "ConfidenceFactorServiceClient" to call the correct interceptors.
func RegisterConfidenceFactorServiceHandlerClient(ctx context.Context, mux *runtime.ServeMux, client ConfidenceFactorServiceClient) error {

	mux.Handle("GET", pattern_ConfidenceFactorService_TransactionConfidenceEndpoint_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
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
		resp, md, err := request_ConfidenceFactorService_TransactionConfidenceEndpoint_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_ConfidenceFactorService_TransactionConfidenceEndpoint_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

var (
	pattern_ConfidenceFactorService_TransactionConfidenceEndpoint_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2, 1, 0, 4, 1, 5, 3, 2, 4}, []string{"btc", "network", "txs", "txhash", "confidence"}, ""))
)

var (
	forward_ConfidenceFactorService_TransactionConfidenceEndpoint_0 = runtime.ForwardResponseMessage
)