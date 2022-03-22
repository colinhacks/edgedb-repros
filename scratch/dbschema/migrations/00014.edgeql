CREATE MIGRATION m1slh2kae62pgmtdxn44kuu6z6qo4adcswpoollzlobvh7ywt4dxxq
    ONTO m1elhk6ankcd32n47mtomtbx3kiiglw55q3txwgw2dmgmnxisjm2ra
{
  CREATE TYPE default::Defaulter {
      CREATE PROPERTY optprop -> std::str {
          SET default := 'def!';
      };
  };
  ALTER TYPE order::Movie {
      CREATE PROPERTY description -> std::str {
          CREATE CONSTRAINT std::expression ON ((std::len(__subject__) < 25));
          CREATE CONSTRAINT std::min_len_value(25);
      };
  };
};
