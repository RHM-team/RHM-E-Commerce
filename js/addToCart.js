import { Product } from "./product.js";
const product = document.querySelector(".products");

async function fetchData() {
  let response = await fetch("../data.json"); //fetch data by url
  let fetchedData = await response.text();
  let data = JSON.parse(fetchedData);
  return data;
}

export const getActiveuser = () => {
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

product.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-cart")) {
    let addItem = e.target.closest(".product-card");
    fetchData("../data.json").then((data) => {
      let productItem = allProduct(data).find(
        (item) => item.id == addItem.dataset.id
      );
      //see if product in cart or not
      console.log(data);
      if (false) {
      } else {
        let product = new Product(
          productItem.id,
          productItem.category,
          productItem.title,
          productItem.description,
          productItem.avatar,
          productItem.price,
          1
        );

        AddToCart(product);
      }
    });
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
  return productsArray;
}
