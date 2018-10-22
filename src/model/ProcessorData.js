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
    root.FirstApiSdk.ProcessorData = factory(root.FirstApiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProcessorData model module.
   * @module model/ProcessorData
   * @version 6.3.0
   */

  /**
   * Constructs a new <code>ProcessorData</code>.
   * Model for processor data
   * @alias module:model/ProcessorData
   * @class
   * @param responseCode {String} 
   * @param responseMessage {String} 
   */
  var exports = function(responseCode, responseMessage) {
    var _this = this;

    _this['responseCode'] = responseCode;
    _this['responseMessage'] = responseMessage;

  };

  /**
   * Constructs a <code>ProcessorData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessorData} obj Optional instance to populate.
   * @return {module:model/ProcessorData} The populated <code>ProcessorData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('responseCode')) {
        obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'String');
      }
      if (data.hasOwnProperty('responseMessage')) {
        obj['responseMessage'] = ApiClient.convertToType(data['responseMessage'], 'String');
      }
      if (data.hasOwnProperty('approvalCode')) {
        obj['approvalCode'] = ApiClient.convertToType(data['approvalCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} responseCode
   */
  exports.prototype['responseCode'] = undefined;
  /**
   * @member {String} responseMessage
   */
  exports.prototype['responseMessage'] = undefined;
  /**
   * @member {String} approvalCode
   */
  exports.prototype['approvalCode'] = undefined;



  return exports;
}));


