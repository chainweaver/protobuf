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
               credentials: {},
               options: { [s: string]: {}; });

  createForwardEndpoint(
    request: CreateForwardEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AddressForward) => void
  ): grpcWeb.ClientReadableStream;

  listForwardsEndpoint(
    request: ListForwardsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListForwardsEndpointResponse) => void
  ): grpcWeb.ClientReadableStream;

  deleteForwardEndpoint(
    request: DeleteForwardEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeleteForwardEndpointResponse) => void
  ): grpcWeb.ClientReadableStream;

}

