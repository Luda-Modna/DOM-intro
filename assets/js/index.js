const body = document.body;
const section = document.querySelector("section");
const button = document.querySelector("button");

function btnClickHandler(e) {
  console.log(this);
  console.log("---------------");
}

//capturing
body.addEventListener("click", btnClickHandler, { capture: true });
section.addEventListener("click", btnClickHandler, { capture: true });
button.addEventListener("click", btnClickHandler, { capture: true });

//bubbling
button.addEventListener("click", btnClickHandler);
section.addEventListener("click", btnClickHandler);
body.addEventListener("click", btnClickHandler);
