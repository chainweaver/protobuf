// Code generated by protoc-gen-go. DO NOT EDIT.
// source: walletService.proto

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

// WalletServiceClient is the client API for WalletService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type WalletServiceClient interface {
	CreateWalletEndpoint(ctx context.Context, in *CreateWalletEndpointRequest, opts ...grpc.CallOption) (*Wallet, error)
	CreateHDWalletEndpoint(ctx context.Context, in *CreateHDWalletEndpointRequest, opts ...grpc.CallOption) (*HDWallet, error)
	ListWalletsEndpoint(ctx context.Context, in *ListWalletsEndpointRequest, opts ...grpc.CallOption) (*ListWallets, error)
	WalletEndpoint(ctx context.Context, in *WalletEndpointRequest, opts ...grpc.CallOption) (*Wallet, error)
	WalletHDEndpoint(ctx context.Context, in *HDWalletEndpointRequest, opts ...grpc.CallOption) (*HDWallet, error)
	AddAddressesToWalletEndpoint(ctx context.Context, in *AddAddressesToWalletEndpointRequest, opts ...grpc.CallOption) (*Wallet, error)
	WalletAddressesEndpoint(ctx context.Context, in *WalletAddressesEndpointRequest, opts ...grpc.CallOption) (*Wallet, error)
	HDWalletAddressesEndpoint(ctx context.Context, in *HDWalletAddressesEndpointRequest, opts ...grpc.CallOption) (*HDChain, error)
	RemoveAddressesFromWalletEndpoint(ctx context.Context, in *RemoveAddressesFromWalletEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
	GenerateAddressInWalletEndpoint(ctx context.Context, in *GenerateAddressInWalletEndpointRequest, opts ...grpc.CallOption) (*WalletAddressKeychain, error)
	DeriveAddressInWalletEndpoint(ctx context.Context, in *DeriveAddressInWalletEndpointRequest, opts ...grpc.CallOption) (*HDWallet, error)
	DeleteWalletEndpoint(ctx context.Context, in *DeleteWalletEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
	DeleteHDWalletHDEndpoint(ctx context.Context, in *DeleteHDWalletEndpointRequest, opts ...grpc.CallOption) (*NullValue, error)
}

type walletServiceClient struct {
	cc *grpc.ClientConn
}

func NewWalletServiceClient(cc *grpc.ClientConn) WalletServiceClient {
	return &walletServiceClient{cc}
}

func (c *walletServiceClient) CreateWalletEndpoint(ctx context.Context, in *CreateWalletEndpointRequest, opts ...grpc.CallOption) (*Wallet, error) {
	out := new(Wallet)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/CreateWalletEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) CreateHDWalletEndpoint(ctx context.Context, in *CreateHDWalletEndpointRequest, opts ...grpc.CallOption) (*HDWallet, error) {
	out := new(HDWallet)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/CreateHDWalletEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) ListWalletsEndpoint(ctx context.Context, in *ListWalletsEndpointRequest, opts ...grpc.CallOption) (*ListWallets, error) {
	out := new(ListWallets)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/ListWalletsEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) WalletEndpoint(ctx context.Context, in *WalletEndpointRequest, opts ...grpc.CallOption) (*Wallet, error) {
	out := new(Wallet)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/WalletEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) WalletHDEndpoint(ctx context.Context, in *HDWalletEndpointRequest, opts ...grpc.CallOption) (*HDWallet, error) {
	out := new(HDWallet)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/WalletHDEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) AddAddressesToWalletEndpoint(ctx context.Context, in *AddAddressesToWalletEndpointRequest, opts ...grpc.CallOption) (*Wallet, error) {
	out := new(Wallet)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/AddAddressesToWalletEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) WalletAddressesEndpoint(ctx context.Context, in *WalletAddressesEndpointRequest, opts ...grpc.CallOption) (*Wallet, error) {
	out := new(Wallet)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/WalletAddressesEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) HDWalletAddressesEndpoint(ctx context.Context, in *HDWalletAddressesEndpointRequest, opts ...grpc.CallOption) (*HDChain, error) {
	out := new(HDChain)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/HDWalletAddressesEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) RemoveAddressesFromWalletEndpoint(ctx context.Context, in *RemoveAddressesFromWalletEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/RemoveAddressesFromWalletEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) GenerateAddressInWalletEndpoint(ctx context.Context, in *GenerateAddressInWalletEndpointRequest, opts ...grpc.CallOption) (*WalletAddressKeychain, error) {
	out := new(WalletAddressKeychain)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/GenerateAddressInWalletEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) DeriveAddressInWalletEndpoint(ctx context.Context, in *DeriveAddressInWalletEndpointRequest, opts ...grpc.CallOption) (*HDWallet, error) {
	out := new(HDWallet)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/DeriveAddressInWalletEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) DeleteWalletEndpoint(ctx context.Context, in *DeleteWalletEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/DeleteWalletEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *walletServiceClient) DeleteHDWalletHDEndpoint(ctx context.Context, in *DeleteHDWalletEndpointRequest, opts ...grpc.CallOption) (*NullValue, error) {
	out := new(NullValue)
	err := c.cc.Invoke(ctx, "/chainweaver.protobuf.btc.WalletService/DeleteHDWalletHDEndpoint", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// WalletServiceServer is the server API for WalletService service.
type WalletServiceServer interface {
	CreateWalletEndpoint(context.Context, *CreateWalletEndpointRequest) (*Wallet, error)
	CreateHDWalletEndpoint(context.Context, *CreateHDWalletEndpointRequest) (*HDWallet, error)
	ListWalletsEndpoint(context.Context, *ListWalletsEndpointRequest) (*ListWallets, error)
	WalletEndpoint(context.Context, *WalletEndpointRequest) (*Wallet, error)
	WalletHDEndpoint(context.Context, *HDWalletEndpointRequest) (*HDWallet, error)
	AddAddressesToWalletEndpoint(context.Context, *AddAddressesToWalletEndpointRequest) (*Wallet, error)
	WalletAddressesEndpoint(context.Context, *WalletAddressesEndpointRequest) (*Wallet, error)
	HDWalletAddressesEndpoint(context.Context, *HDWalletAddressesEndpointRequest) (*HDChain, error)
	RemoveAddressesFromWalletEndpoint(context.Context, *RemoveAddressesFromWalletEndpointRequest) (*NullValue, error)
	GenerateAddressInWalletEndpoint(context.Context, *GenerateAddressInWalletEndpointRequest) (*WalletAddressKeychain, error)
	DeriveAddressInWalletEndpoint(context.Context, *DeriveAddressInWalletEndpointRequest) (*HDWallet, error)
	DeleteWalletEndpoint(context.Context, *DeleteWalletEndpointRequest) (*NullValue, error)
	DeleteHDWalletHDEndpoint(context.Context, *DeleteHDWalletEndpointRequest) (*NullValue, error)
}

func RegisterWalletServiceServer(s *grpc.Server, srv WalletServiceServer) {
	s.RegisterService(&_WalletService_serviceDesc, srv)
}

func _WalletService_CreateWalletEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateWalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).CreateWalletEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/CreateWalletEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).CreateWalletEndpoint(ctx, req.(*CreateWalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_CreateHDWalletEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateHDWalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).CreateHDWalletEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/CreateHDWalletEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).CreateHDWalletEndpoint(ctx, req.(*CreateHDWalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_ListWalletsEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListWalletsEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).ListWalletsEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/ListWalletsEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).ListWalletsEndpoint(ctx, req.(*ListWalletsEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_WalletEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).WalletEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/WalletEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).WalletEndpoint(ctx, req.(*WalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_WalletHDEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HDWalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).WalletHDEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/WalletHDEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).WalletHDEndpoint(ctx, req.(*HDWalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_AddAddressesToWalletEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddAddressesToWalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).AddAddressesToWalletEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/AddAddressesToWalletEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).AddAddressesToWalletEndpoint(ctx, req.(*AddAddressesToWalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_WalletAddressesEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WalletAddressesEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).WalletAddressesEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/WalletAddressesEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).WalletAddressesEndpoint(ctx, req.(*WalletAddressesEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_HDWalletAddressesEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HDWalletAddressesEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).HDWalletAddressesEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/HDWalletAddressesEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).HDWalletAddressesEndpoint(ctx, req.(*HDWalletAddressesEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_RemoveAddressesFromWalletEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveAddressesFromWalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).RemoveAddressesFromWalletEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/RemoveAddressesFromWalletEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).RemoveAddressesFromWalletEndpoint(ctx, req.(*RemoveAddressesFromWalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_GenerateAddressInWalletEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GenerateAddressInWalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).GenerateAddressInWalletEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/GenerateAddressInWalletEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).GenerateAddressInWalletEndpoint(ctx, req.(*GenerateAddressInWalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_DeriveAddressInWalletEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeriveAddressInWalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).DeriveAddressInWalletEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/DeriveAddressInWalletEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).DeriveAddressInWalletEndpoint(ctx, req.(*DeriveAddressInWalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_DeleteWalletEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteWalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).DeleteWalletEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/DeleteWalletEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).DeleteWalletEndpoint(ctx, req.(*DeleteWalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WalletService_DeleteHDWalletHDEndpoint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteHDWalletEndpointRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WalletServiceServer).DeleteHDWalletHDEndpoint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chainweaver.protobuf.btc.WalletService/DeleteHDWalletHDEndpoint",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WalletServiceServer).DeleteHDWalletHDEndpoint(ctx, req.(*DeleteHDWalletEndpointRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _WalletService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "chainweaver.protobuf.btc.WalletService",
	HandlerType: (*WalletServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateWalletEndpoint",
			Handler:    _WalletService_CreateWalletEndpoint_Handler,
		},
		{
			MethodName: "CreateHDWalletEndpoint",
			Handler:    _WalletService_CreateHDWalletEndpoint_Handler,
		},
		{
			MethodName: "ListWalletsEndpoint",
			Handler:    _WalletService_ListWalletsEndpoint_Handler,
		},
		{
			MethodName: "WalletEndpoint",
			Handler:    _WalletService_WalletEndpoint_Handler,
		},
		{
			MethodName: "WalletHDEndpoint",
			Handler:    _WalletService_WalletHDEndpoint_Handler,
		},
		{
			MethodName: "AddAddressesToWalletEndpoint",
			Handler:    _WalletService_AddAddressesToWalletEndpoint_Handler,
		},
		{
			MethodName: "WalletAddressesEndpoint",
			Handler:    _WalletService_WalletAddressesEndpoint_Handler,
		},
		{
			MethodName: "HDWalletAddressesEndpoint",
			Handler:    _WalletService_HDWalletAddressesEndpoint_Handler,
		},
		{
			MethodName: "RemoveAddressesFromWalletEndpoint",
			Handler:    _WalletService_RemoveAddressesFromWalletEndpoint_Handler,
		},
		{
			MethodName: "GenerateAddressInWalletEndpoint",
			Handler:    _WalletService_GenerateAddressInWalletEndpoint_Handler,
		},
		{
			MethodName: "DeriveAddressInWalletEndpoint",
			Handler:    _WalletService_DeriveAddressInWalletEndpoint_Handler,
		},
		{
			MethodName: "DeleteWalletEndpoint",
			Handler:    _WalletService_DeleteWalletEndpoint_Handler,
		},
		{
			MethodName: "DeleteHDWalletHDEndpoint",
			Handler:    _WalletService_DeleteHDWalletHDEndpoint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "walletService.proto",
}

func init() { proto.RegisterFile("walletService.proto", fileDescriptor_walletService_16d840365f8d6e6d) }

var fileDescriptor_walletService_16d840365f8d6e6d = []byte{
	// 622 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x95, 0xbb, 0x6e, 0x13, 0x4d,
	0x14, 0xc7, 0x35, 0x5f, 0xf1, 0x15, 0x23, 0x81, 0x60, 0x12, 0x05, 0xc7, 0xe4, 0xe6, 0x85, 0x08,
	0xb0, 0x88, 0x07, 0x27, 0x84, 0xa0, 0x70, 0x11, 0x49, 0x0c, 0x04, 0x71, 0x29, 0x02, 0x02, 0x89,
	0x6e, 0xbc, 0x7b, 0x58, 0xaf, 0xd8, 0x9d, 0x31, 0xbb, 0x63, 0x5b, 0x28, 0x4a, 0x43, 0x49, 0x99,
	0x54, 0x88, 0x0e, 0x24, 0x4a, 0x1a, 0x6a, 0x0a, 0x1e, 0x01, 0xf1, 0x0a, 0x3c, 0x08, 0xda, 0x1d,
	0x8f, 0x65, 0x36, 0x1e, 0xcf, 0x9a, 0xce, 0x1a, 0x9f, 0xff, 0xf9, 0xff, 0xce, 0x45, 0x67, 0xf1,
	0x54, 0x8f, 0x85, 0x21, 0xc8, 0xa7, 0x10, 0x77, 0x03, 0x17, 0x6a, 0xed, 0x58, 0x48, 0x41, 0x4a,
	0x6e, 0x8b, 0x05, 0xbc, 0x07, 0xac, 0x0b, 0xb1, 0x7a, 0x6a, 0x76, 0x5e, 0xd5, 0x9a, 0xd2, 0x2d,
	0xcf, 0xf9, 0x42, 0xf8, 0x21, 0x50, 0xd6, 0x0e, 0x28, 0xe3, 0x5c, 0x48, 0x26, 0x03, 0xc1, 0x13,
	0x15, 0x54, 0xee, 0x27, 0x7b, 0x0c, 0x49, 0xc2, 0x7c, 0xd0, 0x8f, 0xae, 0x88, 0x22, 0xc1, 0xff,
	0x7a, 0x5c, 0xfd, 0x7c, 0x1a, 0x9f, 0x78, 0x31, 0xec, 0x4c, 0x0e, 0x11, 0x9e, 0xde, 0x89, 0x81,
	0x49, 0x50, 0xef, 0x77, 0xb9, 0xd7, 0x16, 0x01, 0x97, 0x64, 0xbd, 0x66, 0xa2, 0xa9, 0x8d, 0x8a,
	0xdf, 0x83, 0x37, 0x1d, 0x48, 0x64, 0x79, 0xc9, 0x2c, 0x53, 0x02, 0xa7, 0xf2, 0xee, 0xd7, 0xef,
	0xa3, 0xff, 0xce, 0x3a, 0x33, 0xb4, 0x29, 0x5d, 0xba, 0xcf, 0x41, 0xf6, 0x44, 0xfc, 0xfa, 0x80,
	0xaa, 0x22, 0x92, 0x4d, 0x54, 0x25, 0x1f, 0x11, 0x9e, 0x51, 0x26, 0xbb, 0x8d, 0x1c, 0xd6, 0x86,
	0x0d, 0x2b, 0xaf, 0xd0, 0x60, 0x8e, 0x59, 0xa8, 0x25, 0xce, 0xf9, 0x0c, 0x6d, 0xc1, 0x99, 0x1d,
	0x8d, 0x46, 0x5b, 0x5e, 0x4a, 0x77, 0x88, 0xf0, 0xd4, 0xa3, 0x20, 0x91, 0x4a, 0x94, 0x0c, 0xd0,
	0xae, 0x9a, 0x1d, 0x46, 0x84, 0x6b, 0xae, 0xe5, 0x42, 0x2a, 0x67, 0x21, 0x43, 0x2b, 0x11, 0x43,
	0xd7, 0xc8, 0x7b, 0x84, 0x4f, 0xe6, 0x5a, 0x45, 0x6d, 0xa3, 0x98, 0x7c, 0x76, 0xcb, 0x19, 0xc5,
	0x22, 0x99, 0x37, 0x34, 0x68, 0x9f, 0xb3, 0x08, 0x0e, 0xc8, 0x11, 0xc2, 0xa7, 0x94, 0x62, 0xb7,
	0x31, 0xc0, 0xa9, 0xdb, 0x07, 0xf0, 0x2f, 0x33, 0xbb, 0x98, 0x21, 0x39, 0x64, 0xc9, 0x38, 0x33,
	0x4d, 0xf5, 0x0d, 0xe1, 0xb9, 0x2d, 0xcf, 0xdb, 0xf2, 0xbc, 0x18, 0x92, 0x04, 0x92, 0x67, 0x22,
	0xd7, 0xb0, 0x5b, 0x66, 0xbb, 0x71, 0xba, 0xe2, 0xed, 0x5b, 0xcd, 0x58, 0x2f, 0x3b, 0x17, 0xc6,
	0xb6, 0x8f, 0x32, 0xed, 0x94, 0x6e, 0xdb, 0x17, 0x84, 0xcf, 0x28, 0xf9, 0x00, 0x60, 0x00, 0x7c,
	0xdd, 0xe6, 0x78, 0x4c, 0x52, 0x9c, 0x95, 0x66, 0xac, 0x97, 0x48, 0x51, 0x56, 0xf2, 0x15, 0xe1,
	0x59, 0x3d, 0x95, 0xe3, 0xa8, 0x9b, 0xf6, 0x51, 0x1a, 0x61, 0x2b, 0xe3, 0xb4, 0x3b, 0xe9, 0x5f,
	0xba, 0xb3, 0xa4, 0x6a, 0xdb, 0x82, 0x21, 0xe0, 0xef, 0x08, 0x57, 0xf6, 0x20, 0x12, 0x5d, 0x18,
	0x38, 0xdf, 0x8b, 0x45, 0x94, 0x5b, 0x8a, 0x6d, 0xb3, 0xb9, 0x55, 0xac, 0x0b, 0x38, 0x67, 0xce,
	0xf1, 0xa4, 0x13, 0x86, 0xcf, 0x59, 0xd8, 0x01, 0xdd, 0xf0, 0x6a, 0xe1, 0x86, 0xff, 0x44, 0x78,
	0xf1, 0x3e, 0x70, 0x88, 0x99, 0xd4, 0x10, 0x0f, 0x78, 0x8e, 0xfe, 0x8e, 0xd9, 0xd9, 0x22, 0xd5,
	0xec, 0xb4, 0xe0, 0x8e, 0x3d, 0x84, 0xb7, 0x59, 0xa0, 0x73, 0x23, 0xab, 0x63, 0xdd, 0xb9, 0x52,
	0xb0, 0x0e, 0xea, 0xf7, 0x41, 0xd2, 0x6d, 0xff, 0x81, 0xf0, 0x7c, 0x03, 0xe2, 0xa0, 0x6b, 0xac,
	0xe8, 0xb6, 0x99, 0x67, 0xac, 0x70, 0x92, 0x9b, 0x72, 0x33, 0x2b, 0xe1, 0x9a, 0x53, 0x2f, 0xbe,
	0x4d, 0xd4, 0xcb, 0xcc, 0xd3, 0x1a, 0x3e, 0x20, 0x3c, 0xdd, 0x80, 0x10, 0x26, 0xf9, 0xa4, 0x8e,
	0x8a, 0x9f, 0x68, 0x7b, 0xfa, 0x97, 0xb9, 0x6a, 0xb9, 0xcc, 0x9f, 0x10, 0x2e, 0x29, 0x2f, 0x5d,
	0xec, 0xd0, 0x85, 0xde, 0xb0, 0xf1, 0x99, 0xee, 0x74, 0x21, 0xc2, 0xfe, 0xa1, 0xae, 0x5a, 0x0f,
	0xf5, 0xf6, 0xda, 0xcb, 0xba, 0x1f, 0xc8, 0x56, 0xa7, 0x59, 0x73, 0x45, 0x44, 0x87, 0x52, 0x53,
	0x9d, 0x5a, 0xfd, 0x70, 0x57, 0x7c, 0xe0, 0x2b, 0xbe, 0x48, 0x13, 0x36, 0xff, 0xcf, 0x9e, 0xd6,
	0xfe, 0x04, 0x00, 0x00, 0xff, 0xff, 0xf1, 0x1b, 0x54, 0x34, 0x5a, 0x09, 0x00, 0x00,
}
