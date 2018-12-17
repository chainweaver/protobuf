import * as grpcWeb from 'grpc-web';
import {
  MicroTX,
  MicrotransactionEndpointRequest,
  TXInput,
  TXOutput} from './microtransactionService_pb';

export class MicrotransactionServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  microtransactionEndpoint(
    request: MicrotransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: MicroTX) => void
  ): grpcWeb.ClientReadableStream<MicroTX>;

}

export class MicrotransactionServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  microtransactionEndpoint(
    request: MicrotransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<MicroTX>;

}

