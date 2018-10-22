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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FirstApiSdk) {
      root.FirstApiSdk = {};
    }
    root.FirstApiSdk.PaymentSchedulesResponse = factory(root.FirstApiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentSchedulesResponse model module.
   * @module model/PaymentSchedulesResponse
   * @version 6.3.0
   */

  /**
   * Constructs a new <code>PaymentSchedulesResponse</code>.
   * Response from the gateway scheduler creation call.
   * @alias module:model/PaymentSchedulesResponse
   * @class
   * @param clientRequestId {String} Echoes back the value in the Request header for tracking.
   * @param apiTraceId {String} Request identifier in API, can be used to request logs from the support.
   * @param transactionStatus {module:model/PaymentSchedulesResponse.TransactionStatusEnum} Result of requested operation. If it's anything other than 'SUCCESS', please refer to 400s HTTP error codes or decline. See Error object for details.
   */
  var exports = function(clientRequestId, apiTraceId, transactionStatus) {
    var _this = this;

    _this['clientRequestId'] = clientRequestId;
    _this['apiTraceId'] = apiTraceId;
    _this['transactionStatus'] = transactionStatus;

  };

  /**
   * Constructs a <code>PaymentSchedulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentSchedulesResponse} obj Optional instance to populate.
   * @return {module:model/PaymentSchedulesResponse} The populated <code>PaymentSchedulesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientRequestId')) {
        obj['clientRequestId'] = ApiClient.convertToType(data['clientRequestId'], 'String');
      }
      if (data.hasOwnProperty('apiTraceId')) {
        obj['apiTraceId'] = ApiClient.convertToType(data['apiTraceId'], 'String');
      }
      if (data.hasOwnProperty('transactionStatus')) {
        obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
      }
      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Echoes back the value in the Request header for tracking.
   * @member {String} clientRequestId
   */
  exports.prototype['clientRequestId'] = undefined;
  /**
   * Request identifier in API, can be used to request logs from the support.
   * @member {String} apiTraceId
   */
  exports.prototype['apiTraceId'] = undefined;
  /**
   * Result of requested operation. If it's anything other than 'SUCCESS', please refer to 400s HTTP error codes or decline. See Error object for details.
   * @member {module:model/PaymentSchedulesResponse.TransactionStatusEnum} transactionStatus
   */
  exports.prototype['transactionStatus'] = undefined;
  /**
   * Client Order ID if supplied by client, otherwise the Order ID.
   * @member {String} orderId
   */
  exports.prototype['orderId'] = undefined;


  /**
   * Allowed values for the <code>transactionStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TransactionStatusEnum = {
    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",
    /**
     * value: "VALIDATION_FAILED"
     * @const
     */
    "VALIDATION_FAILED": "VALIDATION_FAILED",
    /**
     * value: "PROCESSING_FAILED"
     * @const
     */
    "PROCESSING_FAILED": "PROCESSING_FAILED",
    /**
     * value: "FAILURE"
     * @const
     */
    "FAILURE": "FAILURE"  };


  return exports;
}));


