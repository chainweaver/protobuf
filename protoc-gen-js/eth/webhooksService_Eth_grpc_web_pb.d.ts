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

  postCreateWebHookEndpoint(
    request: PostCreateWebHookEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Event) => void
  ): grpcWeb.ClientReadableStream<Event>;

  getListWebHooksEndpoint(
    request: GetListWebHooksEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ArrayEvent) => void
  ): grpcWeb.ClientReadableStream<ArrayEvent>;

  getWebHookIDEndpoint(
    request: GetWebHookIDEndpointRequest,
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

  postCreateWebHookEndpoint(
    request: PostCreateWebHookEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Event>;

  getListWebHooksEndpoint(
    request: GetListWebHooksEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ArrayEvent>;

  getWebHookIDEndpoint(
    request: GetWebHookIDEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Event>;

  deleteWebHookEndpoint(
    request: DeleteWebHookEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

}

