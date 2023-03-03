import ActiveUser from "./modules/ActiveUser.js";
import { removeItemFromList } from "./modules/removeItemFromList.js";
const container = document.querySelector(".product-card-container");
const backBtn = document.querySelector("#backbtn");

backBtn.addEventListener("click", (e) => {
  window.open("../pages/productPage.html", "_self");
});
let user = ActiveUser();
user.favorite.forEach((product) => {
  renderProduct(product);
});
function renderProduct(product) {
  let html = `<div class="card m-2 cart-item" data-id="${product.id}style="width: 18rem; ">
    <img src="${product.avatar}" class="card-img-top"  alt="" height="150px" style="object-fit: cover!important;">
  <div class="card-body">
  <div class="d-flex justify-content-between">
    <h5 class="card-title w-50">${product.title} </h5> 
             <i class="bx bx-x del-fav"></i>
    </div>
    <p class="card-text">EGP${product.price}  </p>
  </div>
</div>`;
  container.insertAdjacentHTML("afterbegin", html);
}
const remove__item = document.querySelectorAll(".bx-x");
remove__item.forEach((e) =>
  e.addEventListener("click", function (e) {
    removeItemFromList("fav", e);
  })
);
