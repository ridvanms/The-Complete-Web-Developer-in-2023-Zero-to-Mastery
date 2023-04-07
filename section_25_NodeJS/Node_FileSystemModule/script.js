import { readFile, readFileSync, writeFile, unlink } from "fs";
//Async execution
readFile("./text.txt", (err, data) => {
  if (err) {
    console.log("errrrrrrrrrrrrrrr");
  }
  console.log(`1 ${data.toString("utf8")}`);
});

////////////////!SECTION
//Sync execution
const file = readFileSync("./text.txt");
console.log(`2 ${file.toString("utf-8")}`);

//NOTE adding text
// fs.appendFile("./text.txt", " This is so cool! ", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//NOTE - write
writeFile("bye.txt", "Sad to see you go", (err) => {
  if (err) console.log(err);
});

//NOTE delete
unlink("./bye.txt", (err) => {
  if (err) console.log(err);
  else console.log("Inception");
});
