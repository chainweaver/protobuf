import * as grpcWeb from 'grpc-web';
import {
  Block,
  BlockHashEndpointRequest,
  BlockHeightEndpointRequest,
  Blockchain,
  ChainEndpointRequest} from './blockchainService_Eth_pb';

export class BlockchainServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  chainEndpoint(
    request: ChainEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Blockchain) => void
  ): grpcWeb.ClientReadableStream<Blockchain>;

  blockHashEndpoint(
    request: BlockHashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Block) => void
  ): grpcWeb.ClientReadableStream<Block>;

  blockHeightEndpoint(
    request: BlockHeightEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Block) => void
  ): grpcWeb.ClientReadableStream<Block>;

}

export class BlockchainServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  chainEndpoint(
    request: ChainEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Blockchain>;

  blockHashEndpoint(
    request: BlockHashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Block>;

  blockHeightEndpoint(
    request: BlockHeightEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Block>;

}

