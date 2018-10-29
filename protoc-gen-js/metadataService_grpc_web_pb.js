/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var metadataMessage_pb = require('./metadataMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = require('./metadataService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.GetMetadata_addressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 */
const methodInfo_GetMetadata_addressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.KeyValues,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadata_addressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.KeyValues.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadata_addressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.KeyValues)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.KeyValues>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.getMetadata_addressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadata_addressEndpoint',
      request,
      metadata,
      methodInfo_GetMetadata_addressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadata_addressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.getMetadata_addressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getMetadata_addressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.GetMetadata_txhashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 */
const methodInfo_GetMetadata_txhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.KeyValues,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadata_txhashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.KeyValues.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadata_txhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.KeyValues)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.KeyValues>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.getMetadata_txhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadata_txhashEndpoint',
      request,
      metadata,
      methodInfo_GetMetadata_txhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadata_txhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.getMetadata_txhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getMetadata_txhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.GetMetadata_blockhashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 */
const methodInfo_GetMetadata_blockhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.KeyValues,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadata_blockhashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.KeyValues.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadata_blockhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.KeyValues)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.KeyValues>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.getMetadata_blockhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadata_blockhashEndpoint',
      request,
      metadata,
      methodInfo_GetMetadata_blockhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadata_blockhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.getMetadata_blockhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getMetadata_blockhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.PutMetadata_addressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_PutMetadata_addressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadata_addressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadata_addressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.putMetadata_addressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadata_addressEndpoint',
      request,
      metadata,
      methodInfo_PutMetadata_addressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadata_addressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.putMetadata_addressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.putMetadata_addressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.PutMetadata_txhashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_PutMetadata_txhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadata_txhashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadata_txhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.putMetadata_txhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadata_txhashEndpoint',
      request,
      metadata,
      methodInfo_PutMetadata_txhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadata_txhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.putMetadata_txhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.putMetadata_txhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.PutMetadata_block_hashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_PutMetadata_blockhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadata_block_hashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadata_block_hashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.putMetadata_blockhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadata_blockhashEndpoint',
      request,
      metadata,
      methodInfo_PutMetadata_blockhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadata_block_hashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.putMetadata_blockhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.putMetadata_blockhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_addressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_DeleteMetadata_addressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_addressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_addressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.deleteMetadata_addressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadata_addressEndpoint',
      request,
      metadata,
      methodInfo_DeleteMetadata_addressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_addressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.deleteMetadata_addressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteMetadata_addressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_txhashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_DeleteMetadata_txhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_txhashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_txhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.deleteMetadata_txhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadata_txhashEndpoint',
      request,
      metadata,
      methodInfo_DeleteMetadata_txhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_txhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.deleteMetadata_txhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteMetadata_txhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_block_heightEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_DeleteMetadata_blockheightEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_block_heightEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_block_heightEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.deleteMetadata_blockheightEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadata_blockheightEndpoint',
      request,
      metadata,
      methodInfo_DeleteMetadata_blockheightEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadata_block_heightEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.deleteMetadata_blockheightEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteMetadata_blockheightEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf;

