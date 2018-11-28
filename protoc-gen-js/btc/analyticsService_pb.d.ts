export class CreateAnalyticsJobRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getEnginename(): string;
  setEnginename(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  getValueThreshold(): number;
  setValueThreshold(a: number): void;
  getLimit(): number;
  setLimit(a: number): void;
  getStart(): string;
  setStart(a: string): void;
  getEnd(): string;
  setEnd(a: string): void;
  getDegree(): number;
  setDegree(a: number): void;
  getSource(): string;
  setSource(a: string): void;
  toObject(): CreateAnalyticsJobRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateAnalyticsJobRequest;
}

export namespace CreateAnalyticsJobRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Enginename: string;
    Address: string;
    ValueThreshold: number;
    Limit: number;
    Start: string;
    End: string;
    Degree: number;
    Source: string;
  }
}

export class GetAnalyticsJobRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTicket(): string;
  setTicket(a: string): void;
  toObject(): GetAnalyticsJobRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAnalyticsJobRequest;
}

export namespace GetAnalyticsJobRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Ticket: string;
  }
}

export class GetAnalyticsJobResultsRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getTicket(): string;
  setTicket(a: string): void;
  getPage(): number;
  setPage(a: number): void;
  toObject(): GetAnalyticsJobResultsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAnalyticsJobResultsRequest;
}

export namespace GetAnalyticsJobResultsRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Ticket: string;
    Page: number;
  }
}

export class Job {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getAnalyticsEngine(): string;
  setAnalyticsEngine(a: string): void;
  getCreatedAt(): string;
  setCreatedAt(a: string): void;
  getCompletedAt(): string;
  setCompletedAt(a: string): void;
  getFinished(): boolean;
  setFinished(a: boolean): void;
  getStarted(): boolean;
  setStarted(a: boolean): void;
  getTicket(): string;
  setTicket(a: string): void;
  getResultPath(): string;
  setResultPath(a: string): void;
  getArgs(): JobArgs;
  setArgs(a: JobArgs): void;
  toObject(): Job.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Job;
}

export namespace Job {
  export type AsObject = {
    Token: string;
    AnalyticsEngine: string;
    CreatedAt: string;
    CompletedAt: string;
    Finished: boolean;
    Started: boolean;
    Ticket: string;
    ResultPath: string;
    Args: JobArgs;
  }
}

export class JobArgs {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  getValueThreshold(): number;
  setValueThreshold(a: number): void;
  getLimit(): number;
  setLimit(a: number): void;
  getStart(): string;
  setStart(a: string): void;
  getEnd(): string;
  setEnd(a: string): void;
  getDegree(): number;
  setDegree(a: number): void;
  getSource(): string;
  setSource(a: string): void;
  toObject(): JobArgs.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => JobArgs;
}

export namespace JobArgs {
  export type AsObject = {
    Address: string;
    ValueThreshold: number;
    Limit: number;
    Start: string;
    End: string;
    Degree: number;
    Source: string;
  }
}

export class JobResultArr {
  constructor ();
  getDstaddr(): string;
  setDstaddr(a: string): void;
  getSrcaddr(): string;
  setSrcaddr(a: string): void;
  getTxhash(): string;
  setTxhash(a: string): void;
  getValue(): number;
  setValue(a: number): void;
  toObject(): JobResultArr.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => JobResultArr;
}

export namespace JobResultArr {
  export type AsObject = {
    Dstaddr: string;
    Srcaddr: string;
    Txhash: string;
    Value: number;
  }
}

export class JobResults {
  constructor ();
  getPage(): number;
  setPage(a: number): void;
  getMore(): boolean;
  setMore(a: boolean): void;
  getNextPage(): string;
  setNextPage(a: string): void;
  getResultsList(): JobResultArr[];
  setResultsList(a: JobResultArr[]): void;
  toObject(): JobResults.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => JobResults;
}

export namespace JobResults {
  export type AsObject = {
    Page: number;
    More: boolean;
    NextPage: string;
    ResultsList: JobResultArr[];
  }
}

