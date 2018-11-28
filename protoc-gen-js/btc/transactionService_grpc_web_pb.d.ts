import * as grpcWeb from 'grpc-web';
import {
  AggregatedOrigin,
  DataEndpointRequest,
  DecodeRawTransactionEndpointRequest,
  DescribedBelow,
  FirstLocation,
  NewTransactionEndpointRequest,
  NullData,
  PushRawTransactionEndpointRequest,
  SendTransactionEndpointRequest,
  TX,
  TXInput,
  TXOutput,
  TXS,
  TXSkeleton,
  TXerror,
  TransactionHashEndpointRequest,
  TransactionPropagationEndpointRequest,
  UnconfirmedTransactionsEndpointRequest} from './transactionService_pb';

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

  unconfirmedTransactionsEndpoint(
    request: UnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXS) => void
  ): grpcWeb.ClientReadableStream<TXS>;

  newTransactionEndpoint(
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

  pushRawTransactionEndpoint(
    request: PushRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream<TX>;

  decodeRawTransactionEndpoint(
    request: DecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream<TX>;

  dataEndpoint(
    request: DataEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullData) => void
  ): grpcWeb.ClientReadableStream<NullData>;

  transactionPropagationEndpoint(
    request: TransactionPropagationEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DescribedBelow) => void
  ): grpcWeb.ClientReadableStream<DescribedBelow>;

}

export class TransactionServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  transactionHashEndpoint(
    request: TransactionHashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

  unconfirmedTransactionsEndpoint(
    request: UnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXS>;

  newTransactionEndpoint(
    request: NewTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXSkeleton>;

  sendTransactionEndpoint(
    request: SendTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TXSkeleton>;

  pushRawTransactionEndpoint(
    request: PushRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

  decodeRawTransactionEndpoint(
    request: DecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<TX>;

  dataEndpoint(
    request: DataEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullData>;

  transactionPropagationEndpoint(
    request: TransactionPropagationEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DescribedBelow>;

}

