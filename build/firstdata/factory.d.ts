import { IContext } from "./context";
import { IAuthenticationApi, ICardInfoLookupApi, ICardVerificationApi, ICurrencyConversionApi, IFraudDetectApi, IOrderApi, IPaymentSchedulesApi, IPaymentTokenApi, IPaymentUrlApi, IPaymentApi } from "./api";
interface IClientFactory {
    authenticationApi(): IAuthenticationApi;
    cardInfoLookupApi(): ICardInfoLookupApi;
    cardVerificationApi(): ICardVerificationApi;
    currencyConversionApi(): ICurrencyConversionApi;
    fraudDetectApi(): IFraudDetectApi;
    orderApi(): IOrderApi;
    paymentApi(): IPaymentApi;
    paymentSchedulesApi(): IPaymentSchedulesApi;
    paymentTokenApi(): IPaymentTokenApi;
    paymentUrlApi(): IPaymentUrlApi;
}
declare class ClientFactory implements IClientFactory {
    private readonly context;
    constructor(context: IContext);
    authenticationApi(): IAuthenticationApi;
    cardInfoLookupApi(): ICardInfoLookupApi;
    cardVerificationApi(): ICardVerificationApi;
    currencyConversionApi(): ICurrencyConversionApi;
    fraudDetectApi(): IFraudDetectApi;
    orderApi(): IOrderApi;
    paymentSchedulesApi(): IPaymentSchedulesApi;
    paymentTokenApi(): IPaymentTokenApi;
    paymentUrlApi(): IPaymentUrlApi;
    paymentApi(): IPaymentApi;
}
export { IClientFactory };
export { ClientFactory };
