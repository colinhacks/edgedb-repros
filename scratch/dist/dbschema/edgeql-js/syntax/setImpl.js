"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const { TypeKind, ExpressionKind, Cardinality, cardinalityUtil, $mergeObjectTypes, unwrapCastableType } = require("edgedb/dist/reflection/index");
const castMaps = __importStar(require("../castMaps"));
const { $expressionify } = require("./path");
function set(..._exprs) {
    // if no arg
    // if arg
    //   return empty set
    // if object set
    //   merged objects
    // if primitive
    //   return shared parent of scalars
    if (_exprs.length === 0) {
        return null;
    }
    const exprs = _exprs.map(expr => castMaps.literalToTypeSet(expr));
    if (exprs.every((expr) => expr.__element__.__kind__ === TypeKind.object)) {
        // merge object types;
        return $expressionify({
            __kind__: ExpressionKind.Set,
            __element__: exprs
                .map((expr) => expr.__element__)
                .reduce($mergeObjectTypes),
            __cardinality__: cardinalityUtil.mergeCardinalitiesVariadic(exprs.map((expr) => expr.__cardinality__)),
            __exprs__: exprs,
        });
    }
    if (exprs.every((expr) => expr.__element__.__kind__ !== TypeKind.object)) {
        return $expressionify({
            __kind__: ExpressionKind.Set,
            __element__: exprs
                .map((expr) => expr.__element__)
                .reduce(castMaps.getSharedParentScalar),
            __cardinality__: cardinalityUtil.mergeCardinalitiesVariadic(exprs.map((expr) => expr.__cardinality__)),
            __exprs__: exprs,
        });
    }
    throw new Error(`Invalid arguments to set constructor: ${(_exprs)
        .map((expr) => expr.__element__.__name__)
        .join(", ")}`);
}
Object.assign(exports, { set: set });
