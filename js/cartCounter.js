import ActiveUser from "./modules/ActiveUser.js";

// const notification = document.querySelector(".notification");

export function cartCounter(notification) {
  let activeUser = ActiveUser();
  let totalItems = 0;
  if (activeUser) {
    let cart = activeUser.cart;
    if (cart.length != 0) {
      cart.forEach((elem) => {
        totalItems += Number(elem.quantity);
      });
      if (notification) {
        notification.innerHTML = totalItems;
        notification.style.display = "block";
        notification.style.display = "relative";
      }
    } else {
      notification.style.display = "none";
    }
  }
}
// setInterval(cartCounter, 1000);
