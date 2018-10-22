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
    root.FirstApiSdk.ClientLocale = factory(root.FirstApiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientLocale model module.
   * @module model/ClientLocale
   * @version 6.3.0
   */

  /**
   * Constructs a new <code>ClientLocale</code>.
   * Country and language of client.
   * @alias module:model/ClientLocale
   * @class
   * @param language {String} Language spoken by client.
   * @param country {String} Country of the client.
   */
  var exports = function(language, country) {
    var _this = this;

    _this['language'] = language;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>ClientLocale</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientLocale} obj Optional instance to populate.
   * @return {module:model/ClientLocale} The populated <code>ClientLocale</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * Language spoken by client.
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * Country of the client.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


