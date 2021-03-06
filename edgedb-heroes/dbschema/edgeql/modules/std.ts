import { $ } from "edgedb";
import * as _ from "../imports";
import * as _cal from "./cal";
import * as _cfg from "./cfg";
import * as _schema from "./schema";
type $anyscalar = $uuid | $str | $bytes | $bool | $datetime | _cal.$local_datetime | _cal.$local_date | _cal.$local_time | $duration | $json | _cal.$relative_duration | _cfg.$memory | $anyreal | $.EnumType;
const $anyscalar: $anyscalar = $.makeType<$anyscalar>(_.spec, "e17b7aa2-533a-11ec-86b0-53c8974039de", _.syntax.literal);

type $anyreal = $anyint | $anyfloat | $anynumeric;
const $anyreal: $anyreal = $.makeType<$anyreal>(_.spec, "e181adc8-533a-11ec-9860-675dabf4e0ee", _.syntax.literal);

type $anyfloat = $float32 | $float64;
const $anyfloat: $anyfloat = $.makeType<$anyfloat>(_.spec, "e1867a06-533a-11ec-9d94-33792b7d52d2", _.syntax.literal);

type $anyint = $int16 | $int32 | $int64 | $bigint;
const $anyint: $anyint = $.makeType<$anyint>(_.spec, "e1829af8-533a-11ec-bf2b-95e706f5bdaf", _.syntax.literal);

type $anynumeric = $decimal | $bigint;
const $anynumeric: $anynumeric = $.makeType<$anynumeric>(_.spec, "e1894d4e-533a-11ec-9c91-c714115ae305", _.syntax.literal);

export type $bigint = $.ScalarType<"std::bigint", bigint>;
const bigint: $bigint = $.makeType<$bigint>(_.spec, "00000000-0000-0000-0000-000000000110", _.syntax.literal);
export type $bigint╬╗ICastableTo = $bigint | $int64 | $int32 | $int16;
export type $bigint╬╗IAssignableBy = $int64 | $int32 | $int16;

export type $bool = $.ScalarType<"std::bool", boolean>;
const bool: $bool = $.makeType<$bool>(_.spec, "00000000-0000-0000-0000-000000000109", _.syntax.literal);

export type $bytes = $.ScalarType<"std::bytes", Buffer>;
const bytes: $bytes = $.makeType<$bytes>(_.spec, "00000000-0000-0000-0000-000000000102", _.syntax.literal);

export type $datetime = $.ScalarType<"std::datetime", Date>;
const datetime: $datetime = $.makeType<$datetime>(_.spec, "00000000-0000-0000-0000-00000000010a", _.syntax.literal);

export type $decimal = $.ScalarType<"std::decimal", unknown>;
const decimal: $decimal = $.makeType<$decimal>(_.spec, "00000000-0000-0000-0000-000000000108", _.syntax.literal);
export type $decimal╬╗ICastableTo = $decimal | $bigint | $int64 | $int32 | $int16;
export type $decimal╬╗IAssignableBy = $bigint | $int64 | $int32 | $int16;

export type $duration = $.ScalarType<"std::duration", _.edgedb.Duration>;
const duration: $duration = $.makeType<$duration>(_.spec, "00000000-0000-0000-0000-00000000010e", _.syntax.literal);

export type $float32 = $.ScalarType<"std::float32", number>;
const float32: $float32 = $.makeType<$float32>(_.spec, "00000000-0000-0000-0000-000000000106", _.syntax.literal);
export type $float32╬╗ICastableTo = $float32 | $int16;
export type $float32╬╗IAssignableBy = $float64 | $float32 | $int64 | $int32 | $int16;

export type $float64 = $.ScalarType<"std::float64", number>;
const float64: $float64 = $.makeType<$float64>(_.spec, "00000000-0000-0000-0000-000000000107", _.syntax.literal);
export type $float64╬╗ICastableTo = $float64 | $float32 | $int16 | $int64 | $int32;
export type $float64╬╗IAssignableBy = $float32 | $float64 | $int64 | $int32 | $int16;

export type $int16 = $.ScalarType<"std::int16", number>;
const int16: $int16 = $.makeType<$int16>(_.spec, "00000000-0000-0000-0000-000000000103", _.syntax.literal);
export type $int16╬╗IAssignableBy = $int64 | $int32 | $int16;

export type $int32 = $.ScalarType<"std::int32", number>;
const int32: $int32 = $.makeType<$int32>(_.spec, "00000000-0000-0000-0000-000000000104", _.syntax.literal);
export type $int32╬╗ICastableTo = $int32 | $int16;
export type $int32╬╗IAssignableBy = $int64 | $int32 | $int16;

export type $int64 = $.ScalarType<"std::int64", number>;
const int64: $int64 = $.makeType<$int64>(_.spec, "00000000-0000-0000-0000-000000000105", _.syntax.literal);
export type $int64╬╗ICastableTo = $int64 | $int32 | $int16;
export type $int64╬╗IAssignableBy = $int32 | $int64 | $int16;

export type $json = $.ScalarType<"std::json", string>;
const json: $json = $.makeType<$json>(_.spec, "00000000-0000-0000-0000-00000000010f", _.syntax.literal);

interface $sequence extends $int64 {}
const $sequence: $sequence = $.makeType<$sequence>(_.spec, "e18bd154-533a-11ec-886b-91e79765c301", _.syntax.literal);

export type $str = $.ScalarType<"std::str", string>;
const str: $str = $.makeType<$str>(_.spec, "00000000-0000-0000-0000-000000000101", _.syntax.literal);

export type $uuid = $.ScalarType<"std::uuid", string>;
const uuid: $uuid = $.makeType<$uuid>(_.spec, "00000000-0000-0000-0000-000000000100", _.syntax.literal);

export type $BaseObject╬╗Shape = $.typeutil.flatten<{
  "id": $.PropertyDesc<$uuid, $.Cardinality.One, true, false>;
  "__type__": $.LinkDesc<_schema.$Type, $.Cardinality.One, {}, false, false>;
}>;
type $BaseObject = $.ObjectType<"std::BaseObject", $BaseObject╬╗Shape, null>;
const $BaseObject = $.makeType<$BaseObject>(_.spec, "e8d4db72-533a-11ec-9694-37637f2abd9c", _.syntax.literal);

const BaseObject: $.$expr_PathNode<$.TypeSet<$BaseObject, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($BaseObject, $.Cardinality.Many), null, true);

export type $Object_e8dc454c533a11ecb6a0056082757897╬╗Shape = $.typeutil.flatten<$BaseObject╬╗Shape & {
}>;
type $Object_e8dc454c533a11ecb6a0056082757897 = $.ObjectType<"std::Object", $Object_e8dc454c533a11ecb6a0056082757897╬╗Shape, null>;
const $Object_e8dc454c533a11ecb6a0056082757897 = $.makeType<$Object_e8dc454c533a11ecb6a0056082757897>(_.spec, "e8dc454c-533a-11ec-b6a0-056082757897", _.syntax.literal);

const Object_e8dc454c533a11ecb6a0056082757897: $.$expr_PathNode<$.TypeSet<$Object_e8dc454c533a11ecb6a0056082757897, $.Cardinality.Many>, null, true> = _.syntax.$expr_PathNode($.$toSet($Object_e8dc454c533a11ecb6a0056082757897, $.Cardinality.Many), null, true);

export type $FreeObject╬╗Shape = $.typeutil.flatten<$BaseObject╬╗Shape & {
}>;
type $FreeObject = $.ObjectType<"std::FreeObject", $FreeObject╬╗Shape, null>;
const $FreeObject = $.makeType<$FreeObject>(_.spec, "e8e3f288-533a-11ec-81d0-17cb2a17a40a", _.syntax.literal);

const FreeObject: $.$expr_PathNode<$.TypeSet<$FreeObject, $.Cardinality.One>, null, true> = _.syntax.$expr_PathNode($.$toSet($FreeObject, $.Cardinality.One), null, true);

type assert_single╬╗FuncExpr<
  P1 extends $.TypeSet<$.BaseType>,
> = _.syntax.$expr_Function<
  "std::assert_single",
  [P1],
  {},
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
/**
 * Check that the input set contains at most one element, raise
         CardinalityViolationError otherwise.
 */
function assert_single<
  P1 extends $.TypeSet<$.BaseType>,
>(
  input: P1,
): assert_single╬╗FuncExpr<P1>;
function assert_single(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::assert_single', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "OptionalType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::assert_single",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type assert_exists╬╗FuncExpr<
  P1 extends $.TypeSet<$.BaseType>,
> = _.syntax.$expr_Function<
  "std::assert_exists",
  [P1],
  {},
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>, $.Cardinality.Many>
>;
/**
 * Check that the input set contains at least one element, raise
         CardinalityViolationError otherwise.
 */
function assert_exists<
  P1 extends $.TypeSet<$.BaseType>,
>(
  input: P1,
): assert_exists╬╗FuncExpr<P1>;
function assert_exists(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::assert_exists', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::assert_exists",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type assert_distinct╬╗FuncExpr<
  P1 extends $.TypeSet<$.BaseType>,
> = _.syntax.$expr_Function<
  "std::assert_distinct",
  [P1],
  {},
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>, $.Cardinality.Many>
>;
/**
 * Check that the input set is a proper set, i.e. all elements
         are unique
 */
function assert_distinct<
  P1 extends $.TypeSet<$.BaseType>,
>(
  input: P1,
): assert_distinct╬╗FuncExpr<P1>;
function assert_distinct(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::assert_distinct', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::assert_distinct",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type len╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::len",
  [P1],
  {},
  $.TypeSet<$int64, P1["__cardinality__"]>
>;
type len╬╗FuncExpr2<
  P1 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Function<
  "std::len",
  [P1],
  {},
  $.TypeSet<$int64, P1["__cardinality__"]>
>;
type len╬╗FuncExpr3<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
> = _.syntax.$expr_Function<
  "std::len",
  [P1],
  {},
  $.TypeSet<$int64, P1["__cardinality__"]>
>;
/**
 * A polymorphic function to calculate a "length" of its first argument.
 */
function len<
  P1 extends $.TypeSet<$str>,
>(
  str: P1,
): len╬╗FuncExpr<P1>;
/**
 * A polymorphic function to calculate a "length" of its first argument.
 */
function len<
  P1 extends $.TypeSet<$bytes>,
>(
  bytes: P1,
): len╬╗FuncExpr2<P1>;
/**
 * A polymorphic function to calculate a "length" of its first argument.
 */
function len<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
>(
  array: P1,
): len╬╗FuncExpr3<P1>;
function len(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::len', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::len",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type sum╬╗FuncExpr<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::sum",
  [P1],
  {},
  $.TypeSet<$int64, $.Cardinality.One>
>;
type sum╬╗FuncExpr2<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::sum",
  [P1],
  {},
  $.TypeSet<$float32, $.Cardinality.One>
>;
type sum╬╗FuncExpr3<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::sum",
  [P1],
  {},
  $.TypeSet<$int64, $.Cardinality.One>
>;
type sum╬╗FuncExpr4<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::sum",
  [P1],
  {},
  $.TypeSet<$bigint, $.Cardinality.One>
>;
type sum╬╗FuncExpr5<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::sum",
  [P1],
  {},
  $.TypeSet<$float64, $.Cardinality.One>
>;
type sum╬╗FuncExpr6<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::sum",
  [P1],
  {},
  $.TypeSet<$decimal, $.Cardinality.One>
>;
/**
 * Return the sum of the set of numbers.
 */
function sum<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  s: P1,
): sum╬╗FuncExpr<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  s: P1,
): sum╬╗FuncExpr2<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  s: P1,
): sum╬╗FuncExpr3<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  s: P1,
): sum╬╗FuncExpr4<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  s: P1,
): sum╬╗FuncExpr5<P1>;
/**
 * Return the sum of the set of numbers.
 */
function sum<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  s: P1,
): sum╬╗FuncExpr6<P1>;
function sum(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::sum', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::sum",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type count╬╗FuncExpr<
  P1 extends $.TypeSet<$.BaseType>,
> = _.syntax.$expr_Function<
  "std::count",
  [P1],
  {},
  $.TypeSet<$int64, $.Cardinality.One>
>;
/**
 * Return the number of elements in a set.
 */
function count<
  P1 extends $.TypeSet<$.BaseType>,
>(
  s: P1,
): count╬╗FuncExpr<P1>;
function count(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::count', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::count",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type random╬╗FuncExpr = _.syntax.$expr_Function<
  "std::random",
  [],
  {},
  $.TypeSet<$float64, $.Cardinality.One>
>;
/**
 * Return a pseudo-random number in the range `0.0 <= x < 1.0`
 */
function random(): random╬╗FuncExpr;
function random(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::random', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000107"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::random",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type min╬╗FuncExpr<
  P1 extends $.TypeSet<$anyreal>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$anyreal, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr2<
  P1 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$.EnumType, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr3<
  P1 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$str, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr4<
  P1 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$datetime, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr5<
  P1 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$duration, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr6<
  P1 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr7<
  P1 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr8<
  P1 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr9<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_datetime>>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$.ArrayType<_cal.$local_datetime>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr10<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_date>>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$.ArrayType<_cal.$local_date>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr11<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_time>>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$.ArrayType<_cal.$local_time>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr12<
  P1 extends $.TypeSet<$.ArrayType<_cal.$relative_duration>>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$.ArrayType<_cal.$relative_duration>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type min╬╗FuncExpr13<
  P1 extends $.TypeSet<$.BaseType>,
> = _.syntax.$expr_Function<
  "std::min",
  [P1],
  {},
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$anyreal>,
>(
  vals: P1,
): min╬╗FuncExpr<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$.EnumType>,
>(
  vals: P1,
): min╬╗FuncExpr2<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$str>,
>(
  vals: P1,
): min╬╗FuncExpr3<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$datetime>,
>(
  vals: P1,
): min╬╗FuncExpr4<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$duration>,
>(
  vals: P1,
): min╬╗FuncExpr5<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<_cal.$local_datetime>,
>(
  vals: P1,
): min╬╗FuncExpr6<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<_cal.$local_date>,
>(
  vals: P1,
): min╬╗FuncExpr7<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<_cal.$local_time>,
>(
  vals: P1,
): min╬╗FuncExpr8<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_datetime>>,
>(
  vals: P1,
): min╬╗FuncExpr9<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_date>>,
>(
  vals: P1,
): min╬╗FuncExpr10<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_time>>,
>(
  vals: P1,
): min╬╗FuncExpr11<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$.ArrayType<_cal.$relative_duration>>,
>(
  vals: P1,
): min╬╗FuncExpr12<P1>;
/**
 * Return the smallest value of the input set.
 */
function min<
  P1 extends $.TypeSet<$.BaseType>,
>(
  vals: P1,
): min╬╗FuncExpr13<P1>;
function min(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::min', args, _.spec, [
    {args: [{typeId: "e181adc8-533a-11ec-9860-675dabf4e0ee", optional: false, setoftype: true, variadic: false}], returnTypeId: "e181adc8-533a-11ec-9860-675dabf4e0ee", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: true, variadic: false}], returnTypeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "44a76fab-349d-00e9-396b-1000d7e967da", optional: false, setoftype: true, variadic: false}], returnTypeId: "44a76fab-349d-00e9-396b-1000d7e967da", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "076e1d6f-f104-88b2-0632-d53171d9c827", optional: false, setoftype: true, variadic: false}], returnTypeId: "076e1d6f-f104-88b2-0632-d53171d9c827", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "82ea7b30-73d3-c79c-86fb-b253f194f53e", optional: false, setoftype: true, variadic: false}], returnTypeId: "82ea7b30-73d3-c79c-86fb-b253f194f53e", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "63acbf06-4c0c-67ac-c508-50a5ef4f4b16", optional: false, setoftype: true, variadic: false}], returnTypeId: "63acbf06-4c0c-67ac-c508-50a5ef4f4b16", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "OptionalType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::min",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type max╬╗FuncExpr<
  P1 extends $.TypeSet<$anyreal>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$anyreal, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr2<
  P1 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$.EnumType, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr3<
  P1 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$str, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr4<
  P1 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$datetime, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr5<
  P1 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$duration, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr6<
  P1 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr7<
  P1 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr8<
  P1 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr9<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_datetime>>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$.ArrayType<_cal.$local_datetime>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr10<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_date>>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$.ArrayType<_cal.$local_date>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr11<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_time>>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$.ArrayType<_cal.$local_time>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr12<
  P1 extends $.TypeSet<$.ArrayType<_cal.$relative_duration>>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$.ArrayType<_cal.$relative_duration>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
type max╬╗FuncExpr13<
  P1 extends $.TypeSet<$.BaseType>,
> = _.syntax.$expr_Function<
  "std::max",
  [P1],
  {},
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>, $.cardinalityUtil.overrideUpperBound<P1["__cardinality__"], "One">>
>;
/**
 * Return the greatest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$anyreal>,
>(
  vals: P1,
): max╬╗FuncExpr<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$.EnumType>,
>(
  vals: P1,
): max╬╗FuncExpr2<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$str>,
>(
  vals: P1,
): max╬╗FuncExpr3<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$datetime>,
>(
  vals: P1,
): max╬╗FuncExpr4<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$duration>,
>(
  vals: P1,
): max╬╗FuncExpr5<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<
  P1 extends $.TypeSet<_cal.$local_datetime>,
>(
  vals: P1,
): max╬╗FuncExpr6<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<
  P1 extends $.TypeSet<_cal.$local_date>,
>(
  vals: P1,
): max╬╗FuncExpr7<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<
  P1 extends $.TypeSet<_cal.$local_time>,
>(
  vals: P1,
): max╬╗FuncExpr8<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_datetime>>,
>(
  vals: P1,
): max╬╗FuncExpr9<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_date>>,
>(
  vals: P1,
): max╬╗FuncExpr10<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$.ArrayType<_cal.$local_time>>,
>(
  vals: P1,
): max╬╗FuncExpr11<P1>;
/**
 * Return the smallest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$.ArrayType<_cal.$relative_duration>>,
>(
  vals: P1,
): max╬╗FuncExpr12<P1>;
/**
 * Return the greatest value of the input set.
 */
function max<
  P1 extends $.TypeSet<$.BaseType>,
>(
  vals: P1,
): max╬╗FuncExpr13<P1>;
function max(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::max', args, _.spec, [
    {args: [{typeId: "e181adc8-533a-11ec-9860-675dabf4e0ee", optional: false, setoftype: true, variadic: false}], returnTypeId: "e181adc8-533a-11ec-9860-675dabf4e0ee", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: true, variadic: false}], returnTypeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "44a76fab-349d-00e9-396b-1000d7e967da", optional: false, setoftype: true, variadic: false}], returnTypeId: "44a76fab-349d-00e9-396b-1000d7e967da", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "076e1d6f-f104-88b2-0632-d53171d9c827", optional: false, setoftype: true, variadic: false}], returnTypeId: "076e1d6f-f104-88b2-0632-d53171d9c827", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "82ea7b30-73d3-c79c-86fb-b253f194f53e", optional: false, setoftype: true, variadic: false}], returnTypeId: "82ea7b30-73d3-c79c-86fb-b253f194f53e", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "63acbf06-4c0c-67ac-c508-50a5ef4f4b16", optional: false, setoftype: true, variadic: false}], returnTypeId: "63acbf06-4c0c-67ac-c508-50a5ef4f4b16", returnTypemod: "OptionalType", preservesOptionality: true},
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "OptionalType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::max",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type all╬╗FuncExpr<
  P1 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Function<
  "std::all",
  [P1],
  {},
  $.TypeSet<$bool, $.Cardinality.One>
>;
/**
 * Generalized boolean `AND` applied to the set of *values*.
 */
function all<
  P1 extends $.TypeSet<$bool>,
>(
  vals: P1,
): all╬╗FuncExpr<P1>;
function all(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::all', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::all",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type any╬╗FuncExpr<
  P1 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Function<
  "std::any",
  [P1],
  {},
  $.TypeSet<$bool, $.Cardinality.One>
>;
/**
 * Generalized boolean `OR` applied to the set of *values*.
 */
function any<
  P1 extends $.TypeSet<$bool>,
>(
  vals: P1,
): any╬╗FuncExpr<P1>;
function any(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::any', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::any",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type enumerate╬╗FuncExpr<
  P1 extends $.TypeSet<$.BaseType>,
> = _.syntax.$expr_Function<
  "std::enumerate",
  [P1],
  {},
  $.TypeSet<$.TupleType<[$int64, $.getPrimitiveBaseType<P1["__element__"]>]>, $.Cardinality.Many>
>;
/**
 * Return a set of tuples of the form `(index, element)`.
 */
function enumerate<
  P1 extends $.TypeSet<$.BaseType>,
>(
  vals: P1,
): enumerate╬╗FuncExpr<P1>;
function enumerate(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::enumerate', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "9c27acd9-0932-6050-c7b0-c7410e2e0a85", returnTypemod: "SetOfType", preservesOptionality: true},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::enumerate",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type round╬╗FuncExpr<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::round",
  [P1],
  {},
  $.TypeSet<$int64, P1["__cardinality__"]>
>;
type round╬╗FuncExpr2<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::round",
  [P1],
  {},
  $.TypeSet<$float64, P1["__cardinality__"]>
>;
type round╬╗FuncExpr3<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::round",
  [P1],
  {},
  $.TypeSet<$bigint, P1["__cardinality__"]>
>;
type round╬╗FuncExpr4<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::round",
  [P1],
  {},
  $.TypeSet<$decimal, P1["__cardinality__"]>
>;
type round╬╗FuncExpr5<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::round",
  [P1, P2],
  {},
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Round to the nearest value.
 */
function round<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  val: P1,
): round╬╗FuncExpr<P1>;
/**
 * Round to the nearest value.
 */
function round<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  val: P1,
): round╬╗FuncExpr2<P1>;
/**
 * Round to the nearest value.
 */
function round<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  val: P1,
): round╬╗FuncExpr3<P1>;
/**
 * Round to the nearest value.
 */
function round<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  val: P1,
): round╬╗FuncExpr4<P1>;
/**
 * Round to the nearest value.
 */
function round<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  val: P1,
  d: P2,
): round╬╗FuncExpr5<P1, P2>;
function round(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::round', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::round",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type contains╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::contains",
  [P1, P2],
  {},
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type contains╬╗FuncExpr2<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Function<
  "std::contains",
  [P1, P2],
  {},
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type contains╬╗FuncExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::contains",
  [P1, P2],
  {},
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type contains╬╗FuncExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::contains",
  [P1, P2],
  {},
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type contains╬╗FuncExpr5<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Function<
  "std::contains",
  [P1, P2],
  {},
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type contains╬╗FuncExpr6<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Function<
  "std::contains",
  [P1, P2],
  {},
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type contains╬╗FuncExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>,
> = _.syntax.$expr_Function<
  "std::contains",
  [P1, P2],
  {},
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  haystack: P1,
  needle: P2,
): contains╬╗FuncExpr<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  haystack: P1,
  needle: P2,
): contains╬╗FuncExpr2<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  haystack: P1,
  needle: P2,
): contains╬╗FuncExpr3<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  haystack: P1,
  needle: P2,
): contains╬╗FuncExpr4<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  haystack: P1,
  needle: P2,
): contains╬╗FuncExpr5<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  haystack: P1,
  needle: P2,
): contains╬╗FuncExpr6<P1, P2>;
/**
 * A polymorphic function to test if a sequence contains a certain element.
 */
function contains<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>,
>(
  haystack: P1,
  needle: P2,
): contains╬╗FuncExpr7<P1, P2>;
function contains(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::contains', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::contains",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type find╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::find",
  [P1, P2],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type find╬╗FuncExpr2<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Function<
  "std::find",
  [P1, P2],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type find╬╗FuncExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
> = _.syntax.$expr_Function<
  "std::find",
  [P1, P2, P3],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<P3>>>
>;
type find╬╗FuncExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
> = _.syntax.$expr_Function<
  "std::find",
  [P1, P2, P3],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<P3>>>
>;
type find╬╗FuncExpr5<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ObjectType>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
> = _.syntax.$expr_Function<
  "std::find",
  [P1, P2, P3],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<P3>>>
>;
type find╬╗FuncExpr6<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.AnyTupleType>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
> = _.syntax.$expr_Function<
  "std::find",
  [P1, P2, P3],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<P3>>>
>;
type find╬╗FuncExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
> = _.syntax.$expr_Function<
  "std::find",
  [P1, P2, P3],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<P3>>>
>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  haystack: P1,
  needle: P2,
): find╬╗FuncExpr<P1, P2>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  haystack: P1,
  needle: P2,
): find╬╗FuncExpr2<P1, P2>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
>(
  haystack: P1,
  needle: P2,
  from_pos?: P3,
): find╬╗FuncExpr3<P1, P2, P3>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
>(
  haystack: P1,
  needle: P2,
  from_pos?: P3,
): find╬╗FuncExpr4<P1, P2, P3>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ObjectType>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
>(
  haystack: P1,
  needle: P2,
  from_pos?: P3,
): find╬╗FuncExpr5<P1, P2, P3>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.AnyTupleType>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
>(
  haystack: P1,
  needle: P2,
  from_pos?: P3,
): find╬╗FuncExpr6<P1, P2, P3>;
/**
 * A polymorphic function to find index of an element in a sequence.
 */
function find<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo> | undefined,
>(
  haystack: P1,
  needle: P2,
  from_pos?: P3,
): find╬╗FuncExpr7<P1, P2, P3>;
function find(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::find', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::find",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type array_agg╬╗FuncExpr<
  P1 extends $.TypeSet<$.NonArrayType>,
> = _.syntax.$expr_Function<
  "std::array_agg",
  [P1],
  {},
  $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]>>, $.Cardinality.One>
>;
/**
 * Return the array made from all of the input set elements.
 */
function array_agg<
  P1 extends $.TypeSet<$.NonArrayType>,
>(
  s: P1,
): array_agg╬╗FuncExpr<P1>;
function array_agg(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::array_agg', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::array_agg",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type array_unpack╬╗FuncExpr<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
> = _.syntax.$expr_Function<
  "std::array_unpack",
  [P1],
  {},
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>, $.Cardinality.Many>
>;
/**
 * Return array elements as a set.
 */
function array_unpack<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
>(
  array: P1,
): array_unpack╬╗FuncExpr<P1>;
function array_unpack(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::array_unpack', args, _.spec, [
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::array_unpack",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type array_get╬╗FuncExpr<
  NamedArgs extends {
    "default"?: $.TypeSet<$decimal╬╗ICastableTo>,
  },
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  NamedArgs,
  $.TypeSet<_.syntax.getSharedParentPrimitive<NamedArgs["default"] extends $.TypeSet ? NamedArgs["default"]["__element__"] : undefined, P1["__element__"]["__element__"]>, $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["default"]>>, 'Zero'>>
>;
type array_get╬╗FuncExpr2<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  {},
  $.TypeSet<P1["__element__"]["__element__"], $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, 'Zero'>>
>;
type array_get╬╗FuncExpr3<
  NamedArgs extends {
    "default"?: $.TypeSet<$float64╬╗ICastableTo>,
  },
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  NamedArgs,
  $.TypeSet<_.syntax.getSharedParentPrimitive<NamedArgs["default"] extends $.TypeSet ? NamedArgs["default"]["__element__"] : undefined, P1["__element__"]["__element__"]>, $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["default"]>>, 'Zero'>>
>;
type array_get╬╗FuncExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  {},
  $.TypeSet<P1["__element__"]["__element__"], $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, 'Zero'>>
>;
type array_get╬╗FuncExpr5<
  NamedArgs extends {
    "default"?: $.TypeSet<$.ObjectType>,
  },
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  NamedArgs,
  $.TypeSet<_.syntax.mergeObjectTypes<NamedArgs["default"] extends $.TypeSet ? NamedArgs["default"]["__element__"] : undefined, P1["__element__"]["__element__"]>, $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["default"]>>, 'Zero'>>
>;
type array_get╬╗FuncExpr6<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  {},
  $.TypeSet<P1["__element__"]["__element__"], $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, 'Zero'>>
>;
type array_get╬╗FuncExpr7<
  NamedArgs extends {
    "default"?: $.TypeSet<$.AnyTupleType>,
  },
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  NamedArgs,
  $.TypeSet<_.syntax.getSharedParentPrimitive<NamedArgs["default"] extends $.TypeSet ? NamedArgs["default"]["__element__"] : undefined, P1["__element__"]["__element__"]>, $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["default"]>>, 'Zero'>>
>;
type array_get╬╗FuncExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  {},
  $.TypeSet<P1["__element__"]["__element__"], $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, 'Zero'>>
>;
type array_get╬╗FuncExpr9<
  NamedArgs extends {
    "default"?: $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>,
  },
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  NamedArgs,
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>, $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["default"]>>, 'Zero'>>
>;
type array_get╬╗FuncExpr10<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::array_get",
  [P1, P2],
  {},
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>, $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, 'Zero'>>
>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    "default"?: $.TypeSet<$decimal╬╗ICastableTo>,
  },
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr2<P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    "default"?: $.TypeSet<$float64╬╗ICastableTo>,
  },
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr3<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr4<P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    "default"?: $.TypeSet<$.ObjectType>,
  },
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr5<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr6<P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    "default"?: $.TypeSet<$.AnyTupleType>,
  },
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr7<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr8<P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  NamedArgs extends {
    "default"?: $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>,
  },
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  namedArgs: NamedArgs,
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr9<NamedArgs, P1, P2>;
/**
 * Return the element of *array* at the specified *index*.
 */
function array_get<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  array: P1,
  idx: P2,
): array_get╬╗FuncExpr10<P1, P2>;
function array_get(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::array_get', args, _.spec, [
    {args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], namedArgs: {"default": {typeId: "00000000-0000-0000-0000-000000000001", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "OptionalType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::array_get",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type array_join╬╗FuncExpr<
  P1 extends $.TypeSet<$.ArrayType<$str>>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::array_join",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Render an array to a string.
 */
function array_join<
  P1 extends $.TypeSet<$.ArrayType<$str>>,
  P2 extends $.TypeSet<$str>,
>(
  array: P1,
  delimiter: P2,
): array_join╬╗FuncExpr<P1, P2>;
function array_join(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::array_join', args, _.spec, [
    {args: [{typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::array_join",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type bytes_get_bit╬╗FuncExpr<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::bytes_get_bit",
  [P1, P2],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Get the *nth* bit of the *bytes* value.
 */
function bytes_get_bit<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  bytes: P1,
  num: P2,
): bytes_get_bit╬╗FuncExpr<P1, P2>;
function bytes_get_bit(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::bytes_get_bit', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::bytes_get_bit",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type datetime_current╬╗FuncExpr = _.syntax.$expr_Function<
  "std::datetime_current",
  [],
  {},
  $.TypeSet<$datetime, $.Cardinality.One>
>;
/**
 * Return the current server date and time.
 */
function datetime_current(): datetime_current╬╗FuncExpr;
function datetime_current(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_current', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_current",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type datetime_of_transaction╬╗FuncExpr = _.syntax.$expr_Function<
  "std::datetime_of_transaction",
  [],
  {},
  $.TypeSet<$datetime, $.Cardinality.One>
>;
/**
 * Return the date and time of the start of the current transaction.
 */
function datetime_of_transaction(): datetime_of_transaction╬╗FuncExpr;
function datetime_of_transaction(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_of_transaction', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_of_transaction",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type datetime_of_statement╬╗FuncExpr = _.syntax.$expr_Function<
  "std::datetime_of_statement",
  [],
  {},
  $.TypeSet<$datetime, $.Cardinality.One>
>;
/**
 * Return the date and time of the start of the current statement.
 */
function datetime_of_statement(): datetime_of_statement╬╗FuncExpr;
function datetime_of_statement(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_of_statement', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_of_statement",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type datetime_get╬╗FuncExpr<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::datetime_get",
  [P1, P2],
  {},
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type datetime_get╬╗FuncExpr2<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::datetime_get",
  [P1, P2],
  {},
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Extract a specific element of input datetime by name.
 */
function datetime_get<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str>,
>(
  dt: P1,
  el: P2,
): datetime_get╬╗FuncExpr<P1, P2>;
/**
 * Extract a specific element of input datetime by name.
 */
function datetime_get<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str>,
>(
  dt: P1,
  el: P2,
): datetime_get╬╗FuncExpr2<P1, P2>;
function datetime_get(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_get', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_get",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type datetime_truncate╬╗FuncExpr<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::datetime_truncate",
  [P1, P2],
  {},
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Truncate the input datetime to a particular precision.
 */
function datetime_truncate<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str>,
>(
  dt: P1,
  unit: P2,
): datetime_truncate╬╗FuncExpr<P1, P2>;
function datetime_truncate(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::datetime_truncate', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::datetime_truncate",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type duration_truncate╬╗FuncExpr<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::duration_truncate",
  [P1, P2],
  {},
  $.TypeSet<$duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Truncate the input duration to a particular precision.
 */
function duration_truncate<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$str>,
>(
  dt: P1,
  unit: P2,
): duration_truncate╬╗FuncExpr<P1, P2>;
function duration_truncate(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::duration_truncate', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::duration_truncate",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type duration_to_seconds╬╗FuncExpr<
  P1 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Function<
  "std::duration_to_seconds",
  [P1],
  {},
  $.TypeSet<$decimal, P1["__cardinality__"]>
>;
/**
 * Return duration as total number of seconds in interval.
 */
function duration_to_seconds<
  P1 extends $.TypeSet<$duration>,
>(
  dur: P1,
): duration_to_seconds╬╗FuncExpr<P1>;
function duration_to_seconds(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::duration_to_seconds', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::duration_to_seconds",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type json_typeof╬╗FuncExpr<
  P1 extends $.TypeSet<$json>,
> = _.syntax.$expr_Function<
  "std::json_typeof",
  [P1],
  {},
  $.TypeSet<$str, P1["__cardinality__"]>
>;
/**
 * Return the type of the outermost JSON value as a string.
 */
function json_typeof<
  P1 extends $.TypeSet<$json>,
>(
  json: P1,
): json_typeof╬╗FuncExpr<P1>;
function json_typeof(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::json_typeof', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::json_typeof",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type json_array_unpack╬╗FuncExpr<
  P1 extends $.TypeSet<$json>,
> = _.syntax.$expr_Function<
  "std::json_array_unpack",
  [P1],
  {},
  $.TypeSet<$json, $.Cardinality.Many>
>;
/**
 * Return elements of JSON array as a set of `json`.
 */
function json_array_unpack<
  P1 extends $.TypeSet<$json>,
>(
  array: P1,
): json_array_unpack╬╗FuncExpr<P1>;
function json_array_unpack(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::json_array_unpack', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010f", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::json_array_unpack",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type json_object_unpack╬╗FuncExpr<
  P1 extends $.TypeSet<$json>,
> = _.syntax.$expr_Function<
  "std::json_object_unpack",
  [P1],
  {},
  $.TypeSet<$.TupleType<[$str, $json]>, $.Cardinality.Many>
>;
/**
 * Return set of key/value tuples that make up the JSON object.
 */
function json_object_unpack<
  P1 extends $.TypeSet<$json>,
>(
  obj: P1,
): json_object_unpack╬╗FuncExpr<P1>;
function json_object_unpack(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::json_object_unpack', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "79d8ede8-30f1-a805-fbc3-503ece3c9205", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::json_object_unpack",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type json_get╬╗FuncExpr<
  NamedArgs extends {
    "default"?: $.TypeSet<$json>,
  },
  P1 extends $.TypeSet<$json>,
  P2 extends [$.TypeSet<$str>, ...$.TypeSet<$str>[]],
> = _.syntax.$expr_Function<
  "std::json_get",
  [P1, ...P2],
  NamedArgs,
  $.TypeSet<$json, $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.multiplyCardinalitiesVariadic<$.cardinalityUtil.paramArrayCardinality<P2>>>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["default"]>>, 'Zero'>>
>;
type json_get╬╗FuncExpr2<
  P1 extends $.TypeSet<$json>,
  P2 extends [$.TypeSet<$str>, ...$.TypeSet<$str>[]],
> = _.syntax.$expr_Function<
  "std::json_get",
  [P1, ...P2],
  {},
  $.TypeSet<$json, $.cardinalityUtil.overrideLowerBound<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.multiplyCardinalitiesVariadic<$.cardinalityUtil.paramArrayCardinality<P2>>>, 'Zero'>>
>;
/**
 * Return the JSON value at the end of the specified path or an empty set.
 */
function json_get<
  NamedArgs extends {
    "default"?: $.TypeSet<$json>,
  },
  P1 extends $.TypeSet<$json>,
  P2 extends [$.TypeSet<$str>, ...$.TypeSet<$str>[]],
>(
  namedArgs: NamedArgs,
  json: P1,
  ...path: P2
): json_get╬╗FuncExpr<NamedArgs, P1, P2>;
/**
 * Return the JSON value at the end of the specified path or an empty set.
 */
function json_get<
  P1 extends $.TypeSet<$json>,
  P2 extends [$.TypeSet<$str>, ...$.TypeSet<$str>[]],
>(
  json: P1,
  ...path: P2
): json_get╬╗FuncExpr2<P1, P2>;
function json_get(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::json_get', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: true}], namedArgs: {"default": {typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-00000000010f", returnTypemod: "OptionalType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::json_get",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type re_match╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::re_match",
  [P1, P2],
  {},
  $.TypeSet<$.ArrayType<$str>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Find the first regular expression match in a string.
 */
function re_match<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  pattern: P1,
  str: P2,
): re_match╬╗FuncExpr<P1, P2>;
function re_match(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::re_match', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "05f91774-15ea-9001-038e-092c1cad80af"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::re_match",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type re_match_all╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::re_match_all",
  [P1, P2],
  {},
  $.TypeSet<$.ArrayType<$str>, $.Cardinality.Many>
>;
/**
 * Find all regular expression matches in a string.
 */
function re_match_all<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  pattern: P1,
  str: P2,
): re_match_all╬╗FuncExpr<P1, P2>;
function re_match_all(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::re_match_all', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "05f91774-15ea-9001-038e-092c1cad80af", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::re_match_all",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type re_test╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::re_test",
  [P1, P2],
  {},
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Test if a regular expression has a match in a string.
 */
function re_test<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  pattern: P1,
  str: P2,
): re_test╬╗FuncExpr<P1, P2>;
function re_test(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::re_test', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::re_test",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type re_replace╬╗FuncExpr<
  NamedArgs extends {
    "flags"?: $.TypeSet<$str>,
  },
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
  P3 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::re_replace",
  [P1, P2, P3],
  NamedArgs,
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, P3["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["flags"]>>>
>;
type re_replace╬╗FuncExpr2<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
  P3 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::re_replace",
  [P1, P2, P3],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, P3["__cardinality__"]>>
>;
/**
 * Replace matching substrings in a given string.
 */
function re_replace<
  NamedArgs extends {
    "flags"?: $.TypeSet<$str>,
  },
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
  P3 extends $.TypeSet<$str>,
>(
  namedArgs: NamedArgs,
  pattern: P1,
  sub: P2,
  str: P3,
): re_replace╬╗FuncExpr<NamedArgs, P1, P2, P3>;
/**
 * Replace matching substrings in a given string.
 */
function re_replace<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
  P3 extends $.TypeSet<$str>,
>(
  pattern: P1,
  sub: P2,
  str: P3,
): re_replace╬╗FuncExpr2<P1, P2, P3>;
function re_replace(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::re_replace', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], namedArgs: {"flags": {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::re_replace",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_repeat╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::str_repeat",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Repeat the input *string* *n* times.
 */
function str_repeat<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  s: P1,
  n: P2,
): str_repeat╬╗FuncExpr<P1, P2>;
function str_repeat(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_repeat', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_repeat",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_lower╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::str_lower",
  [P1],
  {},
  $.TypeSet<$str, P1["__cardinality__"]>
>;
/**
 * Return a lowercase copy of the input *string*.
 */
function str_lower<
  P1 extends $.TypeSet<$str>,
>(
  s: P1,
): str_lower╬╗FuncExpr<P1>;
function str_lower(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_lower', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_lower",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_upper╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::str_upper",
  [P1],
  {},
  $.TypeSet<$str, P1["__cardinality__"]>
>;
/**
 * Return an uppercase copy of the input *string*.
 */
function str_upper<
  P1 extends $.TypeSet<$str>,
>(
  s: P1,
): str_upper╬╗FuncExpr<P1>;
function str_upper(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_upper', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_upper",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_title╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::str_title",
  [P1],
  {},
  $.TypeSet<$str, P1["__cardinality__"]>
>;
/**
 * Return a titlecase copy of the input *string*.
 */
function str_title<
  P1 extends $.TypeSet<$str>,
>(
  s: P1,
): str_title╬╗FuncExpr<P1>;
function str_title(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_title', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_title",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_pad_start╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::str_pad_start",
  [P1, P2, P3],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<P3>>>
>;
/**
 * Return the input string padded at the start to the length *n*.
 */
function str_pad_start<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  n: P2,
  fill?: P3,
): str_pad_start╬╗FuncExpr<P1, P2, P3>;
function str_pad_start(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_pad_start', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_pad_start",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_lpad╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::str_lpad",
  [P1, P2, P3],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<P3>>>
>;
/**
 * Return the input string left-padded to the length *n*.
 */
function str_lpad<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  n: P2,
  fill?: P3,
): str_lpad╬╗FuncExpr<P1, P2, P3>;
function str_lpad(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_lpad', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_lpad",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_pad_end╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::str_pad_end",
  [P1, P2, P3],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<P3>>>
>;
/**
 * Return the input string padded at the end to the length *n*.
 */
function str_pad_end<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  n: P2,
  fill?: P3,
): str_pad_end╬╗FuncExpr<P1, P2, P3>;
function str_pad_end(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_pad_end', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_pad_end",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_rpad╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::str_rpad",
  [P1, P2, P3],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, $.cardinalityUtil.optionalParamCardinality<P3>>>
>;
/**
 * Return the input string right-padded to the length *n*.
 */
function str_rpad<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  n: P2,
  fill?: P3,
): str_rpad╬╗FuncExpr<P1, P2, P3>;
function str_rpad(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_rpad', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_rpad",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_trim_start╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::str_trim_start",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Return the input string with all *trim* characters removed from its start.
 */
function str_trim_start<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  tr?: P2,
): str_trim_start╬╗FuncExpr<P1, P2>;
function str_trim_start(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_trim_start', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_trim_start",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_ltrim╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::str_ltrim",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Return the input string with all leftmost *trim* characters removed.
 */
function str_ltrim<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  tr?: P2,
): str_ltrim╬╗FuncExpr<P1, P2>;
function str_ltrim(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_ltrim', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_ltrim",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_trim_end╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::str_trim_end",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Return the input string with all *trim* characters removed from its end.
 */
function str_trim_end<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  tr?: P2,
): str_trim_end╬╗FuncExpr<P1, P2>;
function str_trim_end(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_trim_end', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_trim_end",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_rtrim╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::str_rtrim",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Return the input string with all rightmost *trim* characters removed.
 */
function str_rtrim<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  tr?: P2,
): str_rtrim╬╗FuncExpr<P1, P2>;
function str_rtrim(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_rtrim', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_rtrim",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_trim╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::str_trim",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Return the input string with *trim* characters removed from both ends.
 */
function str_trim<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  tr?: P2,
): str_trim╬╗FuncExpr<P1, P2>;
function str_trim(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_trim', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_trim",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type str_split╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::str_split",
  [P1, P2],
  {},
  $.TypeSet<$.ArrayType<$str>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Split string into array elements using the supplied delimiter.
 */
function str_split<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  s: P1,
  delimiter: P2,
): str_split╬╗FuncExpr<P1, P2>;
function str_split(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::str_split', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "05f91774-15ea-9001-038e-092c1cad80af"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::str_split",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type uuid_generate_v1mc╬╗FuncExpr = _.syntax.$expr_Function<
  "std::uuid_generate_v1mc",
  [],
  {},
  $.TypeSet<$uuid, $.Cardinality.One>
>;
/**
 * Return a version 1 UUID.
 */
function uuid_generate_v1mc(): uuid_generate_v1mc╬╗FuncExpr;
function uuid_generate_v1mc(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::uuid_generate_v1mc', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000100"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::uuid_generate_v1mc",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_str╬╗FuncExpr<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr2<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr3<
  P1 extends $.TypeSet<$.ArrayType<$str>>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type to_str╬╗FuncExpr4<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr5<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr6<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr7<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr8<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr9<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr10<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr11<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_str╬╗FuncExpr12<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_str",
  [P1, P2],
  {},
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  dt: P1,
  fmt?: P2,
): to_str╬╗FuncExpr<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  td: P1,
  fmt?: P2,
): to_str╬╗FuncExpr2<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$.ArrayType<$str>>,
  P2 extends $.TypeSet<$str>,
>(
  array: P1,
  delimiter: P2,
): to_str╬╗FuncExpr3<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  json: P1,
  fmt?: P2,
): to_str╬╗FuncExpr4<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  dt: P1,
  fmt?: P2,
): to_str╬╗FuncExpr5<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  d: P1,
  fmt?: P2,
): to_str╬╗FuncExpr6<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  nt: P1,
  fmt?: P2,
): to_str╬╗FuncExpr7<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  rd: P1,
  fmt?: P2,
): to_str╬╗FuncExpr8<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  i: P1,
  fmt?: P2,
): to_str╬╗FuncExpr9<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  f: P1,
  fmt?: P2,
): to_str╬╗FuncExpr10<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  d: P1,
  fmt?: P2,
): to_str╬╗FuncExpr11<P1, P2>;
/**
 * Return string representation of the input value.
 */
function to_str<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  d: P1,
  fmt?: P2,
): to_str╬╗FuncExpr12<P1, P2>;
function to_str(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_str', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_str",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_json╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::to_json",
  [P1],
  {},
  $.TypeSet<$json, P1["__cardinality__"]>
>;
/**
 * Return JSON value represented by the input *string*.
 */
function to_json<
  P1 extends $.TypeSet<$str>,
>(
  str: P1,
): to_json╬╗FuncExpr<P1>;
function to_json(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_json', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_json",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_datetime╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_datetime",
  [P1, P2],
  {},
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type to_datetime╬╗FuncExpr2<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::to_datetime",
  [P1, P2],
  {},
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type to_datetime╬╗FuncExpr3<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::to_datetime",
  [P1],
  {},
  $.TypeSet<$datetime, P1["__cardinality__"]>
>;
type to_datetime╬╗FuncExpr4<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo>,
  P4 extends $.TypeSet<$int64╬╗ICastableTo>,
  P5 extends $.TypeSet<$int64╬╗ICastableTo>,
  P6 extends $.TypeSet<$float64╬╗ICastableTo>,
  P7 extends $.TypeSet<$str>,
> = _.syntax.$expr_Function<
  "std::to_datetime",
  [P1, P2, P3, P4, P5, P6, P7],
  {},
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>, P3["__cardinality__"]>, P4["__cardinality__"]>, P5["__cardinality__"]>, P6["__cardinality__"]>, P7["__cardinality__"]>>
>;
type to_datetime╬╗FuncExpr5<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::to_datetime",
  [P1],
  {},
  $.TypeSet<$datetime, P1["__cardinality__"]>
>;
type to_datetime╬╗FuncExpr6<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::to_datetime",
  [P1],
  {},
  $.TypeSet<$datetime, P1["__cardinality__"]>
>;
/**
 * Create a `datetime` value.
 */
function to_datetime<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  fmt?: P2,
): to_datetime╬╗FuncExpr<P1, P2>;
/**
 * Create a `datetime` value.
 */
function to_datetime<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$str>,
>(
  local: P1,
  zone: P2,
): to_datetime╬╗FuncExpr2<P1, P2>;
/**
 * Create a `datetime` value.
 */
function to_datetime<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  epochseconds: P1,
): to_datetime╬╗FuncExpr3<P1>;
/**
 * Create a `datetime` value.
 */
function to_datetime<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
  P3 extends $.TypeSet<$int64╬╗ICastableTo>,
  P4 extends $.TypeSet<$int64╬╗ICastableTo>,
  P5 extends $.TypeSet<$int64╬╗ICastableTo>,
  P6 extends $.TypeSet<$float64╬╗ICastableTo>,
  P7 extends $.TypeSet<$str>,
>(
  year: P1,
  month: P2,
  day: P3,
  hour: P4,
  min: P5,
  sec: P6,
  timezone: P7,
): to_datetime╬╗FuncExpr4<P1, P2, P3, P4, P5, P6, P7>;
/**
 * Create a `datetime` value.
 */
function to_datetime<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  epochseconds: P1,
): to_datetime╬╗FuncExpr5<P1>;
/**
 * Create a `datetime` value.
 */
function to_datetime<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  epochseconds: P1,
): to_datetime╬╗FuncExpr6<P1>;
function to_datetime(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_datetime', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_datetime",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_duration╬╗FuncExpr<
  NamedArgs extends {
    "hours"?: $.TypeSet<$int64╬╗ICastableTo>,
    "minutes"?: $.TypeSet<$int64╬╗ICastableTo>,
    "seconds"?: $.TypeSet<$float64╬╗ICastableTo>,
    "microseconds"?: $.TypeSet<$int64╬╗ICastableTo>,
  },
> = _.syntax.$expr_Function<
  "std::to_duration",
  [],
  NamedArgs,
  $.TypeSet<$duration, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<NamedArgs["hours"]>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["minutes"]>>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["seconds"]>>, $.cardinalityUtil.optionalParamCardinality<NamedArgs["microseconds"]>>>
>;
/**
 * Create a `duration` value.
 */
function to_duration<
  NamedArgs extends {
    "hours"?: $.TypeSet<$int64╬╗ICastableTo>,
    "minutes"?: $.TypeSet<$int64╬╗ICastableTo>,
    "seconds"?: $.TypeSet<$float64╬╗ICastableTo>,
    "microseconds"?: $.TypeSet<$int64╬╗ICastableTo>,
  },
>(
  namedArgs: NamedArgs,
): to_duration╬╗FuncExpr<NamedArgs>;
function to_duration(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_duration', args, _.spec, [
    {args: [], namedArgs: {"hours": {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}, "minutes": {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}, "seconds": {typeId: "00000000-0000-0000-0000-000000000107", optional: true, setoftype: false, variadic: false}, "microseconds": {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-00000000010e"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_duration",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_bigint╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_bigint",
  [P1, P2],
  {},
  $.TypeSet<$bigint, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Create a `bigint` value.
 */
function to_bigint<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  fmt?: P2,
): to_bigint╬╗FuncExpr<P1, P2>;
function to_bigint(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_bigint', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_bigint",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_decimal╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_decimal",
  [P1, P2],
  {},
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Create a `decimal` value.
 */
function to_decimal<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  fmt?: P2,
): to_decimal╬╗FuncExpr<P1, P2>;
function to_decimal(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_decimal', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_decimal",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_int64╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_int64",
  [P1, P2],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Create a `int64` value.
 */
function to_int64<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  fmt?: P2,
): to_int64╬╗FuncExpr<P1, P2>;
function to_int64(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_int64', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_int64",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_int32╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_int32",
  [P1, P2],
  {},
  $.TypeSet<$int32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Create a `int32` value.
 */
function to_int32<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  fmt?: P2,
): to_int32╬╗FuncExpr<P1, P2>;
function to_int32(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_int32', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000104"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_int32",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_int16╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_int16",
  [P1, P2],
  {},
  $.TypeSet<$int16, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Create a `int16` value.
 */
function to_int16<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  fmt?: P2,
): to_int16╬╗FuncExpr<P1, P2>;
function to_int16(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_int16', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000103"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_int16",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_float64╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_float64",
  [P1, P2],
  {},
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Create a `float64` value.
 */
function to_float64<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  fmt?: P2,
): to_float64╬╗FuncExpr<P1, P2>;
function to_float64(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_float64', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_float64",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type to_float32╬╗FuncExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
> = _.syntax.$expr_Function<
  "std::to_float32",
  [P1, P2],
  {},
  $.TypeSet<$float32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Create a `float32` value.
 */
function to_float32<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str> | undefined,
>(
  s: P1,
  fmt?: P2,
): to_float32╬╗FuncExpr<P1, P2>;
function to_float32(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::to_float32', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::to_float32",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type sequence_reset╬╗FuncExpr<
  P1 extends $.TypeSet<_schema.$ScalarType>,
> = _.syntax.$expr_Function<
  "std::sequence_reset",
  [P1],
  {},
  $.TypeSet<$int64, P1["__cardinality__"]>
>;
type sequence_reset╬╗FuncExpr2<
  P1 extends $.TypeSet<_schema.$ScalarType>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Function<
  "std::sequence_reset",
  [P1, P2],
  {},
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
function sequence_reset<
  P1 extends $.TypeSet<_schema.$ScalarType>,
>(
  seq: P1,
): sequence_reset╬╗FuncExpr<P1>;
function sequence_reset<
  P1 extends $.TypeSet<_schema.$ScalarType>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  seq: P1,
  value: P2,
): sequence_reset╬╗FuncExpr2<P1, P2>;
function sequence_reset(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::sequence_reset', args, _.spec, [
    {args: [{typeId: "ec7063e6-533a-11ec-92d7-e783585da7cb", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {args: [{typeId: "ec7063e6-533a-11ec-92d7-e783585da7cb", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::sequence_reset",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type sequence_next╬╗FuncExpr<
  P1 extends $.TypeSet<_schema.$ScalarType>,
> = _.syntax.$expr_Function<
  "std::sequence_next",
  [P1],
  {},
  $.TypeSet<$int64, P1["__cardinality__"]>
>;
function sequence_next<
  P1 extends $.TypeSet<_schema.$ScalarType>,
>(
  seq: P1,
): sequence_next╬╗FuncExpr<P1>;
function sequence_next(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::sequence_next', args, _.spec, [
    {args: [{typeId: "ec7063e6-533a-11ec-92d7-e783585da7cb", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::sequence_next",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type eq╬╗OpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr25<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr26<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr27<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr28<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr29<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr30<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr31<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr32<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr33<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr34<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr35<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr36<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type eq╬╗OpExpr37<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr2<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr3<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr4<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr5<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr6<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr7<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr8<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr9<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr10<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr11<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr12<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr13<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr14<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr15<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr16<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr17<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr18<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr19<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr20<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr21<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr22<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr23<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr24<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr25<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr26<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr27<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr28<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr29<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr30<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr31<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr32<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr33<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr34<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr35<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr36<P1, P2>;
/**
 * Compare two values for equality.
 */
function eq<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): eq╬╗OpExpr37<P1, P2>;
function eq(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::eq', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}, {typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}, {typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::=",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type coal_eq╬╗OpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr25<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr26<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr27<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr28<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr29<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr30<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr31<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr32<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr33<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr34<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr35<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr36<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_eq╬╗OpExpr37<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr2<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr3<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr4<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr5<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr6<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr7<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr8<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr9<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr10<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr11<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr12<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr13<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr14<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr15<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr16<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr17<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr18<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr19<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr20<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr21<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr22<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr23<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr24<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr25<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr26<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr27<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr28<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr29<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr30<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr31<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr32<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr33<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr34<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr35<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr36<P1, P2>;
/**
 * Compare two (potentially empty) values for equality.
 */
function coal_eq<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_eq╬╗OpExpr37<P1, P2>;
function coal_eq(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::coal_eq', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: true, setoftype: false, variadic: false}, {typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: true, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: true, setoftype: false, variadic: false}, {typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}, {typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::?=",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type neq╬╗OpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr25<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr26<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr27<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr28<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr29<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr30<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr31<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr32<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr33<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr34<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr35<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr36<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type neq╬╗OpExpr37<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr2<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr3<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr4<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr5<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr6<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr7<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr8<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr9<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr10<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr11<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr12<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr13<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr14<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr15<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr16<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr17<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr18<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr19<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr20<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr21<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr22<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr23<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr24<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr25<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr26<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr27<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr28<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr29<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr30<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr31<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr32<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr33<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr34<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr35<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr36<P1, P2>;
/**
 * Compare two values for inequality.
 */
function neq<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): neq╬╗OpExpr37<P1, P2>;
function neq(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::neq', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}, {typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}, {typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::!=",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type coal_neq╬╗OpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr25<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr26<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr27<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr28<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr29<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr30<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr31<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr32<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr33<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr34<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr35<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr36<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
type coal_neq╬╗OpExpr37<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::?!=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.optionalParamCardinality<P1>, $.cardinalityUtil.optionalParamCardinality<P2>>>
>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr2<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr3<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr4<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr5<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr6<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr7<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr8<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr9<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr10<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr11<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr12<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr13<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr14<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr15<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr16<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr17<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr18<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr19<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr20<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr21<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr22<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr23<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr24<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr25<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr26<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr27<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr28<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr29<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr30<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr31<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr32<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr33<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr34<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr35<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr36<P1, P2>;
/**
 * Compare two (potentially empty) values for inequality.
 */
function coal_neq<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coal_neq╬╗OpExpr37<P1, P2>;
function coal_neq(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::coal_neq', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: true, setoftype: false, variadic: false}, {typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: true, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: true, setoftype: false, variadic: false}, {typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}, {typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: true, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::?!=",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type gte╬╗OpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr25<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr26<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr27<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr28<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr29<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr30<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr31<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr32<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr33<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr34<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr35<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr36<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr37<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr38<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr39<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr40<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gte╬╗OpExpr41<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr2<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr3<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr4<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr5<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr6<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr7<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr8<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr9<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr10<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr11<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr12<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr13<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr14<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr15<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr16<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr17<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr18<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr19<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr20<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr21<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr22<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr23<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr24<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr25<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr26<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr27<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr28<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr29<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr30<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr31<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr32<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr33<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr34<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr35<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr36<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr37<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr38<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr39<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr40<P1, P2>;
/**
 * Greater than or equal.
 */
function gte<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gte╬╗OpExpr41<P1, P2>;
function gte(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::gte', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}, {typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}, {typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::>=",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type gt╬╗OpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr12<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr13<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr14<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr15<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr25<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr26<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr27<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr28<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr29<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr30<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr31<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr32<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr33<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr34<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr35<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr36<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr37<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr38<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr39<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr40<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type gt╬╗OpExpr41<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::>",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr2<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr3<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr4<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr5<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr6<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr7<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr8<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr9<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr10<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr11<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr12<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr13<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr14<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr15<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr16<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr17<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr18<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr19<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr20<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr21<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr22<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr23<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr24<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr25<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr26<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr27<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr28<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr29<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr30<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr31<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr32<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr33<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr34<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr35<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr36<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr37<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr38<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr39<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr40<P1, P2>;
/**
 * Greater than.
 */
function gt<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): gt╬╗OpExpr41<P1, P2>;
function gt(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::gt', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}, {typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}, {typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::>",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type lte╬╗OpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr25<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr26<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr27<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr28<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr29<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr30<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr31<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr32<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr33<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr34<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr35<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr36<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr37<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr38<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr39<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr40<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lte╬╗OpExpr41<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<=",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr2<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr3<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr4<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr5<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr6<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr7<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr8<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr9<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr10<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr11<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr12<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr13<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr14<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr15<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr16<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr17<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr18<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr19<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr20<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr21<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr22<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr23<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr24<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr25<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr26<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr27<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr28<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr29<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr30<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr31<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr32<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr33<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr34<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr35<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr36<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr37<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr38<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr39<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr40<P1, P2>;
/**
 * Less than or equal.
 */
function lte<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lte╬╗OpExpr41<P1, P2>;
function lte(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::lte', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}, {typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}, {typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::<=",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type lt╬╗OpExpr<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr2<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr3<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr6<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr7<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr8<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr9<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr10<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr11<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr12<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr13<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr14<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr15<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr16<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr17<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr18<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr19<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr20<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr21<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr22<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr23<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr24<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr25<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr26<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr27<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr28<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr29<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr30<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr31<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr32<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr33<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr34<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr35<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr36<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr37<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr38<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr39<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr40<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type lt╬╗OpExpr41<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::<",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr2<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.EnumType>,
  P2 extends $.TypeSet<$.EnumType>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr3<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr4<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr5<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr6<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr7<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr8<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr9<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr10<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr11<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr12<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr13<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr14<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$uuid>,
  P2 extends $.TypeSet<$uuid>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr15<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr16<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cfg.$memory>,
  P2 extends $.TypeSet<_cfg.$memory>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr17<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr18<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr19<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr20<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr21<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr22<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr23<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$anyint>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr24<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr25<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr26<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr27<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr28<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr29<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr30<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr31<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr32<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr33<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr34<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr35<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr36<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr37<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr38<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr39<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$anyint>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr40<P1, P2>;
/**
 * Less than.
 */
function lt<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): lt╬╗OpExpr41<P1, P2>;
function lt(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::lt', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000002", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}, {typeId: "e18cbcb8-533a-11ec-91db-255a0e558b87", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000100", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}, {typeId: "e8d4db72-533a-11ec-9694-37637f2abd9c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000130", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "e1829af8-533a-11ec-bf2b-95e706f5bdaf", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::<",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type or╬╗OpExpr<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::OR",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Logical disjunction.
 */
function or<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  a: P1,
  b: P2,
): or╬╗OpExpr<P1, P2>;
function or(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::or', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::OR",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type and╬╗OpExpr<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::AND",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Logical conjunction.
 */
function and<
  P1 extends $.TypeSet<$bool>,
  P2 extends $.TypeSet<$bool>,
>(
  a: P1,
  b: P2,
): and╬╗OpExpr<P1, P2>;
function and(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::and', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::AND",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type not╬╗OpExpr<
  P1 extends $.TypeSet<$bool>,
> = _.syntax.$expr_Operator<
  "std::NOT",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$bool, P1["__cardinality__"]>
>;
/**
 * Logical negation.
 */
function not<
  P1 extends $.TypeSet<$bool>,
>(
  v: P1,
): not╬╗OpExpr<P1>;
function not(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::not', args, _.spec, [
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::NOT",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type plus╬╗OpExpr<
  P1 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$int16, P1["__cardinality__"]>
>;
type plus╬╗OpExpr2<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int16, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr3<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr4<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr5<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr6<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr7<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr8<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr9<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr10<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr11<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr12<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr13<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr14<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr15<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_date>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr16<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr17<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr18<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr19<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_time>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr20<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr21<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr22<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr23<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$int32, P1["__cardinality__"]>
>;
type plus╬╗OpExpr24<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$float32, P1["__cardinality__"]>
>;
type plus╬╗OpExpr25<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr26<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr27<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$int64, P1["__cardinality__"]>
>;
type plus╬╗OpExpr28<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr29<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$float64, P1["__cardinality__"]>
>;
type plus╬╗OpExpr30<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$bigint, P1["__cardinality__"]>
>;
type plus╬╗OpExpr31<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr32<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bigint, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type plus╬╗OpExpr33<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$decimal, P1["__cardinality__"]>
>;
type plus╬╗OpExpr34<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::+",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$int16>,
>(
  l: P1,
): plus╬╗OpExpr<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr2<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr3<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr4<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr5<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr6<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr7<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr8<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr9<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr10<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_datetime>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr11<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr12<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr13<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr14<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_date>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr15<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr16<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr17<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr18<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$local_time>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr19<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr20<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr21<P1, P2>;
/**
 * Time interval and date/time addition.
 */
function plus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr22<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
): plus╬╗OpExpr23<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
): plus╬╗OpExpr24<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr25<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr26<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
): plus╬╗OpExpr27<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr28<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
): plus╬╗OpExpr29<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
): plus╬╗OpExpr30<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr31<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr32<P1, P2>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
): plus╬╗OpExpr33<P1>;
/**
 * Arithmetic addition.
 */
function plus<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): plus╬╗OpExpr34<P1, P2>;
function plus(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::plus', args, _.spec, [
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000103"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000103"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000104"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000104"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::+",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type minus╬╗OpExpr<
  P1 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$int16, P1["__cardinality__"]>
>;
type minus╬╗OpExpr2<
  P1 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$duration, P1["__cardinality__"]>
>;
type minus╬╗OpExpr3<
  P1 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<_cal.$relative_duration, P1["__cardinality__"]>
>;
type minus╬╗OpExpr4<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int16, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr5<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr6<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr7<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr8<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr9<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr10<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_datetime, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr11<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr12<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_date, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr13<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr14<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$local_time, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr15<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr16<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr17<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$duration>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_cal.$relative_duration, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr18<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$int32, P1["__cardinality__"]>
>;
type minus╬╗OpExpr19<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$float32, P1["__cardinality__"]>
>;
type minus╬╗OpExpr20<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr21<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr22<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$int64, P1["__cardinality__"]>
>;
type minus╬╗OpExpr23<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr24<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$float64, P1["__cardinality__"]>
>;
type minus╬╗OpExpr25<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$bigint, P1["__cardinality__"]>
>;
type minus╬╗OpExpr26<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr27<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bigint, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type minus╬╗OpExpr28<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$decimal, P1["__cardinality__"]>
>;
type minus╬╗OpExpr29<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::-",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$int16>,
>(
  l: P1,
): minus╬╗OpExpr<P1>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$duration>,
>(
  v: P1,
): minus╬╗OpExpr2<P1>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
>(
  v: P1,
): minus╬╗OpExpr3<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr4<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr5<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<$datetime>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr6<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr7<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr8<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr9<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_datetime>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr10<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr11<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_date>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr12<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr13<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$local_time>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr14<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr15<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<$duration>,
  P2 extends $.TypeSet<_cal.$relative_duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr16<P1, P2>;
/**
 * Time interval and date/time subtraction.
 */
function minus<
  P1 extends $.TypeSet<_cal.$relative_duration>,
  P2 extends $.TypeSet<$duration>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr17<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
): minus╬╗OpExpr18<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
): minus╬╗OpExpr19<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr20<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr21<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
): minus╬╗OpExpr22<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr23<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
): minus╬╗OpExpr24<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
): minus╬╗OpExpr25<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr26<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr27<P1, P2>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
): minus╬╗OpExpr28<P1>;
/**
 * Arithmetic subtraction.
 */
function minus<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): minus╬╗OpExpr29<P1, P2>;
function minus(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::minus', args, _.spec, [
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000103"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000103"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010e"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010a", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010a"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010b", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010b"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010c", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010c"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010d", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010d"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000111", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010e", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000111"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000104"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000104"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::-",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type mult╬╗OpExpr<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::*",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int16, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mult╬╗OpExpr2<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::*",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mult╬╗OpExpr3<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::*",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mult╬╗OpExpr4<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::*",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mult╬╗OpExpr5<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::*",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mult╬╗OpExpr6<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::*",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bigint, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mult╬╗OpExpr7<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::*",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  l: P1,
  r: P2,
): mult╬╗OpExpr<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): mult╬╗OpExpr2<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): mult╬╗OpExpr3<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): mult╬╗OpExpr4<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): mult╬╗OpExpr5<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): mult╬╗OpExpr6<P1, P2>;
/**
 * Arithmetic multiplication.
 */
function mult<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): mult╬╗OpExpr7<P1, P2>;
function mult(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::mult', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000103"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000104"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::*",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type div╬╗OpExpr<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::/",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type div╬╗OpExpr2<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::/",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type div╬╗OpExpr3<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::/",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type div╬╗OpExpr4<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::/",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Arithmetic division.
 */
function div<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): div╬╗OpExpr<P1, P2>;
/**
 * Arithmetic division.
 */
function div<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): div╬╗OpExpr2<P1, P2>;
/**
 * Arithmetic division.
 */
function div<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): div╬╗OpExpr3<P1, P2>;
/**
 * Arithmetic division.
 */
function div<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): div╬╗OpExpr4<P1, P2>;
function div(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::div', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::/",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type floordiv╬╗OpExpr<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std:://",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int16, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type floordiv╬╗OpExpr2<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std:://",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type floordiv╬╗OpExpr3<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std:://",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type floordiv╬╗OpExpr4<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std:://",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type floordiv╬╗OpExpr5<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std:://",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type floordiv╬╗OpExpr6<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std:://",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bigint, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type floordiv╬╗OpExpr7<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std:://",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  n: P1,
  d: P2,
): floordiv╬╗OpExpr<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): floordiv╬╗OpExpr2<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): floordiv╬╗OpExpr3<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): floordiv╬╗OpExpr4<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): floordiv╬╗OpExpr5<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): floordiv╬╗OpExpr6<P1, P2>;
/**
 * Floor division. Result is rounded down to the nearest integer
 */
function floordiv<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): floordiv╬╗OpExpr7<P1, P2>;
function floordiv(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::floordiv', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000103"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000104"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std:://",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type mod╬╗OpExpr<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
> = _.syntax.$expr_Operator<
  "std::%",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int16, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mod╬╗OpExpr2<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::%",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mod╬╗OpExpr3<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::%",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mod╬╗OpExpr4<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::%",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$int64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mod╬╗OpExpr5<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::%",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mod╬╗OpExpr6<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::%",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bigint, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type mod╬╗OpExpr7<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::%",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$int16>,
  P2 extends $.TypeSet<$int16>,
>(
  n: P1,
  d: P2,
): mod╬╗OpExpr<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$int32╬╗ICastableTo>,
  P2 extends $.TypeSet<$int32╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): mod╬╗OpExpr2<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): mod╬╗OpExpr3<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): mod╬╗OpExpr4<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): mod╬╗OpExpr5<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): mod╬╗OpExpr6<P1, P2>;
/**
 * Remainder from division (modulo).
 */
function mod<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  n: P1,
  d: P2,
): mod╬╗OpExpr7<P1, P2>;
function mod(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::mod', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000103", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000103"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000104", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000104"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000105"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::%",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type pow╬╗OpExpr<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::^",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float32, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type pow╬╗OpExpr2<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::^",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type pow╬╗OpExpr3<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::^",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$float64, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type pow╬╗OpExpr4<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::^",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type pow╬╗OpExpr5<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::^",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$decimal, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$float32╬╗ICastableTo>,
  P2 extends $.TypeSet<$float32╬╗ICastableTo>,
>(
  n: P1,
  p: P2,
): pow╬╗OpExpr<P1, P2>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$int64╬╗ICastableTo>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  n: P1,
  p: P2,
): pow╬╗OpExpr2<P1, P2>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  n: P1,
  p: P2,
): pow╬╗OpExpr3<P1, P2>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$bigint╬╗ICastableTo>,
  P2 extends $.TypeSet<$bigint╬╗ICastableTo>,
>(
  n: P1,
  p: P2,
): pow╬╗OpExpr4<P1, P2>;
/**
 * Power operation.
 */
function pow<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  n: P1,
  p: P2,
): pow╬╗OpExpr5<P1, P2>;
function pow(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::pow', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000106", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000106"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000107", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000107"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::^",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr2<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
> = _.syntax.$expr_Operator<
  "std::IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  e: P1,
  s: P2,
): in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  e: P1,
  s: P2,
): in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr2<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  e: P1,
  s: P2,
): in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr3<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  e: P1,
  s: P2,
): in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr4<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  e: P1,
  s: P2,
): in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr5<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  e: P1,
  s: P2,
): in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr6<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function in_e664723a533a11ec97367d35f44a5c55<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
>(
  e: P1,
  s: P2,
): in_e664723a533a11ec97367d35f44a5c55╬╗OpExpr7<P1, P2>;
function in_e664723a533a11ec97367d35f44a5c55(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::in', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::IN",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type not_in╬╗OpExpr<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::NOT IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type not_in╬╗OpExpr2<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::NOT IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type not_in╬╗OpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::NOT IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type not_in╬╗OpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::NOT IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type not_in╬╗OpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::NOT IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type not_in╬╗OpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::NOT IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
type not_in╬╗OpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
> = _.syntax.$expr_Operator<
  "std::NOT IN",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], $.Cardinality.One>>
>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  e: P1,
  s: P2,
): not_in╬╗OpExpr<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  e: P1,
  s: P2,
): not_in╬╗OpExpr2<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  e: P1,
  s: P2,
): not_in╬╗OpExpr3<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  e: P1,
  s: P2,
): not_in╬╗OpExpr4<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  e: P1,
  s: P2,
): not_in╬╗OpExpr5<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  e: P1,
  s: P2,
): not_in╬╗OpExpr6<P1, P2>;
/**
 * Test the membership of an element in a set.
 */
function not_in<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
>(
  e: P1,
  s: P2,
): not_in╬╗OpExpr7<P1, P2>;
function not_in(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::not_in', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::NOT IN",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type exists╬╗OpExpr<
  P1 extends $.TypeSet<$.BaseType>,
> = _.syntax.$expr_Operator<
  "std::EXISTS",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$bool, $.Cardinality.One>
>;
/**
 * Test whether a set is not empty.
 */
function exists<
  P1 extends $.TypeSet<$.BaseType>,
>(
  s: P1,
): exists╬╗OpExpr<P1>;
function exists(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::exists', args, _.spec, [
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::EXISTS",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type distinct╬╗OpExpr<
  P1 extends $.TypeSet<$.BaseType>,
> = _.syntax.$expr_Operator<
  "std::DISTINCT",
  $.OperatorKind.Prefix,
  [P1],
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>, $.Cardinality.Many>
>;
/**
 * Return a set without repeating any elements.
 */
function distinct<
  P1 extends $.TypeSet<$.BaseType>,
>(
  s: P1,
): distinct╬╗OpExpr<P1>;
function distinct(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::distinct', args, _.spec, [
    {kind: "Prefix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::DISTINCT",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type union╬╗OpExpr<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::UNION",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type union╬╗OpExpr2<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::UNION",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type union╬╗OpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::UNION",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type union╬╗OpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::UNION",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type union╬╗OpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::UNION",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.mergeObjectTypes<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type union╬╗OpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::UNION",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type union╬╗OpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
> = _.syntax.$expr_Operator<
  "std::UNION",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>, $.Cardinality.Many>
>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  s1: P1,
  s2: P2,
): union╬╗OpExpr<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  s1: P1,
  s2: P2,
): union╬╗OpExpr2<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  s1: P1,
  s2: P2,
): union╬╗OpExpr3<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  s1: P1,
  s2: P2,
): union╬╗OpExpr4<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  s1: P1,
  s2: P2,
): union╬╗OpExpr5<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  s1: P1,
  s2: P2,
): union╬╗OpExpr6<P1, P2>;
/**
 * Merge two sets.
 */
function union<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
>(
  s1: P1,
  s2: P2,
): union╬╗OpExpr7<P1, P2>;
function union(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::union', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::UNION",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type coalesce╬╗OpExpr<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type coalesce╬╗OpExpr2<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type coalesce╬╗OpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type coalesce╬╗OpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type coalesce╬╗OpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.mergeObjectTypes<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type coalesce╬╗OpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P2["__element__"]>, $.Cardinality.Many>
>;
type coalesce╬╗OpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
> = _.syntax.$expr_Operator<
  "std::??",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>, $.Cardinality.Many>
>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coalesce╬╗OpExpr<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): coalesce╬╗OpExpr2<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): coalesce╬╗OpExpr3<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): coalesce╬╗OpExpr4<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$.ObjectType>,
>(
  l: P1,
  r: P2,
): coalesce╬╗OpExpr5<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$.AnyTupleType>,
>(
  l: P1,
  r: P2,
): coalesce╬╗OpExpr6<P1, P2>;
/**
 * Coalesce.
 */
function coalesce<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
>(
  l: P1,
  r: P2,
): coalesce╬╗OpExpr7<P1, P2>;
function coalesce(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::coalesce', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: true, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::??",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type if_else╬╗OpExpr<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$decimal╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::IF",
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, P2["__cardinality__"]>>
>;
type if_else╬╗OpExpr2<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$float64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::IF",
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, P2["__cardinality__"]>>
>;
type if_else╬╗OpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::IF",
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, P2["__cardinality__"]>>
>;
type if_else╬╗OpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::IF",
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, P2["__cardinality__"]>>
>;
type if_else╬╗OpExpr5<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ObjectType>,
> = _.syntax.$expr_Operator<
  "std::IF",
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<_.syntax.mergeObjectTypes<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, P2["__cardinality__"]>>
>;
type if_else╬╗OpExpr6<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.AnyTupleType>,
> = _.syntax.$expr_Operator<
  "std::IF",
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<_.syntax.getSharedParentPrimitive<P1["__element__"], P3["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, P2["__cardinality__"]>>
>;
type if_else╬╗OpExpr7<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
> = _.syntax.$expr_Operator<
  "std::IF",
  $.OperatorKind.Ternary,
  [P1, P2, P3],
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>, $.cardinalityUtil.multiplyCardinalities<$.cardinalityUtil.orCardinalities<P1["__cardinality__"], P3["__cardinality__"]>, P2["__cardinality__"]>>
>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$decimal╬╗ICastableTo>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$decimal╬╗ICastableTo>,
>(
  if_true: P1,
  condition: P2,
  if_false: P3,
): if_else╬╗OpExpr<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$float64╬╗ICastableTo>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$float64╬╗ICastableTo>,
>(
  if_true: P1,
  condition: P2,
  if_false: P3,
): if_else╬╗OpExpr2<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  if_true: P1,
  condition: P2,
  if_false: P3,
): if_else╬╗OpExpr3<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  if_true: P1,
  condition: P2,
  if_false: P3,
): if_else╬╗OpExpr4<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.ObjectType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.ObjectType>,
>(
  if_true: P1,
  condition: P2,
  if_false: P3,
): if_else╬╗OpExpr5<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.AnyTupleType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.AnyTupleType>,
>(
  if_true: P1,
  condition: P2,
  if_false: P3,
): if_else╬╗OpExpr6<P1, P2, P3>;
/**
 * Conditionally provide one or the other result.
 */
function if_else<
  P1 extends $.TypeSet<$.BaseType>,
  P2 extends $.TypeSet<$bool>,
  P3 extends $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]>>,
>(
  if_true: P1,
  condition: P2,
  if_false: P3,
): if_else╬╗OpExpr7<P1, P2, P3>;
function if_else(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::if_else', args, _.spec, [
    {kind: "Ternary", args: [{typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000109", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000001", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001", returnTypemod: "SetOfType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::IF",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type concat╬╗OpExpr<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<_.syntax.getSharedParentPrimitive<P1["__element__"]["__element__"], P2["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type concat╬╗OpExpr2<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
> = _.syntax.$expr_Operator<
  "std::++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<_.syntax.getSharedParentPrimitive<P1["__element__"]["__element__"], P2["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type concat╬╗OpExpr3<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
> = _.syntax.$expr_Operator<
  "std::++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<_.syntax.mergeObjectTypes<P1["__element__"]["__element__"], P2["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type concat╬╗OpExpr4<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
> = _.syntax.$expr_Operator<
  "std::++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<_.syntax.getSharedParentPrimitive<P1["__element__"]["__element__"], P2["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type concat╬╗OpExpr5<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
> = _.syntax.$expr_Operator<
  "std::++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type concat╬╗OpExpr6<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
> = _.syntax.$expr_Operator<
  "std::++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bytes, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type concat╬╗OpExpr7<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$decimal╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): concat╬╗OpExpr<P1, P2>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
  P2 extends $.TypeSet<$.ArrayType<$float64╬╗ICastableTo>>,
>(
  l: P1,
  r: P2,
): concat╬╗OpExpr2<P1, P2>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
  P2 extends $.TypeSet<$.ArrayType<$.ObjectType>>,
>(
  l: P1,
  r: P2,
): concat╬╗OpExpr3<P1, P2>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
  P2 extends $.TypeSet<$.ArrayType<$.AnyTupleType>>,
>(
  l: P1,
  r: P2,
): concat╬╗OpExpr4<P1, P2>;
/**
 * Array concatenation.
 */
function concat<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>>,
>(
  l: P1,
  r: P2,
): concat╬╗OpExpr5<P1, P2>;
/**
 * Bytes concatenation.
 */
function concat<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$bytes>,
>(
  l: P1,
  r: P2,
): concat╬╗OpExpr6<P1, P2>;
/**
 * String concatenation.
 */
function concat<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): concat╬╗OpExpr7<P1, P2>;
function concat(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::concat', args, _.spec, [
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}], returnTypeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000102"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::++",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type index╬╗OpExpr<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::[]",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type index╬╗OpExpr2<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::[]",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bytes, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type index╬╗OpExpr3<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::[]",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$json, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type index╬╗OpExpr4<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
> = _.syntax.$expr_Operator<
  "std::[]",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Array indexing.
 */
function index<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): index╬╗OpExpr<P1, P2>;
/**
 * Bytes indexing.
 */
function index<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): index╬╗OpExpr2<P1, P2>;
/**
 * JSON array/string indexing.
 */
function index<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): index╬╗OpExpr3<P1, P2>;
/**
 * String indexing.
 */
function index<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$int64╬╗ICastableTo>,
>(
  l: P1,
  r: P2,
): index╬╗OpExpr4<P1, P2>;
function index(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::index', args, _.spec, [
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000001"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000102"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010f"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000105", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::[]",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type slice╬╗OpExpr<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.TupleType<[$int64╬╗ICastableTo, $int64╬╗ICastableTo]>>,
> = _.syntax.$expr_Operator<
  "std::[]",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$.ArrayType<$.getPrimitiveBaseType<P1["__element__"]["__element__"]>>, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type slice╬╗OpExpr2<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$.TupleType<[$int64╬╗ICastableTo, $int64╬╗ICastableTo]>>,
> = _.syntax.$expr_Operator<
  "std::[]",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bytes, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type slice╬╗OpExpr3<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$.TupleType<[$int64╬╗ICastableTo, $int64╬╗ICastableTo]>>,
> = _.syntax.$expr_Operator<
  "std::[]",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$json, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
type slice╬╗OpExpr4<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$.TupleType<[$int64╬╗ICastableTo, $int64╬╗ICastableTo]>>,
> = _.syntax.$expr_Operator<
  "std::[]",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$str, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Array slicing.
 */
function slice<
  P1 extends $.TypeSet<$.ArrayType<$.NonArrayType>>,
  P2 extends $.TypeSet<$.TupleType<[$int64╬╗ICastableTo, $int64╬╗ICastableTo]>>,
>(
  l: P1,
  r: P2,
): slice╬╗OpExpr<P1, P2>;
/**
 * Bytes slicing.
 */
function slice<
  P1 extends $.TypeSet<$bytes>,
  P2 extends $.TypeSet<$.TupleType<[$int64╬╗ICastableTo, $int64╬╗ICastableTo]>>,
>(
  l: P1,
  r: P2,
): slice╬╗OpExpr2<P1, P2>;
/**
 * JSON array/string slicing.
 */
function slice<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$.TupleType<[$int64╬╗ICastableTo, $int64╬╗ICastableTo]>>,
>(
  l: P1,
  r: P2,
): slice╬╗OpExpr3<P1, P2>;
/**
 * String slicing.
 */
function slice<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$.TupleType<[$int64╬╗ICastableTo, $int64╬╗ICastableTo]>>,
>(
  l: P1,
  r: P2,
): slice╬╗OpExpr4<P1, P2>;
function slice(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::slice', args, _.spec, [
    {kind: "Infix", args: [{typeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3", optional: false, setoftype: false, variadic: false}, {typeId: "b6dce0a9-a33c-8f05-943f-f7187bfabdce", optional: false, setoftype: false, variadic: false}], returnTypeId: "5d31584b-3a5f-533d-3d64-fab0fdab61b3"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000102", optional: false, setoftype: false, variadic: false}, {typeId: "b6dce0a9-a33c-8f05-943f-f7187bfabdce", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000102"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "b6dce0a9-a33c-8f05-943f-f7187bfabdce", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010f"},
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "b6dce0a9-a33c-8f05-943f-f7187bfabdce", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::[]",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type destructure╬╗OpExpr<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::[]",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$json, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * JSON object property access.
 */
function destructure<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$str>,
>(
  l: P1,
  r: P2,
): destructure╬╗OpExpr<P1, P2>;
function destructure(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::destructure', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::[]",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type concatenate╬╗OpExpr<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
> = _.syntax.$expr_Operator<
  "std::++",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$json, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Concatenate two JSON values into a new JSON value.
 */
function concatenate<
  P1 extends $.TypeSet<$json>,
  P2 extends $.TypeSet<$json>,
>(
  l: P1,
  r: P2,
): concatenate╬╗OpExpr<P1, P2>;
function concatenate(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::concatenate', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-00000000010f", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-00000000010f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::++",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type like╬╗OpExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::LIKE",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Case-sensitive simple string matching.
 */
function like<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  string: P1,
  pattern: P2,
): like╬╗OpExpr<P1, P2>;
function like(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::like', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::LIKE",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type ilike╬╗OpExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::ILIKE",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Case-insensitive simple string matching.
 */
function ilike<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  string: P1,
  pattern: P2,
): ilike╬╗OpExpr<P1, P2>;
function ilike(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::ilike', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::ILIKE",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type not_like╬╗OpExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::NOT LIKE",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Case-sensitive simple string matching.
 */
function not_like<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  string: P1,
  pattern: P2,
): not_like╬╗OpExpr<P1, P2>;
function not_like(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::not_like', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::NOT LIKE",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};

type not_ilike╬╗OpExpr<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
> = _.syntax.$expr_Operator<
  "std::NOT ILIKE",
  $.OperatorKind.Infix,
  [P1, P2],
  $.TypeSet<$bool, $.cardinalityUtil.multiplyCardinalities<P1["__cardinality__"], P2["__cardinality__"]>>
>;
/**
 * Case-insensitive simple string matching.
 */
function not_ilike<
  P1 extends $.TypeSet<$str>,
  P2 extends $.TypeSet<$str>,
>(
  string: P1,
  pattern: P2,
): not_ilike╬╗OpExpr<P1, P2>;
function not_ilike(...args: any[]) {
  const {kind, returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('std::not_ilike', args, _.spec, [
    {kind: "Infix", args: [{typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}, {typeId: "00000000-0000-0000-0000-000000000101", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000109"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Operator,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "std::NOT ILIKE",
    __opkind__: kind,
    __args__: positionalArgs,
  }) as any;
};



export { $anyscalar, $anyreal, $anyfloat, $anyint, $anynumeric, bigint, bool, bytes, datetime, decimal, duration, float32, float64, int16, int32, int64, json, $sequence, str, uuid, $BaseObject, BaseObject, $Object_e8dc454c533a11ecb6a0056082757897, Object_e8dc454c533a11ecb6a0056082757897, $FreeObject, FreeObject };

type __defaultExports = {
  "$anyscalar": typeof $anyscalar;
  "$anyreal": typeof $anyreal;
  "$anyfloat": typeof $anyfloat;
  "$anyint": typeof $anyint;
  "$anynumeric": typeof $anynumeric;
  "bigint": typeof bigint;
  "bool": typeof bool;
  "bytes": typeof bytes;
  "datetime": typeof datetime;
  "decimal": typeof decimal;
  "duration": typeof duration;
  "float32": typeof float32;
  "float64": typeof float64;
  "int16": typeof int16;
  "int32": typeof int32;
  "int64": typeof int64;
  "json": typeof json;
  "$sequence": typeof $sequence;
  "str": typeof str;
  "uuid": typeof uuid;
  "$BaseObject": typeof $BaseObject;
  "BaseObject": typeof BaseObject;
  "$Object": typeof $Object_e8dc454c533a11ecb6a0056082757897;
  "Object": typeof Object_e8dc454c533a11ecb6a0056082757897;
  "$FreeObject": typeof $FreeObject;
  "FreeObject": typeof FreeObject;
  "assert_single": typeof assert_single;
  "assert_exists": typeof assert_exists;
  "assert_distinct": typeof assert_distinct;
  "len": typeof len;
  "sum": typeof sum;
  "count": typeof count;
  "random": typeof random;
  "min": typeof min;
  "max": typeof max;
  "all": typeof all;
  "any": typeof any;
  "enumerate": typeof enumerate;
  "round": typeof round;
  "contains": typeof contains;
  "find": typeof find;
  "array_agg": typeof array_agg;
  "array_unpack": typeof array_unpack;
  "array_get": typeof array_get;
  "array_join": typeof array_join;
  "bytes_get_bit": typeof bytes_get_bit;
  "datetime_current": typeof datetime_current;
  "datetime_of_transaction": typeof datetime_of_transaction;
  "datetime_of_statement": typeof datetime_of_statement;
  "datetime_get": typeof datetime_get;
  "datetime_truncate": typeof datetime_truncate;
  "duration_truncate": typeof duration_truncate;
  "duration_to_seconds": typeof duration_to_seconds;
  "json_typeof": typeof json_typeof;
  "json_array_unpack": typeof json_array_unpack;
  "json_object_unpack": typeof json_object_unpack;
  "json_get": typeof json_get;
  "re_match": typeof re_match;
  "re_match_all": typeof re_match_all;
  "re_test": typeof re_test;
  "re_replace": typeof re_replace;
  "str_repeat": typeof str_repeat;
  "str_lower": typeof str_lower;
  "str_upper": typeof str_upper;
  "str_title": typeof str_title;
  "str_pad_start": typeof str_pad_start;
  "str_lpad": typeof str_lpad;
  "str_pad_end": typeof str_pad_end;
  "str_rpad": typeof str_rpad;
  "str_trim_start": typeof str_trim_start;
  "str_ltrim": typeof str_ltrim;
  "str_trim_end": typeof str_trim_end;
  "str_rtrim": typeof str_rtrim;
  "str_trim": typeof str_trim;
  "str_split": typeof str_split;
  "uuid_generate_v1mc": typeof uuid_generate_v1mc;
  "to_str": typeof to_str;
  "to_json": typeof to_json;
  "to_datetime": typeof to_datetime;
  "to_duration": typeof to_duration;
  "to_bigint": typeof to_bigint;
  "to_decimal": typeof to_decimal;
  "to_int64": typeof to_int64;
  "to_int32": typeof to_int32;
  "to_int16": typeof to_int16;
  "to_float64": typeof to_float64;
  "to_float32": typeof to_float32;
  "sequence_reset": typeof sequence_reset;
  "sequence_next": typeof sequence_next;
  "eq": typeof eq;
  "coal_eq": typeof coal_eq;
  "neq": typeof neq;
  "coal_neq": typeof coal_neq;
  "gte": typeof gte;
  "gt": typeof gt;
  "lte": typeof lte;
  "lt": typeof lt;
  "or": typeof or;
  "and": typeof and;
  "not": typeof not;
  "plus": typeof plus;
  "minus": typeof minus;
  "mult": typeof mult;
  "div": typeof div;
  "floordiv": typeof floordiv;
  "mod": typeof mod;
  "pow": typeof pow;
  "in": typeof in_e664723a533a11ec97367d35f44a5c55;
  "not_in": typeof not_in;
  "exists": typeof exists;
  "distinct": typeof distinct;
  "union": typeof union;
  "coalesce": typeof coalesce;
  "if_else": typeof if_else;
  "concat": typeof concat;
  "index": typeof index;
  "slice": typeof slice;
  "destructure": typeof destructure;
  "concatenate": typeof concatenate;
  "like": typeof like;
  "ilike": typeof ilike;
  "not_like": typeof not_like;
  "not_ilike": typeof not_ilike
};
const __defaultExports: __defaultExports = {
  "$anyscalar": $anyscalar,
  "$anyreal": $anyreal,
  "$anyfloat": $anyfloat,
  "$anyint": $anyint,
  "$anynumeric": $anynumeric,
  "bigint": bigint,
  "bool": bool,
  "bytes": bytes,
  "datetime": datetime,
  "decimal": decimal,
  "duration": duration,
  "float32": float32,
  "float64": float64,
  "int16": int16,
  "int32": int32,
  "int64": int64,
  "json": json,
  "$sequence": $sequence,
  "str": str,
  "uuid": uuid,
  "$BaseObject": $BaseObject,
  "BaseObject": BaseObject,
  "$Object": $Object_e8dc454c533a11ecb6a0056082757897,
  "Object": Object_e8dc454c533a11ecb6a0056082757897,
  "$FreeObject": $FreeObject,
  "FreeObject": FreeObject,
  "assert_single": assert_single,
  "assert_exists": assert_exists,
  "assert_distinct": assert_distinct,
  "len": len,
  "sum": sum,
  "count": count,
  "random": random,
  "min": min,
  "max": max,
  "all": all,
  "any": any,
  "enumerate": enumerate,
  "round": round,
  "contains": contains,
  "find": find,
  "array_agg": array_agg,
  "array_unpack": array_unpack,
  "array_get": array_get,
  "array_join": array_join,
  "bytes_get_bit": bytes_get_bit,
  "datetime_current": datetime_current,
  "datetime_of_transaction": datetime_of_transaction,
  "datetime_of_statement": datetime_of_statement,
  "datetime_get": datetime_get,
  "datetime_truncate": datetime_truncate,
  "duration_truncate": duration_truncate,
  "duration_to_seconds": duration_to_seconds,
  "json_typeof": json_typeof,
  "json_array_unpack": json_array_unpack,
  "json_object_unpack": json_object_unpack,
  "json_get": json_get,
  "re_match": re_match,
  "re_match_all": re_match_all,
  "re_test": re_test,
  "re_replace": re_replace,
  "str_repeat": str_repeat,
  "str_lower": str_lower,
  "str_upper": str_upper,
  "str_title": str_title,
  "str_pad_start": str_pad_start,
  "str_lpad": str_lpad,
  "str_pad_end": str_pad_end,
  "str_rpad": str_rpad,
  "str_trim_start": str_trim_start,
  "str_ltrim": str_ltrim,
  "str_trim_end": str_trim_end,
  "str_rtrim": str_rtrim,
  "str_trim": str_trim,
  "str_split": str_split,
  "uuid_generate_v1mc": uuid_generate_v1mc,
  "to_str": to_str,
  "to_json": to_json,
  "to_datetime": to_datetime,
  "to_duration": to_duration,
  "to_bigint": to_bigint,
  "to_decimal": to_decimal,
  "to_int64": to_int64,
  "to_int32": to_int32,
  "to_int16": to_int16,
  "to_float64": to_float64,
  "to_float32": to_float32,
  "sequence_reset": sequence_reset,
  "sequence_next": sequence_next,
  "eq": eq,
  "coal_eq": coal_eq,
  "neq": neq,
  "coal_neq": coal_neq,
  "gte": gte,
  "gt": gt,
  "lte": lte,
  "lt": lt,
  "or": or,
  "and": and,
  "not": not,
  "plus": plus,
  "minus": minus,
  "mult": mult,
  "div": div,
  "floordiv": floordiv,
  "mod": mod,
  "pow": pow,
  "in": in_e664723a533a11ec97367d35f44a5c55,
  "not_in": not_in,
  "exists": exists,
  "distinct": distinct,
  "union": union,
  "coalesce": coalesce,
  "if_else": if_else,
  "concat": concat,
  "index": index,
  "slice": slice,
  "destructure": destructure,
  "concatenate": concatenate,
  "like": like,
  "ilike": ilike,
  "not_like": not_like,
  "not_ilike": not_ilike
};
export default __defaultExports;
