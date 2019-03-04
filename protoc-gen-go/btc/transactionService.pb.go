// Code generated by protoc-gen-go. DO NOT EDIT.
// source: transactionService.proto

package btc // import "github.com/chainweaver/protobuf/protoc-gen-go/btc"

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

// TransactionServiceClient is the client API for TransactionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TransactionServiceClient interface {
	TransactionHashEndpoint(ctx context.Context, in *TransactionHashEndpointRequest, opts ...grpc.CallOption) (*TX, error)
	UnconfirmedTransactionsEndpoint(ctx context.Context, in *UnconfirmedTransactionsEndpointRequest, opts ...grpc.CallOption) (*TXs, error)
	CreateTransactionEndpoint(ctx context.Context, in *CreateTransactionEndpointRequest, opts ...grpc.CallOption) (*TXSkeleton, error)
	SendTransactionEndpoint(ctx context.Context, in *SendTransactionEndpointRequest, opts ...grpc.CallOption) (*TXSkeleton, error)
	PushRawTransactionEndpoint(ctx context.Context, in *PushRawTransactionEndpointRequest, opts ...grpc.CallOption) (*TX, error)
	DecodeRawTransactionEndpoint(ctx context.Context, in *DecodeRawTransactionEndpointRequest, opts ...grpc.CallOption) (*TX, error)
	DataEndpoint(ctx context.Context, in *DataEndpointRequest, opts ...grpc.CallOption) (*NullData, error)
	TransactionPropagationEndpoint(ctx context.Context, in *TransactionPropagationEndpointRequest, opts ...grpc.CallOption) (*TXPropagation, error)
}

type transactionServiceClient struct {
	cc *grpc.ClientConn
}

func NewTransactionServiceClient(cc *grpc.ClientConn) TransactionServiceClient {
	return &transactionServiceClient{cc}
}

func (c *transactionServiceClient) TransactionHashEndpoint(ctx context.Context, in *TransactionHashEndpointRequest, opts ...grpc.CallOption) (*TX, error) {
	out := new(TX)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.TransactionService/TransactionHashEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) UnconfirmedTransactionsEndpoint(ctx context.Context, in *UnconfirmedTransactionsEndpointRequest, opts ...grpc.CallOption) (*TXs, error) {
	out := new(TXs)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.TransactionService/UnconfirmedTransactionsEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) CreateTransactionEndpoint(ctx context.Context, in *CreateTransactionEndpointRequest, opts ...grpc.CallOption) (*TXSkeleton, error) {
	out := new(TXSkeleton)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.TransactionService/CreateTransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) SendTransactionEndpoint(ctx context.Context, in *SendTransactionEndpointRequest, opts ...grpc.CallOption) (*TXSkeleton, error) {
	out := new(TXSkeleton)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.TransactionService/SendTransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) PushRawTransactionEndpoint(ctx context.Context, in *PushRawTransactionEndpointRequest, opts ...grpc.CallOption) (*TX, error) {
	out := new(TX)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.TransactionService/PushRawTransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) DecodeRawTransactionEndpoint(ctx context.Context, in *DecodeRawTransactionEndpointRequest, opts ...grpc.CallOption) (*TX, error) {
	out := new(TX)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.TransactionService/DecodeRawTransactionEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) DataEndpoint(ctx context.Context, in *DataEndpointRequest, opts ...grpc.CallOption) (*NullData, error) {
	out := new(NullData)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.TransactionService/DataEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transactionServiceClient) TransactionPropagationEndpoint(ctx context.Context, in *TransactionPropagationEndpointRequest, opts ...grpc.CallOption) (*TXPropagation, error) {
	out := new(TXPropagation)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.TransactionService/TransactionPropagationEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TransactionServiceServer is the server API for TransactionService service.
type TransactionServiceServer interface {
	TransactionHashEndpoint(context.Context, *TransactionHashEndpointRequest) (*TX, error)
	UnconfirmedTransactionsEndpoint(context.Context, *UnconfirmedTransactionsEndpointRequest) (*TXs, error)
	CreateTransactionEndpoint(context.Context, *CreateTransactionEndpointRequest) (*TXSkeleton, error)
	SendTransactionEndpoint(context.Context, *SendTransactionEndpointRequest) (*TXSkeleton, error)
	PushRawTransactionEndpoint(context.Context, *PushRawTransactionEndpointRequest) (*TX, error)
	DecodeRawTransactionEndpoint(context.Context, *DecodeRawTransactionEndpointRequest) (*TX, error)
	DataEndpoint(context.Context, *DataEndpointRequest) (*NullData, error)
	TransactionPropagationEndpoint(context.Context, *TransactionPropagationEndpointRequest) (*TXPropagation, error)
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
		FullMethod: "/chainweaver.protobuf.btc.TransactionService/TransactionHashEndpoint",
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
		FullMethod: "/chainweaver.protobuf.btc.TransactionService/UnconfirmedTransactionsEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).UnconfirmedTransactionsEndpoint(ctx, req.(*UnconfirmedTransactionsEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_CreateTransactionEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateTransactionEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).CreateTransactionEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.TransactionService/CreateTransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).CreateTransactionEndpoint(ctx, req.(*CreateTransactionEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_SendTransactionEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendTransactionEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).SendTransactionEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.TransactionService/SendTransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).SendTransactionEndpoint(ctx, req.(*SendTransactionEndpointRequest))
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
		FullMethod: "/chainweaver.protobuf.btc.TransactionService/PushRawTransactionEndpoint",
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
		FullMethod: "/chainweaver.protobuf.btc.TransactionService/DecodeRawTransactionEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).DecodeRawTransactionEndpoint(ctx, req.(*DecodeRawTransactionEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransactionService_DataEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DataEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransactionServiceServer).DataEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.TransactionService/DataEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).DataEndpoint(ctx, req.(*DataEndpointRequest))
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
		FullMethod: "/chainweaver.protobuf.btc.TransactionService/TransactionPropagationEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransactionServiceServer).TransactionPropagationEndpoint(ctx, req.(*TransactionPropagationEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _TransactionService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "chainweaver.protobuf.btc.TransactionService",
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
			MethodName: "CreateTransactionEndpoint",
			Handler:    _TransactionService_CreateTransactionEndpoint_Handler,
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

func init() {
	proto.RegisterFile("transactionService.proto", fileDescriptor_transactionService_5279faab1ecce616)
}

var fileDescriptor_transactionService_5279faab1ecce616 = []byte{
	// 484 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0xd4, 0x41, 0x6b, 0xd4, 0x40,
	0x14, 0x07, 0x70, 0xc6, 0x83, 0x87, 0xc1, 0xd3, 0x28, 0x6e, 0x9b, 0x6e, 0x2b, 0x8e, 0x85, 0xa2,
	0xb0, 0x19, 0xb4, 0x17, 0xa9, 0x88, 0xa2, 0x15, 0xbc, 0x28, 0xa5, 0xab, 0x20, 0xde, 0x5e, 0x26,
	0xaf, 0x49, 0xe8, 0xee, 0x4c, 0xcc, 0x4c, 0xba, 0x85, 0xd2, 0x8b, 0xe0, 0x27, 0x10, 0x04, 0x11,
	0x45, 0x3f, 0x87, 0x1f, 0xc3, 0xaf, 0xe0, 0x07, 0x91, 0x64, 0xcd, 0x3a, 0xda, 0xcc, 0xb8, 0xbd,
	0x85, 0xc7, 0xfc, 0xdf, 0xfb, 0xe5, 0x25, 0x0c, 0x5d, 0xb1, 0x15, 0x28, 0x03, 0xd2, 0x16, 0x5a,
	0x8d, 0xb1, 0x3a, 0x2a, 0x24, 0xc6, 0x65, 0xa5, 0xad, 0x66, 0x2b, 0x32, 0x87, 0x42, 0xcd, 0x10,
	0x8e, 0xb0, 0x9a, 0x97, 0x92, 0xfa, 0x20, 0x4e, 0xac, 0x8c, 0x86, 0x99, 0xd6, 0xd9, 0x04, 0x05,
	0x94, 0x85, 0x00, 0xa5, 0xb4, 0x85, 0x26, 0x6d, 0xe6, 0x87, 0x22, 0xb7, 0xe3, 0x33, 0x34, 0x06,
	0xb2, 0xdf, 0x1d, 0xa3, 0xcb, 0x52, 0x4f, 0xa7, 0xff, 0x14, 0xef, 0x7c, 0xa4, 0x94, 0xbd, 0x38,
	0x63, 0x60, 0x1f, 0x08, 0x1d, 0x38, 0xe5, 0xa7, 0x60, 0xf2, 0x27, 0x2a, 0x2d, 0x75, 0xa1, 0x2c,
	0xbb, 0x1b, 0xfb, 0x68, 0xb1, 0x27, 0xb2, 0x8f, 0x6f, 0x6a, 0x34, 0x36, 0x1a, 0x06, 0x92, 0xaf,
	0xf8, 0x8d, 0xb7, 0x3f, 0x7e, 0xbe, 0xbf, 0xb0, 0xce, 0xd6, 0x44, 0x62, 0xa5, 0x38, 0x51, 0x68,
	0x67, 0xba, 0x3a, 0x3c, 0x15, 0xf6, 0xd8, 0x88, 0x13, 0x7b, 0x9c, 0x83, 0xc9, 0x4f, 0xd9, 0x17,
	0x42, 0xaf, 0xbd, 0x54, 0x52, 0xab, 0x83, 0xa2, 0x9a, 0x62, 0xea, 0x0c, 0x34, 0x0b, 0xe0, 0x43,
	0xff, 0x98, 0xff, 0x44, 0x3b, 0xe8, 0x7a, 0x08, 0x6a, 0x78, 0xd4, 0x4a, 0xaf, 0x30, 0x76, 0x56,
	0xca, 0xbe, 0x12, 0xba, 0xfa, 0xb8, 0x42, 0xb0, 0xe8, 0x0c, 0x58, 0xd0, 0x76, 0xfc, 0x8d, 0xbd,
	0xa1, 0x0e, 0xb5, 0x19, 0x42, 0x8d, 0x0f, 0x71, 0x82, 0x56, 0x2b, 0x7e, 0xbd, 0xb5, 0xad, 0xf1,
	0xab, 0x3d, 0x5b, 0x54, 0x38, 0xdb, 0x21, 0xb7, 0xd8, 0x67, 0x42, 0x07, 0x63, 0x54, 0x69, 0x1f,
	0x30, 0xf0, 0x71, 0x3d, 0x91, 0xf3, 0xf1, 0x78, 0xcb, 0x1b, 0xf2, 0x41, 0x0f, 0xcf, 0xa0, 0x4a,
	0x1b, 0xdf, 0x27, 0x42, 0xa3, 0xbd, 0xda, 0xe4, 0xfb, 0x30, 0xeb, 0x23, 0xde, 0xf3, 0x0f, 0xf2,
	0xa7, 0x96, 0xfb, 0x05, 0x43, 0xba, 0xb2, 0x36, 0x79, 0xa3, 0xfb, 0x46, 0xe8, 0x70, 0x17, 0xa5,
	0x4e, 0xd1, 0xe3, 0xbb, 0xef, 0x1f, 0x11, 0xca, 0x2d, 0x27, 0xdc, 0x6c, 0x85, 0x1b, 0x7c, 0xb5,
	0x47, 0x98, 0xb6, 0xdd, 0x1b, 0xe3, 0x3b, 0x42, 0x2f, 0xed, 0x82, 0x85, 0x85, 0x69, 0x14, 0x30,
	0x39, 0xe7, 0x3a, 0x03, 0xf7, 0x1f, 0x7f, 0x5e, 0x4f, 0x26, 0x4d, 0x24, 0xb8, 0xab, 0x14, 0x2c,
	0x34, 0x8e, 0xef, 0x84, 0x6e, 0x38, 0xaf, 0xba, 0x57, 0xe9, 0x12, 0x32, 0xf8, 0x6b, 0x5b, 0x0f,
	0x96, 0xba, 0x4d, 0x7a, 0x92, 0x9d, 0x75, 0x2b, 0xb4, 0x2f, 0x27, 0xc7, 0x45, 0x0b, 0xbe, 0xc9,
	0xb6, 0x02, 0xf7, 0x8b, 0x28, 0xff, 0x04, 0x1e, 0x6d, 0xbf, 0xbe, 0x9d, 0x15, 0x36, 0xaf, 0x93,
	0x58, 0xea, 0xa9, 0x70, 0xa6, 0x88, 0x6e, 0xca, 0xfc, 0x41, 0x8e, 0x32, 0x54, 0xa3, 0x4c, 0x37,
	0x7d, 0x93, 0x8b, 0x6d, 0x69, 0xfb, 0x57, 0x00, 0x00, 0x00, 0xff, 0xff, 0xca, 0xa8, 0x60, 0xad,
	0xda, 0x05, 0x00, 0x00,
}
