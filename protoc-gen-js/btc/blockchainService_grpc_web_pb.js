/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf.btc
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
proto.fairwaycorp.blockchainprotobuf = {};
proto.fairwaycorp.blockchainprotobuf.btc = require('./blockchainService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.ChainEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Blockchain>}
 */
const methodInfo_BlockchainService_ChainEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  blockchainMessage_pb.Blockchain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.ChainEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  blockchainMessage_pb.Blockchain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.ChainEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Blockchain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Blockchain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServiceClient.prototype.chainEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.BlockchainService/ChainEndpoint',
      request,
      metadata,
      methodInfo_BlockchainService_ChainEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.ChainEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Blockchain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServicePromiseClient.prototype.chainEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.btc.BlockHashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Block>}
 */
const methodInfo_BlockchainService_BlockHashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  blockchainMessage_pb.Block,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.BlockHashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  blockchainMessage_pb.Block.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.BlockHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Block)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Block>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServiceClient.prototype.blockHashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.BlockchainService/BlockHashEndpoint',
      request,
      metadata,
      methodInfo_BlockchainService_BlockHashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.BlockHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Block>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServicePromiseClient.prototype.blockHashEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.btc.BlockHeightEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Block>}
 */
const methodInfo_BlockchainService_BlockHeightEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  blockchainMessage_pb.Block,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.BlockHeightEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  blockchainMessage_pb.Block.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.BlockHeightEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Block)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Block>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServiceClient.prototype.blockHeightEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.BlockchainService/BlockHeightEndpoint',
      request,
      metadata,
      methodInfo_BlockchainService_BlockHeightEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.BlockHeightEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Block>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServicePromiseClient.prototype.blockHeightEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.btc.FeatureEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Feature>}
 */
const methodInfo_BlockchainService_FeatureEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  blockchainMessage_pb.Feature,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.FeatureEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  blockchainMessage_pb.Feature.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.FeatureEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Feature)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Feature>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServiceClient.prototype.featureEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.BlockchainService/FeatureEndpoint',
      request,
      metadata,
      methodInfo_BlockchainService_FeatureEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.FeatureEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Feature>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.BlockchainServicePromiseClient.prototype.featureEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.featureEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf.btc;

