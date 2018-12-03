/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf.eth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var webhooksMessage_Eth_pb = require('./webhooksMessage_Eth_pb.js')

var commonMessage_Eth_pb = require('./commonMessage_Eth_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = {};
proto.fairwaycorp.blockchainprotobuf.eth = require('./webhooksService_Eth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.CreateWebHookEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.Event>}
 */
const methodInfo_WebHooksService_CreateWebHookEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.Event,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.CreateWebHookEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.Event.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.CreateWebHookEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.Event)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.Event>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServiceClient.prototype.createWebHookEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.WebHooksService/CreateWebHookEndpoint',
      request,
      metadata,
      methodInfo_WebHooksService_CreateWebHookEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.CreateWebHookEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.Event>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServicePromiseClient.prototype.createWebHookEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createWebHookEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.ListWebHooksEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.ArrayEvent>}
 */
const methodInfo_WebHooksService_ListWebHooksEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  webhooksMessage_Eth_pb.ArrayEvent,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.ListWebHooksEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  webhooksMessage_Eth_pb.ArrayEvent.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.ListWebHooksEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.ArrayEvent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.ArrayEvent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServiceClient.prototype.listWebHooksEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.WebHooksService/ListWebHooksEndpoint',
      request,
      metadata,
      methodInfo_WebHooksService_ListWebHooksEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.ListWebHooksEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.ArrayEvent>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServicePromiseClient.prototype.listWebHooksEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listWebHooksEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.WebHookIDEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.Event>}
 */
const methodInfo_WebHooksService_WebHookIDEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.Event,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.WebHookIDEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.Event.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.WebHookIDEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.Event)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.Event>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServiceClient.prototype.webHookIDEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.WebHooksService/WebHookIDEndpoint',
      request,
      metadata,
      methodInfo_WebHooksService_WebHookIDEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.WebHookIDEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.Event>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServicePromiseClient.prototype.webHookIDEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.webHookIDEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.WebHookEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.NullValue>}
 */
const methodInfo_WebHooksService_WebHookEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.WebHookEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.WebHookEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServiceClient.prototype.webHookEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.WebHooksService/WebHookEndpoint',
      request,
      metadata,
      methodInfo_WebHooksService_WebHookEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.WebHookEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.WebHooksServicePromiseClient.prototype.webHookEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.webHookEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf.eth;

