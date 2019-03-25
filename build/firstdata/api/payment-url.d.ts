import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { PaymentURLApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, PaymentUrlRequest, PaymentUrlResponse } from "../models";
declare type CreatePaymentUrlParams = ApiField<"region"> & ApiField<"payload", PaymentUrlRequest>;
interface IWrapper {
    /**
     * Use this to generate an embedding payment link.
     * @summary Create a payment URL.
     * @param {CreatePaymentUrlParams} params
     * @throws {RequiredError}
     */
    createPaymentUrl(params: CreatePaymentUrlParams): AxiosPromise<PaymentUrlResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    createPaymentUrl(params: CreatePaymentUrlParams): AxiosPromise<PaymentUrlResponse>;
}
export { IWrapper as IPaymentUrlApi };
export { Wrapper as PaymentUrlApi };
export { CreatePaymentUrlParams };
