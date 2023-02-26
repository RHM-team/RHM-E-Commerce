import ActiveUser from "./modules/ActiveUser.js";

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
  if(curStep < 3){
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
    if(e.target == next[0]){
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
    if(e != prev[0]){
      let prevSection = e.target.closest(".section").previousElementSibling;
      e.target.closest(".section").classList.add("d-none");
      prevSection.classList.remove("d-none");
      summarySection.classList.add("d-none");
      goPrev();
      progressBehave();
    }
  });
});

backToShopBtn.addEventListener('click',function(){
  window.location.href = "../pages/productPage.html";
});

function removePaymentIconSelector(){
  paymentIcon.forEach((elem)=>{
    elem.style.border = `solid 1px ${`var(--primary-color)`}`
  });
}

paymentIcon.forEach((elem)=>{
  elem.addEventListener('click',function(){
    removePaymentIconSelector();
    this.style.border = `solid 2px ${`var(--primary-color)`}`;
  })
});

/*------CheckOut Data Submit------*/
checkOutSubmit.addEventListener('submit',function(e){
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
paymentSubmit.addEventListener('submit',function(e){
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
buyNowBtn.addEventListener('click',function(){
  summarySection.style.animation = "displayNone 2s ease-out";
  setTimeout(function(){
    summarySection.style.display = "none";
  },2000); 
});

backToHomeBtn.addEventListener('click',function(){
  window.location.href = "../index.html";
});

/*---------Your Order Section----------*/

const showProducts = () => {

  let activeUser = ActiveUser();
  var totalPrice = 0;
  var totalItems = 0;
  var deliveryFees = 2.75;
  var itemsImg = [];

  if (activeUser) {
    let cart = activeUser.cart;
    if(cart.length !== 0){
      cart.forEach((item) => {
        totalItems += Number(item.quantity);
        totalPrice += ((item.price) * (item.quantity));
        itemsImg.push(item.avatar);
        console.log(totalPrice,totalItems,deliveryFees)
      });
    }
    else{
      deliveryFees = 0;
    }
    addOrder(totalPrice,totalItems,deliveryFees,itemsImg);
  }
};

function addOrder(totalPrice,totalItems,deliveryFees,itemsImg){
  
  var order = `<div class="card-body">
                  <div class="container totalPrice-section w-100">
                    <div class="row flex-nowrap justify-content-between w-75">
                      <p>Subtotal:</p>
                      <p>$${totalPrice}</p>
                    </div>
                    <div class="row flex-nowrap justify-content-between w-75">
                      <p>Delivery:</p>
                      <p>$${deliveryFees}</p>
                    </div>
                    <div
                      class="row flex-nowrap justify-content-between fs-6 fw-bold w-75"
                    >
                      <p>Total:</p>
                      <p>$${totalPrice + deliveryFees}</p>
                    </div>
                    <hr class="mb-0 mt-0" />
                    <div class="count-elements">${totalItems} items</div>
                    <div class="summary-element-imgs">
                      <ul id="orderImageContainer" class="list-group list-group-flush list-group-horizontal gap-2">
                      </ul>
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
