// Code generated by protoc-gen-go. DO NOT EDIT.
// source: transactionMessage.proto

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

type TXs struct {
	Result               []*TX    `protobuf:"bytes,1,rep,name=result,proto3" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TXs) Reset()         { *m = TXs{} }
func (m *TXs) String() string { return proto.CompactTextString(m) }
func (*TXs) ProtoMessage()    {}
func (*TXs) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactionMessage_81c680c8fb793bfe, []int{0}
}
func (m *TXs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TXs.Unmarshal(m, b)
}
func (m *TXs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TXs.Marshal(b, m, deterministic)
}
func (dst *TXs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TXs.Merge(dst, src)
}
func (m *TXs) XXX_Size() int {
	return xxx_messageInfo_TXs.Size(m)
}
func (m *TXs) XXX_DiscardUnknown() {
	xxx_messageInfo_TXs.DiscardUnknown(m)
}

var xxx_messageInfo_TXs proto.InternalMessageInfo

func (m *TXs) GetResult() []*TX {
	if m != nil {
		return m.Result
	}
	return nil
}

type TransactionHashEndpointRequest struct {
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	Txhash               string               `protobuf:"bytes,2,opt,name=txhash,proto3" json:"txhash,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *TransactionHashEndpointRequest) Reset()         { *m = TransactionHashEndpointRequest{} }
func (m *TransactionHashEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*TransactionHashEndpointRequest) ProtoMessage()    {}
func (*TransactionHashEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactionMessage_81c680c8fb793bfe, []int{1}
}
func (m *TransactionHashEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransactionHashEndpointRequest.Unmarshal(m, b)
}
func (m *TransactionHashEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransactionHashEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *TransactionHashEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransactionHashEndpointRequest.Merge(dst, src)
}
func (m *TransactionHashEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_TransactionHashEndpointRequest.Size(m)
}
func (m *TransactionHashEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_TransactionHashEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_TransactionHashEndpointRequest proto.InternalMessageInfo

func (m *TransactionHashEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func (m *TransactionHashEndpointRequest) GetTxhash() string {
	if m != nil {
		return m.Txhash
	}
	return ""
}

type UnconfirmedTransactionsEndpointRequest struct {
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *UnconfirmedTransactionsEndpointRequest) Reset() {
	*m = UnconfirmedTransactionsEndpointRequest{}
}
func (m *UnconfirmedTransactionsEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*UnconfirmedTransactionsEndpointRequest) ProtoMessage()    {}
func (*UnconfirmedTransactionsEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactionMessage_81c680c8fb793bfe, []int{2}
}
func (m *UnconfirmedTransactionsEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UnconfirmedTransactionsEndpointRequest.Unmarshal(m, b)
}
func (m *UnconfirmedTransactionsEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UnconfirmedTransactionsEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *UnconfirmedTransactionsEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UnconfirmedTransactionsEndpointRequest.Merge(dst, src)
}
func (m *UnconfirmedTransactionsEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_UnconfirmedTransactionsEndpointRequest.Size(m)
}
func (m *UnconfirmedTransactionsEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UnconfirmedTransactionsEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UnconfirmedTransactionsEndpointRequest proto.InternalMessageInfo

func (m *UnconfirmedTransactionsEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

type CreateTransactionEndpointRequest struct {
	Network NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	// Height of the block that contains this transaction. If this is an unconfirmed transaction, it will equal -1.
	BlockHeight int32 `protobuf:"varint,2,opt,name=block_height,json=blockHeight,proto3" json:"block_height,omitempty"`
	// The hash of the transaction.
	Hash string `protobuf:"bytes,3,opt,name=hash,proto3" json:"hash,omitempty"`
	// Array of Ethereum addresses involved in the transaction.
	Addresses []string `protobuf:"bytes,4,rep,name=addresses,proto3" json:"addresses,omitempty"`
	// The total number of wei exchanged in this transaction.
	Total []byte `protobuf:"bytes,5,opt,name=total,proto3" json:"total,omitempty"`
	// The total number of wei exchanged in this transaction. This is a hex string.
	TotalHex string `protobuf:"bytes,6,opt,name=total_hex,json=totalHex,proto3" json:"total_hex,omitempty"`
	// The total number of fees—in wei—collected by miners in this transaction. Equal to gas_price * gas_used.
	Fees []byte `protobuf:"bytes,7,opt,name=fees,proto3" json:"fees,omitempty"`
	// The total number of fees—in wei—collected by miners in this transaction. Equal to gas_price * gas_used. This is a hex string.
	FeesHex string `protobuf:"bytes,8,opt,name=fees_hex,json=feesHex,proto3" json:"fees_hex,omitempty"`
	// The size of the transaction in bytes.
	Size uint64 `protobuf:"varint,9,opt,name=size,proto3" json:"size,omitempty"`
	// The amount of gas used by this transaction.
	GasUsed []byte `protobuf:"bytes,10,opt,name=gas_used,json=gasUsed,proto3" json:"gas_used,omitempty"`
	// The amount of gas used by this transaction. This is a hex string.
	GasUsedHex string `protobuf:"bytes,11,opt,name=gas_used_hex,json=gasUsedHex,proto3" json:"gas_used_hex,omitempty"`
	// The price of gas—in wei—in this transaction.
	GasPrice []byte `protobuf:"bytes,12,opt,name=gas_price,json=gasPrice,proto3" json:"gas_price,omitempty"`
	// The price of gas—in wei—in this transaction. This is a hex string.
	GasPriceHex string `protobuf:"bytes,13,opt,name=gas_price_hex,json=gasPriceHex,proto3" json:"gas_price_hex,omitempty"`
	// Address of the peer that sent BlockCypher’s servers this transaction. May be empty.
	RelayedBy string `protobuf:"bytes,14,opt,name=relayed_by,json=relayedBy,proto3" json:"relayed_by,omitempty"`
	// Time this transaction was received by BlockCypher’s servers.
	Received string `protobuf:"bytes,15,opt,name=received,proto3" json:"received,omitempty"`
	// Version number of this transaction.
	Ver int32 `protobuf:"varint,16,opt,name=ver,proto3" json:"ver,omitempty"`
	// true if this is an attempted double spend; false otherwise.
	DoubleSpend bool `protobuf:"varint,17,opt,name=double_spend,json=doubleSpend,proto3" json:"double_spend,omitempty"`
	// Total number of inputs in the transaction.
	VinSz int32 `protobuf:"varint,18,opt,name=vin_sz,json=vinSz,proto3" json:"vin_sz,omitempty"`
	// Total number of outputs in the transaction.
	VoutSz int32 `protobuf:"varint,19,opt,name=vout_sz,json=voutSz,proto3" json:"vout_sz,omitempty"`
	// Number of subsequent blocks, including the block the transaction is in. Unconfirmed transactions have 0 confirmations.
	Confirmations int32 `protobuf:"varint,20,opt,name=confirmations,proto3" json:"confirmations,omitempty"`
	// An array object containing a single input with a sequence number (used as a nonce for account balances) and an Ethereum account address. Only contains one input in the array; we still use an array to maintain parity with the Bitcoin API.
	Inputs []*InputType `protobuf:"bytes,21,rep,name=inputs,proto3" json:"inputs,omitempty"`
	// An array object containing a single output with value (in wei), script, and an Ethereum account address. Only contains one output in the array; we still use an array to maintain parity with the Bitcoin API.
	Outputs []*OutputType `protobuf:"bytes,22,rep,name=outputs,proto3" json:"outputs,omitempty"`
	// Optional If this transaction executed a contract which propagated its own subsequent transactions, then this array will be present, containing the hashes of those subsequent internal transactions.
	InternalTxids []string `protobuf:"bytes,23,rep,name=internal_txids,json=internalTxids,proto3" json:"internal_txids,omitempty"`
	// Optional If this transaction was initiated by a contract, this field will be present, conveying the hash of the parent transaction that executed the contract resulting in this transaction (the inverse of an internal_txids hash).
	ParentTx string `protobuf:"bytes,24,opt,name=parent_tx,json=parentTx,proto3" json:"parent_tx,omitempty"`
	// Optional Time at which transaction was included in a block; only present for confirmed transactions.
	Confirmed string `protobuf:"bytes,25,opt,name=confirmed,proto3" json:"confirmed,omitempty"`
	// Optional If creating a transaction, can optionally set a higher default gas limit (useful if your recepient is a contract). If not set, default is 21000 gas for external accounts and 80000 for contract accounts.
	GasLimit []byte `protobuf:"bytes,26,opt,name=gas_limit,json=gasLimit,proto3" json:"gas_limit,omitempty"`
	// Optional If creating a transaction, can optionally set a higher default gas limit (useful if your recepient is a contract). If not set, default is 21000 gas for external accounts and 80000 for contract accounts. This is a hex string.
	GasLimitHex string `protobuf:"bytes,27,opt,name=gas_limit_hex,json=gasLimitHex,proto3" json:"gas_limit_hex,omitempty"`
	// Optional If true, this transaction was used to create a contract and contract account. Note that the contract address (in the outputs field) will be blank until the transaction is confirmed.
	ContractCreation bool `protobuf:"varint,28,opt,name=contract_creation,json=contractCreation,proto3" json:"contract_creation,omitempty"`
	// Optional Number of peers that have sent this transaction to BlockCypher; only present for unconfirmed transactions.
	ReceiveCount int32 `protobuf:"varint,29,opt,name=receive_count,json=receiveCount,proto3" json:"receive_count,omitempty"`
	// Optional Hash of the block that contains this transaction; only present for confirmed transactions.
	BlockHash string `protobuf:"bytes,30,opt,name=block_hash,json=blockHash,proto3" json:"block_hash,omitempty"`
	// Optional Canonical, zero-indexed location of this transaction in a block; only present for confirmed transactions.
	BlockIndex int32 `protobuf:"varint,31,opt,name=block_index,json=blockIndex,proto3" json:"block_index,omitempty"`
	// Optional If this transaction is a double-spend (i.e. double_spend == true) then this is the hash of the transaction it’s double-spending.
	DoubleOf string `protobuf:"bytes,32,opt,name=double_of,json=doubleOf,proto3" json:"double_of,omitempty"`
	// Optional If this transaction has an execution error, then this field will be included (e.g. “out of gas”).
	ExecutionError string `protobuf:"bytes,33,opt,name=execution_error,json=executionError,proto3" json:"execution_error,omitempty"`
	// Token
	Token                string   `protobuf:"bytes,34,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateTransactionEndpointRequest) Reset()         { *m = CreateTransactionEndpointRequest{} }
func (m *CreateTransactionEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*CreateTransactionEndpointRequest) ProtoMessage()    {}
func (*CreateTransactionEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactionMessage_81c680c8fb793bfe, []int{3}
}
func (m *CreateTransactionEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateTransactionEndpointRequest.Unmarshal(m, b)
}
func (m *CreateTransactionEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateTransactionEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *CreateTransactionEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateTransactionEndpointRequest.Merge(dst, src)
}
func (m *CreateTransactionEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_CreateTransactionEndpointRequest.Size(m)
}
func (m *CreateTransactionEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateTransactionEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateTransactionEndpointRequest proto.InternalMessageInfo

func (m *CreateTransactionEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func (m *CreateTransactionEndpointRequest) GetBlockHeight() int32 {
	if m != nil {
		return m.BlockHeight
	}
	return 0
}

func (m *CreateTransactionEndpointRequest) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetAddresses() []string {
	if m != nil {
		return m.Addresses
	}
	return nil
}

func (m *CreateTransactionEndpointRequest) GetTotal() []byte {
	if m != nil {
		return m.Total
	}
	return nil
}

func (m *CreateTransactionEndpointRequest) GetTotalHex() string {
	if m != nil {
		return m.TotalHex
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetFees() []byte {
	if m != nil {
		return m.Fees
	}
	return nil
}

func (m *CreateTransactionEndpointRequest) GetFeesHex() string {
	if m != nil {
		return m.FeesHex
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetSize() uint64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *CreateTransactionEndpointRequest) GetGasUsed() []byte {
	if m != nil {
		return m.GasUsed
	}
	return nil
}

func (m *CreateTransactionEndpointRequest) GetGasUsedHex() string {
	if m != nil {
		return m.GasUsedHex
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetGasPrice() []byte {
	if m != nil {
		return m.GasPrice
	}
	return nil
}

func (m *CreateTransactionEndpointRequest) GetGasPriceHex() string {
	if m != nil {
		return m.GasPriceHex
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetRelayedBy() string {
	if m != nil {
		return m.RelayedBy
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetReceived() string {
	if m != nil {
		return m.Received
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetVer() int32 {
	if m != nil {
		return m.Ver
	}
	return 0
}

func (m *CreateTransactionEndpointRequest) GetDoubleSpend() bool {
	if m != nil {
		return m.DoubleSpend
	}
	return false
}

func (m *CreateTransactionEndpointRequest) GetVinSz() int32 {
	if m != nil {
		return m.VinSz
	}
	return 0
}

func (m *CreateTransactionEndpointRequest) GetVoutSz() int32 {
	if m != nil {
		return m.VoutSz
	}
	return 0
}

func (m *CreateTransactionEndpointRequest) GetConfirmations() int32 {
	if m != nil {
		return m.Confirmations
	}
	return 0
}

func (m *CreateTransactionEndpointRequest) GetInputs() []*InputType {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *CreateTransactionEndpointRequest) GetOutputs() []*OutputType {
	if m != nil {
		return m.Outputs
	}
	return nil
}

func (m *CreateTransactionEndpointRequest) GetInternalTxids() []string {
	if m != nil {
		return m.InternalTxids
	}
	return nil
}

func (m *CreateTransactionEndpointRequest) GetParentTx() string {
	if m != nil {
		return m.ParentTx
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetConfirmed() string {
	if m != nil {
		return m.Confirmed
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetGasLimit() []byte {
	if m != nil {
		return m.GasLimit
	}
	return nil
}

func (m *CreateTransactionEndpointRequest) GetGasLimitHex() string {
	if m != nil {
		return m.GasLimitHex
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetContractCreation() bool {
	if m != nil {
		return m.ContractCreation
	}
	return false
}

func (m *CreateTransactionEndpointRequest) GetReceiveCount() int32 {
	if m != nil {
		return m.ReceiveCount
	}
	return 0
}

func (m *CreateTransactionEndpointRequest) GetBlockHash() string {
	if m != nil {
		return m.BlockHash
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetBlockIndex() int32 {
	if m != nil {
		return m.BlockIndex
	}
	return 0
}

func (m *CreateTransactionEndpointRequest) GetDoubleOf() string {
	if m != nil {
		return m.DoubleOf
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetExecutionError() string {
	if m != nil {
		return m.ExecutionError
	}
	return ""
}

func (m *CreateTransactionEndpointRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

type SendTransactionEndpointRequest struct {
	Network NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	// A temporary TX, usually returned fully filled.
	Tx *TX `protobuf:"bytes,2,opt,name=tx,proto3" json:"tx,omitempty"`
	// Array of hex-encoded data for you to sign, containing one element for you to sign. Still an array to maintain parity with the Bitcoin API.
	Tosign []string `protobuf:"bytes,3,rep,name=tosign,proto3" json:"tosign,omitempty"`
	// Array of signatures corresponding to all the data in tosign, typically provided by you. Only one signature is required.
	Signatures []string `protobuf:"bytes,4,rep,name=signatures,proto3" json:"signatures,omitempty"`
	// Optional Array of errors in the form “error”:“description-of-error”. This is only returned if there was an error in any stage of transaction generation, and is usually accompanied by a HTTP 400 code.
	Errors []string `protobuf:"bytes,5,rep,name=errors,proto3" json:"errors,omitempty"`
	// Token
	Token                string   `protobuf:"bytes,6,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SendTransactionEndpointRequest) Reset()         { *m = SendTransactionEndpointRequest{} }
func (m *SendTransactionEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*SendTransactionEndpointRequest) ProtoMessage()    {}
func (*SendTransactionEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactionMessage_81c680c8fb793bfe, []int{4}
}
func (m *SendTransactionEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SendTransactionEndpointRequest.Unmarshal(m, b)
}
func (m *SendTransactionEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SendTransactionEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *SendTransactionEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SendTransactionEndpointRequest.Merge(dst, src)
}
func (m *SendTransactionEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_SendTransactionEndpointRequest.Size(m)
}
func (m *SendTransactionEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_SendTransactionEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_SendTransactionEndpointRequest proto.InternalMessageInfo

func (m *SendTransactionEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func (m *SendTransactionEndpointRequest) GetTx() *TX {
	if m != nil {
		return m.Tx
	}
	return nil
}

func (m *SendTransactionEndpointRequest) GetTosign() []string {
	if m != nil {
		return m.Tosign
	}
	return nil
}

func (m *SendTransactionEndpointRequest) GetSignatures() []string {
	if m != nil {
		return m.Signatures
	}
	return nil
}

func (m *SendTransactionEndpointRequest) GetErrors() []string {
	if m != nil {
		return m.Errors
	}
	return nil
}

func (m *SendTransactionEndpointRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

type DecodeRawTransactionEndpointRequest struct {
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	Tx                   string               `protobuf:"bytes,2,opt,name=tx,proto3" json:"tx,omitempty"`
	Token                string               `protobuf:"bytes,3,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *DecodeRawTransactionEndpointRequest) Reset()         { *m = DecodeRawTransactionEndpointRequest{} }
func (m *DecodeRawTransactionEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*DecodeRawTransactionEndpointRequest) ProtoMessage()    {}
func (*DecodeRawTransactionEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactionMessage_81c680c8fb793bfe, []int{5}
}
func (m *DecodeRawTransactionEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DecodeRawTransactionEndpointRequest.Unmarshal(m, b)
}
func (m *DecodeRawTransactionEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DecodeRawTransactionEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *DecodeRawTransactionEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DecodeRawTransactionEndpointRequest.Merge(dst, src)
}
func (m *DecodeRawTransactionEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_DecodeRawTransactionEndpointRequest.Size(m)
}
func (m *DecodeRawTransactionEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DecodeRawTransactionEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DecodeRawTransactionEndpointRequest proto.InternalMessageInfo

func (m *DecodeRawTransactionEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func (m *DecodeRawTransactionEndpointRequest) GetTx() string {
	if m != nil {
		return m.Tx
	}
	return ""
}

func (m *DecodeRawTransactionEndpointRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

type PushRawTransactionEndpointRequest struct {
	Network              NetworkAllowingAlias `protobuf:"varint,1,opt,name=network,proto3,enum=chainweaver.protobuf.eth.NetworkAllowingAlias" json:"network,omitempty"`
	Tx                   string               `protobuf:"bytes,2,opt,name=tx,proto3" json:"tx,omitempty"`
	Token                string               `protobuf:"bytes,3,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *PushRawTransactionEndpointRequest) Reset()         { *m = PushRawTransactionEndpointRequest{} }
func (m *PushRawTransactionEndpointRequest) String() string { return proto.CompactTextString(m) }
func (*PushRawTransactionEndpointRequest) ProtoMessage()    {}
func (*PushRawTransactionEndpointRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactionMessage_81c680c8fb793bfe, []int{6}
}
func (m *PushRawTransactionEndpointRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PushRawTransactionEndpointRequest.Unmarshal(m, b)
}
func (m *PushRawTransactionEndpointRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PushRawTransactionEndpointRequest.Marshal(b, m, deterministic)
}
func (dst *PushRawTransactionEndpointRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PushRawTransactionEndpointRequest.Merge(dst, src)
}
func (m *PushRawTransactionEndpointRequest) XXX_Size() int {
	return xxx_messageInfo_PushRawTransactionEndpointRequest.Size(m)
}
func (m *PushRawTransactionEndpointRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PushRawTransactionEndpointRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PushRawTransactionEndpointRequest proto.InternalMessageInfo

func (m *PushRawTransactionEndpointRequest) GetNetwork() NetworkAllowingAlias {
	if m != nil {
		return m.Network
	}
	return NetworkAllowingAlias_MAIN
}

func (m *PushRawTransactionEndpointRequest) GetTx() string {
	if m != nil {
		return m.Tx
	}
	return ""
}

func (m *PushRawTransactionEndpointRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func init() {
	proto.RegisterType((*TXs)(nil), "chainweaver.protobuf.eth.TXs")
	proto.RegisterType((*TransactionHashEndpointRequest)(nil), "chainweaver.protobuf.eth.TransactionHashEndpointRequest")
	proto.RegisterType((*UnconfirmedTransactionsEndpointRequest)(nil), "chainweaver.protobuf.eth.UnconfirmedTransactionsEndpointRequest")
	proto.RegisterType((*CreateTransactionEndpointRequest)(nil), "chainweaver.protobuf.eth.CreateTransactionEndpointRequest")
	proto.RegisterType((*SendTransactionEndpointRequest)(nil), "chainweaver.protobuf.eth.SendTransactionEndpointRequest")
	proto.RegisterType((*DecodeRawTransactionEndpointRequest)(nil), "chainweaver.protobuf.eth.DecodeRawTransactionEndpointRequest")
	proto.RegisterType((*PushRawTransactionEndpointRequest)(nil), "chainweaver.protobuf.eth.PushRawTransactionEndpointRequest")
}

func init() {
	proto.RegisterFile("transactionMessage.proto", fileDescriptor_transactionMessage_81c680c8fb793bfe)
}

var fileDescriptor_transactionMessage_81c680c8fb793bfe = []byte{
	// 946 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x56, 0xdd, 0x6f, 0xdb, 0xb6,
	0x17, 0x85, 0xe2, 0xc4, 0x1f, 0x37, 0x1f, 0x4d, 0x99, 0x36, 0x65, 0xd3, 0x34, 0x75, 0x9c, 0xfc,
	0x7e, 0x33, 0xd0, 0xc6, 0x6e, 0x9b, 0x3d, 0x6c, 0x2b, 0x30, 0x20, 0xc9, 0x3a, 0xa4, 0xc0, 0xb6,
	0x16, 0x8a, 0x0b, 0x14, 0x1b, 0x36, 0x81, 0x96, 0xae, 0x25, 0x21, 0x0e, 0xe9, 0x91, 0x94, 0xa3,
	0xe4, 0x6d, 0x7b, 0xdc, 0xe3, 0x86, 0xfd, 0xbb, 0xc3, 0xc0, 0x2b, 0xd9, 0xf1, 0x06, 0x24, 0x7d,
	0x6a, 0xb1, 0x27, 0xf3, 0x1e, 0xf2, 0x9c, 0x4b, 0xde, 0x43, 0x5e, 0x19, 0xb8, 0xd5, 0x42, 0x1a,
	0x11, 0xda, 0x54, 0xc9, 0x6f, 0xd1, 0x18, 0x11, 0x63, 0x67, 0xa4, 0x95, 0x55, 0x8c, 0x87, 0x89,
	0x48, 0xe5, 0x39, 0x8a, 0x31, 0xea, 0x02, 0xea, 0x67, 0x83, 0x0e, 0xda, 0x64, 0xe3, 0x09, 0x45,
	0xe1, 0x5e, 0x8c, 0x72, 0xcf, 0x9c, 0x8b, 0x38, 0x46, 0xdd, 0x55, 0x23, 0xa7, 0x60, 0xba, 0x42,
	0x4a, 0x65, 0x05, 0x8d, 0x0b, 0xd2, 0xc6, 0x5a, 0xa8, 0xce, 0xce, 0xfe, 0x25, 0xde, 0x7a, 0x01,
	0x95, 0xde, 0x3b, 0xc3, 0x3e, 0x85, 0xaa, 0x46, 0x93, 0x0d, 0x2d, 0xf7, 0x9a, 0x95, 0xf6, 0xe2,
	0xf3, 0xcd, 0xce, 0x75, 0x49, 0x3b, 0xbd, 0x77, 0x7e, 0xb9, 0xb6, 0xf5, 0xab, 0x07, 0x5b, 0xbd,
	0xab, 0x6d, 0x1f, 0x0b, 0x93, 0xbc, 0x94, 0xd1, 0x48, 0xa5, 0xd2, 0xfa, 0xf8, 0x73, 0x86, 0xc6,
	0xb2, 0x63, 0xa8, 0x49, 0xb4, 0xe7, 0x4a, 0x9f, 0x72, 0xaf, 0xe9, 0xb5, 0x57, 0x9e, 0x77, 0xae,
	0x57, 0xfe, 0xae, 0x58, 0x78, 0x30, 0x1c, 0xaa, 0xf3, 0x54, 0xc6, 0x07, 0xc3, 0x54, 0x18, 0x7f,
	0x42, 0x67, 0xeb, 0x50, 0xb5, 0x79, 0x22, 0x4c, 0xc2, 0xe7, 0x9a, 0x5e, 0xbb, 0xe1, 0x97, 0x51,
	0x4b, 0xc3, 0xff, 0xdf, 0xca, 0x50, 0xc9, 0x41, 0xaa, 0xcf, 0x30, 0x9a, 0xd9, 0x8e, 0xf9, 0x60,
	0x7b, 0x69, 0xfd, 0x02, 0xd0, 0x3c, 0xd2, 0x28, 0x2c, 0xce, 0xe4, 0xfb, 0x70, 0x47, 0xdf, 0x86,
	0xa5, 0xfe, 0x50, 0x85, 0xa7, 0x41, 0x82, 0x69, 0x9c, 0x58, 0x2a, 0xc0, 0x82, 0xbf, 0x48, 0xd8,
	0x31, 0x41, 0x8c, 0xc1, 0x3c, 0xd5, 0xa6, 0x42, 0xb5, 0xa1, 0x31, 0xdb, 0x84, 0x86, 0x88, 0x22,
	0x8d, 0xc6, 0xa0, 0xe1, 0xf3, 0xcd, 0x4a, 0xbb, 0xe1, 0x5f, 0x01, 0xec, 0x0e, 0x2c, 0x58, 0x65,
	0xc5, 0x90, 0x2f, 0x34, 0xbd, 0xf6, 0x92, 0x5f, 0x04, 0x6c, 0x1f, 0x1a, 0x34, 0x08, 0x12, 0xcc,
	0x79, 0xd5, 0x89, 0x1d, 0xae, 0xff, 0x7e, 0xb0, 0xf6, 0x9b, 0xb7, 0xfa, 0xd3, 0xd3, 0xfc, 0x87,
	0xa7, 0x7b, 0x9f, 0x8b, 0xbd, 0xc1, 0xc1, 0xde, 0xd7, 0x3f, 0x3e, 0xde, 0xf5, 0xeb, 0xb4, 0xf0,
	0x18, 0x73, 0x97, 0x7c, 0x80, 0x68, 0x78, 0x8d, 0x94, 0x68, 0xcc, 0x9e, 0x41, 0xdd, 0xfd, 0x92,
	0x4e, 0xfd, 0x46, 0x9d, 0x9a, 0x5b, 0x57, 0xca, 0x98, 0xf4, 0x12, 0x79, 0xa3, 0xe9, 0xb5, 0xe7,
	0x7d, 0x1a, 0xb3, 0xfb, 0x50, 0x8f, 0x85, 0x09, 0x32, 0x83, 0x11, 0x07, 0x92, 0xaf, 0xc5, 0xc2,
	0xbc, 0x35, 0x18, 0xb1, 0xcf, 0x60, 0x69, 0x32, 0x45, 0x59, 0x16, 0x6f, 0xcc, 0x02, 0x25, 0xcd,
	0x25, 0x7a, 0x00, 0x0d, 0xc7, 0x1c, 0xe9, 0x34, 0x44, 0xbe, 0x44, 0xaa, 0x2e, 0xcb, 0x1b, 0x17,
	0xb3, 0x2f, 0x60, 0x79, 0x3a, 0x49, 0xba, 0xcb, 0x37, 0xea, 0x2e, 0x4e, 0x88, 0x4e, 0xf8, 0x21,
	0x80, 0xc6, 0xa1, 0xb8, 0xc0, 0x28, 0xe8, 0x5f, 0xf0, 0x15, 0xf2, 0xa2, 0x51, 0x22, 0x87, 0x17,
	0x6c, 0x03, 0xea, 0x1a, 0x43, 0x4c, 0xc7, 0x18, 0xf1, 0x5b, 0x34, 0x39, 0x8d, 0xd9, 0x2a, 0x54,
	0xc6, 0xa8, 0xf9, 0x2a, 0x59, 0xeb, 0x86, 0xce, 0xf5, 0x48, 0x65, 0xfd, 0x21, 0x06, 0x66, 0x84,
	0x32, 0xe2, 0xb7, 0x9b, 0x5e, 0xbb, 0xee, 0x2f, 0x16, 0xd8, 0x89, 0x83, 0xd8, 0x5d, 0xa8, 0x8e,
	0x53, 0x19, 0x98, 0x4b, 0xce, 0x88, 0xb7, 0x30, 0x4e, 0xe5, 0xc9, 0x25, 0xbb, 0x07, 0xb5, 0xb1,
	0xca, 0xac, 0xc3, 0xd7, 0x08, 0xaf, 0xba, 0xf0, 0xe4, 0x92, 0xed, 0xc2, 0x72, 0xf9, 0x52, 0x8a,
	0xce, 0xc0, 0xef, 0xd0, 0xf4, 0x3f, 0x41, 0xf6, 0x02, 0xaa, 0xa9, 0x1c, 0x65, 0xd6, 0xf0, 0xbb,
	0xd4, 0x0c, 0x76, 0xae, 0xbf, 0xb7, 0xaf, 0xdc, 0xba, 0xde, 0xc5, 0x08, 0xfd, 0x92, 0xc2, 0xbe,
	0x84, 0x9a, 0xca, 0x2c, 0xb1, 0xd7, 0x89, 0xbd, 0x7b, 0x3d, 0xfb, 0x35, 0x2d, 0x24, 0xfa, 0x84,
	0xc4, 0xfe, 0x07, 0x2b, 0xa9, 0xb4, 0xa8, 0xa5, 0x18, 0x06, 0x36, 0x4f, 0x23, 0xc3, 0xef, 0xd1,
	0xcd, 0x5d, 0x9e, 0xa0, 0x3d, 0x07, 0x3a, 0x0b, 0x47, 0x42, 0xa3, 0xb4, 0x81, 0xcd, 0x39, 0x2f,
	0x6a, 0x59, 0x00, 0xbd, 0xdc, 0x5d, 0xfc, 0x69, 0x43, 0xe0, 0xf7, 0x0b, 0x17, 0xa6, 0xc0, 0xc4,
	0xfd, 0x61, 0x7a, 0x96, 0x5a, 0xbe, 0x31, 0x75, 0xff, 0x1b, 0x17, 0x4f, 0xdc, 0xa7, 0x49, 0x72,
	0xff, 0xc1, 0x7b, 0xdd, 0x27, 0xa2, 0x73, 0xff, 0x31, 0xdc, 0x0e, 0x95, 0xb4, 0x5a, 0x84, 0x36,
	0x08, 0x5d, 0x77, 0x48, 0x95, 0xe4, 0x9b, 0xe4, 0xda, 0xea, 0x64, 0xe2, 0xa8, 0xc4, 0xd9, 0x0e,
	0x2c, 0x97, 0xde, 0x07, 0xa1, 0xca, 0xa4, 0xe5, 0x0f, 0xc9, 0x8a, 0xa5, 0x12, 0x3c, 0x72, 0x98,
	0xbb, 0x4f, 0xe5, 0xc3, 0x77, 0x6f, 0x7b, 0xab, 0x38, 0x49, 0xf1, 0xec, 0xdd, 0x03, 0x7f, 0x04,
	0x45, 0x0f, 0x08, 0x52, 0x19, 0x61, 0xce, 0x1f, 0x91, 0x42, 0xc1, 0x78, 0xe5, 0x10, 0x77, 0xd4,
	0xf2, 0x0a, 0xa9, 0x01, 0x6f, 0x16, 0x55, 0x2a, 0x80, 0xd7, 0x03, 0xf6, 0x09, 0xdc, 0xc2, 0x1c,
	0xc3, 0xcc, 0x6d, 0x27, 0x40, 0xad, 0x95, 0xe6, 0xdb, 0xb4, 0x64, 0x65, 0x0a, 0xbf, 0x74, 0x68,
	0xd1, 0x29, 0x4e, 0x51, 0xf2, 0x16, 0x4d, 0x17, 0x41, 0xeb, 0x2f, 0x0f, 0xb6, 0x4e, 0x50, 0x46,
	0x1f, 0xa5, 0x03, 0x3e, 0x81, 0x39, 0x9b, 0x53, 0xdf, 0x7b, 0xdf, 0xb7, 0x69, 0xce, 0xe6, 0xf4,
	0xa9, 0x50, 0x26, 0x8d, 0x25, 0xaf, 0xd0, 0xdd, 0x29, 0x23, 0xb6, 0x05, 0xe0, 0x7e, 0x85, 0xcd,
	0xf4, 0xb4, 0x23, 0xce, 0x20, 0x8e, 0x47, 0x75, 0x30, 0x7c, 0xa1, 0xe0, 0x15, 0xd1, 0x55, 0x01,
	0xaa, 0xb3, 0x05, 0xf8, 0xd3, 0x83, 0x9d, 0xaf, 0x30, 0x54, 0x11, 0xfa, 0xe2, 0xfc, 0xa3, 0x54,
	0x61, 0x65, 0x5a, 0x85, 0x06, 0x9d, 0x73, 0xba, 0xaf, 0xca, 0xec, 0xbe, 0xfe, 0xf0, 0x60, 0xfb,
	0x4d, 0x66, 0x92, 0xff, 0xd4, 0xae, 0x0e, 0xf7, 0xbf, 0x7f, 0x16, 0xa7, 0x36, 0xc9, 0xfa, 0x9d,
	0x50, 0x9d, 0x75, 0x67, 0x52, 0x75, 0x27, 0xa9, 0xba, 0x33, 0xff, 0x66, 0x62, 0xd5, 0x45, 0x9b,
	0xf4, 0xab, 0x04, 0xed, 0xff, 0x1d, 0x00, 0x00, 0xff, 0xff, 0xc4, 0xd9, 0xb7, 0xf2, 0x1d, 0x09,
	0x00, 0x00,
}
