/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf
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
proto.fairwaycorp.blockchainprotobuf = require('./transactionService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.TransactionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.TransactionHashEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.TX>}
 */
const methodInfo_TransactionHashEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.TransactionHashEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TransactionHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.TX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.TX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient.prototype.transactionHashEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.TransactionService/TransactionHashEndpoint',
      request,
      metadata,
      methodInfo_TransactionHashEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TransactionHashEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.TX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServicePromiseClient.prototype.transactionHashEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.UnconfirmedTransactionsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.TXS>}
 */
const methodInfo_UnconfirmedTransactionsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TXS,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.UnconfirmedTransactionsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TXS.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.UnconfirmedTransactionsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.TXS)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.TXS>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient.prototype.unconfirmedTransactionsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.TransactionService/UnconfirmedTransactionsEndpoint',
      request,
      metadata,
      methodInfo_UnconfirmedTransactionsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.UnconfirmedTransactionsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.TXS>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServicePromiseClient.prototype.unconfirmedTransactionsEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.TX,
 *   !proto.fairwaycorp.blockchainprotobuf.TXSkeleton>}
 */
const methodInfo_NewTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TXSkeleton,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.TX} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TXSkeleton.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TX} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.TXSkeleton)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.TXSkeleton>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient.prototype.newTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.TransactionService/NewTransactionEndpoint',
      request,
      metadata,
      methodInfo_NewTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TX} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.TXSkeleton>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServicePromiseClient.prototype.newTransactionEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.newTransactionEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.TXSkeleton,
 *   !proto.fairwaycorp.blockchainprotobuf.TXSkeleton>}
 */
const methodInfo_SendTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TXSkeleton,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.TXSkeleton} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TXSkeleton.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TXSkeleton} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.TXSkeleton)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.TXSkeleton>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient.prototype.sendTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.TransactionService/SendTransactionEndpoint',
      request,
      metadata,
      methodInfo_SendTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TXSkeleton} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.TXSkeleton>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServicePromiseClient.prototype.sendTransactionEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.PushRawTransactionEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.TX>}
 */
const methodInfo_PushRawTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.PushRawTransactionEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PushRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.TX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.TX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient.prototype.pushRawTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.TransactionService/PushRawTransactionEndpoint',
      request,
      metadata,
      methodInfo_PushRawTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.PushRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.TX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServicePromiseClient.prototype.pushRawTransactionEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.DecodeRawTransactionEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.TX>}
 */
const methodInfo_DecodeRawTransactionEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.TX,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DecodeRawTransactionEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.TX.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DecodeRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.TX)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.TX>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient.prototype.decodeRawTransactionEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.TransactionService/DecodeRawTransactionEndpoint',
      request,
      metadata,
      methodInfo_DecodeRawTransactionEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DecodeRawTransactionEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.TX>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServicePromiseClient.prototype.decodeRawTransactionEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.NullData,
 *   !proto.fairwaycorp.blockchainprotobuf.NullData>}
 */
const methodInfo_DataEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullData,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.NullData} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullData.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.NullData} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient.prototype.dataEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.TransactionService/DataEndpoint',
      request,
      metadata,
      methodInfo_DataEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.NullData} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullData>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServicePromiseClient.prototype.dataEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.TransactionPropagationEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.DescribedBelow>}
 */
const methodInfo_TransactionPropagationEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.DescribedBelow,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.TransactionPropagationEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.DescribedBelow.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TransactionPropagationEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.DescribedBelow)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.DescribedBelow>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServiceClient.prototype.transactionPropagationEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.TransactionService/TransactionPropagationEndpoint',
      request,
      metadata,
      methodInfo_TransactionPropagationEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.TransactionPropagationEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.DescribedBelow>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.TransactionServicePromiseClient.prototype.transactionPropagationEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.transactionPropagationEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf;

