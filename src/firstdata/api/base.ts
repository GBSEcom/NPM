
import {AxiosInstance} from "axios";
import {IContext} from "../context";
import {Configuration} from "../../openapi";

type ApiClass<T> = { new(cfg: Configuration|undefined, basePath: string, axios: AxiosInstance): T }

/**
 * @internal
 */
class BaseApi<T> {

  private apiClient: T;

  protected constructor(protected readonly context: IContext, apiClass: ApiClass<T>) {
    this.apiClient = new apiClass((null as unknown) as undefined, context.basePath, context.axios);
  }

  protected get client(): T {
    return this.apiClient;
  }
}

// EXPORTS
export {BaseApi};
