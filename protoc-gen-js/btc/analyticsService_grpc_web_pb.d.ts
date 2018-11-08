import * as grpcWeb from 'grpc-web';
import {
  CreateAnalyticsJobRequest,
  GetAnalyticsJobRequest,
  GetAnalyticsJobResultsRequest,
  Job,
  JobResults} from './analyticsService_pb';

export class AnalyticsServiceClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  createAnalyticsJob(
    request: CreateAnalyticsJobRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Job) => void
  ): grpcWeb.ClientReadableStream;

  getAnalyticsJob(
    request: GetAnalyticsJobRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Job) => void
  ): grpcWeb.ClientReadableStream;

  getAnalyticsJobResults(
    request: GetAnalyticsJobResultsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: JobResults) => void
  ): grpcWeb.ClientReadableStream;

}

