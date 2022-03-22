using extension graphql;
using extension edgeql_http;

module default {
  scalar type Privilege extending enum<ADMIN>;


  type User {
    required property username -> str {
      constraint exclusive;
    }
    required property password -> str;
    property otpSecret -> str;
    multi property privileges -> Privilege;
  }

  type Form {
    required property name -> str;
    required property submitted -> bool {
      default := false;
    }
    required property dateCreated -> datetime {
      readonly := true;
      default := datetime_current();
    };
    property dateSubmitted -> datetime;
    property dateLastModified -> datetime;
    required link owner -> User;
    multi link answers := .<form[is Answer];
  }

  scalar type AnswerType extending enum<ShortAnswer, LongAnswer, Checkboxes, RadioButton, DropDown>;

  type Question { 
    required property question -> str;
    required property answerType -> AnswerType;
    required property answerRequired -> bool;
    property description -> str;

    multi link possibleAnswers := .<question[is PredefinedAnswer];

    required link category -> Category;
  }

  type Category {
    required property name -> str;

    multi link questions := .<category[is Question];
  }

  type PredefinedAnswer { 
    required property label -> str;
    property score -> int32;

    required link question -> Question;
  }

  type Answer { 
    required link question -> Question;
    required link form -> Form;

    required property value -> json;

    constraint exclusive on ((.question, .form));
  }
}
