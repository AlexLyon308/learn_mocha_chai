//function example
function TriangleAreaCalculate(base, height) {
    return 1 / 2 * (base * height)
  };
  console.log(TriangleAreaCalculate(3, 4));
  
  //Object example
  let catSiamese = {
    breed: "Siamese",
    countryOrigin: "Myanmar",
    furColor: "Silver",
    eyesColor: "Blue",
  };
  
  console.log("The cat " + catSiamese.breed +
    " is from " + catSiamese.countryOrigin +
    " , it has " + catSiamese.furColor +
    " fur color and " + catSiamese.eyesColor +
    " eye color");
  
  //If example
  const currentTime = new Date().getHours();
  let greeting;
  if (currentTime < 10) {
    greeting = "Good morning";
  } else if (currentTime < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting + ", The current time is " + currentTime);
  
  
  
  //Switch example
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      task = "visit park";
      break;
    case 1:
      day = "Monday";
      task = "go shopping";
      break;
    case 2:
      day = "Tuesday";
      task = "drink medicine";
      break;
    case 3:
      day = "Wednesday";
      task = "clean house";
      break;
    case 4:
      day = "Thursday";
      task = "take doggo to walk";
      break;
    case 5:
      day = "Friday";
      task = "dine out";
      break;
    case 6:
      day = "Saturday";
      task = "take out trash";
  }
  console.log("Today is " + day + " , It is the time to " + task);
  
  //for loop with array example
  const doggo = ["Akita", "Golden Retriever", "Pomeranian", "Chihuahua"];
  let i, text1 = " ";
  for (i = 0, text1 = " ", i < doggo.length; i++;) {
    text1 += doggo[i] + " , ";
  };
  console.log(text1);
  
  //For In with Object example
  
  let text2 = " ";
  for (let x in catSiamese) {
    text2 += catSiamese[x] + " , ";
  }
  
  console.log(text2);
  //For In with Array example
  
  const Doraemon = ["Nobita", "Doraemon", "Shizuka", "Suneo"];
  
  let text3 = " ";
  for (let x in Doraemon) {
    text3 += Doraemon[x] + " , ";
  }
  console.log(text3);
  
  
  //ForEach() function with array example 
  
  const StrawHatPirates = ["Luffy", "Zoro", "Nami", "Sanji"];
  
  let text4 = "";
  function introduceArray(value) {
    text4 += value + " , ";
  };
  StrawHatPirates.forEach(introduceArray);
  
  console.log(text4);
  
  
  //For Of with String example 
  
  let word = "IKIGAI";
  
  let text5 = "";
  for (let x of word) {
    text5 += x + " ";
  }
  console.log(text5);
  
  //While Loop example 
  
  let text6 = "";
  let x = 0;
  while (x < StrawHatPirates.length) {
    text6 += StrawHatPirates[x] + " , ";
    x++;
  }
  console.log(text6);
  
  //Do While Loop  example
  
  let text7 = "";
  let u = 0;
  
  do {
    text7 += Doraemon[u] + " , ";
    u++;
  }
  while (u < Doraemon.length);
  
  console.log(text7);
  
  //Loop with Break statement example 
  
  let text8 = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text8 += "The number is " + i + '\n';
  }
  console.log(text8);
  //Loop with Continue statement example 
  const number = [1, 2, 3, 4];
  
  let text9 = "";
  for (let x in number) {
  
    text9 += number[x] + ",";
    if (number[x] === 1) { continue; }
  }
  console.log(text9);
  
  //Labels example 
  const avenger = ["Ironman", "Hawkeye", "Thor", "Black Widow", "Hulk"];
  let text10 = "";
  
  list: {
    text10 += avenger[0] + '\n';
    text10 += avenger[1] + '\n';
    text10 += avenger[2] + '\n';
    text10 += avenger[3] + '\n';
    break list;
    text10 += avenger[4] + '\n';
  }
  console.log(text10);
  
  //Empty objects 
  const person1 = {};
  person1.firstName = "Cristina";
  person1.lastName = "Escusa";
  person1.age = 26;
  person1.eyeColor = "brown";
  person1.nationality;
  
  console.log(person1.firstName + " is " + person1.age + " years old. " + person1.firstName + " has " + person1.eyeColor + " eyecolor ");
  
  //Objects properties change
  const person2 = person1;
  
  person2.firstName = "Giulia";
  person2.lastName = "Ponzechi";
  person2.age = 24;
  person2.eyeColor = "blue";
  
  person2.nationality = "Italia";
  
  console.log(person2.firstName + " is " + person2.age + " years old and from " + person2.nationality + " . " + person2.firstName + " has " + person2.eyeColor + " eyecolor ");
  
  //Loop through objects 
  
  let text11 = "";
  for (let x in person1) {
    text11 += person1[x] + " ";
  }
  console.log(text11);
  
  //function inside objects 
  
  const person3 = {
    firstName: "Avita",
    lastName: "Lisbaron",
    fullname: function () {
      return this.firstName + " " + this.lastName;
    },
    language: "",
  
    set lang(value) {
      this.language = value;
    },
  
    nationality: "Israel",
  
    get nation() {
      return this.nationality.toUpperCase();
    }
  };
  
  person3.fullnameinCapital = function () {
    return person3.fullname().toUpperCase();
  }
  
  console.log("She is " + person3.fullname() + " , " + "She is " + person3.fullnameinCapital());
  
  //Getter and Setter with objects 
  
  person3.lang = "Hebrew and English";
  
  console.log(person3.fullname() + " speaks " + person3.language + " and She is from " + person3.nation);
  
  
  // Prototype
  
  function person4(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  
  }
  person4.prototype.language = "";
  
  const myFriend = new person4("Viktor", "Hernandez", "39", "brown");
  
  myFriend.nationality = "Brazil";
  
  myFriend.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
  
  console.log(" His name is " + myFriend.fullName() + " . He is from " + myFriend.nationality)
  
  //Map 
  
  const catPrice = new Map([
    ["Siamese", 400],
    ["Maine Coon", 1000]
  ]);
  
  catPrice.set("Persian", 400);
  console.log(catPrice.get("Persian"))
  
  //Try and Catch 
  
  let z = 2;
  let c = 2;
  try {
    if ((z + c) == "") throw "is empty";
    if (isNaN(z + c)) throw "is not a number";
    z = Number(z);
    if ((z + c) > 10) throw "is too high";
    if ((z + c) < 5) throw "is too low";
  }
  catch (err) {
    console.log("Error: " + err + ".");
  }
  finally {
    console.log(" ");
  }
  
  
  //Arrow function 
  
  
  function testFunction1(a, b) {
    return a + b;
  };
  
  testFunction2 = (a, b) => a * b;
  
  testFunction3 = function (a, b) {
    return a - b;
  }
  
  testFunction4 = (a, b) => a / b;
  
  console.log(testFunction1(1, 2));
  console.log(testFunction2(2, 3));
  console.log(testFunction3(6, 2));
  console.log(testFunction4(6, 2));
  
  // Class and constructor 
  
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
  
  let date = new Date();
  console.log(date.getFullYear());
  
  
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  console.log("My car is " + myCar.age() + " years old.");
  
  //Json 
  
  let text = '{"person5":[' +
    '{"firstName":"Cristina","lastName":"Escusa","language":"Spanish"}]}';
  
  const obj = JSON.parse(text);
  
  console.log(obj.person5[0].firstName + " " + obj.person5[0].lastName + " speaks " + obj.person5[0].language);
  
  
  // 
  
  class Hero {
    constructor(name) {
      this.HeroName = name;
    }
    present() {
      return 'I pick hero ' + this.HeroName;
    }
  }

  // Change a property
const person5 = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Change a property
Object.defineProperty(person5, "language", {value : "NO"});

class DotaHero extends Hero {
  constructor(name, HeroClass) {
    super(name);
    this.HeroClass = HeroClass;
  }
  show() {
    return this.present() + " with role is " + this.HeroClass;
  }
}

let myHero = new DotaHero("Sven", "Tank");
console.log(myHero.show());

export { myHero };