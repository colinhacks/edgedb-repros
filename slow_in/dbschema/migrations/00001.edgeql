CREATE MIGRATION m15exc5llhse3n3usjyap2nkuv7xn2vrnlxuzinebjxetay3wdkbha
    ONTO initial
{
  CREATE EXTENSION graphql VERSION '1.0';
  CREATE TYPE default::Content {
      CREATE REQUIRED PROPERTY title -> std::str;
      CREATE INDEX ON (.title);
  };
  CREATE TYPE default::Movie {
      CREATE REQUIRED PROPERTY release_year -> std::int64;
  };
};
