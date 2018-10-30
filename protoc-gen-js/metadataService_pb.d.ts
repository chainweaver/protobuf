export class DeleteMetadataAddressEndpointRequest {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadataAddressEndpointRequest;
}

export class DeleteMetadataBlockheightEndpointRequest {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getBlockHeight(): string;
  setBlockHeight(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadataBlockheightEndpointRequest;
}

export class DeleteMetadataTxhashEndpointRequest {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadataTxhashEndpointRequest;
}

export class GetMetadataAddressEndpointRequest {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadataAddressEndpointRequest;
}

export class GetMetadataBlockhashEndpointRequest {
  constructor ();
  getBlockhash(): string;
  setBlockhash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadataBlockhashEndpointRequest;
}

export class GetMetadataTxhashEndpointRequest {
  constructor ();
  getTxhash(): string;
  setTxhash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadataTxhashEndpointRequest;
}

export class KeyValues {
  constructor ();
  getKeypair(): {};
  setKeypair(a: {}): void;
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
  getKeypair(): {};
  setKeypair(a: {}): void;
  getAddress(): string;
  setAddress(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataAddressEndpointRequest;
}

export class PutMetadataBlockhashEndpointRequest {
  constructor ();
  getKeypair(): {};
  setKeypair(a: {}): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataBlockhashEndpointRequest;
}

export class PutMetadataTxhashEndpointRequest {
  constructor ();
  getKeypair(): {};
  setKeypair(a: {}): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataTxhashEndpointRequest;
}

