CREATE MIGRATION m1elhk6ankcd32n47mtomtbx3kiiglw55q3txwgw2dmgmnxisjm2ra
    ONTO m13abl525h7rcwkbxcnnkthl7gjas2ej7k4ysyzvv4l5vuexjcxvba
{
  CREATE MODULE order IF NOT EXISTS;
  CREATE ABSTRACT TYPE default::AbstractUser {
      CREATE REQUIRED PROPERTY pg_id -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE INDEX ON (.pg_id);
  };
  CREATE TYPE default::ConcreteUser EXTENDING default::AbstractUser {
      CREATE PROPERTY name -> std::str;
  };
  CREATE TYPE order::Movie {
      CREATE REQUIRED PROPERTY title -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
