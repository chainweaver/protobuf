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
  getInputsList(): {}[];
  setInputsList(a: {}[]): void;
  getOutputsList(): {}[];
  setOutputsList(a: {}[]): void;
  getFees(): number;
  setFees(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => MicroTX;
}

export class MicroTXRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
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
  getInputsList(): {}[];
  setInputsList(a: {}[]): void;
  getOutputsList(): {}[];
  setOutputsList(a: {}[]): void;
  getFees(): number;
  setFees(a: number): void;
  getHash(): string;
  setHash(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => MicroTXRequest;
}

