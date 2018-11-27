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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Block;
}

export class BlockHashEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getTxstart(): number;
  setTxstart(a: number): void;
  getLimit(): number;
  setLimit(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => BlockHashEndpointRequest;
}

export class BlockHeightEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getBlockHeight(): string;
  setBlockHeight(a: string): void;
  getTxstart(): number;
  setTxstart(a: number): void;
  getLimit(): number;
  setLimit(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => BlockHeightEndpointRequest;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Blockchain;
}

export class ChainEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ChainEndpointRequest;
}

