import * as edgedb from 'edgedb';
import e from './dbschema/edgeql-js';

const client = edgedb.createClient();

// let rawdata = require('./csvtest2.json');
async function run() {
  const edata = e.json([{title: 'asdf'}, {title: 'qwer'}]);

  const query = e.params(
    {
      title: e.str,
      release_year: e.optional(e.int64),
    },
    (params) => {
      return e.insert(e.Movie, {
        title: params.title,
        release_year: params.release_year,
      });
    }
  );

  const result = await query.run(client, {title: 'The Eternals'});

  // const result = await query.run(client);
  console.log(result);
}

run();
