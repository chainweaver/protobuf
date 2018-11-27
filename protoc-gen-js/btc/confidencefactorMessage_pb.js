/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var commonMessage_pb = require('./commonMessage_pb.js');
goog.exportSymbol('proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.displayName = 'proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    network: jspb.Message.getFieldWithDefault(msg, 1, 0),
    txhash: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest}
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest;
  return proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest}
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias} */ (reader.readEnum());
      msg.setNetwork(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetwork();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTxhash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional NetworkAllowingAlias network = 1;
 * @return {!proto.fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias}
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.prototype.getNetwork = function() {
  return /** @type {!proto.fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.fairwaycorp.blockchainprotobuf.btc.NetworkAllowingAlias} value */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.prototype.setNetwork = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string txhash = 2;
 * @return {string}
 */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.prototype.getTxhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.fairwaycorp.blockchainprotobuf.btc.TransactionConfidenceEndpointRequest.prototype.setTxhash = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.fairwaycorp.blockchainprotobuf.btc);
