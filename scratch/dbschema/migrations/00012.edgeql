CREATE MIGRATION m13abl525h7rcwkbxcnnkthl7gjas2ej7k4ysyzvv4l5vuexjcxvba
    ONTO m1hjj6c7b3tzivkyqdvwmwl3bipw2k4ci3vf5tpvrc5bmyuo4mohmq
{
  ALTER TYPE default::Commentable {
      CREATE PROPERTY name -> std::str;
      CREATE INDEX ON (.name);
  };
};
