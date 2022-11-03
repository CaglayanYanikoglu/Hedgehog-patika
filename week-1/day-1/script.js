/* window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  console.log('After dom content loaded Element: ', document.querySelector('.text'));
}); */

/* console.log('script is loaded');
console.log('Element: ', document.querySelector('.text')); */

/* var name = 'caglayan';

// ECMASCRIPT 6 (const and let)
const surname = 'yanikoglu';

let age = 27;

age = 100;

console.log('name ', name);
console.log('surname ', surname);
console.log('age ', age); */

/* for(var i = 0; i < 10; i++) {
  console.log('it is a loop');
}

console.log('i:', i);
 */

// primitive types
/* const name = 'caglayan'; // String
const age = 27;
const isSmoking = false;

// reference types
const users = [
  'caglayan',
  'ali',
  'nur'
];
const objectOfMurat = {
  name: 'murat',
  age: 27,
  isSmoking: false
};


console.log(typeof name);
console.log(typeof age);
console.log(typeof isSmoking);
console.log(typeof users);
console.log(typeof objectOfMurat);
 */

/* const name = 'caglayan';

let copyName = name;

console.log(copyName);

copyName = 'murat';

console.log(copyName);
console.log('original name', name); */

console.log('-------------');

/* const users = [
  'caglayan',
  'murat',
  'ali'
];

console.log(users);

const copyUsers = users;

console.log(copyUsers);

copyUsers.push('nur');
console.log('####### after push #####');
console.log(copyUsers);
console.log('original user', users); */


/* console.log(false === false);
console.log('caglayan' === 'caglayan');
console.log(5 === 5);

console.log({} === {});
 */


/* const printName = (users) => {
  // SideEffect
  users.push('veli');

  console.log(users);
};

const users = [
  'caglayan',
  'murat',
  'ali'
];

printName(users);
console.log('outside userws', users); */

/* const obj = {
  name: 'murat',
  age: 27,
  isSmoking: false,
  'is-working': false,
  caglayan: {
    age: 27
  },
  sumNumbers: (x, y) => {
    return x + y;
  }
};

const name = 'caglayan';

console.log(obj);
console.log(obj.name);
console.log(obj['name']);
console.log(obj['is-working']);

console.log(obj[name]);

console.log(obj.sumNumbers(5, 6))
 */

/* const users = [
  'caglayan',
  'murat',
  'ali'
];

console.log(users);

const copyUsers = [...users]; // array destructing 


console.log(copyUsers);

copyUsers.push('nur');
console.log('####### after push #####');
console.log(copyUsers);
console.log('original user', users); */

/* const username = 'caglayan';
const surname = "yanikoglu";

// console.log('hello my name is ', username);

// Template Literals, backtick

console.log(`hello my name is ${username}, my surname is ${surname}`); */


// DOM:


/* window.addEventListener('DOMContentLoaded', (event) => {
  const firstElement = document.querySelector('.text');
  
  console.log(firstElement);
}); */

/* const firstElement = document.querySelector('.text');

console.log(firstElement); */


/* function changeHeaderName(color) {
  const header = document.querySelector('.header');
  console.log(header);
  header.style.color = color;
  header.innerHTML = 'Patika Training <i>innerhtml</i>';
  // header.innerText = 'Patika Training <b>innertext</b>';
  header.classList.add('new-header');
  header.classList.remove('header');
}

// changeHeaderName('red');

const changeBtn = document.querySelector('#change-button');
console.log(changeBtn);

changeBtn.addEventListener('click', () => {
  changeHeaderName('green');
})
 */

/* const obj = {
  name: 'ozan',
  age: 15
};

console.log(obj);

console.log(obj.age >= 25)
console.log(obj.age > 18)

if (obj.age > 18 || obj.name === 'ozan') {
  console.log('he can smoke');
} else {
  console.log('he can not smoke');
} */

const age = 15;

/* let isSmoking

if (age > 18) {
  isSmoking = 'yes'
} else {
  isSmoking  = 'no'
} */

// const isSmoking = age > 18 && 'yes'
// const isSmoking = age > 18 || 'no'
// const isSmoking = age > 18 ? 'yes' : 'no'

// console.log(isSmoking);
// console.log(typeof isSmoking);