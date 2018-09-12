# FirstApiSdk.PrimaryTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionType** | [**TransactionType**](TransactionType.md) |  | 
**storeId** | **String** | An optional Outlet ID for clients that support multiple stores in the same app. | [optional] 
**clientTransactionId** | **String** | The unique client Transaction ID from the Request header, if supplied. | [optional] 
**amount** | [**Amount**](Amount.md) |  | 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | 
**order** | [**Order**](Order.md) |  | [optional] 
**basketItems** | [**[BasketItem]**](BasketItem.md) | Required for some payment methods (for example, Klarna) | [optional] 
**splitShipment** | [**SplitShipment**](SplitShipment.md) |  | [optional] 
**additionalDetails** | [**PrimaryTransactionAdditionalDetails**](PrimaryTransactionAdditionalDetails.md) |  | [optional] 
**industrySpecificExtensions** | [**IndustrySpecificExtensions**](IndustrySpecificExtensions.md) |  | [optional] 
**storedCredentials** | [**StoredCredential**](StoredCredential.md) |  | [optional] 


