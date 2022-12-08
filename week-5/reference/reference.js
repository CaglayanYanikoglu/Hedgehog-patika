// https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/

// Primitive types
const name = 'Caglayan';
const age = 27;
const isSmoking = false;

/* let newName = name;
console.log('Name: ', name);
console.log('newName: ', newName);

newName = 'Ali';
console.log('#####');
console.log('Name: ', name);
console.log('newName: ', newName); */


// Reference types
const hobbies = [
  'gym', 'swimming', 'chess'
];
const job = {
  name: 'Developer',
  country: 'Turkiye'
};

const getLastName = () => {
  return 'Yanikoglu';
}

const newHobbies = hobbies;
// const newHobbies = [...hobbies];
/* console.log('hobbies: ', hobbies);
console.log('newHobbies: ', newHobbies);

newHobbies.push('soccer');

console.log('######');
console.log('hobbies: ', hobbies);
console.log('newHobbies: ', newHobbies);

hobbies.push('basketball');
console.log('######');
console.log('hobbies: ', hobbies);
console.log('newHobbies: ', newHobbies);

const copyArray = [...hobbies];

console.log('copyArray', copyArray);

console.log('hobbies === newHobbies', hobbies === newHobbies);
console.log('hobbies === copyArray', hobbies === copyArray);

console.log('#####');
copyArray.push('volleyboll');
console.log('hobbies: ', hobbies);
console.log('newHobbies: ', newHobbies);
console.log('copyArray: ', copyArray); */


/* console.log(typeof name);
console.log(typeof age);
console.log(typeof isSmoking);
console.log(typeof job);
console.log(typeof getLastName); */

// Reference types
let person = {
  name: 'John',
  age: 25,
};

let member = person;

member.age = 26;
member.lastname = 'Doe';
person.isSmoking = false;

console.log(person);
console.log(member);