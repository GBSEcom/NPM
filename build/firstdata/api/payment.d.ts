import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { PaymentApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, AuthenticationVerificationRequest, PrimaryTransaction, SecondaryTransaction, TransactionResponse } from "../models";
declare type PaymentParams = ApiField<"region"> & ApiField<"transactionId"> & ApiField<"storeId">;
declare type SecondaryTxPaymentParams = PaymentParams & ApiField<"payload", SecondaryTransaction>;
declare type PrimaryTransactionParams = ApiField<"region"> & ApiField<"payload", PrimaryTransaction>;
declare type FinalizeTransactionParams = ApiField<"region"> & ApiField<"transactionId"> & ApiField<"payload", AuthenticationVerificationRequest>;
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
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    finalizeSecureTransaction(params: FinalizeTransactionParams): AxiosPromise<TransactionResponse>;
    primaryTransaction(params: PrimaryTransactionParams): AxiosPromise<TransactionResponse>;
    secondaryTransaction(params: SecondaryTxPaymentParams): AxiosPromise<TransactionResponse>;
    transactionInquiry(params: PaymentParams): AxiosPromise<TransactionResponse>;
}
export { IWrapper as IPaymentApi };
export { Wrapper as PaymentApi };
export { PaymentParams };
export { SecondaryTxPaymentParams };
export { PrimaryTransactionParams };
export { FinalizeTransactionParams };
