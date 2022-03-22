CREATE MIGRATION m14opd5lazgzcwkasb3onijubmq4jven74iorlzlrshgqnhexkxzma
    ONTO initial
{
  CREATE EXTENSION edgeql_http VERSION '1.0';
  CREATE EXTENSION graphql VERSION '1.0';
  CREATE TYPE default::Answer {
      CREATE REQUIRED PROPERTY value -> std::json;
  };
  CREATE SCALAR TYPE default::Privilege EXTENDING enum<ADMIN>;
  CREATE TYPE default::User {
      CREATE PROPERTY otpSecret -> std::str;
      CREATE REQUIRED PROPERTY password -> std::str;
      CREATE MULTI PROPERTY privileges -> default::Privilege;
      CREATE REQUIRED PROPERTY username -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::Form {
      CREATE REQUIRED LINK owner -> default::User;
      CREATE REQUIRED PROPERTY dateCreated -> std::datetime {
          SET default := (std::datetime_current());
          SET readonly := true;
      };
      CREATE PROPERTY dateLastModified -> std::datetime;
      CREATE PROPERTY dateSubmitted -> std::datetime;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY submitted -> std::bool {
          SET default := false;
      };
  };
  ALTER TYPE default::Answer {
      CREATE REQUIRED LINK form -> default::Form;
  };
  CREATE SCALAR TYPE default::AnswerType EXTENDING enum<ShortAnswer, LongAnswer, Checkboxes, RadioButton, DropDown>;
  CREATE TYPE default::Question {
      CREATE REQUIRED PROPERTY answerRequired -> std::bool;
      CREATE REQUIRED PROPERTY answerType -> default::AnswerType;
      CREATE PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY question -> std::str;
  };
  ALTER TYPE default::Answer {
      CREATE REQUIRED LINK question -> default::Question;
      CREATE CONSTRAINT std::exclusive ON ((.question, .form));
  };
  ALTER TYPE default::Form {
      CREATE MULTI LINK answers := (.<form[IS default::Answer]);
  };
  CREATE TYPE default::Category {
      CREATE REQUIRED PROPERTY name -> std::str;
  };
  ALTER TYPE default::Question {
      CREATE REQUIRED LINK category -> default::Category;
  };
  ALTER TYPE default::Category {
      CREATE MULTI LINK questions := (.<category[IS default::Question]);
  };
  CREATE TYPE default::PredefinedAnswer {
      CREATE REQUIRED LINK question -> default::Question;
      CREATE REQUIRED PROPERTY label -> std::str;
      CREATE PROPERTY score -> std::int32;
  };
  ALTER TYPE default::Question {
      CREATE MULTI LINK possibleAnswers := (.<question[IS default::PredefinedAnswer]);
  };
};
