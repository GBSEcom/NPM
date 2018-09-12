# FirstApiSdk.AuthenticationApi

All URIs are relative to *https://cert.api.firstdata.com/gateway*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AuthenticationAccessTokensPost**](AuthenticationApi.md#v1AuthenticationAccessTokensPost) | **POST** /v1/authentication/access-tokens | Generate an access token for user authentication


<a name="v1AuthenticationAccessTokensPost"></a>
# **v1AuthenticationAccessTokensPost**
> AccessTokenResponse v1AuthenticationAccessTokensPost(contentType, clientRequestId, apiKey, timestamp, messageSignature, )

Generate an access token for user authentication

This is the access token generation call for authorizing subsequent financial transactions. A valid access token is required for web client requests. 

### Example
```javascript
import FirstApiSdk from 'FirstApiSDK';

let apiInstance = new FirstApiSdk.AuthenticationApi();

let contentType = "application/json"; // String | content type

let clientRequestId = "clientRequestId_example"; // String | A client-generated ID for request tracking and signature creation, unique per request.  This is also used for idempotency control. We recommend 128-bit UUID format.

let apiKey = "apiKey_example"; // String | 

let timestamp = 789; // Number | Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins).

let messageSignature = "messageSignature_example"; // String | Used to ensure the request has not been tampered with during transmission. The Message-Signature is the Base64 encoded HMAC hash (SHA256  algorithm with the API Secret as the key.) For more information, refer to the supporting documentation on the Developer Portal.

apiInstance.v1AuthenticationAccessTokensPost(contentType, clientRequestId, apiKey, timestamp, messageSignature, ).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**| content type | [default to application/json]
 **clientRequestId** | **String**| A client-generated ID for request tracking and signature creation, unique per request.  This is also used for idempotency control. We recommend 128-bit UUID format. | 
 **apiKey** | **String**|  | 
 **timestamp** | **Number**| Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins). | 
 **messageSignature** | **String**| Used to ensure the request has not been tampered with during transmission. The Message-Signature is the Base64 encoded HMAC hash (SHA256  algorithm with the API Secret as the key.) For more information, refer to the supporting documentation on the Developer Portal. | 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

