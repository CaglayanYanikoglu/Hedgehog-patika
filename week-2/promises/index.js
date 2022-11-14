/* const getUsers = async () => {
  console.log('get users called');
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log('response: ', res);
};

const printUsers = () => {
  console.log('print users');
}


const init = async () => {
  await getUsers();
  printUsers();
};

init();  */

// api call
/* const canSmoke = new Promise(function (resolve, reject) {
  // "Producing Code" (May take some time)

  const age = 14;
  if (age > 18) {
    resolve(); // when successful
  } else {
    reject('Hello');  // when error
  }

});

// console.log(canSmoke);

// "Consuming Code" (Must wait for a fulfilled Promise).
canSmoke.then(
  function (value) { console.log('succesfull', value); },
  function (error) { console.log('Error:', error) }
); */

/* 
const divideNumbers = new Promise(function (resolve, reject) {
  // "Producing Code" (May take some time)

  const number1 = 18;
  const number2 = 2;
  try {
    const result = number1 / number2;
    // const result = number3 / number2;
    resolve(result);
  } catch (error) {
    reject(error);    
  }

}); */

/* divideNumbers.then(
  function (value) { console.log('succesfull', value); },
  function (error) { console.log('Error:', error) }
); */


const init = async() => {
  // PROMISE WAY 1:
  /* divideNumbers.then(res => {
    console.log(res);
  }).catch(err => {
    console.log('Hello this is a error', err);
  }) */


  // PROMISE WAY 2:
  // async await 
  try {
    const res = await divideNumbers;
    console.log(res);
  } catch (error) {
    console.log(error);
  }

}

init();