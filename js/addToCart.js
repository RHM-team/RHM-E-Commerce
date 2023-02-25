import { fetchData } from "./fetch.js";

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
    let addItem = e.target.closest(".product-card");
    fetchData("../data.json").then((data) =>
      AddToCart(allProduct(data).find((item) => item.id == addItem.dataset.id))
    );
  }
});

function allProduct(fetchProducts) {
  let chairsArray = fetchProducts.chairs;
  let bedsArray = fetchProducts.beds;
  let mirrorsArray = fetchProducts.mirrors;
  let sofasArray = fetchProducts.sofas;
  let tablesArray = fetchProducts.tables;

  let productsArray = [
    ...bedsArray,
    ...chairsArray,
    ...mirrorsArray,
    ...sofasArray,
    ...tablesArray,
  ];

  console.log(productsArray);

  return productsArray;
}
