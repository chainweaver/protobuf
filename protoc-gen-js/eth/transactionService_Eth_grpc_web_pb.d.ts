import * as grpcWeb from 'grpc-web';
import {
  GetTransactionHashEndpointRequest,
  GetUnconfirmedTransactionsEndpointRequest,
  PostCreateTransactionsEndpointRequest,
  PostDecodeRawTransactionEndpointRequest,
  PostPushRawTransactionEndpointRequest,
  PostSendTransactionEndpointRequest,
  TX,
  TXSkeleton,
  TxArray} from './transactionService_Eth_pb';

export class TransactionServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  getTransactionHashEndpoint(
    request: GetTransactionHashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream;

  getUnconfirmedTransactionsEndpoint(
    request: GetUnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TxArray) => void
  ): grpcWeb.ClientReadableStream;

  postCreateTransactionsEndpoint(
    request: PostCreateTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream;

  postSendTransactionEndpoint(
    request: PostSendTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream;

  postDecodeRawTransactionEndpoint(
    request: PostDecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream;

  postPushRawTransactionEndpoint(
    request: PostPushRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream;

}

