console.log(document);
console.log(document.head);
console.log(document.body);

const root1 = document.getElementById("root");
console.log(root1);

console.dir(root1);

const divEls = document.getElementsByTagName("div");
console.log(divEls);

const divRoot2 = divEls[0];

const divClass = document.getElementsByClassName("content");
console.log(divClass);

const root3 = document.querySelector("#root");
console.log(root3);

const divElms = document.querySelectorAll("div");
console.log(divElms);

const contentClass = document.querySelectorAll(".content");
console.log(contentClass);
