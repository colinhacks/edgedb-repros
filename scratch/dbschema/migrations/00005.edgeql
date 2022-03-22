CREATE MIGRATION m1cowmr2kzksr2m5ob3qfeklrxuimwqhx2w5beicxu4v23doszcvjq
    ONTO m1fmdoarn7ka2n24lctzyq6et4bmkl47d7ul6wxlkp63tcjadd3u2a
{
  ALTER TYPE default::BlogPost {
      ALTER PROPERTY title {
          DROP CONSTRAINT std::min_len_value(6);
      };
  };
  CREATE TYPE default::File {
      CREATE PROPERTY name -> std::str;
  };
};
