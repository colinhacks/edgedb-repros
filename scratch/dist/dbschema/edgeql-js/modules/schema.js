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
const $CardinalityλEnum = {
    One: "One",
    Many: "Many",
};
const Cardinality = $.makeType(_.spec, "f5c1c052-82c4-11ec-add2-83cb03ab1dd2", _.syntax.literal);
const $OperatorKindλEnum = {
    Infix: "Infix",
    Postfix: "Postfix",
    Prefix: "Prefix",
    Ternary: "Ternary",
};
const OperatorKind = $.makeType(_.spec, "f5c3cb2c-82c4-11ec-bc3a-f9fa9bb4669c", _.syntax.literal);
const $ParameterKindλEnum = {
    VariadicParam: "VariadicParam",
    NamedOnlyParam: "NamedOnlyParam",
    PositionalParam: "PositionalParam",
};
const ParameterKind = $.makeType(_.spec, "f5c5cc2e-82c4-11ec-9018-edaf6b5ad05e", _.syntax.literal);
const $TargetDeleteActionλEnum = {
    Restrict: "Restrict",
    DeleteSource: "DeleteSource",
    Allow: "Allow",
    DeferredRestrict: "DeferredRestrict",
};
const TargetDeleteAction = $.makeType(_.spec, "f5c2d578-82c4-11ec-9757-7de511a3e342", _.syntax.literal);
const $TypeModifierλEnum = {
    SetOfType: "SetOfType",
    OptionalType: "OptionalType",
    SingletonType: "SingletonType",
};
const TypeModifier = $.makeType(_.spec, "f5c6ebcc-82c4-11ec-927f-31c82627a64e", _.syntax.literal);
const $VolatilityλEnum = {
    Immutable: "Immutable",
    Stable: "Stable",
    Volatile: "Volatile",
};
const Volatility = $.makeType(_.spec, "f5c4e91c-82c4-11ec-b7f6-ad066768633c", _.syntax.literal);
const $Object_f5c7f8be82c411ecbf8717247162cf40 = $.makeType(_.spec, "f5c7f8be-82c4-11ec-bf87-17247162cf40", _.syntax.literal);
const Object_f5c7f8be82c411ecbf8717247162cf40 = _.syntax.$PathNode($.$toSet($Object_f5c7f8be82c411ecbf8717247162cf40, $.Cardinality.Many), null, true);
const $AnnotationSubject = $.makeType(_.spec, "f752fd96-82c4-11ec-92e5-7b3a35511677", _.syntax.literal);
const AnnotationSubject = _.syntax.$PathNode($.$toSet($AnnotationSubject, $.Cardinality.Many), null, true);
const $Alias = $.makeType(_.spec, "f931af86-82c4-11ec-a6b7-01ed890ddd07", _.syntax.literal);
const Alias = _.syntax.$PathNode($.$toSet($Alias, $.Cardinality.Many), null, true);
const $SubclassableObject = $.makeType(_.spec, "f5d57444-82c4-11ec-a9e1-1b7edc2b55ab", _.syntax.literal);
const SubclassableObject = _.syntax.$PathNode($.$toSet($SubclassableObject, $.Cardinality.Many), null, true);
const $InheritingObject = $.makeType(_.spec, "f76f50f4-82c4-11ec-a8c6-a175363540e5", _.syntax.literal);
const InheritingObject = _.syntax.$PathNode($.$toSet($InheritingObject, $.Cardinality.Many), null, true);
const $Annotation = $.makeType(_.spec, "f73bae8e-82c4-11ec-a10a-d5163e6f7677", _.syntax.literal);
const Annotation = _.syntax.$PathNode($.$toSet($Annotation, $.Cardinality.Many), null, true);
const $Type = $.makeType(_.spec, "f5eaa3f0-82c4-11ec-8951-8d28a47e11d6", _.syntax.literal);
const Type = _.syntax.$PathNode($.$toSet($Type, $.Cardinality.Many), null, true);
const $PrimitiveType = $.makeType(_.spec, "f65fac5e-82c4-11ec-bab8-0345ea32f32b", _.syntax.literal);
const PrimitiveType = _.syntax.$PathNode($.$toSet($PrimitiveType, $.Cardinality.Many), null, true);
const $CollectionType = $.makeType(_.spec, "f67f9d84-82c4-11ec-b8a0-61522b92ff14", _.syntax.literal);
const CollectionType = _.syntax.$PathNode($.$toSet($CollectionType, $.Cardinality.Many), null, true);
const $Array = $.makeType(_.spec, "f6a38550-82c4-11ec-be94-0932b040e87b", _.syntax.literal);
const Array = _.syntax.$PathNode($.$toSet($Array, $.Cardinality.Many), null, true);
const $CallableObject = $.makeType(_.spec, "f7b58830-82c4-11ec-ac95-b34a2200074c", _.syntax.literal);
const CallableObject = _.syntax.$PathNode($.$toSet($CallableObject, $.Cardinality.Many), null, true);
const $VolatilitySubject = $.makeType(_.spec, "f7df7866-82c4-11ec-a75b-ab56fc862e18", _.syntax.literal);
const VolatilitySubject = _.syntax.$PathNode($.$toSet($VolatilitySubject, $.Cardinality.Many), null, true);
const $Cast = $.makeType(_.spec, "fb9b2cca-82c4-11ec-ac4b-7b2b6205ebb7", _.syntax.literal);
const Cast = _.syntax.$PathNode($.$toSet($Cast, $.Cardinality.Many), null, true);
const $ConsistencySubject = $.makeType(_.spec, "f8764f02-82c4-11ec-b4e1-fd3fafdedf0b", _.syntax.literal);
const ConsistencySubject = _.syntax.$PathNode($.$toSet($ConsistencySubject, $.Cardinality.Many), null, true);
const $Constraint = $.makeType(_.spec, "f82ac62c-82c4-11ec-b084-f594199b3134", _.syntax.literal);
const Constraint = _.syntax.$PathNode($.$toSet($Constraint, $.Cardinality.Many), null, true);
const $Delta = $.makeType(_.spec, "f720fa76-82c4-11ec-bfac-cf557659a42f", _.syntax.literal);
const Delta = _.syntax.$PathNode($.$toSet($Delta, $.Cardinality.Many), null, true);
const $Extension = $.makeType(_.spec, "fbfbfe74-82c4-11ec-9b74-591029dfb85c", _.syntax.literal);
const Extension = _.syntax.$PathNode($.$toSet($Extension, $.Cardinality.Many), null, true);
const $Function = $.makeType(_.spec, "fb2a6aee-82c4-11ec-8e97-9d7227211dd9", _.syntax.literal);
const Function = _.syntax.$PathNode($.$toSet($Function, $.Cardinality.Many), null, true);
const $Index = $.makeType(_.spec, "f89eedb8-82c4-11ec-863c-51b7455d6c6c", _.syntax.literal);
const Index = _.syntax.$PathNode($.$toSet($Index, $.Cardinality.Many), null, true);
const $Pointer = $.makeType(_.spec, "f8de0674-82c4-11ec-bba0-4704d075e71e", _.syntax.literal);
const Pointer = _.syntax.$PathNode($.$toSet($Pointer, $.Cardinality.Many), null, true);
const $Source = $.makeType(_.spec, "f8bf2592-82c4-11ec-8932-eba046fbb2c9", _.syntax.literal);
const Source = _.syntax.$PathNode($.$toSet($Source, $.Cardinality.Many), null, true);
const $Link = $.makeType(_.spec, "fa21f2ca-82c4-11ec-a481-b9fcd090677e", _.syntax.literal);
const Link = _.syntax.$PathNode($.$toSet($Link, $.Cardinality.Many), null, true);
const $Migration = $.makeType(_.spec, "fbcfdf10-82c4-11ec-8342-836b16615eb8", _.syntax.literal);
const Migration = _.syntax.$PathNode($.$toSet($Migration, $.Cardinality.Many), null, true);
const $Module = $.makeType(_.spec, "f64d9b2c-82c4-11ec-944a-0978cc00d727", _.syntax.literal);
const Module = _.syntax.$PathNode($.$toSet($Module, $.Cardinality.Many), null, true);
const $ObjectType = $.makeType(_.spec, "f9af39a6-82c4-11ec-bc09-597e81a79322", _.syntax.literal);
const ObjectType = _.syntax.$PathNode($.$toSet($ObjectType, $.Cardinality.Many), null, true);
const $Operator = $.makeType(_.spec, "fb612566-82c4-11ec-a1c2-810ae92be611", _.syntax.literal);
const Operator = _.syntax.$PathNode($.$toSet($Operator, $.Cardinality.Many), null, true);
const $Parameter = $.makeType(_.spec, "f797cf66-82c4-11ec-b9a8-496fc084a0f2", _.syntax.literal);
const Parameter = _.syntax.$PathNode($.$toSet($Parameter, $.Cardinality.Many), null, true);
const $Property = $.makeType(_.spec, "fa889fb6-82c4-11ec-a9a0-db9dbd6e8857", _.syntax.literal);
const Property = _.syntax.$PathNode($.$toSet($Property, $.Cardinality.Many), null, true);
const $PseudoType = $.makeType(_.spec, "f601b07c-82c4-11ec-bf67-315568c14569", _.syntax.literal);
const PseudoType = _.syntax.$PathNode($.$toSet($PseudoType, $.Cardinality.Many), null, true);
const $ScalarType = $.makeType(_.spec, "f9590072-82c4-11ec-9c44-6fef14735ff0", _.syntax.literal);
const ScalarType = _.syntax.$PathNode($.$toSet($ScalarType, $.Cardinality.Many), null, true);
const $Tuple = $.makeType(_.spec, "f6eafa70-82c4-11ec-8989-6754d54b9bde", _.syntax.literal);
const Tuple = _.syntax.$PathNode($.$toSet($Tuple, $.Cardinality.Many), null, true);
const $TupleElement = $.makeType(_.spec, "f6d39786-82c4-11ec-9c58-43ea67342c0a", _.syntax.literal);
const TupleElement = _.syntax.$PathNode($.$toSet($TupleElement, $.Cardinality.Many), null, true);
Object.assign(exports, { $CardinalityλEnum: $CardinalityλEnum, Cardinality: Cardinality, $OperatorKindλEnum: $OperatorKindλEnum, OperatorKind: OperatorKind, $ParameterKindλEnum: $ParameterKindλEnum, ParameterKind: ParameterKind, $TargetDeleteActionλEnum: $TargetDeleteActionλEnum, TargetDeleteAction: TargetDeleteAction, $TypeModifierλEnum: $TypeModifierλEnum, TypeModifier: TypeModifier, $VolatilityλEnum: $VolatilityλEnum, Volatility: Volatility, $Object_f5c7f8be82c411ecbf8717247162cf40: $Object_f5c7f8be82c411ecbf8717247162cf40, Object_f5c7f8be82c411ecbf8717247162cf40: Object_f5c7f8be82c411ecbf8717247162cf40, $AnnotationSubject: $AnnotationSubject, AnnotationSubject: AnnotationSubject, $Alias: $Alias, Alias: Alias, $SubclassableObject: $SubclassableObject, SubclassableObject: SubclassableObject, $InheritingObject: $InheritingObject, InheritingObject: InheritingObject, $Annotation: $Annotation, Annotation: Annotation, $Type: $Type, Type: Type, $PrimitiveType: $PrimitiveType, PrimitiveType: PrimitiveType, $CollectionType: $CollectionType, CollectionType: CollectionType, $Array: $Array, Array: Array, $CallableObject: $CallableObject, CallableObject: CallableObject, $VolatilitySubject: $VolatilitySubject, VolatilitySubject: VolatilitySubject, $Cast: $Cast, Cast: Cast, $ConsistencySubject: $ConsistencySubject, ConsistencySubject: ConsistencySubject, $Constraint: $Constraint, Constraint: Constraint, $Delta: $Delta, Delta: Delta, $Extension: $Extension, Extension: Extension, $Function: $Function, Function: Function, $Index: $Index, Index: Index, $Pointer: $Pointer, Pointer: Pointer, $Source: $Source, Source: Source, $Link: $Link, Link: Link, $Migration: $Migration, Migration: Migration, $Module: $Module, Module: Module, $ObjectType: $ObjectType, ObjectType: ObjectType, $Operator: $Operator, Operator: Operator, $Parameter: $Parameter, Parameter: Parameter, $Property: $Property, Property: Property, $PseudoType: $PseudoType, PseudoType: PseudoType, $ScalarType: $ScalarType, ScalarType: ScalarType, $Tuple: $Tuple, Tuple: Tuple, $TupleElement: $TupleElement, TupleElement: TupleElement });
const __defaultExports = {
    "Cardinality": Cardinality,
    "OperatorKind": OperatorKind,
    "ParameterKind": ParameterKind,
    "TargetDeleteAction": TargetDeleteAction,
    "TypeModifier": TypeModifier,
    "Volatility": Volatility,
    "Object": Object_f5c7f8be82c411ecbf8717247162cf40,
    "AnnotationSubject": AnnotationSubject,
    "Alias": Alias,
    "SubclassableObject": SubclassableObject,
    "InheritingObject": InheritingObject,
    "Annotation": Annotation,
    "Type": Type,
    "PrimitiveType": PrimitiveType,
    "CollectionType": CollectionType,
    "Array": Array,
    "CallableObject": CallableObject,
    "VolatilitySubject": VolatilitySubject,
    "Cast": Cast,
    "ConsistencySubject": ConsistencySubject,
    "Constraint": Constraint,
    "Delta": Delta,
    "Extension": Extension,
    "Function": Function,
    "Index": Index,
    "Pointer": Pointer,
    "Source": Source,
    "Link": Link,
    "Migration": Migration,
    "Module": Module,
    "ObjectType": ObjectType,
    "Operator": Operator,
    "Parameter": Parameter,
    "Property": Property,
    "PseudoType": PseudoType,
    "ScalarType": ScalarType,
    "Tuple": Tuple,
    "TupleElement": TupleElement
};
exports.default = __defaultExports;
