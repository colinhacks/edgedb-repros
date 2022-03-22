CREATE MIGRATION m153qifn2unx5adrauzym2cs4yor5fw44uspb2psmro5p5xsn5frmq
    ONTO m1ksgk7jqjnhmqwa2swqpq6ngfwkfbqk336j64em7occpymzvy62ea
{
  ALTER TYPE default::BlogPost {
      ALTER PROPERTY upvotes {
          CREATE CONSTRAINT std::min_value(0);
      };
      ALTER PROPERTY upvotes {
          SET TYPE std::int64 USING (<std::int64>.upvotes);
      };
  };
  CREATE TYPE default::Commentable;
  CREATE TYPE default::BlogPost2 EXTENDING default::Commentable {
      CREATE REQUIRED PROPERTY title -> std::str;
  };
  CREATE TYPE default::Comment EXTENDING default::Commentable {
      CREATE REQUIRED PROPERTY text -> std::str;
  };
  ALTER TYPE default::Commentable {
      CREATE MULTI LINK comments -> default::Comment;
  };
  DROP SCALAR TYPE default::non_negative_integer;
};
