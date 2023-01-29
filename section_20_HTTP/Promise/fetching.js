let obj = fetch('https://jsonplaceholder.cypress.io/todos/1').then(response=> response.json()).then(data => console.log(data))
console.log('------')
console.log(obj);
console.log('somthing')