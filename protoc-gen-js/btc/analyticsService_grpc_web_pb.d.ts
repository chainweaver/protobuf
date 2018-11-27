import * as grpcWeb from 'grpc-web';
import {
  CreateAnalyticsJobRequest,
  GetAnalyticsJobRequest,
  GetAnalyticsJobResultsRequest,
  Job,
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

  getAnalyticsJob(
    request: GetAnalyticsJobRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Job) => void
  ): grpcWeb.ClientReadableStream<Job>;

  getAnalyticsJobResults(
    request: GetAnalyticsJobResultsRequest,
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

  getAnalyticsJob(
    request: GetAnalyticsJobRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Job>;

  getAnalyticsJobResults(
    request: GetAnalyticsJobResultsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<JobResults>;

}

