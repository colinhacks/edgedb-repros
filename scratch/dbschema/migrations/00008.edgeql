CREATE MIGRATION m1qej6zksoeq4sdguxr4t2rovj6jw26h7v7h3uq7xvdvldm5rmflhq
    ONTO m1el74eh7f6czobrharzz345xetrwzq4kifudse7ytmpankex6fhuq
{
  CREATE TYPE default::Crab {
      CREATE REQUIRED PROPERTY identifier -> std::str {
          SET readonly := true;
      };
      CREATE REQUIRED PROPERTY name -> std::str;
  };
  CREATE TYPE default::Tag {
      CREATE REQUIRED PROPERTY name -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
