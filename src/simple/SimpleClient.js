
import ApiClient from "../ApiClient";
import AuthenticationApi from "../Api/AuthenticationApi";
import PaymentApi from "../Api/PaymentApi";
import OrderApi from "../Api/OrderApi";
import * as uuidv4 from "uuid/v4";
import * as CryptoJS from "crypto-js";
import * as base64 from "base-64";

const CONTENT_TYPE = "application/json";

function genClientRequestId() {
  return uuidv4();
}

function genTimestamp() {
  return new Date().getTime();
}

function genMessageSignature(credentials, clientRequestId, timestamp, payload) {
  let data = credentials.apiKey + clientRequestId + timestamp;
  if (payload) {
    data = data.concat(JSON.stringify(payload));
  }
  const hasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, credentials.apiSecret.toString());
  hasher.update(data);
  return base64.encode(hash.finalize().toString());
}

export default class SimpleClient {
  constructor(credentials) {
    this.credentials = credentials;
    this.internalClient = ApiClient.instance;
    this.authenticationApi = new AuthenticationApi(this.internalClient);
    this.paymentApi = new PaymentApi(this.internalClient);
    this.orderApi = new OrderApi(this.internalClient);
  }

  requestAccessToken() {
    let clientRequestId = genClientRequestId();
    let timestamp = genTimestamp();
    let messageSignature = genMessageSignature(this.credentials, clientRequestId, timestamp);

    return this.authenticationApi.v1AuthenticationAccessTokensPost(
      CONTENT_TYPE,
      clientRequestId,
      this.credentials.apiKey,
      timestamp,
      messageSignature
    );
  }

  performPaymentPostAuthorizationByOrder(orderId, payload, storeId) {
    let clientRequestId = genClientRequestId();
    let timestamp = genTimestamp();
    let messageSignature = genMessageSignature(
      this.credentials,
      clientRequestId,
      timestamp,
      payload
    );

    return this.orderApi.performPaymentPostAuthorization(
      CONTENT_TYPE,
      clientRequestId,
      this.credentials.apiKey,
      timestamp,
      messageSignature,
      orderId,
      payload,
      { storeId }
    );
  }

  returnTransactionByOrder(orderId, payload, storeId) {
    let clientRequestId = genClientRequestId();
    let timestamp = genTimestamp();
    let messageSignature = genMessageSignature(
      this.credentials,
      clientRequestId,
      timestamp,
      payload
    );

    return this.orderApi.returnTransaction(
      CONTENT_TYPE,
      clientRequestId,
      this.credentials.apiKey,
      timestamp,
      messageSignature,
      orderId,
      payload,
      { storeId }
    );
  }

  performPaymentPostAuthorizationByTransaction(transactionId, payload, storeId) {
    let clientRequestId = genClientRequestId();
    let timestamp = genTimestamp();
    let messageSignature = genMessageSignature(
      this.credentials,
      clientRequestId,
      timestamp,
      payload
    );

    return this.paymentApi.performPaymentPostAuthorization(
      CONTENT_TYPE,
      clientRequestId,
      this.credentials.apiKey,
      timestamp,
      messageSignature,
      transactionId,
      payload,
      { storeId }
    );
  }

  primaryPaymentTransaction(payload) {
    let clientRequestId = genClientRequestId();
    let timestamp = genTimestamp();
    let messageSignature = genMessageSignature(
      this.credentials,
      clientRequestId,
      timestamp,
      payload
    );

    return this.paymentApi.primaryPaymentTransaction(
      CONTENT_TYPE,
      clientRequestId,
      this.credentials.apiKey,
      timestamp,
      messageSignature,
      payload
    );
  }

  returnTransaction(transactionId, payload, storeId) {
    let clientRequestId = genClientRequestId();
    let timestamp = genTimestamp();
    let messageSignature = genMessageSignature(
      this.credentials,
      clientRequestId,
      timestamp,
      payload
    );

    return this.paymentApi.returnTransaction(
      CONTENT_TYPE,
      clientRequestId,
      this.credentials.apiKey,
      timestamp,
      messageSignature,
      transactionId,
      payload,
      { storeId }
    );
  }

  transactionInquiry(transactionId, storeId) {
    let clientRequestId = genClientRequestId();
    let timestamp = genTimestamp();
    let messageSignature = genMessageSignature(
      this.credentials,
      clientRequestId,
      timestamp
    );

    return this.paymentApi.transactionInquiry(
      CONTENT_TYPE,
      clientRequestId,
      this.credentials.apiKey,
      timestamp,
      messageSignature,
      transactionId,
      { storeId }
    );
  }

  voidTransaction(transactionId, storeId) {
    let clientRequestId = genClientRequestId();
    let timestamp = genTimestamp();
    let messageSignature = genMessageSignature(
      this.credentials,
      clientRequestId,
      timestamp
    );

    return this.paymentApi.voidTransaction(
      CONTENT_TYPE,
      clientRequestId,
      this.credentials.apiKey,
      timestamp,
      messageSignature,
      transactionId,
      { storeId }
    );
  }
}
