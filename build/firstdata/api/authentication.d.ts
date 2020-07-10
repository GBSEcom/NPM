import { AxiosPromise } from "axios";
import { AuthenticationApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { ApiField, AccessTokenResponse, AccessTokenRequest } from "../models";
import { BaseApi } from "./base";
declare type GetAccessTokenParams = ApiField<"payload", AccessTokenRequest>;
interface IWrapper {
    /**
     * This is the access token generation call for authorizing subsequent financial transactions. A valid access token is required for web client requests.
     * @summary Generate an access token for user authentication.
     * @throws {RequiredError}
     */
    getAccessToken(params: GetAccessTokenParams): AxiosPromise<AccessTokenResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    getAccessToken(params: GetAccessTokenParams): AxiosPromise<AccessTokenResponse>;
}
export { IWrapper as IAuthenticationApi };
export { Wrapper as AuthenticationApi };
export { GetAccessTokenParams };
