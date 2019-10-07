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
    deletePaymentUrl(params) {
        const headers = this.context.genHeaders();
        return this.client.deletePaymentUrl(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId, params.transactionId, params.orderId, params.paymentUrlId, params.transactionTime);
    }
    paymentUrlDetail(params) {
        const headers = this.context.genHeaders();
        return this.client.paymentUrlDetail(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.fromDate, params.toDate, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId, params.orderId, params.merchantTransactionId, params.status);
    }
}
exports.PaymentUrlApi = Wrapper;
