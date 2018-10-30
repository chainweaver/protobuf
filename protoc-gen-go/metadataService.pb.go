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
	// 473 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x94, 0xc1, 0x8a, 0xd4, 0x30,
	0x18, 0xc7, 0x89, 0x07, 0x0f, 0x41, 0x10, 0x82, 0x8b, 0x9a, 0xb1, 0x83, 0xac, 0x5e, 0x1c, 0x68,
	0x03, 0x7a, 0x52, 0x4f, 0x2e, 0xb3, 0x08, 0xca, 0x8a, 0x28, 0x78, 0xf0, 0x32, 0xa4, 0xed, 0xb7,
	0x6d, 0xb0, 0xdb, 0xd4, 0x26, 0xd5, 0x5d, 0x06, 0x2f, 0xbe, 0x82, 0xef, 0x20, 0x88, 0x22, 0xe8,
	0xc5, 0xab, 0xef, 0xe0, 0xcd, 0xb3, 0x0f, 0x22, 0x4d, 0x33, 0xb5, 0xed, 0xce, 0x74, 0x6d, 0xe7,
	0xd6, 0x36, 0xfd, 0x7e, 0xff, 0x5f, 0xda, 0x3f, 0xc1, 0x3b, 0x47, 0xa0, 0x79, 0xc8, 0x35, 0x7f,
	0x0e, 0xf9, 0x1b, 0x11, 0x80, 0x97, 0xe5, 0x52, 0x4b, 0x32, 0x3d, 0xe4, 0x22, 0x7f, 0xcb, 0x4f,
	0x02, 0x99, 0x67, 0x9e, 0x9f, 0xc8, 0xe0, 0x55, 0x10, 0x73, 0x91, 0x9a, 0x45, 0xbf, 0x38, 0xa4,
	0xd7, 0x22, 0x29, 0xa3, 0x04, 0x18, 0xcf, 0x04, 0xe3, 0x69, 0x2a, 0x35, 0xd7, 0x42, 0xa6, 0xaa,
	0x9a, 0xa6, 0x35, 0xf4, 0x00, 0x94, 0xe2, 0x91, 0x85, 0xde, 0xfe, 0x7d, 0x01, 0x5f, 0x3c, 0x68,
	0xc7, 0x91, 0xcf, 0x08, 0x4f, 0x1e, 0x82, 0x5e, 0x3d, 0x5e, 0xf0, 0x30, 0xcc, 0x41, 0xa9, 0xfd,
	0x34, 0xcc, 0xa4, 0x48, 0x35, 0xd9, 0xf3, 0xfa, 0x4d, 0xbc, 0x9e, 0xe1, 0x67, 0xf0, 0xba, 0x00,
	0xa5, 0xe9, 0xad, 0xb3, 0x18, 0x8f, 0xe1, 0xe4, 0x05, 0x4f, 0x0a, 0x50, 0xbb, 0xce, 0xfb, 0x5f,
	0x7f, 0x3e, 0x9c, 0xbb, 0x4c, 0x76, 0x58, 0xc9, 0x52, 0x6c, 0x69, 0x91, 0xef, 0x58, 0xb9, 0x25,
	0xf2, 0x11, 0x61, 0xda, 0x0c, 0xd4, 0xc7, 0x31, 0x57, 0x71, 0x2d, 0xfb, 0x60, 0x88, 0x6c, 0x7b,
	0x76, 0x84, 0x2b, 0x35, 0xae, 0x97, 0x08, 0x61, 0xfa, 0x58, 0xb1, 0x65, 0xc5, 0xb3, 0xa2, 0xdf,
	0x11, 0x76, 0x9a, 0x61, 0x06, 0xd4, 0x72, 0x9d, 0x0f, 0x71, 0x3d, 0x35, 0x3e, 0x42, 0xf7, 0xba,
	0xd1, 0xa5, 0xe4, 0x0a, 0x33, 0xaf, 0x29, 0xb6, 0xac, 0xa9, 0x56, 0xfa, 0x2b, 0xc2, 0x93, 0xa7,
	0xc5, 0x16, 0x5d, 0xe8, 0x19, 0xfe, 0x6f, 0xe1, 0x27, 0x45, 0x92, 0x18, 0xe3, 0x95, 0x30, 0x5d,
	0xdf, 0x85, 0x7b, 0x68, 0x46, 0x3e, 0x21, 0x4c, 0x9b, 0x99, 0x43, 0xeb, 0xb0, 0x79, 0x76, 0x84,
	0xae, 0xad, 0x2e, 0x5d, 0x53, 0x87, 0xd2, 0xf5, 0x07, 0xc2, 0x4e, 0x33, 0xef, 0x74, 0x23, 0xf6,
	0x87, 0xe8, 0x9a, 0xe5, 0xc5, 0x96, 0xca, 0x37, 0x8d, 0xf2, 0x94, 0x5e, 0x6d, 0x57, 0x62, 0xd1,
	0x36, 0xff, 0x86, 0xf0, 0x74, 0x0e, 0x09, 0x68, 0xd8, 0xd8, 0x8c, 0x33, 0xd5, 0xfb, 0xe7, 0xc7,
	0x7f, 0xed, 0xd9, 0x86, 0x83, 0xe2, 0x0b, 0xc2, 0x4e, 0x27, 0xb3, 0x53, 0x8e, 0xf9, 0x40, 0xe5,
	0xad, 0xfb, 0x61, 0x8f, 0x8b, 0xd9, 0xba, 0xe3, 0xe2, 0x27, 0xc2, 0xbb, 0x9d, 0xbc, 0xaa, 0x1f,
	0x20, 0xa2, 0x58, 0xd7, 0xce, 0x8f, 0x06, 0x3a, 0xdb, 0xbf, 0xd9, 0x82, 0x8c, 0x30, 0xbf, 0x61,
	0xcc, 0x9d, 0xd9, 0xa4, 0x5b, 0x13, 0x03, 0xae, 0xb6, 0xb0, 0x77, 0xff, 0xe5, 0xdd, 0x48, 0xe8,
	0xb8, 0xf0, 0xbd, 0x40, 0x1e, 0x31, 0xcb, 0x76, 0x4b, 0x38, 0xfb, 0x07, 0x77, 0x57, 0x74, 0x66,
	0x2e, 0x02, 0x37, 0x82, 0xd4, 0x8d, 0xa4, 0x7f, 0xde, 0xdc, 0xde, 0xf9, 0x1b, 0x00, 0x00, 0xff,
	0xff, 0x56, 0x70, 0xb3, 0x21, 0x0e, 0x07, 0x00, 0x00,
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
