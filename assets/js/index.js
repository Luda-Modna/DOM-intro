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

const userImg = document.createElement("img");
userImg.src = user.photoSrc;
userImg.alt = `${user.firstName} ${user.lastName}`;
userImg.classList.add("userImg");
userCardEl.append(userImg);

const divUserInfo = document.createElement("div");
divUserInfo.classList.add("userInfo");
userCardEl.append(divUserInfo);

const userName = document.createElement("p");
userName.classList.add("userName");
userName.textContent = `${user.firstName} ${user.lastName}`;
divUserInfo.append(userName);

const userAge = document.createElement("span");
userAge.classList.add("userAge");
userAge.textContent = user.age;
divUserInfo.append(userAge);

const trashIcon = document.createElement("i");
trashIcon.classList.add("fa-solid");
trashIcon.classList.add("fa-trash");
trashIcon.classList.add("trashIcon");

function deleteUser() {
  userCardEl.remove();
}

trashIcon.onclick = deleteUser;
userCardEl.append(trashIcon);
