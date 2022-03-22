CREATE MIGRATION m1el74eh7f6czobrharzz345xetrwzq4kifudse7ytmpankex6fhuq
    ONTO m1ymxkknv374r3ulhjogcbh5hx4ku6q25rxleui5vek2u6liqvawia
{
  ALTER TYPE default::BlogPost {
      CREATE PROPERTY content -> std::str;
      CREATE REQUIRED PROPERTY published -> std::bool {
          SET REQUIRED USING (false);
      };
      CREATE CONSTRAINT std::expression ON ((EXISTS (.content) OR NOT (.published)));
  };
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY username -> std::str;
  };
  ALTER TYPE default::BlogPost {
      CREATE REQUIRED LINK author -> default::User {
          SET REQUIRED USING (SELECT
              default::User 
          LIMIT
              1
          );
      };
  };
  ALTER TYPE default::User {
      CREATE LINK blog_posts := (.<author[IS default::BlogPost]);
  };
  ALTER TYPE default::BlogPost {
      CREATE MULTI PROPERTY also_by_this_author := (.author.blog_posts.title);
  };
  DROP TYPE default::Post;
};
