import { cartCounter } from "./cartCounter.js";
import { Product } from "./models/product.js";
import addProduct from "./modules/addProduct.js";
import displayMessage from "./modules/displayMessage.js";
import fetchData from "./modules/fetchData.js";
import getAllProduct from "./modules/getAllProduct.js";

var spinner = document.getElementById("spinner");

var productSectionContainer = document.getElementById(
  "productSectionContainer"
);

fetchData()
  .then((data) => {
    spinner.setAttribute("hidden", "");
    displaySampleOfProducts(data);
  })
  .catch((err) => console.log(err)); //Show Sample of Products

function displaySampleOfProducts(fetchProducts) {
  let productsArray = getAllProduct(fetchProducts);

  let oldRandNum = [0];
  let newRandNum = null;
  let flag;

  let sampleProductsArray = [];
  for (let i = 1; i <= 4; i++) {
    newRandNum = Math.floor(Math.random() * productsArray.length);
    for (let j = 0; j < oldRandNum.length; j++) {
      if (newRandNum !== oldRandNum[j]) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      oldRandNum.push(newRandNum);
      sampleProductsArray.push(productsArray[newRandNum]);
    } else {
      i--;
    }
  }

  getSampleProducts(sampleProductsArray); //Get Products to Products Section

  return sampleProductsArray;
}

function getSampleProducts(sampleProductsArray) {
  sampleProductsArray.forEach((element) => {
    let productCard = `<div class="col-10 col-sm-8 col-md-4 col-lg-3 cardContainer products">
                                  <div  class="col-12 card product-card product-container-card" data-id="${element["id"]}" data-toggle="modal" data-target="#exampleModalLong">
                                      <div class="card-body">
                                          <img
                                          src= ${element["avatar"]}
                                          class="card-img-top mb-3"
                                          alt=${element["title"]}
                                          height="220vh"
                                          style="border-radius: 5%"
                                          />
                                          <div class="social">
                                          <i class="bx bx-heart add__to__fav"></i>
                                          <i class="bx bx-cart add__to__cart"></i>
                                          </div>
                                          <h5 class="card-title text-truncate">${element["title"]}</h5>
                                          <p class="card-text product-desc text-truncate">${element["description"]}</p>
                                      </div>
                                      <hr>
                                      <div
                                          class="card-body d-flex justify-content-between"
                                          style="margin-top: -6%"
                                      >
                                          <div
                                          class="d-flex justify-content-between align-items-md-center gap-2"
                                          >
                                          <i class="bx bx-money"></i>
                                          <p class="card-text price"><span>EGP </span>${element["sale"]}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>`;

    productSectionContainer.insertAdjacentHTML("beforeend", productCard);
  });
}

let myModal = document.querySelector(".myModal");

productSectionContainer.addEventListener("click", function (e) {
  let productCardData = e.target.closest(".product-card");
  if (e.target.classList.contains("add__to__cart")) {
    displayMessage("cart", "Added To Cart ", myModal);
  } else if (e.target.classList.contains("add__to__fav")) {
    displayMessage("fav", "Added To Favorites ", myModal);
  } else {
    fetchData().then((data) => {
      spinner.setAttribute("hidden", "");
      showDetilsData(
        getAllProduct(data).find(
          (item) => item.id == productCardData.dataset.id
        )
      );
      incAndDec();
      const addCartBtn = document.querySelector(".add__button");

      addCartBtn.addEventListener("click", (e) => {
        addToCart(e);
      });
    });
  }
});

function showDetilsData(newData) {
  let detailesData = `

  <div class="modal-content">
  <div class="modal-body">
  <article class="product product-container-card" data-id="${newData.id}">
  <picture class="product__img">
          <img src= ${newData.avatar} alt=" Gabrielle Essence Perfume bottle flat on a table">
        </picture>
        <div class="product__content">
          <p class="product__category">${newData.category}</p>
          <h1 class="product__title">${newData.title}</h1>
          <p class="product__description">${newData.description}</p>
        <div class="flex-group">
            <p class="product__price">EGP${newData.price}</p>
            <s>
              <p class="product__original__price">EGP${newData.sale}</p>
            </s>
          </div>
          <div class="count__container">
            <button class="count__btn inc">+</button>
            <h2 class="counter__text">1</h2>
            <button class="count__btn dec">-</button>
          </div>
          <button class="add__button" data-icon="shopping-cart">Add to Cart</button>
        </div>
      </article>
      </div>
      </div>
`;
  clearModel();
  myModal.insertAdjacentHTML("afterbegin", detailesData);
}

function clearModel() {
  myModal.innerHTML = "";
}

function incAndDec() {
  let increment = document.querySelector(".inc");
  let decrement = document.querySelector(".dec");
  let countText = document.querySelector(".counter__text");
  let count = 0;
  increment.addEventListener("click", () => {
    count++;
    countText.innerText = count;
  });
  decrement.addEventListener("click", () => {
    count--;
    count <= 0 ? (count = 1) : count;
    countText.innerText = count;
  });
}
const notification = document.querySelector(".notification");
function addToCart(e) {
  let addItem = e.target.closest(".product-container-card");
  fetchData().then((data) => {
    spinner.setAttribute("hidden", "");
    let productItem = getAllProduct(data).find(
      (item) => item.id == addItem.dataset.id
    );
    document
      .querySelector(".count__container")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("inc")) {
          e.target.parentElement.querySelector(".counter__text").textContent++;
        }

        if (e.target.classList.contains("dec")) {
          e.target.parentElement.querySelector(".counter__text").textContent--;
        }
      });
    let product = new Product(
      productItem.id,
      productItem.category,
      productItem.title,
      productItem.description,
      productItem.avatar,
      productItem.price,
      e.target.parentElement.querySelector(".counter__text").textContent
    );

    addProduct(product);
    cartCounter(notification);
  });
}
