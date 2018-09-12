# FirstApiSdk.PaymentCardAuthenticationResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of authentication result. For example, 3-D Secure. | [optional] 
**verificationResponse** | **String** | Card enrollment result from the Verification Response (VeRes) | [optional] 
**payerAuthenticationResponse** | **String** | Payer authentication result from Payment Authentication Response (PaRes) | [optional] 
**authenticationValue** | **String** | Cardholder Authentication Verification Value (CAVV) | [optional] 
**xid** | **String** | Authentication ID | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `3D` (value: `"SECURE_3D"`)




<a name="VerificationResponseEnum"></a>
## Enum: VerificationResponseEnum


* `Y` (value: `"Y"`)

* `N` (value: `"N"`)

* `U` (value: `"U"`)




<a name="PayerAuthenticationResponseEnum"></a>
## Enum: PayerAuthenticationResponseEnum


* `Y` (value: `"Y"`)

* `N` (value: `"N"`)

* `U` (value: `"U"`)

* `A` (value: `"A"`)




