export { AccessTokenRequest, AccessTokenResponse, AccountInfoLookupRequest, AccountUpdaterResponse, AccountVerificationRequest, AchCreditTransaction, AchPostAuthTransaction, AchPreAuthTransaction, AchRecurringType, AchResponse, AchReturnTransaction, AchSaleTransaction, AchVoidTransaction, ACSResponse, AdditionalAmountRate, AdditionalDetails, AdditionalTransactionDetails, Address, Airline, AirlineAncillaryServiceCategory, AirlineTravelRoute, AliPay, AliPayPaymentMethod, AliPaySaleTransaction, Amount, AmountComponents, AuthenticationRequest, AuthenticationResult, AuthenticationUpdateRequest, AVSResponse, Background, BackgroundColor, BancontactQR, BasicResponse, Billing, BillingAddress, BlockCard, BlockDomain, BlockedCardNumber, BlockedItems, BlockIPAddress, BlockName, Body, Borders, BrandingStyleConfigurationRequest, BrandingStyleConfigurationResponse, BrandingStyleConfigurationResult, Button, Card, CardFunction, CardInfo, CardInfoLookupRequest, CardInfoLookupResponse, CardVerificationRequest, CarRental, CarRentalExtraCharges, ChinaDomestic, ChinaDomesticPaymentMethod, ChinaPnRSaleTransaction, ClassicMode, ClearingDetails, ClearingElement, ClientLocale, ClientRegistration, CombinedMode, ConnectMode, Contact, Content, CountryProfile, CreatePaymentToken, CurrencyConversion, Customer, CustomerAddress, Dcc, DCCExchangeRateRequest, DecryptedApplePay, DecryptedApplePayWalletPaymentMethod, DecryptedGooglePay, DecryptedSamsungPay, DeleteBrandingStyleConfigurationResponse, Device, Disbursement, DisbursementTransactionType, Document, DynamicPricing, DynamicPricingExchangeRateRequest, EncryptedApplePay, EncryptedApplePayHeader, EncryptedApplePayWalletPaymentMethod, EncryptedGooglePay, EncryptedGooglePayData, EncryptedGooglePayWalletPaymentMethod, EncryptedSamsungPay, EncryptedSamsungPayWalletPaymentMethod, EndpointResponse, ErrorDetails, ErrorMessage, ErrorResponse, ExchangeRateRequest, ExchangeRateResponse, Expiration, FontFace, FontProperties, FontWeight, Footer, FraudAddress, FraudOrder, FraudOrderItems, FraudRegistration, FraudRegistrationCard, FraudRegistrationDevice, FraudRegistrationDeviceItems, FraudRegistrationError, FraudRegistrationResponse, FraudScore, FraudSettings, FraudSettingsResponse, Frequency, FundingTransactionType, Header, Hover, IdInfo, IndustrySpecificExtensions, InitiateClearingResponse, InstallmentOptions, IssuerResponse, Items, Location, LockoutTime, Lodging, LodgingExtraCharges, Logo, Loyalty, MasterpassWalletPaymentMethod, MaximumPurchaseAmount, Mcc6012, Merchant, Method, Mobile, MobileHeaderArea, Order, OrderErrorResponse, OrderResponse, Payment, PaymentCard, PaymentCardCreditTransaction, PaymentCardDisbursementTransaction, PaymentCardForcedTicketTransaction, PaymentCardInfoLookupRequest, PaymentCardPayerAuthTransaction, PaymentCardPaymentMethod, PaymentCardPaymentTokenizationRequest, PaymentCardPaymentTokenUpdateRequest, PaymentCardPreAuthTransaction, PaymentCardSaleTransaction, PaymentCardVerificationRequest, PaymentDevice, PaymentDeviceCreditTransaction, PaymentDeviceDisbursementTransaction, PaymentDevicePaymentMethod, PaymentDevicePaymentTokenizationRequest, PaymentDevicePreAuthTransaction, PaymentDeviceSaleTransaction, PaymentFacilitator, PaymentMethodDetails, PaymentMethodPaymentSchedulesRequest, PaymentMethodType, PaymentRegistration, PaymentSchedulesErrorResponse, PaymentSchedulesRequest, PaymentSchedulesResponse, PaymentTokenCreditTransaction, PaymentTokenDetails, PaymentTokenDisbursementTransaction, PaymentTokenInfoLookupRequest, PaymentTokenizationErrorResponse, PaymentTokenizationRequest, PaymentTokenizationResponse, PaymentTokenPaymentMethod, PaymentTokenPreAuthTransaction, PaymentTokenSaleTransaction, PaymentTokenUpdateResponse, PaymentTokenVerificationRequest, PaymentUrlDetail, PaymentUrlDetailResponse, PaymentUrlErrorResponse, PaymentUrlRequest, PaymentUrlResponse, PaymentUrlStatus, PayPal, PaypalCreditTransaction, PayPalPaymentMethod, Phone, PostAuthTransaction, PrimaryTransaction, ProcessorData, Properties, PurchaseCards, PurchaseCardsLevel2, PurchaseCardsLevel3, PurchaseCardsLevel3LineItems, ReceiverInfo, RecurringPaymentDetails, RecurringPaymentDetailsResponse, ReferencedOrderPaymentSchedulesRequest, ReferencedOrderPaymentTokenizationRequest, RegistrationMethod, ResponseAmountComponents, ResponseType, ReturnTransaction, ScoreOnlyRequest, ScoreOnlyResponse, ScoreOnlyResponseFraudScore, ScoreOnlyResponseFraudScoreExplanations, SecondaryTransaction, Secure3D10AuthenticationRequest, Secure3D10AuthenticationResult, Secure3D10AuthenticationUpdateRequest, Secure3D21AuthenticationRequest, Secure3D21AuthenticationResult, Secure3D21AuthenticationUpdateRequest, Secure3DAuthenticationResponse, Secure3DAuthenticationResponseParams, Secure3DAuthenticationResponseSecure3dMethod, Secure3dResponse, SenderInfo, Sepa, SepaMandate, SepaPaymentMethod, SepaSaleTransaction, SharedSecretConfigurationRequest, SharedSecretConfigurationResponse, Shipping, ShipToAddress, SoftDescriptor, SplitShipment, StoreBrandingStyleConfiguration, StoredCredential, StoreEmailSettings, StoreEmailSettingsResult, StoreFraudSettings, StoreFraudSettingsResult, StoreUrlConfiguration, StoreUrlConfigurationRequest, StoreUrlConfigurationResponse, StoreUrlConfigurationResult, SubMerchantData, SubMerchantSplit, TeleCheckAchPaymentMethod, TeleCheckAchPaymentMethodAchBillTo, TeleCheckCBPPaymentMethod, TeleCheckICAPaymentMethod, Text, Title, TokenIdentifier, TopBar, TransactionErrorResponse, TransactionOrigin, TransactionResponse, TransactionType, UnionPayAuthenticationRequest, UnionPayAuthenticationUpdateRequest, UpdateEmailSettingsRequest, UpdateEmailSettingsResponse, UpdateFraudSettingsRequest, UpdateFraudSettingsResponse, UpdatePaymentToken, UsePaymentToken, Verification3ds, VerificationAvs, VerificationCvv, VoidPreAuthTransactions, VoidTransaction, WalletPaymentMethod, WalletPreAuthTransaction, WalletSaleTransaction, } from "../openapi/api";
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
} : T extends "paymentUrlId" ? {
    paymentUrlId: string;
} : T extends "transactionTime" ? {
    transactionTime: string;
} : T extends "fromDate" ? {
    fromDate: string;
} : T extends "toDate" ? {
    toDate: string;
} : T extends "merchantTransactionId" ? {
    merchantTransactionId: string;
} : T extends "status" ? {
    status: string;
} : T extends "payload" ? {
    payload: P;
} : unknown;
