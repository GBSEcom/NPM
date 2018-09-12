# FirstApiSdk.PaymentSchedulesResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientRequestId** | **String** | Echoes back the value in the Request header for tracking. | 
**apiTraceId** | **String** | Request identifier in API, can be used to request logs from the support. | 
**transactionStatus** | **String** | Result of requested operation. If it&#39;s anything other than &#39;SUCCESS&#39;, please refer to 400s HTTP error codes or decline. See Error object for details. | 
**orderId** | **String** | Client Order ID if supplied by client, otherwise the Order ID. | [optional] 


<a name="TransactionStatusEnum"></a>
## Enum: TransactionStatusEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `VALIDATION_FAILED` (value: `"VALIDATION_FAILED"`)

* `PROCESSING_FAILED` (value: `"PROCESSING_FAILED"`)

* `FAILURE` (value: `"FAILURE"`)




