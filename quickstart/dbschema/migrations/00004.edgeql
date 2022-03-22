CREATE MIGRATION m1y7gum55xtxxad7xdcnroyomwg4zmc4vukrz4fqpqdy7eu56bfu4a
    ONTO m1nq2a67kbgcdlwyz747t5ow7vqhphondbrbthakvdezw37uhbstqa
{
  ALTER TYPE default::Person {
      CREATE PROPERTY full_name := ((((.first_name ++ ' ') ++ .last_name) IF EXISTS (.last_name) ELSE .first_name));
  };
};
