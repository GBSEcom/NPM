"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const api_1 = require("../../openapi/api");
class Wrapper extends base_1.BaseApi {
    constructor(context) { super(context, api_1.FraudDetectApi); }
    scoreOnly(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.scoreOnly(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, headers.messageSignature, params.region || this.context.region);
    }
    fraudClientRegistrationPost(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.fraudClientRegistrationPost(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, headers.messageSignature, params.region || this.context.region);
    }
    fraudPaymentRegistrationPost(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.fraudPaymentRegistrationPost(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, headers.messageSignature, params.region || this.context.region);
    }
}
exports.FraudDetectApi = Wrapper;
