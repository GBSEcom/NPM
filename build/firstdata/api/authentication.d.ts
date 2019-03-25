import { AxiosPromise } from "axios";
import { AuthenticationApiInterface as IGenerated } from "../../openapi/api";
import { IContext } from "../context";
import { AccessTokenResponse } from "../models";
import { BaseApi } from "./base";
interface IWrapper {
    /**
     * This is the access token generation call for authorizing subsequent financial transactions. A valid access token is required for web client requests.
     * @summary Generate an access token for user authentication.
     * @throws {RequiredError}
     */
    getAccessToken(): AxiosPromise<AccessTokenResponse>;
}
declare class Wrapper extends BaseApi<IGenerated> implements IWrapper {
    constructor(context: IContext);
    getAccessToken(): AxiosPromise<AccessTokenResponse>;
}
export { IWrapper as IAuthenticationApi };
export { Wrapper as AuthenticationApi };
