export class AddAddressesToWalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  getOmitwalletaddresses(): boolean;
  setOmitwalletaddresses(a: boolean): void;
  toObject(): AddAddressesToWalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddAddressesToWalletEndpointRequest;
}

export namespace AddAddressesToWalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
    Omitwalletaddresses: boolean;
  }
}

export class CreateHDWalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getChainsList(): HDChain[];
  setChainsList(a: HDChain[]): void;
  getHd(): boolean;
  setHd(a: boolean): void;
  getExtendedPublicKey(): string;
  setExtendedPublicKey(a: string): void;
  getSubchainIndexesList(): number[];
  setSubchainIndexesList(a: number[]): void;
  toObject(): CreateHDWalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateHDWalletEndpointRequest;
}

export namespace CreateHDWalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Token: string;
    Name: string;
    ChainsList: HDChain[];
    Hd: boolean;
    ExtendedPublicKey: string;
    SubchainIndexesList: number[];
  }
}

export class CreateWalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  toObject(): CreateWalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateWalletEndpointRequest;
}

export namespace CreateWalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Token: string;
    Name: string;
    AddressesList: string[];
  }
}

export class DeleteHDWalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  toObject(): DeleteHDWalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteHDWalletEndpointRequest;
}

export namespace DeleteHDWalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
  }
}

export class DeleteWalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  toObject(): DeleteWalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteWalletEndpointRequest;
}

export namespace DeleteWalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
  }
}

export class DeriveAddressInWalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  getCount(): number;
  setCount(a: number): void;
  getSubchainIndex(): number;
  setSubchainIndex(a: number): void;
  toObject(): DeriveAddressInWalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeriveAddressInWalletEndpointRequest;
}

export namespace DeriveAddressInWalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
    Count: number;
    SubchainIndex: number;
  }
}

export class GenerateAddressInWalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  toObject(): GenerateAddressInWalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GenerateAddressInWalletEndpointRequest;
}

export namespace GenerateAddressInWalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
  }
}

export class HDAddress {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  getPath(): string;
  setPath(a: string): void;
  getPublic(): string;
  setPublic(a: string): void;
  toObject(): HDAddress.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDAddress;
}

export namespace HDAddress {
  export type AsObject = {
    Address: string;
    Path: string;
    Public: string;
  }
}

export class HDChain {
  constructor ();
  getChainAddressesList(): HDAddress[];
  setChainAddressesList(a: HDAddress[]): void;
  getIndex(): number;
  setIndex(a: number): void;
  toObject(): HDChain.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDChain;
}

export namespace HDChain {
  export type AsObject = {
    ChainAddressesList: HDAddress[];
    Index: number;
  }
}

export class HDWallet {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getChainsList(): HDChain[];
  setChainsList(a: HDChain[]): void;
  getHd(): boolean;
  setHd(a: boolean): void;
  getExtendedPublicKey(): string;
  setExtendedPublicKey(a: string): void;
  getSubchainIndexesList(): number[];
  setSubchainIndexesList(a: number[]): void;
  toObject(): HDWallet.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDWallet;
}

export namespace HDWallet {
  export type AsObject = {
    Token: string;
    Name: string;
    ChainsList: HDChain[];
    Hd: boolean;
    ExtendedPublicKey: string;
    SubchainIndexesList: number[];
  }
}

export class HDWalletAddressesEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  getUsed(): boolean;
  setUsed(a: boolean): void;
  getZerobalance(): boolean;
  setZerobalance(a: boolean): void;
  toObject(): HDWalletAddressesEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDWalletAddressesEndpointRequest;
}

export namespace HDWalletAddressesEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
    Used: boolean;
    Zerobalance: boolean;
  }
}

export class HDWalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  toObject(): HDWalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HDWalletEndpointRequest;
}

export namespace HDWalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
  }
}

export class ListWallets {
  constructor ();
  getWalletNamesList(): string[];
  setWalletNamesList(a: string[]): void;
  toObject(): ListWallets.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListWallets;
}

export namespace ListWallets {
  export type AsObject = {
    WalletNamesList: string[];
  }
}

export class ListWalletsEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  toObject(): ListWalletsEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListWalletsEndpointRequest;
}

export namespace ListWalletsEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
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

export class RemoveAddressesFromWalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  toObject(): RemoveAddressesFromWalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RemoveAddressesFromWalletEndpointRequest;
}

export namespace RemoveAddressesFromWalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
    Address: string;
  }
}

export class Wallet {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getName(): string;
  setName(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  toObject(): Wallet.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Wallet;
}

export namespace Wallet {
  export type AsObject = {
    Token: string;
    Name: string;
    AddressesList: string[];
  }
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
  toObject(): WalletAddressKeychain.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => WalletAddressKeychain;
}

export namespace WalletAddressKeychain {
  export type AsObject = {
    Token: string;
    Name: string;
    AddressesList: string[];
    Address: string;
    Public: string;
    Private: string;
    Wif: string;
    PubkeysList: string[];
    ScriptType: string;
    OriginalAddress: string;
    OapAddress: string;
  }
}

export class WalletAddressesEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  getUsed(): boolean;
  setUsed(a: boolean): void;
  getZerobalance(): boolean;
  setZerobalance(a: boolean): void;
  toObject(): WalletAddressesEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => WalletAddressesEndpointRequest;
}

export namespace WalletAddressesEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
    Used: boolean;
    Zerobalance: boolean;
  }
}

export class WalletEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getName(): string;
  setName(a: string): void;
  toObject(): WalletEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => WalletEndpointRequest;
}

export namespace WalletEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Name: string;
  }
}

