# FirstApiSdk.PaymentApi

All URIs are relative to *https://cert.api.firstdata.com/gateway*

Method | HTTP request | Description
------------- | ------------- | -------------
[**performPaymentPostAuthorisation**](PaymentApi.md#performPaymentPostAuthorisation) | **POST** /v1/payments/{transaction-id}/postauth | Use this to capture/complete a transaction. Partial postauths are allowed.
[**primaryPaymentTransaction**](PaymentApi.md#primaryPaymentTransaction) | **POST** /v1/payments | Generate a primary transaction
[**returnTransaction**](PaymentApi.md#returnTransaction) | **POST** /v1/payments/{transaction-id}/return | Return/refund a transaction.
[**transactionInquiry**](PaymentApi.md#transactionInquiry) | **GET** /v1/payments/{transaction-id} | Retrieve the state of a transaction
[**voidTransaction**](PaymentApi.md#voidTransaction) | **POST** /v1/payments/{transaction-id}/void | Reverse a previous action on an existing transaction


<a name="performPaymentPostAuthorisation"></a>
# **performPaymentPostAuthorisation**
> TransactionResponse performPaymentPostAuthorisation(contentType, clientRequestId, apiKey, timestamp, messageSignature, transactionId, payload, opts)

Use this to capture/complete a transaction. Partial postauths are allowed.

This can be used for postauth and partial postauths.

### Example
```javascript
import FirstApiSdk from 'FirstApiSDK';

let apiInstance = new FirstApiSdk.PaymentApi();

let contentType = "application/json"; // String | content type

let clientRequestId = "clientRequestId_example"; // String | A client-generated ID for request tracking and signature creation, unique per request.  This is also used for idempotency control. We recommend 128-bit UUID format.

let apiKey = "apiKey_example"; // String | 

let timestamp = 789; // Number | Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins).

let messageSignature = "messageSignature_example"; // String | Used to ensure the request has not been tampered with during transmission. The Message-Signature is the Base64 encoded HMAC hash (SHA256  algorithm with the API Secret as the key.) For more information, refer to the supporting documentation on the Developer Portal.

let transactionId = "transactionId_example"; // String | Gateway transaction identifier as returned in the parameter ipgTransactionId

let payload = new FirstApiSdk.SecondaryTransaction(); // SecondaryTransaction | 

let opts = { 
  'storeId': "storeId_example" // String | an optional outlet id for clients that support multiple store in the same developer app
};
apiInstance.performPaymentPostAuthorisation(contentType, clientRequestId, apiKey, timestamp, messageSignature, transactionId, payload, opts).then((data) => {
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
 **transactionId** | **String**| Gateway transaction identifier as returned in the parameter ipgTransactionId | 
 **payload** | [**SecondaryTransaction**](SecondaryTransaction.md)|  | 
 **storeId** | **String**| an optional outlet id for clients that support multiple store in the same developer app | [optional] 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="primaryPaymentTransaction"></a>
# **primaryPaymentTransaction**
> TransactionResponse primaryPaymentTransaction(contentType, clientRequestId, apiKey, timestamp, messageSignature, payload)

Generate a primary transaction

Use this to originate a financial transaction, like a sale, preauthorization, or credit.

### Example
```javascript
import FirstApiSdk from 'FirstApiSDK';

let apiInstance = new FirstApiSdk.PaymentApi();

let contentType = "application/json"; // String | content type

let clientRequestId = "clientRequestId_example"; // String | A client-generated ID for request tracking and signature creation, unique per request.  This is also used for idempotency control. We recommend 128-bit UUID format.

let apiKey = "apiKey_example"; // String | 

let timestamp = 789; // Number | Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins).

let messageSignature = "messageSignature_example"; // String | Used to ensure the request has not been tampered with during transmission. The Message-Signature is the Base64 encoded HMAC hash (SHA256  algorithm with the API Secret as the key.) For more information, refer to the supporting documentation on the Developer Portal.

let payload = new FirstApiSdk.PrimaryTransaction(); // PrimaryTransaction | Primary Transaction request

apiInstance.primaryPaymentTransaction(contentType, clientRequestId, apiKey, timestamp, messageSignature, payload).then((data) => {
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
 **payload** | [**PrimaryTransaction**](PrimaryTransaction.md)| Primary Transaction request | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="returnTransaction"></a>
# **returnTransaction**
> TransactionResponse returnTransaction(contentType, clientRequestId, apiKey, timestamp, messageSignature, transactionId, payload, opts)

Return/refund a transaction.

Use this to return/refund an existing transaction.  Partial returns are allowed.

### Example
```javascript
import FirstApiSdk from 'FirstApiSDK';

let apiInstance = new FirstApiSdk.PaymentApi();

let contentType = "application/json"; // String | content type

let clientRequestId = "clientRequestId_example"; // String | A client-generated ID for request tracking and signature creation, unique per request.  This is also used for idempotency control. We recommend 128-bit UUID format.

let apiKey = "apiKey_example"; // String | 

let timestamp = 789; // Number | Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins).

let messageSignature = "messageSignature_example"; // String | Used to ensure the request has not been tampered with during transmission. The Message-Signature is the Base64 encoded HMAC hash (SHA256  algorithm with the API Secret as the key.) For more information, refer to the supporting documentation on the Developer Portal.

let transactionId = "transactionId_example"; // String | Gateway transaction identifier as returned in the parameter ipgTransactionId

let payload = new FirstApiSdk.SecondaryTransaction(); // SecondaryTransaction | 

let opts = { 
  'storeId': "storeId_example" // String | an optional outlet id for clients that support multiple store in the same developer app
};
apiInstance.returnTransaction(contentType, clientRequestId, apiKey, timestamp, messageSignature, transactionId, payload, opts).then((data) => {
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
 **transactionId** | **String**| Gateway transaction identifier as returned in the parameter ipgTransactionId | 
 **payload** | [**SecondaryTransaction**](SecondaryTransaction.md)|  | 
 **storeId** | **String**| an optional outlet id for clients that support multiple store in the same developer app | [optional] 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transactionInquiry"></a>
# **transactionInquiry**
> TransactionResponse transactionInquiry(contentType, clientRequestId, apiKey, timestamp, messageSignature, transactionId, , opts)

Retrieve the state of a transaction

Use this query to get the current state of an existing transaction.

### Example
```javascript
import FirstApiSdk from 'FirstApiSDK';

let apiInstance = new FirstApiSdk.PaymentApi();

let contentType = "application/json"; // String | content type

let clientRequestId = "clientRequestId_example"; // String | A client-generated ID for request tracking and signature creation, unique per request.  This is also used for idempotency control. We recommend 128-bit UUID format.

let apiKey = "apiKey_example"; // String | 

let timestamp = 789; // Number | Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins).

let messageSignature = "messageSignature_example"; // String | Used to ensure the request has not been tampered with during transmission. The Message-Signature is the Base64 encoded HMAC hash (SHA256  algorithm with the API Secret as the key.) For more information, refer to the supporting documentation on the Developer Portal.

let transactionId = "transactionId_example"; // String | Gateway transaction identifier as returned in the parameter ipgTransactionId

let opts = { 
  'storeId': "storeId_example" // String | an optional outlet id for clients that support multiple store in the same developer app
};
apiInstance.transactionInquiry(contentType, clientRequestId, apiKey, timestamp, messageSignature, transactionId, , opts).then((data) => {
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
 **transactionId** | **String**| Gateway transaction identifier as returned in the parameter ipgTransactionId | 
 **storeId** | **String**| an optional outlet id for clients that support multiple store in the same developer app | [optional] 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="voidTransaction"></a>
# **voidTransaction**
> TransactionResponse voidTransaction(contentType, clientRequestId, apiKey, timestamp, messageSignature, transactionId, , opts)

Reverse a previous action on an existing transaction

Use this to reverse a postauth/completion, credit, preauth, or sale.

### Example
```javascript
import FirstApiSdk from 'FirstApiSDK';

let apiInstance = new FirstApiSdk.PaymentApi();

let contentType = "application/json"; // String | content type

let clientRequestId = "clientRequestId_example"; // String | A client-generated ID for request tracking and signature creation, unique per request.  This is also used for idempotency control. We recommend 128-bit UUID format.

let apiKey = "apiKey_example"; // String | 

let timestamp = 789; // Number | Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins).

let messageSignature = "messageSignature_example"; // String | Used to ensure the request has not been tampered with during transmission. The Message-Signature is the Base64 encoded HMAC hash (SHA256  algorithm with the API Secret as the key.) For more information, refer to the supporting documentation on the Developer Portal.

let transactionId = "transactionId_example"; // String | Gateway transaction identifier as returned in the parameter ipgTransactionId

let opts = { 
  'storeId': "storeId_example" // String | an optional outlet id for clients that support multiple store in the same developer app
};
apiInstance.voidTransaction(contentType, clientRequestId, apiKey, timestamp, messageSignature, transactionId, , opts).then((data) => {
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
 **transactionId** | **String**| Gateway transaction identifier as returned in the parameter ipgTransactionId | 
 **storeId** | **String**| an optional outlet id for clients that support multiple store in the same developer app | [optional] 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

