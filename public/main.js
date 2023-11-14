"use strict";

const userContainer = document.querySelector(".userControl");
const adminContainer = document.querySelector(".adminControl");

userContainer.onclick = function () {
  window.open("http://127.0.0.1:8080/map.html", "_self");
};

adminContainer.onclick = function () {
  window.open("http://127.0.0.1:8080/login.html", "_self");
};
