"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
class ClientFactory {
    constructor(context) {
        this.context = context;
    }
    authenticationApi() {
        return new api_1.AuthenticationApi(this.context);
    }
    cardInfoLookupApi() {
        return new api_1.CardInfoLookupApi(this.context);
    }
    cardVerificationApi() {
        return new api_1.CardVerificationApi(this.context);
    }
    currencyConversionApi() {
        return new api_1.CurrencyConversionApi(this.context);
    }
    fraudDetectApi() {
        return new api_1.FraudDetectApi(this.context);
    }
    orderApi() {
        return new api_1.OrderApi(this.context);
    }
    paymentSchedulesApi() {
        return new api_1.PaymentSchedulesApi(this.context);
    }
    paymentTokenApi() {
        return new api_1.PaymentTokenApi(this.context);
    }
    paymentUrlApi() {
        return new api_1.PaymentUrlApi(this.context);
    }
    paymentApi() {
        return new api_1.PaymentApi(this.context);
    }
}
exports.ClientFactory = ClientFactory;
