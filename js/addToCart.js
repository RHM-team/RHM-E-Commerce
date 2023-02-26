import { Product } from "./product.js";
import ActiveUser from "./modules/ActiveUser.js";
import fetchData from "./modules/fetchData.js";
import getAllProduct from "./modules/getAllProduct.js";

const product = document.querySelector(".products");

const addProduct = (product) => {
  let activeUser = ActiveUser();
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
      let productItem = getAllProduct(data).find(
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
