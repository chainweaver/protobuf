// Code generated by protoc-gen-go. DO NOT EDIT.
// source: metadataMessage.proto

package btc // import "github.com/fairway-corp/blockchain-protobuf/protoc-gen-go/btc"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type KeyValues struct {
	KeyPairs             map[string]string `protobuf:"bytes,1,rep,name=key_pairs,json=keyPairs,proto3" json:"key_pairs,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *KeyValues) Reset()         { *m = KeyValues{} }
func (m *KeyValues) String() string { return proto.CompactTextString(m) }
func (*KeyValues) ProtoMessage()    {}
func (*KeyValues) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{0}
}
func (m *KeyValues) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_KeyValues.Unmarshal(m, b)
}
func (m *KeyValues) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_KeyValues.Marshal(b, m, deterministic)
}
func (dst *KeyValues) XXX_Merge(src proto.Message) {
	xxx_messageInfo_KeyValues.Merge(dst, src)
}
func (m *KeyValues) XXX_Size() int {
	return xxx_messageInfo_KeyValues.Size(m)
}
func (m *KeyValues) XXX_DiscardUnknown() {
	xxx_messageInfo_KeyValues.DiscardUnknown(m)
}

var xxx_messageInfo_KeyValues proto.InternalMessageInfo

func (m *KeyValues) GetKeyPairs() map[string]string {
	if m != nil {
		return m.KeyPairs
	}
	return nil
}

type GetMetadataAddressEndpointRequest struct {
	Network NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	Address string               `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	// If private is true, it will return privately stored metadata under your token. Otherwise, returns public metadata. If not set, it defaults to false, returning public data.
	Private              bool     `protobuf:"varint,3,opt,name=private,proto3" json:"private,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetMetadataAddressEndpointRequest) Reset()         { *m = GetMetadataAddressEndpointRequest{} }
func (m *GetMetadataAddressEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*GetMetadataAddressEndpointRequest) ProtoMessage()    {}
func (*GetMetadataAddressEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{1}
}
func (m *GetMetadataAddressEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetMetadataAddressEndpointRequest.Unmarshal(m, b)
}
func (m *GetMetadataAddressEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetMetadataAddressEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *GetMetadataAddressEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetMetadataAddressEndpointRequest.Merge(dst, src)
}
func (m *GetMetadataAddressEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_GetMetadataAddressEndpointRequest.Size(m)
}
func (m *GetMetadataAddressEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetMetadataAddressEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetMetadataAddressEndpointRequest proto.InternalMessageInfo

func (m *GetMetadataAddressEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *GetMetadataAddressEndpointRequest) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *GetMetadataAddressEndpointRequest) GetPrivate() bool {
	if m != nil {
		return m.Private
	}
	return false
}

type GetMetadataTxhashEndpointRequest struct {
	Network NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	Txhash  string               `protobuf:"bytes,2,opt,name=txhash,proto3" json:"txhash,omitempty"`
	// If private is true, it will return privately stored metadata under your token. Otherwise, returns public metadata. If not set, it defaults to false, returning public data.
	Private              bool     `protobuf:"varint,3,opt,name=private,proto3" json:"private,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetMetadataTxhashEndpointRequest) Reset()         { *m = GetMetadataTxhashEndpointRequest{} }
func (m *GetMetadataTxhashEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*GetMetadataTxhashEndpointRequest) ProtoMessage()    {}
func (*GetMetadataTxhashEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{2}
}
func (m *GetMetadataTxhashEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetMetadataTxhashEndpointRequest.Unmarshal(m, b)
}
func (m *GetMetadataTxhashEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetMetadataTxhashEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *GetMetadataTxhashEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetMetadataTxhashEndpointRequest.Merge(dst, src)
}
func (m *GetMetadataTxhashEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_GetMetadataTxhashEndpointRequest.Size(m)
}
func (m *GetMetadataTxhashEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetMetadataTxhashEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetMetadataTxhashEndpointRequest proto.InternalMessageInfo

func (m *GetMetadataTxhashEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *GetMetadataTxhashEndpointRequest) GetTxhash() string {
	if m != nil {
		return m.Txhash
	}
	return ""
}

func (m *GetMetadataTxhashEndpointRequest) GetPrivate() bool {
	if m != nil {
		return m.Private
	}
	return false
}

type GetMetadataBlockhashEndpointRequest struct {
	Network   NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	BlockHash string               `protobuf:"bytes,2,opt,name=block_hash,json=blockHash,proto3" json:"block_hash,omitempty"`
	// If private is true, it will return privately stored metadata under your token. Otherwise, returns public metadata. If not set, it defaults to false, returning public data.
	Private              bool     `protobuf:"varint,3,opt,name=private,proto3" json:"private,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetMetadataBlockhashEndpointRequest) Reset()         { *m = GetMetadataBlockhashEndpointRequest{} }
func (m *GetMetadataBlockhashEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*GetMetadataBlockhashEndpointRequest) ProtoMessage()    {}
func (*GetMetadataBlockhashEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{3}
}
func (m *GetMetadataBlockhashEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetMetadataBlockhashEndpointRequest.Unmarshal(m, b)
}
func (m *GetMetadataBlockhashEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetMetadataBlockhashEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *GetMetadataBlockhashEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetMetadataBlockhashEndpointRequest.Merge(dst, src)
}
func (m *GetMetadataBlockhashEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_GetMetadataBlockhashEndpointRequest.Size(m)
}
func (m *GetMetadataBlockhashEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetMetadataBlockhashEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetMetadataBlockhashEndpointRequest proto.InternalMessageInfo

func (m *GetMetadataBlockhashEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *GetMetadataBlockhashEndpointRequest) GetBlockHash() string {
	if m != nil {
		return m.BlockHash
	}
	return ""
}

func (m *GetMetadataBlockhashEndpointRequest) GetPrivate() bool {
	if m != nil {
		return m.Private
	}
	return false
}

type PutMetadataAddressEndpointRequest struct {
	Network  NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	KeyPairs map[string]string    `protobuf:"bytes,2,rep,name=key_pairs,json=keyPairs,proto3" json:"key_pairs,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Address  string               `protobuf:"bytes,3,opt,name=address,proto3" json:"address,omitempty"`
	// If private is true, it will set/update privately stored metadata under your token. Otherwise, sets public metadata. If not set, it defaults to false, setting public metadata.
	Private              bool     `protobuf:"varint,4,opt,name=private,proto3" json:"private,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PutMetadataAddressEndpointRequest) Reset()         { *m = PutMetadataAddressEndpointRequest{} }
func (m *PutMetadataAddressEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*PutMetadataAddressEndpointRequest) ProtoMessage()    {}
func (*PutMetadataAddressEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{4}
}
func (m *PutMetadataAddressEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PutMetadataAddressEndpointRequest.Unmarshal(m, b)
}
func (m *PutMetadataAddressEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PutMetadataAddressEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *PutMetadataAddressEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PutMetadataAddressEndpointRequest.Merge(dst, src)
}
func (m *PutMetadataAddressEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_PutMetadataAddressEndpointRequest.Size(m)
}
func (m *PutMetadataAddressEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PutMetadataAddressEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PutMetadataAddressEndpointRequest proto.InternalMessageInfo

func (m *PutMetadataAddressEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *PutMetadataAddressEndpointRequest) GetKeyPairs() map[string]string {
	if m != nil {
		return m.KeyPairs
	}
	return nil
}

func (m *PutMetadataAddressEndpointRequest) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *PutMetadataAddressEndpointRequest) GetPrivate() bool {
	if m != nil {
		return m.Private
	}
	return false
}

type PutMetadataTxhashEndpointRequest struct {
	Network  NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	KeyPairs map[string]string    `protobuf:"bytes,2,rep,name=key_pairs,json=keyPairs,proto3" json:"key_pairs,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Txhash   string               `protobuf:"bytes,3,opt,name=txhash,proto3" json:"txhash,omitempty"`
	// If private is true, it will set/update privately stored metadata under your token. Otherwise, sets public metadata. If not set, it defaults to false, setting public metadata.
	Private              bool     `protobuf:"varint,4,opt,name=private,proto3" json:"private,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PutMetadataTxhashEndpointRequest) Reset()         { *m = PutMetadataTxhashEndpointRequest{} }
func (m *PutMetadataTxhashEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*PutMetadataTxhashEndpointRequest) ProtoMessage()    {}
func (*PutMetadataTxhashEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{5}
}
func (m *PutMetadataTxhashEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PutMetadataTxhashEndpointRequest.Unmarshal(m, b)
}
func (m *PutMetadataTxhashEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PutMetadataTxhashEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *PutMetadataTxhashEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PutMetadataTxhashEndpointRequest.Merge(dst, src)
}
func (m *PutMetadataTxhashEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_PutMetadataTxhashEndpointRequest.Size(m)
}
func (m *PutMetadataTxhashEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PutMetadataTxhashEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PutMetadataTxhashEndpointRequest proto.InternalMessageInfo

func (m *PutMetadataTxhashEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *PutMetadataTxhashEndpointRequest) GetKeyPairs() map[string]string {
	if m != nil {
		return m.KeyPairs
	}
	return nil
}

func (m *PutMetadataTxhashEndpointRequest) GetTxhash() string {
	if m != nil {
		return m.Txhash
	}
	return ""
}

func (m *PutMetadataTxhashEndpointRequest) GetPrivate() bool {
	if m != nil {
		return m.Private
	}
	return false
}

type PutMetadataBlockhashEndpointRequest struct {
	Network   NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	KeyPairs  map[string]string    `protobuf:"bytes,2,rep,name=key_pairs,json=keyPairs,proto3" json:"key_pairs,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	BlockHash string               `protobuf:"bytes,3,opt,name=block_hash,json=blockHash,proto3" json:"block_hash,omitempty"`
	// If private is true, it will set/update privately stored metadata under your token. Otherwise, sets public metadata. If not set, it defaults to false, setting public metadata.
	Private              bool     `protobuf:"varint,4,opt,name=private,proto3" json:"private,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PutMetadataBlockhashEndpointRequest) Reset()         { *m = PutMetadataBlockhashEndpointRequest{} }
func (m *PutMetadataBlockhashEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*PutMetadataBlockhashEndpointRequest) ProtoMessage()    {}
func (*PutMetadataBlockhashEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{6}
}
func (m *PutMetadataBlockhashEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PutMetadataBlockhashEndpointRequest.Unmarshal(m, b)
}
func (m *PutMetadataBlockhashEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PutMetadataBlockhashEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *PutMetadataBlockhashEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PutMetadataBlockhashEndpointRequest.Merge(dst, src)
}
func (m *PutMetadataBlockhashEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_PutMetadataBlockhashEndpointRequest.Size(m)
}
func (m *PutMetadataBlockhashEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PutMetadataBlockhashEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PutMetadataBlockhashEndpointRequest proto.InternalMessageInfo

func (m *PutMetadataBlockhashEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *PutMetadataBlockhashEndpointRequest) GetKeyPairs() map[string]string {
	if m != nil {
		return m.KeyPairs
	}
	return nil
}

func (m *PutMetadataBlockhashEndpointRequest) GetBlockHash() string {
	if m != nil {
		return m.BlockHash
	}
	return ""
}

func (m *PutMetadataBlockhashEndpointRequest) GetPrivate() bool {
	if m != nil {
		return m.Private
	}
	return false
}

type DeleteMetadataAddressEndpointRequest struct {
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	Address              string               `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *DeleteMetadataAddressEndpointRequest) Reset()         { *m = DeleteMetadataAddressEndpointRequest{} }
func (m *DeleteMetadataAddressEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteMetadataAddressEndpointRequest) ProtoMessage()    {}
func (*DeleteMetadataAddressEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{7}
}
func (m *DeleteMetadataAddressEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteMetadataAddressEndpointRequest.Unmarshal(m, b)
}
func (m *DeleteMetadataAddressEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteMetadataAddressEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *DeleteMetadataAddressEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteMetadataAddressEndpointRequest.Merge(dst, src)
}
func (m *DeleteMetadataAddressEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteMetadataAddressEndpointRequest.Size(m)
}
func (m *DeleteMetadataAddressEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteMetadataAddressEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteMetadataAddressEndpointRequest proto.InternalMessageInfo

func (m *DeleteMetadataAddressEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *DeleteMetadataAddressEndpointRequest) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

type DeleteMetadataTxhashEndpointRequest struct {
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	Txhash               string               `protobuf:"bytes,2,opt,name=txhash,proto3" json:"txhash,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *DeleteMetadataTxhashEndpointRequest) Reset()         { *m = DeleteMetadataTxhashEndpointRequest{} }
func (m *DeleteMetadataTxhashEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteMetadataTxhashEndpointRequest) ProtoMessage()    {}
func (*DeleteMetadataTxhashEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{8}
}
func (m *DeleteMetadataTxhashEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteMetadataTxhashEndpointRequest.Unmarshal(m, b)
}
func (m *DeleteMetadataTxhashEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteMetadataTxhashEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *DeleteMetadataTxhashEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteMetadataTxhashEndpointRequest.Merge(dst, src)
}
func (m *DeleteMetadataTxhashEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteMetadataTxhashEndpointRequest.Size(m)
}
func (m *DeleteMetadataTxhashEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteMetadataTxhashEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteMetadataTxhashEndpointRequest proto.InternalMessageInfo

func (m *DeleteMetadataTxhashEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *DeleteMetadataTxhashEndpointRequest) GetTxhash() string {
	if m != nil {
		return m.Txhash
	}
	return ""
}

type DeleteMetadataBlockheightEndpointRequest struct {
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	BlockHash            string               `protobuf:"bytes,2,opt,name=block_hash,json=blockHash,proto3" json:"block_hash,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *DeleteMetadataBlockheightEndpointRequest) Reset() {
	*m = DeleteMetadataBlockheightEndpointRequest{}
}
func (m *DeleteMetadataBlockheightEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteMetadataBlockheightEndpointRequest) ProtoMessage()    {}
func (*DeleteMetadataBlockheightEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_metadataMessage_df792ad1ec53462c, []int{9}
}
func (m *DeleteMetadataBlockheightEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteMetadataBlockheightEndpointRequest.Unmarshal(m, b)
}
func (m *DeleteMetadataBlockheightEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteMetadataBlockheightEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *DeleteMetadataBlockheightEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteMetadataBlockheightEndpointRequest.Merge(dst, src)
}
func (m *DeleteMetadataBlockheightEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteMetadataBlockheightEndpointRequest.Size(m)
}
func (m *DeleteMetadataBlockheightEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteMetadataBlockheightEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteMetadataBlockheightEndpointRequest proto.InternalMessageInfo

func (m *DeleteMetadataBlockheightEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *DeleteMetadataBlockheightEndpointRequest) GetBlockHash() string {
	if m != nil {
		return m.BlockHash
	}
	return ""
}

func init() {
	proto.RegisterType((*KeyValues)(nil), "fairwaycorp.blockchainprotobuf.btc.KeyValues")
	proto.RegisterMapType((map[string]string)(nil), "fairwaycorp.blockchainprotobuf.btc.KeyValues.KeyPairsEntry")
	proto.RegisterType((*GetMetadataAddressEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.btc.GetMetadataAddressEndpointRequest")
	proto.RegisterType((*GetMetadataTxhashEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.btc.GetMetadataTxhashEndpointRequest")
	proto.RegisterType((*GetMetadataBlockhashEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.btc.GetMetadataBlockhashEndpointRequest")
	proto.RegisterType((*PutMetadataAddressEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.btc.PutMetadataAddressEndpointRequest")
	proto.RegisterMapType((map[string]string)(nil), "fairwaycorp.blockchainprotobuf.btc.PutMetadataAddressEndpointRequest.KeyPairsEntry")
	proto.RegisterType((*PutMetadataTxhashEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.btc.PutMetadataTxhashEndpointRequest")
	proto.RegisterMapType((map[string]string)(nil), "fairwaycorp.blockchainprotobuf.btc.PutMetadataTxhashEndpointRequest.KeyPairsEntry")
	proto.RegisterType((*PutMetadataBlockhashEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.btc.PutMetadataBlockhashEndpointRequest")
	proto.RegisterMapType((map[string]string)(nil), "fairwaycorp.blockchainprotobuf.btc.PutMetadataBlockhashEndpointRequest.KeyPairsEntry")
	proto.RegisterType((*DeleteMetadataAddressEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.btc.DeleteMetadataAddressEndpointRequest")
	proto.RegisterType((*DeleteMetadataTxhashEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.btc.DeleteMetadataTxhashEndpointRequest")
	proto.RegisterType((*DeleteMetadataBlockheightEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.btc.DeleteMetadataBlockheightEndpointRequest")
}

func init() {
	proto.RegisterFile("metadataMessage.proto", fileDescriptor_metadataMessage_df792ad1ec53462c)
}

var fileDescriptor_metadataMessage_df792ad1ec53462c = []byte{
	// 517 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x95, 0x4f, 0x6b, 0xd4, 0x40,
	0x18, 0xc6, 0x99, 0x44, 0xdb, 0xee, 0x2b, 0x8a, 0xc4, 0x3f, 0x84, 0x82, 0x90, 0x66, 0x3d, 0xec,
	0x65, 0xb3, 0x50, 0x2f, 0xc5, 0x22, 0xb2, 0xc5, 0xa2, 0x20, 0x95, 0x12, 0xff, 0x20, 0x5e, 0xca,
	0x24, 0xfb, 0x36, 0x09, 0xc9, 0x66, 0xe2, 0xcc, 0xa4, 0x6b, 0x3e, 0x86, 0xe0, 0xd5, 0x8b, 0x27,
	0xc1, 0x9b, 0x1f, 0xc6, 0x83, 0x57, 0xbf, 0x88, 0x64, 0x36, 0x6b, 0x13, 0x6a, 0xb6, 0x2d, 0x2e,
	0xbb, 0xde, 0xe6, 0x9d, 0x61, 0xde, 0xe7, 0x97, 0x27, 0xef, 0xc3, 0xc0, 0x9d, 0x31, 0x4a, 0x3a,
	0xa2, 0x92, 0x1e, 0xa0, 0x10, 0x34, 0x40, 0x27, 0xe3, 0x4c, 0x32, 0xc3, 0x3e, 0xa6, 0x11, 0x9f,
	0xd0, 0xc2, 0x67, 0x3c, 0x73, 0xbc, 0x84, 0xf9, 0xb1, 0x1f, 0xd2, 0x28, 0x55, 0x87, 0x5e, 0x7e,
	0xec, 0x78, 0xd2, 0xdf, 0xbc, 0xe5, 0xb3, 0xf1, 0x98, 0xa5, 0x8d, 0x8b, 0xf6, 0x17, 0x02, 0x9d,
	0xe7, 0x58, 0xbc, 0xa1, 0x49, 0x8e, 0xc2, 0x78, 0x0b, 0x9d, 0x18, 0x8b, 0xa3, 0x8c, 0x46, 0x5c,
	0x98, 0xc4, 0xd2, 0x7b, 0xd7, 0xb6, 0x77, 0x9d, 0xf3, 0x5b, 0x3b, 0x7f, 0x3a, 0x94, 0xab, 0xc3,
	0xf2, 0xf6, 0x7e, 0x2a, 0x79, 0xe1, 0x6e, 0xc4, 0x55, 0xb9, 0xb9, 0x0b, 0xd7, 0x1b, 0x47, 0xc6,
	0x4d, 0xd0, 0x63, 0x2c, 0x4c, 0x62, 0x91, 0x5e, 0xc7, 0x2d, 0x97, 0xc6, 0x6d, 0xb8, 0x7a, 0x52,
	0x36, 0x31, 0x35, 0xb5, 0x37, 0x2d, 0x1e, 0x6a, 0x3b, 0xc4, 0xfe, 0x46, 0x60, 0xeb, 0x29, 0xca,
	0x83, 0xea, 0xd3, 0x87, 0xa3, 0x11, 0x47, 0x21, 0xf6, 0xd3, 0x51, 0xc6, 0xa2, 0x54, 0xba, 0xf8,
	0x3e, 0x47, 0x21, 0x0d, 0x17, 0xd6, 0x53, 0x94, 0x13, 0xc6, 0x63, 0xd5, 0xf5, 0xc6, 0xf6, 0xce,
	0x45, 0xd0, 0x5f, 0x4c, 0xaf, 0x0c, 0x93, 0x84, 0x4d, 0xa2, 0x34, 0x18, 0x26, 0x11, 0x15, 0xee,
	0xac, 0x91, 0x61, 0xc2, 0x3a, 0x9d, 0xaa, 0x55, 0x54, 0xb3, 0xb2, 0x3c, 0xc9, 0x78, 0x74, 0x42,
	0x25, 0x9a, 0xba, 0x45, 0x7a, 0x1b, 0xee, 0xac, 0xb4, 0xbf, 0x12, 0xb0, 0x6a, 0xb4, 0xaf, 0x3e,
	0x84, 0x54, 0x84, 0xcb, 0x80, 0xbd, 0x0b, 0x6b, 0x52, 0x89, 0x55, 0xac, 0x55, 0x35, 0x07, 0xf5,
	0x3b, 0x81, 0x6e, 0x0d, 0x75, 0xaf, 0x54, 0x5d, 0x16, 0xed, 0x3d, 0x00, 0x75, 0xef, 0xa8, 0x46,
	0xdc, 0x51, 0x3b, 0xcf, 0xe6, 0x43, 0xff, 0xd4, 0x60, 0xeb, 0x30, 0x5f, 0xc5, 0x34, 0x64, 0xf5,
	0x78, 0x68, 0x2a, 0x1e, 0x2f, 0x2f, 0xd2, 0xf5, 0x5c, 0xda, 0xb6, 0xd8, 0xd4, 0xe7, 0x4f, 0x6f,
	0x9d, 0xbf, 0x2b, 0x0d, 0x7f, 0xfe, 0x2d, 0x6a, 0x3f, 0x34, 0xb0, 0x6a, 0xb8, 0xcb, 0x1b, 0x5e,
	0x76, 0xd6, 0x5b, 0xf7, 0x92, 0xde, 0xfe, 0x15, 0xb6, 0xd5, 0xda, 0xd3, 0xb4, 0xe8, 0x6d, 0x69,
	0x59, 0xa4, 0xb1, 0xbf, 0x34, 0xe8, 0xd6, 0x58, 0x97, 0x1a, 0x35, 0x7e, 0xd6, 0xdb, 0xd7, 0x97,
	0xf4, 0xb6, 0x8d, 0xb7, 0xd5, 0xde, 0x66, 0xbc, 0xf5, 0x39, 0xf1, 0x5e, 0xa4, 0xcb, 0x9f, 0x08,
	0xdc, 0x7f, 0x82, 0x09, 0x4a, 0xfc, 0x9f, 0x1e, 0x0b, 0xfb, 0x23, 0x81, 0x6e, 0x13, 0x6b, 0xe5,
	0xaf, 0x82, 0xfd, 0x99, 0x40, 0xaf, 0xc9, 0x34, 0xfd, 0xc7, 0x18, 0x05, 0xa1, 0x5c, 0xfd, 0x03,
	0xb0, 0xf7, 0xf8, 0xdd, 0xa3, 0x20, 0x92, 0x61, 0xee, 0x39, 0x3e, 0x1b, 0x0f, 0x2a, 0xb5, 0x7e,
	0x29, 0x37, 0x38, 0x95, 0xeb, 0xcf, 0xf4, 0x06, 0x6a, 0xe1, 0xf7, 0x03, 0x4c, 0xfb, 0x01, 0x1b,
	0x78, 0xd2, 0xf7, 0xd6, 0xd4, 0xd6, 0x83, 0xdf, 0x01, 0x00, 0x00, 0xff, 0xff, 0x09, 0xb0, 0xa6,
	0x9a, 0x33, 0x09, 0x00, 0x00,
}
