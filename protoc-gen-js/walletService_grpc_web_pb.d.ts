import * as grpcWeb from 'grpc-web';
import {
  AddAddressesToWalletEndpointRequest,
  CreateWalletEndpointRequest,
  CreateWalletHDEndpointRequest,
  DeleteWalletEndpointRequest,
  DeriveAddressInWalletEndpointRequest,
  GenerateAdressInWalletEndpointRequest,
  GetWalletAddressesEndpointRequest,
  GetWalletEndpointRequest,
  HDChain,
  HDWallet,
  ListWallets,
  ListWalletsEndpointRequest,
  NullValue,
  RemoveAddressesFromWalletEndpointRequest,
  Wallet,
  WalletAddressKeychain} from './walletService_pb';

export class WalletServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  createWalletEndpoint(
    request: CreateWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Wallet) => void
  ): grpcWeb.ClientReadableStream;

  createWalletHDEndpoint(
    request: CreateWalletHDEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HDWallet) => void
  ): grpcWeb.ClientReadableStream;

  listWalletsEndpoint(
    request: ListWalletsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListWallets) => void
  ): grpcWeb.ClientReadableStream;

  getWalletEndpoint(
    request: GetWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Wallet) => void
  ): grpcWeb.ClientReadableStream;

  getWalletHDEndpoint(
    request: GetWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HDWallet) => void
  ): grpcWeb.ClientReadableStream;

  addAddressesToWalletEndpoint(
    request: AddAddressesToWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Wallet) => void
  ): grpcWeb.ClientReadableStream;

  getWalletAddressesEndpoint(
    request: GetWalletAddressesEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Wallet) => void
  ): grpcWeb.ClientReadableStream;

  getWalletAddressesHDEndpoint(
    request: GetWalletAddressesEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HDChain) => void
  ): grpcWeb.ClientReadableStream;

  removeAddressesFromWalletEndpoint(
    request: RemoveAddressesFromWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  generateAddressInWalletEndpoint(
    request: GenerateAdressInWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: WalletAddressKeychain) => void
  ): grpcWeb.ClientReadableStream;

  deriveAddressInWalletEndpoint(
    request: DeriveAddressInWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HDWallet) => void
  ): grpcWeb.ClientReadableStream;

  deleteWalletEndpoint(
    request: DeleteWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  deleteWalletHDEndpoint(
    request: DeleteWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

}

