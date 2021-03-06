// Code generated by protoc-gen-go. DO NOT EDIT.
// source: microtransactionMessage.proto

package btc // import "github.com/chainweaver/protobuf/protoc-gen-go/btc"

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

type MicroTX struct {
	// Hex-encoded public key from which you’re sending coins.
	FromPubkey string `protobuf:"bytes,1,opt,name=from_pubkey,json=fromPubkey,proto3" json:"from_pubkey,omitempty"`
	// Hex-encoded private key from which you’re sending coins.
	FromPrivate string `protobuf:"bytes,2,opt,name=from_private,json=fromPrivate,proto3" json:"from_private,omitempty"`
	// WIF-encoded private key from which you’re sending coins.
	FromWif string `protobuf:"bytes,3,opt,name=from_wif,json=fromWif,proto3" json:"from_wif,omitempty"`
	// The target address to which you’re sending coins.
	ToAddress string `protobuf:"bytes,4,opt,name=to_address,json=toAddress,proto3" json:"to_address,omitempty"`
	// Value you’re sending/you’ve sent in satoshis.
	ValueSatoshis uint32 `protobuf:"varint,5,opt,name=value_satoshis,json=valueSatoshis,proto3" json:"value_satoshis,omitempty"`
	// Your Block API token
	Token string `protobuf:"bytes,6,opt,name=token,proto3" json:"token,omitempty"`
	// Optional Address Block will use to send back your change. If not set, defaults to the address from which the coins were originally sent. While not required, we recommend that you set a change address.
	ChangeAddress string `protobuf:"bytes,7,opt,name=change_address,json=changeAddress,proto3" json:"change_address,omitempty"`
	// Optional If not set, defaults to true, which means the API will wait for Block to guarantee the transaction, using our Confidence Factor. The guarantee usually takes around 8 seconds. If manually set to false, the Microtransaction endpoint will return as soon as the transaction is broadcast.
	WaitGuarantee bool `protobuf:"varint,8,opt,name=wait_guarantee,json=waitGuarantee,proto3" json:"wait_guarantee,omitempty"`
	// Optional Hex-encoded data for you to sign after initiating the microtransaction. Sent in reply to a microtransaction generated using from_pubkey/a public key.
	Tosign []string `protobuf:"bytes,9,rep,name=tosign,proto3" json:"tosign,omitempty"`
	// Optional Hex-encoded signatures for you to send back after having received (and signed) tosign.
	Signatures []string `protobuf:"bytes,10,rep,name=signatures,proto3" json:"signatures,omitempty"`
	// Optional Partial list of inputs that will be used with this transaction. Inputs themsleves are heavily pared down, see cURL sample. Only returned when using from_pubkey.
	Inputs []*TXInput `protobuf:"bytes,11,rep,name=inputs,proto3" json:"inputs,omitempty"`
	// Optional Partial list of outputs that will be used with this transaction. Outputs themselves are heavily pared down, see cURL sample. Only returned when using from_pubkey.
	Outputs []*TXOutput `protobuf:"bytes,12,rep,name=outputs,proto3" json:"outputs,omitempty"`
	// Optional Block’s optimally calculated fees for this MicroTX to guarantee swift 99% confirmation, only returned when using from_pubkey. Block pays these fees for the first 8,000 microtransactions, but like regular transactions, it is deducted from the source address thereafter.
	Fees int32 `protobuf:"varint,13,opt,name=fees,proto3" json:"fees,omitempty"`
	// Optional The hash of the finalized transaction, once sent.
	Hash                 string   `protobuf:"bytes,14,opt,name=hash,proto3" json:"hash,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MicroTX) Reset()         { *m = MicroTX{} }
func (m *MicroTX) String() string { return proto.CompactTextString(m) }
func (*MicroTX) ProtoMessage()    {}
func (*MicroTX) Descriptor() ([]byte, []int) {
	return fileDescriptor_microtransactionMessage_ee0839f006bf0406, []int{0}
}
func (m *MicroTX) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MicroTX.Unmarshal(m, b)
}
func (m *MicroTX) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MicroTX.Marshal(b, m, deterministic)
}
func (dst *MicroTX) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MicroTX.Merge(dst, src)
}
func (m *MicroTX) XXX_Size() int {
	return xxx_messageInfo_MicroTX.Size(m)
}
func (m *MicroTX) XXX_DiscardUnknown() {
	xxx_messageInfo_MicroTX.DiscardUnknown(m)
}

var xxx_messageInfo_MicroTX proto.InternalMessageInfo

func (m *MicroTX) GetFromPubkey() string {
	if m != nil {
		return m.FromPubkey
	}
	return ""
}

func (m *MicroTX) GetFromPrivate() string {
	if m != nil {
		return m.FromPrivate
	}
	return ""
}

func (m *MicroTX) GetFromWif() string {
	if m != nil {
		return m.FromWif
	}
	return ""
}

func (m *MicroTX) GetToAddress() string {
	if m != nil {
		return m.ToAddress
	}
	return ""
}

func (m *MicroTX) GetValueSatoshis() uint32 {
	if m != nil {
		return m.ValueSatoshis
	}
	return 0
}

func (m *MicroTX) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *MicroTX) GetChangeAddress() string {
	if m != nil {
		return m.ChangeAddress
	}
	return ""
}

func (m *MicroTX) GetWaitGuarantee() bool {
	if m != nil {
		return m.WaitGuarantee
	}
	return false
}

func (m *MicroTX) GetTosign() []string {
	if m != nil {
		return m.Tosign
	}
	return nil
}

func (m *MicroTX) GetSignatures() []string {
	if m != nil {
		return m.Signatures
	}
	return nil
}

func (m *MicroTX) GetInputs() []*TXInput {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *MicroTX) GetOutputs() []*TXOutput {
	if m != nil {
		return m.Outputs
	}
	return nil
}

func (m *MicroTX) GetFees() int32 {
	if m != nil {
		return m.Fees
	}
	return 0
}

func (m *MicroTX) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

type MicrotransactionEndpointRequest struct {
	Network NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.btc.NetworkAllowingAlias" json:"network,omitempty"`
	// Hex-encoded public key from which you’re sending coins.
	FromPubkey string `protobuf:"bytes,2,opt,name=from_pubkey,json=fromPubkey,proto3" json:"from_pubkey,omitempty"`
	// Hex-encoded private key from which you’re sending coins.
	FromPrivate string `protobuf:"bytes,3,opt,name=from_private,json=fromPrivate,proto3" json:"from_private,omitempty"`
	// WIF-encoded private key from which you’re sending coins.
	FromWif string `protobuf:"bytes,4,opt,name=from_wif,json=fromWif,proto3" json:"from_wif,omitempty"`
	// The target address to which you’re sending coins.
	ToAddress string `protobuf:"bytes,5,opt,name=to_address,json=toAddress,proto3" json:"to_address,omitempty"`
	// Value you’re sending/you’ve sent in satoshis.
	ValueSatoshis uint32 `protobuf:"varint,6,opt,name=value_satoshis,json=valueSatoshis,proto3" json:"value_satoshis,omitempty"`
	// Your Block API token
	Token string `protobuf:"bytes,7,opt,name=token,proto3" json:"token,omitempty"`
	// Optional Address Block will use to send back your change. If not set, defaults to the address from which the coins were originally sent. While not required, we recommend that you set a change address.
	ChangeAddress string `protobuf:"bytes,8,opt,name=change_address,json=changeAddress,proto3" json:"change_address,omitempty"`
	// Optional If not set, defaults to true, which means the API will wait for Block to guarantee the transaction, using our Confidence Factor. The guarantee usually takes around 8 seconds. If manually set to false, the Microtransaction endpoint will return as soon as the transaction is broadcast.
	WaitGuarantee bool `protobuf:"varint,9,opt,name=wait_guarantee,json=waitGuarantee,proto3" json:"wait_guarantee,omitempty"`
	// Optional Hex-encoded data for you to sign after initiating the microtransaction. Sent in reply to a microtransaction generated using from_pubkey/a public key.
	Tosign []string `protobuf:"bytes,10,rep,name=tosign,proto3" json:"tosign,omitempty"`
	// Optional Hex-encoded signatures for you to send back after having received (and signed) tosign.
	Signatures []string `protobuf:"bytes,11,rep,name=signatures,proto3" json:"signatures,omitempty"`
	// Optional Partial list of inputs that will be used with this transaction. Inputs themsleves are heavily pared down, see cURL sample. Only returned when using from_pubkey.
	Inputs []*TXInput `protobuf:"bytes,12,rep,name=inputs,proto3" json:"inputs,omitempty"`
	// Optional Partial list of outputs that will be used with this transaction. Outputs themselves are heavily pared down, see cURL sample. Only returned when using from_pubkey.
	Outputs []*TXOutput `protobuf:"bytes,13,rep,name=outputs,proto3" json:"outputs,omitempty"`
	// Optional Block’s optimally calculated fees for this MicroTX to guarantee swift 99% confirmation, only returned when using from_pubkey. Block pays these fees for the first 8,000 microtransactions, but like regular transactions, it is deducted from the source address thereafter.
	Fees int32 `protobuf:"varint,14,opt,name=fees,proto3" json:"fees,omitempty"`
	// Optional The hash of the finalized transaction, once sent.
	Hash                 string   `protobuf:"bytes,15,opt,name=hash,proto3" json:"hash,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MicrotransactionEndpointRequest) Reset()         { *m = MicrotransactionEndpointRequest{} }
func (m *MicrotransactionEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*MicrotransactionEndpointRequest) ProtoMessage()    {}
func (*MicrotransactionEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_microtransactionMessage_ee0839f006bf0406, []int{1}
}
func (m *MicrotransactionEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MicrotransactionEndpointRequest.Unmarshal(m, b)
}
func (m *MicrotransactionEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MicrotransactionEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *MicrotransactionEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MicrotransactionEndpointRequest.Merge(dst, src)
}
func (m *MicrotransactionEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_MicrotransactionEndpointRequest.Size(m)
}
func (m *MicrotransactionEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_MicrotransactionEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_MicrotransactionEndpointRequest proto.InternalMessageInfo

func (m *MicrotransactionEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAINNET
}

func (m *MicrotransactionEndpointRequest) GetFromPubkey() string {
	if m != nil {
		return m.FromPubkey
	}
	return ""
}

func (m *MicrotransactionEndpointRequest) GetFromPrivate() string {
	if m != nil {
		return m.FromPrivate
	}
	return ""
}

func (m *MicrotransactionEndpointRequest) GetFromWif() string {
	if m != nil {
		return m.FromWif
	}
	return ""
}

func (m *MicrotransactionEndpointRequest) GetToAddress() string {
	if m != nil {
		return m.ToAddress
	}
	return ""
}

func (m *MicrotransactionEndpointRequest) GetValueSatoshis() uint32 {
	if m != nil {
		return m.ValueSatoshis
	}
	return 0
}

func (m *MicrotransactionEndpointRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *MicrotransactionEndpointRequest) GetChangeAddress() string {
	if m != nil {
		return m.ChangeAddress
	}
	return ""
}

func (m *MicrotransactionEndpointRequest) GetWaitGuarantee() bool {
	if m != nil {
		return m.WaitGuarantee
	}
	return false
}

func (m *MicrotransactionEndpointRequest) GetTosign() []string {
	if m != nil {
		return m.Tosign
	}
	return nil
}

func (m *MicrotransactionEndpointRequest) GetSignatures() []string {
	if m != nil {
		return m.Signatures
	}
	return nil
}

func (m *MicrotransactionEndpointRequest) GetInputs() []*TXInput {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *MicrotransactionEndpointRequest) GetOutputs() []*TXOutput {
	if m != nil {
		return m.Outputs
	}
	return nil
}

func (m *MicrotransactionEndpointRequest) GetFees() int32 {
	if m != nil {
		return m.Fees
	}
	return 0
}

func (m *MicrotransactionEndpointRequest) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func init() {
	proto.RegisterType((*MicroTX)(nil), "chainweaver.protobuf.btc.MicroTX")
	proto.RegisterType((*MicrotransactionEndpointRequest)(nil), "chainweaver.protobuf.btc.MicrotransactionEndpointRequest")
}

func init() {
	proto.RegisterFile("microtransactionMessage.proto", fileDescriptor_microtransactionMessage_ee0839f006bf0406)
}

var fileDescriptor_microtransactionMessage_ee0839f006bf0406 = []byte{
	// 499 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x92, 0x4f, 0x8b, 0xd3, 0x40,
	0x18, 0xc6, 0xe9, 0xf6, 0x4f, 0xda, 0xb7, 0x4d, 0x85, 0x51, 0x64, 0x14, 0xd6, 0xcd, 0x16, 0x84,
	0x5c, 0x36, 0xc5, 0xdd, 0x93, 0xe0, 0xa5, 0x82, 0xa8, 0x87, 0xea, 0x12, 0x17, 0x5c, 0xbc, 0x94,
	0x49, 0x3a, 0x49, 0x86, 0x36, 0x33, 0x75, 0xe6, 0x4d, 0x83, 0x1f, 0xd2, 0x4f, 0xe2, 0x97, 0x90,
	0x4c, 0x5a, 0x2d, 0xc5, 0xcd, 0x8a, 0x9e, 0x32, 0xf3, 0x7b, 0x9f, 0x67, 0x26, 0x24, 0x3f, 0x38,
	0xcd, 0x45, 0xac, 0x15, 0x6a, 0x26, 0x0d, 0x8b, 0x51, 0x28, 0x39, 0xe7, 0xc6, 0xb0, 0x94, 0x07,
	0x1b, 0xad, 0x50, 0x11, 0x1a, 0x67, 0x4c, 0xc8, 0x92, 0xb3, 0x2d, 0xd7, 0x35, 0x8a, 0x8a, 0x24,
	0x88, 0x30, 0x7e, 0xfa, 0x30, 0x56, 0x79, 0x7e, 0x14, 0x9f, 0xfc, 0x68, 0x83, 0x33, 0xaf, 0x0e,
	0xbc, 0xb9, 0x25, 0x67, 0x30, 0x4c, 0xb4, 0xca, 0x17, 0x9b, 0x22, 0x5a, 0xf1, 0x6f, 0xb4, 0xe5,
	0xb5, 0xfc, 0x41, 0x08, 0x15, 0xba, 0xb6, 0x84, 0x9c, 0xc3, 0xa8, 0x0e, 0x68, 0xb1, 0x65, 0xc8,
	0xe9, 0x89, 0x4d, 0xd8, 0xd2, 0x75, 0x8d, 0xc8, 0x13, 0xe8, 0xdb, 0x48, 0x29, 0x12, 0xda, 0xb6,
	0x63, 0xa7, 0xda, 0x7f, 0x16, 0x09, 0x39, 0x05, 0x40, 0xb5, 0x60, 0xcb, 0xa5, 0xe6, 0xc6, 0xd0,
	0x8e, 0x1d, 0x0e, 0x50, 0xcd, 0x6a, 0x40, 0x9e, 0xc3, 0x78, 0xcb, 0xd6, 0x05, 0x5f, 0x18, 0x86,
	0xca, 0x64, 0xc2, 0xd0, 0xae, 0xd7, 0xf2, 0xdd, 0xd0, 0xb5, 0xf4, 0xd3, 0x0e, 0x92, 0x47, 0xd0,
	0x45, 0xb5, 0xe2, 0x92, 0xf6, 0xec, 0x01, 0xf5, 0xa6, 0x2a, 0xc7, 0x19, 0x93, 0x29, 0xff, 0x75,
	0xbe, 0x63, 0xc7, 0x6e, 0x4d, 0x0f, 0xee, 0x28, 0x99, 0xc0, 0x45, 0x5a, 0x30, 0xcd, 0x24, 0x72,
	0x4e, 0xfb, 0x5e, 0xcb, 0xef, 0x87, 0x6e, 0x45, 0xdf, 0xee, 0x21, 0x79, 0x0c, 0x3d, 0x54, 0x46,
	0xa4, 0x92, 0x0e, 0xbc, 0xb6, 0x3f, 0x08, 0x77, 0x3b, 0xf2, 0x0c, 0xa0, 0x7a, 0x32, 0x2c, 0x34,
	0x37, 0x14, 0xec, 0xec, 0x80, 0x90, 0x97, 0xd0, 0x13, 0x72, 0x53, 0xa0, 0xa1, 0x43, 0xaf, 0xed,
	0x0f, 0x2f, 0xcf, 0x83, 0xbb, 0x7e, 0x46, 0x70, 0x73, 0xfb, 0xbe, 0x4a, 0x86, 0xbb, 0x02, 0x79,
	0x05, 0x8e, 0x2a, 0xd0, 0x76, 0x47, 0xb6, 0x3b, 0x69, 0xea, 0x7e, 0xb4, 0xd1, 0x70, 0x5f, 0x21,
	0x04, 0x3a, 0x09, 0xe7, 0x86, 0xba, 0x5e, 0xcb, 0xef, 0x86, 0x76, 0x5d, 0xb1, 0x8c, 0x99, 0x8c,
	0x8e, 0xed, 0x87, 0xb0, 0xeb, 0xc9, 0xf7, 0x0e, 0x9c, 0xcd, 0x8f, 0xf4, 0x79, 0x23, 0x97, 0x1b,
	0x25, 0x24, 0x86, 0xfc, 0x6b, 0xc1, 0x0d, 0x92, 0x77, 0xe0, 0x48, 0x8e, 0xa5, 0xd2, 0x2b, 0x6b,
	0xc0, 0xf8, 0x32, 0xb8, 0xfb, 0x4d, 0x3e, 0xd4, 0xc1, 0xd9, 0x7a, 0xad, 0x4a, 0x21, 0xd3, 0xd9,
	0x5a, 0x30, 0x13, 0xee, 0xeb, 0xc7, 0x3e, 0x9d, 0xdc, 0xeb, 0x53, 0xbb, 0xd9, 0xa7, 0x4e, 0x93,
	0x4f, 0xdd, 0xfb, 0x7d, 0xea, 0x35, 0xfa, 0xe4, 0x34, 0xfb, 0xd4, 0xff, 0x3b, 0x9f, 0x06, 0xcd,
	0x3e, 0x41, 0x83, 0x4f, 0xc3, 0x06, 0x9f, 0x46, 0xff, 0xe1, 0x93, 0xfb, 0xef, 0x3e, 0x8d, 0xff,
	0xe0, 0xd3, 0x83, 0xdf, 0x3e, 0xbd, 0xbe, 0xfa, 0xf2, 0x22, 0x15, 0x98, 0x15, 0x51, 0x10, 0xab,
	0x7c, 0x7a, 0x70, 0xc1, 0x74, 0x7f, 0x41, 0xbd, 0x88, 0x2f, 0x52, 0x2e, 0x2f, 0x52, 0x35, 0x8d,
	0x30, 0x8e, 0x7a, 0x16, 0x5d, 0xfd, 0x0c, 0x00, 0x00, 0xff, 0xff, 0xb1, 0xcf, 0x6f, 0xb5, 0xc9,
	0x04, 0x00, 0x00,
}
