import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {CardInfoLookupApi as Generated, CardInfoLookupApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {ApiField, CardInfoLookupRequest, CardInfoLookupResponse} from "../models";

type CardInfoLookupParams =
  ApiField<"region"> &
  ApiField<"payload", CardInfoLookupRequest>;

interface IWrapper {
    /**
     * Use this to look up card related information such as issuer country, card function and card brand.
     * @summary Card information lookUp
     * @param {CardInfoLookupParams} params
     * @throws {RequiredError}
     */
  cardInfoLookup(params: CardInfoLookupParams): AxiosPromise<CardInfoLookupResponse>;
}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public cardInfoLookup(params: CardInfoLookupParams): AxiosPromise<CardInfoLookupResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.cardInfoLookup(
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
export {IWrapper as ICardInfoLookupApi};
export {Wrapper as CardInfoLookupApi};
export {CardInfoLookupParams};

