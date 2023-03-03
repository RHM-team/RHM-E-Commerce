import getAllProduct from "./modules/getAllProduct.js";
import fetchData from "./modules/fetchData.js";
import displayProduct from "./modules/displayProduct.js";


var productContainer = document.getElementById("productContainer");
var searchInput = document.querySelector(".search__input");



    searchInput.addEventListener("input", function () {
        const value = searchInput.value.toLowerCase();
        clearContainer();
        fetchData().then((data) => {
            spinner.setAttribute('hidden','');
            getAllProduct(data)
                .forEach(item => {
                    const isVisible = item.title.toLowerCase().includes(value);
                    if (isVisible) {
                        console.log(item);
                        displayProduct(item,productContainer);
                    }
                });
        });
    });

function clearContainer() {
    productContainer.innerHTML = "";
}