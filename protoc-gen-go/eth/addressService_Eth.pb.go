// Code generated by protoc-gen-go. DO NOT EDIT.
// source: addressService_Eth.proto

package eth // import "github.com/fairway-corp/blockchain-protobuf/protoc-gen-go/eth"

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

// AddressServiceClient is the client API for AddressService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AddressServiceClient interface {
	AddressBalanceEndpoint(ctx context.Context, in *AddressBalanceEndpointRequest, opts ...grpc.CallOption) (*Address, error)
	AddressEndpoint(ctx context.Context, in *AddressEndpointRequest, opts ...grpc.CallOption) (*Address, error)
	GenerateAddressEndpoint(ctx context.Context, in *GenerateAddressEndpointRequest, opts ...grpc.CallOption) (*AddressKeychain, error)
}

type addressServiceClient struct {
	cc *grpc.ClientConn
}

func NewAddressServiceClient(cc *grpc.ClientConn) AddressServiceClient {
	return &addressServiceClient{cc}
}

func (c *addressServiceClient) AddressBalanceEndpoint(ctx context.Context, in *AddressBalanceEndpointRequest, opts ...grpc.CallOption) (*Address, error) {
	out := new(Address)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.eth.AddressService/AddressBalanceEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *addressServiceClient) AddressEndpoint(ctx context.Context, in *AddressEndpointRequest, opts ...grpc.CallOption) (*Address, error) {
	out := new(Address)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.eth.AddressService/AddressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *addressServiceClient) GenerateAddressEndpoint(ctx context.Context, in *GenerateAddressEndpointRequest, opts ...grpc.CallOption) (*AddressKeychain, error) {
	out := new(AddressKeychain)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.eth.AddressService/GenerateAddressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AddressServiceServer is the server API for AddressService service.
type AddressServiceServer interface {
	AddressBalanceEndpoint(context.Context, *AddressBalanceEndpointRequest) (*Address, error)
	AddressEndpoint(context.Context, *AddressEndpointRequest) (*Address, error)
	GenerateAddressEndpoint(context.Context, *GenerateAddressEndpointRequest) (*AddressKeychain, error)
}

func RegisterAddressServiceServer(s *grpc.Server, srv AddressServiceServer) {
	s.RegisterService(&_AddressService_serviceDesc, srv)
}

func _AddressService_AddressBalanceEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddressBalanceEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AddressServiceServer).AddressBalanceEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.eth.AddressService/AddressBalanceEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressServiceServer).AddressBalanceEndpoint(ctx, req.(*AddressBalanceEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AddressService_AddressEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddressEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AddressServiceServer).AddressEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.eth.AddressService/AddressEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressServiceServer).AddressEndpoint(ctx, req.(*AddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AddressService_GenerateAddressEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GenerateAddressEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AddressServiceServer).GenerateAddressEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.eth.AddressService/GenerateAddressEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressServiceServer).GenerateAddressEndpoint(ctx, req.(*GenerateAddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AddressService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "fairwaycorp.blockchainprotobuf.eth.AddressService",
	HandlerType: (*AddressServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddressBalanceEndpoint",
			Handler:    _AddressService_AddressBalanceEndpoint_Handler,
		},
		{
			MethodName: "AddressEndpoint",
			Handler:    _AddressService_AddressEndpoint_Handler,
		},
		{
			MethodName: "GenerateAddressEndpoint",
			Handler:    _AddressService_GenerateAddressEndpoint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "addressService_Eth.proto",
}

func init() {
	proto.RegisterFile("addressService_Eth.proto", fileDescriptor_addressService_Eth_957dd683dbd80a24)
}

var fileDescriptor_addressService_Eth_957dd683dbd80a24 = []byte{
	// 330 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x8f, 0x4d, 0x4a, 0x03, 0x31,
	0x18, 0x86, 0x19, 0x11, 0x17, 0xb3, 0x50, 0x88, 0x60, 0xcb, 0xe0, 0x0f, 0x0c, 0x28, 0xa2, 0x4c,
	0x02, 0x76, 0x57, 0x10, 0x69, 0xa1, 0xb8, 0x10, 0x37, 0xba, 0x73, 0x23, 0x99, 0xf4, 0x6b, 0x26,
	0xb4, 0xcd, 0x37, 0x26, 0xa9, 0xa5, 0x94, 0x6e, 0xbc, 0x82, 0x27, 0x10, 0x3c, 0x81, 0x2b, 0xef,
	0xe1, 0x15, 0x3c, 0x88, 0x34, 0x9d, 0x5a, 0x7f, 0x2a, 0x5a, 0xdc, 0x85, 0xbc, 0xbc, 0xef, 0xf3,
	0x7c, 0x61, 0x99, 0x37, 0x9b, 0x06, 0xac, 0xbd, 0x04, 0x73, 0xab, 0x04, 0x5c, 0x37, 0x5c, 0x46,
	0x73, 0x83, 0x0e, 0x49, 0xdc, 0xe2, 0xca, 0xf4, 0xf9, 0x40, 0xa0, 0xc9, 0x69, 0xda, 0x41, 0xd1,
	0x16, 0x19, 0x57, 0xda, 0x87, 0x69, 0xaf, 0x45, 0xc1, 0x65, 0xd1, 0xa6, 0x44, 0x94, 0x1d, 0x60,
	0x3c, 0x57, 0x8c, 0x6b, 0x8d, 0x8e, 0x3b, 0x85, 0xda, 0x4e, 0x16, 0xa2, 0xe9, 0xf6, 0x39, 0x58,
	0xcb, 0xe5, 0x87, 0xed, 0xa8, 0x24, 0xb0, 0xdb, 0x45, 0xfd, 0x2d, 0x38, 0x7a, 0x5c, 0x0e, 0x57,
	0x6b, 0x9f, 0x8c, 0xc8, 0x73, 0x10, 0x6e, 0x14, 0x5f, 0x75, 0xde, 0xe1, 0x5a, 0x40, 0x43, 0x37,
	0x73, 0x54, 0xda, 0x91, 0x1a, 0xfd, 0xdd, 0x91, 0xce, 0xef, 0x5e, 0xc0, 0x4d, 0x0f, 0xac, 0x8b,
	0x0e, 0x17, 0x98, 0x88, 0xe9, 0xdd, 0xcb, 0xeb, 0xfd, 0xd2, 0x3e, 0xd9, 0x63, 0xe0, 0x32, 0x36,
	0xd4, 0xe0, 0xfa, 0x68, 0xda, 0x23, 0x36, 0xbe, 0xd3, 0xb2, 0x61, 0x71, 0xee, 0x88, 0xa5, 0x13,
	0x16, 0x79, 0x08, 0xc2, 0xb5, 0xa2, 0xfb, 0xee, 0x5c, 0x5d, 0x00, 0xf8, 0x2f, 0xd9, 0x5d, 0x2f,
	0xbb, 0x43, 0xb6, 0xe6, 0xc8, 0xce, 0x5c, 0xc9, 0x53, 0x10, 0x96, 0x4e, 0x41, 0x83, 0xe1, 0x0e,
	0xbe, 0xba, 0xd6, 0xff, 0xc2, 0xfb, 0xa1, 0x3c, 0x75, 0xae, 0x2c, 0xe0, 0x7c, 0x06, 0x03, 0x9f,
	0xc5, 0xdb, 0xde, 0xbd, 0x1c, 0xaf, 0xcf, 0x71, 0xaf, 0x06, 0x07, 0xf5, 0x93, 0xab, 0x63, 0xa9,
	0x5c, 0xd6, 0x4b, 0xa9, 0xc0, 0x2e, 0x2b, 0x00, 0xc9, 0x98, 0xc0, 0x66, 0x84, 0x64, 0x8a, 0x60,
	0xfe, 0x21, 0x12, 0x09, 0x3a, 0x91, 0x38, 0x9e, 0x4c, 0x57, 0xfc, 0x57, 0xe5, 0x2d, 0x00, 0x00,
	0xff, 0xff, 0x90, 0xe3, 0x22, 0xe1, 0xff, 0x02, 0x00, 0x00,
}
