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
               credentials: {},
               options: { [s: string]: {}; });

  getMetadataAddressEndpoint(
    request: GetMetadataAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: KeyValues) => void
  ): grpcWeb.ClientReadableStream;

  getMetadataTxhashEndpoint(
    request: GetMetadataTxhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: KeyValues) => void
  ): grpcWeb.ClientReadableStream;

  getMetadataBlockhashEndpoint(
    request: GetMetadataBlockhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: KeyValues) => void
  ): grpcWeb.ClientReadableStream;

  putMetadataAddressEndpoint(
    request: PutMetadataAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  putMetadataTxhashEndpoint(
    request: PutMetadataTxhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  putMetadataBlockhashEndpoint(
    request: PutMetadataBlockhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  deleteMetadataAddressEndpoint(
    request: DeleteMetadataAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  deleteMetadataTxhashEndpoint(
    request: DeleteMetadataTxhashEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

  deleteMetadataBlockheightEndpoint(
    request: DeleteMetadataBlockheightEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: NullValue) => void
  ): grpcWeb.ClientReadableStream;

}

