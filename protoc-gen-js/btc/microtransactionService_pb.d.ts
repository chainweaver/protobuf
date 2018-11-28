export class MicroTX {
  constructor ();
  getFromPubkey(): string;
  setFromPubkey(a: string): void;
  getFromPrivate(): string;
  setFromPrivate(a: string): void;
  getFromWif(): string;
  setFromWif(a: string): void;
  getToAddress(): string;
  setToAddress(a: string): void;
  getValueSatoshis(): number;
  setValueSatoshis(a: number): void;
  getToken(): string;
  setToken(a: string): void;
  getChangeAddress(): string;
  setChangeAddress(a: string): void;
  getWaitGuarantee(): boolean;
  setWaitGuarantee(a: boolean): void;
  getTosignList(): string[];
  setTosignList(a: string[]): void;
  getSignaturesList(): string[];
  setSignaturesList(a: string[]): void;
  getInputsList(): TXInput[];
  setInputsList(a: TXInput[]): void;
  getOutputsList(): TXOutput[];
  setOutputsList(a: TXOutput[]): void;
  getFees(): number;
  setFees(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  toObject(): MicroTX.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => MicroTX;
}

export namespace MicroTX {
  export type AsObject = {
    FromPubkey: string;
    FromPrivate: string;
    FromWif: string;
    ToAddress: string;
    ValueSatoshis: number;
    Token: string;
    ChangeAddress: string;
    WaitGuarantee: boolean;
    TosignList: string[];
    SignaturesList: string[];
    InputsList: TXInput[];
    OutputsList: TXOutput[];
    Fees: number;
    Hash: string;
  }
}

export class MicroTXRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getFromPubkey(): string;
  setFromPubkey(a: string): void;
  getFromPrivate(): string;
  setFromPrivate(a: string): void;
  getFromWif(): string;
  setFromWif(a: string): void;
  getToAddress(): string;
  setToAddress(a: string): void;
  getValueSatoshis(): number;
  setValueSatoshis(a: number): void;
  getToken(): string;
  setToken(a: string): void;
  getChangeAddress(): string;
  setChangeAddress(a: string): void;
  getWaitGuarantee(): boolean;
  setWaitGuarantee(a: boolean): void;
  getTosignList(): string[];
  setTosignList(a: string[]): void;
  getSignaturesList(): string[];
  setSignaturesList(a: string[]): void;
  getInputsList(): TXInput[];
  setInputsList(a: TXInput[]): void;
  getOutputsList(): TXOutput[];
  setOutputsList(a: TXOutput[]): void;
  getFees(): number;
  setFees(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  toObject(): MicroTXRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => MicroTXRequest;
}

export namespace MicroTXRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    FromPubkey: string;
    FromPrivate: string;
    FromWif: string;
    ToAddress: string;
    ValueSatoshis: number;
    Token: string;
    ChangeAddress: string;
    WaitGuarantee: boolean;
    TosignList: string[];
    SignaturesList: string[];
    InputsList: TXInput[];
    OutputsList: TXOutput[];
    Fees: number;
    Hash: string;
  }
}

export class TXInput {
  constructor ();
  getPrevHash(): string;
  setPrevHash(a: string): void;
  getOutputIndex(): number;
  setOutputIndex(a: number): void;
  getOutputValue(): number;
  setOutputValue(a: number): void;
  getScriptType(): string;
  setScriptType(a: string): void;
  getScript(): string;
  setScript(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  getSequence(): number;
  setSequence(a: number): void;
  getAge(): number;
  setAge(a: number): void;
  getWalletName(): string;
  setWalletName(a: string): void;
  getWalletToken(): string;
  setWalletToken(a: string): void;
  toObject(): TXInput.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXInput;
}

export namespace TXInput {
  export type AsObject = {
    PrevHash: string;
    OutputIndex: number;
    OutputValue: number;
    ScriptType: string;
    Script: string;
    AddressesList: string[];
    Sequence: number;
    Age: number;
    WalletName: string;
    WalletToken: string;
  }
}

export class TXOutput {
  constructor ();
  getValue(): number;
  setValue(a: number): void;
  getScript(): string;
  setScript(a: string): void;
  getAddressesList(): string[];
  setAddressesList(a: string[]): void;
  getScriptType(): string;
  setScriptType(a: string): void;
  getSpentBy(): string;
  setSpentBy(a: string): void;
  getDataHex(): string;
  setDataHex(a: string): void;
  getDataString(): string;
  setDataString(a: string): void;
  toObject(): TXOutput.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TXOutput;
}

export namespace TXOutput {
  export type AsObject = {
    Value: number;
    Script: string;
    AddressesList: string[];
    ScriptType: string;
    SpentBy: string;
    DataHex: string;
    DataString: string;
  }
}

