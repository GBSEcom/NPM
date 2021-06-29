"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var uuidv4 = require("uuid/v4");
var crypto_js_1 = require("crypto-js");
var Base64 = require("crypto-js/enc-base64");
var factory_1 = require("./factory");
var CONTENT_TYPE = "application/json";
var USER_AGENT_ID = "IPG-SDK/21.3.0/npm";
var genClientRequestId = uuidv4;
var genTimestamp = function () {
    return new Date().getTime();
};
var genMsgSignature = function (secret, data) {
    return Base64.stringify(crypto_js_1.HmacSHA256(data, secret));
};
var genHeaders = function (creds, payload) {
    var apiKey = creds.apiKey;
    var contentType = CONTENT_TYPE;
    var userAgentId = USER_AGENT_ID;
    var clientRequestId = genClientRequestId();
    var timestamp = genTimestamp();
    var data = apiKey +
        clientRequestId +
        timestamp;
    if (payload) {
        data = data.concat(JSON.stringify(payload));
    }
    var messageSignature = genMsgSignature(creds.apiSecret.toString(), data);
    return { apiKey: apiKey, contentType: contentType, userAgentId: userAgentId, clientRequestId: clientRequestId, timestamp: timestamp, messageSignature: messageSignature };
};
var Context = /** @class */ (function () {
    function Context(config) {
        this.axios = config.axios || axios_1.default;
        this.basePath = config.basePath;
        this.credentials = config.credentials;
        this.factory = config.factory || new factory_1.ClientFactory(this);
        this.region = config.region || undefined;
        this.storeId = config.storeId || undefined;
    }
    Context.prototype.genHeaders = function (payload) {
        return genHeaders(this.credentials, payload);
    };
    return Context;
}());
exports.Context = Context;
