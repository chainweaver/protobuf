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
  HDAddress,
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
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createWalletEndpoint(
    request: CreateWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Wallet) => void
  ): grpcWeb.ClientReadableStream<Wallet>;

  createWalletHDEndpoint(
    request: CreateWalletHDEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HDWallet) => void
  ): grpcWeb.ClientReadableStream<HDWallet>;

  listWalletsEndpoint(
    request: ListWalletsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ListWallets) => void
  ): grpcWeb.ClientReadableStream<ListWallets>;

  getWalletEndpoint(
    request: GetWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Wallet) => void
  ): grpcWeb.ClientReadableStream<Wallet>;

  getWalletHDEndpoint(
    request: GetWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HDWallet) => void
  ): grpcWeb.ClientReadableStream<HDWallet>;

  addAddressesToWalletEndpoint(
    request: AddAddressesToWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Wallet) => void
  ): grpcWeb.ClientReadableStream<Wallet>;

  getWalletAddressesEndpoint(
    request: GetWalletAddressesEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Wallet) => void
  ): grpcWeb.ClientReadableStream<Wallet>;

  getWalletAddressesHDEndpoint(
    request: GetWalletAddressesEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HDChain) => void
  ): grpcWeb.ClientReadableStream<HDChain>;

  removeAddressesFromWalletEndpoint(
    request: RemoveAddressesFromWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

  generateAddressInWalletEndpoint(
    request: GenerateAdressInWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: WalletAddressKeychain) => void
  ): grpcWeb.ClientReadableStream<WalletAddressKeychain>;

  deriveAddressInWalletEndpoint(
    request: DeriveAddressInWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HDWallet) => void
  ): grpcWeb.ClientReadableStream<HDWallet>;

  deleteWalletEndpoint(
    request: DeleteWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

  deleteWalletHDEndpoint(
    request: DeleteWalletEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

}

export class WalletServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createWalletEndpoint(
    request: CreateWalletEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Wallet>;

  createWalletHDEndpoint(
    request: CreateWalletHDEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<HDWallet>;

  listWalletsEndpoint(
    request: ListWalletsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ListWallets>;

  getWalletEndpoint(
    request: GetWalletEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Wallet>;

  getWalletHDEndpoint(
    request: GetWalletEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<HDWallet>;

  addAddressesToWalletEndpoint(
    request: AddAddressesToWalletEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Wallet>;

  getWalletAddressesEndpoint(
    request: GetWalletAddressesEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Wallet>;

  getWalletAddressesHDEndpoint(
    request: GetWalletAddressesEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<HDChain>;

  removeAddressesFromWalletEndpoint(
    request: RemoveAddressesFromWalletEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

  generateAddressInWalletEndpoint(
    request: GenerateAdressInWalletEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<WalletAddressKeychain>;

  deriveAddressInWalletEndpoint(
    request: DeriveAddressInWalletEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<HDWallet>;

  deleteWalletEndpoint(
    request: DeleteWalletEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

  deleteWalletHDEndpoint(
    request: DeleteWalletEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

}

