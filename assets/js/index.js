const btn = document.getElementById("click-btn");
console.log(btn);

const clickHandler = function (event) {
  console.log("btn was clicked");
};

btn.onclick = clickHandler;

///////////////////////////////////////////////////
const loginBtn = document.getElementById("login-btn");

function loginBtnHandler(e) {
  alert("Login in process");
}

loginBtn.addEventListener("click", loginBtnHandler);
loginBtn.removeEventListener("click", loginBtnHandler);

function loginMousemoveHandler(e) {
  alert("Click me!");
}

loginBtn.addEventListener("mousemove", loginMousemoveHandler);

///
const greetingBtn = document.getElementById("greeting-btn");

function greetingBtnHandler(e) {
  console.log("Hello world");
}

greetingBtn.addEventListener("click", greetingBtnHandler);
