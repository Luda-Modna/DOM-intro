"use strict";

const user = {
  firstName: "Test1",
  lastName: "Testovich1",
  age: 28,
  photoSrc: "https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg",
};

const userCardEl = document.createElement("article");
userCardEl.classList.add("userCard");
document.body.append(userCardEl);

userCardEl.append(createUserImg(user), createUserInfo(user), createTrashIcon());

function createUserImg({ photoSrc, firstName, lastName }) {
  const userImg = document.createElement("img");
  userImg.src = photoSrc;
  userImg.alt = `${firstName} ${lastName}`;
  userImg.classList.add("userImg");
  return userImg;
}

function createUserInfo({ firstName, lastName, age }) {
  const userInfo = document.createElement("div");
  userInfo.classList.add("userInfo");
  userCardEl.append(userInfo);

  const userName = document.createElement("p");
  userName.classList.add("userName");
  userName.textContent = `${firstName} ${lastName}`;
  userInfo.append(userName);

  const userAge = document.createElement("span");
  userAge.classList.add("userAge");
  userAge.textContent = age;
  userInfo.append(userAge);

  return userInfo;
}

function createTrashIcon() {
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid");
  trashIcon.classList.add("fa-trash");
  trashIcon.classList.add("trashIcon");

  function deleteUser(e) {
    e.target.closest(".userCard").remove();
  }
  trashIcon.onclick = deleteUser;

  return trashIcon;
}
