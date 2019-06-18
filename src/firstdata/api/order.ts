import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {OrderApi as Generated, OrderApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {ApiField, SecondaryTransaction, TransactionResponse, OrderResponse} from "../models";

type OrderParams =
  ApiField<"region"> &
  ApiField<"storeId"> &
  ApiField<"orderId">;

type SecondaryTxOrderParams =
  ApiField<"region"> &
  ApiField<"orderId"> &
  ApiField<"payload", SecondaryTransaction>;

interface IWrapper {
    /**
     * Use this query to get the current state of an existing order.
     * @summary Retrieve the state of an order
     * @param {OrderParams} params
     * @throws {RequiredError}
     */
    orderInquiry(params: OrderParams): AxiosPromise<OrderResponse>;

    /**
     * Use this for Returns and post auth of an existing order. Partial Returns are allowed.
     * @param {SecondaryTxOrderParams} params
     * @throws {RequiredError}
     */
    secondaryTransaction(params: SecondaryTxOrderParams): AxiosPromise<TransactionResponse>;
}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public orderInquiry(params: OrderParams): AxiosPromise<OrderResponse> {
    const headers = this.context.genHeaders();
    return this.client.orderInquiry(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.orderId,
      headers.messageSignature,
      params.region || this.context.region,
      params.storeId || this.context.storeId,
    );
  }

  public secondaryTransaction(params: SecondaryTxOrderParams): AxiosPromise<TransactionResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.submitSecondaryTransactionFromOrder(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.orderId,
      params.payload,
      headers.messageSignature,
      params.region || this.context.region,
    );
  }
}

// EXPORTS
export {IWrapper as IOrderApi};
export {Wrapper as OrderApi};
export {OrderParams};
export {SecondaryTxOrderParams};

