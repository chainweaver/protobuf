// Code generated by protoc-gen-go. DO NOT EDIT.
// source: addressService.proto

package eth // import "github.com/chainweaver/protobuf/protoc-gen-go/eth"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger/options"
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
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.eth.AddressService/AddressBalanceEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *addressServiceClient) AddressEndpoint(ctx context.Context, in *AddressEndpointRequest, opts ...grpc.CallOption) (*Address, error) {
	out := new(Address)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.eth.AddressService/AddressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *addressServiceClient) GenerateAddressEndpoint(ctx context.Context, in *GenerateAddressEndpointRequest, opts ...grpc.CallOption) (*AddressKeychain, error) {
	out := new(AddressKeychain)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.eth.AddressService/GenerateAddressEndpoint", in, out, opts...)
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
		FullMethod: "/chainweaver.protobuf.eth.AddressService/AddressBalanceEndpoint",
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
		FullMethod: "/chainweaver.protobuf.eth.AddressService/AddressEndpoint",
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
		FullMethod: "/chainweaver.protobuf.eth.AddressService/GenerateAddressEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressServiceServer).GenerateAddressEndpoint(ctx, req.(*GenerateAddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AddressService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "chainweaver.protobuf.eth.AddressService",
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
	Metadata: "addressService.proto",
}

func init() {
	proto.RegisterFile("addressService.proto", fileDescriptor_addressService_e7fd5374b9d464d0)
}

var fileDescriptor_addressService_e7fd5374b9d464d0 = []byte{
	// 971 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x96, 0xcf, 0x8b, 0x5c, 0x45,
	0x10, 0xc7, 0x31, 0xbb, 0x51, 0x78, 0x82, 0x86, 0x67, 0xd0, 0x64, 0x08, 0x52, 0x8e, 0x22, 0x1a,
	0x66, 0xe6, 0xed, 0x26, 0xa0, 0x22, 0x31, 0xb0, 0x11, 0x11, 0x13, 0x34, 0xc1, 0xdd, 0x93, 0xb7,
	0x7e, 0xdd, 0x35, 0xaf, 0xdb, 0x7d, 0xaf, 0xfb, 0xa5, 0xab, 0xde, 0x8c, 0x43, 0x08, 0x0c, 0x1e,
	0xfc, 0x03, 0xd6, 0x1c, 0xdc, 0xff, 0xc3, 0x9b, 0xa7, 0x5c, 0xbd, 0x89, 0x82, 0x9e, 0x07, 0x6f,
	0xfa, 0x47, 0x48, 0xbf, 0x1f, 0xbb, 0x33, 0xbb, 0x3b, 0x2e, 0x06, 0x3c, 0x0d, 0x5d, 0xaf, 0xab,
	0xea, 0xdb, 0x55, 0x9f, 0x2a, 0x26, 0xba, 0x2c, 0x94, 0xf2, 0x48, 0xb4, 0x8b, 0x7e, 0x62, 0x24,
	0x8e, 0x4a, 0xef, 0xd8, 0xc5, 0x57, 0xa4, 0x16, 0xc6, 0x4e, 0x51, 0x4c, 0xd0, 0x37, 0xa6, 0xb4,
	0x1a, 0x8f, 0x90, 0x75, 0xef, 0x5a, 0xe6, 0x5c, 0x96, 0x63, 0x22, 0x4a, 0x93, 0x08, 0x6b, 0x1d,
	0x0b, 0x36, 0xce, 0x52, 0x73, 0xa9, 0x37, 0xa8, 0x7f, 0xe4, 0x30, 0x43, 0x3b, 0xa4, 0xa9, 0xc8,
	0x32, 0xf4, 0x89, 0x2b, 0xeb, 0x1b, 0x67, 0xdc, 0xee, 0x72, 0x7f, 0x8e, 0x44, 0x22, 0x6b, 0x73,
	0xf7, 0x5e, 0x91, 0xae, 0x28, 0x9c, 0x5d, 0x31, 0xde, 0xf8, 0xee, 0x52, 0xf4, 0xd2, 0xce, 0x8a,
	0xd2, 0xf8, 0xe9, 0xc5, 0xe8, 0xd5, 0xd6, 0x74, 0x47, 0xe4, 0xc2, 0x4a, 0xfc, 0xc4, 0xaa, 0xd2,
	0x19, 0xcb, 0xf1, 0xfb, 0xa3, 0x75, 0xfa, 0x47, 0x67, 0x7b, 0x7c, 0x89, 0x0f, 0x2b, 0x24, 0xee,
	0xbd, 0x71, 0xae, 0x63, 0xff, 0xe7, 0xcd, 0x83, 0x9d, 0x1f, 0x36, 0xa3, 0x17, 0xdb, 0x33, 0xec,
	0x3c, 0xf8, 0x2c, 0xbe, 0xd2, 0x1d, 0xda, 0xb0, 0xd0, 0xc5, 0xed, 0xfd, 0xb4, 0xb1, 0xa7, 0x11,
	0xd6, 0x7d, 0x06, 0x43, 0xc0, 0x1a, 0x81, 0x4c, 0x51, 0xe6, 0x48, 0xbc, 0x98, 0x3f, 0x11, 0x56,
	0xc1, 0x58, 0x10, 0x37, 0xa7, 0x02, 0x59, 0x3b, 0x05, 0xec, 0x20, 0x43, 0x06, 0x01, 0x54, 0xa5,
	0x84, 0x0c, 0x6e, 0x0c, 0xc6, 0x8e, 0x9d, 0x2f, 0xea, 0x72, 0x82, 0xb3, 0x20, 0xa0, 0xac, 0xd2,
	0xdc, 0x48, 0x68, 0x4b, 0x3a, 0x82, 0x90, 0xd7, 0x23, 0x57, 0xde, 0xa2, 0x02, 0x97, 0x7e, 0x8d,
	0x92, 0x41, 0x3a, 0xcb, 0xc2, 0x58, 0x5a, 0xf1, 0x16, 0xa9, 0xab, 0xb8, 0x96, 0xd1, 0xfa, 0x0e,
	0xc0, 0x58, 0x99, 0x57, 0xca, 0xd8, 0x0c, 0x0c, 0x13, 0xa4, 0xad, 0x6a, 0x63, 0x61, 0x8a, 0x06,
	0x82, 0xc2, 0x70, 0xdb, 0x56, 0x45, 0x8a, 0x3e, 0x68, 0x61, 0x2f, 0x2c, 0x09, 0x59, 0xb7, 0x16,
	0x04, 0x91, 0x93, 0x46, 0x30, 0x2a, 0x98, 0x1a, 0xd6, 0x60, 0xb8, 0xd1, 0x82, 0xdd, 0x9b, 0x5d,
	0x11, 0x82, 0x0a, 0x3b, 0x03, 0x85, 0x2c, 0x4c, 0x8e, 0x6a, 0x39, 0xc0, 0xb2, 0xb4, 0x01, 0xa4,
	0x15, 0x83, 0x19, 0x03, 0x6b, 0x11, 0x6a, 0x65, 0x17, 0xf3, 0x43, 0x06, 0x8f, 0x0f, 0x2b, 0xe3,
	0x51, 0x41, 0x3a, 0x83, 0x99, 0xab, 0x3c, 0x88, 0xb2, 0xcc, 0x8d, 0x6c, 0x3d, 0x58, 0xa3, 0x05,
	0xc3, 0x8b, 0xf9, 0x61, 0x53, 0xda, 0xb6, 0x96, 0xb5, 0xea, 0xd2, 0xe3, 0x18, 0x7d, 0x70, 0x9d,
	0x8a, 0x59, 0x57, 0xd4, 0xd5, 0xba, 0x2d, 0xa7, 0x1f, 0xdd, 0xdd, 0x8e, 0x36, 0x6e, 0x6c, 0x6d,
	0xc5, 0xd7, 0xa3, 0x68, 0xb7, 0x92, 0x32, 0x7c, 0xbe, 0x7f, 0x2f, 0xbe, 0x16, 0xf5, 0x7a, 0x57,
	0xde, 0x4c, 0x14, 0x8e, 0x8d, 0x35, 0x0d, 0xda, 0xc8, 0xba, 0x6d, 0xf1, 0xb7, 0xbf, 0xfe, 0xf9,
	0xfd, 0x85, 0x77, 0xe2, 0xb7, 0x83, 0x29, 0x79, 0x64, 0x91, 0xa7, 0xce, 0xef, 0x3f, 0x4e, 0x42,
	0x74, 0x4a, 0x1e, 0xb5, 0x49, 0x1e, 0x27, 0x6d, 0x49, 0xe3, 0xdf, 0x36, 0xa3, 0x97, 0x5b, 0xcf,
	0x23, 0x78, 0xb7, 0xce, 0x65, 0xf0, 0x19, 0xa8, 0xfd, 0x6b, 0xe3, 0x60, 0xe7, 0xe9, 0xc6, 0x2a,
	0xb5, 0x97, 0xba, 0xc3, 0x11, 0xad, 0x7f, 0x5f, 0x58, 0xa6, 0xf5, 0x88, 0xd2, 0x06, 0x23, 0x82,
	0xc2, 0x79, 0x3c, 0x03, 0x1d, 0x61, 0xbb, 0xea, 0x2d, 0xe6, 0x87, 0xab, 0x30, 0xb0, 0x16, 0xb6,
	0x6e, 0xc3, 0xba, 0x09, 0x68, 0x5a, 0x4c, 0x42, 0x7a, 0x33, 0x36, 0x12, 0x09, 0xc8, 0x15, 0x81,
	0x5b, 0x2a, 0x9d, 0x25, 0x04, 0x2a, 0x11, 0x55, 0x00, 0x2f, 0xc4, 0x28, 0xbd, 0x93, 0xff, 0x2b,
	0xda, 0x83, 0xff, 0xc6, 0xf5, 0xa0, 0x19, 0x85, 0x25, 0x76, 0xa9, 0x2a, 0x0a, 0xe1, 0x0d, 0x06,
	0x15, 0xa0, 0x90, 0x24, 0xda, 0x3a, 0x95, 0xf3, 0x0a, 0x7d, 0xe0, 0x35, 0xcd, 0x9d, 0xdc, 0x07,
	0x8d, 0x26, 0xd3, 0xfc, 0xcc, 0x78, 0x41, 0xfc, 0xfa, 0xbf, 0xe3, 0x15, 0xff, 0x71, 0x31, 0x7a,
	0xed, 0x53, 0xb4, 0xe8, 0x05, 0xe3, 0x49, 0xbc, 0x3e, 0x58, 0x0f, 0xcb, 0x1a, 0x97, 0x0e, 0xb3,
	0x77, 0xcf, 0xc5, 0xec, 0x1e, 0xce, 0xea, 0x2b, 0xfd, 0xdf, 0x37, 0x0f, 0x76, 0x7e, 0x3c, 0xb1,
	0x24, 0xaf, 0x76, 0xe1, 0x4f, 0x01, 0xd6, 0xfb, 0xa5, 0xde, 0x92, 0xa7, 0xbe, 0x1f, 0xad, 0x0c,
	0x91, 0xe7, 0x6e, 0x4a, 0x61, 0xda, 0x9b, 0xa9, 0x6d, 0xef, 0x95, 0xde, 0x4c, 0x04, 0xe3, 0xb0,
	0x1d, 0xe1, 0x7d, 0x9c, 0x0d, 0x4b, 0x61, 0x3c, 0x81, 0xc8, 0x9d, 0xcd, 0x9a, 0x36, 0x05, 0x38,
	0x8f, 0x3b, 0x77, 0x72, 0x49, 0x7e, 0xe1, 0x56, 0x78, 0x31, 0x74, 0xbc, 0x5d, 0x6a, 0x6f, 0xd6,
	0x86, 0xe0, 0xc1, 0xfd, 0xdd, 0xbd, 0xda, 0x8e, 0xc4, 0xe7, 0xc0, 0x27, 0x3a, 0x4d, 0x41, 0xcc,
	0xe0, 0x78, 0x2b, 0x37, 0x27, 0xab, 0x4e, 0xed, 0xe9, 0x41, 0x78, 0x1b, 0x68, 0xfc, 0x66, 0x88,
	0x56, 0x3a, 0x85, 0x6a, 0x74, 0x4b, 0x90, 0x51, 0x08, 0x32, 0x17, 0x44, 0x1f, 0xf5, 0xad, 0x63,
	0x23, 0xb1, 0x7f, 0x7b, 0x4f, 0xe3, 0x72, 0xe8, 0x63, 0x05, 0x86, 0xc0, 0x14, 0x05, 0xaa, 0xf0,
	0xbe, 0x7c, 0x06, 0xca, 0x90, 0x14, 0x5e, 0x35, 0xdb, 0x31, 0x2c, 0x47, 0x42, 0x3f, 0x41, 0x4f,
	0xcd, 0x9c, 0x4d, 0xc3, 0x20, 0x4c, 0x0c, 0x61, 0xb3, 0x51, 0x59, 0x23, 0xd5, 0xe1, 0x08, 0x48,
	0xbb, 0x2a, 0x57, 0x60, 0x1d, 0x43, 0x8a, 0x50, 0x11, 0x2a, 0x18, 0x3b, 0x5f, 0x6f, 0x69, 0x6d,
	0x32, 0x3d, 0x9c, 0x88, 0xbc, 0xc2, 0xc5, 0xfc, 0x89, 0xf3, 0x10, 0x6a, 0x3b, 0x64, 0xf4, 0x05,
	0x10, 0x3b, 0x2f, 0xb2, 0x60, 0x6e, 0x5f, 0x83, 0x34, 0xba, 0x95, 0xd4, 0xfa, 0x6f, 0xdf, 0x7d,
	0x2f, 0xc0, 0xbd, 0x1d, 0x27, 0xd1, 0x0b, 0x1f, 0x7b, 0x0c, 0xc5, 0x8f, 0xdf, 0x8a, 0xfa, 0x3d,
	0x58, 0x47, 0x76, 0x87, 0x4e, 0x4d, 0xf8, 0xd5, 0xfe, 0xe5, 0xb3, 0x08, 0xff, 0xf0, 0xb9, 0xeb,
	0x77, 0x6e, 0x7e, 0xb5, 0x9d, 0x19, 0xd6, 0x55, 0x3a, 0x92, 0xae, 0x48, 0x96, 0x80, 0x4c, 0x3a,
	0x20, 0x93, 0xa5, 0xff, 0x20, 0x99, 0x0b, 0x71, 0xd2, 0xe7, 0x6b, 0xd3, 0xcd, 0x7f, 0x02, 0x00,
	0x00, 0xff, 0xff, 0x0e, 0xf8, 0xe8, 0xe7, 0xed, 0x08, 0x00, 0x00,
}
