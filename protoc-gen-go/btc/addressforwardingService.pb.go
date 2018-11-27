// Code generated by protoc-gen-go. DO NOT EDIT.
// source: addressforwardingService.proto

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

// AddressForwardingServiceClient is the client API for AddressForwardingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AddressForwardingServiceClient interface {
	CreateForwardEndpoint(ctx context.Context, in *CreateForwardEndpointRequest, opts ...grpc.CallOption) (*AddressForward, error)
	ListForwardsEndpoint(ctx context.Context, in *ListForwardsEndpointRequest, opts ...grpc.CallOption) (*ListForwardsEndpointResponse, error)
	DeleteForwardEndpoint(ctx context.Context, in *DeleteForwardEndpointRequest, opts ...grpc.CallOption) (*DeleteForwardEndpointResponse, error)
}

type addressForwardingServiceClient struct {
	cc *grpc.ClientConn
}

func NewAddressForwardingServiceClient(cc *grpc.ClientConn) AddressForwardingServiceClient {
	return &addressForwardingServiceClient{cc}
}

func (c *addressForwardingServiceClient) CreateForwardEndpoint(ctx context.Context, in *CreateForwardEndpointRequest, opts ...grpc.CallOption) (*AddressForward, error) {
	out := new(AddressForward)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.btc.AddressForwardingService/CreateForwardEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *addressForwardingServiceClient) ListForwardsEndpoint(ctx context.Context, in *ListForwardsEndpointRequest, opts ...grpc.CallOption) (*ListForwardsEndpointResponse, error) {
	out := new(ListForwardsEndpointResponse)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.btc.AddressForwardingService/ListForwardsEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *addressForwardingServiceClient) DeleteForwardEndpoint(ctx context.Context, in *DeleteForwardEndpointRequest, opts ...grpc.CallOption) (*DeleteForwardEndpointResponse, error) {
	out := new(DeleteForwardEndpointResponse)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.btc.AddressForwardingService/DeleteForwardEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AddressForwardingServiceServer is the server API for AddressForwardingService service.
type AddressForwardingServiceServer interface {
	CreateForwardEndpoint(context.Context, *CreateForwardEndpointRequest) (*AddressForward, error)
	ListForwardsEndpoint(context.Context, *ListForwardsEndpointRequest) (*ListForwardsEndpointResponse, error)
	DeleteForwardEndpoint(context.Context, *DeleteForwardEndpointRequest) (*DeleteForwardEndpointResponse, error)
}

func RegisterAddressForwardingServiceServer(s *grpc.Server, srv AddressForwardingServiceServer) {
	s.RegisterService(&_AddressForwardingService_serviceDesc, srv)
}

func _AddressForwardingService_CreateForwardEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateForwardEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AddressForwardingServiceServer).CreateForwardEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.btc.AddressForwardingService/CreateForwardEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressForwardingServiceServer).CreateForwardEndpoint(ctx, req.(*CreateForwardEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AddressForwardingService_ListForwardsEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListForwardsEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AddressForwardingServiceServer).ListForwardsEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.btc.AddressForwardingService/ListForwardsEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressForwardingServiceServer).ListForwardsEndpoint(ctx, req.(*ListForwardsEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AddressForwardingService_DeleteForwardEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteForwardEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AddressForwardingServiceServer).DeleteForwardEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.btc.AddressForwardingService/DeleteForwardEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressForwardingServiceServer).DeleteForwardEndpoint(ctx, req.(*DeleteForwardEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AddressForwardingService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "fairwaycorp.blockchainprotobuf.btc.AddressForwardingService",
	HandlerType: (*AddressForwardingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateForwardEndpoint",
			Handler:    _AddressForwardingService_CreateForwardEndpoint_Handler,
		},
		{
			MethodName: "ListForwardsEndpoint",
			Handler:    _AddressForwardingService_ListForwardsEndpoint_Handler,
		},
		{
			MethodName: "DeleteForwardEndpoint",
			Handler:    _AddressForwardingService_DeleteForwardEndpoint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "addressforwardingService.proto",
}

func init() {
	proto.RegisterFile("addressforwardingService.proto", fileDescriptor_addressforwardingService_49a031f5123496f2)
}

var fileDescriptor_addressforwardingService_49a031f5123496f2 = []byte{
	// 335 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x90, 0x4f, 0x4e, 0x02, 0x31,
	0x14, 0xc6, 0x33, 0xc6, 0xb8, 0x98, 0x65, 0x95, 0xa8, 0x13, 0x22, 0x71, 0x36, 0x26, 0x26, 0x33,
	0x4d, 0x70, 0x67, 0x62, 0x00, 0xff, 0xad, 0x74, 0xa3, 0x3b, 0x77, 0x9d, 0xce, 0xa3, 0x34, 0x40,
	0x5f, 0x6d, 0x8b, 0x84, 0x10, 0x36, 0x5e, 0xc1, 0x93, 0xb8, 0x75, 0xef, 0x09, 0xb8, 0x82, 0x07,
	0x31, 0x0c, 0x45, 0x83, 0x42, 0x24, 0xb8, 0x6b, 0xde, 0xcb, 0xf7, 0xfd, 0x7e, 0x7d, 0xe1, 0x01,
	0xcb, 0x73, 0x03, 0xd6, 0x36, 0xd1, 0xf4, 0x99, 0xc9, 0xa5, 0x12, 0xf7, 0x60, 0x9e, 0x24, 0x87,
	0x54, 0x1b, 0x74, 0x48, 0xe2, 0x26, 0x93, 0xa6, 0xcf, 0x06, 0x1c, 0x8d, 0x4e, 0xb3, 0x0e, 0xf2,
	0x36, 0x6f, 0x31, 0xa9, 0x8a, 0x65, 0xd6, 0x6b, 0xa6, 0x99, 0xe3, 0x51, 0x59, 0x20, 0x8a, 0x0e,
	0x50, 0xa6, 0x25, 0x65, 0x4a, 0xa1, 0x63, 0x4e, 0xa2, 0xb2, 0xd3, 0x86, 0xe8, 0x37, 0xe1, 0x16,
	0xac, 0x65, 0xc2, 0x13, 0xa2, 0x6d, 0x8e, 0xdd, 0x2e, 0xaa, 0xb9, 0x61, 0x75, 0xbc, 0x19, 0xee,
	0x35, 0xa6, 0xb9, 0xeb, 0x9f, 0x66, 0xe4, 0x35, 0x08, 0x4b, 0x17, 0x06, 0x98, 0x03, 0xbf, 0xbb,
	0x52, 0xb9, 0x46, 0xa9, 0x1c, 0xa9, 0xa7, 0x7f, 0xeb, 0xa6, 0x0b, 0xa3, 0x77, 0xf0, 0xd8, 0x03,
	0xeb, 0xa2, 0xea, 0x2a, 0x0d, 0xf3, 0x66, 0x71, 0xfc, 0x3c, 0xfe, 0x78, 0xd9, 0x28, 0xc7, 0xbb,
	0x34, 0x73, 0x9c, 0x0e, 0x15, 0xb8, 0x3e, 0x9a, 0xf6, 0x88, 0xfa, 0x1f, 0xdb, 0xd3, 0xe0, 0x98,
	0xbc, 0x05, 0xe1, 0xce, 0x8d, 0xb4, 0xce, 0x67, 0xec, 0x97, 0x72, 0x6d, 0x15, 0xe0, 0xa2, 0xe4,
	0xcc, 0xb8, 0xbe, 0x7e, 0x81, 0xd5, 0xa8, 0x2c, 0xc4, 0x95, 0xc2, 0x7f, 0x9f, 0x2c, 0xf3, 0x27,
	0xef, 0x41, 0x58, 0xba, 0x84, 0x0e, 0xac, 0x79, 0xf0, 0x85, 0xd1, 0x99, 0x7e, 0xe3, 0x1f, 0x0d,
	0xde, 0xff, 0xa8, 0xf0, 0x3f, 0x24, 0x95, 0x25, 0xfe, 0x74, 0xa8, 0xd9, 0x40, 0xe6, 0xa3, 0xf3,
	0xda, 0xc3, 0x99, 0x90, 0xae, 0xd5, 0xcb, 0x52, 0x8e, 0x5d, 0xea, 0xb9, 0xc9, 0x04, 0x4c, 0xbf,
	0xc1, 0xc9, 0x8c, 0x4c, 0x8b, 0x07, 0x4f, 0x04, 0xa8, 0x44, 0xe0, 0xa4, 0x3b, 0xdb, 0x2a, 0x46,
	0x27, 0x9f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x5d, 0x6b, 0xb9, 0x9b, 0x36, 0x03, 0x00, 0x00,
}
