import { Product } from "./models/product.js";
import fetchData from "./modules/fetchData.js";
import getAllProduct from "./modules/getAllProduct.js";
import addProduct from "./modules/addProduct.js";
import ActiveUser from "./modules/ActiveUser.js";

const product = document.querySelector(".products");
const notification = document.querySelector(".notification");

const addToCart = (e) => {
  if (e.target.classList.contains("add__to__cart")) {
    let addItem = e.target.closest(".product-container-card");
    fetchData().then((data) => {
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


product.addEventListener("click", (e) => {addToCart(e)});

// addCartBtn.addEventListener("click", () => console.log("jsj"));
