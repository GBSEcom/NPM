import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { VerificationApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, CardVerificationRequest, AccountVerificationRequest, TransactionResponse } from "../models";
declare type VerifyCardParams = ApiField<"region"> & ApiField<"payload", CardVerificationRequest>;
declare type VerifyAcctParams = ApiField<"region"> & ApiField<"payload", AccountVerificationRequest>;
interface IWrapper {
    /**
     * Use this to perform card verification for a payment card.
     * @summary Verify a payment card.
     * @param {VerifyCardParams} params
     * @throws {RequiredError}
     */
    verifyCard(params: VerifyCardParams): AxiosPromise<TransactionResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    verifyCard(params: VerifyCardParams): AxiosPromise<TransactionResponse>;
    verifyAcct(params: VerifyAcctParams): AxiosPromise<TransactionResponse>;
}
export { IWrapper as IVerificationApi };
export { Wrapper as VerificationApi };
export { VerifyCardParams };
export { VerifyAcctParams };
