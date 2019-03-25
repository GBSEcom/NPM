import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { FraudDetectApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, ScoreOnlyRequest, ScoreOnlyResponse } from "../models";
declare type ScoreOnlyParams = ApiField<"region"> & ApiField<"payload", ScoreOnlyRequest>;
interface IWrapper {
    /**
     * Use this to obtain a fraud score for a transaction.
     * @summary Score a transaction for fraud.
     * @param {ScoreOnlyParams} params
     * @throws {RequiredError}
     */
    scoreOnly(params: ScoreOnlyParams): AxiosPromise<ScoreOnlyResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    scoreOnly(params: ScoreOnlyParams): AxiosPromise<ScoreOnlyResponse>;
}
export { IWrapper as IFraudDetectApi };
export { Wrapper as FraudDetectApi };
export { ScoreOnlyParams };
