let h1ByTagName = document.getElementsByTagName("h1");
// console.log(h1ByTagName);
let pByClass = document.getElementsByClassName("second");
// console.log(pByClass);
let pByID = document.getElementById("first");
pByID.textContent = "Hello";
// console.log(pByID);

let liByQuery = document.querySelector("li");
// console.log(liByQuery);
let alLiByQuery = document.querySelectorAll("li");
// console.log(alLiByQuery);

alLiByQuery[0].setAttribute("random", 100);
let getingAtribute = alLiByQuery[0].getAttribute("random");
// console.log(document);
const seconds = 1;

function changeColor() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  document.querySelectorAll("li").forEach((li) => {
    li.style.color = `rgb(${red},${green},${blue})`;
  });
}
setInterval(changeColor, seconds * 1000);

console.log(document);
