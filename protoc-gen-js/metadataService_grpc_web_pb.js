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

var commonMessage_pb = require('./commonMessage_pb.js')
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
 *   !proto.fairwaycorp.blockchainprotobuf.GetMetadataAddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 */
const methodInfo_GetMetadataAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.KeyValues,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadataAddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.KeyValues.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadataAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.KeyValues)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.KeyValues>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.getMetadataAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadataAddressEndpoint',
      request,
      metadata,
      methodInfo_GetMetadataAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadataAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.getMetadataAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getMetadataAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.GetMetadataTxhashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 */
const methodInfo_GetMetadataTxhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.KeyValues,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadataTxhashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.KeyValues.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadataTxhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.KeyValues)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.KeyValues>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.getMetadataTxhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadataTxhashEndpoint',
      request,
      metadata,
      methodInfo_GetMetadataTxhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadataTxhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.getMetadataTxhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getMetadataTxhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.GetMetadataBlockhashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 */
const methodInfo_GetMetadataBlockhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  metadataMessage_pb.KeyValues,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadataBlockhashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  metadataMessage_pb.KeyValues.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadataBlockhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.KeyValues)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.KeyValues>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.getMetadataBlockhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/GetMetadataBlockhashEndpoint',
      request,
      metadata,
      methodInfo_GetMetadataBlockhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetMetadataBlockhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.KeyValues>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.getMetadataBlockhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getMetadataBlockhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.PutMetadataAddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_PutMetadataAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadataAddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadataAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.putMetadataAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadataAddressEndpoint',
      request,
      metadata,
      methodInfo_PutMetadataAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadataAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.putMetadataAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.putMetadataAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.PutMetadataTxhashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_PutMetadataTxhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadataTxhashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadataTxhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.putMetadataTxhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadataTxhashEndpoint',
      request,
      metadata,
      methodInfo_PutMetadataTxhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadataTxhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.putMetadataTxhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.putMetadataTxhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.PutMetadataBlockhashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_PutMetadataBlockhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadataBlockhashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadataBlockhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.putMetadataBlockhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/PutMetadataBlockhashEndpoint',
      request,
      metadata,
      methodInfo_PutMetadataBlockhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PutMetadataBlockhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.putMetadataBlockhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.putMetadataBlockhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteMetadataAddressEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_DeleteMetadataAddressEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadataAddressEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadataAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.deleteMetadataAddressEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadataAddressEndpoint',
      request,
      metadata,
      methodInfo_DeleteMetadataAddressEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadataAddressEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.deleteMetadataAddressEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteMetadataAddressEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteMetadataTxhashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_DeleteMetadataTxhashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadataTxhashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadataTxhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.deleteMetadataTxhashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadataTxhashEndpoint',
      request,
      metadata,
      methodInfo_DeleteMetadataTxhashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadataTxhashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.deleteMetadataTxhashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteMetadataTxhashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteMetadataBlockheightEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_DeleteMetadataBlockheightEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadataBlockheightEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadataBlockheightEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServiceClient.prototype.deleteMetadataBlockheightEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.MetadataService/DeleteMetadataBlockheightEndpoint',
      request,
      metadata,
      methodInfo_DeleteMetadataBlockheightEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteMetadataBlockheightEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.MetadataServicePromiseClient.prototype.deleteMetadataBlockheightEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteMetadataBlockheightEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf;

