const div = document.querySelector(".div");

div.addEventListener("click", function () {
  this.classList.add("div2");
});

const h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  this.classList.toggle("toggleHeader");
});
