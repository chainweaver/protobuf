// Code generated by protoc-gen-go. DO NOT EDIT.
// source: metadataService.proto

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

func init() { proto.RegisterFile("metadataService.proto", fileDescriptor_ba759d463d0d4bf4) }

var fileDescriptor_ba759d463d0d4bf4 = []byte{
	// 457 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x92, 0x41, 0xca, 0xd3, 0x40,
	0x14, 0x80, 0x89, 0x0b, 0x17, 0x83, 0x20, 0x0c, 0xfe, 0xa8, 0x53, 0xf3, 0xa3, 0x75, 0x65, 0x21,
	0x19, 0xd0, 0x95, 0xb8, 0xb2, 0xb4, 0x08, 0x4a, 0x45, 0x14, 0x5c, 0xb8, 0x29, 0x93, 0xe4, 0x35,
	0x19, 0x4c, 0x33, 0x31, 0x33, 0xd1, 0x96, 0xe2, 0xc6, 0x2b, 0x78, 0x07, 0x37, 0xba, 0x51, 0x3c,
	0x80, 0x57, 0x10, 0xaf, 0xe0, 0x41, 0x24, 0x93, 0x34, 0x26, 0x69, 0x9b, 0x9a, 0xd4, 0x5d, 0x9b,
	0xc9, 0xfb, 0xde, 0x37, 0xe4, 0x43, 0x67, 0x4b, 0x50, 0xcc, 0x63, 0x8a, 0xbd, 0x80, 0xe4, 0x2d,
	0x77, 0xc1, 0x8e, 0x13, 0xa1, 0x04, 0x3e, 0x5f, 0x30, 0x9e, 0xbc, 0x63, 0x6b, 0x57, 0x24, 0xb1,
	0xed, 0x84, 0xc2, 0x7d, 0xed, 0x06, 0x8c, 0x47, 0xfa, 0xd0, 0x49, 0x17, 0xe4, 0x86, 0x2f, 0x84,
	0x1f, 0x02, 0x65, 0x31, 0xa7, 0x2c, 0x8a, 0x84, 0x62, 0x8a, 0x8b, 0x48, 0xe6, 0xd3, 0xa4, 0x84,
	0xce, 0x40, 0x4a, 0xe6, 0x17, 0xd0, 0xbb, 0x3f, 0x2f, 0xa1, 0xcb, 0xb3, 0xfa, 0x3a, 0xfc, 0xd9,
	0x40, 0x83, 0x47, 0xa0, 0xb6, 0x8f, 0xe7, 0xcc, 0xf3, 0x12, 0x90, 0x72, 0x1a, 0x79, 0xb1, 0xe0,
	0x91, 0xc2, 0x63, 0xbb, 0xdd, 0xc4, 0x6e, 0x19, 0x7e, 0x0e, 0x6f, 0x52, 0x90, 0x8a, 0xdc, 0x39,
	0xc6, 0x78, 0x02, 0xeb, 0x97, 0x2c, 0x4c, 0x41, 0x0e, 0xcd, 0x0f, 0xbf, 0x7e, 0x7f, 0xbc, 0x70,
	0x15, 0x9f, 0xd1, 0x8c, 0x25, 0xe9, 0xa6, 0x40, 0xbe, 0xa7, 0xd9, 0x95, 0xf0, 0x27, 0x03, 0x91,
	0xea, 0x42, 0xb5, 0x0a, 0x98, 0x0c, 0x4a, 0xd9, 0x87, 0x5d, 0x64, 0xeb, 0xb3, 0x3d, 0x5c, 0x89,
	0x76, 0xbd, 0x82, 0x31, 0x55, 0x2b, 0x49, 0x37, 0x39, 0xaf, 0x10, 0xfd, 0x66, 0x20, 0xb3, 0xba,
	0x4c, 0x83, 0x6a, 0xae, 0x93, 0x2e, 0xae, 0x3b, 0xe3, 0x3d, 0x74, 0x6f, 0x6a, 0x5d, 0x82, 0xaf,
	0x51, 0xfd, 0x9a, 0xa4, 0x9b, 0x92, 0x5a, 0x48, 0x67, 0x2d, 0x3c, 0x4b, 0x4f, 0x68, 0xa1, 0x65,
	0xf8, 0x9f, 0x85, 0x9f, 0xa6, 0x61, 0xa8, 0x8d, 0xb7, 0x2d, 0x90, 0x96, 0x16, 0xaa, 0x0b, 0xbb,
	0xb6, 0x70, 0x78, 0xb6, 0x87, 0x6b, 0xd1, 0x02, 0xd9, 0xd7, 0xc2, 0x77, 0x03, 0x99, 0xd5, 0x65,
	0xbb, 0x2d, 0x4c, 0xbb, 0xb8, 0xea, 0xe3, 0xf9, 0x89, 0xbe, 0xb7, 0xb4, 0xef, 0x80, 0x5c, 0xaf,
	0xc7, 0x30, 0xaf, 0x68, 0x7f, 0x35, 0xd0, 0xf9, 0x04, 0x42, 0x50, 0x70, 0x30, 0x88, 0xa3, 0xde,
	0xed, 0xf3, 0xfd, 0x9b, 0x18, 0x1d, 0x68, 0xe2, 0x8b, 0x81, 0xcc, 0xc6, 0xce, 0x46, 0x16, 0x93,
	0x8e, 0xca, 0xff, 0xab, 0x8c, 0xd1, 0xbe, 0x32, 0x7e, 0x18, 0x68, 0xd8, 0xd8, 0x97, 0xc7, 0x01,
	0xdc, 0x0f, 0x54, 0xe9, 0xfc, 0xb8, 0xa3, 0x73, 0xf1, 0x29, 0x6b, 0x90, 0x1e, 0xe6, 0xb7, 0xb5,
	0xb9, 0x39, 0x1a, 0x34, 0x1b, 0xd1, 0xe0, 0xfc, 0x0a, 0xe3, 0x07, 0xaf, 0xee, 0xfb, 0x5c, 0x05,
	0xa9, 0x63, 0xbb, 0x62, 0x49, 0x0b, 0xb6, 0x95, 0xc1, 0xe9, 0x5f, 0xb8, 0xb5, 0xa5, 0x53, 0xfd,
	0xc3, 0xb5, 0x7c, 0x88, 0x2c, 0x5f, 0x38, 0x17, 0xf5, 0xdf, 0x7b, 0x7f, 0x02, 0x00, 0x00, 0xff,
	0xff, 0xae, 0xaa, 0xd4, 0x59, 0x05, 0x07, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MetadataServiceClient is the client API for MetadataService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MetadataServiceClient interface {
	GetMetadataAddressEndpoint(ctx context.Context, in *GetMetadataAddressEndpointRequest, opts ...grpc.CallOption) (*KeyValues, error)
	GetMetadataTxhashEndpoint(ctx context.Context, in *GetMetadataTxhashEndpointRequest, opts ...grpc.CallOption) (*KeyValues, error)
	GetMetadataBlockhashEndpoint(ctx context.Context, in *GetMetadataBlockhashEndpointRequest, opts ...grpc.CallOption) (*KeyValues, error)
	PutMetadataAddressEndpoint(ctx context.Context, in *PutMetadataAddressEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
	PutMetadataTxhashEndpoint(ctx context.Context, in *PutMetadataTxhashEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
	PutMetadataBlockhashEndpoint(ctx context.Context, in *PutMetadataBlockHashEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
	DeleteMetadataAddressEndpoint(ctx context.Context, in *DeleteMetadataAddressEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
	DeleteMetadataTxhashEndpoint(ctx context.Context, in *DeleteMetadataTxhashEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
	DeleteMetadataBlockheightEndpoint(ctx context.Context, in *DeleteMetadataBlockHeightEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
}

type metadataServiceClient struct {
	cc *grpc.ClientConn
}

func NewMetadataServiceClient(cc *grpc.ClientConn) MetadataServiceClient {
	return &metadataServiceClient{cc}
}

func (c *metadataServiceClient) GetMetadataAddressEndpoint(ctx context.Context, in *GetMetadataAddressEndpointRequest, opts ...grpc.CallOption) (*KeyValues, error) {
	out := new(KeyValues)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadata_addressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataServiceClient) GetMetadataTxhashEndpoint(ctx context.Context, in *GetMetadataTxhashEndpointRequest, opts ...grpc.CallOption) (*KeyValues, error) {
	out := new(KeyValues)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadata_txhashEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataServiceClient) GetMetadataBlockhashEndpoint(ctx context.Context, in *GetMetadataBlockhashEndpointRequest, opts ...grpc.CallOption) (*KeyValues, error) {
	out := new(KeyValues)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadata_blockhashEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataServiceClient) PutMetadataAddressEndpoint(ctx context.Context, in *PutMetadataAddressEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadata_addressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataServiceClient) PutMetadataTxhashEndpoint(ctx context.Context, in *PutMetadataTxhashEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadata_txhashEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataServiceClient) PutMetadataBlockhashEndpoint(ctx context.Context, in *PutMetadataBlockHashEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadata_blockhashEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataServiceClient) DeleteMetadataAddressEndpoint(ctx context.Context, in *DeleteMetadataAddressEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadata_addressEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataServiceClient) DeleteMetadataTxhashEndpoint(ctx context.Context, in *DeleteMetadataTxhashEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadata_txhashEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *metadataServiceClient) DeleteMetadataBlockheightEndpoint(ctx context.Context, in *DeleteMetadataBlockHeightEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadata_blockheightEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MetadataServiceServer is the server API for MetadataService service.
type MetadataServiceServer interface {
	GetMetadataAddressEndpoint(context.Context, *GetMetadataAddressEndpointRequest) (*KeyValues, error)
	GetMetadataTxhashEndpoint(context.Context, *GetMetadataTxhashEndpointRequest) (*KeyValues, error)
	GetMetadataBlockhashEndpoint(context.Context, *GetMetadataBlockhashEndpointRequest) (*KeyValues, error)
	PutMetadataAddressEndpoint(context.Context, *PutMetadataAddressEndpointRequest) (*NullValue, error)
	PutMetadataTxhashEndpoint(context.Context, *PutMetadataTxhashEndpointRequest) (*NullValue, error)
	PutMetadataBlockhashEndpoint(context.Context, *PutMetadataBlockHashEndpointRequest) (*NullValue, error)
	DeleteMetadataAddressEndpoint(context.Context, *DeleteMetadataAddressEndpointRequest) (*NullValue, error)
	DeleteMetadataTxhashEndpoint(context.Context, *DeleteMetadataTxhashEndpointRequest) (*NullValue, error)
	DeleteMetadataBlockheightEndpoint(context.Context, *DeleteMetadataBlockHeightEndpointRequest) (*NullValue, error)
}

func RegisterMetadataServiceServer(s *grpc.Server, srv MetadataServiceServer) {
	s.RegisterService(&_MetadataService_serviceDesc, srv)
}

func _MetadataService_GetMetadataAddressEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMetadataAddressEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataServiceServer).GetMetadataAddressEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadataAddressEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataServiceServer).GetMetadataAddressEndpoint(ctx, req.(*GetMetadataAddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MetadataService_GetMetadataTxhashEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMetadataTxhashEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataServiceServer).GetMetadataTxhashEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadataTxhashEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataServiceServer).GetMetadataTxhashEndpoint(ctx, req.(*GetMetadataTxhashEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MetadataService_GetMetadataBlockhashEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMetadataBlockhashEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataServiceServer).GetMetadataBlockhashEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadataBlockhashEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataServiceServer).GetMetadataBlockhashEndpoint(ctx, req.(*GetMetadataBlockhashEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MetadataService_PutMetadataAddressEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PutMetadataAddressEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataServiceServer).PutMetadataAddressEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadataAddressEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataServiceServer).PutMetadataAddressEndpoint(ctx, req.(*PutMetadataAddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MetadataService_PutMetadataTxhashEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PutMetadataTxhashEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataServiceServer).PutMetadataTxhashEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadataTxhashEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataServiceServer).PutMetadataTxhashEndpoint(ctx, req.(*PutMetadataTxhashEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MetadataService_PutMetadataBlockhashEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PutMetadataBlockHashEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataServiceServer).PutMetadataBlockhashEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadataBlockhashEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataServiceServer).PutMetadataBlockhashEndpoint(ctx, req.(*PutMetadataBlockHashEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MetadataService_DeleteMetadataAddressEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteMetadataAddressEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataServiceServer).DeleteMetadataAddressEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadataAddressEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataServiceServer).DeleteMetadataAddressEndpoint(ctx, req.(*DeleteMetadataAddressEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MetadataService_DeleteMetadataTxhashEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteMetadataTxhashEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataServiceServer).DeleteMetadataTxhashEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadataTxhashEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataServiceServer).DeleteMetadataTxhashEndpoint(ctx, req.(*DeleteMetadataTxhashEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MetadataService_DeleteMetadataBlockheightEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteMetadataBlockHeightEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataServiceServer).DeleteMetadataBlockheightEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadataBlockheightEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataServiceServer).DeleteMetadataBlockheightEndpoint(ctx, req.(*DeleteMetadataBlockHeightEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _MetadataService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "fairwaycorp.blockchainprotobuf.MetadataService",
	HandlerType: (*MetadataServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetMetadata_addressEndpoint",
			Handler:    _MetadataService_GetMetadataAddressEndpoint_Handler,
		},
		{
			MethodName: "GetMetadata_txhashEndpoint",
			Handler:    _MetadataService_GetMetadataTxhashEndpoint_Handler,
		},
		{
			MethodName: "GetMetadata_blockhashEndpoint",
			Handler:    _MetadataService_GetMetadataBlockhashEndpoint_Handler,
		},
		{
			MethodName: "PutMetadata_addressEndpoint",
			Handler:    _MetadataService_PutMetadataAddressEndpoint_Handler,
		},
		{
			MethodName: "PutMetadata_txhashEndpoint",
			Handler:    _MetadataService_PutMetadataTxhashEndpoint_Handler,
		},
		{
			MethodName: "PutMetadata_blockhashEndpoint",
			Handler:    _MetadataService_PutMetadataBlockhashEndpoint_Handler,
		},
		{
			MethodName: "DeleteMetadata_addressEndpoint",
			Handler:    _MetadataService_DeleteMetadataAddressEndpoint_Handler,
		},
		{
			MethodName: "DeleteMetadata_txhashEndpoint",
			Handler:    _MetadataService_DeleteMetadataTxhashEndpoint_Handler,
		},
		{
			MethodName: "DeleteMetadata_blockheightEndpoint",
			Handler:    _MetadataService_DeleteMetadataBlockheightEndpoint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "metadataService.proto",
}
