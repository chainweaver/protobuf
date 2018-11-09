/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf.btc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var analyticsMessage_pb = require('./analyticsMessage_pb.js')

var commonMessage_pb = require('./commonMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = {};
proto.fairwaycorp.blockchainprotobuf.btc = require('./analyticsService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.CreateAnalyticsJobRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Job>}
 */
const methodInfo_CreateAnalyticsJob = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Job,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateAnalyticsJobRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Job.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateAnalyticsJobRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Job)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Job>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServiceClient.prototype.createAnalyticsJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AnalyticsService/CreateAnalyticsJob',
      request,
      metadata,
      methodInfo_CreateAnalyticsJob,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateAnalyticsJobRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Job>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServicePromiseClient.prototype.createAnalyticsJob =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createAnalyticsJob(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.GetAnalyticsJobRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Job>}
 */
const methodInfo_GetAnalyticsJob = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Job,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAnalyticsJobRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Job.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAnalyticsJobRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Job)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Job>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServiceClient.prototype.getAnalyticsJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AnalyticsService/GetAnalyticsJob',
      request,
      metadata,
      methodInfo_GetAnalyticsJob,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAnalyticsJobRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Job>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServicePromiseClient.prototype.getAnalyticsJob =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAnalyticsJob(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.GetAnalyticsJobResultsRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.JobResults>}
 */
const methodInfo_GetAnalyticsJobResults = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.JobResults,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAnalyticsJobResultsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.JobResults.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAnalyticsJobResultsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.JobResults)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.JobResults>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServiceClient.prototype.getAnalyticsJobResults =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AnalyticsService/GetAnalyticsJobResults',
      request,
      metadata,
      methodInfo_GetAnalyticsJobResults,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAnalyticsJobResultsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.JobResults>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AnalyticsServicePromiseClient.prototype.getAnalyticsJobResults =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAnalyticsJobResults(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf.btc;

