import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { CardVerificationApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, CardVerificationRequest, TransactionResponse } from "../models";
declare type VerifyCardParams = ApiField<"region"> & ApiField<"payload", CardVerificationRequest>;
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
}
export { IWrapper as ICardVerificationApi };
export { Wrapper as CardVerificationApi };
export { VerifyCardParams };
