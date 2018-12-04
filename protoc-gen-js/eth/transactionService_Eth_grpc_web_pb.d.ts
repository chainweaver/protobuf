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

  transactionHashEndpoint(
    request: GetTransactionHashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream<TX>;

  unconfirmedTransactionsEndpoint(
    request: GetUnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TxArray) => void
  ): grpcWeb.ClientReadableStream<TxArray>;

  createTransactionsEndpoint(
    request: PostCreateTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream<TXSkeleton>;

  sendTransactionEndpoint(
    request: PostSendTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream<TXSkeleton>;

  decodeRawTransactionEndpoint(
    request: PostDecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream<TX>;

  pushRawTransactionEndpoint(
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

  transactionHashEndpoint(
    request: GetTransactionHashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

  unconfirmedTransactionsEndpoint(
    request: GetUnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TxArray>;

  createTransactionsEndpoint(
    request: PostCreateTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXSkeleton>;

  sendTransactionEndpoint(
    request: PostSendTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXSkeleton>;

  decodeRawTransactionEndpoint(
    request: PostDecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

  pushRawTransactionEndpoint(
    request: PostPushRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

}

