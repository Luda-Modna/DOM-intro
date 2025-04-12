const user = {
  firstName: "Test",
  lastName: "Testovych",
  profilePhoto:
    "https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg",
  birthday: new Date("2000-05-16"),
  nickname: "super dev",
  likesCount: 10,
};

function textAboutUserHandler() {
  document.querySelector(
    "h2"
  ).textContent = `${user.firstName} ${user.lastName}`;
  document.querySelector(
    "#nickname"
  ).textContent = `Nickname: ${user.nickname}`;
  document.querySelector(
    "#likesCount"
  ).textContent = `Likes: ${user.likesCount}`;
}

document
  .querySelector("button")
  .addEventListener("click", textAboutUserHandler);

const img = document.querySelector("img");
img.src = user.profilePhoto;

const heard = document.querySelector("span");

function heardHandler() {
  heard.style.color = "red";
}

heard.addEventListener("click", heardHandler);

const dateOfBirthday = document.querySelector("#age");
dateOfBirthday.textContent = `Birthday: ${user.birthday}`;
function ageHandler() {
  dateOfBirthday.textContent = `Age: ${
    new Date().getFullYear() - user.birthday.getFullYear()
  }`;
}

dateOfBirthday.addEventListener("mousemove", ageHandler);
