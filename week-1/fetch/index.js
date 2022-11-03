/* var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log('request is successfull');
       // Typical action to be performed when the document is ready:
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send(); */

const url = "https://jsonplaceholder.typicode.com/todos";

const container = document.querySelector('.todos');

let containerContent = '';

fetch(url)
  .then((response) => response.json()) // Then = promise
  .then((data) => {
    console.log(data[0]);
    data.forEach(item => {
      containerContent += `<p>${item.title}</p>`
    })
    container.innerHTML = containerContent;
  });

/* let name = 'caglayan';

setTimeout(() => {
  name = 'murat';
  console.log(name);
}, 3000);


console.log(name); */