import { Product } from "./product.js";
const product = document.querySelector(".products");

async function fetchData() {
  let response = await fetch("../data.json"); //fetch data by url
  let fetchedData = await response.text();
  let data = JSON.parse(fetchedData);
  return data;
}

export const getActiveuser = () => {
  const activeUser = JSON.parse(localStorage.getItem("user"));
  if (!activeUser) return;
  return activeUser;
};

export const addProduct = (product) => {
  let activeUser = getActiveuser();
  if (!activeUser) {
    window.open("../pages/loginPage.html", "_self");
  } else {
    if (activeUser.cart.find((cartItem) => cartItem.id == product.id)) {
      product.quantity++;
      let test = activeUser.cart.filter((i) => i.id != product.id);
      test.push(product);
      activeUser.cart = test;
    } else {
      activeUser.cart.push(product);
    }

    localStorage.setItem("user", JSON.stringify(activeUser));
  }
};
const addToCart = (e) => {
  if (e.target.classList.contains("bx-cart")) {
    let addItem = e.target.closest(".product-card");
    fetchData("../data.json").then((data) => {
      let productItem = allProduct(data).find(
        (item) => item.id == addItem.dataset.id
      );
      let product = new Product(
        productItem.id,
        productItem.category,
        productItem.title,
        productItem.description,
        productItem.avatar,
        productItem.price,
        1
      );

      addProduct(product);
    });
  }
};
product.addEventListener("click", (e) => addToCart(e));

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
  return productsArray;
}
