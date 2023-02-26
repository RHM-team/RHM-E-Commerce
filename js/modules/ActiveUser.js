export default function ActiveUser() {
  let activeUser = JSON.parse(localStorage.getItem("user"));
  if (!activeUser) return;
  return activeUser;
}
