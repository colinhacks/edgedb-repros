import * as edgedb from 'edgedb';
import e from './dbschema/edgeql-js';

const client = edgedb.createClient();

async function run() {
  const query = e.str('Hello world')
  console.log(query.toEdgeQL());
  const result = await query.run(client);  
  console.log(result);
}

run();
