// import { number } from "./script2.js";

let a = 4;
let b;
if (true) {
  const { number } = await import("./script2.js");
  b = number;
}

console.log(a + b);
// console.log(__dirname);
