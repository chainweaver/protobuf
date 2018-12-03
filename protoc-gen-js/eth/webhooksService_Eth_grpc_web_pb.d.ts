import * as grpcWeb from 'grpc-web';
import {
  ArrayEvent,
  DeleteWebHookEndpointRequest,
  Event,
  GetListWebHooksEndpointRequest,
  GetWebHookIDEndpointRequest,
  NullValue,
  PostCreateWebHookEndpointRequest} from './webhooksService_Eth_pb';

export class WebHooksServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createWebHookEndpoint(
    request: PostCreateWebHookEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Event) => void
  ): grpcWeb.ClientReadableStream<Event>;

  listWebHooksEndpoint(
    request: GetListWebHooksEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ArrayEvent) => void
  ): grpcWeb.ClientReadableStream<ArrayEvent>;

  webHookIDEndpoint(
    request: GetWebHookIDEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Event) => void
  ): grpcWeb.ClientReadableStream<Event>;

  webHookEndpoint(
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
    request: PostCreateWebHookEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Event>;

  listWebHooksEndpoint(
    request: GetListWebHooksEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ArrayEvent>;

  webHookIDEndpoint(
    request: GetWebHookIDEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Event>;

  webHookEndpoint(
    request: DeleteWebHookEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

}

