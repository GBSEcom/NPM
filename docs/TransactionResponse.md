# FirstDataGateway.TransactionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responseType** | [**ResponseType**](ResponseType.md) | The schema type returned in the response. | [optional] 
**clientRequestId** | **String** | Echoes back the value in the Request header | [optional] 
**apiTraceId** | **String** | Echoes back the value in the Request header | [optional] 
**ipgTransactionId** | **String** | The Response Transaction ID | [optional] 
**orderId** | **String** | Client Order ID if supplied by client, otherwise the Order ID | [optional] 
**transactionType** | [**TransactionType**](TransactionType.md) |  | [optional] 
**authorizationCode** | **String** | The processor approval code for compliance. | [optional] 
**avsResponse** | **String** | The processor address validation response for compliance. | [optional] 
**securityCodeResponse** | **String** | The processor card verification validation response for compliance. | [optional] 
**brand** | **String** | Card brand of the payment instrument | [optional] 
**country** | **String** | Country of the card issuer | [optional] 
**terminalId** | **String** | The terminal that is processing the transaction | [optional] 
**clientTransactionId** | **String** | The unique client Transaction ID from the Request header, if supplied | [optional] 
**transactionTime** | **Number** | The transaction time in seconds since Epoch | [optional] 
**approvedAmount** | [**Amount**](Amount.md) |  | [optional] 
**transactionStatus** | **String** | The status of the transaction. APPROVED/WAITING are returned by the endpoints.  VALIDATION_FAILED/DECLINED are errors. See ErrorResponse object for details. | [optional] 
**transactionState** | **String** | The state of the transaction. | [optional] 
**authenticationRedirect** | [**TransactionResponseAuthenticationRedirect**](TransactionResponseAuthenticationRedirect.md) |  | [optional] 
**schemeTransactionId** | **String** | The transaction id received from schemes for the initial transaction, returned for the transactions marked as \&quot;FIRST\&quot; | [optional] 
**processor** | [**ProcessorData**](ProcessorData.md) |  | [optional] 


<a name="TransactionStatusEnum"></a>
## Enum: TransactionStatusEnum


* `APPROVED` (value: `"APPROVED"`)

* `WAITING` (value: `"WAITING"`)

* `VALIDATION_FAILED` (value: `"VALIDATION_FAILED"`)

* `DECLINED` (value: `"DECLINED"`)




<a name="TransactionStateEnum"></a>
## Enum: TransactionStateEnum


* `AUTHORIZED` (value: `"AUTHORIZED"`)

* `CAPTURED` (value: `"CAPTURED"`)

* `COMPLETED_GET` (value: `"COMPLETED_GET"`)

* `DECLINED` (value: `"DECLINED"`)

* `CHECKED` (value: `"CHECKED"`)

* `INITIALIZED` (value: `"INITIALIZED"`)

* `PENDING_AUTHORIZATION` (value: `"PENDING_AUTHORIZATION"`)

* `PENDING_AUTOVOID` (value: `"PENDING_AUTOVOID"`)

* `PENDING_CAPTURE` (value: `"PENDING_CAPTURE"`)

* `PENDING_CREDIT` (value: `"PENDING_CREDIT"`)

* `PENDING_GIROPAY_INIT` (value: `"PENDING_GIROPAY_INIT"`)

* `PENDING_IDEAL_INIT` (value: `"PENDING_IDEAL_INIT"`)

* `PENDING_INIT` (value: `"PENDING_INIT"`)

* `PENDING_READY` (value: `"PENDING_READY"`)

* `PENDING_RETURN` (value: `"PENDING_RETURN"`)

* `PENDING_SETTLEMENT` (value: `"PENDING_SETTLEMENT"`)

* `PENDING_SOFORT_INIT` (value: `"PENDING_SOFORT_INIT"`)

* `PENDING_VOID` (value: `"PENDING_VOID"`)

* `READY` (value: `"READY"`)

* `SETTLED` (value: `"SETTLED"`)

* `VOIDED` (value: `"VOIDED"`)

* `WAITING` (value: `"WAITING"`)

* `WAITING_AUTHENTICATION` (value: `"WAITING_AUTHENTICATION"`)

* `WAITING_3D_SECURE` (value: `"WAITING_3D_SECURE"`)

* `WAITING_CLICK_AND_BUY` (value: `"WAITING_CLICK_AND_BUY"`)

* `WAITING_GIROPAY` (value: `"WAITING_GIROPAY"`)

* `WAITING_IDEAL` (value: `"WAITING_IDEAL"`)

* `WAITING_KLARNA` (value: `"WAITING_KLARNA"`)

* `WAITING_PAYPAL` (value: `"WAITING_PAYPAL"`)

* `WAITING_PAYPAL_EVENT` (value: `"WAITING_PAYPAL_EVENT"`)

* `WAITING_PPRO_LONG_WAITING` (value: `"WAITING_PPRO_LONG_WAITING"`)

* `WAITING_SOFORT` (value: `"WAITING_SOFORT"`)

* `WAITING_T_PAY` (value: `"WAITING_T_PAY"`)

* `WAITING_ALIPAY_PAYSECURE` (value: `"WAITING_ALIPAY_PAYSECURE"`)




