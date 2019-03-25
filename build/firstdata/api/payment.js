"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const api_1 = require("../../openapi/api");
class Wrapper extends base_1.BaseApi {
    constructor(context) { super(context, api_1.PaymentApi); }
    finalizeSecureTransaction(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.finalizeSecureTransaction(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.transactionId, params.payload, headers.messageSignature, params.region || this.context.region);
    }
    performPaymentPostAuthorisation(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.performPaymentPostAuthorisation(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.transactionId, params.payload, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId);
    }
    primaryPaymentTransaction(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.primaryPaymentTransaction(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, headers.messageSignature, params.region || this.context.region);
    }
    returnTransaction(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.returnTransaction(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.transactionId, params.payload, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId);
    }
    transactionInquiry(params) {
        const headers = this.context.genHeaders();
        return this.client.transactionInquiry(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.transactionId, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId);
    }
    voidTransaction(params) {
        const headers = this.context.genHeaders();
        return this.client.voidTransaction(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.transactionId, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId);
    }
}
exports.PaymentApi = Wrapper;
