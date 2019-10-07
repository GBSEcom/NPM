import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { FraudDetectApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, ScoreOnlyRequest, ScoreOnlyResponse, ClientRegistration, PaymentRegistration, FraudRegistrationResponse } from "../models";
declare type ScoreOnlyParams = ApiField<"region"> & ApiField<"payload", ScoreOnlyRequest>;
declare type ClientRegistrationParams = ApiField<"region"> & ApiField<"payload", ClientRegistration>;
declare type PaymentRegistrationParams = ApiField<"region"> & ApiField<"payload", PaymentRegistration>;
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
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    scoreOnly(params: ScoreOnlyParams): AxiosPromise<ScoreOnlyResponse>;
    fraudClientRegistrationPost(params: ClientRegistrationParams): AxiosPromise<FraudRegistrationResponse>;
    fraudPaymentRegistrationPost(params: PaymentRegistrationParams): AxiosPromise<FraudRegistrationResponse>;
}
export { IWrapper as IFraudDetectApi };
export { Wrapper as FraudDetectApi };
export { ScoreOnlyParams };
export { ClientRegistrationParams };
export { PaymentRegistrationParams };
