// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const successPromis = new Promise((resolve,reject)=> setTimeout(resolve,4000,'success')).then(value => value)

// #2) Run the above promise and make it console.log "success"

successPromis.then(value => console.log(value))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise1 = new Promise((response,reject)=>setTimeout(()=>console.log('success'),4000))

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject(('failed') ).catch(()=> console.log('Ooops something went wrong'))
// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/peopdle/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => 
  fetch(url).then((people)=> people.json())
)).then(arr=> {
  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);
  console.log(arr[3]);
}).catch((err)=>{console.log('error = ',err)})
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?