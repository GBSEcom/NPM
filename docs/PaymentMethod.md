# FirstDataGateway.PaymentMethod

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of payment method. Note that PayPal can only process a &#39;Credit&#39;  primary transaction with Order.Billing.Contact.email being mandatory. PayPal secondary transactions (void/return/postauth) are processed the same as any other secondary transactions. | 
**paymentCard** | [**PaymentCard**](PaymentCard.md) |  | [optional] 
**sepa** | [**Sepa**](Sepa.md) |  | [optional] 
**payPal** | [**PayPal**](PayPal.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `PAYMENT_CARD` (value: `"PAYMENT_CARD"`)

* `SEPA` (value: `"SEPA"`)

* `PAYPAL` (value: `"PAYPAL"`)




