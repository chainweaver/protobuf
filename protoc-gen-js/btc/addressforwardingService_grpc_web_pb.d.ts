import * as grpcWeb from 'grpc-web';
import {
  AddressForward,
  CreateForwardEndpointRequest,
  DeleteForwardEndpointRequest,
  DeleteForwardEndpointResponse,
  ListForwardsEndpointRequest,
  ListForwardsEndpointResponse} from './addressforwardingService_pb';

export class AddressForwardingServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createForwardEndpoint(
    request: CreateForwardEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AddressForward) => void
  ): grpcWeb.ClientReadableStream<AddressForward>;

  listForwardsEndpoint(
    request: ListForwardsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListForwardsEndpointResponse) => void
  ): grpcWeb.ClientReadableStream<ListForwardsEndpointResponse>;

  deleteForwardEndpoint(
    request: DeleteForwardEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeleteForwardEndpointResponse) => void
  ): grpcWeb.ClientReadableStream<DeleteForwardEndpointResponse>;

}

export class AddressForwardingServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createForwardEndpoint(
    request: CreateForwardEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AddressForward>;

  listForwardsEndpoint(
    request: ListForwardsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ListForwardsEndpointResponse>;

  deleteForwardEndpoint(
    request: DeleteForwardEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeleteForwardEndpointResponse>;

}

