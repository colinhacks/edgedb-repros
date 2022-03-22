import {createClient} from 'edgedb';

import * as edgedb from 'edgedb';
import e from '../dbschema/edgeql-js';
const client = createClient();

export async function run() {
  // commands
  e.select;
  e.insert;
  e.update;
  e.delete;

  // types
  e.str;
  e.bool;
  e.int64;
  e.duration;
  e.cal.local_date;

  // functions
  e.str_upper;
  e.len;
  e.count;
  e.math.stddev;
  e.str('Hello world!').toEdgeQL();
  // "Hello world"

  e.set(1, 2, 3).toEdgeQL();
  // {1, 2, 3}

  e.count(e.Movie).toEdgeQL();
  // count(Movie)

  e.insert(e.Movie, {title: 'Iron Man '}).toEdgeQL();
  // insert Movie { title := "Iron Man" }

  e.select(e.Movie, () => ({id: true, title: true})).toEdgeQL();
  // select Movie { id, title }

  const client = edgedb.createClient();
  const myQuery = e.str('Hello world');
  const result = await myQuery.run(client);
  // => "Hello world"
  const q1 = e.str('Hello');
  q1.__element__; // e.str
  q1.__cardinality__; // "One"

  const q2 = e.Movie;
  q2.__element__; // e.Movie
  q2.__cardinality__; // "Many"
}
