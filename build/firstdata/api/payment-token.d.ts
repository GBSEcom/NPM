import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { PaymentTokenApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, PaymentTokenizationRequest, PaymentTokenizationResponse } from "../models";
declare type PaymentTokenParams = ApiField<"region"> & ApiField<"authorization">;
declare type CreatePaymentTokenParams = PaymentTokenParams & ApiField<"payload", PaymentTokenizationRequest>;
declare type DeletePaymentTokenParams = PaymentTokenParams & ApiField<"tokenId"> & ApiField<"storeId">;
interface IWrapper {
    /**
     * Use this to create a payment token from a payment card.
     * @summary Create a payment token from a payment card.
     * @param {CreatePaymentTokenParams} params
     * @throws {RequiredError}
     */
    createPaymentToken(params: CreatePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
    /**
     * Use this to delete a payment token.
     * @summary Delete a payment token.
     * @param {DeletePaymentTokenParams} params
     * @throws {RequiredError}
     */
    deletePaymentToken(params: DeletePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    createPaymentToken(params: CreatePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
    deletePaymentToken(params: DeletePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
}
export { IWrapper as IPaymentTokenApi };
export { Wrapper as PaymentTokenApi };
export { CreatePaymentTokenParams };
export { DeletePaymentTokenParams };
