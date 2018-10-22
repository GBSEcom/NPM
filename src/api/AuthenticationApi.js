/**
 * Payment Gateway API Specification
 * Payment Gateway API for payment processing. 
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccessTokenResponse', 'model/ErrorResponse', 'model/TransactionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessTokenResponse'), require('../model/ErrorResponse'), require('../model/TransactionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.FirstApiSdk) {
      root.FirstApiSdk = {};
    }
    root.FirstApiSdk.AuthenticationApi = factory(root.FirstApiSdk.ApiClient, root.FirstApiSdk.AccessTokenResponse, root.FirstApiSdk.ErrorResponse, root.FirstApiSdk.TransactionResponse);
  }
}(this, function(ApiClient, AccessTokenResponse, ErrorResponse, TransactionResponse) {
  'use strict';

  /**
   * Authentication service.
   * @module api/AuthenticationApi
   * @version 6.3.0
   */

  /**
   * Constructs a new AuthenticationApi. 
   * @alias module:api/AuthenticationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Generate an access token for user authentication
     * This is the access token generation call for authorizing subsequent financial transactions. A valid access token is required for web client requests. 
     * @param {module:model/String} contentType content type
     * @param {String} clientRequestId A client-generated ID for request tracking and signature creation, unique per request.  This is also used for idempotency control. We recommend 128-bit UUID format.
     * @param {String} apiKey 
     * @param {Number} timestamp Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins).
     * @param {String} messageSignature Used to ensure the request has not been tampered with during transmission. The Message-Signature is the Base64 encoded HMAC hash (SHA256  algorithm with the API Secret as the key.) For more information, refer to the supporting documentation on the Developer Portal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccessTokenResponse} and HTTP response
     */
    this.v1AuthenticationAccessTokensPostWithHttpInfo = function(contentType, clientRequestId, apiKey, timestamp, messageSignature) {
      var postBody = null;

      // verify the required parameter 'contentType' is set
      if (contentType === undefined || contentType === null) {
        throw new Error("Missing the required parameter 'contentType' when calling v1AuthenticationAccessTokensPost");
      }

      // verify the required parameter 'clientRequestId' is set
      if (clientRequestId === undefined || clientRequestId === null) {
        throw new Error("Missing the required parameter 'clientRequestId' when calling v1AuthenticationAccessTokensPost");
      }

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling v1AuthenticationAccessTokensPost");
      }

      // verify the required parameter 'timestamp' is set
      if (timestamp === undefined || timestamp === null) {
        throw new Error("Missing the required parameter 'timestamp' when calling v1AuthenticationAccessTokensPost");
      }

      // verify the required parameter 'messageSignature' is set
      if (messageSignature === undefined || messageSignature === null) {
        throw new Error("Missing the required parameter 'messageSignature' when calling v1AuthenticationAccessTokensPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Content-Type': contentType,
        'Client-Request-Id': clientRequestId,
        'Api-Key': apiKey,
        'Timestamp': timestamp,
        'Message-Signature': messageSignature
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AccessTokenResponse;

      return this.apiClient.callApi(
        '/v1/authentication/access-tokens', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Generate an access token for user authentication
     * This is the access token generation call for authorizing subsequent financial transactions. A valid access token is required for web client requests. 
     * @param {module:model/String} contentType content type
     * @param {String} clientRequestId A client-generated ID for request tracking and signature creation, unique per request.  This is also used for idempotency control. We recommend 128-bit UUID format.
     * @param {String} apiKey 
     * @param {Number} timestamp Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins).
     * @param {String} messageSignature Used to ensure the request has not been tampered with during transmission. The Message-Signature is the Base64 encoded HMAC hash (SHA256  algorithm with the API Secret as the key.) For more information, refer to the supporting documentation on the Developer Portal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessTokenResponse}
     */
    this.v1AuthenticationAccessTokensPost = function(contentType, clientRequestId, apiKey, timestamp, messageSignature) {
      return this.v1AuthenticationAccessTokensPostWithHttpInfo(contentType, clientRequestId, apiKey, timestamp, messageSignature)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
