import * as grpcWeb from 'grpc-web';
import {
  Address,
  AddressKeychain,
  ArrayString,
  GetAssetAddressEndpointRequest,
  GetAssetTXEndpointRequest,
  HDAddress,
  HDChain,
  HDWallet,
  ListAssetTXsEndpointRequest,
  NullValueRequest,
  OAPIssueRequest,
  OAPTX,
  TX,
  TXInput,
  TXOutput,
  TXRef,
  TransferAssetEndpointRequest,
  Wallet} from './assetService_pb';

export class AssetServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  generateAssetAddressEndpoint(
    request: NullValueRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AddressKeychain) => void
  ): grpcWeb.ClientReadableStream<AddressKeychain>;

  issueAssetEndpoint(
    request: OAPIssueRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OAPTX) => void
  ): grpcWeb.ClientReadableStream<OAPTX>;

  transferAssetEndpoint(
    request: TransferAssetEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OAPTX) => void
  ): grpcWeb.ClientReadableStream<OAPTX>;

  listAssetTXsEndpoint(
    request: ListAssetTXsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ArrayString) => void
  ): grpcWeb.ClientReadableStream<ArrayString>;

  getAssetTXEndpoint(
    request: GetAssetTXEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OAPTX) => void
  ): grpcWeb.ClientReadableStream<OAPTX>;

  getAssetAddressEndpoint(
    request: GetAssetAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Address) => void
  ): grpcWeb.ClientReadableStream<Address>;

}

export class AssetServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  generateAssetAddressEndpoint(
    request: NullValueRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AddressKeychain>;

  issueAssetEndpoint(
    request: OAPIssueRequest,
    metadata: grpcWeb.Metadata
  ): Promise<OAPTX>;

  transferAssetEndpoint(
    request: TransferAssetEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<OAPTX>;

  listAssetTXsEndpoint(
    request: ListAssetTXsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ArrayString>;

  getAssetTXEndpoint(
    request: GetAssetTXEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<OAPTX>;

  getAssetAddressEndpoint(
    request: GetAssetAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Address>;

}

