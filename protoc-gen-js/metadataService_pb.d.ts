export class DeleteMetadata_addressEndpointRequest {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadata_addressEndpointRequest;
}

export class DeleteMetadata_block_heightEndpointRequest {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getBlockHeight(): string;
  setBlockHeight(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadata_block_heightEndpointRequest;
}

export class DeleteMetadata_txhashEndpointRequest {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadata_txhashEndpointRequest;
}

export class GetMetadata_addressEndpointRequest {
  constructor ();
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  getAddress(): string;
  setAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadata_addressEndpointRequest;
}

export class GetMetadata_blockhashEndpointRequest {
  constructor ();
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  getBlockhash(): string;
  setBlockhash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadata_blockhashEndpointRequest;
}

export class GetMetadata_txhashEndpointRequest {
  constructor ();
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadata_txhashEndpointRequest;
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

export class PutMetadata_addressEndpointRequest {
  constructor ();
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  getKeypair(): {};
  setKeypair(a: {}): void;
  getAddress(): string;
  setAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadata_addressEndpointRequest;
}

export class PutMetadata_block_hashEndpointRequest {
  constructor ();
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  getKeypair(): {};
  setKeypair(a: {}): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadata_block_hashEndpointRequest;
}

export class PutMetadata_txhashEndpointRequest {
  constructor ();
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  getKeypair(): {};
  setKeypair(a: {}): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadata_txhashEndpointRequest;
}

