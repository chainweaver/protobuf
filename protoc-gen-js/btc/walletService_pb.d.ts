export class AddAddressesToWalletEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getName(): string;
  setName(a: string): void;
  getOmitwalletaddresses(): boolean;
  setOmitwalletaddresses(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddAddressesToWalletEndpointRequest;
}

export class CreateWalletEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateWalletEndpointRequest;
}

export class CreateWalletHDEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getChainsList(): {}[];
  setChainsList(a: {}[]): void;
  getHd(): boolean;
  setHd(a: boolean): void;
  getExtendedPublicKey(): string;
  setExtendedPublicKey(a: string): void;
  getSubchainIndexesList(): number[];
  setSubchainIndexesList(a: number[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateWalletHDEndpointRequest;
}

export class DeleteWalletEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getName(): string;
  setName(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteWalletEndpointRequest;
}

export class DeriveAddressInWalletEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getName(): string;
  setName(a: string): void;
  getCount(): number;
  setCount(a: number): void;
  getSubchainIndex(): number;
  setSubchainIndex(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeriveAddressInWalletEndpointRequest;
}

export class GenerateAdressInWalletEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getName(): string;
  setName(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GenerateAdressInWalletEndpointRequest;
}

export class GetWalletAddressesEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getName(): string;
  setName(a: string): void;
  getUsed(): boolean;
  setUsed(a: boolean): void;
  getZerobalance(): boolean;
  setZerobalance(a: boolean): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetWalletAddressesEndpointRequest;
}

export class GetWalletEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getName(): string;
  setName(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetWalletEndpointRequest;
}

export class HDChain {
  constructor ();
  getChainAddressesList(): {}[];
  setChainAddressesList(a: {}[]): void;
  getIndex(): number;
  setIndex(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDChain;
}

export class HDWallet {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getChainsList(): {}[];
  setChainsList(a: {}[]): void;
  getHd(): boolean;
  setHd(a: boolean): void;
  getExtendedPublicKey(): string;
  setExtendedPublicKey(a: string): void;
  getSubchainIndexesList(): number[];
  setSubchainIndexesList(a: number[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDWallet;
}

export class ListWallets {
  constructor ();
  getWalletNamesList(): string[];
  setWalletNamesList(a: string[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListWallets;
}

export class ListWalletsEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListWalletsEndpointRequest;
}

export class NullValue {
  constructor ();
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NullValue;
}

export class RemoveAddressesFromWalletEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getName(): string;
  setName(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RemoveAddressesFromWalletEndpointRequest;
}

export class Wallet {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Wallet;
}

export class WalletAddressKeychain {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
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
  static deserializeBinary: (bytes: {}) => WalletAddressKeychain;
}

