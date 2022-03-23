CREATE MIGRATION m1jhkq5xvxvwp33iw2n4hqqjcyvpnp4ojyekf25u6i2ibl63lvpcza
    ONTO m15exc5llhse3n3usjyap2nkuv7xn2vrnlxuzinebjxetay3wdkbha
{
  ALTER TYPE default::Content SET ABSTRACT;
  ALTER TYPE default::Movie {
      CREATE PROPERTY title -> std::str {
          SET REQUIRED USING ('');
      };
      EXTENDING default::Content LAST;
  };
  ALTER TYPE default::Movie {
      ALTER PROPERTY title {
          RESET OPTIONALITY;
          DROP OWNED;
          RESET TYPE;
      };
  };
};
