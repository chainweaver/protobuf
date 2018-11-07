/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var confidencefactorMessage_pb = require('./confidencefactorMessage_pb.js')

var commonMessage_pb = require('./commonMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = require('./confidencefactorService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.ConfidenceFactorServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
proto.fairwaycorp.blockchainprotobuf.ConfidenceFactorServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.ConfidenceFactorServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.ConfidenceFactorServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.TransactionConfidenceEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.TXConfidence>}
 */
const methodInfo_TransactionConfidenceEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TXConfidence,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.TransactionConfidenceEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TXConfidence.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TransactionConfidenceEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.TXConfidence)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.TXConfidence>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ConfidenceFactorServiceClient.prototype.transactionConfidenceEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.ConfidenceFactorService/TransactionConfidenceEndpoint',
      request,
      metadata,
      methodInfo_TransactionConfidenceEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TransactionConfidenceEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.TXConfidence>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ConfidenceFactorServicePromiseClient.prototype.transactionConfidenceEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.transactionConfidenceEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf;

