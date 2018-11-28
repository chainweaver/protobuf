import * as grpcWeb from 'grpc-web';
import {
  Address,
  AddressBalanceEndpointRequest,
  AddressEndpointRequest,
  AddressFullEndpointRequest,
  AddressKeychain,
  GenerateAddressEndpointRequest,
  GenerateMultisigAddressEndpointRequest,
  HDAddress,
  HDChain,
  HDWallet,
  TX,
  TXInput,
  TXOutput,
  TXRef,
  Wallet} from './addressService_pb';

export class AddressServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  addressBalanceEndpoint(
    request: AddressBalanceEndpointRequest,
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

  addressFullEndpoint(
    request: AddressFullEndpointRequest,
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

  generateMultisigAddressEndpoint(
    request: GenerateMultisigAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AddressKeychain) => void
  ): grpcWeb.ClientReadableStream<AddressKeychain>;

}

export class AddressServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  addressBalanceEndpoint(
    request: AddressBalanceEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Address>;

  addressEndpoint(
    request: AddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Address>;

  addressFullEndpoint(
    request: AddressFullEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Address>;

  generateAddressEndpoint(
    request: GenerateAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AddressKeychain>;

  generateMultisigAddressEndpoint(
    request: GenerateMultisigAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AddressKeychain>;

}

