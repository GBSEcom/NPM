import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { PaymentApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, AuthenticationResponseVerificationRequest, PrimaryTransaction, SecondaryTransaction, TransactionResponse } from "../models";
declare type PaymentParams = ApiField<"region"> & ApiField<"transactionId"> & ApiField<"storeId">;
declare type SecondaryTxPaymentParams = PaymentParams & ApiField<"payload", SecondaryTransaction>;
declare type PrimaryTransactionParams = ApiField<"region"> & ApiField<"payload", PrimaryTransaction>;
declare type FinalizeTransactionParams = ApiField<"region"> & ApiField<"transactionId"> & ApiField<"payload", AuthenticationResponseVerificationRequest>;
interface IWrapper {
    /**
     * Use this to handle a 3DSecure redirect response or UnionPay authentication, updating the transaction and continuing processing.
     * @summary Update a 3DSecure or UnionPay payment and continue processing.
     * @param: {FinalizeTransactionParams} params
     * @throws {RequiredError}
     */
    finalizeSecureTransaction(params: FinalizeTransactionParams): AxiosPromise<TransactionResponse>;
    /**
     * Used to capture/complete an existing transaction. Partial postauths are allowed.
     * @summary Capture/complete a transaction.
     * @param {SecondaryTxPaymentParams} params
     * @throws {RequiredError}
     */
    performPaymentPostAuthorisation(params: SecondaryTxPaymentParams): AxiosPromise<TransactionResponse>;
    /**
     * Use this to originate a financial transaction, like a sale, preauthorization, or credit.
     * @summary Generate a primary transaction.
     * @param {PrimaryTransactionParams} params
     * @throws {RequiredError}
     */
    primaryPaymentTransaction(params: PrimaryTransactionParams): AxiosPromise<TransactionResponse>;
    /**
     * Use this to return/refund an existing transaction.  Partial returns are allowed.
     * @summary Return/refund a transaction.
     * @param {SecondaryTxPaymentParams} params
     * @throws {RequiredError}
     */
    returnTransaction(params: SecondaryTxPaymentParams): AxiosPromise<TransactionResponse>;
    /**
     * Use this query to get the current state of an existing transaction.
     * @summary Retrieve the state of a transaction.
     * @param {PaymentParams} params
     * @throws {RequiredError}
     */
    transactionInquiry(params: PaymentParams): AxiosPromise<TransactionResponse>;
    /**
     * Use this to reverse a postauth/completion, credit, preauth, or sale.
     * @summary Reverse a previous action on an existing transaction.
     * @param {PaymentParams} params
     * @throws {RequiredError}
     */
    voidTransaction(params: PaymentParams): AxiosPromise<TransactionResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    finalizeSecureTransaction(params: FinalizeTransactionParams): AxiosPromise<TransactionResponse>;
    performPaymentPostAuthorisation(params: SecondaryTxPaymentParams): AxiosPromise<TransactionResponse>;
    primaryPaymentTransaction(params: PrimaryTransactionParams): AxiosPromise<TransactionResponse>;
    returnTransaction(params: SecondaryTxPaymentParams): AxiosPromise<TransactionResponse>;
    transactionInquiry(params: PaymentParams): AxiosPromise<TransactionResponse>;
    voidTransaction(params: PaymentParams): AxiosPromise<TransactionResponse>;
}
export { IWrapper as IPaymentApi };
export { Wrapper as PaymentApi };
export { PaymentParams };
export { SecondaryTxPaymentParams };
export { PrimaryTransactionParams };
export { FinalizeTransactionParams };
