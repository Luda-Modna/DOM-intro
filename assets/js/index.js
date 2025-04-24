const burgerBtn = document.querySelector(".burgerMenuBtn");
const burgerContainer = document.querySelector(".burgerMenuContainer");

function burgerClickHandler(e) {
  burgerContainer.classList.toggle("burgerMenuContainerHide");
  burgerContainer.classList.toggle("burgerMenuContainerActive");
  e.stopPropagation()
}

burgerBtn.addEventListener("click", burgerClickHandler);

function bodyClickHandler() {
  burgerContainer.classList.add("burgerMenuContainerHide");
  burgerContainer.classList.remove("burgerMenuContainerActive");
}

document.body.addEventListener("click", bodyClickHandler, /*{ capture: true }*/);
