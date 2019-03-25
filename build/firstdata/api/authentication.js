"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../../openapi/api");
const base_1 = require("./base");
class Wrapper extends base_1.BaseApi {
    constructor(context) { super(context, api_1.AuthenticationApi); }
    getAccessToken() {
        const headers = this.context.genHeaders();
        return this.client.v1AuthenticationAccessTokensPost(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, headers.messageSignature);
    }
}
exports.AuthenticationApi = Wrapper;
