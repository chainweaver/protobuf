export class DataEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getData(): string;
  setData(a: string): void;
  getToken(): string;
  setToken(a: string): void;
  getEncoding(): string;
  setEncoding(a: string): void;
  getHash(): string;
  setHash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DataEndpointRequest;
}

export class DecodeRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTx(): string;
  setTx(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DecodeRawTransactionEndpointRequest;
}

export class DescribedBelow {
  constructor ();
  getTransaction(): string;
  setTransaction(a: string): void;
  getFirstLocation(): {};
  setFirstLocation(a: {}): void;
  getFirstCity(): string;
  setFirstCity(a: string): void;
  getFirstCountry(): string;
  setFirstCountry(a: string): void;
  getAggregatedOrigin(): {};
  setAggregatedOrigin(a: {}): void;
  getAggregatedOriginRadius(): number;
  setAggregatedOriginRadius(a: number): void;
  getFirstReceived(): string;
  setFirstReceived(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DescribedBelow;
}

export class NewTransactionEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
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
  getInputsList(): {}[];
  setInputsList(a: {}[]): void;
  getOutputsList(): {}[];
  setOutputsList(a: {}[]): void;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NewTransactionEndpointRequest;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NullData;
}

export class PushRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTx(): string;
  setTx(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PushRawTransactionEndpointRequest;
}

export class SendTransactionEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTx(): {};
  setTx(a: {}): void;
  getTosignList(): string[];
  setTosignList(a: string[]): void;
  getSignaturesList(): string[];
  setSignaturesList(a: string[]): void;
  getPubkeysList(): string[];
  setPubkeysList(a: string[]): void;
  getTosignTxList(): string[];
  setTosignTxList(a: string[]): void;
  getErrorsList(): {}[];
  setErrorsList(a: {}[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SendTransactionEndpointRequest;
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
  getInputsList(): {}[];
  setInputsList(a: {}[]): void;
  getOutputsList(): {}[];
  setOutputsList(a: {}[]): void;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TX;
}

export class TXS {
  constructor ();
  getTxsList(): {}[];
  setTxsList(a: {}[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXS;
}

export class TXSkeleton {
  constructor ();
  getTx(): {};
  setTx(a: {}): void;
  getTosignList(): string[];
  setTosignList(a: string[]): void;
  getSignaturesList(): string[];
  setSignaturesList(a: string[]): void;
  getPubkeysList(): string[];
  setPubkeysList(a: string[]): void;
  getTosignTxList(): string[];
  setTosignTxList(a: string[]): void;
  getErrorsList(): {}[];
  setErrorsList(a: {}[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXSkeleton;
}

export class TransactionHashEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TransactionHashEndpointRequest;
}

export class TransactionPropagationEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TransactionPropagationEndpointRequest;
}

export class UnconfirmedTransactionsEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UnconfirmedTransactionsEndpointRequest;
}

