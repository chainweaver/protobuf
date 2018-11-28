export class TXConfidence {
  constructor ();
  getAgeMillis(): number;
  setAgeMillis(a: number): void;
  getReceiveCount(): number;
  setReceiveCount(a: number): void;
  getConfidence(): number;
  setConfidence(a: number): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  getTxurl(): string;
  setTxurl(a: string): void;
  toObject(): TXConfidence.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXConfidence;
}

export namespace TXConfidence {
  export type AsObject = {
    AgeMillis: number;
    ReceiveCount: number;
    Confidence: number;
    Txhash: string;
    Txurl: string;
  }
}

export class TransactionConfidenceEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  toObject(): TransactionConfidenceEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TransactionConfidenceEndpointRequest;
}

export namespace TransactionConfidenceEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Txhash: string;
  }
}

