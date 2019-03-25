import {IContext} from "./context";

import {
  AuthenticationApi, IAuthenticationApi,
  CardInfoLookupApi, ICardInfoLookupApi,
  CardVerificationApi, ICardVerificationApi,
  CurrencyConversionApi, ICurrencyConversionApi,
  FraudDetectApi, IFraudDetectApi,
  OrderApi, IOrderApi,
  PaymentSchedulesApi, IPaymentSchedulesApi,
  PaymentTokenApi, IPaymentTokenApi,
  PaymentUrlApi, IPaymentUrlApi,
  PaymentApi, IPaymentApi,
} from "./api";

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

class ClientFactory implements IClientFactory {
  public constructor(private readonly context: IContext) {}

  public authenticationApi(): IAuthenticationApi {
    return new AuthenticationApi(this.context);
  }

  public cardInfoLookupApi(): ICardInfoLookupApi {
    return new CardInfoLookupApi(this.context);
  }

  public cardVerificationApi(): ICardVerificationApi {
    return new CardVerificationApi(this.context);
  }

  public currencyConversionApi(): ICurrencyConversionApi {
    return new CurrencyConversionApi(this.context);
  }

  public fraudDetectApi(): IFraudDetectApi {
    return new FraudDetectApi(this.context);
  }

  public orderApi(): IOrderApi {
    return new OrderApi(this.context);
  }

  public paymentSchedulesApi(): IPaymentSchedulesApi {
    return new PaymentSchedulesApi(this.context);
  }

  public paymentTokenApi(): IPaymentTokenApi {
    return new PaymentTokenApi(this.context);
  }

  public paymentUrlApi(): IPaymentUrlApi {
    return new PaymentUrlApi(this.context);
  }

  public paymentApi(): IPaymentApi {
    return new PaymentApi(this.context);
  }
}

// EXPORTS
export {IClientFactory};
export {ClientFactory};

