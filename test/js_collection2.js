class people {
    constructor(firstName, lastName, YearOfBirth) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.YearOfBirth = YearOfBirth;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    };
  
    age() {
      let date = new Date();
      return date.getFullYear() - this.YearOfBirth;
    };

     
  };

  let people1 = new people("Giulia", "Ponzechi", 1998);
    console.log(people1.getFullName() + " is " + people1.age() + " years old ");