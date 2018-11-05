export class Address {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  getWallet(): {};
  setWallet(a: {}): void;
  getHdWallet(): {};
  setHdWallet(a: {}): void;
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
  getTxs(): {};
  setTxs(a: {}): void;
  getTxrefs(): {};
  setTxrefs(a: {}): void;
  getUnconfirmedTxrefs(): {};
  setUnconfirmedTxrefs(a: {}): void;
  getHasmore(): boolean;
  setHasmore(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Address;
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
  getPubkeys(): string;
  setPubkeys(a: string): void;
  getScriptType(): string;
  setScriptType(a: string): void;
  getOriginalAddress(): string;
  setOriginalAddress(a: string): void;
  getOapAddress(): string;
  setOapAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressKeychain;
}

export class ArrayString {
  constructor ();
  getArraystring(): string;
  setArraystring(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ArrayString;
}

export class GetAssetAddressEndpointRequest {
  constructor ();
  getStage(): string;
  setStage(a: string): void;
  getAssetid(): string;
  setAssetid(a: string): void;
  getOapaddr(): string;
  setOapaddr(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAssetAddressEndpointRequest;
}

export class GetAssetTXEndpointRequest {
  constructor ();
  getStage(): string;
  setStage(a: string): void;
  getAssetid(): string;
  setAssetid(a: string): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAssetTXEndpointRequest;
}

export class ListAssetTXsEndpointRequest {
  constructor ();
  getStage(): string;
  setStage(a: string): void;
  getAssetid(): string;
  setAssetid(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListAssetTXsEndpointRequest;
}

export class NullValueRequest {
  constructor ();
  getStage(): string;
  setStage(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NullValueRequest;
}

export class OAPIssueRequest {
  constructor ();
  getStage(): string;
  setStage(a: string): void;
  getFromPrivate(): string;
  setFromPrivate(a: string): void;
  getToAddress(): string;
  setToAddress(a: string): void;
  getAmount(): number;
  setAmount(a: number): void;
  getMetadata(): string;
  setMetadata(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OAPIssueRequest;
}

export class OAPTX {
  constructor ();
  getVer(): number;
  setVer(a: number): void;
  getAssetid(): string;
  setAssetid(a: string): void;
  getHash(): string;
  setHash(a: string): void;
  getConfirmed(): {};
  setConfirmed(a: {}): void;
  getReceived(): {};
  setReceived(a: {}): void;
  getOapMeta(): string;
  setOapMeta(a: string): void;
  getDoubleSpend(): boolean;
  setDoubleSpend(a: boolean): void;
  getInputs(): {};
  setInputs(a: {}): void;
  getOutputs(): {};
  setOutputs(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OAPTX;
}

export class TransferAssetEndpointRequest {
  constructor ();
  getStage(): string;
  setStage(a: string): void;
  getAssetid(): string;
  setAssetid(a: string): void;
  getFromPrivate(): string;
  setFromPrivate(a: string): void;
  getToAddress(): string;
  setToAddress(a: string): void;
  getAmount(): number;
  setAmount(a: number): void;
  getMetadata(): string;
  setMetadata(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TransferAssetEndpointRequest;
}

