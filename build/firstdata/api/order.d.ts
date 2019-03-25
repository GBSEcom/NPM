import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { OrderApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, SecondaryTransaction, TransactionResponse, OrderResponse } from "../models";
declare type OrderParams = ApiField<"region"> & ApiField<"storeId"> & ApiField<"orderId">;
declare type SecondaryTxOrderParams = OrderParams & ApiField<"payload", SecondaryTransaction>;
interface IWrapper {
    /**
     * Use this query to get the current state of an existing order.
     * @summary Retrieve the state of an order
     * @param {OrderParams} params
     * @throws {RequiredError}
     */
    orderInquiry(params: OrderParams): AxiosPromise<OrderResponse>;
    /**
     * Use this to capture/complete an order. Postauths and partial postauths are allowed.
     * @summary Capture/complete an already existing order.
     * @param {SecondaryTxOrderParams} params
     * @throws {RequiredError}
     */
    orderPostAuth(params: SecondaryTxOrderParams): AxiosPromise<TransactionResponse>;
    /**
     * Use this for Returns of an existing order. Partial Returns are allowed.
     * @summary Return/refund an order.
     * @param {SecondaryTxOrderParams} params
     * @throws {RequiredError}
     */
    orderReturnTransaction(params: SecondaryTxOrderParams): AxiosPromise<TransactionResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    orderInquiry(params: OrderParams): AxiosPromise<OrderResponse>;
    orderPostAuth(params: SecondaryTxOrderParams): AxiosPromise<TransactionResponse>;
    orderReturnTransaction(params: SecondaryTxOrderParams): AxiosPromise<TransactionResponse>;
}
export { IWrapper as IOrderApi };
export { Wrapper as OrderApi };
export { OrderParams };
export { SecondaryTxOrderParams };
