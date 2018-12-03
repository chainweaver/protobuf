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

  createContractEndpoint(
    request: PostCreateContractEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ContractArray) => void
  ): grpcWeb.ClientReadableStream<ContractArray>;

  contractAddressEndpoint(
    request: GetContractAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Contract) => void
  ): grpcWeb.ClientReadableStream<Contract>;

  callContractMethodEndpoint(
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

  createContractEndpoint(
    request: PostCreateContractEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ContractArray>;

  contractAddressEndpoint(
    request: GetContractAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Contract>;

  callContractMethodEndpoint(
    request: PostCallContractMethodEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Contract>;

}

