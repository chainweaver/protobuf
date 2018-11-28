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
    TotalReceived: number;
    TotalSent: number;
    Balance: number;
    UnconfirmedBalance: number;
    FinalBalance: number;
    NTx: number;
    UnconfirmedNTx: number;
    FinalNTx: number;
    TxUrl: string;
    TxrefsList: TXRef[];
    UnconfirmedTxrefsList: TXRef[];
    Hasmore: boolean;
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
  toObject(): AddressKeychain.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressKeychain;
}

export namespace AddressKeychain {
  export type AsObject = {
    Address: string;
    Public: string;
    Private: string;
  }
}

export class GetAddressEndpointRequest {
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
  getConfirmations(): number;
  setConfirmations(a: number): void;
  toObject(): GetAddressEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAddressEndpointRequest;
}

export namespace GetAddressEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Address: string;
    Before: number;
    After: number;
    Limit: number;
    Confirmations: number;
  }
}

export class GetBalanceAddressEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getAddress(): string;
  setAddress(a: string): void;
  toObject(): GetBalanceAddressEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetBalanceAddressEndpointRequest;
}

export namespace GetBalanceAddressEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Address: string;
  }
}

export class PostGenerateAddressEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  toObject(): PostGenerateAddressEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostGenerateAddressEndpointRequest;
}

export namespace PostGenerateAddressEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
  }
}

export class TXRef {
  constructor ();
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
  getDoubleSpend(): boolean;
  setDoubleSpend(a: boolean): void;
  getConfirmations(): number;
  setConfirmations(a: number): void;
  getRefBalance(): number;
  setRefBalance(a: number): void;
  getConfirmed(): string;
  setConfirmed(a: string): void;
  getDoubleOf(): string;
  setDoubleOf(a: string): void;
  toObject(): TXRef.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXRef;
}

export namespace TXRef {
  export type AsObject = {
    BlockHeight: number;
    TxHash: string;
    TxInputN: number;
    TxOutputN: number;
    Value: number;
    DoubleSpend: boolean;
    Confirmations: number;
    RefBalance: number;
    Confirmed: string;
    DoubleOf: string;
  }
}

