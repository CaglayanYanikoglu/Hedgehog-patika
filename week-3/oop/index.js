/* class Animal {
  constructor(name) {
    // console.log('constructor hello', this)
    // console.log('constructor name', name);
    // const name = 'pamuk'
    // this.name = 'Pamuk';
    this.name = name;
    this.age = 3;
  }
  speak() {
    console.log('speak this', this);
    console.log(`Hello my name is ${this.name}`);
  }
}

const animal = new Animal('Pamuk');
animal.speak();
const animal2 = new Animal('Lokum');
animal2.speak();
// console.log(animal.name)

// Inheritance
class FlyingAnimals extends Animal {
  constructor(name, wingColor) {
    super(name);
    this.wingColor = wingColor;
  }

  fly() {
    console.log(`${this.name} is flying, it's wing color is ${this.wingColor}`);
  }
}

const bird = new FlyingAnimals('bulut', 'green');
bird.fly();
bird.speak(); */
/* 
const users = [
  'caglayan',
  'nur',
  'murat',
  'ozan',
  'emre'
];

console.log(users);

users.forEach(user => {
  console.log(user);
})

const username = 'ali';
console.log(username.length); */

// call
/* const person = {
  fullName: function() {
    console.log(this);
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
// person.fullName.call(person1);
console.log(person.fullName());
console.log(person.fullName.call(person1)) */

// apply
/* const person = {
  fullName: function() {
    console.log(this);
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
console.log(person.fullName.apply(person1)); */

// bind
/* const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    console.log(this);
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

// console.log(person.fullName());
let fullName = person.fullName.bind(member);
// console.log(fullName());
person.fullName();
fullName(); */


/* const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    console.log(this);
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
person.fullName();
fullName(); */

/* function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const auto = new Car('Honda', 'Accord', 1998);

console.log(auto);

const newCar = new Car('Bmw', '3-20', 2020);
console.log(newCar);
newCar.year = 2015;
console.log(newCar);
console.log(auto); */

/* const carObject = {
  make: 'bmw',
  modal: '3-20',
  year: 2015
}

const newobj = carObject;

newobj.year = 2020;
 */
