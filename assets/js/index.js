const bttnEl = document.querySelector("button");

const clickHandler = (e) => {
  document
    .querySelector("h1")
    .setAttribute("style", "background-color: purple;");

  const img = document.querySelector(".mainImg");
  img.src =
    "https://static.vecteezy.com/system/resources/thumbnails/002/098/203/small_2x/silver-tabby-cat-sitting-on-green-background-free-photo.jpg";
  img.alt = "cat";
  img.style.width = "200px";
  img.style.heigth = "200px";

  document.querySelectorAll("h2").forEach((h2) => {
    h2.style.fontSize = "20px";
    h2.style.color = "pink";
  });
};

bttnEl.addEventListener("click", clickHandler);
