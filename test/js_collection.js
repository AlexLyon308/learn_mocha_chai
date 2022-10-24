const person = {
   firstName : "Avita",
   lastName : "Lisbaron",
   age : 24,
   fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  };
  

  export default person;

  console.log(person.fullName());