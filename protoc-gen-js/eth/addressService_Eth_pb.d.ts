export class Address {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressKeychain;
}

export class GetAddressEndpointRequest {
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
  getConfirmations(): number;
  setConfirmations(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAddressEndpointRequest;
}

export class GetBalanceAddressEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getAddress(): string;
  setAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetBalanceAddressEndpointRequest;
}

export class PostGenerateAddressEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostGenerateAddressEndpointRequest;
}

