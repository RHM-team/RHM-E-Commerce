import ActiveUser from "./ActiveUser.js";

export default function updateActiveUser() {
  let users = JSON.parse(localStorage.getItem("users"));
  let activeUser = ActiveUser();
  let newUsers = users.filter((u) => u.id != activeUser.id);
  newUsers.push(activeUser);
  localStorage.setItem("users", JSON.stringify(newUsers));
}
