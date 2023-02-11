async function takeAPI(url){
    const data = await fetch(url)
    const resp = await data.json();
    
    const people = resp.results
    for (const person of people) {
        console.log(person.name,person.gender)
    }
}
takeAPI('https://swapi.py4e.com/api/people')
