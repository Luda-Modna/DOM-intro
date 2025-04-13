// model дані + методи роботи з ними
class Counter {
  constructor(counter) {
    this.counter = counter;
  }
  inc() {
    this.counter++;
  }
  dec() {
    this.counter--;
  }
}

//viewModel

//отримуємо необхідні посилання
const [decBtn, incBtn] = document.querySelectorAll(".counterBtn");
const counterEl = document.querySelector("#counter");

//задаємо стан
const count = new Counter(0);

updateView()

//додаємо 2 обробника події на - і +
function decCount(e) {
  count.dec();
  updateView()
}

decBtn.addEventListener("click", decCount);

function incCount(e) {
  count.inc();
 updateView()
}

incBtn.addEventListener("click", incCount);

function updateView(){
   counterEl.textContent = count.counter;
}