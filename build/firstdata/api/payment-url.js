"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const api_1 = require("../../openapi/api");
class Wrapper extends base_1.BaseApi {
    constructor(context) { super(context, api_1.PaymentURLApi); }
    createPaymentUrl(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.createPaymentUrl(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, headers.messageSignature, params.region || this.context.region);
    }
}
exports.PaymentUrlApi = Wrapper;
