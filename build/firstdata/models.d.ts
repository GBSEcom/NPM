export { ResponseType, TransactionOrigin, TransactionType, AVSResponse, AccessTokenResponse, AdditionalAmountRate, AdditionalTransactionDetails, Address, Airline, AirlineAncillaryServiceCategory, AirlineTravelRoute, AliPay, Amount, AmountComponents, AuthenticationRequest, AuthenticationResponseVerification, AuthenticationResponseVerificationRequest, BasicResponse, BasketItem, Billing, BillingAddress, BillingAddressPhone, CarRental, CarRentalExtraCharges, Card, CardInfo, CardInfoLookupRequest, CardInfoLookupResponse, CardVerificationRequest, CardVerificationsTransaction, ChinaDomestic, ClientLocale, Contact, Customer, CustomerAddress, CustomerAddressPhone, Dcc, Device, DeviceNetworks, Document, ErrorDetails, ErrorResponse, ExchangeRateRequest, ExchangeRateResponse, Expiration, FraudOrder, FraudOrderItems, FraudOrderShipToAddress, Frequency, IndustrySpecificExtensions, InstallmentOptions, Lodging, LodgingExtraCharges, Loyalty, Merchant, MerchantLocation, MerchantLocationMerchantAddress, ModelError, Order, OrderErrorResponse, OrderResponse, PayPal, Payment, PaymentCard, PaymentCardAuthenticationResult, PaymentFacilitator, PaymentIssuerResponse, PaymentMethod, PaymentSchedulesErrorResponse, PaymentSchedulesRequest, PaymentSchedulesResponse, PaymentTokenization, PaymentTokenizationErrorResponse, PaymentTokenizationRequest, PaymentTokenizationResponse, PaymentUrlErrorResponse, PaymentUrlRequest, PaymentUrlResponse, PaymentVerification3ds, PaymentVerificationAvs, PaymentVerificationCvv, PrimaryTransaction, PrimaryTransactionAdditionalDetails, ProcessorData, PurchaseCards, PurchaseCardsLevel2, PurchaseCardsLevel3, PurchaseCardsLevel3LineItems, RecurringPaymentDetails, RecurringPaymentDetailsResponse, ReferencedOrder, RequestArgs, ScoreOnlyRequest, ScoreOnlyResponse, ScoreOnlyResponseFraudScore, ScoreOnlyResponseFraudScoreExplanations, SecondaryTransaction, SecondaryTransactionAdditionalDetails, Secure3dResponse, Sepa, SepaMandate, Shipping, SoftDescriptor, SplitShipment, StoredCredential, SubMerchantData, Transaction, TransactionErrorResponse, TransactionResponse, } from "../openapi/api";
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type ApiField<T, P = any> = T extends "region" ? {
    region?: string;
} : T extends "authorization" ? {
    authorization?: string;
} : T extends "storeId" ? {
    storeId?: string;
} : T extends "orderId" ? {
    orderId: string;
} : T extends "transactionId" ? {
    transactionId: string;
} : T extends "tokenId" ? {
    tokenId: string;
} : T extends "payload" ? {
    payload: P;
} : unknown;
