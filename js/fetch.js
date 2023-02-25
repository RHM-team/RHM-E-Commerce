var url = "../data.json";
var productContainer = document.getElementById("productContainer");

fetchData(url); //calling fn

async function fetchData(url) {
  let response = await fetch(url); //fetch data by url
  let fetchedData = await response.text();
  let chairsArray = JSON.parse(fetchedData).chairs;
  let bedsArray = JSON.parse(fetchedData).beds;
  let mirrorsArray = JSON.parse(fetchedData).mirrors;
  let sofasArray = JSON.parse(fetchedData).sofas;
  let tablesArray = JSON.parse(fetchedData).tables;

  let productsArray = [];

  for (let i = 0; i < 5; i++) {
    productsArray.push(chairsArray[i]);
    productsArray.push(bedsArray[i]);
    productsArray.push(mirrorsArray[i]);
    productsArray.push(sofasArray[i]);
    productsArray.push(tablesArray[i]);
  }
  console.log(productsArray);
  getArray(productsArray); //Get Products to Products Page

  return productsArray;
}

function getArray(productsArray) {
  productsArray.forEach((element) => {
    let productCard = `<div class="col-10 col-sm-8 col-md-4 col-lg-3">
                                <div  class="col-12 card product-card" data-id="${element["id"]}">
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
                                        <i class="bx bx-cart"></i>
                                        </div>
                                        <h5 class="card-title">${element["title"]}</h5>
                                        <p class="card-text product-desc">${element["description"]}</p>
                                    </div>
                                    <hr>
                                    <div
                                        class="card-body d-flex justify-content-between"
                                        style="margin-top: -6%"
                                    >
                                        <div
                                        class="d-flex justify-content-between align-items-lg-baseline"
                                        >
                                        <i class="bx bx-money"></i>
                                        <p class="card-text price"><span>$</span>${element["price"]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

    productContainer.insertAdjacentHTML("beforeend", productCard);
  });
}
