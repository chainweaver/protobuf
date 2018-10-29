/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var assetMessage_pb = require('./assetMessage_pb.js')

var walletMessage_pb = require('./walletMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = require('./assetService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.AssetServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.AssetServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.AssetServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.AssetServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.GenerateAssetAddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.AddressKeychain>}
 */
const methodInfo_GenerateAssetAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  walletMessage_pb.AddressKeychain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GenerateAssetAddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  walletMessage_pb.AddressKeychain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GenerateAssetAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.AddressKeychain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.AddressKeychain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServiceClient.prototype.generateAssetAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.AssetService/GenerateAssetAddressEndpoint',
      request,
      metadata,
      methodInfo_GenerateAssetAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GenerateAssetAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.AddressKeychain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServicePromiseClient.prototype.generateAssetAddressEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.OAPIssue,
 *   !proto.fairwaycorp.blockchainprotobuf.OAPTX>}
 */
const methodInfo_IssueAssetEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  assetMessage_pb.OAPTX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.OAPIssue} request */
  function(request) {
    return request.serializeBinary();
  },
  assetMessage_pb.OAPTX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.OAPIssue} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.OAPTX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.OAPTX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServiceClient.prototype.issueAssetEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.AssetService/IssueAssetEndpoint',
      request,
      metadata,
      methodInfo_IssueAssetEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.OAPIssue} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.OAPTX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServicePromiseClient.prototype.issueAssetEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.TransferAssetEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.OAPTX>}
 */
const methodInfo_TransferAssetEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  assetMessage_pb.OAPTX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.TransferAssetEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  assetMessage_pb.OAPTX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TransferAssetEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.OAPTX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.OAPTX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServiceClient.prototype.transferAssetEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.AssetService/TransferAssetEndpoint',
      request,
      metadata,
      methodInfo_TransferAssetEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TransferAssetEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.OAPTX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServicePromiseClient.prototype.transferAssetEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.ListAssetTXsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.ArrayString>}
 */
const methodInfo_ListAssetTXsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  assetMessage_pb.ArrayString,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.ListAssetTXsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  assetMessage_pb.ArrayString.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.ListAssetTXsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.ArrayString)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.ArrayString>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServiceClient.prototype.listAssetTXsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.AssetService/ListAssetTXsEndpoint',
      request,
      metadata,
      methodInfo_ListAssetTXsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.ListAssetTXsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.ArrayString>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServicePromiseClient.prototype.listAssetTXsEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.GetAssetTXEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.OAPTX>}
 */
const methodInfo_GetAssetTXEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  assetMessage_pb.OAPTX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetAssetTXEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  assetMessage_pb.OAPTX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetAssetTXEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.OAPTX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.OAPTX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServiceClient.prototype.getAssetTXEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.AssetService/GetAssetTXEndpoint',
      request,
      metadata,
      methodInfo_GetAssetTXEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetAssetTXEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.OAPTX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServicePromiseClient.prototype.getAssetTXEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.GetAssetAddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Address>}
 */
const methodInfo_GetAssetAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  assetMessage_pb.Address,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetAssetAddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  assetMessage_pb.Address.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetAssetAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServiceClient.prototype.getAssetAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.AssetService/GetAssetAddressEndpoint',
      request,
      metadata,
      methodInfo_GetAssetAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetAssetAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Address>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.AssetServicePromiseClient.prototype.getAssetAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAssetAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf;

