/**
 * @fileoverview gRPC-Web generated client stub for fairwaycorp.blockchainprotobuf
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
proto.fairwaycorp.blockchainprotobuf = require('./walletService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient =
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
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.fairwaycorp.blockchainprotobuf.WalletServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.fairwaycorp.blockchainprotobuf.WalletServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fairwaycorp.blockchainprotobuf.CreateWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Wallet>}
 */
const methodInfo_CreateWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Wallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.CreateWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Wallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.CreateWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Wallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Wallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.createWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/CreateWalletEndpoint',
      request,
      metadata,
      methodInfo_CreateWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.CreateWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Wallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.createWalletEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.CreateWalletHDEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.HDWallet>}
 */
const methodInfo_CreateWalletHDEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.HDWallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.CreateWalletHDEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.HDWallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.CreateWalletHDEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.HDWallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.HDWallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.createWalletHDEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/CreateWalletHDEndpoint',
      request,
      metadata,
      methodInfo_CreateWalletHDEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.CreateWalletHDEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.HDWallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.createWalletHDEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.ListWalletsEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.ListWallets>}
 */
const methodInfo_ListWalletsEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  walletMessage_pb.ListWallets,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.ListWalletsEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  walletMessage_pb.ListWallets.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.ListWalletsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.ListWallets)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.ListWallets>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.listWalletsEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/ListWalletsEndpoint',
      request,
      metadata,
      methodInfo_ListWalletsEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.ListWalletsEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.ListWallets>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.listWalletsEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.GetWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Wallet>}
 */
const methodInfo_GetWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Wallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Wallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Wallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Wallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.getWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/GetWalletEndpoint',
      request,
      metadata,
      methodInfo_GetWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Wallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.getWalletEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.GetWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.HDWallet>}
 */
const methodInfo_GetWalletHDEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.HDWallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.HDWallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.HDWallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.HDWallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.getWalletHDEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/GetWalletHDEndpoint',
      request,
      metadata,
      methodInfo_GetWalletHDEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.HDWallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.getWalletHDEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.AddAddressesToWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Wallet>}
 */
const methodInfo_AddAddressesToWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Wallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.AddAddressesToWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Wallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddAddressesToWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Wallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Wallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.addAddressesToWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/AddAddressesToWalletEndpoint',
      request,
      metadata,
      methodInfo_AddAddressesToWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.AddAddressesToWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Wallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.addAddressesToWalletEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.GetWalletAddressesEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.Wallet>}
 */
const methodInfo_GetWalletAddressesEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.Wallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletAddressesEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.Wallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletAddressesEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.Wallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.Wallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.getWalletAddressesEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/GetWalletAddressesEndpoint',
      request,
      metadata,
      methodInfo_GetWalletAddressesEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletAddressesEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.Wallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.getWalletAddressesEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.GetWalletAddressesEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.HDChain>}
 */
const methodInfo_GetWalletAddressesHDEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.HDChain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletAddressesEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.HDChain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletAddressesEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.HDChain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.HDChain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.getWalletAddressesHDEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/GetWalletAddressesHDEndpoint',
      request,
      metadata,
      methodInfo_GetWalletAddressesHDEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GetWalletAddressesEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.HDChain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.getWalletAddressesHDEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.RemoveAddressesFromWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_RemoveAddressesFromWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.RemoveAddressesFromWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.RemoveAddressesFromWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.removeAddressesFromWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/RemoveAddressesFromWalletEndpoint',
      request,
      metadata,
      methodInfo_RemoveAddressesFromWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.RemoveAddressesFromWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.removeAddressesFromWalletEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.GenerateAdressInWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.WalletAddressKeychain>}
 */
const methodInfo_GenerateAddressInWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  walletMessage_pb.WalletAddressKeychain,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.GenerateAdressInWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  walletMessage_pb.WalletAddressKeychain.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GenerateAdressInWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.WalletAddressKeychain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.WalletAddressKeychain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.generateAddressInWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/GenerateAddressInWalletEndpoint',
      request,
      metadata,
      methodInfo_GenerateAddressInWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.GenerateAdressInWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.WalletAddressKeychain>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.generateAddressInWalletEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.DeriveAddressInWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.HDWallet>}
 */
const methodInfo_DeriveAddressInWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.HDWallet,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeriveAddressInWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.HDWallet.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeriveAddressInWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.HDWallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.HDWallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.deriveAddressInWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/DeriveAddressInWalletEndpoint',
      request,
      metadata,
      methodInfo_DeriveAddressInWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeriveAddressInWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.HDWallet>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.deriveAddressInWalletEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_DeleteWalletEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeleteWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.deleteWalletEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/DeleteWalletEndpoint',
      request,
      metadata,
      methodInfo_DeleteWalletEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.deleteWalletEndpoint =
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
 *   !proto.fairwaycorp.blockchainprotobuf.DeleteWalletEndpointRequest,
 *   !proto.fairwaycorp.blockchainprotobuf.NullValue>}
 */
const methodInfo_DeleteWalletHDEndpoint = new grpc.web.AbstractClientBase.MethodInfo(
  commonMessage_pb.NullValue,
  /** @param {!proto.fairwaycorp.blockchainprotobuf.DeleteWalletEndpointRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  commonMessage_pb.NullValue.deserializeBinary
);


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fairwaycorp.blockchainprotobuf.NullValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fairwaycorp.blockchainprotobuf.NullValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServiceClient.prototype.deleteWalletHDEndpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fairwaycorp.blockchainprotobuf.WalletService/DeleteWalletHDEndpoint',
      request,
      metadata,
      methodInfo_DeleteWalletHDEndpoint,
      callback);
};


/**
 * @param {!proto.fairwaycorp.blockchainprotobuf.DeleteWalletEndpointRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fairwaycorp.blockchainprotobuf.NullValue>}
 *     The XHR Node Readable Stream
 */
proto.fairwaycorp.blockchainprotobuf.WalletServicePromiseClient.prototype.deleteWalletHDEndpoint =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteWalletHDEndpoint(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.fairwaycorp.blockchainprotobuf;

