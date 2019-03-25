"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const api_1 = require("../../openapi/api");
class Wrapper extends base_1.BaseApi {
    constructor(context) { super(context, api_1.OrderApi); }
    orderInquiry(params) {
        const headers = this.context.genHeaders();
        return this.client.orderInquiry(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.orderId, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId);
    }
    orderPostAuth(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.orderPostAuth(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.orderId, params.payload, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId);
    }
    orderReturnTransaction(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.orderReturnTransaction(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.orderId, params.payload, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId);
    }
}
exports.OrderApi = Wrapper;
