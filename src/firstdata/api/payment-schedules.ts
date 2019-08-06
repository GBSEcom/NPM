import {AxiosPromise} from "axios";
import {BaseApi} from "./base";
import {PaymentSchedulesApi as Generated, PaymentSchedulesApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {
  ApiField,
  PaymentSchedulesRequest,
  PaymentSchedulesResponse,
  RecurringPaymentDetailsResponse,
} from "../models";

type ExistingPaymentScheduleParams =
  ApiField<"region"> &
  ApiField<"storeId"> &
  ApiField<"orderId">;

type CreatePaymentScheduleParams =
  ApiField<"region"> &
  ApiField<"payload", PaymentSchedulesRequest>;

type UpdatePaymentScheduleParams =
  CreatePaymentScheduleParams &
  ExistingPaymentScheduleParams;

interface IWrapper {
    /**
     * Use this to cancel an existing gateway payment schedule.
     * @summary Cancel a gateway payment schedule.
     * @param {ExistingPaymentScheduleParams} params
     * @throws {RequiredError}
     */
    cancelPaymentSchedule(params: ExistingPaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse>;

    /**
     * This can be used to create a gateway payment schedule.
     * @summary Use this to create a gateway payment schedule.
     * @param {CreatePaymentScheduleParams} params
     * @throws {RequiredError}
     */
    createPaymentSchedule(params: CreatePaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse>;

    /**
     * This can be used to view an existing gateway payment schedule.
     * @summary View a gateway payment schedule.
     * @param {ExistingPaymentScheduleParams} params
     * @throws {RequiredError}
     */
    inquiryPaymentSchedule(params: ExistingPaymentScheduleParams): AxiosPromise<RecurringPaymentDetailsResponse>;

    /**
     * This can be used to update a gateway payment schedule.
     * @summary Update a gateway payment schedule.
     * @param {UpdatePaymentScheduleParams} params
     * @throws {RequiredError}
     */
    updatePaymentSchedule(params: UpdatePaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse>;
}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  constructor(context: IContext) { super(context, Generated); }

  public cancelPaymentSchedule(params: ExistingPaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse> {
    const headers = this.context.genHeaders();
    return this.client.cancelPaymentSchedule(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.orderId,
      headers.messageSignature,
      params.region || this.context.region,
      params.storeId || this.context.region,
    );
  }

  public createPaymentSchedule(params: CreatePaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.createPaymentSchedule(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.payload,
      headers.messageSignature,
      params.region || this.context.region,
    )
  }

  public inquiryPaymentSchedule(params: ExistingPaymentScheduleParams): AxiosPromise<RecurringPaymentDetailsResponse> {
    const headers = this.context.genHeaders();
    return this.client.inquiryPaymentSchedule(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.orderId,
      headers.messageSignature,
      params.region || this.context.region,
      params.storeId || this.context.region,
    );
  }

  public updatePaymentSchedule(params: UpdatePaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.updatePaymentSchedule(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.orderId,
      params.payload,
      headers.messageSignature,
      params.region || this.context.region
    );
  }
}

// EXPORTS
export {IWrapper as IPaymentSchedulesApi};
export {Wrapper as PaymentSchedulesApi};
export {ExistingPaymentScheduleParams};
export {CreatePaymentScheduleParams};
export {UpdatePaymentScheduleParams};

