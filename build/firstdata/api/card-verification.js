"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const api_1 = require("../../openapi/api");
class Wrapper extends base_1.BaseApi {
    constructor(context) { super(context, api_1.CardVerificationApi); }
    verifyCard(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.verifyCard(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, headers.messageSignature, params.region || this.context.region);
    }
}
exports.CardVerificationApi = Wrapper;
