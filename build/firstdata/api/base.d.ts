import { AxiosInstance } from "axios";
import { IContext } from "../context";
import { Configuration } from "../../openapi";
declare type ApiClass<T> = {
    new (cfg: Configuration | undefined, basePath: string, axios: AxiosInstance): T;
};
/**
 * @internal
 */
declare class BaseApi<T> {
    protected readonly context: IContext;
    private apiClient;
    protected constructor(context: IContext, apiClass: ApiClass<T>);
    protected readonly client: T;
}
export { BaseApi };
