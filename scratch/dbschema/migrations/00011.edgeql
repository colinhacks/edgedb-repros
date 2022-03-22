CREATE MIGRATION m1hjj6c7b3tzivkyqdvwmwl3bipw2k4ci3vf5tpvrc5bmyuo4mohmq
    ONTO m1nkp7h4xtsygh7jobvkikfrgy6sjh6apunruwvtap4lyftukpyy7q
{
  CREATE ABSTRACT TYPE default::Named {
      CREATE REQUIRED PROPERTY name -> std::str {
          CREATE DELEGATED CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::Abbreviation EXTENDING default::Named;
  CREATE TYPE default::Designation EXTENDING default::Named;
  CREATE TYPE default::Union_labor_name EXTENDING default::Named;
  CREATE TYPE default::Labor_union {
      CREATE LINK abbrev -> default::Abbreviation;
      CREATE REQUIRED LINK designation -> default::Designation;
      CREATE REQUIRED LINK union_name -> default::Union_labor_name;
      CREATE PROPERTY desig_number -> std::int32;
      CREATE PROPERTY unit_name -> std::str;
  };
};
