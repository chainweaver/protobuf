import * as grpcWeb from 'grpc-web';
import {
  MicroTX,
  MicroTXRequest} from './microtransactionService_pb';

export class MicrotransactionServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  microtransactionEndpoint(
    request: MicroTXRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: MicroTX) => void
  ): grpcWeb.ClientReadableStream;

}

