"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal
 */
class BaseApi {
    constructor(context, apiClass) {
        this.context = context;
        this.apiClient = new apiClass(null, context.basePath, context.axios);
    }
    get client() {
        return this.apiClient;
    }
}
exports.BaseApi = BaseApi;
