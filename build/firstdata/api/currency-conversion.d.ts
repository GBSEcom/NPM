import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { CurrencyConversionApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, ExchangeRateRequest, ExchangeRateResponse } from "../models";
declare type ExchangeRateParams = ApiField<"region"> & ApiField<"payload", ExchangeRateRequest>;
interface IWrapper {
    /**
     * Sale, return and lookup exchange rate with dynamic currency conversion option
     * @summary Generate dynamic currency conversion transactions
     * @param {ExchangeRateParams} params
     * @throws {RequiredError}
     */
    getExchangeRate(params: ExchangeRateParams): AxiosPromise<ExchangeRateResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    getExchangeRate(params: ExchangeRateParams): AxiosPromise<ExchangeRateResponse>;
}
export { IWrapper as ICurrencyConversionApi };
export { Wrapper as CurrencyConversionApi };
export { ExchangeRateParams };
