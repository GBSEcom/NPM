# FirstDataGateway.AccessTokenResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **String** | Access Token for authentication | [optional] 
**clientRequestId** | **String** | Echoes back the value from the request header for tracking | [optional] 
**apiTraceId** | **String** | Request identifier in API. Use this to request logs from support. | [optional] 
**requestStatus** | **String** | The result of the requested operation. If this is anything other than &#39;SUCCESS&#39;, please refer to the 400s HTTP error codes. See ErrorResponse object for details. | [optional] 


<a name="RequestStatusEnum"></a>
## Enum: RequestStatusEnum


* `SUCCESS` (value: `"SUCCESS"`)




