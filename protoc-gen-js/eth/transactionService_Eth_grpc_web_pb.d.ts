import * as grpcWeb from 'grpc-web';
import {
  GetTransactionHashEndpointRequest,
  GetUnconfirmedTransactionsEndpointRequest,
  InputType,
  OutputType,
  PostCreateTransactionsEndpointRequest,
  PostDecodeRawTransactionEndpointRequest,
  PostPushRawTransactionEndpointRequest,
  PostSendTransactionEndpointRequest,
  TX,
  TXSkeleton,
  TxArray} from './transactionService_Eth_pb';

export class TransactionServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getTransactionHashEndpoint(
    request: GetTransactionHashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream<TX>;

  getUnconfirmedTransactionsEndpoint(
    request: GetUnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TxArray) => void
  ): grpcWeb.ClientReadableStream<TxArray>;

  postCreateTransactionsEndpoint(
    request: PostCreateTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream<TXSkeleton>;

  postSendTransactionEndpoint(
    request: PostSendTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream<TXSkeleton>;

  postDecodeRawTransactionEndpoint(
    request: PostDecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream<TX>;

  postPushRawTransactionEndpoint(
    request: PostPushRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream<TX>;

}

export class TransactionServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getTransactionHashEndpoint(
    request: GetTransactionHashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

  getUnconfirmedTransactionsEndpoint(
    request: GetUnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TxArray>;

  postCreateTransactionsEndpoint(
    request: PostCreateTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXSkeleton>;

  postSendTransactionEndpoint(
    request: PostSendTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXSkeleton>;

  postDecodeRawTransactionEndpoint(
    request: PostDecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

  postPushRawTransactionEndpoint(
    request: PostPushRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

}

