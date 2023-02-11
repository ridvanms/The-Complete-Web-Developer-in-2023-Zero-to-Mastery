async function takeAPI(url){
    const data = await fetch(url)
    const resp = await data.json();
    
    const people = resp.results
    for (const person of people) {
        console.log(person.name,person.gender)
    }
}
takeAPI('https://swapi.py4e.com/api/people')

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete',
//   params: {query: '<REQUIRED>'},
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });