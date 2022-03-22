import e, {createClient} from './dbschema/edgeql-js';

// connect to database
const client = createClient();

export async function query() {
  // write query
  const josh = e.insert(e.Person, {
    name: 'Josh Brolin',
  });
  const updatedAvengers = e.update(e.Movie, (movie) => ({
    filter: e.op(movie.title, 'ilike', 'The Avengers'),
    set: {
      actors: {
        '+=': josh,
      },
    },
  }));
  const query = e.select(updatedAvengers, () => ({
    title: true,
    actors_names: updatedAvengers.actors.name,
  }));

  [
    {
      title: 'All the frameworks!',
      tag_names: ['angular', 'nestjs', 'cypress', 'nx'],
      match_count: 4,
    },
    {
      title: 'Nest + Cypress',
      tag_names: ['nestjs', 'cypress'],
      match_count: 2,
    },
    {
      title: 'NX is cool',
      tag_names: ['nx'],
      match_count: 1,
    },
  ];

  console.log(query.toEdgeQL());

  // strongly typed result
  const result = await query.run(client);

  return result;
}
