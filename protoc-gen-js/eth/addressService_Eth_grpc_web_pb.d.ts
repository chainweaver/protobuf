import * as grpcWeb from 'grpc-web';
import {
  Address,
  AddressEndpointRequest,
  AddressKeychain,
  BalanceAddressEndpointRequest,
  GenerateAddressEndpointRequest,
  TXRef} from './addressService_Eth_pb';

export class AddressServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  balanceAddressEndpoint(
    request: BalanceAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Address) => void
  ): grpcWeb.ClientReadableStream<Address>;

  addressEndpoint(
    request: AddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Address) => void
  ): grpcWeb.ClientReadableStream<Address>;

  generateAddressEndpoint(
    request: GenerateAddressEndpointRequest,
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
    request: BalanceAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Address>;

  addressEndpoint(
    request: AddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Address>;

  generateAddressEndpoint(
    request: GenerateAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AddressKeychain>;

}

