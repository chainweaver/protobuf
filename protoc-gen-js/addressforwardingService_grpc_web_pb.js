/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf
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
proto.fairwaycorp.blockchainprotobuf = require('./addressforwardingService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.AddressForwardingServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.AddressForwardingServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.AddressForwardingServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.AddressForwardingServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.CreateForwardEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.AddressForward>}
 */
const methodInfo_CreateForwardEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.AddressForward,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.CreateForwardEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.AddressForward.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.CreateForwardEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.AddressForward)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.AddressForward>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AddressForwardingServiceClient.prototype.createForwardEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.AddressForwardingService/CreateForwardEndpoint',
      request,
      metadata,
      methodInfo_CreateForwardEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.CreateForwardEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.AddressForward>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AddressForwardingServicePromiseClient.prototype.createForwardEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.ListForwardsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.ListForwardsEndpointResponse>}
 */
const methodInfo_ListForwardsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  addressforwardingMessage_pb.ListForwardsEndpointResponse,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.ListForwardsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  addressforwardingMessage_pb.ListForwardsEndpointResponse.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.ListForwardsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.ListForwardsEndpointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.ListForwardsEndpointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AddressForwardingServiceClient.prototype.listForwardsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.AddressForwardingService/ListForwardsEndpoint',
      request,
      metadata,
      methodInfo_ListForwardsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.ListForwardsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.ListForwardsEndpointResponse>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AddressForwardingServicePromiseClient.prototype.listForwardsEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteForwardEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteForwardEndpointResponse>}
 */
const methodInfo_DeleteForwardEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  addressforwardingMessage_pb.DeleteForwardEndpointResponse,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeleteForwardEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  addressforwardingMessage_pb.DeleteForwardEndpointResponse.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteForwardEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.DeleteForwardEndpointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.DeleteForwardEndpointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AddressForwardingServiceClient.prototype.deleteForwardEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.AddressForwardingService/DeleteForwardEndpoint',
      request,
      metadata,
      methodInfo_DeleteForwardEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteForwardEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.DeleteForwardEndpointResponse>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AddressForwardingServicePromiseClient.prototype.deleteForwardEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteForwardEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf;

