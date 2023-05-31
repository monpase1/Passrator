"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const adress = document.getElementById("adress"),
    login = document.getElementById("login"),
    generate = document.getElementById("generate"),
    gutPass = document.getElementById("password"),
    reset = document.getElementById("reset"),
    good = document.getElementById("good"),
    body = document.querySelector("body"),
    forms = document.querySelectorAll("form");

  let counter = 0,
    password;

  const generatePassword = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  function showOptions() {
    good.classList.toggle("show");
    reset.classList.toggle("show");
  }
  function postData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.dir(e);

      const req = new XMLHttpRequest();
      req.open("POST", "server.php", true);
      const formData = new FormData(form);
      req.send(formData);
      req.addEventListener("load", () => {
        if (req.status === 200) {
          console.log(req.response);
        }
      });
    });
  }

  forms.forEach((form) => postData(form));
  generate.addEventListener("click", () => {
    if (adress.value != "" && adress.value != "https://" && login.value != "") {
      const info = {
        adress: adress.value,
        login: login.value,
      };
      adress.classList.add("hide");
      login.classList.add("hide");
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
  body.addEventListener("keydown", (e) => {
    if (e.key === "r") {
      location.reload();
    }
  });

  good.addEventListener("click", (e) => {
    e.preventDefault();

    showOptions();
  });
});
