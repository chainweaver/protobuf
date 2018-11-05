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
  getTosign(): string;
  setTosign(a: string): void;
  getSignatures(): string;
  setSignatures(a: string): void;
  getInputs(): {};
  setInputs(a: {}): void;
  getOutputs(): {};
  setOutputs(a: {}): void;
  getFees(): number;
  setFees(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => MicroTX;
}

export class MicroTXRequest {
  constructor ();
  getStage(): string;
  setStage(a: string): void;
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
  getTosign(): string;
  setTosign(a: string): void;
  getSignatures(): string;
  setSignatures(a: string): void;
  getInputs(): {};
  setInputs(a: {}): void;
  getOutputs(): {};
  setOutputs(a: {}): void;
  getFees(): number;
  setFees(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => MicroTXRequest;
}

