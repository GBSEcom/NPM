"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var api_1 = require("../../openapi/api");
var Wrapper = /** @class */ (function (_super) {
    __extends(Wrapper, _super);
    function Wrapper(context) {
        return _super.call(this, context, api_1.PaymentURLApi) || this;
    }
    Wrapper.prototype.createPaymentUrl = function (params) {
        var headers = this.context.genHeaders(params.payload);
        return this.client.createPaymentUrl(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, headers.messageSignature, params.region || this.context.region);
    };
    Wrapper.prototype.deletePaymentUrl = function (params) {
        var headers = this.context.genHeaders();
        return this.client.deletePaymentUrl(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId, params.transactionId, params.orderId, params.paymentUrlId, params.transactionTime);
    };
    Wrapper.prototype.paymentUrlDetail = function (params) {
        var headers = this.context.genHeaders();
        return this.client.paymentUrlDetail(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.fromDate, params.toDate, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.storeId, params.orderId, params.merchantTransactionId, params.status);
    };
    return Wrapper;
}(base_1.BaseApi));
exports.PaymentUrlApi = Wrapper;
