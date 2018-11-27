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
  getTxsList(): {}[];
  setTxsList(a: {}[]): void;
  getTxrefsList(): {}[];
  setTxrefsList(a: {}[]): void;
  getUnconfirmedTxrefsList(): {}[];
  setUnconfirmedTxrefsList(a: {}[]): void;
  getHasmore(): boolean;
  setHasmore(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Address;
}

export class AddressBalanceEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getAddress(): string;
  setAddress(a: string): void;
  getOmitwalletaddresses(): boolean;
  setOmitwalletaddresses(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressBalanceEndpointRequest;
}

export class AddressEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressEndpointRequest;
}

export class AddressFullEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressFullEndpointRequest;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressKeychain;
}

export class GenerateAddressEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GenerateAddressEndpointRequest;
}

export class GenerateMultisigAddressEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GenerateMultisigAddressEndpointRequest;
}

