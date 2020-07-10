import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { InformationLookupApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, CardInfoLookupRequest, AccountInfoLookupRequest, CardInfoLookupResponse } from "../models";
declare type CardInfoLookupParams = ApiField<"region"> & ApiField<"payload", CardInfoLookupRequest>;
declare type AcctInfoLookupParams = ApiField<"region"> & ApiField<"payload", AccountInfoLookupRequest>;
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
    acctInfoLookup(params: AcctInfoLookupParams): AxiosPromise<CardInfoLookupResponse>;
}
export { IWrapper as IInformationLookupApi };
export { Wrapper as InformationLookupApi };
export { CardInfoLookupParams };
export { AcctInfoLookupParams };
