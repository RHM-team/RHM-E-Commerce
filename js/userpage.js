import ActiveUser from "./modules/ActiveUser.js";

const buttons = document.querySelectorAll(".logSign");
const userName = document.querySelectorAll(".user-name");
const userIcon = document.querySelector(".user-icon");
const fav = document.querySelector(".fav");
const logout = document.querySelector(".logout");
const order = document.querySelector(".order");
if (fav) {
  fav.style.cursor = "pointer";
  fav.addEventListener("click", (e) => {
    window.open("../pages/favoritePage.html", "_self");
  });
}
if (order) {
  order.style.cursor = "pointer";
  order.addEventListener("click", (e) => {
    window.open("../pages/ordersPage.html", "_self");
  });
}
let active = ActiveUser();
if (logout) {
  if (active) {
    logout.addEventListener("click", (e) => {
      localStorage.removeItem("user");
      location.reload();
    });
  }
}
