using extension graphql;

module default {
  
  abstract type Content {
    required property title -> str;
    index on (.title);
  }

  type Movie extending Content {
    required property release_year -> int64;
  }
}

