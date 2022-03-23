import * as edgedb from 'edgedb';
import crypto from 'crypto';

const client = edgedb.createClient();
async function run() {
  let i = 0;
  let data = '[\n';
  console.log(`Generating sample data...`);
  while (i < 100000) {
    data += `{ "title": "${crypto
      .randomBytes(20)
      .toString('hex')}", "release_year": ${Math.round(
      1922 + Math.random() * 100
    )} },`;
    i++;
  }
  data = data.slice(0, -1);
  data += ']';
  console.log(`Inserting movies...`);

  await client.query(
    `
    with data := <json>$data
    for movie in json_array_unpack(data) union (
    insert Movie {
      title := <str>movie['title'],
      release_year := <int64>movie['release_year']
    })
  `,
    {data}
  );
  console.log(`DONE.`);
}

run();
