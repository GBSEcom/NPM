import { AxiosInstance } from "axios";
import { IClientFactory } from "./factory";
interface ICredentials {
    apiKey: string;
    apiSecret: string;
}
interface IHeaders {
    apiKey: string;
    contentType: "application/json";
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
    readonly factory: IClientFactory;
    genHeaders(payload?: unknown): IHeaders;
}
declare class Context implements IContext {
    readonly axios: AxiosInstance;
    readonly basePath: string;
    readonly credentials: ICredentials;
    readonly factory: IClientFactory;
    readonly region?: string;
    readonly storeId?: string;
    constructor(config: IConfiguration);
    genHeaders(payload?: unknown): IHeaders;
}
export { ICredentials };
export { IHeaders };
export { IConfiguration };
export { IContext };
export { Context };
