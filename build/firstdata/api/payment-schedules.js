"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const api_1 = require("../../openapi/api");
class Wrapper extends base_1.BaseApi {
    constructor(context) { super(context, api_1.PaymentSchedulesApi); }
    cancelPaymentSchedule(params) {
        const headers = this.context.genHeaders();
        return this.client.cancelPaymentSchedule(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.orderId, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.region);
    }
    createPaymentSchedule(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.createPaymentSchedule(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, headers.messageSignature, params.region || this.context.region);
    }
    inquiryPaymentSchedule(params) {
        const headers = this.context.genHeaders();
        return this.client.inquiryPaymentSchedule(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.orderId, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.region);
    }
    updatePaymentSchedule(params) {
        const headers = this.context.genHeaders(params.payload);
        return this.client.updatePaymentSchedule(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.orderId, params.payload, headers.messageSignature, params.region || this.context.region);
    }
}
exports.PaymentSchedulesApi = Wrapper;
