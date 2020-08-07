import {AxiosPromise} from "axios";
import {AuthenticationApi as Generated, AuthenticationApiInterface as IGenerated} from "../../openapi/api";
import {IContext} from "../context";
import {ApiField, AccessTokenResponse, AccessTokenRequest} from "../models";
import {BaseApi} from "./base";

type GetAccessTokenParams =
  ApiField<"payload", AccessTokenRequest>;

interface IWrapper {
    /**
     * This is the access token generation call for authorizing subsequent financial transactions. A valid access token is required for web client requests.
     * @summary Generate an access token for user authentication.
     * @throws {RequiredError}
     */
    getAccessToken(params: GetAccessTokenParams): AxiosPromise<AccessTokenResponse>;
}

class Wrapper extends BaseApi<IGenerated> implements IWrapper {
  public constructor(context: IContext) { super(context, Generated); }

  public getAccessToken(params: GetAccessTokenParams): AxiosPromise<AccessTokenResponse> {
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
export {GetAccessTokenParams};

