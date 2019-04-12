//import express from "express";
let sqlite = require("sqlite");

//const app = express();
const port = process.env.PORT || 3000;

Promise.resolve()
  .then(() => sqlite.open("./database.sqlite", { Promise }))
  .then(db => db.migrate({ force: "last" }));
