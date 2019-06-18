import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {PaymentApi as Generated, PaymentApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {
  ApiField,
  AuthenticationVerificationRequest,
  PrimaryTransaction,
  SecondaryTransaction,
  TransactionResponse,
} from "../models";

type PaymentParams =
  ApiField<"region"> &
  ApiField<"transactionId"> &
  ApiField<"storeId">;

type SecondaryTxPaymentParams =
  PaymentParams &
  ApiField<"payload", SecondaryTransaction>;


type PrimaryTransactionParams =
  ApiField<"region"> &
  ApiField<"payload", PrimaryTransaction>;

type FinalizeTransactionParams =
  ApiField<"region"> &
  ApiField<"transactionId"> &
  ApiField<"payload", AuthenticationVerificationRequest>;

interface IWrapper {
    /**
     * Use this to handle a 3DSecure redirect response or UnionPay authentication, updating the transaction and continuing processing.
     * @summary Update a 3DSecure or UnionPay payment and continue processing.
     * @param: {FinalizeTransactionParams} params
     * @throws {RequiredError}
     */
    finalizeSecureTransaction(params: FinalizeTransactionParams): AxiosPromise<TransactionResponse>;

    /**
     * Use this to originate a financial transaction, like a sale, preauthorization, or credit.
     * @summary Generate a primary transaction.
     * @param {PrimaryTransactionParams} params
     * @throws {RequiredError}
     */
    primaryTransaction(params: PrimaryTransactionParams): AxiosPromise<TransactionResponse>;

    /**
     * Use this to perform a void, postAuth or return secondary transaction. Partial postAuths and returns are allowed.
     * @summary Perform a secondary transaction.
     * @param {SecondaryTxPaymentParams} params
     * @throws {RequiredError}
     */
    secondaryTransaction(params: SecondaryTxPaymentParams): AxiosPromise<TransactionResponse>;

    /**
     * Use this query to get the current state of an existing transaction.
     * @summary Retrieve the state of a transaction.
     * @param {PaymentParams} params
     * @throws {RequiredError}
     */
    transactionInquiry(params: PaymentParams): AxiosPromise<TransactionResponse>;
}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public finalizeSecureTransaction(params: FinalizeTransactionParams): AxiosPromise<TransactionResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.finalizeSecureTransaction(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.transactionId,
      params.payload,
      headers.messageSignature,
      params.region || this.context.region,
    );
  }

  public primaryTransaction(params: PrimaryTransactionParams): AxiosPromise<TransactionResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.submitPrimaryTransaction(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.payload,
      headers.messageSignature,
      params.region || this.context.region,
    );
  }

  public secondaryTransaction(params: SecondaryTxPaymentParams): AxiosPromise<TransactionResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.submitSecondaryTransaction(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.transactionId,
      params.payload,
      headers.messageSignature,
      params.region || this.context.region,
      params.storeId || this.context.storeId,
    );
  }

  public transactionInquiry(params: PaymentParams): AxiosPromise<TransactionResponse> {
    const headers = this.context.genHeaders();
    return this.client.transactionInquiry(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.transactionId,
      headers.messageSignature,
      params.region || this.context.region,
      params.storeId || this.context.storeId,
    );
  }
}

// EXPORTS
export {IWrapper as IPaymentApi};
export {Wrapper as PaymentApi};
export {PaymentParams};
export {SecondaryTxPaymentParams};
export {PrimaryTransactionParams};
export {FinalizeTransactionParams};

