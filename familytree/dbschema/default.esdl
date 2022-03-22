module default {
  type Person {
    required link mother -> Person;
    required link father -> Person;
    
  }
}
