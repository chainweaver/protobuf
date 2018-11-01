// Code generated by protoc-gen-go. DO NOT EDIT.
// source: transactionService.proto

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

func init() { proto.RegisterFile("transactionService.proto", fileDescriptor_cd57cf5433ebed65) }

var fileDescriptor_cd57cf5433ebed65 = []byte{
	// 481 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x94, 0xc1, 0x6a, 0xd4, 0x40,
	0x18, 0xc7, 0x89, 0x48, 0xb1, 0x63, 0xab, 0x32, 0xd5, 0x56, 0x63, 0xa9, 0x18, 0x2f, 0x52, 0xd8,
	0x04, 0xf4, 0xa4, 0x82, 0x60, 0x6d, 0xc5, 0x8b, 0xa5, 0x74, 0x15, 0xc4, 0xdb, 0x97, 0xc9, 0xb7,
	0xc9, 0xd0, 0xec, 0x7c, 0x31, 0x33, 0x71, 0x57, 0xa4, 0x17, 0x2f, 0x3e, 0x80, 0x5e, 0x04, 0xc1,
	0xf7, 0xf0, 0x09, 0xbc, 0xfb, 0x0a, 0x3e, 0x88, 0x64, 0xec, 0x6e, 0xb3, 0xed, 0xee, 0xce, 0xe6,
	0x96, 0x4c, 0xf2, 0xff, 0xfd, 0x7f, 0xf3, 0x91, 0x0c, 0xbb, 0x69, 0x4a, 0x50, 0x1a, 0x84, 0x91,
	0xa4, 0xba, 0x58, 0x7e, 0x90, 0x02, 0xc3, 0xa2, 0x24, 0x43, 0x7c, 0xab, 0x07, 0xb2, 0x1c, 0xc0,
	0x47, 0x41, 0x65, 0x11, 0xc6, 0x39, 0x89, 0x23, 0x91, 0x81, 0x54, 0xf6, 0x61, 0x5c, 0xf5, 0xfc,
	0xcd, 0x94, 0x28, 0xcd, 0x31, 0x82, 0x42, 0x46, 0xa0, 0x14, 0x19, 0xa8, 0x19, 0xfa, 0x7f, 0xda,
	0x6f, 0x72, 0x5f, 0xa1, 0xd6, 0x90, 0x9e, 0x70, 0xfd, 0x35, 0x41, 0xfd, 0xfe, 0x99, 0xc5, 0x07,
	0xbf, 0x97, 0x19, 0x7f, 0x7d, 0xce, 0x84, 0x7f, 0xf3, 0xd8, 0x46, 0x63, 0xf9, 0x25, 0xe8, 0x6c,
	0x4f, 0x25, 0x05, 0x49, 0x65, 0xf8, 0xd3, 0x70, 0xbe, 0x60, 0x38, 0x23, 0x78, 0x88, 0xef, 0x2b,
	0xd4, 0xc6, 0x0f, 0x9c, 0xf9, 0xb7, 0xc1, 0x8d, 0xcf, 0x7f, 0xfe, 0x7e, 0xbd, 0x70, 0x95, 0xaf,
	0x46, 0x66, 0xa8, 0xa3, 0x4f, 0x66, 0x98, 0x81, 0xce, 0x8e, 0xf9, 0x0f, 0x8f, 0xdd, 0x79, 0xa3,
	0x04, 0xa9, 0x9e, 0x2c, 0xfb, 0x98, 0x34, 0x8a, 0xf4, 0x58, 0xef, 0x85, 0x0b, 0xef, 0x00, 0x8c,
	0x34, 0xef, 0xb9, 0x35, 0xbb, 0xc1, 0x8a, 0xf5, 0x5c, 0xe2, 0x17, 0x6b, 0x4f, 0x7e, 0xcc, 0xd6,
	0xf7, 0x71, 0xd0, 0x80, 0x8e, 0xa5, 0x16, 0xd8, 0xb3, 0xbf, 0xbd, 0x40, 0xe1, 0x11, 0xe6, 0x68,
	0x48, 0x05, 0x6b, 0xb6, 0x77, 0x35, 0xb8, 0x64, 0xe7, 0xa3, 0x70, 0xf0, 0xd8, 0xdb, 0xe6, 0x5f,
	0x3c, 0xb6, 0xd1, 0x45, 0x95, 0x4c, 0x13, 0x68, 0x01, 0x6f, 0x25, 0x72, 0xdd, 0x8a, 0x5c, 0x09,
	0x96, 0xad, 0x88, 0x46, 0x95, 0xd4, 0x26, 0xdf, 0x3d, 0xe6, 0x1f, 0x54, 0x3a, 0x3b, 0x84, 0xa9,
	0xd3, 0x78, 0xe6, 0x2a, 0x98, 0x9d, 0x6d, 0xf3, 0x11, 0x4d, 0xba, 0x15, 0x95, 0xce, 0x6a, 0xb7,
	0x9f, 0x1e, 0xdb, 0xdc, 0x45, 0x41, 0x09, 0xce, 0xb0, 0x7b, 0xee, 0x42, 0xcf, 0x4b, 0xb7, 0xf1,
	0x5b, 0xb7, 0x7e, 0xd7, 0x82, 0xcb, 0xd6, 0x2f, 0xb1, 0xd4, 0xda, 0x70, 0xc8, 0x56, 0x76, 0xc1,
	0xc0, 0x58, 0xe8, 0xbe, 0x8b, 0xb5, 0x5f, 0xe5, 0x79, 0x9d, 0xf0, 0x17, 0x7e, 0xf3, 0xcc, 0x6c,
	0x12, 0x30, 0x50, 0x37, 0xff, 0xf2, 0xd8, 0x56, 0x63, 0x53, 0x07, 0x25, 0x15, 0x90, 0xc2, 0xc4,
	0x74, 0xf6, 0x5a, 0xfc, 0xfd, 0x53, 0xf2, 0xa3, 0xf9, 0x84, 0xee, 0x21, 0x6b, 0x51, 0xca, 0x18,
	0x93, 0x1d, 0xcc, 0x69, 0x10, 0xdc, 0xb5, 0xbe, 0xb7, 0xf9, 0xad, 0x89, 0x03, 0x21, 0x2a, 0x4e,
	0x1b, 0x76, 0x9e, 0xbc, 0x7b, 0x94, 0x4a, 0x93, 0x55, 0x71, 0x28, 0xa8, 0x1f, 0x9d, 0xe0, 0x3b,
	0x35, 0x3f, 0x3a, 0xe5, 0x77, 0x46, 0x05, 0x91, 0xbd, 0x10, 0x9d, 0x14, 0x55, 0x27, 0xa5, 0x78,
	0xc9, 0xde, 0x3e, 0xfc, 0x17, 0x00, 0x00, 0xff, 0xff, 0x5c, 0xef, 0x99, 0xbf, 0x97, 0x05, 0x00,
	0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// TransactionServiceClient is the client API for TransactionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TransactionServiceClient interface {
	TransactionHashEndpoint(ctx context.Context, in *TransactionHashEndpointRequest, opts ...grpc.CallOption) (*TX, error)
	UnconfirmedTransactionsEndpoint(ctx context.Context, in *UnconfirmedTransactionsEndpointRequest, opts ...grpc.CallOption) (*TXS, error)
	NewTransactionEndpoint(ctx context.Context, in *TX, opts ...grpc.CallOption) (*TXSkeleton, error)
	SendTransactionEndpoint(ctx context.Context, in *TXSkeleton, opts ...grpc.CallOption) (*TXSkeleton, error)
	PushRawTransactionEndpoint(ctx context.Context, in *PushRawTransactionEndpointRequest, opts ...grpc.CallOption) (*TX, error)
	DecodeRawTransactionEndpoint(ctx context.Context, in *DecodeRawTransactionEndpointRequest, opts ...grpc.CallOption) (*TX, error)
	DataEndpoint(ctx context.Context, in *NullData, opts ...grpc.CallOption) (*NullData, error)
	TransactionPropagationEndpoint(ctx context.Context, in *TransactionPropagationEndpointRequest, opts ...grpc.CallOption) (*DescribedBelow, error)
}

type transactionServiceClient struct {
	cc *grpc.ClientConn
}

func NewTransactionServiceClient(cc *grpc.ClientConn) TransactionServiceClient {
	return &transactionServiceClient{cc}
}

func (c *transactionServiceClient) TransactionHashEndpoint(ctx context.Context, in *TransactionHashEndpointRequest, opts ...grpc.CallOption) (*TX, error) {
	out := new(TX)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.TransactionService/TransactionHashEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) UnconfirmedTransactionsEndpoint(ctx context.Context, in *UnconfirmedTransactionsEndpointRequest, opts ...grpc.CallOption) (*TXS, error) {
	out := new(TXS)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.TransactionService/UnconfirmedTransactionsEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) NewTransactionEndpoint(ctx context.Context, in *TX, opts ...grpc.CallOption) (*TXSkeleton, error) {
	out := new(TXSkeleton)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.TransactionService/NewTransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) SendTransactionEndpoint(ctx context.Context, in *TXSkeleton, opts ...grpc.CallOption) (*TXSkeleton, error) {
	out := new(TXSkeleton)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.TransactionService/SendTransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) PushRawTransactionEndpoint(ctx context.Context, in *PushRawTransactionEndpointRequest, opts ...grpc.CallOption) (*TX, error) {
	out := new(TX)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.TransactionService/PushRawTransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) DecodeRawTransactionEndpoint(ctx context.Context, in *DecodeRawTransactionEndpointRequest, opts ...grpc.CallOption) (*TX, error) {
	out := new(TX)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.TransactionService/DecodeRawTransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) DataEndpoint(ctx context.Context, in *NullData, opts ...grpc.CallOption) (*NullData, error) {
	out := new(NullData)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.TransactionService/DataEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) TransactionPropagationEndpoint(ctx context.Context, in *TransactionPropagationEndpointRequest, opts ...grpc.CallOption) (*DescribedBelow, error) {
	out := new(DescribedBelow)
	err := c.cc.Invoke(ctx, "/fairwaycorp.blockchainprotobuf.TransactionService/TransactionPropagationEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TransactionServiceServer is the server API for TransactionService service.
type TransactionServiceServer interface {
	TransactionHashEndpoint(context.Context, *TransactionHashEndpointRequest) (*TX, error)
	UnconfirmedTransactionsEndpoint(context.Context, *UnconfirmedTransactionsEndpointRequest) (*TXS, error)
	NewTransactionEndpoint(context.Context, *TX) (*TXSkeleton, error)
	SendTransactionEndpoint(context.Context, *TXSkeleton) (*TXSkeleton, error)
	PushRawTransactionEndpoint(context.Context, *PushRawTransactionEndpointRequest) (*TX, error)
	DecodeRawTransactionEndpoint(context.Context, *DecodeRawTransactionEndpointRequest) (*TX, error)
	DataEndpoint(context.Context, *NullData) (*NullData, error)
	TransactionPropagationEndpoint(context.Context, *TransactionPropagationEndpointRequest) (*DescribedBelow, error)
}

func RegisterTransactionServiceServer(s *grpc.Server, srv TransactionServiceServer) {
	s.RegisterService(&_TransactionService_serviceDesc, srv)
}

func _TransactionService_TransactionHashEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransactionHashEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).TransactionHashEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.TransactionService/TransactionHashEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).TransactionHashEndpoint(ctx, req.(*TransactionHashEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_UnconfirmedTransactionsEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UnconfirmedTransactionsEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).UnconfirmedTransactionsEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.TransactionService/UnconfirmedTransactionsEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).UnconfirmedTransactionsEndpoint(ctx, req.(*UnconfirmedTransactionsEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_NewTransactionEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TX)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).NewTransactionEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.TransactionService/NewTransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).NewTransactionEndpoint(ctx, req.(*TX))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_SendTransactionEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TXSkeleton)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).SendTransactionEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.TransactionService/SendTransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).SendTransactionEndpoint(ctx, req.(*TXSkeleton))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_PushRawTransactionEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushRawTransactionEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).PushRawTransactionEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.TransactionService/PushRawTransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).PushRawTransactionEndpoint(ctx, req.(*PushRawTransactionEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_DecodeRawTransactionEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DecodeRawTransactionEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).DecodeRawTransactionEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.TransactionService/DecodeRawTransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).DecodeRawTransactionEndpoint(ctx, req.(*DecodeRawTransactionEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_DataEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NullData)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).DataEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.TransactionService/DataEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).DataEndpoint(ctx, req.(*NullData))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_TransactionPropagationEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransactionPropagationEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).TransactionPropagationEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/fairwaycorp.blockchainprotobuf.TransactionService/TransactionPropagationEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).TransactionPropagationEndpoint(ctx, req.(*TransactionPropagationEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _TransactionService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "fairwaycorp.blockchainprotobuf.TransactionService",
	HandlerType: (*TransactionServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TransactionHashEndpoint",
			Handler:    _TransactionService_TransactionHashEndpoint_Handler,
		},
		{
			MethodName: "UnconfirmedTransactionsEndpoint",
			Handler:    _TransactionService_UnconfirmedTransactionsEndpoint_Handler,
		},
		{
			MethodName: "NewTransactionEndpoint",
			Handler:    _TransactionService_NewTransactionEndpoint_Handler,
		},
		{
			MethodName: "SendTransactionEndpoint",
			Handler:    _TransactionService_SendTransactionEndpoint_Handler,
		},
		{
			MethodName: "PushRawTransactionEndpoint",
			Handler:    _TransactionService_PushRawTransactionEndpoint_Handler,
		},
		{
			MethodName: "DecodeRawTransactionEndpoint",
			Handler:    _TransactionService_DecodeRawTransactionEndpoint_Handler,
		},
		{
			MethodName: "DataEndpoint",
			Handler:    _TransactionService_DataEndpoint_Handler,
		},
		{
			MethodName: "TransactionPropagationEndpoint",
			Handler:    _TransactionService_TransactionPropagationEndpoint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "transactionService.proto",
}
