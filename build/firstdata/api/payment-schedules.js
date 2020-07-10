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
        return _super.call(this, context, api_1.PaymentSchedulesApi) || this;
    }
    Wrapper.prototype.cancelPaymentSchedule = function (params) {
        var headers = this.context.genHeaders();
        return this.client.cancelPaymentSchedule(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.orderId, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.region);
    };
    Wrapper.prototype.createPaymentSchedule = function (params) {
        var headers = this.context.genHeaders(params.payload);
        return this.client.createPaymentSchedule(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.payload, headers.messageSignature, params.region || this.context.region);
    };
    Wrapper.prototype.inquiryPaymentSchedule = function (params) {
        var headers = this.context.genHeaders();
        return this.client.inquiryPaymentSchedule(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.orderId, headers.messageSignature, params.region || this.context.region, params.storeId || this.context.region);
    };
    Wrapper.prototype.updatePaymentSchedule = function (params) {
        var headers = this.context.genHeaders(params.payload);
        return this.client.updatePaymentSchedule(headers.contentType, headers.clientRequestId, headers.apiKey, headers.timestamp, params.orderId, params.payload, headers.messageSignature, params.region || this.context.region);
    };
    return Wrapper;
}(base_1.BaseApi));
exports.PaymentSchedulesApi = Wrapper;
