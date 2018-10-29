import * as grpcWeb from 'grpc-web';
import {
  DeleteMetadata_addressEndpointRequest,
  DeleteMetadata_block_heightEndpointRequest,
  DeleteMetadata_txhashEndpointRequest,
  GetMetadata_addressEndpointRequest,
  GetMetadata_blockhashEndpointRequest,
  GetMetadata_txhashEndpointRequest,
  KeyValues,
  NullValue,
  PutMetadata_addressEndpointRequest,
  PutMetadata_block_hashEndpointRequest,
  PutMetadata_txhashEndpointRequest} from './metadataService_pb';

export class MetadataServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  getMetadata_addressEndpoint(
    request: GetMetadata_addressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: KeyValues) => void
  ): grpcWeb.ClientReadableStream;

  getMetadata_txhashEndpoint(
    request: GetMetadata_txhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: KeyValues) => void
  ): grpcWeb.ClientReadableStream;

  getMetadata_blockhashEndpoint(
    request: GetMetadata_blockhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: KeyValues) => void
  ): grpcWeb.ClientReadableStream;

  putMetadata_addressEndpoint(
    request: PutMetadata_addressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  putMetadata_txhashEndpoint(
    request: PutMetadata_txhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  putMetadata_blockhashEndpoint(
    request: PutMetadata_block_hashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  deleteMetadata_addressEndpoint(
    request: DeleteMetadata_addressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  deleteMetadata_txhashEndpoint(
    request: DeleteMetadata_txhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  deleteMetadata_blockheightEndpoint(
    request: DeleteMetadata_block_heightEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

}

