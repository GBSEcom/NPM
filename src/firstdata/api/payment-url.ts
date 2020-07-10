import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {PaymentURLApi as Generated, PaymentURLApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {ApiField, PaymentUrlRequest, PaymentUrlResponse,PaymentUrlDetailResponse} from "../models";

type CreatePaymentUrlParams =
  ApiField<"region"> &
  ApiField<"payload", PaymentUrlRequest>;

type DeletePaymentUrlParams = 
  ApiField<"region"> &
  ApiField<"storeId"> &
  ApiField<"transactionId"> &
  ApiField<"orderId"> &
  ApiField<"paymentUrlId"> &
  ApiField<"transactionTime">;

type PaymentUrlDetailParams = 
  ApiField<"region"> &
  ApiField<"storeId"> &
  ApiField<"fromDate"> &
  ApiField<"toDate"> &
  ApiField<"orderId"> &
  ApiField<"merchantTransactionId"> &
  ApiField<"status">;

interface IWrapper {
    /**
     * Use this to generate an embedding payment link.
     * @summary Create a payment URL.
     * @param {CreatePaymentUrlParams} params
     * @throws {RequiredError}
     */
    createPaymentUrl(params: CreatePaymentUrlParams): AxiosPromise<PaymentUrlResponse>;

    /**
     * Use this to delete an embedding payment link.
     * @summary Delete a payment URL.
     * @param {DeletePaymentUrlParams} params
     * @throws {RequiredError}
     */
    deletePaymentUrl(params: DeletePaymentUrlParams): AxiosPromise<PaymentUrlResponse>;

    /**
     * Use this to get details of an embedding payment link.
     * @summary Details of a payment URL.
     * @param {PaymentUrlParams} params
     * @throws {RequiredError}
     */
    paymentUrlDetail(params: PaymentUrlDetailParams): AxiosPromise<PaymentUrlDetailResponse>;

}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public createPaymentUrl(params: CreatePaymentUrlParams): AxiosPromise<PaymentUrlResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.createPaymentUrl(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.payload,
      headers.messageSignature,
      params.region || this.context.region,
    );
  }

  public deletePaymentUrl(params: DeletePaymentUrlParams): AxiosPromise<PaymentUrlResponse> {
    const headers = this.context.genHeaders();
    return this.client.deletePaymentUrl(
      headers.contentType, 
      headers.clientRequestId, 
      headers.apiKey, 
      headers.timestamp, 
      headers.messageSignature, 
      params.region || this.context.region, 
      params.storeId || this.context.storeId,
      params.transactionId, 
      params.orderId, 
      params.paymentUrlId, 
      params.transactionTime 
    );
  }

  public paymentUrlDetail(params: PaymentUrlDetailParams): AxiosPromise<PaymentUrlDetailResponse> {
    const headers = this.context.genHeaders();
    return this.client.paymentUrlDetail(
      headers.contentType, 
      headers.clientRequestId, 
      headers.apiKey, 
      headers.timestamp, 
      params.fromDate, 
      params.toDate, 
      headers.messageSignature, 
      params.region || this.context.region, 
      params.storeId || this.context.storeId,
      params.orderId, 
      params.merchantTransactionId, 
      params.status
    );
  }
}

// EXPORTS
export {IWrapper as IPaymentUrlApi};
export {Wrapper as PaymentUrlApi};
export {CreatePaymentUrlParams};
export {DeletePaymentUrlParams};
export {PaymentUrlDetailParams};


