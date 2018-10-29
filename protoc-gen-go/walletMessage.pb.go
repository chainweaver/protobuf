// Code generated by protoc-gen-go. DO NOT EDIT.
// source: walletMessage.proto

package protoc_gen_go

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

type Wallet struct {
	Token                string   `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Addresses            []string `protobuf:"bytes,3,rep,name=addresses,proto3" json:"addresses,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Wallet) Reset()         { *m = Wallet{} }
func (m *Wallet) String() string { return proto.CompactTextString(m) }
func (*Wallet) ProtoMessage()    {}
func (*Wallet) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{0}
}

func (m *Wallet) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Wallet.Unmarshal(m, b)
}
func (m *Wallet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Wallet.Marshal(b, m, deterministic)
}
func (m *Wallet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Wallet.Merge(m, src)
}
func (m *Wallet) XXX_Size() int {
	return xxx_messageInfo_Wallet.Size(m)
}
func (m *Wallet) XXX_DiscardUnknown() {
	xxx_messageInfo_Wallet.DiscardUnknown(m)
}

var xxx_messageInfo_Wallet proto.InternalMessageInfo

func (m *Wallet) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *Wallet) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Wallet) GetAddresses() []string {
	if m != nil {
		return m.Addresses
	}
	return nil
}

type HDWallet struct {
	Token                string     `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Name                 string     `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Chains               []*HDChain `protobuf:"bytes,3,rep,name=chains,proto3" json:"chains,omitempty"`
	Hd                   bool       `protobuf:"varint,4,opt,name=hd,proto3" json:"hd,omitempty"`
	ExtendedPublicKey    string     `protobuf:"bytes,5,opt,name=extended_public_key,json=extendedPublicKey,proto3" json:"extended_public_key,omitempty"`
	SubchainIndexes      []int32    `protobuf:"varint,6,rep,packed,name=subchain_indexes,json=subchainIndexes,proto3" json:"subchain_indexes,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *HDWallet) Reset()         { *m = HDWallet{} }
func (m *HDWallet) String() string { return proto.CompactTextString(m) }
func (*HDWallet) ProtoMessage()    {}
func (*HDWallet) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{1}
}

func (m *HDWallet) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_HDWallet.Unmarshal(m, b)
}
func (m *HDWallet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_HDWallet.Marshal(b, m, deterministic)
}
func (m *HDWallet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_HDWallet.Merge(m, src)
}
func (m *HDWallet) XXX_Size() int {
	return xxx_messageInfo_HDWallet.Size(m)
}
func (m *HDWallet) XXX_DiscardUnknown() {
	xxx_messageInfo_HDWallet.DiscardUnknown(m)
}

var xxx_messageInfo_HDWallet proto.InternalMessageInfo

func (m *HDWallet) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *HDWallet) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *HDWallet) GetChains() []*HDChain {
	if m != nil {
		return m.Chains
	}
	return nil
}

func (m *HDWallet) GetHd() bool {
	if m != nil {
		return m.Hd
	}
	return false
}

func (m *HDWallet) GetExtendedPublicKey() string {
	if m != nil {
		return m.ExtendedPublicKey
	}
	return ""
}

func (m *HDWallet) GetSubchainIndexes() []int32 {
	if m != nil {
		return m.SubchainIndexes
	}
	return nil
}

type HDChain struct {
	ChainAddresses       []*HDAddress `protobuf:"bytes,1,rep,name=chain_addresses,json=chainAddresses,proto3" json:"chain_addresses,omitempty"`
	Index                int64        `protobuf:"varint,2,opt,name=index,proto3" json:"index,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *HDChain) Reset()         { *m = HDChain{} }
func (m *HDChain) String() string { return proto.CompactTextString(m) }
func (*HDChain) ProtoMessage()    {}
func (*HDChain) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{2}
}

func (m *HDChain) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_HDChain.Unmarshal(m, b)
}
func (m *HDChain) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_HDChain.Marshal(b, m, deterministic)
}
func (m *HDChain) XXX_Merge(src proto.Message) {
	xxx_messageInfo_HDChain.Merge(m, src)
}
func (m *HDChain) XXX_Size() int {
	return xxx_messageInfo_HDChain.Size(m)
}
func (m *HDChain) XXX_DiscardUnknown() {
	xxx_messageInfo_HDChain.DiscardUnknown(m)
}

var xxx_messageInfo_HDChain proto.InternalMessageInfo

func (m *HDChain) GetChainAddresses() []*HDAddress {
	if m != nil {
		return m.ChainAddresses
	}
	return nil
}

func (m *HDChain) GetIndex() int64 {
	if m != nil {
		return m.Index
	}
	return 0
}

type HDAddress struct {
	Address              string   `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Path                 string   `protobuf:"bytes,2,opt,name=path,proto3" json:"path,omitempty"`
	Public               string   `protobuf:"bytes,3,opt,name=public,proto3" json:"public,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *HDAddress) Reset()         { *m = HDAddress{} }
func (m *HDAddress) String() string { return proto.CompactTextString(m) }
func (*HDAddress) ProtoMessage()    {}
func (*HDAddress) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{3}
}

func (m *HDAddress) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_HDAddress.Unmarshal(m, b)
}
func (m *HDAddress) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_HDAddress.Marshal(b, m, deterministic)
}
func (m *HDAddress) XXX_Merge(src proto.Message) {
	xxx_messageInfo_HDAddress.Merge(m, src)
}
func (m *HDAddress) XXX_Size() int {
	return xxx_messageInfo_HDAddress.Size(m)
}
func (m *HDAddress) XXX_DiscardUnknown() {
	xxx_messageInfo_HDAddress.DiscardUnknown(m)
}

var xxx_messageInfo_HDAddress proto.InternalMessageInfo

func (m *HDAddress) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *HDAddress) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *HDAddress) GetPublic() string {
	if m != nil {
		return m.Public
	}
	return ""
}

type ListWallets struct {
	WalletName           []string `protobuf:"bytes,1,rep,name=wallet_name,json=walletName,proto3" json:"wallet_name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListWallets) Reset()         { *m = ListWallets{} }
func (m *ListWallets) String() string { return proto.CompactTextString(m) }
func (*ListWallets) ProtoMessage()    {}
func (*ListWallets) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{4}
}

func (m *ListWallets) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListWallets.Unmarshal(m, b)
}
func (m *ListWallets) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListWallets.Marshal(b, m, deterministic)
}
func (m *ListWallets) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListWallets.Merge(m, src)
}
func (m *ListWallets) XXX_Size() int {
	return xxx_messageInfo_ListWallets.Size(m)
}
func (m *ListWallets) XXX_DiscardUnknown() {
	xxx_messageInfo_ListWallets.DiscardUnknown(m)
}

var xxx_messageInfo_ListWallets proto.InternalMessageInfo

func (m *ListWallets) GetWalletName() []string {
	if m != nil {
		return m.WalletName
	}
	return nil
}

type AddressKeychain struct {
	Address              string   `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Public               string   `protobuf:"bytes,2,opt,name=public,proto3" json:"public,omitempty"`
	Private              string   `protobuf:"bytes,3,opt,name=private,proto3" json:"private,omitempty"`
	Wif                  string   `protobuf:"bytes,4,opt,name=wif,proto3" json:"wif,omitempty"`
	Pubkeys              []string `protobuf:"bytes,5,rep,name=pubkeys,proto3" json:"pubkeys,omitempty"`
	ScriptType           string   `protobuf:"bytes,6,opt,name=script_type,json=scriptType,proto3" json:"script_type,omitempty"`
	OriginalAddress      string   `protobuf:"bytes,7,opt,name=original_address,json=originalAddress,proto3" json:"original_address,omitempty"`
	OapAddress           string   `protobuf:"bytes,8,opt,name=oap_address,json=oapAddress,proto3" json:"oap_address,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AddressKeychain) Reset()         { *m = AddressKeychain{} }
func (m *AddressKeychain) String() string { return proto.CompactTextString(m) }
func (*AddressKeychain) ProtoMessage()    {}
func (*AddressKeychain) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{5}
}

func (m *AddressKeychain) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AddressKeychain.Unmarshal(m, b)
}
func (m *AddressKeychain) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AddressKeychain.Marshal(b, m, deterministic)
}
func (m *AddressKeychain) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AddressKeychain.Merge(m, src)
}
func (m *AddressKeychain) XXX_Size() int {
	return xxx_messageInfo_AddressKeychain.Size(m)
}
func (m *AddressKeychain) XXX_DiscardUnknown() {
	xxx_messageInfo_AddressKeychain.DiscardUnknown(m)
}

var xxx_messageInfo_AddressKeychain proto.InternalMessageInfo

func (m *AddressKeychain) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *AddressKeychain) GetPublic() string {
	if m != nil {
		return m.Public
	}
	return ""
}

func (m *AddressKeychain) GetPrivate() string {
	if m != nil {
		return m.Private
	}
	return ""
}

func (m *AddressKeychain) GetWif() string {
	if m != nil {
		return m.Wif
	}
	return ""
}

func (m *AddressKeychain) GetPubkeys() []string {
	if m != nil {
		return m.Pubkeys
	}
	return nil
}

func (m *AddressKeychain) GetScriptType() string {
	if m != nil {
		return m.ScriptType
	}
	return ""
}

func (m *AddressKeychain) GetOriginalAddress() string {
	if m != nil {
		return m.OriginalAddress
	}
	return ""
}

func (m *AddressKeychain) GetOapAddress() string {
	if m != nil {
		return m.OapAddress
	}
	return ""
}

type WalletAddressKeychain struct {
	Wallet               *Wallet          `protobuf:"bytes,1,opt,name=wallet,proto3" json:"wallet,omitempty"`
	Addresskeychain      *AddressKeychain `protobuf:"bytes,2,opt,name=addresskeychain,proto3" json:"addresskeychain,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *WalletAddressKeychain) Reset()         { *m = WalletAddressKeychain{} }
func (m *WalletAddressKeychain) String() string { return proto.CompactTextString(m) }
func (*WalletAddressKeychain) ProtoMessage()    {}
func (*WalletAddressKeychain) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{6}
}

func (m *WalletAddressKeychain) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WalletAddressKeychain.Unmarshal(m, b)
}
func (m *WalletAddressKeychain) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WalletAddressKeychain.Marshal(b, m, deterministic)
}
func (m *WalletAddressKeychain) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WalletAddressKeychain.Merge(m, src)
}
func (m *WalletAddressKeychain) XXX_Size() int {
	return xxx_messageInfo_WalletAddressKeychain.Size(m)
}
func (m *WalletAddressKeychain) XXX_DiscardUnknown() {
	xxx_messageInfo_WalletAddressKeychain.DiscardUnknown(m)
}

var xxx_messageInfo_WalletAddressKeychain proto.InternalMessageInfo

func (m *WalletAddressKeychain) GetWallet() *Wallet {
	if m != nil {
		return m.Wallet
	}
	return nil
}

func (m *WalletAddressKeychain) GetAddresskeychain() *AddressKeychain {
	if m != nil {
		return m.Addresskeychain
	}
	return nil
}

type NullValue struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *NullValue) Reset()         { *m = NullValue{} }
func (m *NullValue) String() string { return proto.CompactTextString(m) }
func (*NullValue) ProtoMessage()    {}
func (*NullValue) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{7}
}

func (m *NullValue) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NullValue.Unmarshal(m, b)
}
func (m *NullValue) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NullValue.Marshal(b, m, deterministic)
}
func (m *NullValue) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NullValue.Merge(m, src)
}
func (m *NullValue) XXX_Size() int {
	return xxx_messageInfo_NullValue.Size(m)
}
func (m *NullValue) XXX_DiscardUnknown() {
	xxx_messageInfo_NullValue.DiscardUnknown(m)
}

var xxx_messageInfo_NullValue proto.InternalMessageInfo

type CreateWalletEndpointRequest struct {
	Token                string   `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Addresses            []string `protobuf:"bytes,3,rep,name=addresses,proto3" json:"addresses,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateWalletEndpointRequest) Reset()         { *m = CreateWalletEndpointRequest{} }
func (m *CreateWalletEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*CreateWalletEndpointRequest) ProtoMessage()    {}
func (*CreateWalletEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{8}
}

func (m *CreateWalletEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateWalletEndpointRequest.Unmarshal(m, b)
}
func (m *CreateWalletEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateWalletEndpointRequest.Marshal(b, m, deterministic)
}
func (m *CreateWalletEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateWalletEndpointRequest.Merge(m, src)
}
func (m *CreateWalletEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_CreateWalletEndpointRequest.Size(m)
}
func (m *CreateWalletEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateWalletEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateWalletEndpointRequest proto.InternalMessageInfo

func (m *CreateWalletEndpointRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *CreateWalletEndpointRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CreateWalletEndpointRequest) GetAddresses() []string {
	if m != nil {
		return m.Addresses
	}
	return nil
}

type CreateWalletHDEndpointRequest struct {
	Token                string     `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Name                 string     `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Chains               []*HDChain `protobuf:"bytes,3,rep,name=chains,proto3" json:"chains,omitempty"`
	Hd                   bool       `protobuf:"varint,4,opt,name=hd,proto3" json:"hd,omitempty"`
	ExtendedPublicKey    string     `protobuf:"bytes,5,opt,name=extended_public_key,json=extendedPublicKey,proto3" json:"extended_public_key,omitempty"`
	SubchainIndexes      []int32    `protobuf:"varint,6,rep,packed,name=subchain_indexes,json=subchainIndexes,proto3" json:"subchain_indexes,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *CreateWalletHDEndpointRequest) Reset()         { *m = CreateWalletHDEndpointRequest{} }
func (m *CreateWalletHDEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*CreateWalletHDEndpointRequest) ProtoMessage()    {}
func (*CreateWalletHDEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{9}
}

func (m *CreateWalletHDEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateWalletHDEndpointRequest.Unmarshal(m, b)
}
func (m *CreateWalletHDEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateWalletHDEndpointRequest.Marshal(b, m, deterministic)
}
func (m *CreateWalletHDEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateWalletHDEndpointRequest.Merge(m, src)
}
func (m *CreateWalletHDEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_CreateWalletHDEndpointRequest.Size(m)
}
func (m *CreateWalletHDEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateWalletHDEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateWalletHDEndpointRequest proto.InternalMessageInfo

func (m *CreateWalletHDEndpointRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *CreateWalletHDEndpointRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CreateWalletHDEndpointRequest) GetChains() []*HDChain {
	if m != nil {
		return m.Chains
	}
	return nil
}

func (m *CreateWalletHDEndpointRequest) GetHd() bool {
	if m != nil {
		return m.Hd
	}
	return false
}

func (m *CreateWalletHDEndpointRequest) GetExtendedPublicKey() string {
	if m != nil {
		return m.ExtendedPublicKey
	}
	return ""
}

func (m *CreateWalletHDEndpointRequest) GetSubchainIndexes() []int32 {
	if m != nil {
		return m.SubchainIndexes
	}
	return nil
}

type ListWalletsEndpointRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListWalletsEndpointRequest) Reset()         { *m = ListWalletsEndpointRequest{} }
func (m *ListWalletsEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*ListWalletsEndpointRequest) ProtoMessage()    {}
func (*ListWalletsEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{10}
}

func (m *ListWalletsEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListWalletsEndpointRequest.Unmarshal(m, b)
}
func (m *ListWalletsEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListWalletsEndpointRequest.Marshal(b, m, deterministic)
}
func (m *ListWalletsEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListWalletsEndpointRequest.Merge(m, src)
}
func (m *ListWalletsEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_ListWalletsEndpointRequest.Size(m)
}
func (m *ListWalletsEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListWalletsEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListWalletsEndpointRequest proto.InternalMessageInfo

type GetWalletEndpointRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetWalletEndpointRequest) Reset()         { *m = GetWalletEndpointRequest{} }
func (m *GetWalletEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*GetWalletEndpointRequest) ProtoMessage()    {}
func (*GetWalletEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{11}
}

func (m *GetWalletEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetWalletEndpointRequest.Unmarshal(m, b)
}
func (m *GetWalletEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetWalletEndpointRequest.Marshal(b, m, deterministic)
}
func (m *GetWalletEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetWalletEndpointRequest.Merge(m, src)
}
func (m *GetWalletEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_GetWalletEndpointRequest.Size(m)
}
func (m *GetWalletEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetWalletEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetWalletEndpointRequest proto.InternalMessageInfo

func (m *GetWalletEndpointRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type AddAddressesToWalletEndpointRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	OmitWalletAddresses  bool     `protobuf:"varint,2,opt,name=omitWalletAddresses,proto3" json:"omitWalletAddresses,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AddAddressesToWalletEndpointRequest) Reset()         { *m = AddAddressesToWalletEndpointRequest{} }
func (m *AddAddressesToWalletEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*AddAddressesToWalletEndpointRequest) ProtoMessage()    {}
func (*AddAddressesToWalletEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{12}
}

func (m *AddAddressesToWalletEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AddAddressesToWalletEndpointRequest.Unmarshal(m, b)
}
func (m *AddAddressesToWalletEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AddAddressesToWalletEndpointRequest.Marshal(b, m, deterministic)
}
func (m *AddAddressesToWalletEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AddAddressesToWalletEndpointRequest.Merge(m, src)
}
func (m *AddAddressesToWalletEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_AddAddressesToWalletEndpointRequest.Size(m)
}
func (m *AddAddressesToWalletEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_AddAddressesToWalletEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_AddAddressesToWalletEndpointRequest proto.InternalMessageInfo

func (m *AddAddressesToWalletEndpointRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *AddAddressesToWalletEndpointRequest) GetOmitWalletAddresses() bool {
	if m != nil {
		return m.OmitWalletAddresses
	}
	return false
}

type GetWalletAddressesEndpointRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Used                 bool     `protobuf:"varint,2,opt,name=used,proto3" json:"used,omitempty"`
	Zerobalance          bool     `protobuf:"varint,3,opt,name=zerobalance,proto3" json:"zerobalance,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetWalletAddressesEndpointRequest) Reset()         { *m = GetWalletAddressesEndpointRequest{} }
func (m *GetWalletAddressesEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*GetWalletAddressesEndpointRequest) ProtoMessage()    {}
func (*GetWalletAddressesEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{13}
}

func (m *GetWalletAddressesEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetWalletAddressesEndpointRequest.Unmarshal(m, b)
}
func (m *GetWalletAddressesEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetWalletAddressesEndpointRequest.Marshal(b, m, deterministic)
}
func (m *GetWalletAddressesEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetWalletAddressesEndpointRequest.Merge(m, src)
}
func (m *GetWalletAddressesEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_GetWalletAddressesEndpointRequest.Size(m)
}
func (m *GetWalletAddressesEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetWalletAddressesEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetWalletAddressesEndpointRequest proto.InternalMessageInfo

func (m *GetWalletAddressesEndpointRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *GetWalletAddressesEndpointRequest) GetUsed() bool {
	if m != nil {
		return m.Used
	}
	return false
}

func (m *GetWalletAddressesEndpointRequest) GetZerobalance() bool {
	if m != nil {
		return m.Zerobalance
	}
	return false
}

type RemoveAddressesFromWalletEndpointRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RemoveAddressesFromWalletEndpointRequest) Reset() {
	*m = RemoveAddressesFromWalletEndpointRequest{}
}
func (m *RemoveAddressesFromWalletEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*RemoveAddressesFromWalletEndpointRequest) ProtoMessage()    {}
func (*RemoveAddressesFromWalletEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{14}
}

func (m *RemoveAddressesFromWalletEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RemoveAddressesFromWalletEndpointRequest.Unmarshal(m, b)
}
func (m *RemoveAddressesFromWalletEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RemoveAddressesFromWalletEndpointRequest.Marshal(b, m, deterministic)
}
func (m *RemoveAddressesFromWalletEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RemoveAddressesFromWalletEndpointRequest.Merge(m, src)
}
func (m *RemoveAddressesFromWalletEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_RemoveAddressesFromWalletEndpointRequest.Size(m)
}
func (m *RemoveAddressesFromWalletEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_RemoveAddressesFromWalletEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_RemoveAddressesFromWalletEndpointRequest proto.InternalMessageInfo

func (m *RemoveAddressesFromWalletEndpointRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type GenerateAdressInWalletEndpointRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GenerateAdressInWalletEndpointRequest) Reset()         { *m = GenerateAdressInWalletEndpointRequest{} }
func (m *GenerateAdressInWalletEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*GenerateAdressInWalletEndpointRequest) ProtoMessage()    {}
func (*GenerateAdressInWalletEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{15}
}

func (m *GenerateAdressInWalletEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GenerateAdressInWalletEndpointRequest.Unmarshal(m, b)
}
func (m *GenerateAdressInWalletEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GenerateAdressInWalletEndpointRequest.Marshal(b, m, deterministic)
}
func (m *GenerateAdressInWalletEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenerateAdressInWalletEndpointRequest.Merge(m, src)
}
func (m *GenerateAdressInWalletEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_GenerateAdressInWalletEndpointRequest.Size(m)
}
func (m *GenerateAdressInWalletEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GenerateAdressInWalletEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GenerateAdressInWalletEndpointRequest proto.InternalMessageInfo

func (m *GenerateAdressInWalletEndpointRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type DeriveAddressInWalletEndpointRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Count                int32    `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"`
	SubchainIndex        int64    `protobuf:"varint,3,opt,name=subchain_index,json=subchainIndex,proto3" json:"subchain_index,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeriveAddressInWalletEndpointRequest) Reset()         { *m = DeriveAddressInWalletEndpointRequest{} }
func (m *DeriveAddressInWalletEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*DeriveAddressInWalletEndpointRequest) ProtoMessage()    {}
func (*DeriveAddressInWalletEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{16}
}

func (m *DeriveAddressInWalletEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeriveAddressInWalletEndpointRequest.Unmarshal(m, b)
}
func (m *DeriveAddressInWalletEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeriveAddressInWalletEndpointRequest.Marshal(b, m, deterministic)
}
func (m *DeriveAddressInWalletEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeriveAddressInWalletEndpointRequest.Merge(m, src)
}
func (m *DeriveAddressInWalletEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_DeriveAddressInWalletEndpointRequest.Size(m)
}
func (m *DeriveAddressInWalletEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeriveAddressInWalletEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeriveAddressInWalletEndpointRequest proto.InternalMessageInfo

func (m *DeriveAddressInWalletEndpointRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *DeriveAddressInWalletEndpointRequest) GetCount() int32 {
	if m != nil {
		return m.Count
	}
	return 0
}

func (m *DeriveAddressInWalletEndpointRequest) GetSubchainIndex() int64 {
	if m != nil {
		return m.SubchainIndex
	}
	return 0
}

type DeleteWalletEndpointRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteWalletEndpointRequest) Reset()         { *m = DeleteWalletEndpointRequest{} }
func (m *DeleteWalletEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteWalletEndpointRequest) ProtoMessage()    {}
func (*DeleteWalletEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2a4f2beabc42ed9b, []int{17}
}

func (m *DeleteWalletEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteWalletEndpointRequest.Unmarshal(m, b)
}
func (m *DeleteWalletEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteWalletEndpointRequest.Marshal(b, m, deterministic)
}
func (m *DeleteWalletEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteWalletEndpointRequest.Merge(m, src)
}
func (m *DeleteWalletEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteWalletEndpointRequest.Size(m)
}
func (m *DeleteWalletEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteWalletEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteWalletEndpointRequest proto.InternalMessageInfo

func (m *DeleteWalletEndpointRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func init() {
	proto.RegisterType((*Wallet)(nil), "fairwaycorp.blockchainprotobuf.Wallet")
	proto.RegisterType((*HDWallet)(nil), "fairwaycorp.blockchainprotobuf.HDWallet")
	proto.RegisterType((*HDChain)(nil), "fairwaycorp.blockchainprotobuf.HDChain")
	proto.RegisterType((*HDAddress)(nil), "fairwaycorp.blockchainprotobuf.HDAddress")
	proto.RegisterType((*ListWallets)(nil), "fairwaycorp.blockchainprotobuf.ListWallets")
	proto.RegisterType((*AddressKeychain)(nil), "fairwaycorp.blockchainprotobuf.AddressKeychain")
	proto.RegisterType((*WalletAddressKeychain)(nil), "fairwaycorp.blockchainprotobuf.WalletAddressKeychain")
	proto.RegisterType((*NullValue)(nil), "fairwaycorp.blockchainprotobuf.NullValue")
	proto.RegisterType((*CreateWalletEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.CreateWalletEndpointRequest")
	proto.RegisterType((*CreateWalletHDEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.CreateWalletHDEndpointRequest")
	proto.RegisterType((*ListWalletsEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.ListWalletsEndpointRequest")
	proto.RegisterType((*GetWalletEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.GetWalletEndpointRequest")
	proto.RegisterType((*AddAddressesToWalletEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.AddAddressesToWalletEndpointRequest")
	proto.RegisterType((*GetWalletAddressesEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.GetWalletAddressesEndpointRequest")
	proto.RegisterType((*RemoveAddressesFromWalletEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.RemoveAddressesFromWalletEndpointRequest")
	proto.RegisterType((*GenerateAdressInWalletEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.GenerateAdressInWalletEndpointRequest")
	proto.RegisterType((*DeriveAddressInWalletEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.DeriveAddressInWalletEndpointRequest")
	proto.RegisterType((*DeleteWalletEndpointRequest)(nil), "fairwaycorp.blockchainprotobuf.DeleteWalletEndpointRequest")
}

func init() { proto.RegisterFile("walletMessage.proto", fileDescriptor_2a4f2beabc42ed9b) }

var fileDescriptor_2a4f2beabc42ed9b = []byte{
	// 746 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xd4, 0x54, 0x51, 0x6f, 0xd3, 0x48,
	0x10, 0x96, 0x93, 0x26, 0x4d, 0xc6, 0xba, 0xa6, 0xb7, 0xbd, 0x3b, 0x59, 0xd7, 0xde, 0x35, 0xe7,
	0xa3, 0x90, 0x3e, 0xc4, 0x81, 0xf2, 0x84, 0x2a, 0x15, 0x85, 0x06, 0xda, 0xaa, 0x50, 0x95, 0x55,
	0x05, 0x82, 0x97, 0x68, 0x6d, 0x4f, 0x13, 0x2b, 0x8e, 0xd7, 0xd8, 0xeb, 0xa6, 0xe1, 0x67, 0xf1,
	0x8b, 0xf8, 0x13, 0xf0, 0x8c, 0xbc, 0x6b, 0x27, 0x69, 0x54, 0xda, 0x14, 0xf1, 0xc2, 0xdb, 0xce,
	0xac, 0xe7, 0xfb, 0xbe, 0xf9, 0x66, 0xd6, 0xb0, 0x36, 0x62, 0xbe, 0x8f, 0xe2, 0x15, 0xc6, 0x31,
	0xeb, 0xa1, 0x15, 0x46, 0x5c, 0x70, 0xf2, 0xef, 0x39, 0xf3, 0xa2, 0x11, 0x1b, 0x3b, 0x3c, 0x0a,
	0x2d, 0xdb, 0xe7, 0xce, 0xc0, 0xe9, 0x33, 0x2f, 0x90, 0x97, 0x76, 0x72, 0x6e, 0x9e, 0x42, 0xf9,
	0xad, 0x2c, 0x23, 0x7f, 0x40, 0x49, 0xf0, 0x01, 0x06, 0x86, 0x56, 0xd7, 0x1a, 0x55, 0xaa, 0x02,
	0x42, 0x60, 0x29, 0x60, 0x43, 0x34, 0x0a, 0x32, 0x29, 0xcf, 0x64, 0x03, 0xaa, 0xcc, 0x75, 0x23,
	0x8c, 0x63, 0x8c, 0x8d, 0x62, 0xbd, 0xd8, 0xa8, 0xd2, 0x69, 0xc2, 0xfc, 0xac, 0x41, 0xe5, 0xb0,
	0x73, 0x67, 0xd0, 0xa7, 0x50, 0x96, 0xca, 0x14, 0xa2, 0xbe, 0xf3, 0xc0, 0xba, 0x59, 0xb9, 0x75,
	0xd8, 0xd9, 0x4f, 0x63, 0x9a, 0x95, 0x91, 0x15, 0x28, 0xf4, 0x5d, 0x63, 0xa9, 0xae, 0x35, 0x2a,
	0xb4, 0xd0, 0x77, 0x89, 0x05, 0x6b, 0x78, 0x29, 0x30, 0x70, 0xd1, 0xed, 0x86, 0x89, 0xed, 0x7b,
	0x4e, 0x77, 0x80, 0x63, 0xa3, 0x24, 0x39, 0x7f, 0xcf, 0xaf, 0x4e, 0xe5, 0xcd, 0x31, 0x8e, 0xc9,
	0x36, 0xac, 0xc6, 0x89, 0x2d, 0xc1, 0xba, 0x5e, 0xe0, 0xe2, 0x25, 0xc6, 0x46, 0xb9, 0x5e, 0x6c,
	0x94, 0x68, 0x2d, 0xcf, 0x1f, 0xa9, 0xb4, 0x19, 0xc3, 0x72, 0xc6, 0x4e, 0x28, 0xd4, 0x54, 0xc9,
	0xd4, 0x11, 0x4d, 0xea, 0xdf, 0xbe, 0x5d, 0x7f, 0x5b, 0x95, 0xd0, 0x15, 0x79, 0xd1, 0xce, 0x01,
	0x52, 0xd3, 0xa4, 0x00, 0xe9, 0x4f, 0x91, 0xaa, 0xc0, 0x7c, 0x0d, 0xd5, 0x49, 0x09, 0x31, 0x60,
	0x39, 0x23, 0xcc, 0x9c, 0xcd, 0xc3, 0xd4, 0xdb, 0x90, 0x89, 0x7e, 0xee, 0x6d, 0x7a, 0x26, 0x7f,
	0x41, 0x59, 0x39, 0x60, 0x14, 0x65, 0x36, 0x8b, 0x4c, 0x0b, 0xf4, 0x97, 0x5e, 0x2c, 0xd4, 0xac,
	0x62, 0xb2, 0x09, 0xba, 0x5a, 0xa1, 0xae, 0x9c, 0x8e, 0x26, 0x27, 0x0b, 0x2a, 0x75, 0xc2, 0x86,
	0x68, 0x7e, 0xd5, 0xa0, 0x96, 0x29, 0x38, 0xc6, 0xb1, 0x54, 0x7d, 0x83, 0x92, 0x29, 0x6b, 0x61,
	0x96, 0x35, 0xad, 0x08, 0x23, 0xef, 0x82, 0x09, 0xcc, 0xe4, 0xe4, 0x21, 0x59, 0x85, 0xe2, 0xc8,
	0x3b, 0x97, 0x33, 0xac, 0xd2, 0xf4, 0x28, 0xbf, 0x4d, 0xec, 0x01, 0x8e, 0x63, 0xa3, 0x24, 0xe5,
	0xe4, 0x61, 0x2a, 0x36, 0x76, 0x22, 0x2f, 0x14, 0x5d, 0x31, 0x0e, 0xd1, 0x28, 0xcb, 0x1a, 0x50,
	0xa9, 0xb3, 0x71, 0x88, 0xe9, 0x3c, 0x79, 0xe4, 0xf5, 0xbc, 0x80, 0xf9, 0xf9, 0x70, 0x8c, 0x65,
	0xf9, 0x55, 0x2d, 0xcf, 0xe7, 0x6e, 0x6e, 0x82, 0xce, 0x59, 0x38, 0xf9, 0xaa, 0xa2, 0xb0, 0x38,
	0x0b, 0xb3, 0x0f, 0xcc, 0x4f, 0x1a, 0xfc, 0xa9, 0x5c, 0x9a, 0x6f, 0x7f, 0x0f, 0xca, 0xca, 0x20,
	0xd9, 0xbd, 0xbe, 0x73, 0xff, 0xb6, 0xb1, 0x2b, 0x18, 0x9a, 0x55, 0x91, 0x77, 0x50, 0xcb, 0x68,
	0x07, 0x19, 0xa4, 0x74, 0x4b, 0xdf, 0x69, 0xdd, 0x06, 0x34, 0xa7, 0x84, 0xce, 0xe3, 0x98, 0x3a,
	0x54, 0x4f, 0x12, 0xdf, 0x7f, 0xc3, 0xfc, 0x04, 0x4d, 0x84, 0xf5, 0xfd, 0x08, 0x99, 0x40, 0xc5,
	0xff, 0x3c, 0x70, 0x43, 0xee, 0x05, 0x82, 0xe2, 0x87, 0x04, 0xe3, 0x9f, 0xf7, 0xf8, 0xbf, 0x68,
	0xf0, 0xcf, 0x2c, 0xcf, 0x61, 0xe7, 0xc7, 0x99, 0x7e, 0xa5, 0x3f, 0xc2, 0x06, 0xfc, 0x3d, 0xf3,
	0x92, 0xe6, 0x7a, 0x36, 0x2d, 0x30, 0x0e, 0x50, 0x5c, 0xef, 0x7c, 0xde, 0xb9, 0x36, 0xed, 0xdc,
	0x1c, 0xc0, 0xff, 0x6d, 0xd7, 0x9d, 0xfc, 0x10, 0xce, 0xf8, 0xc2, 0xa5, 0xe4, 0x21, 0xac, 0xf1,
	0xa1, 0x27, 0xae, 0x2c, 0x2b, 0xc6, 0xd2, 0xd7, 0x0a, 0xbd, 0xee, 0xca, 0x1c, 0xc2, 0x7f, 0x13,
	0x71, 0x93, 0xec, 0x22, 0x54, 0x04, 0x96, 0x92, 0x18, 0xdd, 0x0c, 0x5b, 0x9e, 0x49, 0x1d, 0xf4,
	0x8f, 0x18, 0x71, 0x9b, 0xf9, 0x2c, 0x70, 0xd4, 0xfb, 0xae, 0xd0, 0xd9, 0x94, 0xb9, 0x07, 0x0d,
	0x8a, 0x43, 0x7e, 0x81, 0x13, 0xae, 0x17, 0x11, 0x1f, 0x2e, 0xee, 0xcd, 0x2e, 0x6c, 0x1d, 0x60,
	0x80, 0x11, 0x13, 0xd8, 0x96, 0x00, 0x47, 0xc1, 0xe2, 0xc5, 0x23, 0xb8, 0xd7, 0xc1, 0xc8, 0x9b,
	0x90, 0xdf, 0xa1, 0x36, 0x5d, 0x5c, 0x87, 0x27, 0x81, 0x90, 0xfd, 0x96, 0xa8, 0x0a, 0xc8, 0x16,
	0xac, 0x5c, 0xdd, 0x11, 0xd9, 0x73, 0x91, 0xfe, 0x76, 0x65, 0x43, 0xcc, 0x47, 0xb0, 0xde, 0x41,
	0x1f, 0xbf, 0xf7, 0xfc, 0xae, 0xe1, 0x7b, 0xb6, 0xfb, 0xfe, 0x49, 0xcf, 0x13, 0xfd, 0xc4, 0xb6,
	0x1c, 0x3e, 0x6c, 0x65, 0xab, 0xdf, 0x4c, 0x77, 0xbf, 0x35, 0xdd, 0xfd, 0x66, 0xbe, 0xfc, 0x2d,
	0x79, 0x70, 0x9a, 0x3d, 0x0c, 0x9a, 0x3d, 0x6e, 0x97, 0x65, 0xf8, 0xf8, 0x5b, 0x00, 0x00, 0x00,
	0xff, 0xff, 0x28, 0x00, 0x9f, 0xff, 0x14, 0x08, 0x00, 0x00,
}
