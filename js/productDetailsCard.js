export async function fetchData() {
    let response = await fetch("../data.json"); //fetch data by url
    let fetchedData = await response.text();
    let data = JSON.parse(fetchedData);
    return data;
  }


let myModal = document.querySelector(".modal-dialog");

productContainer.addEventListener("click", function (e) {
    let productCardData = e.target.closest(".product-card");
    console.log(productCardData);
  fetchData().then((data) => {
      showDetilsData(allProduct(data).find((item) => item.id == productCardData.dataset.id));
      incAndDec();
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
  let detailesData =`

  <div class="modal-content">
  <div class="modal-body">
      <article class="product">
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
            <h2 class="counter__text">0</h2>
            <button class="count__btn dec">-</button>
          </div>
          <button class="add__button" data-icon="shopping-cart">Add to Cart</button>
        </div>
      </article>
      </div>
      </div>
`
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
    count <= -1 ? (count = 0) : count;
    countText.innerText = count;
  });
}


