let increment = document.querySelector(".inc");
let decrement = document.querySelector(".dec");
let countText = document.querySelector(".counter__text");
let count = 0;
increment.addEventListener("click", () => {
  count++;
  console.log(count);
  countText.innerText = count;
});
decrement.addEventListener("click", () => {
  count = count - 1;
  console.log(count);
  count <= -1 ? (count = 0) : count;
  countText.innerText = count;
});
