// Code generated by protoc-gen-go. DO NOT EDIT.
// source: microtransactionService.proto

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

// MicrotransactionServiceClient is the client API for MicrotransactionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MicrotransactionServiceClient interface {
	MicrotransactionEndpoint(ctx context.Context, in *MicrotransactionEndpointRequest, opts ...grpc.CallOption) (*MicroTX, error)
}

type microtransactionServiceClient struct {
	cc *grpc.ClientConn
}

func NewMicrotransactionServiceClient(cc *grpc.ClientConn) MicrotransactionServiceClient {
	return &microtransactionServiceClient{cc}
}

func (c *microtransactionServiceClient) MicrotransactionEndpoint(ctx context.Context, in *MicrotransactionEndpointRequest, opts ...grpc.CallOption) (*MicroTX, error) {
	out := new(MicroTX)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.MicrotransactionService/MicrotransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MicrotransactionServiceServer is the server API for MicrotransactionService service.
type MicrotransactionServiceServer interface {
	MicrotransactionEndpoint(context.Context, *MicrotransactionEndpointRequest) (*MicroTX, error)
}

func RegisterMicrotransactionServiceServer(s *grpc.Server, srv MicrotransactionServiceServer) {
	s.RegisterService(&_MicrotransactionService_serviceDesc, srv)
}

func _MicrotransactionService_MicrotransactionEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MicrotransactionEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MicrotransactionServiceServer).MicrotransactionEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.MicrotransactionService/MicrotransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MicrotransactionServiceServer).MicrotransactionEndpoint(ctx, req.(*MicrotransactionEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _MicrotransactionService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "chainweaver.protobuf.btc.MicrotransactionService",
	HandlerType: (*MicrotransactionServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "MicrotransactionEndpoint",
			Handler:    _MicrotransactionService_MicrotransactionEndpoint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "microtransactionService.proto",
}

func init() {
	proto.RegisterFile("microtransactionService.proto", fileDescriptor_microtransactionService_378dba520b67f771)
}

var fileDescriptor_microtransactionService_378dba520b67f771 = []byte{
	// 230 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xcd, 0xcd, 0x4c, 0x2e,
	0xca, 0x2f, 0x29, 0x4a, 0xcc, 0x2b, 0x4e, 0x4c, 0x2e, 0xc9, 0xcc, 0xcf, 0x0b, 0x4e, 0x2d, 0x2a,
	0xcb, 0x4c, 0x4e, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x48, 0xce, 0x48, 0xcc, 0xcc,
	0x2b, 0x4f, 0x4d, 0x2c, 0x4b, 0x2d, 0x82, 0x08, 0x25, 0x95, 0xa6, 0xe9, 0x25, 0x95, 0x24, 0x4b,
	0xc9, 0xa4, 0xe7, 0xe7, 0xa7, 0xe7, 0xa4, 0xea, 0x27, 0x16, 0x64, 0xea, 0x27, 0xe6, 0xe5, 0xe5,
	0x97, 0x24, 0x82, 0x74, 0x17, 0x43, 0x14, 0x49, 0x61, 0x18, 0xeb, 0x9b, 0x5a, 0x5c, 0x9c, 0x98,
	0x0e, 0x35, 0xd6, 0x68, 0x27, 0x23, 0x97, 0xb8, 0x2f, 0x76, 0x8b, 0x85, 0xe6, 0x32, 0x72, 0x49,
	0xa0, 0xcb, 0xb9, 0xe6, 0xa5, 0x14, 0xe4, 0x67, 0xe6, 0x95, 0x08, 0x59, 0xea, 0xe1, 0x72, 0x90,
	0x1e, 0x2e, 0x3d, 0x41, 0xa9, 0x85, 0xa5, 0xa9, 0xc5, 0x25, 0x52, 0x8a, 0x04, 0xb4, 0x86, 0x44,
	0x28, 0x29, 0x37, 0x5d, 0x7e, 0x32, 0x99, 0x49, 0x56, 0x49, 0x42, 0x3f, 0xa9, 0x24, 0x59, 0xbf,
	0x3a, 0x2f, 0xb5, 0xa4, 0x3c, 0xbf, 0x28, 0xbb, 0x56, 0xbf, 0xa4, 0xa2, 0x58, 0x1f, 0xec, 0x21,
	0x2b, 0x46, 0x2d, 0x27, 0xe3, 0x28, 0xc3, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc,
	0x5c, 0x7d, 0x24, 0x33, 0xf5, 0x61, 0x66, 0x42, 0x18, 0xc9, 0xba, 0xe9, 0xa9, 0x79, 0xba, 0xe9,
	0xf9, 0x20, 0xb3, 0x92, 0xd8, 0xc0, 0x42, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x50, 0x29,
	0x7d, 0x92, 0x6f, 0x01, 0x00, 0x00,
}
