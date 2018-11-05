import * as grpcWeb from 'grpc-web';
import {
  Block,
  BlockHashEndpointRequest,
  BlockHeightEndpointRequest,
  Blockchain,
  ChainEndpointRequest} from './blockchainService_Eth_pb';

export class BlockchainServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  chainEndpoint(
    request: ChainEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Blockchain) => void
  ): grpcWeb.ClientReadableStream;

  blockHashEndpoint(
    request: BlockHashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Block) => void
  ): grpcWeb.ClientReadableStream;

  blockHeightEndpoint(
    request: BlockHeightEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Block) => void
  ): grpcWeb.ClientReadableStream;

}

