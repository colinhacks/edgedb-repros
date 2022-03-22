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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const edgedb_1 = require("edgedb");
const edgeql_js_1 = __importDefault(require("./dbschema/edgeql-js"));
const client = (0, edgedb_1.createClient)();
const query = edgeql_js_1.default.select(edgeql_js_1.default.Labor_union, () => ({
    union_name: {
        name: true,
    },
}));
console.log(query.toEdgeQL());
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield query.run(client);
        console.log(result);
    });
}
run();
