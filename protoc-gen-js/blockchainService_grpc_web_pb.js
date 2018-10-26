/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var blockchainMessage_pb = require('./blockchainMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = require('./blockchainService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.BlockchainServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.BlockchainServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.BlockchainServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.BlockchainServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.ChainEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Blockchain>}
 */
const methodInfo_ChainEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  blockchainMessage_pb.Blockchain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.ChainEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  blockchainMessage_pb.Blockchain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.ChainEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Blockchain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Blockchain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.BlockchainServiceClient.prototype.chainEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.BlockchainService/ChainEndpoint',
      request,
      metadata,
      methodInfo_ChainEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.ChainEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Blockchain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.BlockchainServicePromiseClient.prototype.chainEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.chainEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.BlockHashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Block>}
 */
const methodInfo_BlockHashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  blockchainMessage_pb.Block,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.BlockHashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  blockchainMessage_pb.Block.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.BlockHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Block)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Block>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.BlockchainServiceClient.prototype.blockHashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.BlockchainService/BlockHashEndpoint',
      request,
      metadata,
      methodInfo_BlockHashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.BlockHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Block>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.BlockchainServicePromiseClient.prototype.blockHashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.blockHashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.BlockHeightEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Block>}
 */
const methodInfo_BlockHeightEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  blockchainMessage_pb.Block,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.BlockHeightEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  blockchainMessage_pb.Block.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.BlockHeightEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Block)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Block>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.BlockchainServiceClient.prototype.blockHeightEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.BlockchainService/BlockHeightEndpoint',
      request,
      metadata,
      methodInfo_BlockHeightEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.BlockHeightEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Block>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.BlockchainServicePromiseClient.prototype.blockHeightEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.blockHeightEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.FeatureEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Feature>}
 */
const methodInfo_FeatureEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  blockchainMessage_pb.Feature,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.FeatureEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  blockchainMessage_pb.Feature.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.FeatureEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Feature)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Feature>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.BlockchainServiceClient.prototype.featureEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.BlockchainService/FeatureEndpoint',
      request,
      metadata,
      methodInfo_FeatureEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.FeatureEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Feature>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.BlockchainServicePromiseClient.prototype.featureEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.featureEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf;

