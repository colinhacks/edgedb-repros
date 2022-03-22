import * as edgedb from 'edgedb';
import e from './dbschema/edgeql-js';

const client = edgedb.createClient();

async function run() {
  const req: any = {user: {id: '2c096ade-a980-11ec-a00c-e3a2f9c4eb93'}};
  const formId = '48c52e60-a980-11ec-a00c-172ec833e991';

  const query = await e.assert_single(
    e.select(e.Form, (form) => ({
      filter: e.op(
        form.id,
        '=',
        e.uuid('48c52e60-a980-11ec-a00c-172ec833e991')
      ),
      ownerId: form.owner.id,
      name: true,
      submitted: true,
      id: true,
      answers: {
        value: true,
        question: {
          id: true,
          answerType: true,
        },
      },
    }))
  );

  console.log(query.toEdgeQL());
  const result = await query.run(client);
  console.log(result);
}

run();
