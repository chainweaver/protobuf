// Code generated by protoc-gen-go. DO NOT EDIT.
// source: microtransactionService.proto

package protoc_gen_go

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	context "golang.org/x/net/context"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	math "math"
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

func init() { proto.RegisterFile("microtransactionService.proto", fileDescriptor_58ec76a47b8339ca) }

var fileDescriptor_58ec76a47b8339ca = []byte{
	// 216 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xcd, 0xcd, 0x4c, 0x2e,
	0xca, 0x2f, 0x29, 0x4a, 0xcc, 0x2b, 0x4e, 0x4c, 0x2e, 0xc9, 0xcc, 0xcf, 0x0b, 0x4e, 0x2d, 0x2a,
	0xcb, 0x4c, 0x4e, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x4b, 0x4b, 0xcc, 0x2c, 0x2a,
	0x4f, 0xac, 0x4c, 0xce, 0x2f, 0x2a, 0xd0, 0x4b, 0xca, 0xc9, 0x4f, 0xce, 0x4e, 0xce, 0x48, 0xcc,
	0xcc, 0x03, 0x4b, 0x26, 0x95, 0xa6, 0x49, 0xc9, 0xa4, 0xe7, 0xe7, 0xa7, 0xe7, 0xa4, 0xea, 0x27,
	0x16, 0x64, 0xea, 0x27, 0xe6, 0xe5, 0xe5, 0x97, 0x24, 0x82, 0xcc, 0x28, 0x86, 0xe8, 0x96, 0xc2,
	0x30, 0xdc, 0x37, 0xb5, 0xb8, 0x38, 0x31, 0x1d, 0x6a, 0xb8, 0xd1, 0x1c, 0x46, 0x2e, 0x71, 0x5f,
	0xec, 0xd6, 0x0b, 0x35, 0x30, 0x72, 0x49, 0xa0, 0xcb, 0xb9, 0xe6, 0xa5, 0x14, 0xe4, 0x67, 0xe6,
	0x95, 0x08, 0xa9, 0xeb, 0xe1, 0x77, 0x96, 0x1e, 0x58, 0x67, 0x48, 0x84, 0x14, 0xb1, 0x0a, 0x95,
	0x84, 0x9a, 0x2e, 0x3f, 0x99, 0xcc, 0xc4, 0xa3, 0xc4, 0xa5, 0x5f, 0x52, 0x51, 0xac, 0x0f, 0x76,
	0xb6, 0x93, 0x75, 0x94, 0x65, 0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e, 0xae, 0x3e,
	0xd4, 0x20, 0x5d, 0x90, 0x49, 0xfa, 0x08, 0x93, 0x74, 0x61, 0x46, 0xe9, 0x83, 0x19, 0xc9, 0xba,
	0xe9, 0xa9, 0x79, 0xba, 0xe9, 0xf9, 0x49, 0x6c, 0x60, 0xae, 0x31, 0x20, 0x00, 0x00, 0xff, 0xff,
	0x57, 0x51, 0x0f, 0xec, 0x60, 0x01, 0x00, 0x00,
}

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
	MicrotransactionEndpoint(ctx context.Context, in *MicroTX, opts ...grpc.CallOption) (*MicroTX, error)
}

type microtransactionServiceClient struct {
	cc *grpc.ClientConn
}

func NewMicrotransactionServiceClient(cc *grpc.ClientConn) MicrotransactionServiceClient {
	return &microtransactionServiceClient{cc}
}

func (c *microtransactionServiceClient) MicrotransactionEndpoint(ctx context.Context, in *MicroTX, opts ...grpc.CallOption) (*MicroTX, error) {
	out := new(MicroTX)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MicrotransactionService/MicrotransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MicrotransactionServiceServer is the server API for MicrotransactionService service.
type MicrotransactionServiceServer interface {
	MicrotransactionEndpoint(context.Context, *MicroTX) (*MicroTX, error)
}

func RegisterMicrotransactionServiceServer(s *grpc.Server, srv MicrotransactionServiceServer) {
	s.RegisterService(&_MicrotransactionService_serviceDesc, srv)
}

func _MicrotransactionService_MicrotransactionEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MicroTX)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MicrotransactionServiceServer).MicrotransactionEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MicrotransactionService/MicrotransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MicrotransactionServiceServer).MicrotransactionEndpoint(ctx, req.(*MicroTX))
	}
	return interceptor(ctx, in, info, handler)
}

var _MicrotransactionService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "fairwaycorp.blockchainprotobuf.MicrotransactionService",
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
