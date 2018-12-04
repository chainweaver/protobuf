export class DecodeRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTx(): string;
  setTx(a: string): void;
  toObject(): DecodeRawTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DecodeRawTransactionEndpointRequest;
}

export namespace DecodeRawTransactionEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Tx: string;
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

export class NewTransactionEndpointRequest {
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
  toObject(): NewTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NewTransactionEndpointRequest;
}

export namespace NewTransactionEndpointRequest {
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

export class PushRawTransactionEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTx(): string;
  setTx(a: string): void;
  toObject(): PushRawTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PushRawTransactionEndpointRequest;
}

export namespace PushRawTransactionEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Tx: string;
  }
}

export class SendTransactionEndpointRequest {
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
  toObject(): SendTransactionEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SendTransactionEndpointRequest;
}

export namespace SendTransactionEndpointRequest {
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

export class TransactionHashEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  toObject(): TransactionHashEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TransactionHashEndpointRequest;
}

export namespace TransactionHashEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Txhash: string;
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

export class UnconfirmedTransactionsEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  toObject(): UnconfirmedTransactionsEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UnconfirmedTransactionsEndpointRequest;
}

export namespace UnconfirmedTransactionsEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
  }
}

