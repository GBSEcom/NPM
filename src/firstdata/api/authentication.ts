import {AxiosPromise} from "axios";
import {
  AuthenticationApi as Generated,
  AuthenticationApiInterface as IGenerated,
} from "../../openapi/api";
import {IContext} from "../context";
import {AccessTokenResponse} from "../models";
import {BaseApi} from "./base";

interface IWrapper {
    /**
     * This is the access token generation call for authorizing subsequent financial transactions. A valid access token is required for web client requests.
     * @summary Generate an access token for user authentication.
     * @throws {RequiredError}
     */
    getAccessToken(): AxiosPromise<AccessTokenResponse>;
}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public getAccessToken(): AxiosPromise<AccessTokenResponse> {
    const headers = this.context.genHeaders();
    return this.client.v1AuthenticationAccessTokensPost(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      headers.messageSignature,
    );
  }
}

// EXPORTS
export {IWrapper as IAuthenticationApi};
export {Wrapper as AuthenticationApi};

