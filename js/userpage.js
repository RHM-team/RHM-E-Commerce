import ActiveUser from "./modules/ActiveUser.js";

const buttons = document.querySelectorAll(".logSign");
const userName = document.querySelectorAll(".user-name");
const userIcon = document.querySelector(".user-icon");
const fav = document.querySelector(".fav");
const logout = document.querySelector(".logout");

if (fav) {
  fav.style.cursor = "pointer";
  fav.addEventListener("click", (e) => {
    window.open("../pages/favoritePage.html");
  });
}
if (logout) {
  logout.addEventListener("click", (e) => {
    localStorage.removeItem("user");
    location.reload();
  });
}
let activeUser = ActiveUser();
if (activeUser) {
  console.log(activeUser);
  console.log(userName);
  userName.forEach((e) => (e.innerHTML = activeUser.name));
  buttons.forEach((e) => {
    e.style.display = "none";
  });
} else {
  userIcon.classList.add("d-none");
}
