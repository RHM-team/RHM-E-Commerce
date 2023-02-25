// import { User } from "./user.js";
const product = document.querySelector("#testProduct");
// let users = [];
// users.push(new User("1", "mariam", "111", "mariam@gmail.com", [], false));
// users.push(new User("2", "hager", "111", "hager@gmail.com", [], true));
// const setLocalStorage = () => {
//   localStorage.setItem("users", JSON.stringify(users));
// };

const getActiveuser = () => {
  const data = JSON.parse(localStorage.getItem("users"));
  if (!data) return;
  return data.find((u) => u.status == true);
};

export const AddToCart = () => {
  let activeUser = getActiveuser();
  if (activeUser == undefined) {
    window.open("../pages/loginPage.html", "_self");
  } else {
    let users = JSON.parse(localStorage.getItem("users"));
    let activIndex = users.findIndex((u) => u.id == activeUser.id);
    users[activIndex].cart.push({
      id: 1,
      category: "chair",
      title: "leather and wood Chair",
      description:
        "Hot selling Cheap chair for the living room with white leather and a leg of high quality wood.",
      avatar: "./assets.chair.avif",
      price: 2500.0,
      sale: 2000.0,
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
};
// setLocalStorage();
product.addEventListener("click", () => AddToCart());
