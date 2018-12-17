import * as grpcWeb from 'grpc-web';
import {
  AnalyticsJobRequest,
  AnalyticsJobResultsRequest,
  CreateAnalyticsJobRequest,
  Job,
  JobArgs,
  JobResultArr,
  JobResults} from './analyticsService_pb';

export class AnalyticsServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createAnalyticsJob(
    request: CreateAnalyticsJobRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Job) => void
  ): grpcWeb.ClientReadableStream<Job>;

  analyticsJob(
    request: AnalyticsJobRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Job) => void
  ): grpcWeb.ClientReadableStream<Job>;

  analyticsJobResults(
    request: AnalyticsJobResultsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: JobResults) => void
  ): grpcWeb.ClientReadableStream<JobResults>;

}

export class AnalyticsServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createAnalyticsJob(
    request: CreateAnalyticsJobRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Job>;

  analyticsJob(
    request: AnalyticsJobRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Job>;

  analyticsJobResults(
    request: AnalyticsJobResultsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<JobResults>;

}

