/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf.eth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var addressMessage_Eth_pb = require('./addressMessage_Eth_pb.js')

var commonMessage_Eth_pb = require('./commonMessage_Eth_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = {};
proto.fairwaycorp.blockchainprotobuf.eth = require('./addressService_Eth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.eth.AddressServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.eth.AddressServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.eth.AddressServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.eth.AddressServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.GetBalanceAddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.Address>}
 */
const methodInfo_GetBalanceAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.Address,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetBalanceAddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.Address.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetBalanceAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.AddressServiceClient.prototype.getBalanceAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.AddressService/GetBalanceAddressEndpoint',
      request,
      metadata,
      methodInfo_GetBalanceAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetBalanceAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.Address>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.AddressServicePromiseClient.prototype.getBalanceAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getBalanceAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.GetAddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.Address>}
 */
const methodInfo_GetAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.Address,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetAddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.Address.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.AddressServiceClient.prototype.getAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.AddressService/GetAddressEndpoint',
      request,
      metadata,
      methodInfo_GetAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.Address>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.AddressServicePromiseClient.prototype.getAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.NullValueRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.AddressKeychain>}
 */
const methodInfo_PostGenerateAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.AddressKeychain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.NullValueRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.AddressKeychain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.NullValueRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.AddressKeychain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.AddressKeychain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.AddressServiceClient.prototype.postGenerateAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.AddressService/PostGenerateAddressEndpoint',
      request,
      metadata,
      methodInfo_PostGenerateAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.NullValueRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.AddressKeychain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.AddressServicePromiseClient.prototype.postGenerateAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.postGenerateAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf.eth;

