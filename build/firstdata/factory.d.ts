import { IContext } from "./context";
import { IAuthenticationApi, IInformationLookupApi, IVerificationApi, ICurrencyConversionApi, IFraudDetectApi, IOrderApi, IPaymentSchedulesApi, IPaymentTokenApi, IPaymentUrlApi, IPaymentApi } from "./api";
interface IClientFactory {
    authenticationApi(): IAuthenticationApi;
    informationLookupApi(): IInformationLookupApi;
    verificationApi(): IVerificationApi;
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
    informationLookupApi(): IInformationLookupApi;
    verificationApi(): IVerificationApi;
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
