import {AxiosPromise} from "axios";
import {AuthenticationApi as Generated, AuthenticationApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {AccessTokenResponse} from "../models";
import {BaseApi} from "./base";
import {
ApiField,
AccessTokenRequest} from "../models";

type AccessTokenParams = 
	ApiField<"payload",AccessTokenRequest>;

interface IWrapper {
    /**
     * This is the access token generation call for authorizing subsequent financial transactions. A valid access token is required for web client requests.
     * @summary Generate an access token for user authentication.
     * @throws {RequiredError}
     */
    getAccessToken(params:AccessTokenParams): AxiosPromise<AccessTokenResponse>;
}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public getAccessToken(params:AccessTokenParams): AxiosPromise<AccessTokenResponse> {
    const headers = this.context.genHeaders(params.payload);
    return this.client.authenticationAccessTokensPost(
      headers.contentType,
      headers.clientRequestId,
      headers.apiKey,
      headers.timestamp,
      params.payload,
      headers.messageSignature,
    );
  }
}

// EXPORTS
export {IWrapper as IAuthenticationApi};
export {Wrapper as AuthenticationApi};
export {AccessTokenParams};

