"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts path params captured by [...varName] from a single string (the format returned by Edgio's router)
 * to arrays split by "/" (the format that Next.js provides).
 * @param {String} page The page route path
 * @param {Object} params The params captured by Edgio router
 * @return {Object} A new params object
 */
function convertSplatParamsToArray(page, params) {
    if (!params)
        return params;
    const changes = {};
    const splatPattern = /\[\.\.\.([^\]]+)\]/g;
    let match;
    while ((match = splatPattern.exec(page))) {
        const name = match[1];
        const value = params[name];
        /* istanbul ignore else */
        if (typeof value === 'string') {
            changes[name] = value.split('/');
        }
    }
    return { ...params, ...changes };
}
exports.convertSplatParamsToArray = convertSplatParamsToArray;
