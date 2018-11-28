export class DeleteMetadataAddressEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getAddress(): string;
  setAddress(a: string): void;
  toObject(): DeleteMetadataAddressEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadataAddressEndpointRequest;
}

export namespace DeleteMetadataAddressEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Address: string;
  }
}

export class DeleteMetadataBlockheightEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  toObject(): DeleteMetadataBlockheightEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadataBlockheightEndpointRequest;
}

export namespace DeleteMetadataBlockheightEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    BlockHash: string;
  }
}

export class DeleteMetadataTxhashEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  toObject(): DeleteMetadataTxhashEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteMetadataTxhashEndpointRequest;
}

export namespace DeleteMetadataTxhashEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Txhash: string;
  }
}

export class GetMetadataAddressEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getAddress(): string;
  setAddress(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  toObject(): GetMetadataAddressEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadataAddressEndpointRequest;
}

export namespace GetMetadataAddressEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Address: string;
    Private: boolean;
  }
}

export class GetMetadataBlockhashEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  toObject(): GetMetadataBlockhashEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadataBlockhashEndpointRequest;
}

export namespace GetMetadataBlockhashEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    BlockHash: string;
    Private: boolean;
  }
}

export class GetMetadataTxhashEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  toObject(): GetMetadataTxhashEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetMetadataTxhashEndpointRequest;
}

export namespace GetMetadataTxhashEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Txhash: string;
    Private: boolean;
  }
}

export class KeyValues {
  constructor ();
  getKeyPairsList(): KeyValues.KeyPairsEntry[];
  setKeyPairsList(a: KeyValues.KeyPairsEntry[]): void;
  toObject(): KeyValues.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => KeyValues;
}

export namespace KeyValues {
  export type AsObject = {
    KeyPairsList: KeyValues.KeyPairsEntry[];
  }
  export type KeyPairsEntry = KeyValuesKeyPairsEntry;
}

export class KeyValuesKeyPairsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): KeyValuesKeyPairsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => KeyValuesKeyPairsEntry;
}

export namespace KeyValuesKeyPairsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
  }
}

export class KeyPairsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): KeyPairsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => KeyPairsEntry;
}

export namespace KeyPairsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
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

export class PutMetadataAddressEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getKeyPairsList(): PutMetadataAddressEndpointRequest.KeyPairsEntry[];
  setKeyPairsList(a: PutMetadataAddressEndpointRequest.KeyPairsEntry[]): void;
  getAddress(): string;
  setAddress(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  toObject(): PutMetadataAddressEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataAddressEndpointRequest;
}

export namespace PutMetadataAddressEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    KeyPairsList: PutMetadataAddressEndpointRequest.KeyPairsEntry[];
    Address: string;
    Private: boolean;
  }
  export type KeyPairsEntry = PutMetadataAddressEndpointRequestKeyPairsEntry;
}

export class PutMetadataAddressEndpointRequestKeyPairsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): PutMetadataAddressEndpointRequestKeyPairsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataAddressEndpointRequestKeyPairsEntry;
}

export namespace PutMetadataAddressEndpointRequestKeyPairsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
  }
}

export class KeyPairsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): KeyPairsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => KeyPairsEntry;
}

export namespace KeyPairsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
  }
}

export class PutMetadataBlockhashEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getKeyPairsList(): PutMetadataBlockhashEndpointRequest.KeyPairsEntry[];
  setKeyPairsList(a: PutMetadataBlockhashEndpointRequest.KeyPairsEntry[]): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  toObject(): PutMetadataBlockhashEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataBlockhashEndpointRequest;
}

export namespace PutMetadataBlockhashEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    KeyPairsList: PutMetadataBlockhashEndpointRequest.KeyPairsEntry[];
    BlockHash: string;
    Private: boolean;
  }
  export type KeyPairsEntry = PutMetadataBlockhashEndpointRequestKeyPairsEntry;
}

export class PutMetadataBlockhashEndpointRequestKeyPairsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): PutMetadataBlockhashEndpointRequestKeyPairsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataBlockhashEndpointRequestKeyPairsEntry;
}

export namespace PutMetadataBlockhashEndpointRequestKeyPairsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
  }
}

export class KeyPairsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): KeyPairsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => KeyPairsEntry;
}

export namespace KeyPairsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
  }
}

export class PutMetadataTxhashEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getKeyPairsList(): PutMetadataTxhashEndpointRequest.KeyPairsEntry[];
  setKeyPairsList(a: PutMetadataTxhashEndpointRequest.KeyPairsEntry[]): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  getPrivate(): boolean;
  setPrivate(a: boolean): void;
  toObject(): PutMetadataTxhashEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataTxhashEndpointRequest;
}

export namespace PutMetadataTxhashEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    KeyPairsList: PutMetadataTxhashEndpointRequest.KeyPairsEntry[];
    Txhash: string;
    Private: boolean;
  }
  export type KeyPairsEntry = PutMetadataTxhashEndpointRequestKeyPairsEntry;
}

export class PutMetadataTxhashEndpointRequestKeyPairsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): PutMetadataTxhashEndpointRequestKeyPairsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PutMetadataTxhashEndpointRequestKeyPairsEntry;
}

export namespace PutMetadataTxhashEndpointRequestKeyPairsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
  }
}

export class KeyPairsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): KeyPairsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => KeyPairsEntry;
}

export namespace KeyPairsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
  }
}

