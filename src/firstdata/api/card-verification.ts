import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {CardVerificationApi as Generated, CardVerificationApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {ApiField, CardVerificationRequest, TransactionResponse} from "../models";

type VerifyCardParams =
  ApiField<"region"> &
  ApiField<"payload", CardVerificationRequest>;

interface IWrapper {
    /**
     * Use this to perform card verification for a payment card.
     * @summary Verify a payment card.
     * @param {VerifyCardParams} params
     * @throws {RequiredError}
     */
    verifyCard(params: VerifyCardParams): AxiosPromise<TransactionResponse>;
}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public verifyCard(params: VerifyCardParams): AxiosPromise<TransactionResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.verifyCard(
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
export {IWrapper as ICardVerificationApi};
export {Wrapper as CardVerificationApi};
export {VerifyCardParams};

