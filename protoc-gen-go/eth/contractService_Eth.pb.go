// Code generated by protoc-gen-go. DO NOT EDIT.
// source: contractService_Eth.proto

package eth

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
	// 347 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x91, 0xc1, 0x4a, 0xeb, 0x40,
	0x14, 0x86, 0xe9, 0xe5, 0x72, 0x17, 0xd9, 0x5c, 0xc8, 0x46, 0x0d, 0x22, 0x92, 0x95, 0x88, 0xc9,
	0x58, 0xbb, 0x72, 0x21, 0xa2, 0xa5, 0x88, 0x0b, 0x41, 0x74, 0xe7, 0xa6, 0x4c, 0x26, 0xa7, 0xc9,
	0xd0, 0x64, 0x4e, 0x3a, 0x73, 0x62, 0x29, 0xa5, 0x1b, 0x5f, 0xc1, 0x97, 0x71, 0xef, 0x23, 0xe8,
	0x23, 0xb8, 0xf1, 0x2d, 0xa4, 0x53, 0x13, 0x15, 0x09, 0xb6, 0xee, 0x42, 0x0e, 0xe7, 0xff, 0xbe,
	0x7f, 0x8e, 0xb3, 0x21, 0x50, 0x91, 0xe6, 0x82, 0xae, 0x41, 0xdf, 0x4a, 0x01, 0xfd, 0x1e, 0xa5,
	0x61, 0xa1, 0x91, 0xd0, 0xf5, 0x07, 0x5c, 0xea, 0x31, 0x9f, 0x08, 0xd4, 0x45, 0x18, 0x65, 0x28,
	0x86, 0x22, 0xe5, 0x52, 0xd9, 0x61, 0x54, 0x0e, 0x42, 0xa0, 0xd4, 0xdb, 0x4c, 0x10, 0x93, 0x0c,
	0x18, 0x2f, 0x24, 0xe3, 0x4a, 0x21, 0x71, 0x92, 0xa8, 0xcc, 0x22, 0xc1, 0xab, 0xc3, 0x2f, 0xc0,
	0x18, 0x9e, 0x7c, 0x0a, 0xf7, 0xd6, 0x04, 0xe6, 0x39, 0xaa, 0x6f, 0x83, 0x83, 0xd7, 0xbf, 0xce,
	0xff, 0xee, 0x57, 0x27, 0xf7, 0xa1, 0xe5, 0x78, 0x97, 0x68, 0xa8, 0xab, 0x81, 0x13, 0x54, 0xd3,
	0x9e, 0x8a, 0x0b, 0x94, 0x8a, 0xdc, 0x5e, 0xf8, 0xb3, 0x69, 0xd8, 0xbc, 0x7f, 0x05, 0xa3, 0x12,
	0x0c, 0x79, 0xed, 0x65, 0x62, 0xaa, 0xe5, 0x13, 0xad, 0xf9, 0xc4, 0xdf, 0xbe, 0x7b, 0x7a, 0xb9,
	0xff, 0xe3, 0xf9, 0xeb, 0x0c, 0x28, 0x65, 0x53, 0x05, 0x34, 0x46, 0x3d, 0x9c, 0xb1, 0xaa, 0xb7,
	0x71, 0x1f, 0x5b, 0x8e, 0x77, 0x06, 0x54, 0xaf, 0xc5, 0xb1, 0x06, 0x63, 0x56, 0x53, 0x6f, 0xde,
	0xaf, 0xd4, 0xf7, 0x56, 0x51, 0xf7, 0xf7, 0xad, 0xf5, 0xae, 0xbb, 0xd3, 0x64, 0xcd, 0xa6, 0xa3,
	0x12, 0xf4, 0xa4, 0xcf, 0x17, 0xb4, 0x99, 0xfb, 0xdc, 0x72, 0xb6, 0xec, 0x03, 0xf2, 0x2c, 0xeb,
	0xd6, 0x37, 0xa5, 0x14, 0xe3, 0xba, 0xc9, 0xf9, 0xd2, 0x47, 0x68, 0xcc, 0xf8, 0x5d, 0x9b, 0x43,
	0xdb, 0xa6, 0xe3, 0xb7, 0x97, 0x6d, 0xc3, 0xa6, 0xb9, 0xc5, 0xce, 0x4e, 0x8f, 0x6f, 0x8e, 0x12,
	0x49, 0x69, 0x19, 0x85, 0x02, 0x73, 0xf6, 0x0e, 0x0d, 0xe6, 0x54, 0xf6, 0x41, 0x0d, 0x2a, 0x2c,
	0xb3, 0x1f, 0x22, 0x48, 0x40, 0x05, 0x09, 0xce, 0x69, 0xd1, 0x3f, 0xfb, 0xab, 0xf3, 0x16, 0x00,
	0x00, 0xff, 0xff, 0x0c, 0x23, 0x41, 0xcd, 0x46, 0x03, 0x00, 0x00,
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