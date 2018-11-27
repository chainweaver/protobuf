import * as grpcWeb from 'grpc-web';
import {
  DeleteMetadataAddressEndpointRequest,
  DeleteMetadataBlockheightEndpointRequest,
  DeleteMetadataTxhashEndpointRequest,
  GetMetadataAddressEndpointRequest,
  GetMetadataBlockhashEndpointRequest,
  GetMetadataTxhashEndpointRequest,
  KeyValues,
  NullValue,
  PutMetadataAddressEndpointRequest,
  PutMetadataBlockhashEndpointRequest,
  PutMetadataTxhashEndpointRequest} from './metadataService_pb';

export class MetadataServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getMetadataAddressEndpoint(
    request: GetMetadataAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: KeyValues) => void
  ): grpcWeb.ClientReadableStream<KeyValues>;

  getMetadataTxhashEndpoint(
    request: GetMetadataTxhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: KeyValues) => void
  ): grpcWeb.ClientReadableStream<KeyValues>;

  getMetadataBlockhashEndpoint(
    request: GetMetadataBlockhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: KeyValues) => void
  ): grpcWeb.ClientReadableStream<KeyValues>;

  putMetadataAddressEndpoint(
    request: PutMetadataAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

  putMetadataTxhashEndpoint(
    request: PutMetadataTxhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

  putMetadataBlockhashEndpoint(
    request: PutMetadataBlockhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

  deleteMetadataAddressEndpoint(
    request: DeleteMetadataAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

  deleteMetadataTxhashEndpoint(
    request: DeleteMetadataTxhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

  deleteMetadataBlockheightEndpoint(
    request: DeleteMetadataBlockheightEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream<NullValue>;

}

export class MetadataServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getMetadataAddressEndpoint(
    request: GetMetadataAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<KeyValues>;

  getMetadataTxhashEndpoint(
    request: GetMetadataTxhashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<KeyValues>;

  getMetadataBlockhashEndpoint(
    request: GetMetadataBlockhashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<KeyValues>;

  putMetadataAddressEndpoint(
    request: PutMetadataAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

  putMetadataTxhashEndpoint(
    request: PutMetadataTxhashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

  putMetadataBlockhashEndpoint(
    request: PutMetadataBlockhashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

  deleteMetadataAddressEndpoint(
    request: DeleteMetadataAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

  deleteMetadataTxhashEndpoint(
    request: DeleteMetadataTxhashEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

  deleteMetadataBlockheightEndpoint(
    request: DeleteMetadataBlockheightEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<NullValue>;

}

