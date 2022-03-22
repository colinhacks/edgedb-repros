CREATE MIGRATION m1ymxkknv374r3ulhjogcbh5hx4ku6q25rxleui5vek2u6liqvawia
    ONTO m1cowmr2kzksr2m5ob3qfeklrxuimwqhx2w5beicxu4v23doszcvjq
{
  CREATE TYPE default::Post {
      CREATE PROPERTY content -> std::str;
      CREATE REQUIRED PROPERTY published -> std::bool;
      CREATE CONSTRAINT std::expression ON ((EXISTS (.content) OR NOT (.published)));
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
