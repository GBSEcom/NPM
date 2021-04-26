# FirstApiSDK

FirstApiSdk - Typescript client for FirstApiSDK

Payment Gateway API Specification.
- API version: 21.2.0
- Package version: 1.11.0

## Installation

```shell
    npm install @firstdata/first-data-gateway --save --save-exact
```

## Reference Documentation

https://docs.firstdata.com/org/gateway/docs/api

## Getting Started

```typescript
import {AxiosPromise} from "axios";
import {
  Amount,
  PrimaryTransaction,
  PrimaryTransactionParams,
  PaymentMethod,
  TransactionType,
  Card,
  TransactionResponse,
  Context, IContext,
  ICredentials,
  IConfiguration,
  IClientFactory,
  IPaymentApi,
} from "@firstdata/first-data-gateway";

const getPaymentClient = (): IPaymentApi => {
  const credentials: ICredentials = {
    apiKey: "API_KEY_HERE",
    apiSecret: "API_SECRET_HERE",
  };

  const config: IConfiguration {
    basePath: "https://cert.api.firstdata.com/gateway",
    credentials,
  };

  const context: IContext = new Context(config);
  const factory: IClientFactory = context.factory;
  return factory.paymentApi();
};

const getApiParams = (): PrimaryTransactionParams => {
  const amount: Amount = {
    total: 27.00,

    // ISO 4217 currency code
    currency: "USD",
  };

  const card: Card = {
    cardholderName: "Example Name",
    cardNumber: "4242424242424242",
    expDate: "022022", // MMCCYY
    cvv: "123",
  };

  const paymentMethod: PaymentMethod = {
    methodType: PaymentMethod.MethodTypeEnum.Card,
    card,
  };

  const payload: PrimaryTransaction = {
    transactionType: TransactionType.SALE,
    amount,
    paymentMethod,
  };

  return {
    payload,
  };
};

const responsePromise: AxiosPromise<TransactionResponse> =
  getPaymentClient().primaryPaymentTransaction(getApiParams());

```


## Repo Organization

- src/openapi/: code auto-generated from api specification
- src/firstdata/: code manually created for simpler API
- src/firstdata/api/: wrapper classes for each api
- src/firstdata/context.ts: takes care of object instantiation while still providing flexibility
- src/firstdata/factory.ts: an instance of this class is exposed on Context instances and provides noarg methods to instantiate each api client
- src/firstdata/models.ts: exposes models both autogenerated and specific to the wrapper api classes


## API Methods/Endpoints

All URIs are relative to *https://cert.api.firstdata.com/gateway*

Interface | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*IAuthenticationApi* | **getAccessToken** | **POST** /v2/authentication/access-tokens | Generate an access token for user authentication.
*IInformationLookupApi* | **cardInfoLookup** | **POST** /v2/card-information | Card information lookUp
*IInformationLookupApi* | **lookUpAccount** | **POST** /v2/account-information | Account information lookUp
*IVerificationApi* | **verifyCard** | **POST** /v2/card-verification | Verify a payment card.
*IVerificationApi* | **verifyAccount** | **POST** /v2/account-verification | Verify a payment account.
*ICurrencyConversionApi* | **getExchangeRate** | **POST** /v2/exchange-rates | Generate dynamic currency conversion transactions
*IFraudDetectApi* | **scoreOnly** | **POST** /v2/fraud/score-only | Score a transaction for fraud.
*IFraudDetectApi* | **clientRegistration** | **POST** /v2/fraud/client-registration | Client Registration for fraud detect.
*IFraudDetectApi* | **paymentRegistration** | **POST** /v2/fraud/payment-registration | Payment Registration for fraud detect.
*IOrderApi* | **orderInquiry** | **GET** /v2/orders/{order-id} | Retrieve the state of an order
*IOrderApi* | **secondaryTransaction** | **POST** /v2/orders/{order-id} | Perform a return or postAuth on an already existing order.
*IPaymentApi* | **finalizeSecureTransaction** | **PATCH** /v2/payments/{transaction-id} | Update a 3DSecure or UnionPay payment and continue processing.
*IPaymentApi* | **secondaryTransaction** | **POST** /v2/payments/{transaction-id} | Perform a void, postAuth or return secondary transaction.
*IPaymentApi* | **primaryTransaction** | **POST** /v2/payments | Generate a primary transaction.
*IPaymentApi* | **transactionInquiry** | **GET** /v2/payments/{transaction-id} | Retrieve the state of a transaction.
*IPaymentSchedulesApi* | **cancelPaymentSchedule** | **DELETE** /v2/payment-schedules/{order-id} | Cancel a gateway payment schedule.
*IPaymentSchedulesApi* | **createPaymentSchedule** | **POST** /v2/payment-schedules | Use this to create a gateway payment schedule.
*IPaymentSchedulesApi* | **inquiryPaymentSchedule** | **GET** /v2/payment-schedules/{order-id} | View a gateway payment schedule.
*IPaymentSchedulesApi* | **updatePaymentSchedule** | **PATCH** /v2/payment-schedules/{order-id} | Update a gateway payment schedule.
*IPaymentTokenApi* | **createPaymentToken** | **POST** /v2/payment-tokens | Create a payment token from a payment card.
*IPaymentTokenApi* | **deletePaymentToken** | **DELETE** /v2/payment-tokens/{token-id} | Delete a payment token.
*IPaymentTokenApi* | **getPaymentTokenDetails** | **GET** /v2/payment-tokens/{token-id} | Get details of an existing token.
*IPaymentTokenApi* | **updatePaymentToken** | **PATCH** /v2/payment-tokens | Update payment token information.
*IPaymentUrlApi* | **createPaymentUrl** | **POST** /v2/payment-url | Create a payment URL.
*IPaymentUrlApi* | **deletePaymentUrl** | **DELETE** /v2/payment-url | Delete a payment URL.
*IPaymentUrlApi* | **paymentUrlDetail** | **GET** /v2/payment-url | Retrive the state of a payment URL.


## Code Overview

### Context and Configuration

```typescript
interface ICredentials {
  apiKey: string;
  apiSecret: string;
}

interface IConfiguration {
  basePath: string;
  credentials: ICredentials;
  storeId?: string;
  region?: string;
  axios?: AxiosInstance;
  factory?: IClientFactory;
}

interface IContext extends IConfiguration {
  readonly axios: AxiosInstance;
  readonly basePath: string;
  readonly credentials: ICredentials
  readonly factory: IClientFactory;
}

class Context implements IContext {
  public constructor(config: IConfiguration) { /*...*/ }
}
```

### IClientFactory

```typescript
interface IClientFactory {
  authenticationApi(): IAuthenticationApi;
  cardInfoLookupApi(): IInformationLookupApi;
  cardVerificationApi(): IVerificationApi;
  currencyConversionApi(): ICurrencyConversionApi;
  fraudDetectApi(): IFraudDetectApi;
  orderApi(): IOrderApi;
  paymentApi(): IPaymentApi;
  paymentSchedulesApi(): IPaymentSchedulesApi;
  paymentTokenApi(): IPaymentTokenApi;
  paymentUrlApi(): IPaymentUrlApi;
}
```

### IAuthenticationApi

```typescript
interface IAuthenticationApi {
  getAccessToken(params: GetAccessTokenParams): AxiosPromise<AccessTokenResponse>;
}
```

### IInformationLookupApi

```typescript
type CardInfoLookupParams = {
  region?: string;
  payload: CardInfoLookupRequest;
};

type AcctInfoLookupParams = {
  region?: string;
  payload: AccountInfoLookupRequest>
};

interface IInformationLookupApi {
  cardInfoLookup(params: CardInfoLookupParams): AxiosPromise<CardInfoLookupResponse>;
  acctInfoLookup(params: AcctInfoLookupParams): AxiosPromise<CardInfoLookupResponse>
}
```

### IVerificationApi

```typescript
type VerifyCardParams = {
  region?: string;
  payload: CardVerificationRequest;
};

type VerifyAccountParams = {
  region?: string;
  payload: AccountVerificationRequest;
}

interface IVerificationApi {
  verifyCard(params: VerifyCardParams): AxiosPromise<TransactionResponse>;
  verifyAcct(params: VerifyAcctParams): AxiosPromise<TransactionResponse>
}
```

### ICurrencyConversionApi

```typescript
type ExchangeRateParams = {
  region?: string;
  payload: ExchangeRateRequest;
};

interface ICurrencyConversionApi {
  getExchangeRate(params: ExchangeRateParams): AxiosPromise<ExchangeRateResponse>;
}
```

### IFraudDetectApi

```typescript
type ScoreOnlyParams = {
  region?: string;
  payload: ScoreOnlyRequest;
};

type ClientRegistrationParams = {
  region?: string;
  payload: ClientRegistration;
};

type PaymentRegistrationParams = {
  region?: string;
  payload: PaymentRegistration;
};

interface IFraudDetectApi {
  scoreOnly(params: ScoreOnlyParams): AxiosPromise<ScoreOnlyResponse>;
  fraudClientRegistrationPost(params: ClientRegistrationParams): AxiosPromise<FraudRegistrationResponse>;
  fraudPaymentRegistrationPost(params: PaymentRegistrationParams): AxiosPromise<FraudRegistrationResponse>;
}
```

### IOrderApi

```typescript
type OrderParams = {
  region?: string;
  storeId?: string;
  orderId: string;
};

type SecondaryTxOrderParams = OrderParams & {
  payload: SecondaryTransaction;
};

interface IOrderApi {
  orderInquiry(params: OrderParams): AxiosPromise<OrderResponse>;
  orderPostAuth(params: SecondaryTxOrderParams): AxiosPromise<TransactionResponse>;
  orderReturnTransaction(params: SecondaryTxOrderParams): AxiosPromise<TransactionResponse>;
}
```

### IPaymentSchedulesApi

```typescript
type ExistingPaymentScheduleParams = {
  region?: string;
  storeId?: string;
  orderId: string;
};

type CreatePaymentScheduleParams = {
  region?: string;
  payload: PaymentSchedulesRequest;
};

type UpdatePaymentScheduleParams =
  CreatePaymentScheduleParams & ExistingPaymentScheduleParams;

interface IPaymentSchedulesApi {
  cancelPaymentSchedule(params: ExistingPaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse>;
  createPaymentSchedule(params: CreatePaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse>;
  inquiryPaymentSchedule(params: ExistingPaymentScheduleParams): AxiosPromise<RecurringPaymentDetailsResponse>;
  updatePaymentSchedule(params: UpdatePaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse>;
}
```

### IPaymentTokenApi

```typescript
type PaymentTokenParams = {
  region?: string;
  authorization?: string;
};

type CreatePaymentTokenParams =
  PaymentTokenParams & {
    payload: PaymentTokenizationRequest;
  };

type DeletePaymentTokenParams =
  PaymentTokenParams & {
    tokenId: string;
    storeId?: string;
  };

  type GetPaymentTokenDetailsParams =
  PaymentTokenParams & {
    tokenId: string;
    storeId?: string;
  };

  type UpdatePaymentTokenParams =
  PaymentTokenParams & {
    payload: PaymentCardPaymentTokenUpdateRequest
  };

interface IPaymentTokenApi {
  createPaymentToken(params: CreatePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
  deletePaymentToken(params: DeletePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
  getPaymentTokenDetails(params: GetPaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
  updatePaymentToken(params: UpdatePaymentTokenParams): AxiosPromise<PaymentTokenUpdateResponse>;
}
```

### IPaymentUrlApi

```typescript
type CreatePaymentUrlParams = {
  region?: string;
  payload: PaymentUrlRequest;
};

type DeletePaymentUrlParams = {
  region?: string;
  storeId?: string;
  transactionId?: string;
  orderId?: string;
  paymentUrlId?: string;
  transactionTime?; string;
};

type PaymentUrlDetailParams = {
  region?: string;
  storeId?: string;
  fromDate: string;
  toDate: string;
  orderId?: string;
  merchantTransactionId?: string;
  status?: string;
};

interface IPaymentUrlApi {
  createPaymentUrl(params: CreatePaymentUrlParams): AxiosPromise<PaymentUrlResponse>;
  deletePaymentUrl(params: DeletePaymentUrlParams): AxiosPromise<PaymentUrlResponse>;
  paymentUrlDetail(params: PaymentUrlDetailParams): AxiosPromise<PaymentUrlDetailResponse>;
}
```

### IPaymentApi

```typescript
type PaymentParams = {
  region?: string;
  storeId?: string;
  transactionId: string;
};

type SecondaryTxPaymentParams =
  PaymentParams & {
    payload: SecondaryTransaction;
  };

type PrimaryTransactionParams = {
  region?: string;
  payload: PrimaryTransaction;
};

type FinalizeTransactionParams = {
  region?: string;
  transactionId: string;
  payload: AuthenticationResponseVerificationRequest;
};

interface IPaymentApi {
  finalizeSecureTransaction(params: FinalizeTransactionParams): AxiosPromise<TransactionResponse>;
  performPaymentPostAuthorisation(params: SecondaryTxPaymentParams): AxiosPromise<TransactionResponse>;
  primaryPaymentTransaction(params: PrimaryTransactionParams): AxiosPromise<TransactionResponse>;
  returnTransaction(params: SecondaryTxPaymentParams): AxiosPromise<TransactionResponse>;
  transactionInquiry(params: PaymentParams): AxiosPromise<TransactionResponse>;
  voidTransaction(params: PaymentParams): AxiosPromise<TransactionResponse>;
}
```
