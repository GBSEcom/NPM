import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {
  PaymentURLApi as Generated,
  PaymentURLApiInterface as IGenerated,
} from "../../openapi/api";
import {IContext} from "../context";
import {
  ApiField,
  PaymentUrlRequest,
  PaymentUrlResponse,
} from "../models";

type CreatePaymentUrlParams =
  ApiField<"region"> &
  ApiField<"payload", PaymentUrlRequest>;


interface IWrapper {
    /**
     * Use this to generate an embedding payment link.
     * @summary Create a payment URL.
     * @param {CreatePaymentUrlParams} params
     * @throws {RequiredError}
     */
    createPaymentUrl(params: CreatePaymentUrlParams): AxiosPromise<PaymentUrlResponse>;

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
}

// EXPORTS
export {IWrapper as IPaymentUrlApi};
export {Wrapper as PaymentUrlApi};
export {CreatePaymentUrlParams};

