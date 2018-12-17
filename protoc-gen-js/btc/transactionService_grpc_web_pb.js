/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf.btc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var transactionMessage_pb = require('./transactionMessage_pb.js')

var commonMessage_pb = require('./commonMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = {};
proto.fairwaycorp.blockchainprotobuf.btc = require('./transactionService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TransactionHashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TX>}
 */
const methodInfo_TransactionService_TransactionHashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionHashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.TX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.TX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient.prototype.transactionHashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.TransactionService/TransactionHashEndpoint',
      request,
      metadata,
      methodInfo_TransactionService_TransactionHashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.TX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServicePromiseClient.prototype.transactionHashEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.transactionHashEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.UnconfirmedTransactionsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TXs>}
 */
const methodInfo_TransactionService_UnconfirmedTransactionsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TXs,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.UnconfirmedTransactionsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TXs.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.UnconfirmedTransactionsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.TXs)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.TXs>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient.prototype.unconfirmedTransactionsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.TransactionService/UnconfirmedTransactionsEndpoint',
      request,
      metadata,
      methodInfo_TransactionService_UnconfirmedTransactionsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.UnconfirmedTransactionsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.TXs>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServicePromiseClient.prototype.unconfirmedTransactionsEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.unconfirmedTransactionsEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.CreateTransactionEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TXSkeleton>}
 */
const methodInfo_TransactionService_CreateTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TXSkeleton,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateTransactionEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TXSkeleton.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.TXSkeleton)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.TXSkeleton>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient.prototype.createTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.TransactionService/CreateTransactionEndpoint',
      request,
      metadata,
      methodInfo_TransactionService_CreateTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.TXSkeleton>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServicePromiseClient.prototype.createTransactionEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createTransactionEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.SendTransactionEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TXSkeleton>}
 */
const methodInfo_TransactionService_SendTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TXSkeleton,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.SendTransactionEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TXSkeleton.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.SendTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.TXSkeleton)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.TXSkeleton>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient.prototype.sendTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.TransactionService/SendTransactionEndpoint',
      request,
      metadata,
      methodInfo_TransactionService_SendTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.SendTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.TXSkeleton>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServicePromiseClient.prototype.sendTransactionEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sendTransactionEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.PushRawTransactionEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TX>}
 */
const methodInfo_TransactionService_PushRawTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.PushRawTransactionEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.PushRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.TX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.TX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient.prototype.pushRawTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.TransactionService/PushRawTransactionEndpoint',
      request,
      metadata,
      methodInfo_TransactionService_PushRawTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.PushRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.TX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServicePromiseClient.prototype.pushRawTransactionEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.pushRawTransactionEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.DecodeRawTransactionEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TX>}
 */
const methodInfo_TransactionService_DecodeRawTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.DecodeRawTransactionEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DecodeRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.TX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.TX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient.prototype.decodeRawTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.TransactionService/DecodeRawTransactionEndpoint',
      request,
      metadata,
      methodInfo_TransactionService_DecodeRawTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DecodeRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.TX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServicePromiseClient.prototype.decodeRawTransactionEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.decodeRawTransactionEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.DataEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.NullData>}
 */
const methodInfo_TransactionService_DataEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullData,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.DataEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullData.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DataEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.NullData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.NullData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient.prototype.dataEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.TransactionService/DataEndpoint',
      request,
      metadata,
      methodInfo_TransactionService_DataEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DataEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.NullData>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServicePromiseClient.prototype.dataEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.dataEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TransactionPropagationEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.TXPropagation>}
 */
const methodInfo_TransactionService_TransactionPropagationEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TXPropagation,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionPropagationEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TXPropagation.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionPropagationEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.TXPropagation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.TXPropagation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServiceClient.prototype.transactionPropagationEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.TransactionService/TransactionPropagationEndpoint',
      request,
      metadata,
      methodInfo_TransactionService_TransactionPropagationEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionPropagationEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.TXPropagation>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionServicePromiseClient.prototype.transactionPropagationEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.transactionPropagationEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf.btc;

