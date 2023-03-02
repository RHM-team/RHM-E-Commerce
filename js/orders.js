import ActiveUser from "./modules/ActiveUser.js";
const orderContainer = document.querySelector(".order-card-container");

let user = ActiveUser();

user.orders.forEach((order, index) => {
  renderOrder(order, index);
});
function renderOrder(order, index) {
  let html = `
    <div class="card mb-3 cart-item" }">
    <div class="container">
    
      <div class="row g-0 p-3">
      <div class="col-sm-1 text-center  order-count">${index + 1}</div>
    
            <div class="col-sm-4 order__id text-center">
            id: ${order.id.substring(0, 13)}
            </div>
              <div class="col-sm-3 order__summary text-center">${
                order.order_total
              } EGP</div>
              <div class="col-sm-4 order__date text-center"> ${
                order.date.toString().split("T")[0]
              }</div>
      </div>
    </div>
  </div>

    `;

  orderContainer.insertAdjacentHTML("beforeend", html);
}
