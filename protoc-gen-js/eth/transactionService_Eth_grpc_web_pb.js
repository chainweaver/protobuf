/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf.eth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var transactionMessage_Eth_pb = require('./transactionMessage_Eth_pb.js')

var commonMessage_Eth_pb = require('./commonMessage_Eth_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = {};
proto.fairwaycorp.blockchainprotobuf.eth = require('./transactionService_Eth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.eth.TransactionServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.eth.TransactionServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.GetTransactionHashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.TX>}
 */
const methodInfo_GetTransactionHashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.TX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetTransactionHashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.TX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetTransactionHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.TX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.TX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServiceClient.prototype.getTransactionHashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.TransactionService/GetTransactionHashEndpoint',
      request,
      metadata,
      methodInfo_GetTransactionHashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetTransactionHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.TX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServicePromiseClient.prototype.getTransactionHashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTransactionHashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.GetUnconfirmedTransactionsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.TxArray>}
 */
const methodInfo_GetUnconfirmedTransactionsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  transactionMessage_Eth_pb.TxArray,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetUnconfirmedTransactionsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  transactionMessage_Eth_pb.TxArray.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetUnconfirmedTransactionsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.TxArray)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.TxArray>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServiceClient.prototype.getUnconfirmedTransactionsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.TransactionService/GetUnconfirmedTransactionsEndpoint',
      request,
      metadata,
      methodInfo_GetUnconfirmedTransactionsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.GetUnconfirmedTransactionsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.TxArray>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServicePromiseClient.prototype.getUnconfirmedTransactionsEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getUnconfirmedTransactionsEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.PostCreateTransactionsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.TXSkeleton>}
 */
const methodInfo_PostCreateTransactionsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.TXSkeleton,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostCreateTransactionsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.TXSkeleton.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostCreateTransactionsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.TXSkeleton)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.TXSkeleton>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServiceClient.prototype.postCreateTransactionsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.TransactionService/PostCreateTransactionsEndpoint',
      request,
      metadata,
      methodInfo_PostCreateTransactionsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostCreateTransactionsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.TXSkeleton>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServicePromiseClient.prototype.postCreateTransactionsEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.postCreateTransactionsEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.PostSendTransactionEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.TXSkeleton>}
 */
const methodInfo_PostSendTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.TXSkeleton,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostSendTransactionEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.TXSkeleton.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostSendTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.TXSkeleton)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.TXSkeleton>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServiceClient.prototype.postSendTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.TransactionService/PostSendTransactionEndpoint',
      request,
      metadata,
      methodInfo_PostSendTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostSendTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.TXSkeleton>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServicePromiseClient.prototype.postSendTransactionEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.postSendTransactionEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.PostDecodeRawTransactionEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.TX>}
 */
const methodInfo_PostDecodeRawTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.TX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostDecodeRawTransactionEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.TX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostDecodeRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.TX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.TX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServiceClient.prototype.postDecodeRawTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.TransactionService/PostDecodeRawTransactionEndpoint',
      request,
      metadata,
      methodInfo_PostDecodeRawTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostDecodeRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.TX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServicePromiseClient.prototype.postDecodeRawTransactionEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.postDecodeRawTransactionEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.eth.PostPushRawTransactionEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.eth.TX>}
 */
const methodInfo_PostPushRawTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_Eth_pb.TX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostPushRawTransactionEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_Eth_pb.TX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostPushRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.eth.TX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.eth.TX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServiceClient.prototype.postPushRawTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.eth.TransactionService/PostPushRawTransactionEndpoint',
      request,
      metadata,
      methodInfo_PostPushRawTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.eth.PostPushRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.eth.TX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.eth.TransactionServicePromiseClient.prototype.postPushRawTransactionEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.postPushRawTransactionEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf.eth;

