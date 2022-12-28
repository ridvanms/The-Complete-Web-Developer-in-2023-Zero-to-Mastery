// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// let newArr = [];
// array.forEach((obj) => {
//   newArr.push(obj.username);
// });
// // console.log("forEach: ",newArr);

//Create an array using map that has all the usernames with a "? to each of the usernames
// let mapArr = array.map((obj) => obj.username);
// console.log("map: ", mapArr);

//Filter the array to only include users who are on team: red
// let filterArray = array.filter((user) => {
//   return user.team === "red";
// });
// console.log("filter: ", filterArray);

//Find out the total score of all users using reduce

const totalScore = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log("reduce: ", totalScore);

// (1), what is the value of i? // index of ther array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let newArr = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(newArr[0].items);
