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
  let html = `
    <div class="card mb-3 cart-item" data-id="${product.id}">
    <div class="container">
      <div class="row g-0">
        <div class="col-sm-4">
          <img
            src=${product.avatar}
            class="img-fluid rounded-3"
            alt="image"
            style="height: 150px;width:150px"
          />
        </div>
        <div class="col-sm-8 ">
          <div class="card-body product__details align-self-center ">
            <h5 class="card-title product__title">
            ${product.title}
            </h5>
            <div
              class="d-flex align-items-baseline justify-content-between"
            >
              <p class="product__price">EGP${product.price}</p>
              <i class="bx bx-x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
  
    `;
  container.insertAdjacentHTML("afterbegin", html);
}
const remove__item = document.querySelectorAll(".bx-x");
remove__item.forEach((e) =>
  e.addEventListener("click", function (e) {
    removeItemFromList("fav", e);
  })
);
