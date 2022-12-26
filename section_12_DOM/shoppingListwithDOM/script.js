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

let button = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

button.addEventListener("click", () => {
  if (inputLength() > 0) {
    createListElement();
  }
});
input.addEventListener("keypress", (e) => {
  console.log(e);
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
  }
});
let lists = document.querySelectorAll("li");

lists.forEach((li) =>
  li.addEventListener("click", function () {
    li.classList.toggle("done");
    console.log(li);
  })
);
lists.forEach((li) => {
  li.addEventListener("click", () => {
    if (!li.children[0]) {
      li.appendChild(document.createElement("button"));

      let listButton = li.children[0];
      listButton.classList.toggle("listButton");
      listButton.appendChild(document.createTextNode("❌"));

      listButton.addEventListener("click", function () {
        ul.removeChild(li);
      });
    } else li.removeChild(li.children[0]);
  });
});
