// Code generated by protoc-gen-go. DO NOT EDIT.
// source: confidencefactorService.proto

package btc // import "github.com/chainweaver/protobuf/protoc-gen-go/btc"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "google.golang.org/genproto/googleapis/api/annotations"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ConfidenceFactorServiceClient is the client API for ConfidenceFactorService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ConfidenceFactorServiceClient interface {
	TransactionConfidenceEndpoint(ctx context.Context, in *TransactionConfidenceEndpointRequest, opts ...grpc.CallOption) (*TXConfidence, error)
}

type confidenceFactorServiceClient struct {
	cc *grpc.ClientConn
}

func NewConfidenceFactorServiceClient(cc *grpc.ClientConn) ConfidenceFactorServiceClient {
	return &confidenceFactorServiceClient{cc}
}

func (c *confidenceFactorServiceClient) TransactionConfidenceEndpoint(ctx context.Context, in *TransactionConfidenceEndpointRequest, opts ...grpc.CallOption) (*TXConfidence, error) {
	out := new(TXConfidence)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.ConfidenceFactorService/TransactionConfidenceEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ConfidenceFactorServiceServer is the server API for ConfidenceFactorService service.
type ConfidenceFactorServiceServer interface {
	TransactionConfidenceEndpoint(context.Context, *TransactionConfidenceEndpointRequest) (*TXConfidence, error)
}

func RegisterConfidenceFactorServiceServer(s *grpc.Server, srv ConfidenceFactorServiceServer) {
	s.RegisterService(&_ConfidenceFactorService_serviceDesc, srv)
}

func _ConfidenceFactorService_TransactionConfidenceEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransactionConfidenceEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConfidenceFactorServiceServer).TransactionConfidenceEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.ConfidenceFactorService/TransactionConfidenceEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConfidenceFactorServiceServer).TransactionConfidenceEndpoint(ctx, req.(*TransactionConfidenceEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ConfidenceFactorService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "chainweaver.protobuf.btc.ConfidenceFactorService",
	HandlerType: (*ConfidenceFactorServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TransactionConfidenceEndpoint",
			Handler:    _ConfidenceFactorService_TransactionConfidenceEndpoint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "confidencefactorService.proto",
}

func init() {
	proto.RegisterFile("confidencefactorService.proto", fileDescriptor_confidencefactorService_0cf6839f91cacde1)
}

var fileDescriptor_confidencefactorService_0cf6839f91cacde1 = []byte{
	// 255 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x8f, 0x31, 0x4e, 0xc3, 0x40,
	0x10, 0x45, 0x15, 0x0a, 0x8a, 0x94, 0xa6, 0x00, 0x59, 0xa4, 0xa1, 0x88, 0x68, 0xb2, 0x2b, 0x48,
	0x4f, 0x01, 0x82, 0x8e, 0x06, 0x28, 0x10, 0xdd, 0xec, 0x64, 0xbc, 0x5e, 0x81, 0x67, 0xcc, 0xee,
	0x38, 0x89, 0x14, 0xa5, 0xe1, 0x0a, 0x1c, 0x86, 0x83, 0xe4, 0x0a, 0x1c, 0x04, 0x05, 0x03, 0x0e,
	0x42, 0xa4, 0x1b, 0x7d, 0xfd, 0xf7, 0xff, 0x9f, 0xfe, 0x00, 0x85, 0x8b, 0x30, 0x21, 0x46, 0x2a,
	0x00, 0x55, 0xe2, 0x2d, 0xc5, 0x69, 0x40, 0x32, 0x75, 0x14, 0x95, 0xec, 0x00, 0x4b, 0x08, 0x3c,
	0x23, 0x98, 0x52, 0x6c, 0x25, 0xd7, 0x14, 0xc6, 0x29, 0xe6, 0x87, 0x5e, 0xc4, 0x3f, 0x91, 0x85,
	0x3a, 0x58, 0x60, 0x16, 0x05, 0x0d, 0xc2, 0xa9, 0x35, 0xe5, 0x7f, 0x62, 0xaf, 0x29, 0x25, 0xf0,
	0x5f, 0xb1, 0xf9, 0x1e, 0x4a, 0x55, 0x09, 0xff, 0x12, 0x4f, 0x57, 0xbd, 0xfe, 0xfe, 0xc5, 0x0f,
	0x76, 0xb5, 0xb9, 0x26, 0x7b, 0xeb, 0xf5, 0x07, 0x77, 0x11, 0x38, 0x01, 0xae, 0x6b, 0x3a, 0xdb,
	0x25, 0x4f, 0x6a, 0x09, 0xac, 0xd9, 0x99, 0xf9, 0x6f, 0xaa, 0xd9, 0x0a, 0xde, 0xd0, 0x73, 0x43,
	0x49, 0xf3, 0xe1, 0x16, 0xfe, 0xbe, 0xc3, 0x8e, 0xcc, 0xcb, 0xea, 0xfd, 0x75, 0xe7, 0x38, 0x1b,
	0x5a, 0xa7, 0x68, 0x17, 0x4c, 0x3a, 0x93, 0xf8, 0xb8, 0xb4, 0x3a, 0x4f, 0x76, 0xa1, 0xf3, 0x12,
	0x52, 0xb9, 0xb4, 0xdd, 0xf7, 0xe7, 0xe3, 0x87, 0x13, 0x1f, 0xb4, 0x6c, 0x9c, 0x41, 0xa9, 0xec,
	0x46, 0x87, 0xfd, 0xee, 0x68, 0x0f, 0x1c, 0x79, 0xe2, 0x91, 0x97, 0x75, 0xac, 0xdb, 0xfd, 0x94,
	0xc6, 0x1f, 0x01, 0x00, 0x00, 0xff, 0xff, 0xd2, 0x2f, 0xea, 0x01, 0x9e, 0x01, 0x00, 0x00,
}
