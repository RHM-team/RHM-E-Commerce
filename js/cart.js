const cartSection = document.querySelector(".cart-section");

const getActiveuser = () => {
  const data = JSON.parse(localStorage.getItem("users"));
  if (!data) return;
  return data.find((u) => u.active == true);
};

// const showAllProducts=()=>{
//     let activeUser = getActiveuser();
//     if (activeUser == undefined) {
//       window.open("../pages/loginPage.html", "_self");
//     } else {
//       let users = JSON.parse(localStorage.getItem("users"));
//       let activIndex = users.findIndex((u) => u.id == activeUser.id);
//     }
// }
const _renderProduct = (product) => {
  let html = `
    <div class="card mb-3 cart-item">
    <div class="container">
      <div class="row g-0">
        <div class="col-sm-4">
          <img
            src=${product.avatar}
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-sm-8">
          <div class="card-body product__details">
            <h5 class="card-title product__title">
              leather and wood Chair
            </h5>
            <div
              class="d-flex align-items-baseline justify-content-between"
            >
              <p class="product__price">$149.99</p>
              <i class="bx bx-x"></i>
            </div>
            <div
              class="d-flex align-items-baseline justify-content-between"
            >
              <p>Quantity</p>
              <i class="bx bx-chevron-left quantityBtn"></i>
              <p class="product__quantity">1</p>
              <i class="bx bx-chevron-right quantityBtn"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
    `;
};
