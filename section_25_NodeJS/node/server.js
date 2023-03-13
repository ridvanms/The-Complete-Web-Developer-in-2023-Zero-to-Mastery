const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("New onew");
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  const user = {
    name: "Sally",
    hobby: "dancing",
  };
  res.send(user);
});
app.listen(3000);
