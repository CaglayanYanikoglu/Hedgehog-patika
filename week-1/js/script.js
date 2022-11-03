console.log('script is loaded');

const themeColors = {
  dark: 'black',
  light: 'white'
}

const getColor = (theme) => {
  /* if (theme === 'dark') {
    return 'black';
  } else if (theme === 'light') {

  } else {

  } */
  /* switch(theme) {
    case 'dark':
      return 'black';
    case 'light':
      return 'white';
    default:
      return 'white';
  } */
  return themeColors[theme];

};

// console.log(getColor('dark'));

/* for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
 */

/* let count = 0;

while(count < 10) {
  console.log('Count ', count);
  count += 1;
} */

// Hoisting
/* console.log(username);

var username = 'caglayan'; */


/* const sumNumbers = (x, y) => {
  return x + y;
};

console.log(sumNumbers(4, 5)); */

// hoisting
/* function sumNumbers(x, y) {
  return x + y;
} */


// usercreate
// sendemail

/* function sayMyName(name) {
  console.log(`your name is ${name}`)
  return true;
} */

/* const sayMyName = function(name) {
  console.log(`your name is ${name}`)
  return true;
} */

/* const sayMyName = () => { // Arrow function, ES6 feat
  return true;
}; */

// const sayMyName = name => name;



/* const obj = {
  example: {
    sayMyName: function() {
      console.log('this', this);
    },
    sayMyNameArrow: () => {
      console.log('this', this);
    }
  }
}

obj.example.sayMyName();
obj.example.sayMyNameArrow(); */

/* const sayMyName = function(name) {
  console.log(this);
} */

/* const sayMyName = () => {
  console.log(this);
}
 */


/* const response = sayMyName('Caglayan');
console.log(response); */


// LOCALSTORAGE:
/* const userLanguge = localStorage.getItem('language');
console.log(userLanguge);

setTimeout(() => {
  // console.log('settimeout worked');
  localStorage.setItem('name', 'caglayan');
}, 3000); // ms

const users = [
  'caglayan',
  'nur',
  'ozan',
  'emre',
  'murat'
];

console.log('users', users);

const userObj = {
  name: 'Joe',
  age: 28
}

console.log(userObj);

localStorage.setItem('users', users);
console.log(localStorage.getItem('users'));

localStorage.setItem('user', JSON.stringify(userObj));
console.log('user: ', JSON.parse(localStorage.getItem('user'))); */


// Working with Arrays
/* const users = [
  'ali',
  'veli',
  'mert',
  'efe',
  'ayse'
];

console.log(users);
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users.length);

// adding and removing items

users.push('merve'); // adding item to end of the list
users.unshift('caglayan'); // adding item to start of the list

console.log('affter adding', users);

users.pop(); // removing last item
users.shift(); // removing first item

console.log(users);

// removing spesific index item
users.splice(2, 1);

console.log(users); */

// Array methods: TODO: FIXME:

/* const users = [
  'ali',
  'veli',
  'mert',
  'efe',
  'ayse'
];

for(let i = 0; i<users.length; i++) {
  console.log(users[i]);
}

console.log('--------------');

users.forEach((item, index) => {
  console.log(item);
  console.log(index);
}) */

const numbers = [
  1, 4, 12, 16, 23
];

/* const doubledArray = [];

numbers.forEach(item => {
  doubledArray.push(item * 2);
});
 */

/* const doubledArray = numbers.map(item => {
  return item * 2;
}) */

const doubledArray = numbers.map(item => item * 2)

// console.log(doubledArray);

/* const oddNumbers = numbers.filter(item => {
  if (item % 2 === 1) {
    return true;
  }
  return false;
}) */

/* const oddNumbers = numbers.filter(item => item % 2 === 1);

console.log(numbers);
console.log(oddNumbers);

const newNumbers = [45, 123, 566];

// Array merge
// const totalArray = newNumbers.concat(numbers);

console.log('...newNumbers', ...newNumbers)

// Array merge with cool way
const totalArray = [...newNumbers, ...numbers];

console.log(totalArray); */


// includes // check if element exist in array
/* const users = [
  'ali',
  'veli'
];
 */
/* console.log(users.includes('ali')); */


// find method:
/* const users = [
  {
    name: 'caglayan',
    age: 27
  }, {
    name: 'joe',
    age: 32
  }, {
    name: 'caglayan',
    age: 13
  }
];

const user = users.find(item => item.name === 'caglayan');

// findIndex
const index = users.findIndex(item => item.age === 32);

console.log(index)

// console.log(user); */

// TRY CATCH
try {
  console.log(username);
} catch (error) {
  // console.error('Username tanimli degil');
  console.log(error);
} finally {
  console.log('finally');
}


console.log('hello world');




