import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {
  FraudDetectApi as Generated,
  FraudDetectApiInterface as IGenerated,
} from "../../openapi/api";
import {IContext} from "../context";
import {
  ApiField,
  ScoreOnlyRequest,
  ScoreOnlyResponse,
} from "../models";

type ScoreOnlyParams =
  ApiField<"region"> &
  ApiField<"payload", ScoreOnlyRequest>;

interface IWrapper {
    /**
     * Use this to obtain a fraud score for a transaction.
     * @summary Score a transaction for fraud.
     * @param {ScoreOnlyParams} params
     * @throws {RequiredError}
     */
    scoreOnly(params: ScoreOnlyParams): AxiosPromise<ScoreOnlyResponse>;

}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public scoreOnly(params: ScoreOnlyParams): AxiosPromise<ScoreOnlyResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.scoreOnly(
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
export {IWrapper as IFraudDetectApi};
export {Wrapper as FraudDetectApi};
export {ScoreOnlyParams};

