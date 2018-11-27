export class CreateAnalyticsJobRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
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
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateAnalyticsJobRequest;
}

export class GetAnalyticsJobRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTicket(): string;
  setTicket(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAnalyticsJobRequest;
}

export class GetAnalyticsJobResultsRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getTicket(): string;
  setTicket(a: string): void;
  getPage(): number;
  setPage(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAnalyticsJobResultsRequest;
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
  getArgs(): {};
  setArgs(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Job;
}

export class JobResults {
  constructor ();
  getPage(): number;
  setPage(a: number): void;
  getMore(): boolean;
  setMore(a: boolean): void;
  getNextPage(): string;
  setNextPage(a: string): void;
  getResultsList(): {}[];
  setResultsList(a: {}[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => JobResults;
}

