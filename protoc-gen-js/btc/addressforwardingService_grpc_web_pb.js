/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf.btc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var addressforwardingMessage_pb = require('./addressforwardingMessage_pb.js')

var commonMessage_pb = require('./commonMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = {};
proto.fairwaycorp.blockchainprotobuf.btc = require('./addressforwardingService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.CreateForwardEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.AddressForward>}
 */
const methodInfo_AddressForwardingService_CreateForwardEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.AddressForward,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateForwardEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.AddressForward.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateForwardEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.AddressForward)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.AddressForward>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServiceClient.prototype.createForwardEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AddressForwardingService/CreateForwardEndpoint',
      request,
      metadata,
      methodInfo_AddressForwardingService_CreateForwardEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateForwardEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.AddressForward>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServicePromiseClient.prototype.createForwardEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createForwardEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.ListForwardsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.AddressForwards>}
 */
const methodInfo_AddressForwardingService_ListForwardsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  addressforwardingMessage_pb.AddressForwards,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.ListForwardsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  addressforwardingMessage_pb.AddressForwards.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.ListForwardsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.AddressForwards)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.AddressForwards>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServiceClient.prototype.listForwardsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AddressForwardingService/ListForwardsEndpoint',
      request,
      metadata,
      methodInfo_AddressForwardingService_ListForwardsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.ListForwardsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.AddressForwards>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServicePromiseClient.prototype.listForwardsEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listForwardsEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.DeleteForwardEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.NullValue>}
 */
const methodInfo_AddressForwardingService_DeleteForwardEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeleteForwardEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeleteForwardEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServiceClient.prototype.deleteForwardEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AddressForwardingService/DeleteForwardEndpoint',
      request,
      metadata,
      methodInfo_AddressForwardingService_DeleteForwardEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeleteForwardEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AddressForwardingServicePromiseClient.prototype.deleteForwardEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteForwardEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf.btc;

