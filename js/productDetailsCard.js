import addProduct from "./modules/addProduct.js";
import getAllProduct from "./modules/getAllProduct.js";
import { Product } from "./models/product.js";
import fetchData from "./modules/fetchData.js";



let myModal = document.querySelector(".myModal");

productContainer.addEventListener("click", function (e) {
  let productCardData = e.target.closest(".product-card");
  console.log(productCardData);
  fetchData().then((data) => {
    showDetilsData(
      allProduct(data).find((item) => item.id == productCardData.dataset.id)
    );
    incAndDec();
    const addCartBtn = document.querySelector(".add__button");
    addCartBtn.addEventListener("click", (e) => {
      addToCart(e);
    });
  });
});

function allProduct(fetchProducts) {
  let chairsArray = fetchProducts.chairs;
  let bedsArray = fetchProducts.beds;
  let mirrorsArray = fetchProducts.mirrors;
  let sofasArray = fetchProducts.sofas;
  let tablesArray = fetchProducts.tables;

  let productsArray = [
    ...bedsArray,
    ...chairsArray,
    ...mirrorsArray,
    ...sofasArray,
    ...tablesArray,
  ];
  return productsArray;
}

function showDetilsData(newData) {
  let detailesData = `

  <div class="modal-content details__modal__content">
  <div class="modal-body details__modal__body">
      <article class="product product-container-card" data-id="${newData.id}">
        <picture class="product__img">
          <img src= ${newData.avatar} alt=" Gabrielle Essence Perfume bottle flat on a table">
        </picture>
        <div class="product__content">
          <p class="product__category">${newData.category}</p>
          <h1 class="product__title">${newData.title}</h1>
          <p class="product__description">${newData.description}</p>
        <div class="flex-group">
            <p class="product__price">EGP${newData.sale}</p>
            <s>
              <p class="product__original__price">EGP${newData.price}</p>
            </s>
          </div>
          <div class="count__container">
            <button class="count__btn inc">+</button>
            <h2 class="counter__text">1</h2>
            <button class="count__btn dec">-</button>
          </div>
          <button class="add__button add__to__cart" data-icon="shopping-cart">Add to Cart</button>
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

const addToCart = (e) => {
  let addItem = e.target.closest(".product-container-card");
  fetchData().then((data) => {
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
  });
};
