CREATE MIGRATION m1nq2a67kbgcdlwyz747t5ow7vqhphondbrbthakvdezw37uhbstqa
    ONTO m1pgcksdq5fvol2dsi77iekd7mr7l3voiyhseqg3hjqxkw4rpiquba
{
  ALTER TYPE default::Person {
      ALTER PROPERTY last_name {
          RESET OPTIONALITY;
      };
  };
};
