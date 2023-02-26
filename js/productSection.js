var productSectionContainer = document.getElementById("productSectionContainer");

fetchData().then(data =>displaySamoleOfProducts(data)).catch(err=>console.log(err)); //Show Sample of Products

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
  
    let productsArray = [...chairsArray,...bedsArray,...mirrorsArray,...sofasArray,...tablesArray];

    let oldRandNum = [];
    let newRandNum = null;
    let flag;
    
    let sampleProductsArray = [];
    for(let i = 0 ; i < 4 ; i++){
        newRandNum = Math.floor(Math.random() * productsArray.length);
        sampleProductsArray.push(productsArray[newRandNum]);
    }

    // for(let i = 0 ; i < 4 ; i++){
    //     flag = true;
    //     newRandNum = Math.floor(Math.random() * productsArray.length);
    //     console.log(newRandNum);

    //     for(newRandNum in sampleProductsArray){
    //         i--;
    //         flag = false;
    //       break;  
    //     }

    //     if(flag == true){
    //         sampleProductsArray.push(productsArray[newRandNum]);
    //         oldRandNum.push(newRandNum); 
    //         console.log(oldRandNum)
    //     }
        
         
    // }

    console.log(sampleProductsArray);

    getSampleProducts(sampleProductsArray); //Get Products to Products Section 
  
    return sampleProductsArray;
  }

  function getSampleProducts(sampleProductsArray) {
    sampleProductsArray.forEach((element) => {
      let productCard = `<div class="col-10 col-sm-8 col-md-4 col-lg-3 cardContainer">
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
                                          <h5 class="card-title text-truncate">${element["title"]}</h5>
                                          <p class="card-text product-desc text-truncate">${element["description"]}</p>
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
  
    productSectionContainer.insertAdjacentHTML("beforeend", productCard);
  });
  }