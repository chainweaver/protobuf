// Code generated by protoc-gen-grpc-gateway. DO NOT EDIT.
// source: analyticsService.proto

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

func request_AnalyticsService_CreateAnalyticsJob_0(ctx context.Context, marshaler runtime.Marshaler, client AnalyticsServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq CreateAnalyticsJobRequest
	var metadata runtime.ServerMetadata

	newReader, berr := utilities.IOReaderFactory(req.Body)
	if berr != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", berr)
	}
	if err := marshaler.NewDecoder(newReader()).Decode(&protoReq); err != nil && err != io.EOF {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

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

	val, ok = pathParams["enginename"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "enginename")
	}

	protoReq.Enginename, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "enginename", err)
	}

	msg, err := client.CreateAnalyticsJob(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

func request_AnalyticsService_AnalyticsJob_0(ctx context.Context, marshaler runtime.Marshaler, client AnalyticsServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq AnalyticsJobRequest
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

	val, ok = pathParams["ticket"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "ticket")
	}

	protoReq.Ticket, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "ticket", err)
	}

	msg, err := client.AnalyticsJob(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

var (
	filter_AnalyticsService_AnalyticsJobResults_0 = &utilities.DoubleArray{Encoding: map[string]int{"network": 0, "ticket": 1}, Base: []int{1, 1, 2, 0, 0}, Check: []int{0, 1, 1, 2, 3}}
)

func request_AnalyticsService_AnalyticsJobResults_0(ctx context.Context, marshaler runtime.Marshaler, client AnalyticsServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq AnalyticsJobResultsRequest
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

	val, ok = pathParams["ticket"]
	if !ok {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "missing parameter %s", "ticket")
	}

	protoReq.Ticket, err = runtime.String(val)

	if err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "type mismatch, parameter: %s, error: %v", "ticket", err)
	}

	if err := runtime.PopulateQueryParameters(&protoReq, req.URL.Query(), filter_AnalyticsService_AnalyticsJobResults_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.AnalyticsJobResults(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

// RegisterAnalyticsServiceHandlerFromEndpoint is same as RegisterAnalyticsServiceHandler but
// automatically dials to "endpoint" and closes the connection when "ctx" gets done.
func RegisterAnalyticsServiceHandlerFromEndpoint(ctx context.Context, mux *runtime.ServeMux, endpoint string, opts []grpc.DialOption) (err error) {
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

	return RegisterAnalyticsServiceHandler(ctx, mux, conn)
}

// RegisterAnalyticsServiceHandler registers the http handlers for service AnalyticsService to "mux".
// The handlers forward requests to the grpc endpoint over "conn".
func RegisterAnalyticsServiceHandler(ctx context.Context, mux *runtime.ServeMux, conn *grpc.ClientConn) error {
	return RegisterAnalyticsServiceHandlerClient(ctx, mux, NewAnalyticsServiceClient(conn))
}

// RegisterAnalyticsServiceHandlerClient registers the http handlers for service AnalyticsService
// to "mux". The handlers forward requests to the grpc endpoint over the given implementation of "AnalyticsServiceClient".
// Note: the gRPC framework executes interceptors within the gRPC handler. If the passed in "AnalyticsServiceClient"
// doesn't go through the normal gRPC flow (creating a gRPC client etc.) then it will be up to the passed in
// "AnalyticsServiceClient" to call the correct interceptors.
func RegisterAnalyticsServiceHandlerClient(ctx context.Context, mux *runtime.ServeMux, client AnalyticsServiceClient) error {

	mux.Handle("POST", pattern_AnalyticsService_CreateAnalyticsJob_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_AnalyticsService_CreateAnalyticsJob_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_AnalyticsService_CreateAnalyticsJob_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("GET", pattern_AnalyticsService_AnalyticsJob_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_AnalyticsService_AnalyticsJob_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_AnalyticsService_AnalyticsJob_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	mux.Handle("GET", pattern_AnalyticsService_AnalyticsJobResults_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_AnalyticsService_AnalyticsJobResults_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_AnalyticsService_AnalyticsJobResults_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

var (
	pattern_AnalyticsService_CreateAnalyticsJob_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2, 1, 0, 4, 1, 5, 3}, []string{"btc", "network", "analytics", "enginename"}, ""))

	pattern_AnalyticsService_AnalyticsJob_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2, 2, 3, 1, 0, 4, 1, 5, 4}, []string{"btc", "network", "analytics", "job", "ticket"}, ""))

	pattern_AnalyticsService_AnalyticsJobResults_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 1, 0, 4, 1, 5, 1, 2, 2, 2, 3, 1, 0, 4, 1, 5, 4, 2, 5}, []string{"btc", "network", "analytics", "job", "ticket", "results"}, ""))
)

var (
	forward_AnalyticsService_CreateAnalyticsJob_0 = runtime.ForwardResponseMessage

	forward_AnalyticsService_AnalyticsJob_0 = runtime.ForwardResponseMessage

	forward_AnalyticsService_AnalyticsJobResults_0 = runtime.ForwardResponseMessage
)
