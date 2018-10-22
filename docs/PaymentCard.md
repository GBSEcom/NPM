# FirstApiSdk.PaymentCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | Payment card number | 
**expiryDate** | [**Expiration**](Expiration.md) |  | [optional] 
**securityCode** | **String** | CVV | [optional] 
**cardFunction** | **String** |  | [optional] [default to &#39;CREDIT&#39;]
**cardholderName** | **String** |  | [optional] 
**authenticationRequest** | [**PaymentCardAuthenticationRequest**](PaymentCardAuthenticationRequest.md) |  | [optional] 
**authenticationResult** | [**PaymentCardAuthenticationResult**](PaymentCardAuthenticationResult.md) |  | [optional] 
**brand** | **String** | Optional, required only if using dual branded card | [optional] 


<a name="CardFunctionEnum"></a>
## Enum: CardFunctionEnum


* `CREDIT` (value: `"CREDIT"`)

* `DEBIT` (value: `"DEBIT"`)




