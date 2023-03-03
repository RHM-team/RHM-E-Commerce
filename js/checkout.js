import ActiveUser from "./modules/ActiveUser.js";
import updateActiveUser from "./modules/updateActiveUser.js";
import { v4 as uuidv4 } from "uuid";
import { Order } from "./models/order.js";

const stepButtons = document.querySelectorAll(".step-button");
const progress = document.querySelector("#progress");
const next = document.querySelectorAll(".showbtn");
const checkOutSubmit = document.getElementById("checkOutSubmit");
const prev = document.querySelectorAll(".back");
const backToShopBtn = document.getElementById("backbtn");
const paymentIcon = document.querySelectorAll(".payment-icon");
const paymentSubmit = document.getElementById("paymentSubmit");
const buyNowBtn = document.getElementById("buyNowBtn");
const summarySection = document.querySelector(".summary-section");
const allOrder = document.getElementById("order");
const backToHomeBtn = document.getElementById("backToHomeBtn");

var curStep = 0;

function goNext() {
  if (curStep < stepButtons.length) {
    curStep++;
  }
}
function goPrev() {
  if (curStep > 0) {
    curStep--;
  }
}
function progressBehave() {
  progress.setAttribute("value", (curStep * 100) / (stepButtons.length - 1));
  if (curStep < 3) {
    stepButtons[curStep].classList.add("done");
    if (stepButtons[curStep - 1])
      stepButtons[curStep - 1].firstElementChild.classList.remove("d-none");
    stepButtons[curStep].setAttribute("aria-expanded", true);
    Array.from(stepButtons)
      .filter((_, i) => i != curStep)
      .forEach((btn) => btn.setAttribute("aria-expanded", false));
  }
}
Array.from(next).forEach((nextBtu) => {
  nextBtu.addEventListener("click", (e) => {
    if (e.target == next[0]) {
      let nextSection = e.target.closest(".section").nextElementSibling;
      e.target.closest(".section").classList.add("d-none");
      summarySection.classList.remove("d-none");
      nextSection.classList.remove("d-none");
      nextSection.classList.add("test");
      goNext();
      progressBehave();
      showProducts();
    }
  });
});
Array.from(prev).forEach((prevBtu) => {
  prevBtu.addEventListener("click", (e) => {
    if (e.target != prev[0]) {
      if (e.target == prev[1]) {
        hideOrderSection();
        let prevSection = e.target.closest(".section").previousElementSibling;
        e.target.closest(".section").classList.add("d-none");
        prevSection.classList.remove("d-none");
        goPrev();
        progressBehave();
      } else {
        let prevSection = e.target.closest(".section").previousElementSibling;
        e.target.closest(".section").classList.add("d-none");
        prevSection.classList.remove("d-none");
        summarySection.classList.add("d-none");
        goPrev();
        progressBehave();
      }
    }
  });
});

backToShopBtn.addEventListener("click", function () {
  window.location.href = "../pages/productPage.html";
});

function removePaymentIconSelector() {
  paymentIcon.forEach((elem) => {
    elem.style.border = `solid 1px ${`var(--primary-color)`}`;
  });
}

paymentIcon.forEach((elem) => {
  elem.addEventListener("click", function () {
    removePaymentIconSelector();
    this.style.border = `solid 2px ${`var(--primary-color)`}`;
  });
});

/*------CheckOut Data Submit------*/
checkOutSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  let nextSection = e.target.closest(".section").nextElementSibling;
  e.target.closest(".section").classList.add("d-none");
  summarySection.classList.remove("d-none");
  nextSection.classList.remove("d-none");
  nextSection.classList.add("test");
  goNext();
  progressBehave();
});

/*------Payment Data Submit------*/
paymentSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  let nextSection = e.target.closest(".section").nextElementSibling;
  e.target.closest(".section").classList.add("d-none");
  summarySection.classList.remove("d-none");
  nextSection.classList.remove("d-none");
  nextSection.classList.add("test");
  goNext();
  progressBehave();
});

/*------Card Data Submit------*/
buyNowBtn.addEventListener("click", hideOrderSection);
buyNowBtn.addEventListener("click", function () {
  let activeUser = ActiveUser();
  let totalPrice = 0;
  let deliveryFees = 100;
  if (activeUser) {
    let cart = activeUser.cart;
    if (cart.length !== 0) {
      cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
    }
    let order = new Order(uuidv4(), new Date(), totalPrice + deliveryFees);
    activeUser.orders.push(order);
    activeUser.cart = [];
    localStorage.setItem("user", JSON.stringify(activeUser));
    updateActiveUser();
  }
});

backToHomeBtn.addEventListener("click", function () {
  window.location.href = "../index.html";
});

/*---------Your Order Section----------*/
function hideOrderSection() {
  summarySection.style.animation = "displayNone 2s ease-out";
  setTimeout(function () {
    summarySection.style.display = "none";
  }, 2000);
}

const showProducts = () => {
  let activeUser = ActiveUser();
  var totalPrice = 0;
  var totalItems = 0;
  var deliveryFees = 100;
  var itemsImg = [];

  if (activeUser) {
    let cart = activeUser.cart;
    if (cart.length !== 0) {
      cart.forEach((item) => {
        totalItems += Number(item.quantity);
        totalPrice += item.price * item.quantity;
        itemsImg.push(item.avatar);
        console.log(totalPrice, totalItems, deliveryFees);
      });
    } else {
      deliveryFees = 0;
    }
    addOrder(totalPrice, totalItems, deliveryFees, itemsImg);
  }
};

function addOrder(totalPrice, totalItems, deliveryFees, itemsImg) {
  allOrder.innerHTML = "";
  var order = `<div id="order" class="card">
                  <h5
                    class="card-title mt-3 mb-0 text-center"
                    style="letter-spacing: 0.2rem"
                  >
                    Your Order
                  </h5>
                  <hr />
                  <div class="card-body">
                      <div class="container totalPrice-section d-flex flex-column justify-content-center">
                        <div class="row flex-wrap justify-content-between">
                          <p class="w-auto text-start">Subtotal:</p>
                          <p class="w-auto text-end">EGP${totalPrice}</p>
                        </div>
                        <div class="row flex-wrap justify-content-between">
                          <p class="w-auto text-start">Delivery:</p>
                          <p class="w-auto text-end">EGP${deliveryFees}</p>
                        </div>
                        <div
                          class="row flex-wrap justify-content-between fs-6 fw-bold"
                        >
                          <p class="w-auto text-start">Total:</p>
                          <p class="w-auto text-end">EGP${
                            totalPrice + deliveryFees
                          }</p>
                        </div>
                        <hr class="mb-0 mt-0 text-secondary" />
                        <div class="count-elements">${totalItems} items</div>
                        <div class="summary-element-imgs">
                          <ul id="orderImageContainer" class="list-group list-group-flush list-group-horizontal gap-2 flex-wrap">
                          </ul>
                        </div>    
                      </div>
                  </div>
                </div>`;

  allOrder.insertAdjacentHTML("beforeend", order);
  var orderImageContainer = document.getElementById("orderImageContainer");

  itemsImg.forEach((elem) => {
    var OrderImage = `<li class="list-group-item border-0 m-0 summary-element p-2">
                        <img
                          class="summary-element-img"
                          src= ${elem}
                          alt="item-image"
                        />
                      </li>`;
    orderImageContainer.insertAdjacentHTML("beforeend", OrderImage);
  });
}
