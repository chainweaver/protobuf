export class AddressForward {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getToken(): string;
  setToken(a: string): void;
  getDestination(): string;
  setDestination(a: string): void;
  getInputAddress(): string;
  setInputAddress(a: string): void;
  getProcessFeesAddress(): string;
  setProcessFeesAddress(a: string): void;
  getProcessFeesSatoshis(): number;
  setProcessFeesSatoshis(a: number): void;
  getProcessFeesPercent(): number;
  setProcessFeesPercent(a: number): void;
  getCallbackUrl(): string;
  setCallbackUrl(a: string): void;
  getEnableConfirmations(): boolean;
  setEnableConfirmations(a: boolean): void;
  getMiningFeesSatoshis(): number;
  setMiningFeesSatoshis(a: number): void;
  getTxsList(): string[];
  setTxsList(a: string[]): void;
  toObject(): AddressForward.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressForward;
}

export namespace AddressForward {
  export type AsObject = {
    Id: string;
    Token: string;
    Destination: string;
    InputAddress: string;
    ProcessFeesAddress: string;
    ProcessFeesSatoshis: number;
    ProcessFeesPercent: number;
    CallbackUrl: string;
    EnableConfirmations: boolean;
    MiningFeesSatoshis: number;
    TxsList: string[];
  }
}

export class AddressForwards {
  constructor ();
  getForwardsList(): AddressForward[];
  setForwardsList(a: AddressForward[]): void;
  toObject(): AddressForwards.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressForwards;
}

export namespace AddressForwards {
  export type AsObject = {
    ForwardsList: AddressForward[];
  }
}

export class CreateForwardEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getId(): string;
  setId(a: string): void;
  getToken(): string;
  setToken(a: string): void;
  getDestination(): string;
  setDestination(a: string): void;
  getInputAddress(): string;
  setInputAddress(a: string): void;
  getProcessFeesAddress(): string;
  setProcessFeesAddress(a: string): void;
  getProcessFeesSatoshis(): number;
  setProcessFeesSatoshis(a: number): void;
  getProcessFeesPercent(): number;
  setProcessFeesPercent(a: number): void;
  getCallbackUrl(): string;
  setCallbackUrl(a: string): void;
  getEnableConfirmations(): boolean;
  setEnableConfirmations(a: boolean): void;
  getMiningFeesSatoshis(): number;
  setMiningFeesSatoshis(a: number): void;
  getTxsList(): string[];
  setTxsList(a: string[]): void;
  toObject(): CreateForwardEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateForwardEndpointRequest;
}

export namespace CreateForwardEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Id: string;
    Token: string;
    Destination: string;
    InputAddress: string;
    ProcessFeesAddress: string;
    ProcessFeesSatoshis: number;
    ProcessFeesPercent: number;
    CallbackUrl: string;
    EnableConfirmations: boolean;
    MiningFeesSatoshis: number;
    TxsList: string[];
  }
}

export class DeleteForwardEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getPayid(): string;
  setPayid(a: string): void;
  toObject(): DeleteForwardEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteForwardEndpointRequest;
}

export namespace DeleteForwardEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Payid: string;
  }
}

export class ListForwardsEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getStart(): number;
  setStart(a: number): void;
  toObject(): ListForwardsEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListForwardsEndpointRequest;
}

export namespace ListForwardsEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Start: number;
  }
}

export class NullValue {
  constructor ();
  toObject(): NullValue.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NullValue;
}

export namespace NullValue {
  export type AsObject = {
  }
}

