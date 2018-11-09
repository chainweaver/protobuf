import * as grpcWeb from 'grpc-web';
import {
  DataEndpointRequest,
  DecodeRawTransactionEndpointRequest,
  DescribedBelow,
  NewTransactionEndpointRequest,
  NullData,
  PushRawTransactionEndpointRequest,
  SendTransactionEndpointRequest,
  TX,
  TXS,
  TXSkeleton,
  TransactionHashEndpointRequest,
  TransactionPropagationEndpointRequest,
  UnconfirmedTransactionsEndpointRequest} from './transactionService_pb';

export class TransactionServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  transactionHashEndpoint(
    request: TransactionHashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream;

  unconfirmedTransactionsEndpoint(
    request: UnconfirmedTransactionsEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXS) => void
  ): grpcWeb.ClientReadableStream;

  newTransactionEndpoint(
    request: NewTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream;

  sendTransactionEndpoint(
    request: SendTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TXSkeleton) => void
  ): grpcWeb.ClientReadableStream;

  pushRawTransactionEndpoint(
    request: PushRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream;

  decodeRawTransactionEndpoint(
    request: DecodeRawTransactionEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TX) => void
  ): grpcWeb.ClientReadableStream;

  dataEndpoint(
    request: DataEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullData) => void
  ): grpcWeb.ClientReadableStream;

  transactionPropagationEndpoint(
    request: TransactionPropagationEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DescribedBelow) => void
  ): grpcWeb.ClientReadableStream;

}
