var productContainer = document.getElementById("productContainer");
var filterElement = document.querySelectorAll(".filterElement");
var cardContainer = document.querySelector(".productsCard");

var allproducts = document.getElementById("allproducts");
var tables = document.getElementById("tables");
var chairs = document.getElementById("chairs");
var beds = document.getElementById("beds");
var decorations = document.getElementById("decorations");
var sofas = document.getElementById("sofas");

var fetchProducts = fetchData(); //calling fn

fetchData()
  .then((data) => displayAllProduct(data))
  .catch((err) => console.log(err)); //Show All Products
allproducts.style.textDecoration = "underline solid #61876E 5px";

export async function fetchData() {
  let response = await fetch("../data.json"); //fetch data by url
  let fetchedData = await response.text();
  let data = JSON.parse(fetchedData);
  return data;
}

export function displayAllProduct(fetchProducts) {
  let chairsArray = fetchProducts.chairs;
  let bedsArray = fetchProducts.beds;
  let mirrorsArray = fetchProducts.mirrors;
  let sofasArray = fetchProducts.sofas;
  let tablesArray = fetchProducts.tables;

  let productsArray = [];

  for (let i = 0; i < 5; i++) {
    productsArray.push(chairsArray[i]);
    productsArray.push(bedsArray[i]);
    productsArray.push(mirrorsArray[i]);
    productsArray.push(sofasArray[i]);
    productsArray.push(tablesArray[i]);
  }

  getArray(productsArray); //Get Products to Products Page

  return productsArray;
}

function getArray(productsArray) {
  productsArray.forEach((element) => {
    let productCard = `<div class="col-10 col-sm-8 col-md-4 col-lg-3 cardContainer">
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
                                        class="d-flex justify-content-between align-items-lg-center gap-2"
                                        >
                                        <i class="bx bx-money"></i>
                                        <p class="card-text price"><span> EGP </span>${element["sale"]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

    productContainer.insertAdjacentHTML("beforeend", productCard);
  });
}

function removeElements() {
  cardContainer.innerHTML = "";

  filterElement.forEach((element) => {
    element.style.textDecoration = "none";
  });
}

allproducts.addEventListener("click", function () {
  removeElements();
  allproducts.style.textDecoration = "underline solid #61876E 5px";
  fetchData()
    .then((data) => displayAllProduct(data))
    .catch((err) => console.log(err)); //Show All Products
});

tables.addEventListener("click", function () {
  removeElements();
  tables.style.textDecoration = "underline solid #61876E 5px";
  fetchData()
    .then((data) => getArray(data.tables))
    .catch((err) => console.log(err)); //Show tables
});

chairs.addEventListener("click", function () {
  removeElements();
  chairs.style.textDecoration = "underline solid #61876E 5px";
  fetchData()
    .then((data) => getArray(data.chairs))
    .catch((err) => console.log(err)); //Show chairs
});

decorations.addEventListener("click", function () {
  removeElements();
  decorations.style.textDecoration = "underline solid #61876E 5px";
  fetchData()
    .then((data) => getArray(data.mirrors))
    .catch((err) => console.log(err)); //Show tables
});

beds.addEventListener("click", function () {
  removeElements();
  beds.style.textDecoration = "underline solid #61876E 5px";
  fetchData()
    .then((data) => getArray(data.beds))
    .catch((err) => console.log(err)); //Show tables
});

sofas.addEventListener("click", function () {
  removeElements();
  sofas.style.textDecoration = "underline solid #61876E 5px";
  fetchData()
    .then((data) => getArray(data.sofas))
    .catch((err) => console.log(err)); //Show tables
});
