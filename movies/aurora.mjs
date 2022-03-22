import * as edgedb from 'edgedb';

const client = edgedb.createClient({
  host: `18.208.166.55`,
  tlsSecurity: 'no_host_verification',
  password: 'password',
});

const result = await client.query(`select 2 + 2;`);
console.log(result);
