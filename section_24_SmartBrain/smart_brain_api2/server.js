const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "John@abv.bg",
      password: "123",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "124",
      name: "Smith",
      email: "Smith@abv.bg",
      password: "124",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "125",
      name: "Lely",
      email: "lely@abv.bg",
      password: "125",
      entries: 0,
      joined: new Date(),
    },
  ],
  login: [
    {
      id: "987",
      hash: "",
      email: "john@abv.bg",
    },
  ],
};

app.get("/", (req, res) => {
  //   res.json(database.users);
  console.log("hello");
});

//signing
app.post("/signin", (req, res) => {
  bcrypt.compare("apple", database.login.hash, function (req, res) {
    console.log("first guess", res);
  });
  bcrypt.compare("banana", database.login.hash, function (req, res) {
    console.log("second guess", res);
  });
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error logging in");
  }
});

//register
app.post("/register", (req, res) => {
  console.log(req.body);
  const { email, name, password } = req.body;
  database.users.push({
    id: Number(database.users[database.users.length - 1].id) + 1,
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const found = false;
  database.users.forEach((u) => {
    if (u.id === id) {
      found = true;
      return res.json(u);
    }
  });
  if (!found) {
    res.status(400).json("no such users");
  }
});

app.put("/image", (req, res) => {
  const { id } = req.params;
  const found = false;
  database.users.forEach((u) => {
    if (u.id === id) {
      found = true;
      users.entries++;
      return res.json(u.entries);
    }
  });
  if (!found) {
    res.status(400).json("not found");
  }
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

/*!SECTION 
$ npm install bcrypt

/*
* You can copy and run the code below to play around with bcrypt
* However this is for demonstration purposes only. Use these concepts
* to adapt to your own project needs.

 
import bcrypt from'bcrypt'
const saltRounds = 10 // increase this if you want more iterations  
const usersPassword = 'supersecretpassword'  
const randomPassword = 'fakepassword'
 
const storeusersPassword = (password, salt) =>  
  bcrypt.hash(password, salt).then(storeHashInDatabase)
 
const storeHashInDatabase = (hash) => {  
//    Store the hash in your password DB
   return hash // For now we are returning the hash for testing at the bottom
}
 
// Returns true if users password is correct, returns false otherwise
const checkusersPassword = (enteredPassword, storedPasswordHash) =>  
  bcrypt.compare(enteredPassword, storedPasswordHash)
 
 
// This is for demonstration purposes only.
storeusersPassword(usersPassword, saltRounds)  
  .then(hash =>
    // change param usersPassword to randomPassword to get false
    checkusersPassword(usersPassword, hash)
  )
  .then(console.log)
  .catch(console.error)

*/
