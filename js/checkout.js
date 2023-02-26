const stepButtons = document.querySelectorAll(".step-button");
const progress = document.querySelector("#progress");
const next = document.querySelectorAll(".showbtn");
const prev = document.querySelectorAll(".back");
const backToShopBtn = document.getElementById("backbtn");
const summarySection = document.querySelector(".summary-section");
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
  stepButtons[curStep].classList.add("done");
  if (stepButtons[curStep - 1])
    stepButtons[curStep - 1].firstElementChild.classList.remove("d-none");
  stepButtons[curStep].setAttribute("aria-expanded", true);
  Array.from(stepButtons)
    .filter((_, i) => i != curStep)
    .forEach((btn) => btn.setAttribute("aria-expanded", false));
}
Array.from(next).forEach((nextBtu) => {
  nextBtu.addEventListener("click", (e) => {
    let nextSection = e.target.closest(".section").nextElementSibling;
    e.target.closest(".section").classList.add("d-none");
    summarySection.classList.remove("d-none");
    nextSection.classList.remove("d-none");
    nextSection.classList.add("test");
    goNext();
    progressBehave();
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
})
