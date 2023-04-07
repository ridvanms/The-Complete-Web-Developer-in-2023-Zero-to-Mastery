const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("New one");
//   next();
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   const user = {
//     name: "Sally",
//     hobby: "dancing",
//   };
//   res.send(user);
// });
///////////////////////////////////////////////////!SECTION

app.use(express.static(__dirname));

app.listen(3000);
