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

export class AddressBalanceEndpointRequest {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressBalanceEndpointRequest;
}

export class AddressEndpointRequest {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressEndpointRequest;
}

export class AddressFullEndpointRequest {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
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

export class GenerateAddressEndpointRequest {
  constructor ();
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GenerateAddressEndpointRequest;
}

