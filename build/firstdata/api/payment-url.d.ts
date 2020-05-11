import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { PaymentURLApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, PaymentUrlRequest, PaymentUrlResponse, PaymentUrlDetailResponse } from "../models";
declare type CreatePaymentUrlParams = ApiField<"region"> & ApiField<"payload", PaymentUrlRequest>;
declare type DeletePaymentUrlParams = ApiField<"region"> & ApiField<"storeId"> & ApiField<"transactionId"> & ApiField<"orderId"> & ApiField<"paymentUrlId"> & ApiField<"transactionTime">;
declare type PaymentUrlDetailParams = ApiField<"region"> & ApiField<"storeId"> & ApiField<"fromDate"> & ApiField<"toDate"> & ApiField<"orderId"> & ApiField<"merchantTransactionId"> & ApiField<"status">;
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
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    createPaymentUrl(params: CreatePaymentUrlParams): AxiosPromise<PaymentUrlResponse>;
    deletePaymentUrl(params: DeletePaymentUrlParams): AxiosPromise<PaymentUrlResponse>;
    paymentUrlDetail(params: PaymentUrlDetailParams): AxiosPromise<PaymentUrlDetailResponse>;
}
export { IWrapper as IPaymentUrlApi };
export { Wrapper as PaymentUrlApi };
export { CreatePaymentUrlParams };
export { DeletePaymentUrlParams };
export { PaymentUrlDetailParams };
