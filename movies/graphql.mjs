import Axios from 'axios';

await Axios.post('https://localhost:10785/db/edgedb/graphql', {
  query: `select 2 + 2`,
});
