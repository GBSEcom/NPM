"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
var ClientFactory = /** @class */ (function () {
    function ClientFactory(context) {
        this.context = context;
    }
    ClientFactory.prototype.authenticationApi = function () {
        return new api_1.AuthenticationApi(this.context);
    };
    ClientFactory.prototype.informationLookupApi = function () {
        return new api_1.InformationLookupApi(this.context);
    };
    ClientFactory.prototype.verificationApi = function () {
        return new api_1.VerificationApi(this.context);
    };
    ClientFactory.prototype.currencyConversionApi = function () {
        return new api_1.CurrencyConversionApi(this.context);
    };
    ClientFactory.prototype.fraudDetectApi = function () {
        return new api_1.FraudDetectApi(this.context);
    };
    ClientFactory.prototype.orderApi = function () {
        return new api_1.OrderApi(this.context);
    };
    ClientFactory.prototype.paymentSchedulesApi = function () {
        return new api_1.PaymentSchedulesApi(this.context);
    };
    ClientFactory.prototype.paymentTokenApi = function () {
        return new api_1.PaymentTokenApi(this.context);
    };
    ClientFactory.prototype.paymentUrlApi = function () {
        return new api_1.PaymentUrlApi(this.context);
    };
    ClientFactory.prototype.paymentApi = function () {
        return new api_1.PaymentApi(this.context);
    };
    return ClientFactory;
}());
exports.ClientFactory = ClientFactory;
