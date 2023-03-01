
import getAllProduct from "./modules/getAllProduct.js";
import fetchData from "./modules/fetchData.js";


var productContainer = document.getElementById("productContainer");
var searchInput = document.querySelector(".search__input");



    searchInput.addEventListener("input", function () {
        const value = searchInput.value.toLowerCase();
        clearContainer();
        fetchData().then((data) => {
            getAllProduct(data)
                .forEach(item => {
                    const isVisible = item.title.toLowerCase().includes(value);
                    if (isVisible) {
                        console.log(item);
                        showData(item);
                    }
                });
        });
    });
        
function showData(element) {
    let productCard = `
    <div class="col-10 col-sm-8 col-md-4 col-lg-3 cardContainer" >
                                      <div  class="col-12 card product-card product-container-card myCard"  data-toggle="modal" data-target="#exampleModalLong" data-id="${element["id"]}">
                                          <div class="card-body">
                                              <img
                                              src= ${element.avatar}
                                              class="card-img-top mb-3"
                                              alt=${element.title}
                                              height="220vh"
                                              style="border-radius: 5%"
                                              />
                                              <div class="social">
                                              <i class="bx bx-heart"></i>
                                              <i class="bx bx-cart add__to__cart"></i>
                                              </div>
                                              <h5 class="card-title text-truncate">${element.title}</h5>
                                              <p class="card-text product-desc text-truncate">${element.description}</p>
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
                                              <p class="card-text price"><span> EGP </span>${element.sale}</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>`;
    productContainer.insertAdjacentHTML("beforeend", productCard);
}


function clearContainer() {
    productContainer.innerHTML = "";
}