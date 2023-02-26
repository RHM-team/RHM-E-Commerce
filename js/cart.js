const cartSection = document.querySelector(".product-card-container");

// const decrease = document.querySelector(".dec");

const getActiveuser = () => {
  const activeUser = JSON.parse(localStorage.getItem("user"));
  if (!activeUser) return;
  return activeUser;
};

const showAllProducts = () => {
  let activeUser = getActiveuser();
  if (activeUser) {
    let cart = activeUser.cart;
    cart.forEach((item) => {
      renderProduct(item);
    });
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
// const increaseQuantity = () => {};

// decrement.addEventListener("click", () => {
//   count = count - 1;
//   console.log(count);
//   count <= -1 ? (count = 0) : count;
//   countText.innerText = count;
// });
showAllProducts();
const quantityContanier = document.querySelectorAll(".quantity-contanier");
quantityContanier.forEach((i) =>
  i.addEventListener("click", (e) => {
    if (e.target.classList.contains("inc")) {
      console.log(e.target.classList.contains("inc").nextElement);
    }
  })
);
