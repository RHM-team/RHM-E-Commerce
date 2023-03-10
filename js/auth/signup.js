import { User } from "../user.js";
import { v4 as uuidv4 } from "uuid";

const nameInput = document.querySelector(".user-name-input");
const emailInput = document.querySelector(".user-email-input");
const passInput = document.querySelector(".user-pass-input");
const signupbtn = document.querySelector("#signup-btn");
const signupForm = document.querySelector(".signup-form");
const duplicatemsg = document.querySelector("#duplicated-lable");
class SignupPage {
  uName;
  uEmail;
  uPassword;
  user;
  // users = [];
  constructor() {
    this._activationSetting();
    emailInput.addEventListener("input", (E) => {
      duplicatemsg.style.display = "none";
    });
    signupbtn.addEventListener("click", this._setUserInLocalStorage.bind(this));
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }
  _setUserInLocalStorage() {
    this.uName = nameInput.value;
    this.uEmail = emailInput.value;
    this.uPassword = passInput.value;
    this.user = new User(
      uuidv4(),
      this.uName,
      this.uEmail,
      this.uPassword,
      [],
      true,
      [],
      []
    );
    let users = [];
    if (JSON.parse(localStorage.getItem("users"))) {
      users = JSON.parse(localStorage.getItem("users"));
      if (!this._isDuplicated(this.user.email)) {
        users.push(this.user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("user", JSON.stringify(this.user));
        window.open("../index.html", "_self");
        return this.user;
      }
    } else {
      users.push(this.user);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(this.user));

      window.open("../index.html", "_self");
    }
  }
  _isDuplicated(userEmail) {
    let users = [];
    users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      let emailDuplicated = users.find((u) => u.email === userEmail);
      if (emailDuplicated) {
        duplicatemsg.style.display = "block";
        return true;
      }
    }
    return false;
  }
  _activationSetting() {
    let users = [];
    users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      users.forEach((u) => (u.active = false));
      // console.log(users);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
}
const signupPage = new SignupPage();
