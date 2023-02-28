import ActiveUser from "./modules/ActiveUser.js";
import updateActiveUser from "./modules/updateActiveUser.js";

const cartSection = document.querySelector(".product-card-container");
const checkoutBtn = document.querySelector("#checkout-btn");


const showAllProducts = () => {
  let activeUser = ActiveUser();
  if (activeUser) {
    let cart = activeUser.cart;
    if (cart.length != 0) {
      cart.forEach((item) => {
        renderProduct(item);
      });
    } else {
      let emptyCart = `
      <div class="d-flex justify-content-center align-items-center flex-column h-100">
      <img src="/assets/icons/emptyCart.svg" class="empty-img" />
      </div>
      `;
      cartSection.insertAdjacentHTML("afterbegin", emptyCart);
    }
  } else {
    window.open("../pages/loginPage.html", "_self");
  }
};

const renderProduct = (product) => {
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
        <div class="col-sm-8">
          <div class="card-body product__details">
            <h5 class="card-title product__title">
            ${product.title}
            </h5>
            <div
              class="d-flex align-items-baseline justify-content-between"
            >
              <p class="product__price">$${product.price}</p>
              <i class="bx bx-x"></i>
            </div>
            <div
              class="d-flex align-items-baseline justify-content-between quantity-contanier"
            >
              <p>Quantity</p>
              <i class="bx bx-chevron-left quantityBtn dec"></i>
              <p class="product__quantity counter__text">${product.quantity}</p>
              <i class="bx bx-chevron-right quantityBtn inc"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
    `;

  cartSection.insertAdjacentHTML("afterbegin", html);
};

showAllProducts();
const quantityContanier = document.querySelectorAll(".quantity-contanier");

quantityContanier.forEach((i) =>
  i.addEventListener("click", (e) => {
    if (e.target.classList.contains("inc")) {
      e.target.parentElement.querySelector(".counter__text").textContent++;
    }

    if (e.target.classList.contains("dec")) {
      e.target.parentElement.querySelector(".counter__text").textContent--;
    }
  })
);

checkoutBtn.addEventListener("click", (e) => {
  console.log(
    e.target.parentElement.parentElement.parentElement.querySelector(
      ".counter__text"
    )
  );
  let activeUser = ActiveUser();
  activeUser.cart.forEach((c) => {
    c.quantity =
      e.target.parentElement.parentElement.parentElement.querySelector(
        ".counter__text"
      ).textContent;
  });
  localStorage.setItem("user", JSON.stringify(activeUser));
  updateActiveUser();
});



/*-----------Delete item from local storage and card-----------*/
const remove__item = document.querySelectorAll(".bx-x");

remove__item.forEach(element => {
  element.addEventListener("click", function(e){
    let activeUser = ActiveUser();
    if (activeUser) {
      let cart = activeUser.cart;
      let ItemtId = e.target.closest(".cart-item").dataset.id;
      const returnedArray = removefromarray(cart, ItemtId);
      activeUser.cart = returnedArray;
      localStorage.setItem("user", JSON.stringify(activeUser));
      updateActiveUser();
    }
  })
});


function removefromarray(array,id){
  const filteredarray = array.filter((item) => item.id != id);
  document.querySelector(`[data-id="${id}"]`).remove();
  return filteredarray;
  }





