import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {
  CurrencyConversionApi as Generated,
  CurrencyConversionApiInterface as IGenerated,
} from "../../openapi/api";
import {IContext} from "../context";
import {
  ApiField,
  ExchangeRateRequest,
  ExchangeRateResponse,
} from "../models";

type ExchangeRateParams =
  ApiField<"region"> &
  ApiField<"payload", ExchangeRateRequest>;

interface IWrapper {
    /**
     * Sale, return and lookup exchange rate with dynamic currency conversion option
     * @summary Generate dynamic currency conversion transactions
     * @param {ExchangeRateParams} params
     * @throws {RequiredError}
     */
    getExchangeRate(params: ExchangeRateParams): AxiosPromise<ExchangeRateResponse>;

}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public getExchangeRate(params: ExchangeRateParams): AxiosPromise<ExchangeRateResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.getExchangeRate(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.payload,
      headers.messageSignature,
      params.region || this.context.region,
    );
  }
}

// EXPORTS
export {IWrapper as ICurrencyConversionApi};
export {Wrapper as CurrencyConversionApi};
export {ExchangeRateParams};

