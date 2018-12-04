export class Block {
  constructor ();
  getHash(): string;
  setHash(a: string): void;
  getHeight(): number;
  setHeight(a: number): void;
  getDepth(): number;
  setDepth(a: number): void;
  getChain(): string;
  setChain(a: string): void;
  getTotal(): number;
  setTotal(a: number): void;
  getFees(): number;
  setFees(a: number): void;
  getSize(): number;
  setSize(a: number): void;
  getVer(): number;
  setVer(a: number): void;
  getTime(): string;
  setTime(a: string): void;
  getReceivedTime(): string;
  setReceivedTime(a: string): void;
  getCoinbaseAddr(): string;
  setCoinbaseAddr(a: string): void;
  getRelayedBy(): string;
  setRelayedBy(a: string): void;
  getNonce(): number;
  setNonce(a: number): void;
  getNTx(): number;
  setNTx(a: number): void;
  getPrevBlock(): string;
  setPrevBlock(a: string): void;
  getPrevBlockUrl(): string;
  setPrevBlockUrl(a: string): void;
  getTxUrl(): string;
  setTxUrl(a: string): void;
  getMrklRoot(): string;
  setMrklRoot(a: string): void;
  getTxidsList(): string[];
  setTxidsList(a: string[]): void;
  getInternalTxidsList(): string[];
  setInternalTxidsList(a: string[]): void;
  getNextTxids(): string;
  setNextTxids(a: string): void;
  getNextInternalTxids(): string;
  setNextInternalTxids(a: string): void;
  getUnclesList(): string[];
  setUnclesList(a: string[]): void;
  toObject(): Block.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Block;
}

export namespace Block {
  export type AsObject = {
    Hash: string;
    Height: number;
    Depth: number;
    Chain: string;
    Total: number;
    Fees: number;
    Size: number;
    Ver: number;
    Time: string;
    ReceivedTime: string;
    CoinbaseAddr: string;
    RelayedBy: string;
    Nonce: number;
    NTx: number;
    PrevBlock: string;
    PrevBlockUrl: string;
    TxUrl: string;
    MrklRoot: string;
    TxidsList: string[];
    InternalTxidsList: string[];
    NextTxids: string;
    NextInternalTxids: string;
    UnclesList: string[];
  }
}

export class Blockchain {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getHeight(): number;
  setHeight(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  getTime(): string;
  setTime(a: string): void;
  getLatestUrl(): string;
  setLatestUrl(a: string): void;
  getPreviousHash(): string;
  setPreviousHash(a: string): void;
  getPreviousUrl(): string;
  setPreviousUrl(a: string): void;
  getUnconfirmedCount(): number;
  setUnconfirmedCount(a: number): void;
  getHighGasPrice(): number;
  setHighGasPrice(a: number): void;
  getMediumGasPrice(): number;
  setMediumGasPrice(a: number): void;
  getLowGasPrice(): number;
  setLowGasPrice(a: number): void;
  getLastForkHeight(): number;
  setLastForkHeight(a: number): void;
  getLastForkHash(): string;
  setLastForkHash(a: string): void;
  toObject(): Blockchain.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Blockchain;
}

export namespace Blockchain {
  export type AsObject = {
    Name: string;
    Height: number;
    Hash: string;
    Time: string;
    LatestUrl: string;
    PreviousHash: string;
    PreviousUrl: string;
    UnconfirmedCount: number;
    HighGasPrice: number;
    MediumGasPrice: number;
    LowGasPrice: number;
    LastForkHeight: number;
    LastForkHash: string;
  }
}

export class GetBlockHashEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getTxstart(): number;
  setTxstart(a: number): void;
  getLimit(): number;
  setLimit(a: number): void;
  toObject(): GetBlockHashEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetBlockHashEndpointRequest;
}

export namespace GetBlockHashEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    BlockHash: string;
    Txstart: number;
    Limit: number;
  }
}

export class GetBlockHeightEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getBlockHeight(): string;
  setBlockHeight(a: string): void;
  getTxstart(): number;
  setTxstart(a: number): void;
  getLimit(): number;
  setLimit(a: number): void;
  toObject(): GetBlockHeightEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetBlockHeightEndpointRequest;
}

export namespace GetBlockHeightEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    BlockHeight: string;
    Txstart: number;
    Limit: number;
  }
}

export class GetChainEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  toObject(): GetChainEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetChainEndpointRequest;
}

export namespace GetChainEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
  }
}

