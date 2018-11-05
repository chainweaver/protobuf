import * as grpcWeb from 'grpc-web';
import {
  Contract,
  ContractArray,
  GetContractAddressEndpointRequest,
  PostCallContractMethodEndpointRequest,
  PostCreateContractEndpointRequest} from './contractService_Eth_pb';

export class ContractServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  postCreateContractEndpoint(
    request: PostCreateContractEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ContractArray) => void
  ): grpcWeb.ClientReadableStream;

  getContractAddressEndpoint(
    request: GetContractAddressEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Contract) => void
  ): grpcWeb.ClientReadableStream;

  postCallContractMethodEndpoint(
    request: PostCallContractMethodEndpointRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Contract) => void
  ): grpcWeb.ClientReadableStream;

}

