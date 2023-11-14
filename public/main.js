"use strict";

const userContainer = document.querySelector(".userControl");
const adminContainer = document.querySelector(".adminControl");

userContainer.onclick = function () {
  window.open("https://cloudprojectserver.onrender.com/map.html", "_self");
};

adminContainer.onclick = function () {
  window.open("https://cloudprojectserver.onrender.com/login.html", "_self");
};
