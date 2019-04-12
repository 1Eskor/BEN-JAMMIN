//import express from "express";
let sqlite = require("sqlite");

//const app = express();
const port = process.env.PORT || 3000;

// sqlite
//   .open("./database.sqlite")
//   .then(function(db) {
//     return db.run("INSERT INTO Classes (Name) Values ('foo bar')");
//   })
//   .then(function(res) {
//     console.log(res);
//   });



sqlite
  .open("./database.sqlite")
  .then(function(db) {
    return db.all("SELECT * FROM Classes");
  })
  .then(function(res) {
    console.log(res);
  });

