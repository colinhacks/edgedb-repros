"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$queryFunc = void 0;
const reflection_1 = require("edgedb/dist/reflection");
const params_1 = require("./params");
const select_1 = require("./select");
const runnableExpressionKinds = new Set([
    reflection_1.ExpressionKind.Select,
    reflection_1.ExpressionKind.Update,
    reflection_1.ExpressionKind.Insert,
    reflection_1.ExpressionKind.InsertUnlessConflict,
    reflection_1.ExpressionKind.Delete,
    reflection_1.ExpressionKind.For,
    reflection_1.ExpressionKind.With,
    reflection_1.ExpressionKind.WithParams,
]);
const wrappedExprCache = new WeakMap();
function $queryFunc(cxn, args) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const expr = runnableExpressionKinds.has(this.__kind__)
            ? this
            : (_a = wrappedExprCache.get(this)) !== null && _a !== void 0 ? _a : wrappedExprCache.set(this, (0, select_1.select)(this)).get(this);
        const _args = (0, params_1.jsonifyComplexParams)(expr, args);
        if (expr.__cardinality__ === reflection_1.Cardinality.One ||
            expr.__cardinality__ === reflection_1.Cardinality.AtMostOne) {
            return cxn.querySingle(expr.toEdgeQL(), _args);
        }
        else {
            return cxn.query(expr.toEdgeQL(), _args);
        }
    });
}
exports.$queryFunc = $queryFunc;
