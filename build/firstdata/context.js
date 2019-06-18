"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const uuidv4 = require("uuid/v4");
const crypto_js_1 = require("crypto-js");
const Base64 = require("crypto-js/enc-base64");
const factory_1 = require("./factory");
const CONTENT_TYPE = "application/json";
const genClientRequestId = uuidv4;
const genTimestamp = () => new Date().getTime();
const genMsgSignature = (secret, data) => Base64.stringify(crypto_js_1.HmacSHA256(data, secret));
const genHeaders = (creds, payload) => {
    const apiKey = creds.apiKey;
    const contentType = CONTENT_TYPE;
    const clientRequestId = genClientRequestId();
    const timestamp = genTimestamp();
    let data = apiKey +
        clientRequestId +
        timestamp;
    if (payload) {
        data = data.concat(JSON.stringify(payload));
    }
    const messageSignature = genMsgSignature(creds.apiSecret.toString(), data);
    return { apiKey, contentType, clientRequestId, timestamp, messageSignature };
};
class Context {
    constructor(config) {
        this.axios = config.axios || axios_1.default;
        this.basePath = config.basePath;
        this.credentials = config.credentials;
        this.factory = config.factory || new factory_1.ClientFactory(this);
        this.region = config.region || undefined;
        this.storeId = config.storeId || undefined;
    }
    genHeaders(payload) {
        return genHeaders(this.credentials, payload);
    }
}
exports.Context = Context;
