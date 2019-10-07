export {
  AVSResponse,
  AccessTokenResponse,
  AccountUpdaterResponse,
  AdditionalAmountRate,
  AdditionalDetails,
  AdditionalTransactionDetails,
  Address,
  Airline,
  AirlineAncillaryServiceCategory,
  AirlineTravelRoute,
  AliPay,
  AliPayPaymentMethod,
  AliPaySaleTransaction,
  Amount,
  AmountComponents,
  Authentication,
  AuthenticationRedirect,
  AuthenticationRedirectParams,
  AuthenticationVerificationRequest,
  BasicResponse,
  Billing,
  BillingAddress,
  CarRental,
  CarRentalExtraCharges,
  Card,
  CardFunction,
  CardInfo,
  CardInfoLookupRequest,
  CardInfoLookupResponse,
  CardVerificationRequest,
  ChinaDomestic,
  ChinaDomesticPaymentMethod,
  ChinaPnRSaleTransaction,
  ClientLocale,
  ClientRegistration,
  Contact,
  CreatePaymentToken,
  CurrencyConversion,
  Customer,
  CustomerAddress,
  DCCExchangeRateRequest,
  Dcc,
  Device,
  Disbursement,
  DisbursementTransactionType,
  Document,
  DynamicPricing,
  DynamicPricingExchangeRateRequest,
  EncryptedApplePay,
  EncryptedApplePayHeader,
  EncryptedApplePayWalletPaymentMethod,
  EncryptedGooglePay,
  EncryptedGooglePayData,
  EncryptedGooglePayWalletPaymentMethod,
  EncryptedSamsungPay,
  EncryptedSamsungPayWalletPaymentMethod,
  ErrorDetails,
  ErrorMessage,
  ErrorResponse,
  ExchangeRateRequest,
  ExchangeRateResponse,
  Expiration,
  FraudAddress,
  FraudOrder,
  FraudOrderItems,
  FraudRegistration,
  FraudRegistrationCard,
  FraudRegistrationDevice,
  FraudRegistrationDeviceItems,
  FraudRegistrationError,
  FraudRegistrationResponse,
  FraudScore,
  Frequency,
  FundingTransactionType,
  IndustrySpecificExtensions,
  InstallmentOptions,
  Items,
  Location,
  Lodging,
  LodgingExtraCharges,
  Loyalty,
  Merchant,
  Method,
  Order,
  OrderErrorResponse,
  OrderResponse,
  PayPal,
  PayPalPaymentMethod,
  Payment,
  PaymentCard,
  PaymentCardCreditTransaction,
  PaymentCardDisbursementTransaction,
  PaymentCardForcedTicketTransaction,
  PaymentCardPayerAuthTransaction,
  PaymentCardPaymentMethod,
  PaymentCardPaymentTokenizationRequest,
  PaymentCardPreAuthTransaction,
  PaymentCardSaleTransaction,
  PaymentDevice,
  PaymentDeviceCreditTransaction,
  PaymentDeviceDisbursementTransaction,
  PaymentDevicePaymentMethod,
  PaymentDevicePreAuthTransaction,
  PaymentDeviceSaleTransaction,
  PaymentFacilitator,
  PaymentMethod,
  PaymentMethodDetails,
  PaymentMethodPaymentSchedulesRequest,
  PaymentMethodType,
  PaymentRegistration,
  //PaymentPayMethod,
  PaymentSchedulesErrorResponse,
  PaymentSchedulesRequest,
  PaymentSchedulesResponse,
  PaymentTokenCreditTransaction,
  PaymentTokenDetails,
  PaymentTokenDisbursementTransaction,
  PaymentTokenPaymentMethod,
  PaymentTokenPreAuthTransaction,
  PaymentTokenSaleTransaction,
  PaymentTokenizationErrorResponse,
  PaymentTokenizationRequest,
  PaymentTokenizationResponse,
  PaymentUrlDetail,
  PaymentUrlDetailResponse,
  PaymentUrlErrorResponse,
  PaymentUrlRequest,
  PaymentUrlResponse,
  PaymentUrlStatus,
  PaypalCreditTransaction,
  Phone,
  PostAuthTransaction,
  PrimaryTransaction,
  ProcessorData,
  PurchaseCards,
  PurchaseCardsLevel2,
  PurchaseCardsLevel3,
  PurchaseCardsLevel3LineItems,
  ReceiverInfo,
  RecurringPaymentDetails,
  RecurringPaymentDetailsResponse,
  ReferencedOrderPaymentSchedulesRequest,
  ReferencedOrderPaymentTokenizationRequest,
  RegistrationMethod,
  ResponseAmountComponents,
  ResponseType,
  ReturnTransaction,
  ScoreOnlyRequest,
  ScoreOnlyResponse,
  ScoreOnlyResponseFraudScore,
  ScoreOnlyResponseFraudScoreExplanations,
  SecondaryTransaction,
  Secure3D10AuthenticationResult,
  Secure3D21AuthenticationResult,
  Secure3dAuthenticationRequest,
  Secure3dAuthenticationVerificationRequest,
  Secure3dResponse,
  SenderInfo,
  Sepa,
  SepaMandate,
  SepaPaymentMethod,
  SepaSaleTransaction,
  Shipping,
  ShipToAddress,
  SoftDescriptor,
  SplitShipment,
  StoredCredential,
  SubMerchantData,
  SubMerchantSplit,
  TransactionErrorResponse,
  TransactionOrigin,
  TransactionResponse,
  TransactionType,
  UnionPayAuthenticationRequest,
  UnionPayAuthenticationVerificationRequest,
  UsePaymentToken,
  Verification3ds,
  VerificationAvs,
  VerificationCvv,
  VoidTransaction,
  WalletPaymentMethod,
  WalletPreAuthTransaction,
  WalletSaleTransaction,
} from "../openapi/api";

// Wrapper specific models

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ApiField<T, P = any> =
  T extends "region" ? {
    // The region where client wants to process the transaction
    region?: string;
  } :
  T extends "authorization" ? {
    // The access token previously generated with the access-tokens call. Use the format &#39;Bearer {access-token}&#39;.
    authorization?: string;
  } :
  T extends "storeId" ? {
    // An optional outlet ID for clients that support multiple stores in the same developer app
    storeId?: string;
  } :
  T extends "orderId" ? {
    // Gateway order identifier as returned in the parameter orderId
    orderId: string;
  } :
  T extends "transactionId" ? {
    // Gateway transaction identifier as returned in the parameter ipgTransactionId
    transactionId: string;
  } :
  T extends "tokenId" ? {
    // Identifies a payment token
    tokenId: string;
  } :
  T extends "paymentUrlId" ? {
    //Identifies Payment URL
    paymentUrlId: string;
  } :
  T extends "transactionTime" ? {
    //Identifies the time of the transaction
    transactionTime: string;
  } :
  T extends "fromDate" ? {
    //Identifies the start date of the URL
    fromDate: string;
  } :
  T extends "toDate" ? {
    //Identifies the end date of the URL
    toDate: string;
  } :
  T extends "merchantTransactionId" ? {
    //Identifies the merchantTransactionId of the URL
    merchantTransactionId: string;
  } :
  T extends "status" ? {
    //Identifies the status of the URL
    status: string;
  } :
  T extends "payload" ? {
    payload: P;
  } : unknown;

