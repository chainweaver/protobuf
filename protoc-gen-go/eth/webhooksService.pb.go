// Code generated by protoc-gen-go. DO NOT EDIT.
// source: webhooksService.proto

package eth // import "github.com/chainweaver/protobuf/protoc-gen-go/eth"

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

// WebHooksServiceClient is the client API for WebHooksService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type WebHooksServiceClient interface {
	CreateWebHookEndpoint(ctx context.Context, in *CreateWebHookEndpointRequest, opts ...grpc.CallOption) (*Event, error)
	ListWebHooksEndpoint(ctx context.Context, in *ListWebHooksEndpointRequest, opts ...grpc.CallOption) (*Events, error)
	WebHookIDEndpoint(ctx context.Context, in *WebHookIDEndpointRequest, opts ...grpc.CallOption) (*Event, error)
	DeleteWebHookEndpoint(ctx context.Context, in *DeleteWebHookEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
}

type webHooksServiceClient struct {
	cc *grpc.ClientConn
}

func NewWebHooksServiceClient(cc *grpc.ClientConn) WebHooksServiceClient {
	return &webHooksServiceClient{cc}
}

func (c *webHooksServiceClient) CreateWebHookEndpoint(ctx context.Context, in *CreateWebHookEndpointRequest, opts ...grpc.CallOption) (*Event, error) {
	out := new(Event)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.eth.WebHooksService/CreateWebHookEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *webHooksServiceClient) ListWebHooksEndpoint(ctx context.Context, in *ListWebHooksEndpointRequest, opts ...grpc.CallOption) (*Events, error) {
	out := new(Events)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.eth.WebHooksService/ListWebHooksEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *webHooksServiceClient) WebHookIDEndpoint(ctx context.Context, in *WebHookIDEndpointRequest, opts ...grpc.CallOption) (*Event, error) {
	out := new(Event)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.eth.WebHooksService/WebHookIDEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *webHooksServiceClient) DeleteWebHookEndpoint(ctx context.Context, in *DeleteWebHookEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.eth.WebHooksService/DeleteWebHookEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// WebHooksServiceServer is the server API for WebHooksService service.
type WebHooksServiceServer interface {
	CreateWebHookEndpoint(context.Context, *CreateWebHookEndpointRequest) (*Event, error)
	ListWebHooksEndpoint(context.Context, *ListWebHooksEndpointRequest) (*Events, error)
	WebHookIDEndpoint(context.Context, *WebHookIDEndpointRequest) (*Event, error)
	DeleteWebHookEndpoint(context.Context, *DeleteWebHookEndpointRequest) (*NullValue, error)
}

func RegisterWebHooksServiceServer(s *grpc.Server, srv WebHooksServiceServer) {
	s.RegisterService(&_WebHooksService_serviceDesc, srv)
}

func _WebHooksService_CreateWebHookEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateWebHookEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WebHooksServiceServer).CreateWebHookEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.eth.WebHooksService/CreateWebHookEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WebHooksServiceServer).CreateWebHookEndpoint(ctx, req.(*CreateWebHookEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WebHooksService_ListWebHooksEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListWebHooksEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WebHooksServiceServer).ListWebHooksEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.eth.WebHooksService/ListWebHooksEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WebHooksServiceServer).ListWebHooksEndpoint(ctx, req.(*ListWebHooksEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WebHooksService_WebHookIDEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WebHookIDEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WebHooksServiceServer).WebHookIDEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.eth.WebHooksService/WebHookIDEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WebHooksServiceServer).WebHookIDEndpoint(ctx, req.(*WebHookIDEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WebHooksService_DeleteWebHookEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteWebHookEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WebHooksServiceServer).DeleteWebHookEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.eth.WebHooksService/DeleteWebHookEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WebHooksServiceServer).DeleteWebHookEndpoint(ctx, req.(*DeleteWebHookEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _WebHooksService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "chainweaver.protobuf.eth.WebHooksService",
	HandlerType: (*WebHooksServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateWebHookEndpoint",
			Handler:    _WebHooksService_CreateWebHookEndpoint_Handler,
		},
		{
			MethodName: "ListWebHooksEndpoint",
			Handler:    _WebHooksService_ListWebHooksEndpoint_Handler,
		},
		{
			MethodName: "WebHookIDEndpoint",
			Handler:    _WebHooksService_WebHookIDEndpoint_Handler,
		},
		{
			MethodName: "DeleteWebHookEndpoint",
			Handler:    _WebHooksService_DeleteWebHookEndpoint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "webhooksService.proto",
}

func init() {
	proto.RegisterFile("webhooksService.proto", fileDescriptor_webhooksService_f51502de83f6a8a2)
}

var fileDescriptor_webhooksService_f51502de83f6a8a2 = []byte{
	// 339 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x91, 0x31, 0x4b, 0xc3, 0x40,
	0x14, 0xc7, 0x89, 0x88, 0x43, 0x16, 0xf1, 0x6c, 0x45, 0x43, 0xa1, 0x25, 0x2e, 0x52, 0x68, 0x0e,
	0x5b, 0x74, 0x70, 0xd4, 0x16, 0x14, 0xd4, 0x41, 0x41, 0xc1, 0xed, 0x92, 0x3e, 0x93, 0xa3, 0xe9,
	0xbd, 0x9a, 0x7b, 0x69, 0x87, 0xd2, 0xc5, 0xdd, 0x41, 0xdd, 0xfd, 0x52, 0x7e, 0x05, 0x37, 0xbf,
	0x84, 0x98, 0x26, 0xa1, 0x62, 0x42, 0x75, 0x0b, 0x2f, 0xff, 0xff, 0xef, 0x7e, 0x77, 0xcf, 0xac,
	0x4e, 0xc0, 0x0d, 0x10, 0x07, 0xfa, 0x1a, 0xa2, 0xb1, 0xf4, 0xc0, 0x19, 0x45, 0x48, 0xc8, 0xb6,
	0xbd, 0x40, 0x48, 0x35, 0x01, 0x31, 0x86, 0x68, 0x3e, 0x72, 0xe3, 0x7b, 0x07, 0x28, 0xb0, 0x6a,
	0x3e, 0xa2, 0x1f, 0x02, 0x17, 0x23, 0xc9, 0x85, 0x52, 0x48, 0x82, 0x24, 0x2a, 0x3d, 0x0f, 0x59,
	0x39, 0xee, 0x02, 0xb4, 0x16, 0x7e, 0x8a, 0xb3, 0x36, 0x3d, 0x1c, 0x0e, 0x51, 0xfd, 0x18, 0xb6,
	0x3f, 0x57, 0xcd, 0xf5, 0x5b, 0x70, 0x4f, 0x17, 0x4e, 0x67, 0xcf, 0x86, 0x59, 0x3d, 0x89, 0x40,
	0x10, 0xa4, 0x7f, 0x7a, 0xaa, 0x3f, 0x42, 0xa9, 0x88, 0x1d, 0x3a, 0x65, 0x4a, 0x4e, 0x61, 0xe1,
	0x0a, 0x1e, 0x62, 0xd0, 0x64, 0xd5, 0xcb, 0x7b, 0xbd, 0x31, 0x28, 0xb2, 0xeb, 0x8f, 0xef, 0x1f,
	0xaf, 0x2b, 0x3b, 0x76, 0x85, 0x03, 0x05, 0x7c, 0xaa, 0x80, 0x26, 0x18, 0x0d, 0x66, 0x3c, 0xb9,
	0xc6, 0x91, 0xd1, 0x64, 0x4f, 0x86, 0x59, 0x39, 0x97, 0x9a, 0x32, 0xd7, 0x5c, 0xe9, 0xa0, 0x1c,
	0x5d, 0x94, 0xcf, 0x8c, 0x1a, 0x4b, 0x8c, 0xb4, 0x5d, 0x4b, 0x94, 0xb6, 0x58, 0xa1, 0x12, 0x7b,
	0x31, 0xcc, 0x8d, 0x94, 0x7d, 0xd6, 0xcd, 0x65, 0xda, 0xe5, 0xd4, 0x5f, 0xe1, 0x3f, 0xbf, 0xcd,
	0x5e, 0x22, 0x62, 0xb3, 0x46, 0x91, 0x08, 0x9f, 0xa6, 0xcb, 0x96, 0xfd, 0x19, 0x7b, 0x33, 0xcc,
	0x6a, 0x17, 0x42, 0xf8, 0xd7, 0xe2, 0x0a, 0x0b, 0x99, 0xdc, 0x6e, 0x79, 0xef, 0x32, 0x0e, 0xc3,
	0x1b, 0x11, 0xc6, 0x90, 0x09, 0x36, 0x97, 0x0a, 0x1e, 0x77, 0xee, 0xf6, 0x7d, 0x49, 0x41, 0xec,
	0x3a, 0x1e, 0x0e, 0xf9, 0x02, 0x9a, 0x67, 0xe8, 0xf9, 0x87, 0xd7, 0xf2, 0x41, 0xb5, 0x7c, 0xfc,
	0x06, 0xba, 0x6b, 0xc9, 0xa8, 0xf3, 0x15, 0x00, 0x00, 0xff, 0xff, 0x2d, 0xdd, 0x71, 0xf0, 0x26,
	0x03, 0x00, 0x00,
}
