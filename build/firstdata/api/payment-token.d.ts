import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { PaymentTokenApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, PaymentTokenizationRequest, PaymentTokenizationResponse, PaymentCardPaymentTokenUpdateRequest, PaymentTokenUpdateResponse } from "../models";
declare type PaymentTokenParams = ApiField<"region"> & ApiField<"authorization">;
declare type CreatePaymentTokenParams = PaymentTokenParams & ApiField<"payload", PaymentTokenizationRequest>;
declare type UpdatePaymentTokenParams = PaymentTokenParams & ApiField<"payload", PaymentCardPaymentTokenUpdateRequest>;
declare type DeletePaymentTokenParams = PaymentTokenParams & ApiField<"tokenId"> & ApiField<"storeId">;
declare type GetPaymentTokenParams = PaymentTokenParams & ApiField<"tokenId"> & ApiField<"storeId">;
interface IWrapper {
    /**
     * Use this to create a payment token from a payment card.
     * @summary Create a payment token from a payment card.
     * @param {CreatePaymentTokenParams} params
     * @throws {RequiredError}
     */
    createPaymentToken(params: CreatePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
    /**
     * Use this to update a payment token from a payment card.
     * @summary Update a payment token from a payment card.
     * @param {UpdatePaymentTokenParams} params
     * @throws {RequiredError}
     */
    updatePaymentToken(params: UpdatePaymentTokenParams): AxiosPromise<PaymentTokenUpdateResponse>;
    /**
     * Use this to delete a payment token.
     * @summary Delete a payment token.
     * @param {DeletePaymentTokenParams} params
     * @throws {RequiredError}
     */
    deletePaymentToken(params: DeletePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
    /**
     * Use this to get details of a payment token.
     * @summary Get details of a payment token.
     * @param {GetPaymentTokenParams} params
     * @throws {RequiredError}
     */
    getPaymentTokenDetails(params: GetPaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    createPaymentToken(params: CreatePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
    updatePaymentToken(params: UpdatePaymentTokenParams): AxiosPromise<PaymentTokenUpdateResponse>;
    deletePaymentToken(params: DeletePaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
    getPaymentTokenDetails(params: GetPaymentTokenParams): AxiosPromise<PaymentTokenizationResponse>;
}
export { IWrapper as IPaymentTokenApi };
export { Wrapper as PaymentTokenApi };
export { CreatePaymentTokenParams };
export { UpdatePaymentTokenParams };
export { DeletePaymentTokenParams };
export { GetPaymentTokenParams };
