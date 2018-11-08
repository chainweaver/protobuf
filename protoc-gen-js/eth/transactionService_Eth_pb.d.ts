export class GetTransactionHashEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetTransactionHashEndpointRequest;
}

export class GetUnconfirmedTransactionsEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetUnconfirmedTransactionsEndpointRequest;
}

export class PostCreateTransactionsEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getBlockHeight(): number;
  setBlockHeight(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  getAddresses(): string;
  setAddresses(a: string): void;
  getTotal(): number;
  setTotal(a: number): void;
  getFees(): number;
  setFees(a: number): void;
  getSize(): number;
  setSize(a: number): void;
  getGasUsed(): number;
  setGasUsed(a: number): void;
  getGasPrice(): number;
  setGasPrice(a: number): void;
  getRelayedBy(): string;
  setRelayedBy(a: string): void;
  getReceived(): {};
  setReceived(a: {}): void;
  getVer(): number;
  setVer(a: number): void;
  getDoubleSpend(): boolean;
  setDoubleSpend(a: boolean): void;
  getVinSz(): number;
  setVinSz(a: number): void;
  getVoutSz(): number;
  setVoutSz(a: number): void;
  getConfirmations(): number;
  setConfirmations(a: number): void;
  getInputs(): {};
  setInputs(a: {}): void;
  getOutputs(): {};
  setOutputs(a: {}): void;
  getInternalTxids(): string;
  setInternalTxids(a: string): void;
  getParentTx(): string;
  setParentTx(a: string): void;
  getConfirmed(): {};
  setConfirmed(a: {}): void;
  getGasLimit(): number;
  setGasLimit(a: number): void;
  getContractCreation(): boolean;
  setContractCreation(a: boolean): void;
  getReceiveCount(): number;
  setReceiveCount(a: number): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getBlockIndex(): number;
  setBlockIndex(a: number): void;
  getDoubleOf(): string;
  setDoubleOf(a: string): void;
  getExecutionError(): string;
  setExecutionError(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostCreateTransactionsEndpointRequest;
}

export class PostDecodeRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTx(): string;
  setTx(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostDecodeRawTransactionEndpointRequest;
}

export class PostPushRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTx(): string;
  setTx(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostPushRawTransactionEndpointRequest;
}

export class PostSendTransactionEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTx(): {};
  setTx(a: {}): void;
  getTosign(): string;
  setTosign(a: string): void;
  getSignatures(): string;
  setSignatures(a: string): void;
  getErrors(): string;
  setErrors(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostSendTransactionEndpointRequest;
}

export class TX {
  constructor ();
  getBlockHeight(): number;
  setBlockHeight(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  getAddresses(): string;
  setAddresses(a: string): void;
  getTotal(): number;
  setTotal(a: number): void;
  getFees(): number;
  setFees(a: number): void;
  getSize(): number;
  setSize(a: number): void;
  getGasUsed(): number;
  setGasUsed(a: number): void;
  getGasPrice(): number;
  setGasPrice(a: number): void;
  getRelayedBy(): string;
  setRelayedBy(a: string): void;
  getReceived(): {};
  setReceived(a: {}): void;
  getVer(): number;
  setVer(a: number): void;
  getDoubleSpend(): boolean;
  setDoubleSpend(a: boolean): void;
  getVinSz(): number;
  setVinSz(a: number): void;
  getVoutSz(): number;
  setVoutSz(a: number): void;
  getConfirmations(): number;
  setConfirmations(a: number): void;
  getInputs(): {};
  setInputs(a: {}): void;
  getOutputs(): {};
  setOutputs(a: {}): void;
  getInternalTxids(): string;
  setInternalTxids(a: string): void;
  getParentTx(): string;
  setParentTx(a: string): void;
  getConfirmed(): {};
  setConfirmed(a: {}): void;
  getGasLimit(): number;
  setGasLimit(a: number): void;
  getContractCreation(): boolean;
  setContractCreation(a: boolean): void;
  getReceiveCount(): number;
  setReceiveCount(a: number): void;
  getBlockHash(): string;
  setBlockHash(a: string): void;
  getBlockIndex(): number;
  setBlockIndex(a: number): void;
  getDoubleOf(): string;
  setDoubleOf(a: string): void;
  getExecutionError(): string;
  setExecutionError(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TX;
}

export class TXSkeleton {
  constructor ();
  getTx(): {};
  setTx(a: {}): void;
  getTosign(): string;
  setTosign(a: string): void;
  getSignatures(): string;
  setSignatures(a: string): void;
  getErrors(): string;
  setErrors(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXSkeleton;
}

export class TxArray {
  constructor ();
  getResult(): {};
  setResult(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TxArray;
}

