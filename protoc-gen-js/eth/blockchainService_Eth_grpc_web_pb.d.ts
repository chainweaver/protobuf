import * as grpcWeb from 'grpc-web';
import {
  Block,
  Blockchain,
  GetBlockHashEndpointRequest,
  GetBlockHeightEndpointRequest,
  GetChainEndpointRequest} from './blockchainService_Eth_pb';

export class BlockchainServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getChainEndpoint(
    request: GetChainEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Blockchain) => void
  ): grpcWeb.ClientReadableStream<Blockchain>;

  getBlockHashEndpoint(
    request: GetBlockHashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Block) => void
  ): grpcWeb.ClientReadableStream<Block>;

  getBlockHeightEndpoint(
    request: GetBlockHeightEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Block) => void
  ): grpcWeb.ClientReadableStream<Block>;

}

export class BlockchainServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getChainEndpoint(
    request: GetChainEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Blockchain>;

  getBlockHashEndpoint(
    request: GetBlockHashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Block>;

  getBlockHeightEndpoint(
    request: GetBlockHeightEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Block>;

}

