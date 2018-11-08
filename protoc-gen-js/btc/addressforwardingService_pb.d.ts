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
  getCallbackUrl(): {};
  setCallbackUrl(a: {}): void;
  getEnableConfirmations(): boolean;
  setEnableConfirmations(a: boolean): void;
  getMiningFeesSatoshis(): number;
  setMiningFeesSatoshis(a: number): void;
  getTxs(): string;
  setTxs(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddressForward;
}

export class CreateForwardEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
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
  getCallbackUrl(): {};
  setCallbackUrl(a: {}): void;
  getEnableConfirmations(): boolean;
  setEnableConfirmations(a: boolean): void;
  getMiningFeesSatoshis(): number;
  setMiningFeesSatoshis(a: number): void;
  getTxs(): string;
  setTxs(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateForwardEndpointRequest;
}

export class DeleteForwardEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getPayid(): string;
  setPayid(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteForwardEndpointRequest;
}

export class DeleteForwardEndpointResponse {
  constructor ();
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteForwardEndpointResponse;
}

export class ListForwardsEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getStart(): number;
  setStart(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListForwardsEndpointRequest;
}

export class ListForwardsEndpointResponse {
  constructor ();
  getForwards(): {};
  setForwards(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListForwardsEndpointResponse;
}

