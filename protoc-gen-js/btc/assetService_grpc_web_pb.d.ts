import * as grpcWeb from 'grpc-web';
import {
  Address,
  AddressKeychain,
  AssetAddressEndpointRequest,
  AssetTXEndpointRequest,
  GenerateAssetAddressEndpointRequest,
  HDAddress,
  HDChain,
  HDWallet,
  IssueAssetEndpointRequest,
  ListAssetTXsEndpointRequest,
  OAPTX,
  TX,
  TXInput,
  TXOutput,
  TXRef,
  TransferAssetEndpointRequest,
  TxHashes,
  Wallet} from './assetService_pb';

export class AssetServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  generateAssetAddressEndpoint(
    request: GenerateAssetAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AddressKeychain) => void
  ): grpcWeb.ClientReadableStream<AddressKeychain>;

  issueAssetEndpoint(
    request: IssueAssetEndpointRequest,
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
               response: TxHashes) => void
  ): grpcWeb.ClientReadableStream<TxHashes>;

  assetTXEndpoint(
    request: AssetTXEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OAPTX) => void
  ): grpcWeb.ClientReadableStream<OAPTX>;

  assetAddressEndpoint(
    request: AssetAddressEndpointRequest,
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
    request: GenerateAssetAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AddressKeychain>;

  issueAssetEndpoint(
    request: IssueAssetEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<OAPTX>;

  transferAssetEndpoint(
    request: TransferAssetEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<OAPTX>;

  listAssetTXsEndpoint(
    request: ListAssetTXsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TxHashes>;

  assetTXEndpoint(
    request: AssetTXEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<OAPTX>;

  assetAddressEndpoint(
    request: AssetAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Address>;

}

