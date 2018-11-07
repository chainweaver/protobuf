export class Contract {
  constructor ();
  getSolidity(): string;
  setSolidity(a: string): void;
  getParams(): string;
  setParams(a: string): void;
  getPublish(): string;
  setPublish(a: string): void;
  getPrivate(): string;
  setPrivate(a: string): void;
  getGasLimit(): number;
  setGasLimit(a: number): void;
  getValue(): number;
  setValue(a: number): void;
  getName(): string;
  setName(a: string): void;
  getBin(): string;
  setBin(a: string): void;
  getAbi(): {};
  setAbi(a: {}): void;
  getAddress(): string;
  setAddress(a: string): void;
  getCreated(): {};
  setCreated(a: {}): void;
  getCreationTxHash(): string;
  setCreationTxHash(a: string): void;
  getResults(): string;
  setResults(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Contract;
}

export class ContractArray {
  constructor ();
  getContract(): {};
  setContract(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ContractArray;
}

export class GetContractAddressEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getQueryAddress(): string;
  setQueryAddress(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetContractAddressEndpointRequest;
}

export class PostCallContractMethodEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getQueryAddress(): string;
  setQueryAddress(a: string): void;
  getMethod(): string;
  setMethod(a: string): void;
  getSolidity(): string;
  setSolidity(a: string): void;
  getParams(): string;
  setParams(a: string): void;
  getPublish(): string;
  setPublish(a: string): void;
  getPrivate(): string;
  setPrivate(a: string): void;
  getGasLimit(): number;
  setGasLimit(a: number): void;
  getValue(): number;
  setValue(a: number): void;
  getName(): string;
  setName(a: string): void;
  getBin(): string;
  setBin(a: string): void;
  getAbi(): {};
  setAbi(a: {}): void;
  getAddress(): string;
  setAddress(a: string): void;
  getCreated(): {};
  setCreated(a: {}): void;
  getCreationTxHash(): string;
  setCreationTxHash(a: string): void;
  getResults(): string;
  setResults(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostCallContractMethodEndpointRequest;
}

export class PostCreateContractEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getSolidity(): string;
  setSolidity(a: string): void;
  getParams(): string;
  setParams(a: string): void;
  getPublish(): string;
  setPublish(a: string): void;
  getPrivate(): string;
  setPrivate(a: string): void;
  getGasLimit(): number;
  setGasLimit(a: number): void;
  getValue(): number;
  setValue(a: number): void;
  getName(): string;
  setName(a: string): void;
  getBin(): string;
  setBin(a: string): void;
  getAbi(): {};
  setAbi(a: {}): void;
  getAddress(): string;
  setAddress(a: string): void;
  getCreated(): {};
  setCreated(a: {}): void;
  getCreationTxHash(): string;
  setCreationTxHash(a: string): void;
  getResults(): string;
  setResults(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostCreateContractEndpointRequest;
}

