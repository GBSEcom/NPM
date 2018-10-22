# FirstApiSdk.PrimaryTransactionAdditionalDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceNumber** | **String** | For FORCED_TICKET only. Stores the six digit reference number you have received as the result of a successful external authorization (e.g. by phone). The Gateway needs this number for uniquely mapping a ForcedTicket transaction to a previously performed external authorization.]  | [optional] 
**comments** | **String** |  | [optional] 
**dynamicMerchantName** | **String** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**purchaseOrderNumber** | **String** |  | [optional] 
**recurringType** | **String** | Valid values are &#39;FIRST&#39;, &#39;REPEAT&#39; and &#39;STANDING_INSTRUCTION&#39;. | [optional] 
**installmentOptions** | [**InstallmentOptions**](InstallmentOptions.md) |  | [optional] 


