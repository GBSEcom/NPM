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
    define(['ApiClient', 'model/SepaMandate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SepaMandate'));
  } else {
    // Browser globals (root is window)
    if (!root.FirstApiSdk) {
      root.FirstApiSdk = {};
    }
    root.FirstApiSdk.Sepa = factory(root.FirstApiSdk.ApiClient, root.FirstApiSdk.SepaMandate);
  }
}(this, function(ApiClient, SepaMandate) {
  'use strict';




  /**
   * The Sepa model module.
   * @module model/Sepa
   * @version 6.3.0
   */

  /**
   * Constructs a new <code>Sepa</code>.
   * The payment object for SEPA DD. The iban, billing_address.name and country elements are required for this payment type.
   * @alias module:model/Sepa
   * @class
   * @param iban {String} Bank account in IBAN format
   * @param name {String} The name of the payer
   * @param country {String} Country of residence of the payer using the ISO 3166 standard (http://en.wikipedia.org/wiki/ISO_3166)
   * @param mandate {module:model/SepaMandate} 
   */
  var exports = function(iban, name, country, mandate) {
    var _this = this;

    _this['iban'] = iban;
    _this['name'] = name;
    _this['country'] = country;

    _this['mandate'] = mandate;
  };

  /**
   * Constructs a <code>Sepa</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sepa} obj Optional instance to populate.
   * @return {module:model/Sepa} The populated <code>Sepa</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('iban')) {
        obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('mandate')) {
        obj['mandate'] = SepaMandate.constructFromObject(data['mandate']);
      }
    }
    return obj;
  }

  /**
   * Bank account in IBAN format
   * @member {String} iban
   */
  exports.prototype['iban'] = undefined;
  /**
   * The name of the payer
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Country of residence of the payer using the ISO 3166 standard (http://en.wikipedia.org/wiki/ISO_3166)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * The email address of the payer
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/SepaMandate} mandate
   */
  exports.prototype['mandate'] = undefined;



  return exports;
}));


