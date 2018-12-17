export class Address {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  getWallet(): Wallet;
  setWallet(a: Wallet): void;
  getHdWallet(): HDWallet;
  setHdWallet(a: HDWallet): void;
  getTotalReceived(): number;
  setTotalReceived(a: number): void;
  getTotalSent(): number;
  setTotalSent(a: number): void;
  getBalance(): number;
  setBalance(a: number): void;
  getUnconfirmedBalance(): number;
  setUnconfirmedBalance(a: number): void;
  getFinalBalance(): number;
  setFinalBalance(a: number): void;
  getNTx(): number;
  setNTx(a: number): void;
  getUnconfirmedNTx(): number;
  setUnconfirmedNTx(a: number): void;
  getFinalNTx(): number;
  setFinalNTx(a: number): void;
  getTxUrl(): string;
  setTxUrl(a: string): void;
  getTxsList(): TX[];
  setTxsList(a: TX[]): void;
  getTxrefsList(): TXRef[];
  setTxrefsList(a: TXRef[]): void;
  getUnconfirmedTxrefsList(): TXRef[];
  setUnconfirmedTxrefsList(a: TXRef[]): void;
  getHasmore(): boolean;
  setHasmore(a: boolean): void;
  toObject(): Address.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Address;
}

export namespace Address {
  export type AsObject = {
    Address: string;
    Wallet: Wallet;
    HdWallet: HDWallet;
    TotalReceived: number;
    TotalSent: number;
    Balance: number;
    UnconfirmedBalance: number;
    FinalBalance: number;
    NTx: number;
    UnconfirmedNTx: number;
    FinalNTx: number;
    TxUrl: string;
    TxsList: TX[];
    TxrefsList: TXRef[];
    UnconfirmedTxrefsList: TXRef[];
    Hasmore: boolean;
  }
}

export class AddressBalanceEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getAddress(): string;
  setAddress(a: string): void;
  getOmitwalletaddresses(): boolean;
  setOmitwalletaddresses(a: boolean): void;
  toObject(): AddressBalanceEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressBalanceEndpointRequest;
}

export namespace AddressBalanceEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Address: string;
    Omitwalletaddresses: boolean;
  }
}

export class AddressEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getAddress(): string;
  setAddress(a: string): void;
  getUnspentonly(): boolean;
  setUnspentonly(a: boolean): void;
  getIncludescript(): boolean;
  setIncludescript(a: boolean): void;
  getIncludeconfidence(): boolean;
  setIncludeconfidence(a: boolean): void;
  getBefore(): number;
  setBefore(a: number): void;
  getAfter(): number;
  setAfter(a: number): void;
  getLimit(): number;
  setLimit(a: number): void;
  getConfirmations(): number;
  setConfirmations(a: number): void;
  getConfidence(): number;
  setConfidence(a: number): void;
  getOmitwalletaddresses(): boolean;
  setOmitwalletaddresses(a: boolean): void;
  toObject(): AddressEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressEndpointRequest;
}

export namespace AddressEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Address: string;
    Unspentonly: boolean;
    Includescript: boolean;
    Includeconfidence: boolean;
    Before: number;
    After: number;
    Limit: number;
    Confirmations: number;
    Confidence: number;
    Omitwalletaddresses: boolean;
  }
}

export class AddressFullEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getAddress(): string;
  setAddress(a: string): void;
  getBefore(): number;
  setBefore(a: number): void;
  getAfter(): number;
  setAfter(a: number): void;
  getLimit(): number;
  setLimit(a: number): void;
  getTxlimit(): number;
  setTxlimit(a: number): void;
  getConfirmations(): number;
  setConfirmations(a: number): void;
  getConfidence(): number;
  setConfidence(a: number): void;
  getIncludehex(): boolean;
  setIncludehex(a: boolean): void;
  getIncludeconfidence(): boolean;
  setIncludeconfidence(a: boolean): void;
  getOmitwalletaddresses(): boolean;
  setOmitwalletaddresses(a: boolean): void;
  toObject(): AddressFullEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressFullEndpointRequest;
}

export namespace AddressFullEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Address: string;
    Before: number;
    After: number;
    Limit: number;
    Txlimit: number;
    Confirmations: number;
    Confidence: number;
    Includehex: boolean;
    Includeconfidence: boolean;
    Omitwalletaddresses: boolean;
  }
}

export class AddressKeychain {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  getPublic(): string;
  setPublic(a: string): void;
  getPrivate(): string;
  setPrivate(a: string): void;
  getWif(): string;
  setWif(a: string): void;
  getPubkeysList(): string[];
  setPubkeysList(a: string[]): void;
  getScriptType(): string;
  setScriptType(a: string): void;
  getOriginalAddress(): string;
  setOriginalAddress(a: string): void;
  getOapAddress(): string;
  setOapAddress(a: string): void;
  toObject(): AddressKeychain.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressKeychain;
}

export namespace AddressKeychain {
  export type AsObject = {
    Address: string;
    Public: string;
    Private: string;
    Wif: string;
    PubkeysList: string[];
    ScriptType: string;
    OriginalAddress: string;
    OapAddress: string;
  }
}

export class GenerateAddressEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getAddress(): string;
  setAddress(a: string): void;
  getPublic(): string;
  setPublic(a: string): void;
  getPrivate(): string;
  setPrivate(a: string): void;
  getWif(): string;
  setWif(a: string): void;
  getPubkeysList(): string[];
  setPubkeysList(a: string[]): void;
  getScriptType(): string;
  setScriptType(a: string): void;
  getOriginalAddress(): string;
  setOriginalAddress(a: string): void;
  getOapAddress(): string;
  setOapAddress(a: string): void;
  toObject(): GenerateAddressEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GenerateAddressEndpointRequest;
}

export namespace GenerateAddressEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Address: string;
    Public: string;
    Private: string;
    Wif: string;
    PubkeysList: string[];
    ScriptType: string;
    OriginalAddress: string;
    OapAddress: string;
  }
}

export class HDAddress {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  getPath(): string;
  setPath(a: string): void;
  getPublic(): string;
  setPublic(a: string): void;
  toObject(): HDAddress.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDAddress;
}

export namespace HDAddress {
  export type AsObject = {
    Address: string;
    Path: string;
    Public: string;
  }
}

export class HDChain {
  constructor ();
  getChainAddressesList(): HDAddress[];
  setChainAddressesList(a: HDAddress[]): void;
  getIndex(): number;
  setIndex(a: number): void;
  toObject(): HDChain.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDChain;
}

export namespace HDChain {
  export type AsObject = {
    ChainAddressesList: HDAddress[];
    Index: number;
  }
}

export class HDWallet {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getChainsList(): HDChain[];
  setChainsList(a: HDChain[]): void;
  getHd(): boolean;
  setHd(a: boolean): void;
  getExtendedPublicKey(): string;
  setExtendedPublicKey(a: string): void;
  getSubchainIndexesList(): number[];
  setSubchainIndexesList(a: number[]): void;
  toObject(): HDWallet.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDWallet;
}

export namespace HDWallet {
  export type AsObject = {
    Token: string;
    Name: string;
    ChainsList: HDChain[];
    Hd: boolean;
    ExtendedPublicKey: string;
    SubchainIndexesList: number[];
  }
}

export class TX {
  constructor ();
  getBlockHeight(): number;
  setBlockHeight(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  getTotal(): number;
  setTotal(a: number): void;
  getFees(): number;
  setFees(a: number): void;
  getSize(): number;
  setSize(a: number): void;
  getPreference(): string;
  setPreference(a: string): void;
  getRelayedBy(): string;
  setRelayedBy(a: string): void;
  getReceived(): string;
  setReceived(a: string): void;
  getVer(): number;
  setVer(a: number): void;
  getLockTime(): number;
  setLockTime(a: number): void;
  getDoubleSpend(): boolean;
  setDoubleSpend(a: boolean): void;
  getVinSz(): number;
  setVinSz(a: number): void;
  getVoutSz(): number;
  setVoutSz(a: number): void;
  getConfirmations(): number;
  setConfirmations(a: number): void;
  getInputsList(): TXInput[];
  setInputsList(a: TXInput[]): void;
  getOutputsList(): TXOutput[];
  setOutputsList(a: TXOutput[]): void;
  getOptInRbf(): boolean;
  setOptInRbf(a: boolean): void;
  getConfidence(): number;
  setConfidence(a: number): void;
  getConfirmed(): string;
  setConfirmed(a: string): void;
  getReceiveCount(): number;
  setReceiveCount(a: number): void;
  getChangeAddress(): string;
  setChangeAddress(a: string): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getBlockIndex(): number;
  setBlockIndex(a: number): void;
  getDoubleOf(): string;
  setDoubleOf(a: string): void;
  getDataProtocol(): string;
  setDataProtocol(a: string): void;
  getHex(): string;
  setHex(a: string): void;
  getNextInputs(): string;
  setNextInputs(a: string): void;
  getNextOutputs(): string;
  setNextOutputs(a: string): void;
  toObject(): TX.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TX;
}

export namespace TX {
  export type AsObject = {
    BlockHeight: number;
    Hash: string;
    AddressesList: string[];
    Total: number;
    Fees: number;
    Size: number;
    Preference: string;
    RelayedBy: string;
    Received: string;
    Ver: number;
    LockTime: number;
    DoubleSpend: boolean;
    VinSz: number;
    VoutSz: number;
    Confirmations: number;
    InputsList: TXInput[];
    OutputsList: TXOutput[];
    OptInRbf: boolean;
    Confidence: number;
    Confirmed: string;
    ReceiveCount: number;
    ChangeAddress: string;
    BlockHash: string;
    BlockIndex: number;
    DoubleOf: string;
    DataProtocol: string;
    Hex: string;
    NextInputs: string;
    NextOutputs: string;
  }
}

export class TXInput {
  constructor ();
  getPrevHash(): string;
  setPrevHash(a: string): void;
  getOutputIndex(): number;
  setOutputIndex(a: number): void;
  getOutputValue(): number;
  setOutputValue(a: number): void;
  getScriptType(): string;
  setScriptType(a: string): void;
  getScript(): string;
  setScript(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  getSequence(): number;
  setSequence(a: number): void;
  getAge(): number;
  setAge(a: number): void;
  getWalletName(): string;
  setWalletName(a: string): void;
  getWalletToken(): string;
  setWalletToken(a: string): void;
  toObject(): TXInput.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXInput;
}

export namespace TXInput {
  export type AsObject = {
    PrevHash: string;
    OutputIndex: number;
    OutputValue: number;
    ScriptType: string;
    Script: string;
    AddressesList: string[];
    Sequence: number;
    Age: number;
    WalletName: string;
    WalletToken: string;
  }
}

export class TXOutput {
  constructor ();
  getValue(): number;
  setValue(a: number): void;
  getScript(): string;
  setScript(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  getScriptType(): string;
  setScriptType(a: string): void;
  getSpentBy(): string;
  setSpentBy(a: string): void;
  getDataHex(): string;
  setDataHex(a: string): void;
  getDataString(): string;
  setDataString(a: string): void;
  toObject(): TXOutput.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXOutput;
}

export namespace TXOutput {
  export type AsObject = {
    Value: number;
    Script: string;
    AddressesList: string[];
    ScriptType: string;
    SpentBy: string;
    DataHex: string;
    DataString: string;
  }
}

export class TXRef {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  getBlockHeight(): number;
  setBlockHeight(a: number): void;
  getTxHash(): string;
  setTxHash(a: string): void;
  getTxInputN(): number;
  setTxInputN(a: number): void;
  getTxOutputN(): number;
  setTxOutputN(a: number): void;
  getValue(): number;
  setValue(a: number): void;
  getPreference(): string;
  setPreference(a: string): void;
  getSpent(): boolean;
  setSpent(a: boolean): void;
  getDoubleSpend(): boolean;
  setDoubleSpend(a: boolean): void;
  getConfirmations(): number;
  setConfirmations(a: number): void;
  getScript(): string;
  setScript(a: string): void;
  getRefBalance(): number;
  setRefBalance(a: number): void;
  getConfidence(): number;
  setConfidence(a: number): void;
  getConfirmed(): string;
  setConfirmed(a: string): void;
  getSpentBy(): string;
  setSpentBy(a: string): void;
  getReceived(): string;
  setReceived(a: string): void;
  getReceiveCount(): number;
  setReceiveCount(a: number): void;
  getDoubleOf(): string;
  setDoubleOf(a: string): void;
  toObject(): TXRef.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXRef;
}

export namespace TXRef {
  export type AsObject = {
    Address: string;
    BlockHeight: number;
    TxHash: string;
    TxInputN: number;
    TxOutputN: number;
    Value: number;
    Preference: string;
    Spent: boolean;
    DoubleSpend: boolean;
    Confirmations: number;
    Script: string;
    RefBalance: number;
    Confidence: number;
    Confirmed: string;
    SpentBy: string;
    Received: string;
    ReceiveCount: number;
    DoubleOf: string;
  }
}

export class Wallet {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  toObject(): Wallet.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Wallet;
}

export namespace Wallet {
  export type AsObject = {
    Token: string;
    Name: string;
    AddressesList: string[];
  }
}

