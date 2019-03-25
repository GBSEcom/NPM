"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const api_1 = require("../../openapi/api");
class Wrapper extends base_1.BaseApi {
    constructor(context) { super(context, api_1.PaymentTokenApi); }
    createPaymentToken(params) {
        const headers = (params.authorization != null)
            ? this.context.genHeaders()
            : this.context.genHeaders(params.payload);
        return this.client.createPaymentToken(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, (params.authorization != null) ? undefined : headers.messageSignature, params.authorization, params.region || this.context.region);
    }
    deletePaymentToken(params) {
        const headers = this.context.genHeaders();
        return this.client.deletePaymentToken(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.tokenId, (params.authorization != null) ? undefined : headers.messageSignature, params.authorization, params.region || this.context.region, params.storeId || this.context.storeId);
    }
}
exports.PaymentTokenApi = Wrapper;
