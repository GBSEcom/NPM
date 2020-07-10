"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal
 */
var BaseApi = /** @class */ (function () {
    function BaseApi(context, apiClass) {
        this.context = context;
        this.apiClient = new apiClass(null, context.basePath, context.axios);
    }
    Object.defineProperty(BaseApi.prototype, "client", {
        get: function () {
            return this.apiClient;
        },
        enumerable: true,
        configurable: true
    });
    return BaseApi;
}());
exports.BaseApi = BaseApi;
