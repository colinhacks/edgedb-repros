module default {
  type Person {
    required property first_name -> str;
    property last_name -> str;

    property full_name :=
      .first_name ++ ' ' ++ .last_name
      IF EXISTS .last_name
      ELSE .first_name;

  }

  type Movie {
    required property title -> str;
    property year -> int64;
    link director -> Person;
    multi link actors -> Person;
  }
};
