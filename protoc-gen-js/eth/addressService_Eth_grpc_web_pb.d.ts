import * as grpcWeb from 'grpc-web';
import {
  Address,
  AddressKeychain,
  GetAddressEndpointRequest,
  GetBalanceAddressEndpointRequest,
  PostGenerateAddressEndpointRequest} from './addressService_Eth_pb';

export class AddressServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  getBalanceAddressEndpoint(
    request: GetBalanceAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Address) => void
  ): grpcWeb.ClientReadableStream;

  getAddressEndpoint(
    request: GetAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Address) => void
  ): grpcWeb.ClientReadableStream;

  postGenerateAddressEndpoint(
    request: PostGenerateAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AddressKeychain) => void
  ): grpcWeb.ClientReadableStream;

}

