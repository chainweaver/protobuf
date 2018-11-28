export class AggregatedOrigin {
  constructor ();
  getLatitude(): number;
  setLatitude(a: number): void;
  getLongitude(): number;
  setLongitude(a: number): void;
  toObject(): AggregatedOrigin.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AggregatedOrigin;
}

export namespace AggregatedOrigin {
  export type AsObject = {
    Latitude: number;
    Longitude: number;
  }
}

export class DataEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getData(): string;
  setData(a: string): void;
  getToken(): string;
  setToken(a: string): void;
  getEncoding(): string;
  setEncoding(a: string): void;
  getHash(): string;
  setHash(a: string): void;
  toObject(): DataEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DataEndpointRequest;
}

export namespace DataEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Data: string;
    Token: string;
    Encoding: string;
    Hash: string;
  }
}

export class DecodeRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTx(): string;
  setTx(a: string): void;
  toObject(): DecodeRawTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DecodeRawTransactionEndpointRequest;
}

export namespace DecodeRawTransactionEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Tx: string;
  }
}

export class DescribedBelow {
  constructor ();
  getTransaction(): string;
  setTransaction(a: string): void;
  getFirstLocation(): FirstLocation;
  setFirstLocation(a: FirstLocation): void;
  getFirstCity(): string;
  setFirstCity(a: string): void;
  getFirstCountry(): string;
  setFirstCountry(a: string): void;
  getAggregatedOrigin(): AggregatedOrigin;
  setAggregatedOrigin(a: AggregatedOrigin): void;
  getAggregatedOriginRadius(): number;
  setAggregatedOriginRadius(a: number): void;
  getFirstReceived(): string;
  setFirstReceived(a: string): void;
  toObject(): DescribedBelow.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DescribedBelow;
}

export namespace DescribedBelow {
  export type AsObject = {
    Transaction: string;
    FirstLocation: FirstLocation;
    FirstCity: string;
    FirstCountry: string;
    AggregatedOrigin: AggregatedOrigin;
    AggregatedOriginRadius: number;
    FirstReceived: string;
  }
}

export class FirstLocation {
  constructor ();
  getLatitude(): number;
  setLatitude(a: number): void;
  getLongitude(): number;
  setLongitude(a: number): void;
  toObject(): FirstLocation.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => FirstLocation;
}

export namespace FirstLocation {
  export type AsObject = {
    Latitude: number;
    Longitude: number;
  }
}

export class NewTransactionEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
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
  getIncludetosigntx(): boolean;
  setIncludetosigntx(a: boolean): void;
  toObject(): NewTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NewTransactionEndpointRequest;
}

export namespace NewTransactionEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
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
    Includetosigntx: boolean;
  }
}

export class NullData {
  constructor ();
  getData(): string;
  setData(a: string): void;
  getToken(): string;
  setToken(a: string): void;
  getEncoding(): string;
  setEncoding(a: string): void;
  getHash(): string;
  setHash(a: string): void;
  toObject(): NullData.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NullData;
}

export namespace NullData {
  export type AsObject = {
    Data: string;
    Token: string;
    Encoding: string;
    Hash: string;
  }
}

export class PushRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTx(): string;
  setTx(a: string): void;
  toObject(): PushRawTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PushRawTransactionEndpointRequest;
}

export namespace PushRawTransactionEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Tx: string;
  }
}

export class SendTransactionEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTx(): TX;
  setTx(a: TX): void;
  getTosignList(): string[];
  setTosignList(a: string[]): void;
  getSignaturesList(): string[];
  setSignaturesList(a: string[]): void;
  getPubkeysList(): string[];
  setPubkeysList(a: string[]): void;
  getTosignTxList(): string[];
  setTosignTxList(a: string[]): void;
  getErrorsList(): TXerror[];
  setErrorsList(a: TXerror[]): void;
  toObject(): SendTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SendTransactionEndpointRequest;
}

export namespace SendTransactionEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Tx: TX;
    TosignList: string[];
    SignaturesList: string[];
    PubkeysList: string[];
    TosignTxList: string[];
    ErrorsList: TXerror[];
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

export class TXS {
  constructor ();
  getTxsList(): TX[];
  setTxsList(a: TX[]): void;
  toObject(): TXS.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXS;
}

export namespace TXS {
  export type AsObject = {
    TxsList: TX[];
  }
}

export class TXSkeleton {
  constructor ();
  getTx(): TX;
  setTx(a: TX): void;
  getTosignList(): string[];
  setTosignList(a: string[]): void;
  getSignaturesList(): string[];
  setSignaturesList(a: string[]): void;
  getPubkeysList(): string[];
  setPubkeysList(a: string[]): void;
  getTosignTxList(): string[];
  setTosignTxList(a: string[]): void;
  getErrorsList(): TXerror[];
  setErrorsList(a: TXerror[]): void;
  toObject(): TXSkeleton.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXSkeleton;
}

export namespace TXSkeleton {
  export type AsObject = {
    Tx: TX;
    TosignList: string[];
    SignaturesList: string[];
    PubkeysList: string[];
    TosignTxList: string[];
    ErrorsList: TXerror[];
  }
}

export class TXerror {
  constructor ();
  getError(): string;
  setError(a: string): void;
  toObject(): TXerror.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXerror;
}

export namespace TXerror {
  export type AsObject = {
    Error: string;
  }
}

export class TransactionHashEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  getLimit(): number;
  setLimit(a: number): void;
  getInstart(): number;
  setInstart(a: number): void;
  getOutstart(): number;
  setOutstart(a: number): void;
  getIncludehex(): boolean;
  setIncludehex(a: boolean): void;
  getIncludeconfidence(): boolean;
  setIncludeconfidence(a: boolean): void;
  toObject(): TransactionHashEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TransactionHashEndpointRequest;
}

export namespace TransactionHashEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Txhash: string;
    Limit: number;
    Instart: number;
    Outstart: number;
    Includehex: boolean;
    Includeconfidence: boolean;
  }
}

export class TransactionPropagationEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  toObject(): TransactionPropagationEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TransactionPropagationEndpointRequest;
}

export namespace TransactionPropagationEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Txhash: string;
  }
}

export class UnconfirmedTransactionsEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  toObject(): UnconfirmedTransactionsEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UnconfirmedTransactionsEndpointRequest;
}

export namespace UnconfirmedTransactionsEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
  }
}

