import ActiveUser from "./ActiveUser.js";
import updateActiveUser from "./updateActiveUser.js";

export function removeItemFromList(from, e) {
  let activeUser = ActiveUser();
  let list;
  if (activeUser) {
    if (from == "fav") {
      list = activeUser.favorite;
    } else if (from == "cart") { 
      list = activeUser.cart;
    }
    let ItemId = e.target.closest(".cart-item").dataset.id;
    const returnedArray = removeFromArray(list, ItemId);
    if (from == "fav") {
      activeUser.favorite = returnedArray;
    } else if (from == "cart") {
        activeUser.cart = returnedArray;
    }
    localStorage.setItem("user", JSON.stringify(activeUser));
    updateActiveUser();
  } 
}
function removeFromArray(array, id) {
  const filteredArray = array.filter((item) => item.id != id);
  document.querySelector(`[data-id="${id}"]`).remove();
  return filteredArray;
}
