export class DeleteMetadataAddressEndpointRequest {
  constructor ();
  getNetwork(): string;
  setNetwork(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadataAddressEndpointRequest;
}

export class DeleteMetadataBlockheightEndpointRequest {
  constructor ();
  getNetwork(): string;
  setNetwork(a: string): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadataBlockheightEndpointRequest;
}

export class DeleteMetadataTxhashEndpointRequest {
  constructor ();
  getNetwork(): string;
  setNetwork(a: string): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadataTxhashEndpointRequest;
}

export class GetMetadataAddressEndpointRequest {
  constructor ();
  getNetwork(): string;
  setNetwork(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadataAddressEndpointRequest;
}

export class GetMetadataBlockhashEndpointRequest {
  constructor ();
  getNetwork(): string;
  setNetwork(a: string): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadataBlockhashEndpointRequest;
}

export class GetMetadataTxhashEndpointRequest {
  constructor ();
  getNetwork(): string;
  setNetwork(a: string): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadataTxhashEndpointRequest;
}

export class KeyValues {
  constructor ();
  getKeyPairs(): {};
  setKeyPairs(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => KeyValues;
}

export class NullValue {
  constructor ();
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NullValue;
}

export class PutMetadataAddressEndpointRequest {
  constructor ();
  getNetwork(): string;
  setNetwork(a: string): void;
  getKeyPairs(): {};
  setKeyPairs(a: {}): void;
  getAddress(): string;
  setAddress(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataAddressEndpointRequest;
}

export class PutMetadataBlockhashEndpointRequest {
  constructor ();
  getNetwork(): string;
  setNetwork(a: string): void;
  getKeyPairs(): {};
  setKeyPairs(a: {}): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataBlockhashEndpointRequest;
}

export class PutMetadataTxhashEndpointRequest {
  constructor ();
  getNetwork(): string;
  setNetwork(a: string): void;
  getKeyPairs(): {};
  setKeyPairs(a: {}): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataTxhashEndpointRequest;
}

