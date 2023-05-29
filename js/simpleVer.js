"use strict";

const fs = require("fs");

function passGen() {
  return (
    Math.random().toString(36).substring(2, 15) +
    "." +
    Math.random().toString(36).substring(2, 15)
  );
}

const pass = passGen();
const website = 0;
fs.watchFile("text.txt", passGen(), (err) => {
  if (err) throw err;
  console.log("The file was changed!");
});

fs.appendFile("passwords/passwords.txt", pass, (err) => {
  if (err) throw err;
  console.log("The file was saved!");
});
