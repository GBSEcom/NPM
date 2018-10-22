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
    root.FirstApiSdk.Contact = factory(root.FirstApiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Contact model module.
   * @module model/Contact
   * @version 6.3.0
   */

  /**
   * Constructs a new <code>Contact</code>.
   * @alias module:model/Contact
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('mobilePhone')) {
        obj['mobilePhone'] = ApiClient.convertToType(data['mobilePhone'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {String} mobilePhone
   */
  exports.prototype['mobilePhone'] = undefined;
  /**
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;



  return exports;
}));


