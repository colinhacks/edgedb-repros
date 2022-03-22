import * as edgedb from 'edgedb';
import { number } from 'fp-ts';
import e from './dbschema/edgeql';

const client = edgedb.createClient();

async function run() {
  e.set(e.str('adf'));
  e.plus;

  // const query = e.select(e.Hero, (hero) => ({
  //   id: true,
  //   name: true,
  //   villains: { name: true },
  //   // filter: e.op([hero.name, '=', e.str('Iron Man')]),
  // }));

  type props<T extends edgedb.$.ObjectTypeSet> =
    keyof T['__element__']['__pointers__'];

  type heroProps = props<typeof e['Hero']>;

  const filters: {
    field: heroProps;
    op: string;
    value: any;
  }[] = [];

  function op(expr: edgedb.$.TypeSet, operator: string, value: unknown) {
    return e.bool(true);
  }

  const query = e.select(e.Hero, (hero) => {
    const asdf = e.bool(true);
    return { id: true };
    // const qbFilters: edgedb.$.TypeSet<typeof e['bool']>[] = [];
    // e.set(...qbFilters);
    // A spread argument must either have a tuple type or be passed to a rest parameter.ts

    // return {
    //   id: true,
    //   name: true,
    //   filter: e.all(e.set(...qbFilters) as any),
    // };
  });

  const ag = e.select(e.Hero, (hero) => ({ id: true, arg: hero.name }));

  // "id" | "name" | "secret_identity"

  const ar = e.array([e.str('aaa'), e.str('bbb'), e.str('ccc')]);

  e.if_else;

  const result = await query.run(client);
  result;

  // let arg = e.str('asdf');
  // arg = e.str('qwer');
  // Type '"qwer"' is not assignable to type '"asdf"'.
}

run();

const arg = { arg: true } as const;

const infer = <T extends { [k: string]: boolean }>(arg: T) => arg;

const result = infer({
  ...arg,
  arg: false,
});

const vall = {
  hi: 'asdf',
  method: function (arg: string) {
    // this.
  },
};

type func = (this: { whatever: number }, arg: string) => any;

const f: func = function (arg) {
  return {
    arg: 'asdf',
    qer: this.whatever,
    asdf: {
      qwer: this.whatever,
      qwerd: this.whatever,
    },
    nested: (arg: string) => {
      // return this.
      return (this.whatever as any) === arg;
    },
  };
};

const Empty = {
  lower: 0,
  upper: 0,
} as const;
type Empty = typeof Empty;

const One = {
  lower: 1,
  upper: 1,
} as const;
type One = typeof One;

const AtLeastOne = {
  lower: 1,
  upper: Infinity as number,
} as const;
type AtLeastOne = typeof AtLeastOne;

const AtMostOne = {
  lower: -Infinity as number,
  upper: 1,
} as const;
type AtMostOne = typeof AtMostOne;

const Many = {
  lower: -Infinity as number,
  upper: -Infinity as number,
} as const;
type Many = typeof Many;

const Cardinality = {
  Empty: Empty,
  One: One,
  AtLeastOne: AtLeastOne,
  AtMostOne: AtMostOne,
  Many: Many,
};
type Cardinality = { lower: number; upper: number };

type t1 = AtMostOne extends Many ? true : false; // true
type t2 = Many extends AtMostOne ? true : false; // false
type t3 = One extends Many ? true : false; // true
type t4 = Many extends One ? true : false; // false
type t5 = AtMostOne extends AtLeastOne ? true : false; // false
type t6 = AtLeastOne extends AtMostOne ? true : false; // false

// runtime
// addCardinalities: just add together the values for each bound
// multiplyCardinalities: multiple together the values for each bound
//   one gotcha: 0 * Inf = NaN but we want this to be 0

// static:
//   implement "add" and "multiply" aliases
//   addCardinalities and multiplyCardinalities are way simpler

type add<A extends number, B extends number> = A extends 0
  ? B
  : B extends 0
  ? A
  : number;

type multiply<A extends number, B extends number> = A extends 0
  ? 0
  : B extends 0
  ? 0
  : A extends 1
  ? B extends 1
    ? 1
    : number
  : number;

type addCardinalities<A extends Cardinality, B extends Cardinality> = {
  lower: add<A['lower'], B['lower']>;
  upper: add<A['lower'], B['lower']>;
};

type multiplyCardinalities<A extends Cardinality, B extends Cardinality> = {
  lower: multiply<A['lower'], B['lower']>;
  upper: multiply<A['lower'], B['lower']>;
};
