// // Solve the below problems:

// // #1) Convert the below promise into async await
// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then(console.log);

// async function someFunction(){
//   const url = await fetch("https://jsonplaceholder.typicode.com/users/")
//   const resp = await url.json();
//   resp.forEach(el => {
//     console.log(el);
//   });
// }
// someFunction()
// // #2) ADVANCED: Update the function below from the video to also have
// // async await for this line: fetch(url).then(resp => resp.json())
// // So there shouldn't be any .then() calls anymore!
// // Don't get discouraged... this is a really tough one...
// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// const getData = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map(async (url) => {
//       const fetchedUrl = await fetch(url);
//       return  fetchedUrl.json()
      
//     }),
//   );
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);
// };
// getData()

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
const getData = async () => {
  try {const [users,posts,albums] = await Promise.all(
    urls.map(async (url) => {
      const respons =await fetch(url)
      return respons.json();
    })
  )
  console.log('users', users)
  console.log('posts', posts)
  console.log('albums', albums)
  } catch(err){console.log('Ooooops')}
}
getData();