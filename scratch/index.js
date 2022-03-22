import {createClient} from 'edgedb';
import e from './dbschema/edgeql-js';

const client = createClient();

let query = e.select(e.Labor_union, () => ({
  union_name: {
    name: true,
  },
}));

console.log(query.toEdgeQL());

async function run() {
  const result = await query.run(client);
  console.log(result);
}
run();
