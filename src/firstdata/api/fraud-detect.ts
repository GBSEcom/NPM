import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {FraudDetectApi as Generated, FraudDetectApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {ApiField, ScoreOnlyRequest, ScoreOnlyResponse,ClientRegistration,PaymentRegistration,FraudRegistrationResponse} from "../models";

type ScoreOnlyParams =
  ApiField<"region"> &
  ApiField<"payload", ScoreOnlyRequest>;

type ClientRegistrationParams = 
	ApiField<"region"> &
	ApiField<"payload", ClientRegistration>;

type PaymentRegistrationParams = 
	ApiField<"region"> &
	ApiField<"payload", PaymentRegistration>;

interface IWrapper {
    /**
     * Use this to obtain a fraud score for a transaction.
     * @summary Score a transaction for fraud.
     * @param {ScoreOnlyParams} params
     * @throws {RequiredError}
     */
    scoreOnly(params: ScoreOnlyParams): AxiosPromise<ScoreOnlyResponse>;

    /**
     * Use this for client registration.
     * @summary Register a client.
     * @param {ClientRegistrationParams} params
     * @throws {RequiredError}
     */
	fraudClientRegistrationPost(params: ClientRegistrationParams): AxiosPromise<FraudRegistrationResponse>;

	/**
     * Use this for payment registration.
     * @summary Register a payment.
     * @param {PaymentRegistrationParams} params
     * @throws {RequiredError}
     */
    fraudPaymentRegistrationPost(params: PaymentRegistrationParams): AxiosPromise<FraudRegistrationResponse>;
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

  public fraudClientRegistrationPost(params: ClientRegistrationParams): AxiosPromise<FraudRegistrationResponse>{
  	const headers = this.context.genHeaders(params.payload);
  	return this.client.fraudClientRegistrationPost(
  	headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.payload,
      headers.messageSignature,
      params.region || this.context.region,
  	);
  }

  public fraudPaymentRegistrationPost(params: PaymentRegistrationParams): AxiosPromise<FraudRegistrationResponse>{
  const headers = this.context.genHeaders(params.payload);
  	return this.client.fraudPaymentRegistrationPost(
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
export {ClientRegistrationParams};
export {PaymentRegistrationParams};

