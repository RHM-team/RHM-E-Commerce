let buttons = document.querySelectorAll(".logSign");
buttons.forEach((e) => {
  e.style.display = "none";
});
const fav = document.querySelector(".fav");
if (fav) {
  fav.style.cursor = "pointer";
  fav.addEventListener("click", (e) => {
    window.open("../pages/favoritePage.html");
  });
}
