export class ArrayEvent {
  constructor ();
  getEvent(): {};
  setEvent(a: {}): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ArrayEvent;
}

export class DeleteWebHookEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getWebhookid(): string;
  setWebhookid(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteWebHookEndpointRequest;
}

export class Event {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getEvent(): string;
  setEvent(a: string): void;
  getHash(): string;
  setHash(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  getConfirmations(): number;
  setConfirmations(a: number): void;
  getUrl(): {};
  setUrl(a: {}): void;
  getCallbackErrors(): number;
  setCallbackErrors(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Event;
}

export class GetListWebHooksEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getToken(): string;
  setToken(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetListWebHooksEndpointRequest;
}

export class GetWebHookIDEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getWebhookid(): string;
  setWebhookid(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetWebHookIDEndpointRequest;
}

export class NullValue {
  constructor ();
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NullValue;
}

export class PostCreateWebHookEndpointRequest {
  constructor ();
  getNetwork(): {};
  setNetwork(a: {}): void;
  getId(): string;
  setId(a: string): void;
  getEvent(): string;
  setEvent(a: string): void;
  getHash(): string;
  setHash(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  getConfirmations(): number;
  setConfirmations(a: number): void;
  getUrl(): {};
  setUrl(a: {}): void;
  getCallbackErrors(): number;
  setCallbackErrors(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostCreateWebHookEndpointRequest;
}

