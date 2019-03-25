import { AxiosPromise } from "axios";
import { BaseApi } from "./base";
import { PaymentSchedulesApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, PaymentSchedulesRequest, PaymentSchedulesResponse, RecurringPaymentDetailsResponse } from "../models";
declare type ExistingPaymentScheduleParams = ApiField<"region"> & ApiField<"storeId"> & ApiField<"orderId">;
declare type CreatePaymentScheduleParams = ApiField<"region"> & ApiField<"payload", PaymentSchedulesRequest>;
declare type UpdatePaymentScheduleParams = CreatePaymentScheduleParams & ExistingPaymentScheduleParams;
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
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    cancelPaymentSchedule(params: ExistingPaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse>;
    createPaymentSchedule(params: CreatePaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse>;
    inquiryPaymentSchedule(params: ExistingPaymentScheduleParams): AxiosPromise<RecurringPaymentDetailsResponse>;
    updatePaymentSchedule(params: UpdatePaymentScheduleParams): AxiosPromise<PaymentSchedulesResponse>;
}
export { IWrapper as IPaymentSchedulesApi };
export { Wrapper as PaymentSchedulesApi };
export { ExistingPaymentScheduleParams };
export { CreatePaymentScheduleParams };
export { UpdatePaymentScheduleParams };
