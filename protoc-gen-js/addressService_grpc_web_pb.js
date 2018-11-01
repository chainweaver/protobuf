/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var addressMessage_pb = require('./addressMessage_pb.js')

var commonMessage_pb = require('./commonMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = require('./addressService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.ServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.ServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.ServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.ServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.AddressBalanceEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Address>}
 */
const methodInfo_AddressBalanceEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Address,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.AddressBalanceEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Address.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddressBalanceEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServiceClient.prototype.addressBalanceEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.Service/AddressBalanceEndpoint',
      request,
      metadata,
      methodInfo_AddressBalanceEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddressBalanceEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Address>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServicePromiseClient.prototype.addressBalanceEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addressBalanceEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.AddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Address>}
 */
const methodInfo_AddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Address,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.AddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Address.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServiceClient.prototype.addressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.Service/AddressEndpoint',
      request,
      metadata,
      methodInfo_AddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Address>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServicePromiseClient.prototype.addressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.AddressFullEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Address>}
 */
const methodInfo_AddressFullEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Address,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.AddressFullEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Address.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddressFullEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServiceClient.prototype.addressFullEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.Service/AddressFullEndpoint',
      request,
      metadata,
      methodInfo_AddressFullEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddressFullEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Address>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServicePromiseClient.prototype.addressFullEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addressFullEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.GenerateAddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.AddressKeychain>}
 */
const methodInfo_GenerateAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.AddressKeychain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GenerateAddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.AddressKeychain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GenerateAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.AddressKeychain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.AddressKeychain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServiceClient.prototype.generateAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.Service/GenerateAddressEndpoint',
      request,
      metadata,
      methodInfo_GenerateAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GenerateAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.AddressKeychain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServicePromiseClient.prototype.generateAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.generateAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.AddressKeychain,
 *   !proto.fairwaycorp.blockchainprotobuf.AddressKeychain>}
 */
const methodInfo_GenerateMultisigAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.AddressKeychain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.AddressKeychain} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.AddressKeychain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddressKeychain} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.AddressKeychain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.AddressKeychain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServiceClient.prototype.generateMultisigAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.Service/GenerateMultisigAddressEndpoint',
      request,
      metadata,
      methodInfo_GenerateMultisigAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddressKeychain} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.AddressKeychain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.ServicePromiseClient.prototype.generateMultisigAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.generateMultisigAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf;

