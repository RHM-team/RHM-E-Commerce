import { cartCounter } from "../cartCounter.js";
import ActiveUser from "./ActiveUser.js";
import updateActiveUser from "./updateActiveUser.js";

export default function addProduct(product) {
  let activeUser = ActiveUser();
  if (!activeUser) {
    window.open("../pages/loginPage.html", "_self");
  } else {
    if (activeUser.cart.find((cartItem) => cartItem.id == product.id)) {
      product.quantity++;
      let newProduct = activeUser.cart.filter((i) => i.id != product.id);
      newProduct.push(product);
      activeUser.cart = newProduct;
    } else {
      activeUser.cart.push(product);
    }
    localStorage.setItem("user", JSON.stringify(activeUser));
    updateActiveUser();
  }
}
