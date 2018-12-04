import * as grpcWeb from 'grpc-web';
import {
  Contract,
  ContractArray,
  GetContractAddressEndpointRequest,
  PostCallContractMethodEndpointRequest,
  PostCreateContractEndpointRequest} from './contractService_Eth_pb';

export class ContractServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  postCreateContractEndpoint(
    request: PostCreateContractEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ContractArray) => void
  ): grpcWeb.ClientReadableStream<ContractArray>;

  getContractAddressEndpoint(
    request: GetContractAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Contract) => void
  ): grpcWeb.ClientReadableStream<Contract>;

  postCallContractMethodEndpoint(
    request: PostCallContractMethodEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Contract) => void
  ): grpcWeb.ClientReadableStream<Contract>;

}

export class ContractServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  postCreateContractEndpoint(
    request: PostCreateContractEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ContractArray>;

  getContractAddressEndpoint(
    request: GetContractAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Contract>;

  postCallContractMethodEndpoint(
    request: PostCallContractMethodEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Contract>;

}

