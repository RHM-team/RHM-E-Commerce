var productSectionContainer = document.getElementById(
  "productSectionContainer"
);

fetchData()
  .then((data) => displaySamoleOfProducts(data))
  .catch((err) => console.log(err)); //Show Sample of Products

async function fetchData() {
  let response = await fetch("../data.json"); //fetch data by url
  let fetchedData = await response.text();
  let data = JSON.parse(fetchedData);
  return data;
}

function displaySamoleOfProducts(fetchProducts) {
  let chairsArray = fetchProducts.chairs;
  let bedsArray = fetchProducts.beds;
  let mirrorsArray = fetchProducts.mirrors;
  let sofasArray = fetchProducts.sofas;
  let tablesArray = fetchProducts.tables;

  let productsArray = [
    ...chairsArray,
    ...bedsArray,
    ...mirrorsArray,
    ...sofasArray,
    ...tablesArray,
  ];

  let oldRandNum = [0];
  let newRandNum = null;
  let flag;

  let sampleProductsArray = [];
  for (let i = 1; i <= 4; i++) {
    newRandNum = Math.floor(Math.random() * productsArray.length);
    for(let j = 0; j < oldRandNum.length; j++){
      if(newRandNum !== oldRandNum[j]){
        flag = true;
      }
      else{
        flag = false;
        break;
      }
    }
    if(flag){
      oldRandNum.push(newRandNum);
      sampleProductsArray.push(productsArray[newRandNum]);
    }
    else{
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
                                          <i class="bx bx-heart"></i>
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
  console.log(productCardData);
  fetchData().then((data) => {
    showDetilsData(
      allProduct(data).find((item) => item.id == productCardData.dataset.id)
    );
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
  let detailesData = `

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
