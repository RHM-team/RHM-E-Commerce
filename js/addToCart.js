const product = document.querySelector(".products");
const getActiveuser = () => {
  const data = JSON.parse(localStorage.getItem("users"));
  if (!data) return;
  return data.find((u) => u.active == true);
};

export const AddToCart = (product) => {
  let activeUser = getActiveuser();
  if (activeUser == undefined) {
    window.open("../pages/loginPage.html", "_self");
  } else {
    let users = JSON.parse(localStorage.getItem("users"));
    let activIndex = users.findIndex((u) => u.id == activeUser.id);
    users[activIndex].cart.push(product);
    localStorage.setItem("users", JSON.stringify(users));
  }
};
// setLocalStorage();
product.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-cart")) {
    console.log(e.target.closest(".product-card"));
    // AddToCart()
  }
});
