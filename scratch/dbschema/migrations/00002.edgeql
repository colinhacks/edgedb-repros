CREATE MIGRATION m1ksgk7jqjnhmqwa2swqpq6ngfwkfbqk336j64em7occpymzvy62ea
    ONTO m13vxxdwky456dn6pu4ze2jxsirnwmizu5l2h72p4pfzztasljg5hq
{
  ALTER TYPE default::BlogPost {
      ALTER PROPERTY upvotes {
          DROP CONSTRAINT std::min_value(0);
      };
  };
  CREATE SCALAR TYPE default::non_negative_integer EXTENDING std::int64 {
      CREATE CONSTRAINT std::min_value(0);
  };
  ALTER TYPE default::BlogPost {
      ALTER PROPERTY upvotes {
          SET TYPE default::non_negative_integer;
      };
  };
};
