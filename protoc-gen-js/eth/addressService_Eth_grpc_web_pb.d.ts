import * as grpcWeb from 'grpc-web';
import {
  Address,
  AddressKeychain,
  GetAddressEndpointRequest,
  GetBalanceAddressEndpointRequest,
  PostGenerateAddressEndpointRequest,
  TXRef} from './addressService_Eth_pb';

export class AddressServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  balanceAddressEndpoint(
    request: GetBalanceAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Address) => void
  ): grpcWeb.ClientReadableStream<Address>;

  addressEndpoint(
    request: GetAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Address) => void
  ): grpcWeb.ClientReadableStream<Address>;

  generateAddressEndpoint(
    request: PostGenerateAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AddressKeychain) => void
  ): grpcWeb.ClientReadableStream<AddressKeychain>;

}

export class AddressServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  balanceAddressEndpoint(
    request: GetBalanceAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Address>;

  addressEndpoint(
    request: GetAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Address>;

  generateAddressEndpoint(
    request: PostGenerateAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AddressKeychain>;

}

