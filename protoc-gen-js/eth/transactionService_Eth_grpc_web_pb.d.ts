import * as grpcWeb from 'grpc-web';
import {
  DecodeRawTransactionEndpointRequest,
  InputType,
  NewTransactionEndpointRequest,
  OutputType,
  PushRawTransactionEndpointRequest,
  SendTransactionEndpointRequest,
  TX,
  TXSkeleton,
  TransactionHashEndpointRequest,
  TxArray,
  UnconfirmedTransactionsEndpointRequest} from './transactionService_Eth_pb';

export class TransactionServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  transactionHashEndpoint(
    request: TransactionHashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream<TX>;

  unconfirmedTransactionEndpoint(
    request: UnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TxArray) => void
  ): grpcWeb.ClientReadableStream<TxArray>;

  newTransactionsEndpoint(
    request: NewTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream<TXSkeleton>;

  sendTransactionEndpoint(
    request: SendTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream<TXSkeleton>;

  decodeRawTransactionEndpoint(
    request: DecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream<TX>;

  pushRawTransactionEndpoint(
    request: PushRawTransactionEndpointRequest,
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
    request: TransactionHashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

  unconfirmedTransactionEndpoint(
    request: UnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TxArray>;

  newTransactionsEndpoint(
    request: NewTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXSkeleton>;

  sendTransactionEndpoint(
    request: SendTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXSkeleton>;

  decodeRawTransactionEndpoint(
    request: DecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

  pushRawTransactionEndpoint(
    request: PushRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

}

