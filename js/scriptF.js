"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const adress = document.getElementById("adress"),
    login = document.getElementById("login"),
    generate = document.getElementById("generate"),
    gutPass = document.getElementById("password"),
    reset = document.getElementById("reset"),
    good = document.getElementById("good"),
    body = document.querySelector("body");

  let counter = 0,
    password,
    user;

  class User {
    constructor(id, adress, login, password) {
      this.id = id;
      this.adress = adress;
      this.login = login;
      this.password = password;
    }
  }
  function generatePassword() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  function showOptions() {
    good.classList.toggle("show");
    reset.classList.toggle("show");
  }

  generate.addEventListener("click", () => {
    if (
      adress.value !== "" ||
      adress.value !== "https://" ||
      login.value === ""
    ) {
      password = generatePassword();
      gutPass.innerHTML = password;
      showOptions();
    }
    adress.value = "";
    login.value = "";
  });

  reset.addEventListener("click", () => {
    password = generatePassword();
    gutPass.innerHTML = password;
  });
  // body.addEventListener("keypress", (e) => {
  //   console.log(e);
  //   if (e.key === "r") {
  //     location.reload();
  //   }
  // });
  body.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === "r") {
      location.reload();
    }
  });

  good.addEventListener("click", () => {
    counter++;
    user = new User(counter, adress.value, login.value, password);
    adress.value = "https://";
    login.value = "monpase1";
    showOptions();
  });
});
