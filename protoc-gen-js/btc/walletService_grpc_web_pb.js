/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf.btc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var walletMessage_pb = require('./walletMessage_pb.js')

var commonMessage_pb = require('./commonMessage_pb.js')
const proto = {};
proto.fairwaycorp = {};
proto.fairwaycorp.blockchainprotobuf = {};
proto.fairwaycorp.blockchainprotobuf.btc = require('./walletService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.CreateWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Wallet>}
 */
const methodInfo_WalletService_CreateWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Wallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Wallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Wallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Wallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.createWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/CreateWalletEndpoint',
      request,
      metadata,
      methodInfo_WalletService_CreateWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Wallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.createWalletEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createWalletEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.CreateWalletHDEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.HDWallet>}
 */
const methodInfo_WalletService_CreateWalletHDEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.HDWallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateWalletHDEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.HDWallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateWalletHDEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.HDWallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.HDWallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.createWalletHDEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/CreateWalletHDEndpoint',
      request,
      metadata,
      methodInfo_WalletService_CreateWalletHDEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.CreateWalletHDEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.HDWallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.createWalletHDEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createWalletHDEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.ListWalletsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.ListWallets>}
 */
const methodInfo_WalletService_ListWalletsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  walletMessage_pb.ListWallets,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.ListWalletsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  walletMessage_pb.ListWallets.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.ListWalletsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.ListWallets)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.ListWallets>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.listWalletsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/ListWalletsEndpoint',
      request,
      metadata,
      methodInfo_WalletService_ListWalletsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.ListWalletsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.ListWallets>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.listWalletsEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listWalletsEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.GetWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Wallet>}
 */
const methodInfo_WalletService_GetWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Wallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Wallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Wallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Wallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.getWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/GetWalletEndpoint',
      request,
      metadata,
      methodInfo_WalletService_GetWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Wallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.getWalletEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getWalletEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.GetWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.HDWallet>}
 */
const methodInfo_WalletService_GetWalletHDEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.HDWallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.HDWallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.HDWallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.HDWallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.getWalletHDEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/GetWalletHDEndpoint',
      request,
      metadata,
      methodInfo_WalletService_GetWalletHDEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.HDWallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.getWalletHDEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getWalletHDEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.AddAddressesToWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Wallet>}
 */
const methodInfo_WalletService_AddAddressesToWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Wallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.AddAddressesToWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Wallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.AddAddressesToWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Wallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Wallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.addAddressesToWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/AddAddressesToWalletEndpoint',
      request,
      metadata,
      methodInfo_WalletService_AddAddressesToWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.AddAddressesToWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Wallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.addAddressesToWalletEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addAddressesToWalletEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.GetWalletAddressesEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.Wallet>}
 */
const methodInfo_WalletService_GetWalletAddressesEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Wallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletAddressesEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Wallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletAddressesEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.Wallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.Wallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.getWalletAddressesEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/GetWalletAddressesEndpoint',
      request,
      metadata,
      methodInfo_WalletService_GetWalletAddressesEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletAddressesEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.Wallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.getWalletAddressesEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getWalletAddressesEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.GetWalletAddressesEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.HDChain>}
 */
const methodInfo_WalletService_GetWalletAddressesHDEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.HDChain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletAddressesEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.HDChain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletAddressesEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.HDChain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.HDChain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.getWalletAddressesHDEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/GetWalletAddressesHDEndpoint',
      request,
      metadata,
      methodInfo_WalletService_GetWalletAddressesHDEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GetWalletAddressesEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.HDChain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.getWalletAddressesHDEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getWalletAddressesHDEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.RemoveAddressesFromWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.NullValue>}
 */
const methodInfo_WalletService_RemoveAddressesFromWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.RemoveAddressesFromWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.RemoveAddressesFromWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.removeAddressesFromWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/RemoveAddressesFromWalletEndpoint',
      request,
      metadata,
      methodInfo_WalletService_RemoveAddressesFromWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.RemoveAddressesFromWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.removeAddressesFromWalletEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.removeAddressesFromWalletEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.GenerateAdressInWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.WalletAddressKeychain>}
 */
const methodInfo_WalletService_GenerateAddressInWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  walletMessage_pb.WalletAddressKeychain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.GenerateAdressInWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  walletMessage_pb.WalletAddressKeychain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GenerateAdressInWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.WalletAddressKeychain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.WalletAddressKeychain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.generateAddressInWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/GenerateAddressInWalletEndpoint',
      request,
      metadata,
      methodInfo_WalletService_GenerateAddressInWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.GenerateAdressInWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.WalletAddressKeychain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.generateAddressInWalletEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.generateAddressInWalletEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.DeriveAddressInWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.HDWallet>}
 */
const methodInfo_WalletService_DeriveAddressInWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.HDWallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeriveAddressInWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.HDWallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeriveAddressInWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.HDWallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.HDWallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.deriveAddressInWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/DeriveAddressInWalletEndpoint',
      request,
      metadata,
      methodInfo_WalletService_DeriveAddressInWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeriveAddressInWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.HDWallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.deriveAddressInWalletEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deriveAddressInWalletEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.DeleteWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.NullValue>}
 */
const methodInfo_WalletService_DeleteWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeleteWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeleteWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.deleteWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/DeleteWalletEndpoint',
      request,
      metadata,
      methodInfo_WalletService_DeleteWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeleteWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.deleteWalletEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteWalletEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.btc.DeleteWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.btc.NullValue>}
 */
const methodInfo_WalletService_DeleteWalletHDEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeleteWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeleteWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.btc.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.btc.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServiceClient.prototype.deleteWalletHDEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.btc.WalletService/DeleteWalletHDEndpoint',
      request,
      metadata,
      methodInfo_WalletService_DeleteWalletHDEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.DeleteWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.btc.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.btc.WalletServicePromiseClient.prototype.deleteWalletHDEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteWalletHDEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf.btc;

