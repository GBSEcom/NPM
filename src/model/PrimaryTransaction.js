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
    define(['ApiClient', 'model/Amount', 'model/BasketItem', 'model/IndustrySpecificExtensions', 'model/Order', 'model/PaymentMethod', 'model/PrimaryTransactionAdditionalDetails', 'model/SplitShipment', 'model/StoredCredential', 'model/TransactionType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./BasketItem'), require('./IndustrySpecificExtensions'), require('./Order'), require('./PaymentMethod'), require('./PrimaryTransactionAdditionalDetails'), require('./SplitShipment'), require('./StoredCredential'), require('./TransactionType'));
  } else {
    // Browser globals (root is window)
    if (!root.FirstApiSdk) {
      root.FirstApiSdk = {};
    }
    root.FirstApiSdk.PrimaryTransaction = factory(root.FirstApiSdk.ApiClient, root.FirstApiSdk.Amount, root.FirstApiSdk.BasketItem, root.FirstApiSdk.IndustrySpecificExtensions, root.FirstApiSdk.Order, root.FirstApiSdk.PaymentMethod, root.FirstApiSdk.PrimaryTransactionAdditionalDetails, root.FirstApiSdk.SplitShipment, root.FirstApiSdk.StoredCredential, root.FirstApiSdk.TransactionType);
  }
}(this, function(ApiClient, Amount, BasketItem, IndustrySpecificExtensions, Order, PaymentMethod, PrimaryTransactionAdditionalDetails, SplitShipment, StoredCredential, TransactionType) {
  'use strict';




  /**
   * The PrimaryTransaction model module.
   * @module model/PrimaryTransaction
   * @version 6.3.0
   */

  /**
   * Constructs a new <code>PrimaryTransaction</code>.
   * Model for primary financial transactions
   * @alias module:model/PrimaryTransaction
   * @class
   * @param transactionType {module:model/TransactionType} 
   * @param amount {module:model/Amount} 
   * @param paymentMethod {module:model/PaymentMethod} 
   */
  var exports = function(transactionType, amount, paymentMethod) {
    var _this = this;

    _this['transactionType'] = transactionType;


    _this['amount'] = amount;
    _this['paymentMethod'] = paymentMethod;






  };

  /**
   * Constructs a <code>PrimaryTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrimaryTransaction} obj Optional instance to populate.
   * @return {module:model/PrimaryTransaction} The populated <code>PrimaryTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transactionType')) {
        obj['transactionType'] = TransactionType.constructFromObject(data['transactionType']);
      }
      if (data.hasOwnProperty('storeId')) {
        obj['storeId'] = ApiClient.convertToType(data['storeId'], 'String');
      }
      if (data.hasOwnProperty('clientTransactionId')) {
        obj['clientTransactionId'] = ApiClient.convertToType(data['clientTransactionId'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = Amount.constructFromObject(data['amount']);
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = PaymentMethod.constructFromObject(data['paymentMethod']);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = Order.constructFromObject(data['order']);
      }
      if (data.hasOwnProperty('basketItems')) {
        obj['basketItems'] = ApiClient.convertToType(data['basketItems'], [BasketItem]);
      }
      if (data.hasOwnProperty('splitShipment')) {
        obj['splitShipment'] = SplitShipment.constructFromObject(data['splitShipment']);
      }
      if (data.hasOwnProperty('additionalDetails')) {
        obj['additionalDetails'] = PrimaryTransactionAdditionalDetails.constructFromObject(data['additionalDetails']);
      }
      if (data.hasOwnProperty('industrySpecificExtensions')) {
        obj['industrySpecificExtensions'] = IndustrySpecificExtensions.constructFromObject(data['industrySpecificExtensions']);
      }
      if (data.hasOwnProperty('storedCredentials')) {
        obj['storedCredentials'] = StoredCredential.constructFromObject(data['storedCredentials']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TransactionType} transactionType
   */
  exports.prototype['transactionType'] = undefined;
  /**
   * An optional Outlet ID for clients that support multiple stores in the same app.
   * @member {String} storeId
   */
  exports.prototype['storeId'] = undefined;
  /**
   * The unique client Transaction ID from the Request header, if supplied.
   * @member {String} clientTransactionId
   */
  exports.prototype['clientTransactionId'] = undefined;
  /**
   * @member {module:model/Amount} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {module:model/PaymentMethod} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * @member {module:model/Order} order
   */
  exports.prototype['order'] = undefined;
  /**
   * Required for some payment methods (for example, Klarna)
   * @member {Array.<module:model/BasketItem>} basketItems
   */
  exports.prototype['basketItems'] = undefined;
  /**
   * @member {module:model/SplitShipment} splitShipment
   */
  exports.prototype['splitShipment'] = undefined;
  /**
   * @member {module:model/PrimaryTransactionAdditionalDetails} additionalDetails
   */
  exports.prototype['additionalDetails'] = undefined;
  /**
   * @member {module:model/IndustrySpecificExtensions} industrySpecificExtensions
   */
  exports.prototype['industrySpecificExtensions'] = undefined;
  /**
   * @member {module:model/StoredCredential} storedCredentials
   */
  exports.prototype['storedCredentials'] = undefined;



  return exports;
}));


