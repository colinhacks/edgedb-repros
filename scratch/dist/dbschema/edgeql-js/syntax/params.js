"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonifyComplexParams = exports.params = exports.optional = void 0;
const reflection_1 = require("edgedb/dist/reflection");
const path_1 = require("./path");
function optional(type) {
    return {
        __kind__: reflection_1.ExpressionKind.OptionalParam,
        __type__: type,
    };
}
exports.optional = optional;
const complexParamKinds = new Set([reflection_1.TypeKind.tuple, reflection_1.TypeKind.namedtuple]);
function params(paramsDef, expr) {
    const paramExprs = {};
    for (const [key, param] of Object.entries(paramsDef)) {
        const paramType = param.__kind__ === reflection_1.ExpressionKind.OptionalParam ? param.__type__ : param;
        const isComplex = complexParamKinds.has(paramType.__kind__) ||
            (paramType.__kind__ === reflection_1.TypeKind.array &&
                complexParamKinds.has(paramType.__element__.__kind__));
        paramExprs[key] = (0, path_1.$expressionify)({
            __kind__: reflection_1.ExpressionKind.Param,
            __element__: paramType,
            __cardinality__: param.__kind__ === reflection_1.ExpressionKind.OptionalParam
                ? reflection_1.Cardinality.AtMostOne
                : reflection_1.Cardinality.One,
            __name__: key,
            __isComplex__: isComplex,
        });
    }
    const returnExpr = expr(paramExprs);
    return (0, path_1.$expressionify)({
        __kind__: reflection_1.ExpressionKind.WithParams,
        __element__: returnExpr.__element__,
        __cardinality__: returnExpr.__cardinality__,
        __expr__: returnExpr,
        __params__: Object.values(paramExprs),
    });
}
exports.params = params;
function jsonStringify(type, val) {
    if (type.__kind__ === reflection_1.TypeKind.array) {
        if (Array.isArray(val)) {
            return `[${val
                .map(item => jsonStringify(type.__element__, item))
                .join()}]`;
        }
        throw new Error(`Param with array type is not an array`);
    }
    if (type.__kind__ === reflection_1.TypeKind.tuple) {
        if (!Array.isArray(val)) {
            throw new Error(`Param with tuple type is not an array`);
        }
        if (val.length !== type.__items__.length) {
            throw new Error(`Param with tuple type has incorrect number of items. Got ${val.length} expected ${type.__items__.length}`);
        }
        return `[${val
            .map((item, i) => jsonStringify(type.__items__[i], item))
            .join()}]`;
    }
    if (type.__kind__ === reflection_1.TypeKind.namedtuple) {
        if (typeof val !== "object") {
            throw new Error(`Param with named tuple type is not an object`);
        }
        if (Object.keys(val).length !== Object.keys(type.__shape__).length) {
            throw new Error(`Param with named tuple type has incorrect number of items. Got ${Object.keys(val).length} expected ${Object.keys(type.__shape__).length}`);
        }
        return `{${Object.entries(val)
            .map(([key, item]) => {
            if (!type.__shape__[key]) {
                throw new Error(`Unexpected key in named tuple param: ${key}, expected keys: ${Object.keys(type.__shape__).join()}`);
            }
            return `"${key}": ${jsonStringify(type.__shape__[key], item)}`;
        })
            .join()}}`;
    }
    if (type.__kind__ === reflection_1.TypeKind.scalar) {
        switch (type.__name__) {
            case "std::bigint":
                return val.toString();
            case "std::json":
                return val;
            case "std::bytes":
                return `"${val.toString("base64")}"`;
            case "cfg::memory":
                return `"${val.toString()}"`;
            default:
                return JSON.stringify(val);
        }
    }
    throw new Error(`Invalid param type: ${type.__kind__}`);
}
function jsonifyComplexParams(expr, _args) {
    if (_args && expr.__kind__ === reflection_1.ExpressionKind.WithParams) {
        const args = Object.assign({}, _args);
        for (const param of expr.__params__) {
            if (param.__isComplex__) {
                args[param.__name__] = jsonStringify(param.__element__, args[param.__name__]);
            }
        }
        return args;
    }
    return _args;
}
exports.jsonifyComplexParams = jsonifyComplexParams;
