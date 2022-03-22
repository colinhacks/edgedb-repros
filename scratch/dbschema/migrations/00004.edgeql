CREATE MIGRATION m1fmdoarn7ka2n24lctzyq6et4bmkl47d7ul6wxlkp63tcjadd3u2a
    ONTO m153qifn2unx5adrauzym2cs4yor5fw44uspb2psmro5p5xsn5frmq
{
  ALTER TYPE default::BlogPost {
      ALTER PROPERTY title {
          CREATE CONSTRAINT std::min_len_value(6);
      };
  };
  CREATE TYPE default::Movie {
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
