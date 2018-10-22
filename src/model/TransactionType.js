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
    root.FirstApiSdk.TransactionType = factory(root.FirstApiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class TransactionType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "SALE"
     * @const
     */
    "SALE": "SALE",
    /**
     * value: "PREAUTH"
     * @const
     */
    "PREAUTH": "PREAUTH",
    /**
     * value: "CREDIT"
     * @const
     */
    "CREDIT": "CREDIT",
    /**
     * value: "FORCED_TICKET"
     * @const
     */
    "FORCED_TICKET": "FORCED_TICKET",
    /**
     * value: "VOID"
     * @const
     */
    "VOID": "VOID",
    /**
     * value: "RETURN"
     * @const
     */
    "RETURN": "RETURN",
    /**
     * value: "POSTAUTH"
     * @const
     */
    "POSTAUTH": "POSTAUTH"  };

  /**
   * Returns a <code>TransactionType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/TransactionType} The enum <code>TransactionType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


