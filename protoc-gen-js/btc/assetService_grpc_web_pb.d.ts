import * as grpcWeb from 'grpc-web';
import {
  Address,
  AddressKeychain,
  ArrayString,
  GetAssetAddressEndpointRequest,
  GetAssetTXEndpointRequest,
  ListAssetTXsEndpointRequest,
  NullValueRequest,
  OAPIssueRequest,
  OAPTX,
  TransferAssetEndpointRequest} from './assetService_pb';

export class AssetServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  generateAssetAddressEndpoint(
    request: NullValueRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AddressKeychain) => void
  ): grpcWeb.ClientReadableStream;

  issueAssetEndpoint(
    request: OAPIssueRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OAPTX) => void
  ): grpcWeb.ClientReadableStream;

  transferAssetEndpoint(
    request: TransferAssetEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OAPTX) => void
  ): grpcWeb.ClientReadableStream;

  listAssetTXsEndpoint(
    request: ListAssetTXsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ArrayString) => void
  ): grpcWeb.ClientReadableStream;

  getAssetTXEndpoint(
    request: GetAssetTXEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OAPTX) => void
  ): grpcWeb.ClientReadableStream;

  getAssetAddressEndpoint(
    request: GetAssetAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Address) => void
  ): grpcWeb.ClientReadableStream;

}

