
const ApiClient = require("../ApiClient");
const AuthenticationApi = require("../api/AuthenticationApi");
const PaymentApi = require("../api/PaymentApi");
const OrderApi = require("../api/OrderApi");
const uuidv4 = require("uuid/v4");
const CryptoJS = require("crypto-js");
const base64 = require("base-64");

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
  return base64.encode(hasher.finalize().toString());
}

class SimpleClient {
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

    return this.orderApi.performPaymentPostAuthorisation(
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

    return this.paymentApi.performPaymentPostAuthorisation(
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

module.exports = SimpleClient;

