import * as edgedb from 'edgedb';
import e from './dbschema/edgeql-js';

const movies = [
  {title: 'Iron Man', actors: ['Robert Downey Jr.']},
  {title: 'The Incredible Hulk', actors: ['Mark Ruffalo', 'Tim Roth']},
  {
    title: 'Iron Man 2',
    actors: ['Robert Downey Jr.', 'Scarlett Johansson', 'Justin Hammer'],
  },
  {
    title: 'Thor',
    actors: ['Chris Hemsworth', 'Tom Hiddleston', 'Natalie Portman'],
  },
  {
    title: 'Captain America: The First Avenger',
    actors: ['Chris Evans', 'Hugo Weaving'],
  },
  {
    title: 'The Avengers',
    actors: [
      'Robert Downey Jr.',
      'Chris Hemsworth',
      'Chris Evans',
      'Jeremy Renner',
      'Scarlett Johansson',
      'Mark Ruffalo',
    ],
  },
  {
    title: 'Iron Man 3',
    actors: ['Robert Downey Jr.', 'Ben Kingsley', 'Guy Pearce'],
  },
  {
    title: 'Thor: The Dark World',
    actors: [
      'Chris Hemsworth',
      'Tom Hiddleston',
      'Christopher Eccleston',
      'Natalie Portman',
    ],
  },
  {
    title: 'Captain America: The Winter Soldier',
    actors: ['Chris Evans', 'Sebastian Stan'],
  },
  {title: 'Ant-Man', actors: ['Paul Rudd']},
  {
    title: 'Captain America: Civil War',
    actors: [
      'Chris Evans',
      'Robert Downey Jr.',
      'Scarlett Johansson',
      'Jeremy Renner',
      'Tom Holland',
      'Sebastian Stan',
      'Paul Rudd',
    ],
  },
  {title: 'Doctor Strange', actors: ['Benedict Cumberbatch']},
  {
    title: 'Spider-Man: Homecoming',
    actors: [
      'Tom Holland',
      'Michael Keaton',
      'Mchael Mando',
      'Michael Chernus',
    ],
  },
  {
    title: 'Thor: Ragnarok',
    actors: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett'],
  },

  {title: 'Ant-Man and The Wasp', actors: ['Paul Rudd']},
  {
    title: 'Spider-Man: Far From Home',
    actors: ['Tom Holland', 'Jake Gyllenhaal'],
  },
  {
    title: 'Spider-Man: No Way Home',
    actors: [
      'Tom Holland',
      'Alfred Molina',
      'Willem Defoe',
      'Benedict Cumberbatch',
    ],
  },
];

async function run() {
  const client = edgedb.createClient();

  try {
    await e.delete(e.Movie).run(client);
    await e.delete(e.Person).run(client);

    const actors = new Set<string>();

    for (const movie of movies) {
      for (const actor of movie.actors) {
        actors.add(actor);
      }
    }

    for (const actor of actors) {
      console.log(`creating ${actor}`);
      await e
        .insert(e.Person, {
          name: actor,
        })
        .run(client);
    }

    for (const movie of movies) {
      console.log(`creating ${movie.title}`);
      await e
        .insert(e.Movie, {
          title: movie.title,
          actors: e.select(e.Person, (person) => ({
            filter: e.op(person.name, 'in', e.set(...movie.actors)),
          })),
        })
        .run(client);
    }
  } catch (err) {
    console.log(err);
  }
  client.close();
}

run();
