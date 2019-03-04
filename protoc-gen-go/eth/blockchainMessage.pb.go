// Code generated by protoc-gen-go. DO NOT EDIT.
// source: blockchainMessage.proto

package eth // import "github.com/chainweaver/protobuf/protoc-gen-go/eth"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger/options"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type ChainEndpointRequest struct {
	// network
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *ChainEndpointRequest) Reset()         { *m = ChainEndpointRequest{} }
func (m *ChainEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*ChainEndpointRequest) ProtoMessage()    {}
func (*ChainEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_blockchainMessage_f3d3b727d161ef35, []int{0}
}
func (m *ChainEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChainEndpointRequest.Unmarshal(m, b)
}
func (m *ChainEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChainEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *ChainEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChainEndpointRequest.Merge(dst, src)
}
func (m *ChainEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_ChainEndpointRequest.Size(m)
}
func (m *ChainEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ChainEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ChainEndpointRequest proto.InternalMessageInfo

func (m *ChainEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

type BlockHashEndpointRequest struct {
	// network
	Network NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	// String representing the hash of the block you’re interested in querying, for example: `0000000000000000189bba3564a63772107b5673c940c16f12662b3e8546b412`
	BlockHash string `protobuf:"bytes,2,opt,name=block_hash,json=blockHash,proto3" json:"block_hash,omitempty"`
	// Filters response to only include transaction hashes after txstart in the block.
	Txstart int32 `protobuf:"varint,3,opt,name=txstart,proto3" json:"txstart,omitempty"`
	// Filters response to only include a maximum of limit transactions hashes in the block. Maximum value allowed is 500.
	Limit                int32    `protobuf:"varint,4,opt,name=limit,proto3" json:"limit,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BlockHashEndpointRequest) Reset()         { *m = BlockHashEndpointRequest{} }
func (m *BlockHashEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*BlockHashEndpointRequest) ProtoMessage()    {}
func (*BlockHashEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_blockchainMessage_f3d3b727d161ef35, []int{1}
}
func (m *BlockHashEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BlockHashEndpointRequest.Unmarshal(m, b)
}
func (m *BlockHashEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BlockHashEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *BlockHashEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BlockHashEndpointRequest.Merge(dst, src)
}
func (m *BlockHashEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_BlockHashEndpointRequest.Size(m)
}
func (m *BlockHashEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_BlockHashEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_BlockHashEndpointRequest proto.InternalMessageInfo

func (m *BlockHashEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func (m *BlockHashEndpointRequest) GetBlockHash() string {
	if m != nil {
		return m.BlockHash
	}
	return ""
}

func (m *BlockHashEndpointRequest) GetTxstart() int32 {
	if m != nil {
		return m.Txstart
	}
	return 0
}

func (m *BlockHashEndpointRequest) GetLimit() int32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

type BlockHeightEndpointRequest struct {
	// network
	Network NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	// Integer representing the height of the block you’re interested in querying, for example: `1500000`
	BlockHeight string `protobuf:"bytes,2,opt,name=block_height,json=blockHeight,proto3" json:"block_height,omitempty"`
	// Filters response to only include transaction hashes after txstart in the block.
	Txstart int32 `protobuf:"varint,3,opt,name=txstart,proto3" json:"txstart,omitempty"`
	// Filters response to only include a maximum of limit transactions hashes in the block. Maximum value allowed is 500.
	Limit                int32    `protobuf:"varint,4,opt,name=limit,proto3" json:"limit,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BlockHeightEndpointRequest) Reset()         { *m = BlockHeightEndpointRequest{} }
func (m *BlockHeightEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*BlockHeightEndpointRequest) ProtoMessage()    {}
func (*BlockHeightEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_blockchainMessage_f3d3b727d161ef35, []int{2}
}
func (m *BlockHeightEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BlockHeightEndpointRequest.Unmarshal(m, b)
}
func (m *BlockHeightEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BlockHeightEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *BlockHeightEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BlockHeightEndpointRequest.Merge(dst, src)
}
func (m *BlockHeightEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_BlockHeightEndpointRequest.Size(m)
}
func (m *BlockHeightEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_BlockHeightEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_BlockHeightEndpointRequest proto.InternalMessageInfo

func (m *BlockHeightEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func (m *BlockHeightEndpointRequest) GetBlockHeight() string {
	if m != nil {
		return m.BlockHeight
	}
	return ""
}

func (m *BlockHeightEndpointRequest) GetTxstart() int32 {
	if m != nil {
		return m.Txstart
	}
	return 0
}

func (m *BlockHeightEndpointRequest) GetLimit() int32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func init() {
	proto.RegisterType((*ChainEndpointRequest)(nil), "chainweaver.protobuf.eth.ChainEndpointRequest")
	proto.RegisterType((*BlockHashEndpointRequest)(nil), "chainweaver.protobuf.eth.BlockHashEndpointRequest")
	proto.RegisterType((*BlockHeightEndpointRequest)(nil), "chainweaver.protobuf.eth.BlockHeightEndpointRequest")
}

func init() {
	proto.RegisterFile("blockchainMessage.proto", fileDescriptor_blockchainMessage_f3d3b727d161ef35)
}

var fileDescriptor_blockchainMessage_f3d3b727d161ef35 = []byte{
	// 327 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x92, 0xb1, 0x4e, 0xc3, 0x30,
	0x14, 0x45, 0x65, 0x68, 0xa9, 0x6a, 0x10, 0x43, 0xa8, 0x54, 0x2b, 0x12, 0x52, 0xe9, 0xd4, 0x81,
	0x26, 0xa2, 0xdd, 0xd8, 0x5a, 0x84, 0xd4, 0x05, 0x86, 0x8c, 0x2c, 0xc8, 0x4e, 0x8d, 0x6d, 0x35,
	0xf1, 0x2b, 0xf1, 0x2b, 0x61, 0xe0, 0x2b, 0xf8, 0x15, 0x26, 0x7e, 0x83, 0x2f, 0x42, 0x75, 0x1a,
	0x28, 0x48, 0x0c, 0x08, 0xb1, 0xbd, 0x7b, 0xe5, 0x77, 0xef, 0xb1, 0x65, 0xda, 0x15, 0x19, 0xa4,
	0x8b, 0x54, 0x73, 0x63, 0xaf, 0xa4, 0x73, 0x5c, 0xc9, 0x68, 0x59, 0x00, 0x42, 0xc0, 0xbc, 0x57,
	0x4a, 0xfe, 0x20, 0x8b, 0xca, 0x12, 0xab, 0xbb, 0x48, 0xa2, 0x0e, 0x4f, 0xbd, 0x4a, 0x87, 0x4a,
	0xda, 0xa1, 0x2b, 0xb9, 0x52, 0xb2, 0x88, 0x61, 0x89, 0x06, 0xac, 0x8b, 0xb9, 0xb5, 0x80, 0xdc,
	0xcf, 0xd5, 0x52, 0x78, 0x94, 0x42, 0x9e, 0xc3, 0xd7, 0xf0, 0xfe, 0x13, 0xed, 0x5c, 0xac, 0xe3,
	0x2f, 0xed, 0x7c, 0x09, 0xc6, 0x62, 0x22, 0xef, 0x57, 0xd2, 0x61, 0x30, 0xa7, 0x2d, 0x2b, 0xb1,
	0x84, 0x62, 0xc1, 0x48, 0x8f, 0x0c, 0x0e, 0x47, 0x51, 0xf4, 0x13, 0x46, 0x74, 0x5d, 0x1d, 0x9c,
	0x64, 0x19, 0x94, 0xc6, 0xaa, 0x49, 0x66, 0xb8, 0x9b, 0x86, 0xcf, 0x93, 0xee, 0xa8, 0xe9, 0x77,
	0xce, 0x1b, 0x39, 0x37, 0xf6, 0x8d, 0xd4, 0x89, 0x49, 0x3d, 0xf4, 0x5f, 0x08, 0x65, 0xd3, 0xf5,
	0xb5, 0x67, 0xdc, 0xe9, 0xef, 0x08, 0xb3, 0x3f, 0x22, 0x7c, 0xd4, 0x04, 0xc7, 0x94, 0xfa, 0xc7,
	0xbd, 0xd5, 0xdc, 0x69, 0xb6, 0xd3, 0x23, 0x83, 0x76, 0xd2, 0x16, 0x75, 0x6f, 0xc0, 0x68, 0x0b,
	0x1f, 0x1d, 0xf2, 0x02, 0xd9, 0x6e, 0x8f, 0x0c, 0x9a, 0x49, 0x2d, 0x83, 0x0e, 0x6d, 0x66, 0x26,
	0x37, 0xc8, 0x1a, 0xde, 0xaf, 0x44, 0xff, 0x95, 0xd0, 0xb0, 0xa2, 0x96, 0x46, 0x69, 0xfc, 0x3f,
	0xee, 0x13, 0x7a, 0xb0, 0xe1, 0xf6, 0x45, 0x1b, 0xf2, 0x7d, 0xf1, 0xd9, 0xfd, 0x5b, 0xf6, 0xe9,
	0xf8, 0xe6, 0x4c, 0x19, 0xd4, 0x2b, 0x11, 0xa5, 0x90, 0xc7, 0x5b, 0x5c, 0x71, 0xcd, 0x15, 0x6f,
	0x7d, 0x2a, 0x05, 0xb1, 0x44, 0x2d, 0xf6, 0xbc, 0x35, 0x7e, 0x0f, 0x00, 0x00, 0xff, 0xff, 0x54,
	0xc0, 0xf9, 0x1a, 0xa3, 0x02, 0x00, 0x00,
}
