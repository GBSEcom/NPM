import globalAxios, {AxiosInstance} from "axios";
import * as uuidv4 from "uuid/v4";
import {HmacSHA256} from "crypto-js";
import * as Base64 from "crypto-js/enc-base64";
import {ClientFactory, IClientFactory} from "./factory";

interface ICredentials {
  apiKey: string;
  apiSecret: string;
}

interface IHeaders {
  apiKey: string;
  contentType: "application/json";
  userAgentId: string;
  clientRequestId: string;
  timestamp: number;
  messageSignature: string;
}

interface IConfiguration {
  basePath: string;
  credentials: ICredentials;
  storeId?: string;
  region?: string;
  axios?: AxiosInstance;
  factory?: IClientFactory;
}

interface IContext extends IConfiguration {
  readonly axios: AxiosInstance;
  readonly basePath: string;
  readonly credentials: ICredentials;
  readonly factory: IClientFactory

  genHeaders(payload?: unknown): IHeaders;
}

const CONTENT_TYPE = "application/json";

const USER_AGENT_ID = "IPG-SDK/21.1/npm";

type SupplierFn<T> = () => T;

const genClientRequestId: SupplierFn<string> = uuidv4;

const genTimestamp: SupplierFn<number> = () =>
  new Date().getTime();

const genMsgSignature = (secret: string, data: string): string =>
  Base64.stringify(HmacSHA256(data, secret));

const genHeaders = (creds: ICredentials, payload?: unknown): IHeaders => {
  const apiKey = creds.apiKey;
  const contentType = CONTENT_TYPE;
  const userAgentId = USER_AGENT_ID;
  const clientRequestId = genClientRequestId();
  const timestamp = genTimestamp();

  let data = apiKey +
    clientRequestId +
    timestamp;

  if (payload) {
    data = data.concat(JSON.stringify(payload));
  }

  const messageSignature = genMsgSignature(
    creds.apiSecret.toString(),
    data
  );

  return {apiKey, contentType, userAgentId, clientRequestId, timestamp, messageSignature};
};

class Context implements IContext {
  public readonly axios: AxiosInstance;
  public readonly basePath: string;
  public readonly credentials: ICredentials;
  public readonly factory: IClientFactory;
  public readonly region?: string;
  public readonly storeId?: string;

  public constructor(
    config: IConfiguration,
  ) {
    this.axios = config.axios || globalAxios;
    this.basePath = config.basePath;
    this.credentials = config.credentials;
    this.factory = config.factory || new ClientFactory(this);
    this.region = config.region || undefined;
    this.storeId = config.storeId || undefined;
  }

  public genHeaders(payload?: unknown): IHeaders {
    return genHeaders(this.credentials, payload);
  }
}

// EXPORTS
export {ICredentials};
export {IHeaders};
export {IConfiguration};
export {IContext};
export {Context};

