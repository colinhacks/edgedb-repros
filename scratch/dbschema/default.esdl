using extension graphql;

module default {

  type BlogPost {
    required property title -> str;
    required property upvotes -> int64 {
      constraint min_value(0);
    }
    property slug := re_replace(
      r'[^a-z]+',
      '_',
      str_lower(.title),
      flags := 'g');
    index on (.slug);
  }

  type File {
    property name -> str;
  }

  type BlogPost {
    required property title -> str;
    required property published -> bool;
    required link author -> User;

    property content -> str;
    multi property also_by_this_author := .author.blog_posts.title;
    
    constraint expression on (exists .content or not .published)
  }

  type Tag {
    required property name -> str {
      constraint exclusive;
    }
  }

  type User {
    required property username -> str;
    link blog_posts := .<author[is BlogPost];
  }

  type Crab {
    required property name -> str;
    required property identifier -> str {
      readonly := true;
    }
  }

  type Content {
    property text -> str;
    link parent -> Content;
  }

  type Movie {required property title -> str;}

  type Commentable {
    property name -> str;
    multi link comments -> Comment;
    index on(.name);
  }

  type Comment extending Commentable {
    required property text -> str;
  }

  type BlogPost2 extending Commentable {
    required property title -> str;
  }

  abstract type Named {
    required property name -> str {
      delegated constraint exclusive;
    }
  }
  type Labor_union {
    required link union_name -> Union_labor_name;
    link abbrev -> Abbreviation;
    property unit_name -> str;
    required link designation -> Designation;
    property desig_number -> int32;
  } 
  type Designation extending Named {}
  type Abbreviation extending Named {}
  type Union_labor_name extending Named {}

  abstract type AbstractUser {
    required property pg_id -> str {
      constraint exclusive;
    };
    index on (.pg_id);
  }

  type ConcreteUser extending AbstractUser {
    property name -> str;
  }

  type Defaulter {
    property optprop -> str {
      default := "def!"
    }
  }
}


module order {
  type Movie {
    required property title -> str { constraint exclusive; };
    
    property description -> str {
      # as custom constraint
      constraint expression on (len(__subject__) < 25);

      # with built-in
      constraint min_len_value(25);
    };
  
  }
}

