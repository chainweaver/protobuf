// Code generated by protoc-gen-go. DO NOT EDIT.
// source: contractService_Eth.proto

package protoc_gen_go_eth

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

func init() { proto.RegisterFile("contractService_Eth.proto", fileDescriptor_8703a686f4e55335) }

var fileDescriptor_8703a686f4e55335 = []byte{
	// 342 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x91, 0xc1, 0x4a, 0xeb, 0x40,
	0x18, 0x85, 0xe9, 0xe5, 0x72, 0x17, 0xd9, 0x5c, 0xc8, 0xe2, 0x5e, 0x0d, 0x52, 0x24, 0x2b, 0x45,
	0x93, 0xa1, 0xba, 0x16, 0xd1, 0x52, 0xc4, 0x85, 0x20, 0xba, 0x73, 0x23, 0x93, 0xc9, 0xdf, 0x99,
	0xc1, 0x64, 0xfe, 0x38, 0xf3, 0x57, 0x29, 0xa5, 0x1b, 0x5f, 0xc1, 0x77, 0x71, 0xe3, 0x2b, 0xb8,
	0x73, 0xe1, 0x0b, 0xf8, 0x20, 0xe2, 0xd4, 0x44, 0x45, 0x4b, 0x5b, 0x77, 0x21, 0x87, 0x73, 0xce,
	0x77, 0xfe, 0x09, 0x96, 0x05, 0x1a, 0xb2, 0x5c, 0xd0, 0x29, 0xd8, 0x2b, 0x2d, 0xe0, 0xbc, 0x47,
	0x2a, 0xad, 0x2c, 0x12, 0x86, 0x71, 0x9f, 0x6b, 0x7b, 0xcd, 0x87, 0x02, 0x6d, 0x95, 0x66, 0x05,
	0x8a, 0x0b, 0xa1, 0xb8, 0x36, 0x5e, 0xcc, 0x06, 0xfd, 0x14, 0x48, 0x45, 0x2b, 0x12, 0x51, 0x16,
	0xc0, 0x78, 0xa5, 0x19, 0x37, 0x06, 0x89, 0x93, 0x46, 0xe3, 0x26, 0x09, 0x51, 0x13, 0x7e, 0x04,
	0xce, 0x71, 0xf9, 0x21, 0x3c, 0xfa, 0x2f, 0xb0, 0x2c, 0xd1, 0x7c, 0x11, 0xb6, 0x9e, 0x7e, 0x07,
	0x7f, 0xbb, 0x9f, 0x99, 0xc2, 0xbb, 0x56, 0x10, 0x1d, 0xa3, 0xa3, 0xae, 0x05, 0x4e, 0x50, 0xab,
	0x3d, 0x93, 0x57, 0xa8, 0x0d, 0x85, 0xbd, 0x74, 0x36, 0x69, 0x3a, 0xdd, 0x7f, 0x02, 0x97, 0x03,
	0x70, 0x14, 0x75, 0xe6, 0x89, 0xa9, 0xcd, 0x7b, 0xd6, 0xf2, 0x61, 0xdc, 0xbe, 0x79, 0x7c, 0xbe,
	0xfd, 0xb5, 0x14, 0xff, 0x63, 0x40, 0x8a, 0x8d, 0x1c, 0x71, 0x09, 0x63, 0x56, 0xaf, 0x76, 0xe1,
	0x7d, 0x2b, 0x88, 0x0e, 0x80, 0x1a, 0x53, 0x9e, 0x5b, 0x70, 0x6e, 0x31, 0xf0, 0xe9, 0xfe, 0x1a,
	0x7c, 0x73, 0x11, 0xf0, 0x78, 0xcd, 0x33, 0xc7, 0xe1, 0xea, 0xf7, 0xcc, 0x6c, 0xc4, 0x27, 0x2d,
	0xe3, 0xf0, 0xa1, 0x15, 0xb4, 0xfd, 0xd9, 0x78, 0x51, 0x74, 0x9b, 0x97, 0x24, 0x85, 0x79, 0xb3,
	0xe0, 0x70, 0xee, 0xd3, 0x4f, 0xcd, 0xf8, 0xd9, 0x8a, 0x8e, 0x5f, 0xb1, 0x11, 0xaf, 0xcf, 0x5a,
	0xc1, 0x46, 0xa5, 0xaf, 0x1b, 0xef, 0xef, 0x9e, 0xed, 0x48, 0x4d, 0x6a, 0x90, 0xa5, 0x02, 0x4b,
	0xf6, 0x56, 0x96, 0xbc, 0xb6, 0xb1, 0xf7, 0xb6, 0xa4, 0xae, 0x63, 0xfe, 0x43, 0x24, 0x12, 0x4c,
	0x22, 0x31, 0x01, 0x52, 0xd9, 0x1f, 0xff, 0x6b, 0xfb, 0x25, 0x00, 0x00, 0xff, 0xff, 0x2a, 0x81,
	0x2c, 0x70, 0x34, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ContractServiceClient is the client API for ContractService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ContractServiceClient interface {
	PostCreateContractEndpoint(ctx context.Context, in *PostCreateContractEndpointRequest, opts ...grpc.CallOption) (*ContractArray, error)
	GetContractAddressEndpoint(ctx context.Context, in *GetContractAddressEndpointRequest, opts ...grpc.CallOption) (*Contract, error)
	PostCallContractMethodEndpoint(ctx context.Context, in *PostCallContractMethodEndpointRequest, opts ...grpc.CallOption) (*Contract, error)
}

type contractServiceClient struct {
	cc *grpc.ClientConn
}

func NewContractServiceClient(cc *grpc.ClientConn) ContractServiceClient {
	return &contractServiceClient{cc}
}

func (c *contractServiceClient) PostCreateContractEndpoint(ctx context.Context, in *PostCreateContractEndpointRequest, opts ...grpc.CallOption) (*ContractArray, error) {
	out := new(ContractArray)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.eth.ContractService/PostCreateContractEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contractServiceClient) GetContractAddressEndpoint(ctx context.Context, in *GetContractAddressEndpointRequest, opts ...grpc.CallOption) (*Contract, error) {
	out := new(Contract)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.eth.ContractService/GetContractAddressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *contractServiceClient) PostCallContractMethodEndpoint(ctx context.Context, in *PostCallContractMethodEndpointRequest, opts ...grpc.CallOption) (*Contract, error) {
	out := new(Contract)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.eth.ContractService/PostCallContractMethodEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ContractServiceServer is the server API for ContractService service.
type ContractServiceServer interface {
	PostCreateContractEndpoint(context.Context, *PostCreateContractEndpointRequest) (*ContractArray, error)
	GetContractAddressEndpoint(context.Context, *GetContractAddressEndpointRequest) (*Contract, error)
	PostCallContractMethodEndpoint(context.Context, *PostCallContractMethodEndpointRequest) (*Contract, error)
}

func RegisterContractServiceServer(s *grpc.Server, srv ContractServiceServer) {
	s.RegisterService(&_ContractService_serviceDesc, srv)
}

func _ContractService_PostCreateContractEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PostCreateContractEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContractServiceServer).PostCreateContractEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.eth.ContractService/PostCreateContractEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContractServiceServer).PostCreateContractEndpoint(ctx, req.(*PostCreateContractEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContractService_GetContractAddressEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetContractAddressEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContractServiceServer).GetContractAddressEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.eth.ContractService/GetContractAddressEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContractServiceServer).GetContractAddressEndpoint(ctx, req.(*GetContractAddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ContractService_PostCallContractMethodEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PostCallContractMethodEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ContractServiceServer).PostCallContractMethodEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.eth.ContractService/PostCallContractMethodEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ContractServiceServer).PostCallContractMethodEndpoint(ctx, req.(*PostCallContractMethodEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ContractService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "fairwaycorp.blockchainprotobuf.eth.ContractService",
	HandlerType: (*ContractServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PostCreateContractEndpoint",
			Handler:    _ContractService_PostCreateContractEndpoint_Handler,
		},
		{
			MethodName: "GetContractAddressEndpoint",
			Handler:    _ContractService_GetContractAddressEndpoint_Handler,
		},
		{
			MethodName: "PostCallContractMethodEndpoint",
			Handler:    _ContractService_PostCallContractMethodEndpoint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "contractService_Eth.proto",
}
