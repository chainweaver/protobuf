import * as grpcWeb from 'grpc-web';
import {
  TXConfidence,
  TransactionConfidenceEndpointRequest} from './confidencefactorService_pb';

export class ConfidenceFactorServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  transactionConfidenceEndpoint(
    request: TransactionConfidenceEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXConfidence) => void
  ): grpcWeb.ClientReadableStream<TXConfidence>;

}

export class ConfidenceFactorServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  transactionConfidenceEndpoint(
    request: TransactionConfidenceEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXConfidence>;

}

