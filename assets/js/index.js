//отримуємо необхідні посилання
const [decBtn, incBtn] = document.querySelectorAll(".counterBtn");
const counterEl = document.querySelector("#counter");

//задаємо стан
let counter = 0;

//задаємо значення елемента на сторінці
counterEl.textContent = counter;

//додаємо 2 обробника події на - і +
function decCount(e) {
  counter--;
  counterEl.textContent = counter;
}

decBtn.addEventListener("click", decCount);

function incCount(e) {
  counter++;
  counterEl.textContent = counter;
}

incBtn.addEventListener("click", incCount);
