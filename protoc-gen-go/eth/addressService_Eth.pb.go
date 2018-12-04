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
	BalanceAddressEndpoint(ctx context.Context, in *GetBalanceAddressEndpointRequest, opts ...grpc.CallOption) (*Address, error)
	AddressEndpoint(ctx context.Context, in *GetAddressEndpointRequest, opts ...grpc.CallOption) (*Address, error)
	GenerateAddressEndpoint(ctx context.Context, in *PostGenerateAddressEndpointRequest, opts ...grpc.CallOption) (*AddressKeychain, error)
}

type addressServiceClient struct {
	cc *grpc.ClientConn
}

func NewAddressServiceClient(cc *grpc.ClientConn) AddressServiceClient {
	return &addressServiceClient{cc}
}

func (c *addressServiceClient) BalanceAddressEndpoint(ctx context.Context, in *GetBalanceAddressEndpointRequest, opts ...grpc.CallOption) (*Address, error) {
	out := new(Address)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.eth.AddressService/BalanceAddressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *addressServiceClient) AddressEndpoint(ctx context.Context, in *GetAddressEndpointRequest, opts ...grpc.CallOption) (*Address, error) {
	out := new(Address)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.eth.AddressService/AddressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *addressServiceClient) GenerateAddressEndpoint(ctx context.Context, in *PostGenerateAddressEndpointRequest, opts ...grpc.CallOption) (*AddressKeychain, error) {
	out := new(AddressKeychain)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.eth.AddressService/GenerateAddressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AddressServiceServer is the server API for AddressService service.
type AddressServiceServer interface {
	BalanceAddressEndpoint(context.Context, *GetBalanceAddressEndpointRequest) (*Address, error)
	AddressEndpoint(context.Context, *GetAddressEndpointRequest) (*Address, error)
	GenerateAddressEndpoint(context.Context, *PostGenerateAddressEndpointRequest) (*AddressKeychain, error)
}

func RegisterAddressServiceServer(s *grpc.Server, srv AddressServiceServer) {
	s.RegisterService(&_AddressService_serviceDesc, srv)
}

func _AddressService_BalanceAddressEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBalanceAddressEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AddressServiceServer).BalanceAddressEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.eth.AddressService/BalanceAddressEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressServiceServer).BalanceAddressEndpoint(ctx, req.(*GetBalanceAddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AddressService_AddressEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAddressEndpointRequest)
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
		return srv.(AddressServiceServer).AddressEndpoint(ctx, req.(*GetAddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AddressService_GenerateAddressEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PostGenerateAddressEndpointRequest)
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
		return srv.(AddressServiceServer).GenerateAddressEndpoint(ctx, req.(*PostGenerateAddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AddressService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "fairwaycorp.blockchainprotobuf.eth.AddressService",
	HandlerType: (*AddressServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "BalanceAddressEndpoint",
			Handler:    _AddressService_BalanceAddressEndpoint_Handler,
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
	proto.RegisterFile("addressService_Eth.proto", fileDescriptor_addressService_Eth_d1b5aa7a9c56fb23)
}

var fileDescriptor_addressService_Eth_d1b5aa7a9c56fb23 = []byte{
	// 340 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x90, 0xcf, 0x4a, 0x23, 0x41,
	0x10, 0xc6, 0x99, 0x65, 0xd9, 0xc3, 0x1c, 0x76, 0xa1, 0x17, 0x4c, 0x18, 0xfc, 0x03, 0x03, 0x8a,
	0x28, 0xd3, 0x0d, 0xe6, 0x26, 0x04, 0x31, 0x18, 0x73, 0x10, 0x41, 0xf4, 0xe6, 0x45, 0x7a, 0x3a,
	0x95, 0x99, 0x26, 0x49, 0xd7, 0xd8, 0x5d, 0x31, 0x84, 0x90, 0x8b, 0xaf, 0xe0, 0x2b, 0x78, 0xf6,
	0xe8, 0xc5, 0xc7, 0xf0, 0x15, 0x7c, 0x10, 0xc9, 0x64, 0x42, 0xd4, 0x44, 0x8c, 0xe0, 0xad, 0xe9,
	0x8f, 0xfa, 0x7e, 0xbf, 0x2a, 0xbf, 0x2c, 0x9b, 0x4d, 0x0b, 0xce, 0x5d, 0x80, 0xbd, 0xd1, 0x0a,
	0xae, 0xea, 0x94, 0xf2, 0xcc, 0x22, 0x21, 0x0b, 0x5b, 0x52, 0xdb, 0xbe, 0x1c, 0x28, 0xb4, 0x19,
	0x8f, 0x3b, 0xa8, 0xda, 0x2a, 0x95, 0xda, 0xe4, 0x61, 0xdc, 0x6b, 0x71, 0xa0, 0x34, 0x58, 0x4d,
	0x10, 0x93, 0x0e, 0x08, 0x99, 0x69, 0x21, 0x8d, 0x41, 0x92, 0xa4, 0xd1, 0xb8, 0x49, 0x43, 0x30,
	0xed, 0x3e, 0x05, 0xe7, 0x64, 0xf2, 0xa6, 0x3b, 0x28, 0x29, 0xec, 0x76, 0xd1, 0xcc, 0x05, 0x7b,
	0x0f, 0xbf, 0xfd, 0xbf, 0x87, 0xef, 0x8c, 0xd8, 0x93, 0xe7, 0xaf, 0xd4, 0x64, 0x47, 0x1a, 0x05,
	0x45, 0x52, 0x37, 0xcd, 0x0c, 0xb5, 0x21, 0x76, 0xc4, 0xbf, 0x76, 0xe4, 0x0d, 0xa0, 0xc5, 0xe3,
	0xe7, 0x70, 0xdd, 0x03, 0x47, 0xc1, 0xee, 0x32, 0x2d, 0xc5, 0x6c, 0xc8, 0x6f, 0x9f, 0x5f, 0xee,
	0x7e, 0x6d, 0xb3, 0x2d, 0x01, 0x94, 0x8a, 0xa1, 0x01, 0xea, 0xa3, 0x6d, 0x8f, 0xc4, 0x78, 0x55,
	0x27, 0x86, 0xc5, 0xc6, 0x23, 0x11, 0x4f, 0x90, 0xec, 0xde, 0xf3, 0xff, 0x7d, 0xd4, 0xae, 0x2e,
	0xa9, 0xfd, 0x13, 0xbe, 0x9b, 0xb9, 0xef, 0x06, 0x5b, 0x5b, 0xe0, 0x3b, 0xd3, 0x65, 0x8f, 0x9e,
	0x5f, 0x6a, 0x80, 0x01, 0x2b, 0x69, 0xee, 0xca, 0xc7, 0xcb, 0xf0, 0xce, 0xd0, 0xd1, 0x27, 0x05,
	0x53, 0xef, 0xca, 0x37, 0xbc, 0x4f, 0x60, 0x90, 0x67, 0xe1, 0x7a, 0xee, 0x5f, 0x0e, 0xff, 0x2f,
	0xf0, 0xdf, 0xf7, 0x76, 0x6a, 0x07, 0x97, 0xd5, 0x44, 0x53, 0xda, 0x8b, 0xb9, 0xc2, 0xae, 0x28,
	0x00, 0xd1, 0x98, 0x20, 0x66, 0x84, 0x68, 0x8a, 0x10, 0xf9, 0x43, 0x45, 0x09, 0x98, 0x28, 0xc1,
	0x71, 0x65, 0xfc, 0x27, 0xff, 0xaa, 0xbc, 0x06, 0x00, 0x00, 0xff, 0xff, 0xf1, 0x6d, 0xd2, 0x97,
	0x09, 0x03, 0x00, 0x00,
}
