# FirstDataGateway.PaymentUrlResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientRequestId** | **String** | Echoes back the value in the Request header for tracking. | 
**apiTraceId** | **String** | Request identifier in API, can be used to request logs from the support. | 
**requestStatus** | **String** | Request status. If it&#39;s anything other than &#39;SUCCESS&#39;, please refer to 400s HTTP error codes or decline. See Error object for details. | 
**orderId** | **String** | Client Order ID if supplied by client, otherwise the Order ID. | [optional] 
**paymentUrl** | **String** |  | [optional] 
**transactionId** | **String** | ID code from the transaction. | [optional] 


<a name="RequestStatusEnum"></a>
## Enum: RequestStatusEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `VALIDATION_FAILED` (value: `"VALIDATION_FAILED"`)

* `PROCESSING_FAILED` (value: `"PROCESSING_FAILED"`)

* `FAILURE` (value: `"FAILURE"`)




