import * as grpcWeb from 'grpc-web';
import {
  TXConfidence,
  TransactionConfidenceEndpointRequest} from './confidencefactorService_pb';

export class ConfidenceFactorServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  transactionConfidenceEndpoint(
    request: TransactionConfidenceEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXConfidence) => void
  ): grpcWeb.ClientReadableStream;

}

