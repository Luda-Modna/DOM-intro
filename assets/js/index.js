const p1 = document.querySelector("#p1");
console.log(p1.title);
console.log(p1.id);

p1.title = "new Title";

//p1.hidden = true

p1.style.color = "red";
p1.style.backgroundColor = "black";

const p2 = document.querySelector("#p2");

p2.setAttribute("title", "Title of p2");
p2.setAttribute("style", "font-size:10px; color:yellow");

document.body.setAttribute("style", "background-color:blue");

p2.textContent= 'new'