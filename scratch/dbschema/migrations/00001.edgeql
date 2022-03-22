CREATE MIGRATION m13vxxdwky456dn6pu4ze2jxsirnwmizu5l2h72p4pfzztasljg5hq
    ONTO initial
{
  CREATE TYPE default::BlogPost {
      CREATE REQUIRED PROPERTY title -> std::str;
      CREATE PROPERTY slug := (std::re_replace('[^a-z]+', '_', std::str_lower(.title), flags := 'g'));
      CREATE INDEX ON (.slug);
      CREATE REQUIRED PROPERTY upvotes -> std::int64 {
          CREATE CONSTRAINT std::min_value(0);
      };
  };
};
