import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {
  PaymentTokenApi as Generated,
  PaymentTokenApiInterface as IGenerated,
} from "../../openapi/api";
import {IContext} from "../context";
import {
  ApiField,
  PaymentTokenizationRequest,
  PaymentTokenizationResponse,
} from "../models";

type PaymentTokenParams =
  ApiField<"region"> &
  ApiField<"authorization">;

type CreatePaymentTokenParams =
  PaymentTokenParams &
  ApiField<"payload", PaymentTokenizationRequest>;

type DeletePaymentTokenParams =
  PaymentTokenParams &
  ApiField<"tokenId"> &
  ApiField<"storeId">;

interface IWrapper {
    /**
     * Use this to create a payment token from a payment card.
     * @summary Create a payment token from a payment card.
     * @param CreatePaymentTokenParams params
     * @throws {RequiredError}
     */
    createPaymentToken(params: CreatePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;

    /**
     * Use this to delete a payment token.
     * @summary Delete a payment token.
     * @param DeletePaymentTokenParams params
     * @throws {RequiredError}
     */
    deletePaymentToken(params: DeletePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;

}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public createPaymentToken(params: CreatePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse> {
    const headers = (params.authorization != null)
      ? this.context.genHeaders()
      : this.context.genHeaders(params.payload);
    return this.client.createPaymentToken(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.payload,
      (params.authorization != null) ? undefined : headers.messageSignature,
      params.authorization,
      params.region || this.context.region,
    );
  }

  public deletePaymentToken(params: DeletePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse> {
    const headers = this.context.genHeaders();
    return this.client.deletePaymentToken(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.tokenId,
      (params.authorization != null) ? undefined : headers.messageSignature,
      params.authorization,
      params.region || this.context.region,
      params.storeId || this.context.storeId,
    );
  }
}

// EXPORTS
export {IWrapper as IPaymentTokenApi};
export {Wrapper as PaymentTokenApi};
export {CreatePaymentTokenParams};
export {DeletePaymentTokenParams};

