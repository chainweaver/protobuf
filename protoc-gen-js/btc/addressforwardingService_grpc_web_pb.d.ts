import * as grpcWeb from 'grpc-web';
import {
  AddressForward,
  AddressForwards,
  CreateForwardEndpointRequest,
  DeleteForwardEndpointRequest,
  ListForwardsEndpointRequest,
  NullValue} from './addressforwardingService_pb';

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
               response: AddressForwards) => void
  ): grpcWeb.ClientReadableStream<AddressForwards>;

  deleteForwardEndpoint(
    request: DeleteForwardEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

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
  ): Promise<AddressForwards>;

  deleteForwardEndpoint(
    request: DeleteForwardEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

}

