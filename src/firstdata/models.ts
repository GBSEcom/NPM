import {SecondaryTransaction} from "../openapi/api";

export {
  // top level enums
  ResponseType,
  TransactionOrigin,
  TransactionType,

  // interfaces
  AVSResponse,
  AccessTokenResponse,
  AdditionalAmountRate,
  AdditionalTransactionDetails,
  Address,
  Airline,
  AirlineAncillaryServiceCategory,
  AirlineTravelRoute,
  AliPay,
  Amount,
  AmountComponents,
  AuthenticationRequest,
  AuthenticationResponseVerification,
  AuthenticationResponseVerificationRequest,
  BasicResponse,
  BasketItem,
  Billing,
  BillingAddress,
  BillingAddressPhone,
  CarRental,
  CarRentalExtraCharges,
  Card,
  CardInfo,
  CardInfoLookupRequest,
  CardInfoLookupResponse,
  CardVerificationRequest,
  CardVerificationsTransaction,
  ChinaDomestic,
  ClientLocale,
  Contact,
  Customer,
  CustomerAddress,
  CustomerAddressPhone,
  Dcc,
  Device,
  DeviceNetworks,
  Document,
  ErrorDetails,
  ErrorResponse,
  ExchangeRateRequest,
  ExchangeRateResponse,
  Expiration,
  FraudOrder,
  FraudOrderItems,
  FraudOrderShipToAddress,
  Frequency,
  IndustrySpecificExtensions,
  InstallmentOptions,
  Lodging,
  LodgingExtraCharges,
  Loyalty,
  Merchant,
  MerchantLocation,
  MerchantLocationMerchantAddress,
  ModelError,
  Order,
  OrderErrorResponse,
  OrderResponse,
  PayPal,
  Payment,
  PaymentCard,
  PaymentCardAuthenticationResult,
  PaymentFacilitator,
  PaymentIssuerResponse,
  PaymentMethod,
  PaymentSchedulesErrorResponse,
  PaymentSchedulesRequest,
  PaymentSchedulesResponse,
  PaymentTokenization,
  PaymentTokenizationErrorResponse,
  PaymentTokenizationRequest,
  PaymentTokenizationResponse,
  PaymentUrlErrorResponse,
  PaymentUrlRequest,
  PaymentUrlResponse,
  PaymentVerification3ds,
  PaymentVerificationAvs,
  PaymentVerificationCvv,
  PrimaryTransaction,
  PrimaryTransactionAdditionalDetails,
  ProcessorData,
  PurchaseCards,
  PurchaseCardsLevel2,
  PurchaseCardsLevel3,
  PurchaseCardsLevel3LineItems,
  RecurringPaymentDetails,
  RecurringPaymentDetailsResponse,
  ReferencedOrder,
  RequestArgs,
  ScoreOnlyRequest,
  ScoreOnlyResponse,
  ScoreOnlyResponseFraudScore,
  ScoreOnlyResponseFraudScoreExplanations,
  SecondaryTransaction,
  SecondaryTransactionAdditionalDetails,
  Secure3dResponse,
  Sepa,
  SepaMandate,
  Shipping,
  SoftDescriptor,
  SplitShipment,
  StoredCredential,
  SubMerchantData,
  Transaction,
  TransactionErrorResponse,
  TransactionResponse,
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
  T extends "payload" ? {
    payload: P;
  } : unknown;

