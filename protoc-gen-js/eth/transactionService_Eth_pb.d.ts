export class GetTransactionHashEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  toObject(): GetTransactionHashEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetTransactionHashEndpointRequest;
}

export namespace GetTransactionHashEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Txhash: string;
  }
}

export class GetUnconfirmedTransactionsEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  toObject(): GetUnconfirmedTransactionsEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetUnconfirmedTransactionsEndpointRequest;
}

export namespace GetUnconfirmedTransactionsEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
  }
}

export class InputType {
  constructor ();
  getSequence(): number;
  setSequence(a: number): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  toObject(): InputType.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => InputType;
}

export namespace InputType {
  export type AsObject = {
    Sequence: number;
    AddressesList: string[];
  }
}

export class OutputType {
  constructor ();
  getValue(): number;
  setValue(a: number): void;
  getScript(): string;
  setScript(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  toObject(): OutputType.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OutputType;
}

export namespace OutputType {
  export type AsObject = {
    Value: number;
    Script: string;
    AddressesList: string[];
  }
}

export class PostCreateTransactionsEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getBlockHeight(): number;
  setBlockHeight(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
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
  getReceived(): string;
  setReceived(a: string): void;
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
  getInputsList(): InputType[];
  setInputsList(a: InputType[]): void;
  getOutputsList(): OutputType[];
  setOutputsList(a: OutputType[]): void;
  getInternalTxidsList(): string[];
  setInternalTxidsList(a: string[]): void;
  getParentTx(): string;
  setParentTx(a: string): void;
  getConfirmed(): string;
  setConfirmed(a: string): void;
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
  toObject(): PostCreateTransactionsEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostCreateTransactionsEndpointRequest;
}

export namespace PostCreateTransactionsEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    BlockHeight: number;
    Hash: string;
    AddressesList: string[];
    Total: number;
    Fees: number;
    Size: number;
    GasUsed: number;
    GasPrice: number;
    RelayedBy: string;
    Received: string;
    Ver: number;
    DoubleSpend: boolean;
    VinSz: number;
    VoutSz: number;
    Confirmations: number;
    InputsList: InputType[];
    OutputsList: OutputType[];
    InternalTxidsList: string[];
    ParentTx: string;
    Confirmed: string;
    GasLimit: number;
    ContractCreation: boolean;
    ReceiveCount: number;
    BlockHash: string;
    BlockIndex: number;
    DoubleOf: string;
    ExecutionError: string;
  }
}

export class PostDecodeRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTx(): string;
  setTx(a: string): void;
  toObject(): PostDecodeRawTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostDecodeRawTransactionEndpointRequest;
}

export namespace PostDecodeRawTransactionEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Tx: string;
  }
}

export class PostPushRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTx(): string;
  setTx(a: string): void;
  toObject(): PostPushRawTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostPushRawTransactionEndpointRequest;
}

export namespace PostPushRawTransactionEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Tx: string;
  }
}

export class PostSendTransactionEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTx(): TX;
  setTx(a: TX): void;
  getTosignList(): string[];
  setTosignList(a: string[]): void;
  getSignaturesList(): string[];
  setSignaturesList(a: string[]): void;
  getErrorsList(): string[];
  setErrorsList(a: string[]): void;
  toObject(): PostSendTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostSendTransactionEndpointRequest;
}

export namespace PostSendTransactionEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Tx: TX;
    TosignList: string[];
    SignaturesList: string[];
    ErrorsList: string[];
  }
}

export class TX {
  constructor ();
  getBlockHeight(): number;
  setBlockHeight(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
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
  getReceived(): string;
  setReceived(a: string): void;
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
  getInputsList(): InputType[];
  setInputsList(a: InputType[]): void;
  getOutputsList(): OutputType[];
  setOutputsList(a: OutputType[]): void;
  getInternalTxidsList(): string[];
  setInternalTxidsList(a: string[]): void;
  getParentTx(): string;
  setParentTx(a: string): void;
  getConfirmed(): string;
  setConfirmed(a: string): void;
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
  toObject(): TX.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TX;
}

export namespace TX {
  export type AsObject = {
    BlockHeight: number;
    Hash: string;
    AddressesList: string[];
    Total: number;
    Fees: number;
    Size: number;
    GasUsed: number;
    GasPrice: number;
    RelayedBy: string;
    Received: string;
    Ver: number;
    DoubleSpend: boolean;
    VinSz: number;
    VoutSz: number;
    Confirmations: number;
    InputsList: InputType[];
    OutputsList: OutputType[];
    InternalTxidsList: string[];
    ParentTx: string;
    Confirmed: string;
    GasLimit: number;
    ContractCreation: boolean;
    ReceiveCount: number;
    BlockHash: string;
    BlockIndex: number;
    DoubleOf: string;
    ExecutionError: string;
  }
}

export class TXSkeleton {
  constructor ();
  getTx(): TX;
  setTx(a: TX): void;
  getTosignList(): string[];
  setTosignList(a: string[]): void;
  getSignaturesList(): string[];
  setSignaturesList(a: string[]): void;
  getErrorsList(): string[];
  setErrorsList(a: string[]): void;
  toObject(): TXSkeleton.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXSkeleton;
}

export namespace TXSkeleton {
  export type AsObject = {
    Tx: TX;
    TosignList: string[];
    SignaturesList: string[];
    ErrorsList: string[];
  }
}

export class TxArray {
  constructor ();
  getResultList(): TX[];
  setResultList(a: TX[]): void;
  toObject(): TxArray.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TxArray;
}

export namespace TxArray {
  export type AsObject = {
    ResultList: TX[];
  }
}

