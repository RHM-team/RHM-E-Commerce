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
const backToHomeBtn = document.getElementById("backToHomeBtn");

curStep = 0;

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
  summarySection.style.display = "none";
});

backToHomeBtn.addEventListener('click',function(){
  window.location.href = "../index.html";
})
