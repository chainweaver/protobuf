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
               credentials: {},
               options: { [s: string]: {}; });

  postCreateWebHookEndpoint(
    request: PostCreateWebHookEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Event) => void
  ): grpcWeb.ClientReadableStream;

  getListWebHooksEndpoint(
    request: GetListWebHooksEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ArrayEvent) => void
  ): grpcWeb.ClientReadableStream;

  getWebHookIDEndpoint(
    request: GetWebHookIDEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Event) => void
  ): grpcWeb.ClientReadableStream;

  deleteWebHookEndpoint(
    request: DeleteWebHookEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

}

