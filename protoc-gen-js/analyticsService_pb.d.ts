export class GetAnalyticsJobRequest {
  constructor ();
  getTicket(): string;
  setTicket(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAnalyticsJobRequest;
}

export class GetAnalyticsJobResultsRequest {
  constructor ();
  getTicket(): string;
  setTicket(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAnalyticsJobResultsRequest;
}

export class Job {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getAnalyticsEngine(): string;
  setAnalyticsEngine(a: string): void;
  getCreatedAt(): {};
  setCreatedAt(a: {}): void;
  getCompletedAt(): {};
  setCompletedAt(a: {}): void;
  getFinished(): boolean;
  setFinished(a: boolean): void;
  getStarted(): boolean;
  setStarted(a: boolean): void;
  getTicket(): string;
  setTicket(a: string): void;
  getResultPath(): {};
  setResultPath(a: {}): void;
  getArgs(): {};
  setArgs(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Job;
}

export class JobArgs {
  constructor ();
  getAddress(): string;
  setAddress(a: string): void;
  getValueThreshold(): number;
  setValueThreshold(a: number): void;
  getLimit(): number;
  setLimit(a: number): void;
  getStart(): {};
  setStart(a: {}): void;
  getEnd(): {};
  setEnd(a: {}): void;
  getDegree(): number;
  setDegree(a: number): void;
  getSource(): string;
  setSource(a: string): void;
  getEnginename(): string;
  setEnginename(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => JobArgs;
}

export class JobResults {
  constructor ();
  getPage(): number;
  setPage(a: number): void;
  getMore(): boolean;
  setMore(a: boolean): void;
  getNextPage(): {};
  setNextPage(a: {}): void;
  getResults(): {};
  setResults(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => JobResults;
}

