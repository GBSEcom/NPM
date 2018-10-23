# FirstDataGateway.PaymentSchedulesRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storeId** | **String** | Store ID number. | [optional] 
**referenceOrderId** | **String** | Order ID used to create recurring payment from existing transaction. | [optional] 
**startDate** | **Date** | Date of mandate signature. | [optional] 
**numberOfPayments** | **Number** | Number of times the recurring payment will process. | [optional] 
**maximumFailures** | **Number** | Number of failures that can be encountered before re-tries cease. | [optional] 
**invoiceNumber** | **String** | Invoice number. | [optional] 
**poNumber** | **String** | Purchase order number. | [optional] 
**transactionOrigin** | **String** | The source of the transaction. The possible values are ECI (if the order was received via email or Internet), MOTO (mail order / telephone order) and RETAIL (face to face). | [optional] 
**dynamicMerchantName** | **String** | Dynamic merchant name for the cardholder‘s statement. | [optional] 
**frequency** | [**Frequency**](Frequency.md) |  | [optional] 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**amount** | [**Amount**](Amount.md) |  | [optional] 
**clientLocale** | [**ClientLocale**](ClientLocale.md) |  | [optional] 
**orderId** | **String** | Client Order ID if supplied by client. | [optional] 


<a name="TransactionOriginEnum"></a>
## Enum: TransactionOriginEnum


* `ECI` (value: `"ECI"`)

* `MOTO` (value: `"MOTO"`)

* `RETAIL` (value: `"RETAIL"`)




