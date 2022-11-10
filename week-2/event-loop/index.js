

/* console.log('1');

setTimeout(() => {
  // console.log('2');
  console.log('1 second settimeout')
// }, 3000);
}, 1000);

setTimeout(() => {
  console.log('0 second settimeout')
}, 0);

console.log('3');

console.log('helllo');

const printUsers = () => {
  const users = [];
  console.log(users);
}

printUsers();

let sum = 0;
for(let i = 0; i < 10000000; i++) {
  sum += i;
}

console.log('total', sum);
 */
// STACK:


/* const functionC = () => {
  console.log('function C is called');
  console.log('function C is ended');
}

const functionB = () => {
  console.log('function B is called');
  functionC();
  console.log('function B is ended');
};


const functionA = () => {
  console.log('function A is called');
  functionB();
  console.log('function A is ended');
};

functionA(); */


// STACK:

// 1.adim
// -- functionA

// 2.adim
// -- functionB
// -- functionA

// 3.adim
// -- functionC
// -- functionB
// -- functionA

// c function is finish it's job

// 4.adim
// -- functionB
// -- functionA

// b function is finish it'S job

// 4.adim
// -- functionA

// a function is finish it'S job

// 5.adim
// EMPTY

// THIS IS A ENDLESS LOOP // MAXIMUM CALL STACK SIZE exceeded
/* const functionA = () => {
  functionB();
};

const functionB = () => {
  functionA()
};

functionA();

 */

