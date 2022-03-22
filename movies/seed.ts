import * as edgedb from 'edgedb';
import e from './dbschema/edgeql-js';

const characterNames: Record<string, string> = {
  'Robert Downey Jr.': 'Iron Man',
  'Chris Evans': 'Captain America',

  'Mark Ruffalo': 'The Hulk',
  'Jeremy Renner': 'Hawkeye',
  'Tom Holland': 'Spider-Man',
  'Scarlett Johansson': 'Black Widow',
  'Florence Pugh': 'Yelena Belova',
  'Chris Hemsworth': 'Thor',
  'Anthony Mackie': 'The Falcon',
  'Tessa Thomson': 'Valkyrie',
  'Paul Rudd': 'Ant-Man',
  'Evangeline Lilly': 'The Wasp',
  'Benedict Cumberbatch': 'Doctor Strange',
  'Chadwick Boseman': 'Black Panther',
  'Elizabeth Olsen': 'Scarlet Witch',
  'Aaron Taylor-Johnson': 'Quicksilver',
  'Paul Bettany': 'Vision',
  'Brie Larson': 'Captain Marvel',
  'Don Cheadle': 'War Machine',
  'Dave Bautista': 'Drax',
  'Zoe Saldana': 'Gamora',
  'Chris Pratt': 'Star-Lord',
  'Bradley Cooper': 'Rocket',
  'Karen Gillan': 'Nebula',
  'Vin Diesel': 'Groot',
  'Michael Rooker': 'Yondu',
  'Pom Klementieff': 'Mantis',
  'Samuel L. Jackson': 'Nick Fury',
  'Ray Winstone': 'General Dreykov',
  // 'Salma Hayek': 'Ajak',
  // 'Gemma Chan': 'Sersi',
  // 'Richard Madden': 'Ikaris',
  // 'Kumail Nanjiani': 'Kingo',
  // {name: 'Sprite'},
  // {name: 'Phastos'},
  // {name: 'Makkari'},
  // {name: 'Druig'},
  // {name: 'Gilgamesh'},
  // {name: 'Thena'},
  'Kit Harington': 'Black Knight',
  'Danai Durira': 'Okoye',
  'Letitia Wright': 'Shuri',
  'Benedict Wong': 'Wong',
  'Simu Liu': 'Shang Chi',

  'Sam Rockwell': 'Justin Hammer',
  'Mickey Rourke': 'Whiplash',
  'Tom Hiddleston': 'Loki',
  'Tim Roth': 'Abomination',
  'Hugo Weaving': 'Red Skull',
  'Ben Kingsley': 'The Mandarin',
  'Gu Pearce': 'Aldrich Killian',
  'Chris Eccleston': 'Malekith',
  'Sebastian Stan': 'The Winter Soldier',
  'Lee Pace': 'Ronin the Accuser',
  'James Spader': 'Ultron',
  'Daniel Bruhl': 'Zemo',
  'Mads Mikkelsen': 'Kaecilius',
  'Kurt Russell': 'Ego',
  'Michael Keaton': 'The Vulture',
  'Bokeem Woodbine': 'Shocker',
  'Michael Chernus': 'Tinkerer',
  'Cate Blanchett': 'Hela',
  'Michael B. Jordan': 'Killmonger',
  'Josh Brolin': 'Thanos',
  'RaeLynn BrattenXXX': 'Ghost',
  'Jude Law': 'Yon-Rogg',
  'Jake Gyllenhaal': 'Mysterio',
  'Olga Kurylenko': 'Taskmaster',
  'Alfred Molina': 'Doc Ock',
  'Willem Dafoe': 'Green Goblin',
  'Jamie Foxx': 'Electro',
  'Thomas Haden Church': 'Sandman',
  'Rhys Ifans': 'The Lizard',
};

// const movies = [
//   {title: 'Iron Man', actors: ['Robert Downey Jr.']},
//   {title: 'The Incredible Hulk', actors: ['Mark Ruffalo', 'Tim Roth']},
//   {
//     title: 'Iron Man 2',
//     actors: ['Robert Downey Jr.', 'Scarlett Johansson', 'Justin Hammer'],
//   },
//   {
//     title: 'Thor',
//     actors: ['Chris Hemsworth', 'Tom Hiddleston', 'Natalie Portman'],
//   },
//   {
//     title: 'Captain America: The First Avenger',
//     actors: ['Chris Evans', 'Hugo Weaving'],
//   },
//   {
//     title: 'The Avengers',
//     actors: [
//       'Robert Downey Jr.',
//       'Chris Hemsworth',
//       'Chris Evans',
//       'Jeremy Renner',
//       'Scarlett Johansson',
//       'Mark Ruffalo',
//     ],
//   },
//   {
//     title: 'Iron Man 3',
//     actors: ['Robert Downey Jr.', 'Ben Kingsley', 'Guy Pearce'],
//   },
//   {
//     title: 'Thor: The Dark World',
//     actors: [
//       'Chris Hemsworth',
//       'Tom Hiddleston',
//       'Christopher Eccleston',
//       'Natalie Portman',
//     ],
//   },
//   {
//     title: 'Captain America: The Winter Soldier',
//     actors: ['Chris Evans', 'Sebastian Stan'],
//   },
//   {title: 'Ant-Man', actors: ['Paul Rudd']},
//   {
//     title: 'Captain America: Civil War',
//     actors: [
//       'Chris Evans',
//       'Robert Downey Jr.',
//       'Scarlett Johansson',
//       'Jeremy Renner',
//       'Tom Holland',
//       'Sebastian Stan',
//       'Paul Rudd',
//     ],
//   },
//   {title: 'Doctor Strange', actors: ['Benedict Cumberbatch']},
//   {
//     title: 'Spider-Man: Homecoming',
//     actors: [
//       'Tom Holland',
//       'Michael Keaton',
//       'Mchael Mando',
//       'Michael Chernus',
//     ],
//   },
//   {
//     title: 'Thor: Ragnarok',
//     actors: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett'],
//   },

//   {title: 'Ant-Man and The Wasp', actors: ['Paul Rudd']},
//   {
//     title: 'Spider-Man: Far From Home',
//     actors: ['Tom Holland', 'Jake Gyllenhaal'],
//   },
//   {
//     title: 'Spider-Man: No Way Home',
//     actors: [
//       'Tom Holland',
//       'Alfred Molina',
//       'Willem Defoe',
//       'Benedict Cumberbatch',
//     ],
//   },
// ];

const fullMovies = [
  {title: 'Iron Man', release_year: 2008, characters: ['Iron Man']},
  {
    title: 'The Incredible Hulk',
    release_year: 2008,
    characters: ['The Hulk', 'Abomination'],
  },
  {
    title: 'Iron Man 2',
    release_year: 2010,
    characters: ['Iron Man', 'Black Widow', 'Justin Hammer', 'Whiplash'],
  },
  {title: 'Thor', release_year: 2010, characters: ['Thor', 'Loki']},
  {
    title: 'Captain America: The First Avenger',
    release_year: 2011,
    characters: ['Captain America', 'Red Skull'],
  },
  {
    title: 'The Avengers',
    release_year: 2012,
    characters: [
      'Iron Man',
      'Thor',
      'Captain America',
      'Hawkeye',
      'Black Widow',
      'The Hulk',
      'Loki',
    ],
  },
  {
    title: 'Iron Man 3',
    release_year: 2013,
    characters: ['Iron Man', 'The Mandarin', 'Aldrich Killian'],
  },
  {
    title: 'Thor: The Dark World',
    release_year: 2013,
    characters: ['Thor', 'Loki', 'Malekith'],
  },
  {
    title: 'Captain America: The Winter Soldier',
    release_year: 2014,
    characters: [
      'Captain America',
      'The Winter Soldier',
      'Black Widow',
      'Nick Fury',
    ],
  },
  {
    title: 'Guardians of the Galaxy',
    release_year: 2014,
    characters: [
      'Drax',
      'Gamora',
      'Star-Lord',
      'Rocket',
      'Nebula',
      'Groot',
      'Yondu',
      'Ronin the Accuser',
    ],
  },
  {
    title: 'Avengers: Age of Ultron',
    release_year: 2015,
    characters: [
      'Iron Man',
      'Thor',
      'Captain America',
      'Hawkeye',
      'Black Widow',
      'The Hulk',
      'Scarlet Witch',
      'Quicksilver',
      'Ultron',
      'Nick Fury',
      'Vision',
    ],
  },
  {title: 'Ant-Man', release_year: 2015, characters: ['Ant-Man']},
  {
    title: 'Captain America: Civil War',
    release_year: 2016,
    characters: [
      'Captain America',
      'Iron Man',
      'Black Widow',
      'Hawkeye',
      'Spider-Man',
      'The Winter Soldier',
      'Ant-Man',
      'Nick Fury',
      'Vision',
      'The Falcon',
      'Scarlet Witch',
      'Black Panther',
      'War Machine',
      'Zemo',
    ],
  },
  {
    title: 'Doctor Strange',
    release_year: 2016,
    characters: ['Doctor Strange', 'Wong', 'Kaecilius'],
  },
  {
    title: 'Guardians of the Galaxy Vol. 2',
    release_year: 2017,
    characters: [
      'Drax',
      'Gamora',
      'Star-Lord',
      'Rocket',
      'Nebula',
      'Groot',
      'Ego',
      'Mantis',
      'Yondu',
    ],
  },
  {
    title: 'Spider-Man: Homecoming',
    release_year: 2017,
    characters: [
      'Spider-Man',
      'Iron Man',
      'The Vulture',
      'Shocker',
      'Tinkerer',
    ],
  },
  {
    title: 'Thor: Ragnarok',
    release_year: 2017,
    characters: ['Thor', 'Valkyrie', 'Loki', 'Hela'],
  },
  {
    title: 'Black Panther',
    release_year: 2018,
    characters: ['Black Panther', 'Shuri', 'Okoye', 'Killmonger'],
  },
  {
    title: 'Avengers: Infinity War',
    release_year: 2018,
    characters: [
      'Iron Man',
      'Thanos',
      'Thor',
      'Captain America',
      'Doctor Strange',
      'Wong',
      'Scarlet Witch',
      'Vision',
      'Nebula',
      'Black Panther',
      'Okoye',
      'Shuri',
      'The Falcon',
      'The Hulk',
      'The Winter Soldier',
      'Black Widow',
      'Spider-Man',
      'Star-Lord',
      'Gamora',
      'Mantis',
      'Rocket',
      'Groot',
      'Drax',
      'War Machine',
      'Loki',
    ],
  },
  {
    title: 'Ant-Man and the Wasp',
    release_year: 2018,
    characters: ['Ant-Man', 'The Wasp', 'Ghost'],
  },
  {
    title: 'Captain Marvel',
    release_year: 2019,
    characters: ['Captain Marvel', 'Nick Fury', 'Yon-Rogg'],
  },
  {
    title: 'Avengers: Endgame',
    release_year: 2019,
    characters: [
      'Ant-Man',
      'The Wasp',
      'Captain Marvel',
      'Hawkeye',
      'Iron Man',
      'Thanos',
      'Thor',
      'Captain America',
      'Doctor Strange',
      'Wong',
      'Scarlet Witch',
      'Vision',
      'Nebula',
      'Black Panther',
      'Okoye',
      'Shuri',
      'The Falcon',
      'The Hulk',
      'The Winter Soldier',
      'Black Widow',
      'Spider-Man',
      'Star-Lord',
      'Gamora',
      'Mantis',
      'Rocket',
      'Groot',
      'Drax',
      'War Machine',
      'Loki',
      'Valkyrie',
    ],
  },
  {
    title: 'Spider-Man: Far From Home',
    release_year: 2019,
    characters: ['Spider-Man', 'Mysterio', 'Nick Fury'],
  },
  {
    title: 'Black Widow',
    release_year: 2021,
    characters: [
      'Black Widow',
      'Yelena Belova',
      'Taskmaster',
      'General Dreykov',
    ],
  },
  {
    title: 'Shang Chi and the Legend of the Ten Rings',
    release_year: 2021,
    characters: ['Shang Chi', 'The Mandarin'],
  },
  // {
  //   title: 'Eternals',
  //   release_year: 2021,
  //   characters: [
  //     'Ajak',
  //     'Sersi',
  //     'Ikaris',
  //     'Kingo',
  //     'Sprite',
  //     'Phastos',
  //     'Makkari',
  //     'Druig',
  //     'Gilgamesh',
  //     'Thena',
  //     'Arishem',
  //     'Black Knight',
  //   ],
  // },
  {
    title: 'Spider-Man: No Way Home',
    release_year: 2021,
    characters: [
      'Spider-Man',
      'Doc Ock',
      'Green Goblin',
      'Doctor Strange',
      'Electro',
      'Sandman',
      'The Lizard',
    ],
  },
];

const charToActor: {[k: string]: string} = {};
for (const actor in characterNames) {
  charToActor[characterNames[actor]] = actor;
}

const missing = new Set<string>();
for (const m of fullMovies) {
  for (const c of m.characters) {
    if (!charToActor[c]) missing.add(c);
  }
}
console.log(JSON.stringify(Array.from(missing), null, 2));

async function run() {
  const client = edgedb.createClient();

  try {
    await e.delete(e.Movie).run(client);
    await e.delete(e.Person).run(client);

    const actors = new Set<string>();

    for (const actor in characterNames) {
      await e.insert(e.Person, {name: actor}).run(client);
    }

    for (const movie of fullMovies) {
      console.log(`creating ${movie.title}`);
      const actors = movie.characters.map((char) => ({
        actor: charToActor[char],
        char,
      }));
      const actorNames = actors.map((x) => x.actor);
      const newMovie = await e
        .insert(e.Movie, {
          title: movie.title,
          release_year: movie.release_year,
          // actors: e.insert(e.Person, {
          //   name:
          // })
          // actors: e.for() e.select(e.Person, (person) => ({
          //   filter: e.op(
          //     person.name,
          //     'in',
          //     e.set(...actors.map((x) => x.actor))
          //   ),
          // })),
        })
        .run(client);

      for (const actor of actors) {
        const query = e.update(e.Movie, (movie) => ({
          filter: e.op(movie.id, '=', e.uuid(newMovie.id)),
          set: {
            actors: {
              '+=': e.select(e.Person, (person) => ({
                '@character_name': e.str(actor.char),
                filter: e.op(person.name, '=', actor.actor),
              })),
            },
          },
        }));
        await query.run(client);
      }
    }
  } catch (err) {
    console.log(err);
  }
  client.close();
}

run();
