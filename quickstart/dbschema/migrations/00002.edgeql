CREATE MIGRATION m1pgcksdq5fvol2dsi77iekd7mr7l3voiyhseqg3hjqxkw4rpiquba
    ONTO m1la5u4qi33nsrhorvl6u7zdiiuvrx6y647mhk3c7suj7ex5jx5ija
{
  ALTER TYPE default::Movie {
      ALTER LINK director {
          RESET OPTIONALITY;
      };
  };
};
