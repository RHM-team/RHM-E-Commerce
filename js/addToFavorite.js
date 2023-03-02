import ActiveUser from "./modules/ActiveUser.js";
import updateActiveUser from "./modules/updateActiveUser.js";
import { Product } from "./models/product.js";
import fetchData from "./modules/fetchData.js";
import getAllProduct from "./modules/getAllProduct.js";

const product = document.querySelector(".products");

function addToFavorite(product) {
  let activeUser = ActiveUser();
  if (!activeUser) {
    window.open("../pages/loginPage.html", "_self");
  } else {
    let isAdded = activeUser.favorite.find((p) => p.id == product.id);
    if (!isAdded) {
      activeUser.favorite.push(product);
    }
    localStorage.setItem("user", JSON.stringify(activeUser));
    updateActiveUser();
  }
}
product.addEventListener("click", (e) => {
  if (e.target.classList.contains("add__to__fav")) {
    e.target.classList.remove("bx-heart");
    e.target.classList.add("bxs-heart");
    e.target.style.color = "red";
    let addItem = e.target.closest(".product-container-card");
    fetchData().then((data) => {
      spinner.setAttribute('hidden','');
      
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

      addToFavorite(product);
    });
  }
});
