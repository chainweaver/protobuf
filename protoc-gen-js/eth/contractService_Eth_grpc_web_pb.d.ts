import * as grpcWeb from 'grpc-web';
import {
  CallContractMethodEndpointRequest,
  Contract,
  Contracts,
  CreateContractEndpointRequest,
  GetContractAddressEndpointRequest} from './contractService_Eth_pb';

export class ContractServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createContractEndpoint(
    request: CreateContractEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Contracts) => void
  ): grpcWeb.ClientReadableStream<Contracts>;

  getContractAddressEndpoint(
    request: GetContractAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Contract) => void
  ): grpcWeb.ClientReadableStream<Contract>;

  callContractMethodEndpoint(
    request: CallContractMethodEndpointRequest,
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
    request: CreateContractEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Contracts>;

  getContractAddressEndpoint(
    request: GetContractAddressEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Contract>;

  callContractMethodEndpoint(
    request: CallContractMethodEndpointRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Contract>;

}

