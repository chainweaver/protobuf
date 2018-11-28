/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf.btc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var assetMessage_pb = require('./assetMessage_pb.js')

var commonMessage_pb = require('./commonMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = {};
proto.fairwaycorp.blockchainprotobuf.btc = require('./assetService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.btc.AssetServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.btc.AssetServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.btc.AssetServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.NullValueRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.AddressKeychain>}
 */
const methodInfo_AssetService_GenerateAssetAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.AddressKeychain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.NullValueRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.AddressKeychain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.NullValueRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.AddressKeychain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.AddressKeychain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServiceClient.prototype.generateAssetAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AssetService/GenerateAssetAddressEndpoint',
      request,
      metadata,
      methodInfo_AssetService_GenerateAssetAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.NullValueRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.AddressKeychain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServicePromiseClient.prototype.generateAssetAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.generateAssetAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.OAPIssueRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.OAPTX>}
 */
const methodInfo_AssetService_IssueAssetEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.OAPTX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.OAPIssueRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.OAPTX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.OAPIssueRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.OAPTX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.OAPTX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServiceClient.prototype.issueAssetEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AssetService/IssueAssetEndpoint',
      request,
      metadata,
      methodInfo_AssetService_IssueAssetEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.OAPIssueRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.OAPTX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServicePromiseClient.prototype.issueAssetEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.issueAssetEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TransferAssetEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.OAPTX>}
 */
const methodInfo_AssetService_TransferAssetEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.OAPTX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransferAssetEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.OAPTX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransferAssetEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.OAPTX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.OAPTX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServiceClient.prototype.transferAssetEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AssetService/TransferAssetEndpoint',
      request,
      metadata,
      methodInfo_AssetService_TransferAssetEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransferAssetEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.OAPTX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServicePromiseClient.prototype.transferAssetEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.transferAssetEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.ListAssetTXsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.ArrayString>}
 */
const methodInfo_AssetService_ListAssetTXsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.ArrayString,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.ListAssetTXsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.ArrayString.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.ListAssetTXsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.ArrayString)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.ArrayString>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServiceClient.prototype.listAssetTXsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AssetService/ListAssetTXsEndpoint',
      request,
      metadata,
      methodInfo_AssetService_ListAssetTXsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.ListAssetTXsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.ArrayString>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServicePromiseClient.prototype.listAssetTXsEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listAssetTXsEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.GetAssetTXEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.OAPTX>}
 */
const methodInfo_AssetService_GetAssetTXEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.OAPTX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAssetTXEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.OAPTX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAssetTXEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.OAPTX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.OAPTX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServiceClient.prototype.getAssetTXEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AssetService/GetAssetTXEndpoint',
      request,
      metadata,
      methodInfo_AssetService_GetAssetTXEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAssetTXEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.OAPTX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServicePromiseClient.prototype.getAssetTXEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAssetTXEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.GetAssetAddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Address>}
 */
const methodInfo_AssetService_GetAssetAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Address,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAssetAddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Address.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAssetAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServiceClient.prototype.getAssetAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.AssetService/GetAssetAddressEndpoint',
      request,
      metadata,
      methodInfo_AssetService_GetAssetAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetAssetAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Address>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.AssetServicePromiseClient.prototype.getAssetAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAssetAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf.btc;

