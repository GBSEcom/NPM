import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {InformationLookupApi as Generated, InformationLookupApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {ApiField, CardInfoLookupRequest, AccountInfoLookupRequest, CardInfoLookupResponse} from "../models";

type CardInfoLookupParams =
  ApiField<"region"> &
  ApiField<"payload", CardInfoLookupRequest>;

type AcctInfoLookupParams =
  ApiField<"region"> &
  ApiField<"payload", AccountInfoLookupRequest>;


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

  public acctInfoLookup(params: AcctInfoLookupParams): AxiosPromise<CardInfoLookupResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.lookupAccount(
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
export {IWrapper as IInformationLookupApi};
export {Wrapper as InformationLookupApi};
export {CardInfoLookupParams};
export {AcctInfoLookupParams};

