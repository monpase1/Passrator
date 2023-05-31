"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const adress = document.getElementById("adress"),
    login = document.getElementById("login"),
    generate = document.getElementById("generate"),
    yes = document.getElementById("yes"),
    no = document.getElementById("no"),
    pass = document.getElementById("pass"),
    form = document.querySelector(".post");

  let password;

  const generatePassword = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  function showOptions() {
    no.classList.add("show");
    no.classList.remove("hide");
    yes.classList.add("show");
    yes.classList.remove("hide");
  }
  function hideOptions() {
    no.classList.remove("show");
    no.classList.add("hide");
    yes.classList.remove("show");
    yes.classList.add("hide");
  }

  function bindPostData(form) {
    yes.addEventListener("click", (e) => {
      e.preventDefault();
      hideOptions();
      const formData = new FormData(form);
      const obj = {};
      formData.forEach((v, k) => (obj[k] = v));

      postData("http://localhost:3000/requests", JSON.stringify(obj)).then(
        (data) => {
          console.log(data);
        }
      );
    });
  }

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    return await res.json();
  };

  generate.addEventListener("click", (e) => {
    e.preventDefault();
    if (adress.value != "" && adress.value != "https://" && login.value != "") {
      password = generatePassword();
      pass.value = password;
      showOptions();
    }
    adress.disable = true;
    login.disable = true;
  });
  // yes.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   hideOptions();
  //   bindPostData(form);
  // });

  no.addEventListener("click", (e) => {
    e.preventDefault();
    console.dir(form);
  });
  bindPostData(form);
});
