const loginBtn = document.querySelector("#login-btn");
const emailIn = document.querySelector(".user-email-input");
const passIn = document.querySelector(".user-pass-input");
const loginForm = document.querySelector("#login-form");
class LoginPage {
  constructor() {
    loginBtn.addEventListener("click", this._login.bind(this));
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    passIn.addEventListener("input", (e) => {
      document.querySelector(".error-pass").style.display = "none";
    });
    emailIn.addEventListener("input", (e) => {
      document.querySelector(".error-email").style.display = "none";
    });
  }
  _login() {
    let uEmail = emailIn.value;
    let uPass = passIn.value;
    this._userCheck(uEmail, uPass);
  }
  _userCheck(uEmail, uPass) {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      let isLoggin = users.find(
        (u) => u.email == uEmail && u.password == uPass
      );
      let passErr = users.find((u) => u.email == uEmail && u.password != uPass);
      if (isLoggin) {
        window.open("../index.html", "_self");
      } else if (passErr) {
        document.querySelector(".error-pass").style.display = "block";
      } else {
        document.querySelector(".error-email").style.display = "block";
      }
    }
  }
}
let loginPage = new LoginPage();
