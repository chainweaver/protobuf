// Code generated by protoc-gen-go. DO NOT EDIT.
// source: microtransactionService.proto

package btc // import "github.com/fairway-corp/blockchain-protobuf/protoc-gen-go/btc"

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
	MicrotransactionEndpoint(ctx context.Context, in *MicroTXRequest, opts ...grpc.CallOption) (*MicroTX, error)
}

type microtransactionServiceClient struct {
	cc *grpc.ClientConn
}

func NewMicrotransactionServiceClient(cc *grpc.ClientConn) MicrotransactionServiceClient {
	return &microtransactionServiceClient{cc}
}

func (c *microtransactionServiceClient) MicrotransactionEndpoint(ctx context.Context, in *MicroTXRequest, opts ...grpc.CallOption) (*MicroTX, error) {
	out := new(MicroTX)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.btc.MicrotransactionService/MicrotransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MicrotransactionServiceServer is the server API for MicrotransactionService service.
type MicrotransactionServiceServer interface {
	MicrotransactionEndpoint(context.Context, *MicroTXRequest) (*MicroTX, error)
}

func RegisterMicrotransactionServiceServer(s *grpc.Server, srv MicrotransactionServiceServer) {
	s.RegisterService(&_MicrotransactionService_serviceDesc, srv)
}

func _MicrotransactionService_MicrotransactionEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MicroTXRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MicrotransactionServiceServer).MicrotransactionEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.btc.MicrotransactionService/MicrotransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MicrotransactionServiceServer).MicrotransactionEndpoint(ctx, req.(*MicroTXRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _MicrotransactionService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "fairwaycorp.blockchainprotobuf.btc.MicrotransactionService",
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
	proto.RegisterFile("microtransactionService.proto", fileDescriptor_microtransactionService_f591fe4079ee863f)
}

var fileDescriptor_microtransactionService_f591fe4079ee863f = []byte{
	// 248 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xcd, 0xcd, 0x4c, 0x2e,
	0xca, 0x2f, 0x29, 0x4a, 0xcc, 0x2b, 0x4e, 0x4c, 0x2e, 0xc9, 0xcc, 0xcf, 0x0b, 0x4e, 0x2d, 0x2a,
	0xcb, 0x4c, 0x4e, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x52, 0x4a, 0x4b, 0xcc, 0x2c, 0x2a,
	0x4f, 0xac, 0x4c, 0xce, 0x2f, 0x2a, 0xd0, 0x4b, 0xca, 0xc9, 0x4f, 0xce, 0x4e, 0xce, 0x48, 0xcc,
	0xcc, 0x03, 0x4b, 0x26, 0x95, 0xa6, 0xe9, 0x25, 0x95, 0x24, 0x4b, 0xc9, 0xa4, 0xe7, 0xe7, 0xa7,
	0xe7, 0xa4, 0xea, 0x27, 0x16, 0x64, 0xea, 0x27, 0xe6, 0xe5, 0xe5, 0x97, 0x24, 0x82, 0xcc, 0x29,
	0x86, 0x98, 0x20, 0x85, 0x61, 0x81, 0x6f, 0x6a, 0x71, 0x71, 0x62, 0x3a, 0xd4, 0x02, 0xa3, 0x3d,
	0x8c, 0x5c, 0xe2, 0xbe, 0xd8, 0x9d, 0x20, 0xb4, 0x80, 0x91, 0x4b, 0x02, 0x5d, 0xce, 0x35, 0x2f,
	0xa5, 0x20, 0x3f, 0x33, 0xaf, 0x44, 0xc8, 0x48, 0x8f, 0xb0, 0xd3, 0xf4, 0xc0, 0xba, 0x43, 0x22,
	0x82, 0x52, 0x0b, 0x4b, 0x53, 0x8b, 0x4b, 0xa4, 0xb4, 0x49, 0xd0, 0xa3, 0xa4, 0xdc, 0x74, 0xf9,
	0xc9, 0x64, 0x26, 0x59, 0x25, 0x09, 0xfd, 0xa4, 0x92, 0x64, 0xfd, 0xea, 0xbc, 0xd4, 0x92, 0xf2,
	0xfc, 0xa2, 0xec, 0x5a, 0xfd, 0x92, 0x8a, 0x62, 0x7d, 0xb0, 0x9f, 0xac, 0x18, 0xb5, 0x9c, 0xec,
	0xa3, 0x6c, 0xd3, 0x33, 0x4b, 0x32, 0x4a, 0x93, 0xf4, 0x92, 0xf3, 0x73, 0xf5, 0xa1, 0xa6, 0xeb,
	0x82, 0x8c, 0xd7, 0x47, 0x18, 0xaf, 0x0b, 0x33, 0x5f, 0x1f, 0xcc, 0x48, 0xd6, 0x4d, 0x4f, 0xcd,
	0xd3, 0x4d, 0xcf, 0x07, 0x99, 0x9b, 0xc4, 0x06, 0x16, 0x32, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff,
	0xc3, 0x97, 0x72, 0x5b, 0x88, 0x01, 0x00, 0x00,
}
