import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { CardInfoLookupApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, CardInfoLookupRequest, CardInfoLookupResponse } from "../models";
declare type CardInfoLookupParams = ApiField<"region"> & ApiField<"payload", CardInfoLookupRequest>;
interface IWrapper {
    /**
     * Use this to look up card related information such as issuer country, card function and card brand.
     * @summary Card information lookUp
     * @param {CardInfoLookupParams} params
     * @throws {RequiredError}
     */
    cardInfoLookup(params: CardInfoLookupParams): AxiosPromise<CardInfoLookupResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    cardInfoLookup(params: CardInfoLookupParams): AxiosPromise<CardInfoLookupResponse>;
}
export { IWrapper as ICardInfoLookupApi };
export { Wrapper as CardInfoLookupApi };
export { CardInfoLookupParams };
