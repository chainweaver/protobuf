// Code generated by protoc-gen-go. DO NOT EDIT.
// source: addressMessage_Eth.proto

package eth

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type GetBalanceAddressEndpointRequest struct {
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	Address              string               `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *GetBalanceAddressEndpointRequest) Reset()         { *m = GetBalanceAddressEndpointRequest{} }
func (m *GetBalanceAddressEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*GetBalanceAddressEndpointRequest) ProtoMessage()    {}
func (*GetBalanceAddressEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_f42e5195e1588f84, []int{0}
}

func (m *GetBalanceAddressEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetBalanceAddressEndpointRequest.Unmarshal(m, b)
}
func (m *GetBalanceAddressEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetBalanceAddressEndpointRequest.Marshal(b, m, deterministic)
}
func (m *GetBalanceAddressEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetBalanceAddressEndpointRequest.Merge(m, src)
}
func (m *GetBalanceAddressEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_GetBalanceAddressEndpointRequest.Size(m)
}
func (m *GetBalanceAddressEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetBalanceAddressEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetBalanceAddressEndpointRequest proto.InternalMessageInfo

func (m *GetBalanceAddressEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func (m *GetBalanceAddressEndpointRequest) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

type GetAddressEndpointRequest struct {
	Network NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	Address string               `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	// Filters response to only include transactions below before height in the blockchain.
	Before int32 `protobuf:"varint,3,opt,name=before,proto3" json:"before,omitempty"`
	// 	Filters response to only include transactions above after height in the blockchain.
	After int32 `protobuf:"varint,4,opt,name=after,proto3" json:"after,omitempty"`
	// limit sets the minimum number of returned TXRefs; there can be less if there are less than limit TXRefs associated with this address, but there can be more in the rare case of more TXRefs in the block at the bottom of your call. This ensures paging by block height never misses TXRefs. Defaults to 200, maximum is 2000.
	Limit int32 `protobuf:"varint,5,opt,name=limit,proto3" json:"limit,omitempty"`
	// 	If set, only returns the balance and TXRefs that have at least this number of confirmations.
	Confirmations        int32    `protobuf:"varint,6,opt,name=confirmations,proto3" json:"confirmations,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetAddressEndpointRequest) Reset()         { *m = GetAddressEndpointRequest{} }
func (m *GetAddressEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*GetAddressEndpointRequest) ProtoMessage()    {}
func (*GetAddressEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_f42e5195e1588f84, []int{1}
}

func (m *GetAddressEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetAddressEndpointRequest.Unmarshal(m, b)
}
func (m *GetAddressEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetAddressEndpointRequest.Marshal(b, m, deterministic)
}
func (m *GetAddressEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetAddressEndpointRequest.Merge(m, src)
}
func (m *GetAddressEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_GetAddressEndpointRequest.Size(m)
}
func (m *GetAddressEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetAddressEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetAddressEndpointRequest proto.InternalMessageInfo

func (m *GetAddressEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func (m *GetAddressEndpointRequest) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *GetAddressEndpointRequest) GetBefore() int32 {
	if m != nil {
		return m.Before
	}
	return 0
}

func (m *GetAddressEndpointRequest) GetAfter() int32 {
	if m != nil {
		return m.After
	}
	return 0
}

func (m *GetAddressEndpointRequest) GetLimit() int32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *GetAddressEndpointRequest) GetConfirmations() int32 {
	if m != nil {
		return m.Confirmations
	}
	return 0
}

type PostGenerateAddressEndpointRequest struct {
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *PostGenerateAddressEndpointRequest) Reset()         { *m = PostGenerateAddressEndpointRequest{} }
func (m *PostGenerateAddressEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*PostGenerateAddressEndpointRequest) ProtoMessage()    {}
func (*PostGenerateAddressEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_f42e5195e1588f84, []int{2}
}

func (m *PostGenerateAddressEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PostGenerateAddressEndpointRequest.Unmarshal(m, b)
}
func (m *PostGenerateAddressEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PostGenerateAddressEndpointRequest.Marshal(b, m, deterministic)
}
func (m *PostGenerateAddressEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PostGenerateAddressEndpointRequest.Merge(m, src)
}
func (m *PostGenerateAddressEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_PostGenerateAddressEndpointRequest.Size(m)
}
func (m *PostGenerateAddressEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PostGenerateAddressEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PostGenerateAddressEndpointRequest proto.InternalMessageInfo

func (m *PostGenerateAddressEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func init() {
	proto.RegisterType((*GetBalanceAddressEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.eth.GetBalanceAddressEndpointRequest")
	proto.RegisterType((*GetAddressEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.eth.GetAddressEndpointRequest")
	proto.RegisterType((*PostGenerateAddressEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.eth.PostGenerateAddressEndpointRequest")
}

func init() { proto.RegisterFile("addressMessage_Eth.proto", fileDescriptor_f42e5195e1588f84) }

var fileDescriptor_f42e5195e1588f84 = []byte{
	// 307 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x91, 0x41, 0x4b, 0xc3, 0x30,
	0x14, 0xc7, 0xa9, 0xba, 0x0d, 0x03, 0x7a, 0x28, 0xa2, 0xd1, 0x53, 0x29, 0x1e, 0x76, 0x69, 0x0a,
	0x7a, 0xf1, 0x22, 0xb2, 0xc1, 0xd8, 0x49, 0x91, 0x1e, 0xbd, 0x48, 0x9a, 0xbd, 0xb6, 0x61, 0x69,
	0xde, 0x4c, 0xde, 0x98, 0x7e, 0x0b, 0xbf, 0xab, 0x5f, 0x40, 0x96, 0xae, 0x88, 0x78, 0xf0, 0x26,
	0xde, 0xf2, 0xff, 0x3d, 0xde, 0xef, 0x9f, 0x10, 0xc6, 0xe5, 0x62, 0xe1, 0xc0, 0xfb, 0x7b, 0xf0,
	0x5e, 0xd6, 0xf0, 0x3c, 0xa3, 0x46, 0xac, 0x1c, 0x12, 0xc6, 0x69, 0x25, 0xb5, 0xdb, 0xc8, 0x37,
	0x85, 0x6e, 0x25, 0x4a, 0x83, 0x6a, 0xa9, 0x1a, 0xa9, 0x6d, 0x18, 0x96, 0xeb, 0x4a, 0x00, 0x35,
	0x17, 0x67, 0x0a, 0xdb, 0x16, 0xed, 0x8f, 0xe5, 0xf4, 0x3d, 0x62, 0xc9, 0x1c, 0x68, 0x2a, 0x8d,
	0xb4, 0x0a, 0x26, 0x5d, 0xc7, 0xcc, 0x2e, 0x56, 0xa8, 0x2d, 0x15, 0xf0, 0xb2, 0x06, 0x4f, 0x71,
	0xc1, 0x46, 0x16, 0x68, 0x83, 0x6e, 0xc9, 0xa3, 0x24, 0x1a, 0x1f, 0x5f, 0xdd, 0x88, 0xdf, 0x3b,
	0xc5, 0x43, 0xb7, 0x32, 0x31, 0x06, 0x37, 0xda, 0xd6, 0x13, 0xa3, 0xa5, 0x2f, 0x7a, 0x51, 0xcc,
	0xd9, 0x68, 0xf7, 0x22, 0xbe, 0x97, 0x44, 0xe3, 0xc3, 0xa2, 0x8f, 0xe9, 0x47, 0xc4, 0xce, 0xe7,
	0x40, 0xff, 0xe1, 0x2e, 0xf1, 0x29, 0x1b, 0x96, 0x50, 0xa1, 0x03, 0xbe, 0x9f, 0x44, 0xe3, 0x41,
	0xb1, 0x4b, 0xf1, 0x09, 0x1b, 0xc8, 0x8a, 0xc0, 0xf1, 0x83, 0x80, 0xbb, 0xb0, 0xa5, 0x46, 0xb7,
	0x9a, 0xf8, 0xa0, 0xa3, 0x21, 0xc4, 0x97, 0xec, 0x48, 0xa1, 0xad, 0xb4, 0x6b, 0x25, 0x69, 0xb4,
	0x9e, 0x0f, 0xc3, 0xf4, 0x3b, 0x4c, 0x5f, 0x59, 0xfa, 0x88, 0x9e, 0xe6, 0x60, 0xc1, 0x49, 0xfa,
	0xc3, 0x9f, 0x98, 0xde, 0x3d, 0xdd, 0xd6, 0x9a, 0x9a, 0x75, 0x29, 0x14, 0xb6, 0xf9, 0x4e, 0x97,
	0x6d, 0x7d, 0xf9, 0x97, 0x2f, 0xeb, 0x85, 0x79, 0x38, 0xa8, 0xac, 0x06, 0x9b, 0xd5, 0x98, 0x03,
	0x35, 0xe5, 0x30, 0xa0, 0xeb, 0xcf, 0x00, 0x00, 0x00, 0xff, 0xff, 0x50, 0xc5, 0xa5, 0xc9, 0xa3,
	0x02, 0x00, 0x00,
}
