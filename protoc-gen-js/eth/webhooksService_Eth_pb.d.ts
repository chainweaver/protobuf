export class ArrayEvent {
  constructor ();
  getEventList(): Event[];
  setEventList(a: Event[]): void;
  toObject(): ArrayEvent.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ArrayEvent;
}

export namespace ArrayEvent {
  export type AsObject = {
    EventList: Event[];
  }
}

export class DeleteWebHookEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getWebhookid(): string;
  setWebhookid(a: string): void;
  toObject(): DeleteWebHookEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteWebHookEndpointRequest;
}

export namespace DeleteWebHookEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Webhookid: string;
  }
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
  getUrl(): string;
  setUrl(a: string): void;
  getCallbackErrors(): number;
  setCallbackErrors(a: number): void;
  toObject(): Event.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Event;
}

export namespace Event {
  export type AsObject = {
    Id: string;
    Event: string;
    Hash: string;
    Address: string;
    Confirmations: number;
    Url: string;
    CallbackErrors: number;
  }
}

export class GetListWebHooksEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getToken(): string;
  setToken(a: string): void;
  toObject(): GetListWebHooksEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetListWebHooksEndpointRequest;
}

export namespace GetListWebHooksEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Token: string;
  }
}

export class GetWebHookIDEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getWebhookid(): string;
  setWebhookid(a: string): void;
  toObject(): GetWebHookIDEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetWebHookIDEndpointRequest;
}

export namespace GetWebHookIDEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Webhookid: string;
  }
}

export class NullValue {
  constructor ();
  toObject(): NullValue.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => NullValue;
}

export namespace NullValue {
  export type AsObject = {
  }
}

export class PostCreateWebHookEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
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
  getUrl(): string;
  setUrl(a: string): void;
  getCallbackErrors(): number;
  setCallbackErrors(a: number): void;
  toObject(): PostCreateWebHookEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PostCreateWebHookEndpointRequest;
}

export namespace PostCreateWebHookEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Id: string;
    Event: string;
    Hash: string;
    Address: string;
    Confirmations: number;
    Url: string;
    CallbackErrors: number;
  }
}

