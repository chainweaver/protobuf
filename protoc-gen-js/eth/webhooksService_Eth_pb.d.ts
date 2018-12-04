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

export class CreateWebHookEndpointRequest {
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
  toObject(): CreateWebHookEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateWebHookEndpointRequest;
}

export namespace CreateWebHookEndpointRequest {
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

export class ListWebHooksEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getToken(): string;
  setToken(a: string): void;
  toObject(): ListWebHooksEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ListWebHooksEndpointRequest;
}

export namespace ListWebHooksEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Token: string;
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

export class WebHookEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getWebhookid(): string;
  setWebhookid(a: string): void;
  toObject(): WebHookEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => WebHookEndpointRequest;
}

export namespace WebHookEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Webhookid: string;
  }
}

export class WebHookIDEndpointRequest {
  constructor ();
  getNetwork(): NetworkAllowingAlias;
  setNetwork(a: NetworkAllowingAlias): void;
  getWebhookid(): string;
  setWebhookid(a: string): void;
  toObject(): WebHookIDEndpointRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => WebHookIDEndpointRequest;
}

export namespace WebHookIDEndpointRequest {
  export type AsObject = {
    Network: NetworkAllowingAlias;
    Webhookid: string;
  }
}

