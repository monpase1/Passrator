"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const adress = document.getElementById("adress"),
    login = document.getElementById("login"),
    generate = document.getElementById("generate"),
    gutPass = document.getElementById("password"),
    reset = document.getElementById("reset"),
    good = document.getElementById("good");
  let counter = 0,
    password,
    user,
    usersjsonjson = localStorage.getItem("users");

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
      adress.value !== "https://" &&
      adress.value !== "" &&
      login.value !== ""
    ) {
      counter++;
      password = generatePassword();
      user = new User(counter, adress.value, login.value, password);

      console.log(user);
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
  good.addEventListener("click", () => {
    alert(`${password} успешно сгенерирован и сохранен в базе данных!`);

    location.reload();
  });
});
