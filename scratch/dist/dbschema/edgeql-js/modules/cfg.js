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
const { $ } = require("edgedb");
const _ = __importStar(require("../imports"));
const $AllowBareDDLλEnum = {
    AlwaysAllow: "AlwaysAllow",
    NeverAllow: "NeverAllow",
};
const AllowBareDDL = $.makeType(_.spec, "fdda2586-82c4-11ec-94dc-c933c9787da9", _.syntax.literal);
const memory = $.makeType(_.spec, "00000000-0000-0000-0000-000000000130", _.syntax.literal);
const $ConfigObject = $.makeType(_.spec, "fd8ae23c-82c4-11ec-a36e-f5158030cb0d", _.syntax.literal);
const ConfigObject = _.syntax.$PathNode($.$toSet($ConfigObject, $.Cardinality.Many), null, true);
const $AbstractConfig = $.makeType(_.spec, "fe3f8ebc-82c4-11ec-8777-2f4d910b1e9d", _.syntax.literal);
const AbstractConfig = _.syntax.$PathNode($.$toSet($AbstractConfig, $.Cardinality.Many), null, true);
const $Auth = $.makeType(_.spec, "fddb835e-82c4-11ec-8730-6fcc13c2d542", _.syntax.literal);
const Auth = _.syntax.$PathNode($.$toSet($Auth, $.Cardinality.Many), null, true);
const $AuthMethod = $.makeType(_.spec, "fd9dd66c-82c4-11ec-9d18-03583e727feb", _.syntax.literal);
const AuthMethod = _.syntax.$PathNode($.$toSet($AuthMethod, $.Cardinality.Many), null, true);
const $Config = $.makeType(_.spec, "fe7bc67a-82c4-11ec-9781-67045aa882e1", _.syntax.literal);
const Config = _.syntax.$PathNode($.$toSet($Config, $.Cardinality.Many), null, true);
const $DatabaseConfig = $.makeType(_.spec, "fef58a32-82c4-11ec-acbd-dd13ef298b2e", _.syntax.literal);
const DatabaseConfig = _.syntax.$PathNode($.$toSet($DatabaseConfig, $.Cardinality.Many), null, true);
const $InstanceConfig = $.makeType(_.spec, "feb80cd4-82c4-11ec-9330-296f6542246b", _.syntax.literal);
const InstanceConfig = _.syntax.$PathNode($.$toSet($InstanceConfig, $.Cardinality.Many), null, true);
const $SCRAM = $.makeType(_.spec, "fdc7b162-82c4-11ec-9513-154578baf0fc", _.syntax.literal);
const SCRAM = _.syntax.$PathNode($.$toSet($SCRAM, $.Cardinality.Many), null, true);
const $Trust = $.makeType(_.spec, "fdb20aba-82c4-11ec-8add-c158ed949e99", _.syntax.literal);
const Trust = _.syntax.$PathNode($.$toSet($Trust, $.Cardinality.Many), null, true);
function get_config_json(...args) {
    const { returnType, cardinality, args: positionalArgs, namedArgs } = _.syntax.$resolveOverload('cfg::get_config_json', args, _.spec, [
        { args: [], namedArgs: { "sources": { typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: true, setoftype: false, variadic: false }, "max_source": { typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false } }, returnTypeId: "00000000-0000-0000-0000-00000000010f" },
    ]);
    return _.syntax.$expressionify({
        __kind__: $.ExpressionKind.Function,
        __element__: returnType,
        __cardinality__: cardinality,
        __name__: "cfg::get_config_json",
        __args__: positionalArgs,
        __namedargs__: namedArgs,
    });
}
;
Object.assign(exports, { $AllowBareDDLλEnum: $AllowBareDDLλEnum, AllowBareDDL: AllowBareDDL, memory: memory, $ConfigObject: $ConfigObject, ConfigObject: ConfigObject, $AbstractConfig: $AbstractConfig, AbstractConfig: AbstractConfig, $Auth: $Auth, Auth: Auth, $AuthMethod: $AuthMethod, AuthMethod: AuthMethod, $Config: $Config, Config: Config, $DatabaseConfig: $DatabaseConfig, DatabaseConfig: DatabaseConfig, $InstanceConfig: $InstanceConfig, InstanceConfig: InstanceConfig, $SCRAM: $SCRAM, SCRAM: SCRAM, $Trust: $Trust, Trust: Trust });
const __defaultExports = {
    "AllowBareDDL": AllowBareDDL,
    "memory": memory,
    "ConfigObject": ConfigObject,
    "AbstractConfig": AbstractConfig,
    "Auth": Auth,
    "AuthMethod": AuthMethod,
    "Config": Config,
    "DatabaseConfig": DatabaseConfig,
    "InstanceConfig": InstanceConfig,
    "SCRAM": SCRAM,
    "Trust": Trust,
    "get_config_json": get_config_json
};
exports.default = __defaultExports;
