CREATE MIGRATION m1nkp7h4xtsygh7jobvkikfrgy6sjh6apunruwvtap4lyftukpyy7q
    ONTO m14hayqgog7tzxc4iy2l42recpn2m4zhasp5pjbur5t5p2qnvpyebq
{
  CREATE TYPE default::Content {
      CREATE LINK parent -> default::Content;
      CREATE PROPERTY text -> std::str;
  };
};
