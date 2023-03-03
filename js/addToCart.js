import { Product } from "./models/product.js";
import fetchData from "./modules/fetchData.js";
import getAllProduct from "./modules/getAllProduct.js";
import addProduct from "./modules/addProduct.js";
import { cartCounter } from "./cartCounter.js";

const product = document.querySelector(".products");
const notification1 = document.querySelector(".notification");

const addToCart = (e) => {
  if (e.target.classList.contains("add__to__cart")) {
    let addItem = e.target.closest(".product-container-card");
    fetchData().then((data) => {
      spinner.setAttribute("hidden", "");

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
      console.log(notification1);
      cartCounter(notification1);
    });
  }
};

product.addEventListener("click", (e) => {
  addToCart(e);
});
