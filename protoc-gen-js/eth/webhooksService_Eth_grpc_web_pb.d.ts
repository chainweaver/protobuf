import * as grpcWeb from 'grpc-web';
import {
  ArrayEvent,
  CreateWebHookEndpointRequest,
  DeleteWebHookEndpointRequest,
  Event,
  ListWebHooksEndpointRequest,
  NullValue,
  WebHookIDEndpointRequest} from './webhooksService_Eth_pb';

export class WebHooksServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createWebHookEndpoint(
    request: CreateWebHookEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Event) => void
  ): grpcWeb.ClientReadableStream<Event>;

  listWebHooksEndpoint(
    request: ListWebHooksEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ArrayEvent) => void
  ): grpcWeb.ClientReadableStream<ArrayEvent>;

  webHookIDEndpoint(
    request: WebHookIDEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Event) => void
  ): grpcWeb.ClientReadableStream<Event>;

  deleteWebHookEndpoint(
    request: DeleteWebHookEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

}

export class WebHooksServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createWebHookEndpoint(
    request: CreateWebHookEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Event>;

  listWebHooksEndpoint(
    request: ListWebHooksEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ArrayEvent>;

  webHookIDEndpoint(
    request: WebHookIDEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Event>;

  deleteWebHookEndpoint(
    request: DeleteWebHookEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

}

