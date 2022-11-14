
const authUser = (name, password) => {
  return new Promise((resolve, reject) => {
    if (name === 'admin' && password === 'admin') {
      resolve('Giriş başarılı');
    } else {
      reject('Kullanici adi veya sifreniz hatali');
    }
  });
}

const init = () => {
  console.log('init');
  // const res = await authUser('murat', 'murat123');
  // const res = await authUser('admin', 'admin');
  authUser('admin', 'admin').then(res => {
  // authUser('admin2', 'admin').then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
  // console.log(res);

}

init();

// const response = axios.get('https://jsonplaceholder.typicode.com/users');
// console.log(response);